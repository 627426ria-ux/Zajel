import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SERVICES_DATA = [
  {
    id: 'domestic',
    titleKey: 'services.items.domestic.title',
    shortTitleKey: 'services.items.domestic.short',
    descKey: 'services.items.domestic.desc',
    image: '/ChatGPT Image Apr 30, 2026 at 08_47_06 PM.png',
    path: '/domestic-courier',
    accent: false,
  },
  {
    id: 'international',
    titleKey: 'services.items.international.title',
    shortTitleKey: 'services.items.international.short',
    descKey: 'services.items.international.desc',
    image: '/7be9399d-bd5b-44e2-97ed-97d5efce871c.png',
    path: '/international-courier',
    accent: false,
  },
  {
    id: 'freight',
    titleKey: 'services.items.freight.title',
    shortTitleKey: 'services.items.freight.short',
    descKey: 'services.items.freight.desc',
    image: '/5853de78-ecb1-4202-8bad-3befd452cf47.png',
    path: '/freight-courier',
    accent: false,
  },
  {
    id: 'all',
    titleKey: 'services.items.all.title',
    shortTitleKey: 'services.items.all.short',
    descKey: 'services.items.all.desc',
    image: '/ChatGPT Image Apr 5, 2026, 08_42_55 PM.png',
    path: '/all-services',
    accent: false,
  },
] as const;

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        .services-section {
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          padding: clamp(48px, 8vw, 112px) clamp(16px, 4vw, 48px);
          background: #ffffff;
          overflow: hidden;
        }

        .services-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .services-header {
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 3vw, 24px);
          margin-bottom: clamp(40px, 6vw, 72px);
          text-align: left;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .services-header.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 1024px) {
          .services-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
          .services-header-left {
            max-width: 640px;
          }
          .services-header-right {
            max-width: 460px;
            padding-bottom: 0.75rem;
          }
        }

        /* Matches Hero's n1-style eyebrow treatment but kept as label, not bold-heavy */
        .services-eyebrow {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #36B936;
          display: block;
          margin-bottom: 10px;
        }

        /* Matches Hero h1-style scale exactly: 36-44px, weight 400 */
        .services-heading {
          font-size: 36px;
          font-weight: 400;
          color: #064423;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin: 0;
        }

        @media (min-width: 768px) {
          .services-heading {
            font-size: 44px;
          }
        }

        /* Matches Hero bc1-style body copy: 14-16px, weight 400 */
        .services-header-desc {
          font-size: 14px;
          font-weight: 400;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        @media (min-width: 768px) {
          .services-header-desc {
            font-size: 16px;
          }
        }

        /* ── Card Grid ── */
        .services-grid {
          display: flex;
          gap: clamp(32px, 3.5vw, 40px);
          overflow-x: auto;
          padding: 8px 24px 32px;
          margin: -8px -24px -32px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .services-grid::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 900px) {
          .services-grid {
            overflow: visible;
            padding: 12px;
            margin: -12px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .service-card {
          position: relative;
          display: block;
          flex: 0 0 clamp(200px, 45vw, 260px);
          aspect-ratio: 3 / 4;
          border-radius: clamp(16px, 2vw, 24px);
          text-decoration: none;
          scroll-snap-align: start;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 900px) {
          .service-card {
            flex: unset;
            width: auto;
          }
        }

        /* ── Card Media & Gradient ── */
        .service-card-media {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          overflow: hidden;
          -webkit-mask-image: radial-gradient(circle 32px at 100% 100%, transparent 30px, black 32px);
          mask-image: radial-gradient(circle 32px at 100% 100%, transparent 30px, black 32px);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          background-color: #f3f4f6;
        }

        .service-card:hover .service-card-media,
        .service-card:focus-visible .service-card-media {
          transform: scale(1.05);
        }

        .service-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* ── Card Text Content ── */
        /*
          Instead of veiling the photo, the text now sits on a floating
          frosted-glass panel — a soft blurred white pane that lifts the
          copy above the image with almost no loss of the photograph
          itself. The corner arrow sits on top of it at the seam.
        */
        .service-card-text-wrapper {
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 10px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px 16px 16px;
          border-radius: clamp(12px, 1.6vw, 18px);
          background: rgba(255, 255, 255, 0.68);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: 0 8px 28px rgba(6, 68, 35, 0.14);
          transition: background 0.3s ease;
        }

        .service-card:hover .service-card-text-wrapper,
        .service-card:focus-visible .service-card-text-wrapper {
          background: rgba(255, 255, 255, 0.82);
        }

        /* Matches Hero h3-style: weight 400, not bold — text is back on
           light glass so it returns to the brand's dark-green palette. */
        .service-card-label {
          color: #064423;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .service-card-label.is-accent {
          color: #1f8a3c;
        }
        
        .service-card-desc {
          color: #4b5563;
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.42;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          padding-right: clamp(30px, 4vw, 40px);
        }

        /* ── Card Corner Button ── */
        .service-card-corner {
          position: absolute;
          right: 0;
          bottom: 0;
          transform: translate(50%, 50%);
          width: clamp(44px, 4.5vw, 56px);
          height: clamp(44px, 4.5vw, 56px);
          border-radius: 50%;
          background: #111827;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 3;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      background 0.3s ease;
        }

        .service-card-corner.is-accent {
          background: #36B936;
          color: #ffffff;
        }

        .service-card:hover .service-card-corner,
        .service-card:focus-visible .service-card-corner {
          transform: translate(50%, 50%) scale(1.1);
        }

        .service-card-arrow-icon {
          width: 40%;
          height: 40%;
        }

        .service-card:focus-visible {
          outline: 2px solid #36B936;
          outline-offset: 6px;
          border-radius: clamp(16px, 2vw, 24px);
        }

        @media (prefers-reduced-motion: reduce) {
          .services-header,
          .service-card,
          .service-card-media,
          .service-card-corner {
            transition: none !important;
          }
        }
      `}</style>

      <section ref={sectionRef} className="services-section">
        <div className="services-container">
          <div className={`services-header ${isVisible ? 'is-visible' : ''}`}>
            <div className="services-header-left">
              <span className="services-eyebrow">{t('services.eyebrow')}</span>
              <h2
                className="services-heading"
                dangerouslySetInnerHTML={{ __html: t('services.heading') }}
              />
            </div>
            <div className="services-header-right">
              <p className="services-header-desc">{t('services.desc')}</p>
            </div>
          </div>

          <div className="services-grid">
            {SERVICES_DATA.map((s, i) => (
              <Link
                key={s.id}
                to={s.path}
                className={`service-card ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                aria-label={`${t(s.titleKey)} — ${t(s.descKey)}`}
              >
                <div className="service-card-media">
                  <img src={s.image} alt="" loading="lazy" />
                </div>

                <div className="service-card-text-wrapper">
                  <span className={`service-card-label ${s.accent ? 'is-accent' : ''}`}>
                    {t(s.shortTitleKey)}
                  </span>
                  <span className="service-card-desc">
                    {t(s.descKey)}
                  </span>
                </div>

                <span className="service-card-corner" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    className="service-card-arrow-icon"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;