import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const SERVICES_DATA = [
    { id: 'domestic',      titleKey: 'services.items.domestic.title',      descKey: 'services.items.domestic.desc',      shortTitleKey: 'services.items.domestic.short',      image: '/ChatGPT Image Apr 30, 2026 at 08_47_06 PM.png', path: '/domestic-courier' },
    { id: 'international', titleKey: 'services.items.international.title', descKey: 'services.items.international.desc', shortTitleKey: 'services.items.international.short', image: '/7be9399d-bd5b-44e2-97ed-97d5efce871c.png',        path: '/international-courier' },
    { id: 'freight',       titleKey: 'services.items.freight.title',       descKey: 'services.items.freight.desc',       shortTitleKey: 'services.items.freight.short',       image: '/5853de78-ecb1-4202-8bad-3befd452cf47.png',        path: '/freight-courier' },
    { id: 'all',           titleKey: 'services.items.all.title',           descKey: 'services.items.all.desc',           shortTitleKey: 'services.items.all.short',           image: '/ChatGPT Image Apr 5, 2026, 08_42_55 PM.png',    path: 'all-services' },
  ];

  const active = SERVICES_DATA[activeTab];

  return (
    <>
      <style>{`
        .services-section {
          font-family: 'Manrope', sans-serif;
          padding: clamp(48px, 8vw, 112px) clamp(16px, 4vw, 48px);
          background: white;
          overflow: hidden;
        }
        .services-header {
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 3vw, 24px);
          margin-bottom: clamp(40px, 6vw, 80px);
          text-align: left;
        }
        @media (min-width: 1024px) {
          .services-header { flex-direction: row; justify-content: space-between; align-items: flex-end; }
          .services-header-left  { max-width: 600px; }
          .services-header-right { max-width: 440px; padding-bottom: 0.5rem; }
        }
        .services-eyebrow {
          font-size: clamp(10px, 1.2vw, 12px); font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #36B936; display: block;
          margin-bottom: clamp(12px, 1.5vw, 16px);
        }
        .services-heading {
          font-size: clamp(2.2rem, 4.2vw, 4.2rem); font-weight: 300;
          color: #0A4D26; line-height: 1.1; letter-spacing: -0.025em; margin: 0;
        }
        .services-header-desc {
          font-size: clamp(14px, 1.2vw, 18px); font-weight: 300;
          color: #6b7280; line-height: 1.6; margin: 0;
        }
        .service-card {
          background: #36B936; border-radius: clamp(1.25rem, 2.5vw, 2.5rem);
          overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.12); position: relative;
        }
        .tab-strip {
          display: flex; gap: clamp(6px, 1vw, 10px); overflow-x: auto;
          padding-bottom: 4px; margin-bottom: clamp(16px, 2.5vw, 28px);
          -ms-overflow-style: none; scrollbar-width: none;
        }
        .tab-strip::-webkit-scrollbar { display: none; }
        .tab-btn {
          flex-shrink: 0; padding: clamp(7px, 0.8vw, 11px) clamp(14px, 1.8vw, 22px);
          border-radius: 9999px; font-size: clamp(12px, 1.1vw, 14px);
          font-weight: 500; cursor: pointer; border: none;
          transition: all 0.25s ease; outline: none;
        }
        .tab-btn-active   { background: #0A4D26; color: white; box-shadow: 0 4px 14px rgba(10,77,38,0.25); }
        .tab-btn-inactive { background: #f3f4f6; color: #0A4D26; border: 1px solid #e5e7eb; }
        .tab-btn-inactive:hover { background: #e9eae8; }
        .mobile-card-img  { width: 100%; height: clamp(180px, 36vw, 360px); object-fit: cover; object-position: center; display: block; }
        .mobile-card-gradient { position: absolute; bottom: 0; left: 0; right: 0; height: 28%; background: linear-gradient(to bottom, transparent 0%, #36B936 100%); pointer-events: none; }
        .mobile-card-body { padding: clamp(16px, 3vw, 32px) clamp(20px, 3.5vw, 36px) clamp(24px, 4vw, 44px); }
        .mobile-card-title { font-size: clamp(1.4rem, 4.5vw, 2.2rem); font-weight: 300; color: white; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: clamp(10px, 1.5vw, 18px); }
        .mobile-card-desc  { font-size: clamp(12px, 1.4vw, 15px); font-weight: 300; color: rgba(255,255,255,0.9); line-height: 1.6; margin-bottom: clamp(16px, 2.5vw, 28px); }
        .desktop-layout { display: none; }
        @media (min-width: 1024px) {
          .mobile-layout { display: none !important; }
          .desktop-layout { display: grid; grid-template-columns: clamp(220px, 28vw, 380px) 1fr; gap: clamp(24px, 3vw, 56px); align-items: stretch; }
        }
        .desktop-tabs { display: flex; flex-direction: column; justify-content: space-between; gap: clamp(10px, 1.2vw, 16px); }
        .desktop-tab-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: clamp(14px, 1.4vw, 20px) clamp(18px, 2vw, 28px); border-radius: 9999px;
          font-size: clamp(13px, 1.15vw, 16px); font-weight: 500; cursor: pointer;
          border: none; transition: all 0.3s ease; outline: none; text-align: left;
        }
        .desktop-tab-active   { background: #0A4D26; color: #36B936; box-shadow: 0 8px 24px rgba(10,77,38,0.2); transform: scale(1.02); }
        .desktop-tab-inactive { background: white; color: #0A4D26; border: 1px solid #e5e7eb; }
        .desktop-tab-inactive:hover { background: #f9fafb; border-color: #d1d5db; }
        .desktop-tab-dot { width: clamp(8px, 0.7vw, 11px); height: clamp(8px, 0.7vw, 11px); border-radius: 50%; flex-shrink: 0; transition: all 0.3s ease; }
        .desktop-tab-dot-active   { background: #36B936; box-shadow: 0 0 8px rgba(54,185,54,0.5); }
        .desktop-tab-dot-inactive { background: #d1d5db; }
        .desktop-card { min-height: clamp(360px, 42vw, 560px); display: flex; align-items: center; }
        .desktop-card-img-wrap { position: absolute; top: 0; right: 0; width: 62%; height: 100%; z-index: 0; }
        .desktop-card-img-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: right center; display: block; }
        .desktop-card-img-gradient { position: absolute; inset: 0; background: linear-gradient(to right, rgba(54,185,54,1) 0%, rgba(54,185,54,0.92) 5%, rgba(115,181,115,0.4) 20%, rgba(54,185,54,0) 42%); pointer-events: none; }
        .desktop-card-content { position: relative; z-index: 10; width: clamp(260px, 50%, 520px); padding: clamp(28px, 4vw, 64px) clamp(28px, 4vw, 60px); display: flex; flex-direction: column; justify-content: center; }
        .desktop-card-title { font-size: clamp(1.6rem, 3vw, 3.25rem); font-weight: 300; color: white; line-height: 1.1; letter-spacing: -0.025em; margin-bottom: clamp(12px, 1.5vw, 24px); text-shadow: 0 1px 2px rgba(0,0,0,0.08); }
        .desktop-card-desc  { font-size: clamp(13px, 1.2vw, 16px); font-weight: 300; color: rgba(255,255,255,0.9); line-height: 1.65; margin-bottom: clamp(20px, 2.5vw, 40px); max-width: 88%; }
        .learn-more-btn { background: #0A4D26; color: #36B936; padding: clamp(10px, 1vw, 14px) clamp(18px, 2vw, 28px); border-radius: 9999px; display: inline-flex; align-items: center; gap: clamp(5px, 0.8vw, 8px); transition: background 0.25s ease; width: fit-content; outline: none; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        .learn-more-btn:hover { background: #063219; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .btn-plus-icon { font-weight: 200; font-size: clamp(16px, 1.5vw, 18px); line-height: 1; }
        .btn-text { font-size: clamp(12px, 1.05vw, 14px); font-weight: 500; letter-spacing: 0.025em; }
        @keyframes contentFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .animate-content { animation: contentFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <section ref={sectionRef} className="services-section">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* ── Header ── */}
          <div className={`services-header transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="services-header-left">
              <span className="services-eyebrow">{t('services.eyebrow')}</span>
              <h2 className="services-heading"
                dangerouslySetInnerHTML={{ __html: t('services.heading') }} />
            </div>
            <div className="services-header-right">
              <p className="services-header-desc">{t('services.desc')}</p>
            </div>
          </div>

          {/* ════ MOBILE + TABLET ════ */}
          <div className={`mobile-layout transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="tab-strip">
              {SERVICES_DATA.map((s, i) => (
                <button key={s.id} onClick={() => setActiveTab(i)}
                  className={`tab-btn ${activeTab === i ? 'tab-btn-active' : 'tab-btn-inactive'}`}>
                  {t(s.shortTitleKey)}
                </button>
              ))}
            </div>

            <div key={`mob-${activeTab}`} className="service-card animate-content">
              <div style={{ position: 'relative' }}>
                <img src={active.image} alt={t(active.titleKey)} className="mobile-card-img" />
                <div className="mobile-card-gradient" />
              </div>
              <div className="mobile-card-body">
                <h3 className="mobile-card-title">{t(active.titleKey)}</h3>
                <p className="mobile-card-desc">{t(active.descKey)}</p>
                <Link to={active.path} className="learn-more-btn">
                  <span className="btn-plus-icon">+</span>
                  <span className="btn-text">{t('services.learnMore')}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ════ DESKTOP ════ */}
          <div className="desktop-layout">

            {/* Left tabs */}
            <div className={`desktop-tabs transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {SERVICES_DATA.map((s, i) => (
                <button key={s.id} onClick={() => setActiveTab(i)}
                  className={`desktop-tab-btn ${activeTab === i ? 'desktop-tab-active' : 'desktop-tab-inactive'}`}>
                  <span>{t(s.titleKey)}</span>
                  <span className={`desktop-tab-dot ${activeTab === i ? 'desktop-tab-dot-active' : 'desktop-tab-dot-inactive'}`} />
                </button>
              ))}
            </div>

            {/* Right card */}
            <div className={`transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div key={`desk-${activeTab}`} className="service-card desktop-card animate-content">
                <div className="desktop-card-img-wrap">
                  <img src={active.image} alt={t(active.titleKey)} />
                  <div className="desktop-card-img-gradient" />
                </div>
                <div className="desktop-card-content">
                  <h3 className="desktop-card-title">
                    {t(active.titleKey).split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word}{i === 0 ? <br /> : ' '}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="desktop-card-desc">{t(active.descKey)}</p>
                  <Link to={active.path} className="learn-more-btn">
                    <span className="btn-plus-icon">+</span>
                    <span className="btn-text">{t('services.learnMore')}</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;