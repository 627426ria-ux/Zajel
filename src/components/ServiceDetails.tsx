import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../supabase'; // TODO: adjust to this file's actual relative path to src/supabase.ts

/* ══════════════════════════════════════════════
   CMS content shape — mirrors ServiceDetailsEditor.tsx
   ══════════════════════════════════════════════ */
interface ServiceDetailsContent {
  ctaHeading: string;
  ctaDescription: string;
  ctaButton1Label: string;
  ctaButton1Link: string;
  ctaButton2Label: string;
  ctaButton2Link: string;
  image_url: string;
  listHeading: string;
  listItems: string[];
}

interface ServiceDetailsRow {
  content_en: ServiceDetailsContent;
  content_ar: ServiceDetailsContent;
}

// Per-language fallbacks — kept separate so missing Arabic content never
// silently renders English text (see earlier bug in GlobalFreightSection).
const FALLBACK_EN: ServiceDetailsContent = {
  ctaHeading: 'Ready to Get Started?',
  ctaDescription: 'Get a personalized quote for your shipping needs or speak with our team to learn more.',
  ctaButton1Label: 'Get a Quote',
  ctaButton1Link: '/quotation',
  ctaButton2Label: 'Track Shipment',
  ctaButton2Link: '/tracking',
  image_url: '',
  listHeading: 'Why Choose This Service?',
  listItems: [
    'Nationwide coverage reaching major cities and remote locations.',
    'Flexible pickup schedules designed around your business hours.',
    'Dedicated account managers for corporate clients',
    'Advanced real-time shipment tracking with full delivery visibility.',
    'Secure proof of delivery with digital signature confirmation.',
    'Transparent pricing with no hidden fees.',
  ],
};

const FALLBACK_AR: ServiceDetailsContent = {
  ctaHeading: 'هل أنت مستعد للبدء؟',
  ctaDescription: 'احصل على عرض سعر مخصص لاحتياجات الشحن الخاصة بك أو تحدث مع فريقنا لمعرفة المزيد.',
  ctaButton1Label: 'احصل على عرض سعر',
  ctaButton1Link: '/quotation',
  ctaButton2Label: 'تتبع الشحنة',
  ctaButton2Link: '/tracking',
  image_url: '',
  listHeading: 'لماذا تختار هذه الخدمة؟',
  listItems: [
    'تغطية على مستوى الدولة تصل إلى المدن الرئيسية والمناطق النائية.',
    'مواعيد استلام مرنة مصممة حول ساعات عمل شركتك.',
    'مدراء حسابات مخصصون للعملاء من الشركات',
    'تتبع الشحنات في الوقت الفعلي مع رؤية كاملة للتسليم.',
    'إثبات تسليم آمن مع تأكيد التوقيع الرقمي.',
    'أسعار شفافة بدون رسوم خفية.',
  ],
};

