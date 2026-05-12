import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const StorySection: React.FC = () => {
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

  return (
    <>
      <style>{`
        .story-section {
          font-family: 'Manrope', sans-serif;
          /*
           * margin-top: gap between this and the section above.
           * padding-top: runway space so the image rising above the card
           *              doesn't overlap the section above — same logic as AppDownloadSection.
           */
          margin-top: clamp(40px, 6vw, 80px);
          padding-top: clamp(100px, 18vw, 260px);
          padding-left: clamp(16px, 4vw, 48px);
          padding-right: clamp(16px, 4vw, 48px);
          padding-bottom: clamp(40px, 6vw, 80px);
        }

        /*
         * Banner card — same overflow: visible pattern as AppDownloadSection.
         * overflow: visible lets the image escape above the top edge.
         * The inner gradient layer has its own overflow: hidden for clean corners.
         */
        .story-banner {
          height: clamp(160px, 28vw, 340px);
          overflow: visible;
          position: relative;
        }

        /*
         * Image wrap — INSIDE the banner, anchored bottom-left.
         *
         * MENTAL MODEL (mirror of AppDownloadSection, left side):
         *   bottom: 0  → image base sits on the card's bottom edge.
         *   left: 0    → image starts at the left edge of the card.
         *   The image is taller than the card, so it rises UP above the card top.
         *   overflow: visible on the banner lets it show above freely.
         *   No translateY — bottom: 0 alone is the correct anchor.
         */
        .story-image-wrap {
          position: absolute;
          bottom: 0;
          left: clamp(-8px, -1vw, 0px);
          width: clamp(140px, 26vw, 400px);
          z-index: 20;
          pointer-events: none;
        }

        .story-image-wrap img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.28));
        }

        /* Text column — occupies the right portion, fluid padding */
        .story-text-col {
          /* Push text right to avoid the image area on the left */
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

        .story-heading {
          font-size: clamp(0.95rem, 2.6vw, 3rem);
          font-weight: 300;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: white;
          margin-bottom: clamp(12px, 2vw, 32px);
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
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
                background: 'linear-gradient(90deg, #FFFFFF 0%, #36B936 41%, #36B936 100%)'
              }}
            >
              {/* Corner fold accent */}
              <svg
                className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-[#D2EBD2]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon fill="currentColor" points="100,0 100,100 0,100" />
              </svg>
            </div>

            {/* Layer 2 — text, sits right of the image */}
            <div
              className={`story-text-col transform ${smoothEase} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h2 className="story-heading">
                At ZAJEL, we go beyond delivery to provide agile, global logistics and business transformation
              </h2>
              <Link to="/about" className="story-cta">
                Explore Our Story
              </Link>
            </div>

            {/*
             * Layer 3 — Image (INSIDE the banner, bottom-left anchor).
             *
             * bottom: 0  → image base = card base.
             * left: 0    → image hugs the left edge.
             * Image is naturally taller than the card so it rises above the card top.
             * overflow: visible on .story-banner lets it show above freely.
             * padding-top on the section provides the clearance space above the card.
             */}
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