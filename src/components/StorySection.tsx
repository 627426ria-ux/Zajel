import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StorySection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const smoothEase = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";
  
  // Slide from the opposite side in RTL
  const slideDirection = isRtl ? '-translate-x-8' : 'translate-x-8';
  
  // Flip gradient direction for RTL
  const gradientAngle = isRtl ? '270deg' : '90deg';

  return (
    <>
      <style>{`
        .story-section {
          font-family: 'Manrope', sans-serif;
          margin-top: clamp(40px, 6vw, 80px);
          padding-top: clamp(100px, 18vw, 260px);
          padding-left: clamp(16px, 4vw, 48px);
          padding-right: clamp(16px, 4vw, 48px);
          padding-bottom: clamp(40px, 6vw, 80px);
        }

        .story-banner {
          height: clamp(160px, 28vw, 340px);
          overflow: visible;
          position: relative;
        }

        .story-image-wrap {
          position: absolute;
          bottom: 0;
          left: clamp(-8px, -1vw, 0px);
          width: clamp(140px, 26vw, 400px);
          z-index: 20;
          pointer-events: none;
        }

        /* RTL support for image positioning */
        [dir="rtl"] .story-image-wrap {
          left: auto;
          right: clamp(-8px, -1vw, 0px);
        }

        .story-image-wrap img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.28));
        }

        .story-text-col {
          margin-left: clamp(140px, 28vw, 420px);
          padding: clamp(20px, 3.5vw, 64px) clamp(20px, 3vw, 56px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          height: 100%;
          position: relative;
          z-index: 10;
        }

        /* RTL support for text column margins */
        [dir="rtl"] .story-text-col {
          margin-left: 0;
          margin-right: clamp(140px, 28vw, 420px);
        }

        .story-heading {
          font-size: clamp(0.95rem, 2.6vw, 3rem);
          font-weight: 300;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: white;
          margin-bottom: clamp(12px, 2vw, 32px);
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
          white-space: pre-line;
        }

        .story-cta {
          font-size: clamp(11px, 1.1vw, 16px);
          font-weight: 700;
          padding: clamp(8px, 0.9vw, 14px) clamp(18px, 2.2vw, 36px);
          border-radius: 9999px;
          background: white;
          color: #36B936;
          display: inline-block;
          transition: background 0.2s ease, transform 0.15s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          white-space: nowrap;
        }
        .story-cta:hover { background: #f5f5f5; }
        .story-cta:active { transform: scale(0.98); }
        .story-cta:focus {
          outline: 2px solid white;
          outline-offset: 2px;
        }
      `}</style>

      <section
        ref={sectionRef}
        dir={isRtl ? 'rtl' : 'ltr'}
        className="story-section w-full bg-white"
      >
        <div className="w-full max-w-[1200px] mx-auto relative">

          {/* ── Banner Card ── */}
          <div
            className={`story-banner w-full rounded-[1.75rem] md:rounded-[2.5rem] shadow-lg transform ${smoothEase} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >

            {/* Layer 1 — gradient bg, clipped to rounded corners */}
            <div
              className="absolute inset-0 rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden z-0"
              style={{
                background: `linear-gradient(${gradientAngle}, #FFFFFF 0%, #36B936 41%, #36B936 100%)`
              }}
            >
              {/* Corner fold accent — dynamically placed left or right based on RTL */}
              <svg
                className={`absolute bottom-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-[#D2EBD2] ${isRtl ? 'left-0 transform -scale-x-100' : 'right-0'}`}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon fill="currentColor" points="100,0 100,100 0,100" />
              </svg>
            </div>

            {/* Layer 2 — text, sits opposite of the image */}
            <div
              className={`story-text-col transform ${smoothEase} ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${slideDirection}`}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h2 className="story-heading">
                {t('story.heading')}
              </h2>
              <Link to="/" className="story-cta">
                {t('story.cta')}
              </Link>
            </div>

            {/* Layer 3 — Image */}
            <div
              className={`story-image-wrap transform ${smoothEase} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <img
                src="/delivery-man.png"
                alt="Zajel Delivery Professional"
                draggable="false"
              />
            </div>

          </div>{/* end .story-banner */}

        </div>
      </section>
    </>
  );
};

export default StorySection;