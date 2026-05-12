import React, { useState, useEffect, useRef } from 'react';

const AdvantageSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const ease = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";
  const hidden = "opacity-0 translate-y-10";
  const visible = "opacity-100 translate-y-0";

  return (
    <>
      <style>{`
        .advantage-section {
          font-family: 'Manrope', sans-serif;
          padding: clamp(48px, 8vw, 112px) clamp(16px, 4vw, 48px);
          background: #fff;
          overflow: hidden;
        }

        /* ── Heading ── */
        .adv-heading {
          font-size: clamp(1.6rem, 3.2vw, 3.25rem);
          font-weight: 500;
          color: #0A4D26;
          line-height: 1.15;
          margin-bottom: clamp(6px, 0.8vw, 14px);
        }
        .adv-subtext {
          font-size: clamp(12px, 1.1vw, 14px);
          color: rgba(10,77,38,0.7);
          line-height: 1.65;
          max-width: 480px;
          margin: 0 auto;
        }

        /* ── Bento grid ──
           Mobile  : 2 equal columns, rows auto-height
           Desktop : 3 columns, rows fixed at clamp height
        */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(12px, 1.5vw, 20px);
        }

        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: clamp(200px, 22vw, 300px);
          }
        }

        /* ── Shared card ── */
        .adv-card {
          background: #36B936;
          border-radius: clamp(1.25rem, 2vw, 2.5rem);
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
        }

        /* ── Card 1: Globe — tall left card ──
           Mobile  : spans 2 cols, row-direction (image right, text left)
           Desktop : spans 1 col, 2 rows, col-direction (image top, text bottom)
        */
        .card-globe {
          grid-column: span 2;
          min-height: clamp(140px, 36vw, 220px);
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        @media (min-width: 768px) {
          .card-globe {
            grid-column: span 1;
            grid-row: span 2;
            min-height: unset;
            flex-direction: column;
            align-items: stretch;
          }
        }

        .globe-text {
          width: 58%;
          padding: clamp(16px, 2.5vw, 36px) clamp(16px, 2.5vw, 32px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 10;
          order: 1;
        }

        @media (min-width: 768px) {
          .globe-text {
            width: 100%;
            margin-top: auto;
            order: 2;
          }
        }

        .globe-image-wrap {
          width: 42%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          order: 2;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .globe-image-wrap {
            width: 100%;
            height: 55%;
            order: 1;
            padding-top: clamp(16px, 2vw, 28px);
          }
        }

        .globe-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 170%; height: 170%;
          background: radial-gradient(circle, rgba(255,255,255,0.38) 0%, transparent 65%);
          pointer-events: none;
        }

        .globe-img {
          width: clamp(100px, 18vw, 340px);
          max-width: 90%;
          object-fit: contain;
          position: relative;
          z-index: 10;
          filter: drop-shadow(0 8px 20px rgba(0,0,0,0.18));
        }

        @media (min-width: 768px) {
          .globe-img {
            width: clamp(160px, 85%, 340px);
          }
        }

        /* ── Cards 2 & 3: text-only, single cell ── */
        .card-text-only {
          grid-column: span 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(16px, 2.5vw, 36px) clamp(16px, 2.5vw, 32px);
        }

        /* ── Card 4: Professional Handling — wide bottom card ──
           Mobile  : spans 2 cols, row-direction
           Desktop : spans 2 cols, same row-direction
        */
        .card-handling {
          grid-column: span 2;
          min-height: clamp(140px, 36vw, 220px);
          display: flex;
          flex-direction: row;
          align-items: stretch;
        }

        @media (min-width: 768px) {
          .card-handling {
            min-height: unset;
          }
        }

        .handling-text {
          width: 55%;
          padding: clamp(16px, 2.5vw, 36px) clamp(16px, 2.5vw, 32px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 10;
          flex-shrink: 0;
        }

        .handling-img-wrap {
          position: absolute;
          right: 0; top: 0;
          width: 52%;
          height: 100%;
          z-index: 0;
        }

        .handling-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left center;
          display: block;
        }

        .handling-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right,
            #36B936 0%,
            rgba(54,185,54,0.85) 30%,
            rgba(54,185,54,0.2) 65%,
            transparent 100%
          );
          pointer-events: none;
        }

        /* ── Shared card typography ── */
        .card-title {
          font-size: clamp(1.1rem, 2.2vw, 2.25rem);
          font-weight: 500;
          color: white;
          line-height: 1.15;
          margin-bottom: clamp(6px, 0.8vw, 14px);
        }

        .card-desc {
          font-size: clamp(11px, 1.05vw, 13px);
          font-weight: 500;
          color: #0A4D26;
          line-height: 1.65;
        }
      `}</style>

      <section ref={sectionRef} className="advantage-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* ── Heading ── */}
          <div className={`text-center ${ease} ${isVisible ? visible : hidden}`}
               style={{ marginBottom: 'clamp(28px, 4vw, 64px)' }}>
            <h2 className="adv-heading">The ZAJEL Advantage.</h2>
            <p className="adv-subtext">
              We combine technology, expertise, and dedication to deliver exceptional courier services you can trust.
            </p>
          </div>

          {/* ── Bento Grid ── */}
          <div className="bento-grid">

            {/* 1 — Globe: wide on mobile (2col), tall on desktop (1col × 2row) */}
            <div className={`adv-card card-globe ${ease} delay-100 ${isVisible ? visible : hidden}`}>
              <div className="globe-text">
                <h3 className="card-title">Wide<br />Coverage</h3>
                <p className="card-desc">
                  Extensive network covering all major domestic cities and seamlessly connecting 200+ countries globally.
                </p>
              </div>
              <div className="globe-image-wrap">
                <div className="globe-glow" />
                <img
                  src="/ChatGPT Image Apr 23, 2026 at 11_17_37 AM-2.png"
                  alt="Wide Coverage Globe"
                  className="globe-img"
                />
              </div>
            </div>

            {/* 2 — Real-Time Tracking */}
            <div className={`adv-card card-text-only ${ease} delay-200 ${isVisible ? visible : hidden}`}>
              <h3 className="card-title">Real-Time<br />Tracking</h3>
              <p className="card-desc">
                Track your shipments 24/7 with live milestone updates and automated delivery notifications.
              </p>
            </div>

            {/* 3 — Transparent Pricing */}
            <div className={`adv-card card-text-only ${ease} delay-300 ${isVisible ? visible : hidden}`}>
              <h3 className="card-title">Transparent Pricing</h3>
              <p className="card-desc">
                No hidden fees. Get instant, intelligent quotes and know exactly what you will pay upfront.
              </p>
            </div>

            {/* 4 — Professional Handling: spans 2 cols always */}
            <div className={`adv-card card-handling ${ease} delay-[400ms] ${isVisible ? visible : hidden}`}>
              <div className="handling-text">
                <h3 className="card-title">Professional<br />Handling</h3>
                <p className="card-desc">
                  Trained staff ensuring your packages are handled with care from pickup to delivery.
                </p>
              </div>
              <div className="handling-img-wrap">
                <img
                  src="/ChatGPT Image Apr 22, 2026 at 11_59_15 AM-2.png"
                  alt="Professional Package Handling"
                />
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