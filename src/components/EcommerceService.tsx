import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase'; // Adjust path
import type { EcommerceCardsContent } from '../admin/sections/services-ecommerce/types';

interface PageSectionRow {
  id: string;
  enabled: boolean;
  content_en: EcommerceCardsContent | string;
  content_ar: EcommerceCardsContent | string;
}

const BagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#36B936]">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const EcommerceSection: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [data, setData] = useState<EcommerceCardsContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      const { data: section, error } = await supabase
        .from('page_sections')
        .select('id, enabled, content_en, content_ar')
        .eq('id', 'ecommerce_cards')
        .single<PageSectionRow>();

      if (cancelled) return;

      if (!error && section?.enabled) {
        const raw = i18n.language === 'ar' ? section.content_ar : section.content_en;
        const content: EcommerceCardsContent | null =
          typeof raw === 'string' ? JSON.parse(raw) : (raw ?? null);
        setData(content);
      } else {
        setData(null);
      }
      setLoading(false);
    };

    fetchData();
    return () => { cancelled = true; };
  }, [i18n.language]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);

      const rect = sectionRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        setIsVisible(true);
        observer.disconnect();
      }
    }

    return () => observer.disconnect();
  }, []);

  if (!loading && !data) return null;

  const animateBase = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";
  const hidden = "opacity-0 translate-y-10";
  const vis = "opacity-100 translate-y-0";

  const cards = data
    ? [
        { title: data.card1_title, description: data.card1_description, buttonLabel: data.card1_buttonLabel, buttonUrl: data.card1_buttonUrl },
        { title: data.card2_title, description: data.card2_description, buttonLabel: data.card2_buttonLabel, buttonUrl: data.card2_buttonUrl },
      ]
    : [];

  return (
    <section ref={sectionRef} dir={isRtl ? 'rtl' : 'ltr'} className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[680px] mx-auto">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-14 ${animateBase} ${isVisible ? vis : hidden}`}>
          {loading || !data ? (
            <div className="mx-auto h-10 w-2/3 rounded bg-gray-100 animate-pulse" />
          ) : (
            <h2 className="font-light text-[#0A4D26] leading-[1.15] text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] whitespace-pre-line">{data.heading}</h2>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {loading || !data
            ? [0, 1].map((i) => (
                <div key={i} className="bg-gray-100 rounded-2xl aspect-square animate-pulse" />
              ))
            : cards.map((card, i) => (
                <div
                  key={i}
                  className={`bg-[#36B936] rounded-2xl aspect-square flex flex-col p-5 sm:p-6 ${animateBase} ${isVisible ? vis : hidden} hover:-translate-y-1.5 hover:shadow-lg hover:shadow-green-300/30`}
                  style={{ transitionDelay: `${150 + i * 150}ms` }}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shrink-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50'}`}
                    style={{ transitionDelay: `${300 + i * 150}ms` }}
                  >
                    <BagIcon />
                  </div>

                  <h3
                    className={`text-white font-light leading-tight mt-4 sm:mt-5 whitespace-pre-line text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                    style={{ transitionDelay: `${400 + i * 150}ms` }}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-white/80 font-extralight leading-relaxed mt-2 flex-1 text-[10px] sm:text-[12px] lg:text-[13px] transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] whitespace-pre-line ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                    style={{ transitionDelay: `${500 + i * 150}ms` }}
                  >
                    {card.description}
                  </p>

                  <div
                    className={`mt-4 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                    style={{ transitionDelay: `${600 + i * 150}ms` }}
                  >
                    <Link
                      to={card.buttonUrl || '/'}
                      className="bg-[#05361A] hover:bg-[#03200F] hover:scale-105 transition-all duration-200 text-[#36B936] rounded-full flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 text-[10px] sm:text-[11px] lg:text-[12px]"
                    >
                      <span className="text-xs font-extralight leading-none">+</span>
                      <span className="font-medium tracking-wide">{card.buttonLabel}</span>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;