import  { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const PlaneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-[#36B936]"
  >
    <path d="M12 2a2 2 0 0 1 2 2v5.5l6 3.5v2.5l-6-2v4.5l2 1.5V21l-4-1.5-4 1.5v-1.5l2-1.5v-4.5l-6 2V13l6-3.5V4a2 2 0 0 1 2-2z" />
  </svg>
);

const GlobalFreightSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const animateBase = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";
  const hidden = "opacity-0 translate-y-10";
  const vis = "opacity-100 translate-y-0";

  const cards = [
    {
      titleLine1: t('globalFreight.cards.0.titleLine1'),
      titleLine2: t('globalFreight.cards.0.titleLine2'),
      description: t('globalFreight.cards.0.description'),
      buttonLabel: t('globalFreight.cards.0.buttonLabel'),
    },
    {
      titleLine1: t('globalFreight.cards.1.titleLine1'),
      titleLine2: t('globalFreight.cards.1.titleLine2'),
      description: t('globalFreight.cards.1.description'),
      buttonLabel: t('globalFreight.cards.1.buttonLabel'),
    },
  ];

  return (
    <section
      ref={sectionRef}
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[680px] mx-auto">

        {/* Heading */}
        <div
          className={`text-center mb-10 sm:mb-12 lg:mb-14 ${animateBase} ${isVisible ? vis : hidden}`}
          style={{ transitionDelay: '0ms' }}
        >
          <h2 className="font-light text-[#0A4D26] leading-[1.15] text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] whitespace-pre-line">
            {t('globalFreight.heading')}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-[#36B936] rounded-2xl aspect-square flex flex-col p-5 sm:p-6
                          ${animateBase} ${isVisible ? vis : hidden}
                          hover:-translate-y-1.5 hover:shadow-lg hover:shadow-green-300/30`}
              style={{ transitionDelay: `${150 + i * 150}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shrink-0
                            transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                            ${isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50'}`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <PlaneIcon />
              </div>

              {/* Title */}
              <h3
                className={`text-white font-light leading-tight mt-4 sm:mt-5
                            text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem]
                            transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                {card.titleLine1}
                <br />
                {card.titleLine2}
              </h3>

              {/* Description */}
              <p
                className={`text-white/80 font-extralight leading-relaxed mt-2 flex-1
                            text-[10px] sm:text-[12px] lg:text-[13px]
                            transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${500 + i * 150}ms` }}
              >
                {card.description}
              </p>

              {/* Button */}
              <div
                className={`mt-4 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${600 + i * 150}ms` }}
              >
                <button
                  className="bg-[#05361A] hover:bg-[#03200F] hover:scale-105
                             transition-all duration-200
                             text-[#36B936] rounded-full
                             flex items-center gap-1.5
                             px-3.5 py-2 sm:px-4 sm:py-2.5
                             text-[10px] sm:text-[11px] lg:text-[12px]"
                >
                  <span className="text-xs font-extralight leading-none">+</span>
                  <span className="font-medium tracking-wide">{card.buttonLabel}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalFreightSection;