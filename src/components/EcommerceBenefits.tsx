import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase'; // Adjust path
import type { EcommerceDetailsContent } from '../admin/sections/services-ecommerce/types';

interface PageSectionRow {
  id: string;
  enabled: boolean;
  content_en: EcommerceDetailsContent | string;
  content_ar: EcommerceDetailsContent | string;
}

const EcommerceDetails: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [data, setData] = useState<EcommerceDetailsContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      const { data: section, error } = await supabase
        .from('page_sections')
        .select('id, enabled, content_en, content_ar')
        .eq('id', 'ecommerce_details')
        .single<PageSectionRow>();

      if (cancelled) return;

      if (!error && section?.enabled) {
        const raw = i18n.language === 'ar' ? section.content_ar : section.content_en;
        const content: EcommerceDetailsContent | null =
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

  const revealClass = `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 lg:translate-y-12'}`;

  return (
    <section ref={sectionRef} dir={isRtl ? 'rtl' : 'ltr'} className="w-full py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 items-center">
        <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-1">
          {loading || !data ? (
            <div className="space-y-4 mb-6">
              <div className="h-10 w-3/4 rounded bg-gray-100 animate-pulse" />
              <div className="space-y-3 mt-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-5 w-full rounded bg-gray-100 animate-pulse" />
                ))}
              </div>
            </div>
          ) : (
            <>
              <h2 className={`text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] font-light mb-6 sm:mb-10 leading-[1.1] tracking-tight whitespace-pre-line ${revealClass}`} style={{ transitionDelay: '200ms' }}>
                {data.benefitsHeading}
              </h2>
              <ul className="space-y-0">
                {data.benefits?.map((item, index) => (
                  <li key={index} className={`flex items-start gap-4 sm:gap-5 py-4 sm:py-6 border-b border-gray-100 last:border-b-0 ${revealClass}`} style={{ transitionDelay: `${(index + 3) * 100}ms` }}>
                    <span className="text-[#36B936] text-xl sm:text-2xl mt-0.5 sm:mt-0 leading-none">•</span>
                    <span className="text-[#064423]/80 text-[15px] sm:text-[16px] lg:text-[18px] font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className={`relative w-full lg:w-1/2 flex flex-col lg:block rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-gray-50 lg:bg-transparent shadow-sm lg:shadow-2xl order-2 lg:order-2 ${revealClass}`} style={{ transitionDelay: '0ms' }}>
          {loading || !data ? (
            <div className="w-full h-[220px] sm:h-[300px] lg:h-[600px] bg-gray-100 animate-pulse" />
          ) : (
            <>
              <div className={`flex flex-col p-6 sm:p-8 lg:absolute lg:bottom-12 lg:p-0 z-10 order-1 lg:order-none ${isRtl ? 'lg:right-10 lg:left-10' : 'lg:left-10 lg:right-10'}`}>
                <h3 className="text-[#064423] lg:text-white text-2xl sm:text-3xl lg:text-[3rem] font-light leading-tight tracking-tight mb-3 sm:mb-4 whitespace-pre-line">{data.ctaHeading}</h3>
                <p className="text-[#064423]/70 lg:text-white/90 text-[14px] sm:text-[15px] lg:text-lg mb-6 sm:mb-10 max-w-md font-light leading-relaxed whitespace-pre-line">{data.ctaSubtext}</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    to={data.btnQuoteUrl || '/'}
                    className="w-full sm:w-auto justify-center bg-transparent lg:bg-[#064423] border border-[#064423] lg:border-none text-[#064423] lg:text-[#36B936] hover:bg-[#064423]/5 lg:hover:bg-[#053a1e] px-6 sm:px-8 py-3.5 lg:py-4 rounded-full text-[14px] sm:text-[15px] flex items-center gap-2 lg:shadow-lg transition-all duration-300"
                  >
                    <span className="text-xl font-extralight leading-none">+</span>
                    <span className="font-medium tracking-wide">{data.btnQuote}</span>
                  </Link>
                  <Link
                    to={data.btnContactUrl || '/'}
                    className="w-full sm:w-auto justify-center bg-transparent lg:bg-white border border-gray-300 lg:border-none text-[#064423] hover:bg-gray-100 lg:hover:bg-gray-50 px-6 sm:px-8 py-3.5 lg:py-4 rounded-full text-[14px] sm:text-[15px] flex items-center gap-2 lg:shadow-lg transition-all duration-300"
                  >
                    <span className="text-xl font-extralight leading-none">+</span>
                    <span className="font-medium tracking-wide">{data.btnContact}</span>
                  </Link>
                </div>
              </div>
              <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[600px] order-2 lg:order-none">
                <img src={data.image_url} alt={data.imgAlt || 'Zajel'} className="w-full h-full object-cover" />
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default EcommerceDetails;