const ServiceDetails: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language?.toLowerCase().startsWith('ar');

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const [row, setRow] = useState<ServiceDetailsRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
      .select('content_en, content_ar')
      .eq('id', 'service_details_section')
      .single()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error('Failed to load service details content:', error.message);
        } else if (data) {
          setRow(data as ServiceDetailsRow);
          if (import.meta.env?.DEV) {
            console.log('[ServiceDetails] fetched row:', data);
          }
        }
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const content: ServiceDetailsContent =
    (isRtl ? row?.content_ar : row?.content_en) ?? (isRtl ? FALLBACK_AR : FALLBACK_EN);

  const imageUrl = content.image_url || (isRtl ? FALLBACK_AR.image_url : FALLBACK_EN.image_url);

  const revealClass = `transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 lg:translate-y-12'
  }`;

  return (
    <section
      ref={sectionRef}
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      {/* flex-col-reverse puts the Benefits List on top and the Image Card on the bottom for mobile */}
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row gap-12 sm:gap-16 lg:gap-20 items-center">

        {/* LEFT SIDE: Split Card on Mobile / Image with Overlay on Desktop */}
        <div
          className={`relative w-full lg:w-1/2 flex flex-col lg:block rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-gray-50 lg:bg-transparent shadow-sm lg:shadow-2xl ${revealClass}`}
          style={{ transitionDelay: '0ms' }}
        >

          {/* Mobile Text (Top) / Desktop Overlay (Bottom) */}
          <div className="flex flex-col p-6 sm:p-8 lg:absolute lg:bottom-12 lg:left-10 lg:right-10 lg:p-0 z-10 order-1 lg:order-none">
            {loading ? (
              <>
                <div className="h-8 w-2/3 rounded bg-gray-200 animate-pulse mb-4" />
                <div className="h-4 w-full rounded bg-gray-200 animate-pulse mb-2" />
                <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse mb-8" />
              </>
            ) : (
              <>
                <h3 className="text-[#064423] lg:text-white text-2xl sm:text-3xl lg:text-[3rem] font-light leading-tight tracking-tight mb-3 sm:mb-4">
                  {content.ctaHeading}
                </h3>
                <p className="text-[#064423]/70 lg:text-white/90 text-[14px] sm:text-[15px] lg:text-lg mb-6 sm:mb-10 max-w-md font-light leading-relaxed">
                  {content.ctaDescription}
                </p>
              </>
            )}

            {!loading && (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* BUTTON 1: Minimal Outline on Mobile | Original Solid Green on Desktop */}
                <a
                  href={content.ctaButton1Link || '/quotation'}
                  className="w-full sm:w-auto justify-center bg-transparent lg:bg-[#064423] border border-[#064423] lg:border-none text-[#064423] lg:text-[#36B936] hover:bg-[#064423]/5 lg:hover:bg-[#053a1e] px-6 sm:px-8 py-3.5 lg:py-4 rounded-full text-[14px] sm:text-[15px] font-medium lg:font-semibold flex items-center gap-2 lg:shadow-lg lg:hover:scale-105 lg:active:scale-95 transition-all duration-300"
                >
                  <span className="text-xl font-light leading-none">+</span> {content.ctaButton1Label}
                </a>

                {/* BUTTON 2: Minimal Outline on Mobile | Original Solid White on Desktop */}
                <a
                  href={content.ctaButton2Link || '/tracking'}
                  className="w-full sm:w-auto justify-center bg-transparent lg:bg-white border border-gray-300 lg:border-none text-[#064423] lg:text-[#064423] hover:bg-gray-100 lg:hover:bg-gray-50 px-6 sm:px-8 py-3.5 lg:py-4 rounded-full text-[14px] sm:text-[15px] font-medium lg:font-semibold flex items-center gap-2 lg:shadow-lg lg:hover:scale-105 lg:active:scale-95 transition-all duration-300"
                >
                  <span className="text-xl font-light leading-none">+</span> {content.ctaButton2Label}
                </a>
              </div>
            )}
          </div>

          {/* Image Container (Bottom attached on Mobile / Full Background on Desktop) */}
          <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[600px] order-2 lg:order-none bg-gray-100">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Zajel delivery handover"
                className="w-full h-full object-cover"
              />
            )}
            {/* Desktop Gradient Overlay - Hidden entirely on mobile for a clean minimal look */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

        </div>

        {/* RIGHT SIDE: Benefits List */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {loading ? (
            <div className="h-10 w-3/4 rounded bg-gray-100 animate-pulse mb-8" />
          ) : (
            <h2
              className={`text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] font-light mb-6 sm:mb-10 leading-[1.1] tracking-tight ${revealClass}`}
              style={{ transitionDelay: '200ms' }}
            >
              {content.listHeading}
            </h2>
          )}

          <ul className="space-y-0">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <li key={index} className="flex items-start gap-4 sm:gap-5 py-4 sm:py-6 border-b border-gray-100 last:border-b-0">
                    <div className="h-4 w-full rounded bg-gray-100 animate-pulse" />
                  </li>
                ))
              : content.listItems.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 sm:gap-5 py-4 sm:py-6 border-b border-gray-100 last:border-b-0 ${revealClass}`}
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    <span className="text-[#36B936] text-xl sm:text-2xl mt-0.5 sm:mt-0 leading-none">•</span>
                    <span className="text-[#064423]/80 text-[15px] sm:text-[16px] lg:text-[18px] font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ServiceDetails;