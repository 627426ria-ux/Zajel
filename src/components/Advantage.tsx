import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async'; // 1. ADDED IMPORT
import { useTranslation } from 'react-i18next';
import { supabase } from '../supabase';

const AdvantageSection: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from('page_sections')
          .select('content_en, content_ar')
          .eq('id', 'advantage_section')
          .single();

        if (error) throw error;
        if (data) setContent(isRtl ? data.content_ar : data.content_en);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchContent();
  }, [isRtl]);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    const fallbackTimer = setTimeout(() => setIsVisible(true), 500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (loading || !content) {
    return <div style={{ minHeight: '50vh', background: '#f9fafb' }} />;
  }

  return (
    <>
      {/* 2. ADDED SEO INJECTION */}
      <Helmet>
        <title>{content.seo?.metaTitle || "Zajel Logistics"}</title>
        <meta name="description" content={content.seo?.metaDescription || "Professional courier services."} />
      </Helmet>

      <style>{`
        .advantage-section {
          font-family: 'Manrope', sans-serif;
          padding: clamp(48px, 8vw, 112px) clamp(16px, 4vw, 48px);
          background: #f9fafb;
          overflow: hidden;
        }
        /* Matches Hero h1-style: 36-44px, weight 400 */
        .adv-heading { font-size: 36px; font-weight: 400; color: #064423; line-height: 1.2; letter-spacing: -0.01em; margin-bottom: 10px; }
        @media (min-width: 768px) { .adv-heading { font-size: 44px; } }
        /* Matches Hero bc1-style: 14-16px, weight 400 */
        .adv-subtext { font-size: 14px; font-weight: 400; color: #6b7280; line-height: 1.6; max-width: 480px; margin: 0 auto; }
        @media (min-width: 768px) { .adv-subtext { font-size: 16px; } }
        .bento-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(12px, 1.5vw, 20px); }
        @media (min-width: 768px) { .bento-grid { grid-template-columns: repeat(3, 1fr); grid-auto-rows: clamp(200px, 22vw, 300px); } }
        .adv-card { background: #36B936; border-radius: clamp(1.25rem, 2vw, 2.5rem); overflow: hidden; position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        @keyframes slideUpFade { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        .reveal-item { opacity: 0; }
        .reveal-item.is-visible { animation: slideUpFade 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .delay-1 { animation-delay: 100ms; } .delay-2 { animation-delay: 200ms; } .delay-3 { animation-delay: 300ms; } .delay-4 { animation-delay: 400ms; }
        .card-globe { grid-column: span 2; min-height: clamp(140px, 36vw, 220px); display: flex; flex-direction: row; align-items: center; }
        @media (min-width: 768px) { .card-globe { grid-column: span 1; grid-row: span 2; min-height: unset; flex-direction: column; align-items: stretch; } }
        .globe-text { width: 58%; padding: clamp(16px, 2.5vw, 36px) clamp(16px, 2.5vw, 32px); display: flex; flex-direction: column; justify-content: center; position: relative; z-index: 10; order: 1; }
        @media (min-width: 768px) { .globe-text { width: 100%; margin-top: auto; order: 2; } }
        .globe-image-wrap { width: 42%; height: 100%; position: relative; display: flex; align-items: center; justify-content: center; order: 2; flex-shrink: 0; }
        @media (min-width: 768px) { .globe-image-wrap { width: 100%; height: 55%; order: 1; padding-top: clamp(16px, 2vw, 28px); } }
        .globe-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 170%; height: 170%; background: radial-gradient(circle, rgba(255,255,255,0.38) 0%, transparent 65%); pointer-events: none; }
        .globe-img { width: clamp(160px, 36vw, 500px); max-width: 110%; object-fit: contain; position: relative; z-index: 10; filter: drop-shadow(0 8px 20px rgba(0,0,0,0.18)); }
        @media (min-width: 768px) { .globe-img { width: clamp(220px, 100%, 450px); } }
        .card-text-only { grid-column: span 1; display: flex; flex-direction: column; justify-content: center; padding: clamp(16px, 2.5vw, 36px) clamp(16px, 2.5vw, 32px); }
        .card-handling { grid-column: span 2; min-height: clamp(140px, 36vw, 220px); display: flex; flex-direction: row; align-items: stretch; }
        @media (min-width: 768px) { .card-handling { min-height: unset; } }
        .handling-text { width: 55%; padding: clamp(16px, 2.5vw, 36px) clamp(16px, 2.5vw, 32px); display: flex; flex-direction: column; justify-content: center; position: relative; z-index: 10; flex-shrink: 0; }
        .handling-img-wrap { position: absolute; right: 0; top: 0; width: 52%; height: 100%; z-index: 0; }
        [dir="rtl"] .handling-img-wrap { right: auto; left: 0; }
        .handling-img-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: left center; display: block; }
        .handling-gradient { position: absolute; inset: 0; background: linear-gradient(to right, #36B936 0%, rgba(54,185,54,0.85) 30%, rgba(54,185,54,0.2) 65%, transparent 100%); pointer-events: none; }
        [dir="rtl"] .handling-gradient { background: linear-gradient(to left, #36B936 0%, rgba(54,185,54,0.85) 30%, rgba(54,185,54,0.2) 65%, transparent 100%); }
        /* Matches Hero h3-style: weight 400, restrained size for card titles */
        .card-title { font-size: 18px; font-weight: 400; color: white; line-height: 1.25; letter-spacing: -0.01em; margin-bottom: 6px; white-space: pre-line; }
        @media (min-width: 768px) { .card-title { font-size: 22px; } }
        .card-desc { font-size: 13px; font-weight: 400; color: rgba(255, 255, 255, 0.9); line-height: 1.6; }
      `}</style>

      <section ref={sectionRef} className="advantage-section" dir={isRtl ? 'rtl' : 'ltr'}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className={`text-center reveal-item ${isVisible ? 'is-visible' : ''}`} style={{ marginBottom: 'clamp(28px, 4vw, 64px)' }}>
            <h2 className="adv-heading">{content.heading}</h2>
            <p className="adv-subtext">{content.subtext}</p>
          </div>
          <div className="bento-grid">
            <div className={`adv-card card-globe reveal-item delay-1 ${isVisible ? 'is-visible' : ''}`}>
              <div className="globe-text">
                <h3 className="card-title">{content.cards?.coverage?.title}</h3>
                <p className="card-desc">{content.cards?.coverage?.desc}</p>
              </div>
              <div className="globe-image-wrap">
                <div className="globe-glow" />
                <img src={content.cards?.coverage?.image_url} alt="Globe" className="globe-img" loading="lazy" />
              </div>
            </div>
            <div className={`adv-card card-text-only reveal-item delay-2 ${isVisible ? 'is-visible' : ''}`}>
              <h3 className="card-title">{content.cards?.tracking?.title}</h3>
              <p className="card-desc">{content.cards?.tracking?.desc}</p>
            </div>
            <div className={`adv-card card-text-only reveal-item delay-3 ${isVisible ? 'is-visible' : ''}`}>
              <h3 className="card-title">{content.cards?.pricing?.title}</h3>
              <p className="card-desc">{content.cards?.pricing?.desc}</p>
            </div>
            <div className={`adv-card card-handling reveal-item delay-4 ${isVisible ? 'is-visible' : ''}`}>
              <div className="handling-text">
                <h3 className="card-title">{content.cards?.handling?.title}</h3>
                <p className="card-desc">{content.cards?.handling?.desc}</p>
              </div>
              <div className="handling-img-wrap">
                <img src={content.cards?.handling?.image_url} alt="Handling" loading="lazy" />
                <div className="handling-gradient" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvantageSection;