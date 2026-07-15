import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase'; // Adjust path
import type { IntlFreightContent } from '../admin/sections/services-intl/types';

interface PageSectionRow {
  id: string;
  enabled: boolean;
  content_en: IntlFreightContent | string;
  content_ar: IntlFreightContent | string;
}

const PlaneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#36B936]"><path d="M12 2a2 2 0 0 1 2 2v5.5l6 3.5v2.5l-6-2v4.5l2 1.5V21l-4-1.5-4 1.5v-1.5l2-1.5v-4.5l-6 2V13l6-3.5V4a2 2 0 0 1 2-2z" /></svg>);
const CartIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#36B936]"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>);

const GlobalFreightSection: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [data, setData] = useState<IntlFreightContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      const { data: section, error } = await supabase
        .from('page_sections')
        .select('id, enabled, content_en, content_ar')
        .eq('id', 'intl_service_freight')
        .single<PageSectionRow>();

      if (cancelled) return;

      if (!error && section?.enabled) {
        const raw = i18n.language === 'ar' ? section.content_ar : section.content_en;
        const content: IntlFreightContent | null =
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

          {/* Card 1 (Bullets) */}
          <div className={`bg-[#36B936] rounded-2xl aspect-square flex flex-col p-5 sm:p-6 ${animateBase} ${isVisible ? vis : hidden} hover:-translate-y-1.5 hover:shadow-lg`} style={{ transitionDelay: `150ms` }}>
            <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shrink-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50'}`} style={{ transitionDelay: '300ms' }}>
              <PlaneIcon />
            </div>
            {loading || !data ? (
              <div className="mt-4 space-y-2 flex-1">
                <div className="h-4 w-3/4 rounded bg-white/30 animate-pulse" />
                <div className="h-3 w-full rounded bg-white/20 animate-pulse" />
                <div className="h-3 w-2/3 rounded bg-white/20 animate-pulse" />
              </div>
            ) : (
              <>
                <h3 className={`text-white font-light leading-tight mt-4 sm:mt-5 whitespace-pre-line text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '350ms' }}>{data.card1_title}</h3>
                <div className={`mt-3 flex-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '450ms' }}>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {data.card1_bullets?.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/85 font-extralight text-[11px] sm:text-[13px] lg:text-[14px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '550ms' }}>
                  <Link
                    to={data.card1_buttonUrl || '/'}
                    className="bg-[#05361A] hover:bg-[#03200F] hover:scale-105 transition-all duration-200 text-[#36B936] rounded-full flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 text-[10px] sm:text-[11px] lg:text-[12px]"
                  >
                    <span className="text-xs font-extralight leading-none">+</span>
                    <span className="font-medium tracking-wide">{data.card1_buttonLabel}</span>
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Card 2 (Description) */}
          <div className={`bg-[#36B936] rounded-2xl aspect-square flex flex-col p-5 sm:p-6 ${animateBase} ${isVisible ? vis : hidden} hover:-translate-y-1.5 hover:shadow-lg`} style={{ transitionDelay: `300ms` }}>
            <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shrink-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50'}`} style={{ transitionDelay: '450ms' }}>
              <CartIcon />
            </div>
            {loading || !data ? (
              <div className="mt-4 space-y-2 flex-1">
                <div className="h-4 w-3/4 rounded bg-white/30 animate-pulse" />
                <div className="h-3 w-full rounded bg-white/20 animate-pulse" />
                <div className="h-3 w-2/3 rounded bg-white/20 animate-pulse" />
              </div>
            ) : (
              <>
                <h3 className={`text-white font-light leading-tight mt-4 sm:mt-5 whitespace-pre-line text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '500ms' }}>{data.card2_title}</h3>
                <div className={`mt-3 flex-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '600ms' }}>
                  <p className="text-white/80 font-extralight leading-relaxed text-[10px] sm:text-[12px] lg:text-[13px] whitespace-pre-line">{data.card2_description}</p>
                </div>
                <div className={`mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '700ms' }}>
                  <Link
                    to={data.card2_buttonUrl || '/'}
                    className="bg-[#05361A] hover:bg-[#03200F] hover:scale-105 transition-all duration-200 text-[#36B936] rounded-full flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 text-[10px] sm:text-[11px] lg:text-[12px]"
                  >
                    <span className="text-xs font-extralight leading-none">+</span>
                    <span className="font-medium tracking-wide">{data.card2_buttonLabel}</span>
                  </Link>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalFreightSection;