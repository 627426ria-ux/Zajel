import React, { useEffect, useRef, useState } from 'react';

const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 text-[#36B936]">
    <path d="M12 2a2 2 0 0 1 2 2v5.5l6 3.5v2.5l-6-2v4.5l2 1.5V21l-4-1.5-4 1.5v-1.5l2-1.5v-4.5l-6 2V13l6-3.5V4a2 2 0 0 1 2-2z" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 text-[#36B936]">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const cards = [
  {
    Icon: PlaneIcon,
    title: 'Global Freight\nSolutions',
    type: 'bullets',
    bullets: ['Air Freight', 'Sea Freight', 'GCC Road Freight'],
    buttonLabel: 'Book Now',
    delay: 150,
  },
  {
    Icon: CartIcon,
    title: 'E-Commerce',
    type: 'description',
    description:
      'Powered by an extensive fleet and regional network, our road freight services connect businesses across the GCC with consistent, on-time deliveries.',
    buttonLabel: 'Get a Quote',
    delay: 300,
  },
];

const GlobalFreightSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const animateBase = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";
  const hidden = "opacity-0 translate-y-10";
  const vis = "opacity-100 translate-y-0";

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[680px] mx-auto">

        {/* Heading */}
        <div
          className={`text-center mb-10 sm:mb-12 lg:mb-14 ${animateBase} ${isVisible ? vis : hidden}`}
          style={{ transitionDelay: '0ms' }}
        >
          <h2 className="font-light text-[#0A4D26] leading-[1.15]
                         text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem]">
            Global Freight Solutions
            <br />
            Built for Speed
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-[#36B936] rounded-2xl aspect-square flex flex-col p-5 sm:p-6
                          ${animateBase} ${isVisible ? vis : hidden}
                          hover:-translate-y-1.5 hover:shadow-lg hover:shadow-green-300/30`}
              style={{ transitionDelay: `${card.delay}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shrink-0
                            transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                            ${isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50'}`}
                style={{ transitionDelay: `${card.delay + 150}ms` }}
              >
                <card.Icon />
              </div>

              {/* Title */}
              <h3
                className={`text-white font-light leading-tight mt-4 sm:mt-5
                            text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem]
                            transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${card.delay + 200}ms` }}
              >
                {card.title.split('\n').map((line, j, arr) => (
                  <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                ))}
              </h3>

              {/* Bullets or Description */}
              <div
                className={`mt-3 flex-1 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${card.delay + 300}ms` }}
              >
                {card.type === 'bullets' && card.bullets ? (
                  <ul className="space-y-1.5 sm:space-y-2">
                    {card.bullets.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/85 font-extralight
                                             text-[11px] sm:text-[13px] lg:text-[14px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/80 font-extralight leading-relaxed
                                text-[10px] sm:text-[12px] lg:text-[13px]">
                    {card.description}
                  </p>
                )}
              </div>

              {/* CTA Button — pinned inside each card */}
              <div
                className={`mt-4 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${card.delay + 400}ms` }}
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