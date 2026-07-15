import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase'; // Adjust path

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

interface GlobalFreightCard {
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
}

interface GlobalFreightContent {
  heading: string;
  cards: [GlobalFreightCard, GlobalFreightCard];
}

interface GlobalFreightRow {
  enabled: boolean;
  content_en: GlobalFreightContent;
  content_ar: GlobalFreightContent;
}

const emptyCard: GlobalFreightCard = {
  titleLine1: '',
  titleLine2: '',
  description: '',
  buttonLabel: '',
  buttonUrl: '/',
};

const FALLBACK_EN: GlobalFreightContent = {
  heading: 'Global Freight\nSolutions',
  cards: [
    { titleLine1: 'Air', titleLine2: 'Freight', description: 'Fast international air freight to and from the UAE.', buttonLabel: 'Learn More', buttonUrl: '/' },
    { titleLine1: 'Ocean', titleLine2: 'Freight', description: 'Cost-effective sea freight for larger shipments.', buttonLabel: 'Learn More', buttonUrl: '/' },
  ],
};

const FALLBACK_AR: GlobalFreightContent = {
  heading: 'حلول\nالشحن العالمي',
  cards: [
    { titleLine1: 'الشحن', titleLine2: 'الجوي', description: 'شحن جوي دولي سريع من وإلى الإمارات.', buttonLabel: 'اعرف المزيد', buttonUrl: '/' },
    { titleLine1: 'الشحن', titleLine2: 'البحري', description: 'شحن بحري فعّال من حيث التكلفة للشحنات الكبيرة.', buttonLabel: 'اعرف المزيد', buttonUrl: '/' },
  ],
};

const GlobalFreightSection = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language?.toLowerCase().startsWith('ar');

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [row, setRow] = useState<GlobalFreightRow | null>(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    let cancelled = false;

    supabase
      .from('page_sections')
      .select('enabled, content_en, content_ar')
      .eq('id', 'global_freight_section')
      .single()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error('Failed to load global freight content:', error.message);
        } else if (data) {
          setRow(data as GlobalFreightRow);
        }
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Falls back to hardcoded defaults if disabled or missing — intentional,
  // unlike the other sections which hide entirely when disabled.
  const content: GlobalFreightContent =
    row?.enabled && (isRtl ? row?.content_ar : row?.content_en)
      ? (isRtl ? row.content_ar : row.content_en)
      : (isRtl ? FALLBACK_AR : FALLBACK_EN);

  const cards = [content.cards?.[0] || emptyCard, content.cards?.[1] || emptyCard];

  const animateBase = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";
  const hidden = "opacity-0 translate-y-10";
  const vis = "opacity-100 translate-y-0";

  return (
    <section
      ref={sectionRef}
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[680px] mx-auto">
        <div
          className={`text-center mb-10 sm:mb-12 lg:mb-14 ${animateBase} ${isVisible ? vis : hidden}`}
          style={{ transitionDelay: '0ms' }}
        >
          {loading ? (
            <div className="mx-auto h-10 w-2/3 rounded bg-gray-100 animate-pulse" />
          ) : (
            <h2 className="font-light text-[#0A4D26] leading-[1.15] text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] whitespace-pre-line">
              {content.heading}
            </h2>
          )}
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
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shrink-0
                            transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                            ${isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50'}`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <PlaneIcon />
              </div>

              {loading ? (
                <div className="mt-4 space-y-2 flex-1">
                  <div className="h-4 w-3/4 rounded bg-white/30 animate-pulse" />
                  <div className="h-3 w-full rounded bg-white/20 animate-pulse" />
                  <div className="h-3 w-2/3 rounded bg-white/20 animate-pulse" />
                </div>
              ) : (
                <>
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

                  <p
                    className={`text-white/80 font-extralight leading-relaxed mt-2 flex-1
                                text-[10px] sm:text-[12px] lg:text-[13px]
                                transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                    style={{ transitionDelay: `${500 + i * 150}ms` }}
                  >
                    {card.description}
                  </p>

                  <div
                    className={`mt-4 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                    style={{ transitionDelay: `${600 + i * 150}ms` }}
                  >
                    <Link
                      to={card.buttonUrl || '/'}
                      className="bg-[#05361A] hover:bg-[#03200F] hover:scale-105
                                 transition-all duration-200
                                 text-[#36B936] rounded-full
                                 flex items-center gap-1.5
                                 px-3.5 py-2 sm:px-4 sm:py-2.5
                                 text-[10px] sm:text-[11px] lg:text-[12px]"
                    >
                      <span className="text-xs font-extralight leading-none">+</span>
                      <span className="font-medium tracking-wide">{card.buttonLabel}</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFreightSection;