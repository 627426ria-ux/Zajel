import React, { useState, useEffect, useRef } from 'react';

const AppDownloadSection: React.FC = () => {
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
        .app-download-section {
          font-family: 'Manrope', sans-serif;
          /*
           * FIX 1 — prevent overlap with section above.
           * margin-top pushes this section cleanly below whatever precedes it.
           * Adjust the clamp values to match your page's actual spacing needs.
           */
          margin-top: clamp(40px, 6vw, 80px);
          padding-top: clamp(120px, 22vw, 320px);
        }

        /*
         * FIX 2 — the banner card.
         * overflow: visible is CRITICAL so the phone (which is taller than the card)
         * can escape above the top edge without being clipped.
         * The inner bg-mask layer handles its own overflow-hidden separately.
         */
        .banner-container {
          height: clamp(160px, 28vw, 340px);
          overflow: visible;
          position: relative;
        }

        /*
         * FIX 3 — phone positioning.
         *
         * MENTAL MODEL:
         *   - bottom: 0  →  the BOTTOM of the phone image = the BOTTOM of the card.
         *   - The phone image is naturally taller than the card height.
         *   - So the phone's top edge rises ABOVE the card's top edge automatically.
         *   - NO translateY needed. Any positive translateY pushes it further DOWN (wrong).
         *   - A small NEGATIVE translateY would lift it slightly but isn't needed here.
         *
         * The phone sits with its base on the card floor and its body rising up through
         * and above the green card — exactly the "floating out of card" premium look.
         */
        .phone-image-wrap {
          position: absolute;
          bottom: 0;
          right: 4%;
          width: clamp(160px, 28vw, 440px);
          z-index: 20;
          pointer-events: none;
          /* No transform — bottom:0 is enough. Phone base = card base. */
        }

        .phone-image-wrap img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 25px 35px rgba(0,0,0,0.4));
        }

        /* Text content */
        .text-content {
  width: clamp(52%, 55%, 62%);
  padding-left: clamp(18px, 4vw, 80px);
  padding-right: clamp(12px, 2vw, 40px);
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

        .banner-heading {
          font-size: clamp(1.05rem, 3.8vw, 4rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: white;
          margin-bottom: clamp(6px, 1.2vw, 24px);
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .banner-subtext {
          font-size: clamp(9px, 1.3vw, 18px);
          color: rgba(255, 255, 255, 0.9);
          font-weight: 300;
          line-height: 1.5;
          margin-bottom: clamp(10px, 2vw, 40px);
          max-width: 420px;
        }

        .download-label {
          font-size: clamp(10px, 1.4vw, 20px);
          color: rgba(255, 255, 255, 0.9);
          font-weight: 300;
          margin-bottom: clamp(4px, 0.8vw, 12px);
          display: block;
        }

        @media (max-width: 400px) {
          .download-label { display: none; }
        }

        .store-buttons {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1vw, 16px);
          flex-wrap: wrap;
        }

        .store-button-link {
          border-radius: 8px;
          transition: transform 0.2s ease;
          display: inline-block;
        }
        .store-button-link:hover { transform: scale(1.05); }
        .store-button-link:focus { outline: 2px solid white; outline-offset: 2px; }

        .store-button-link img {
          height: clamp(26px, 3.5vw, 52px);
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* Outer section — horizontal padding only, margin-top handles vertical spacing */
        .section-outer {
          padding-left: clamp(16px, 4vw, 48px);
          padding-right: clamp(16px, 4vw, 48px);
          /* Bottom padding gives breathing room below the card */
          padding-bottom: clamp(40px, 6vw, 80px);
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`app-download-section section-outer w-full flex items-center justify-center bg-white`}
      >
        <div className="w-full max-w-[1200px] relative">

          {/* ── Green Banner Card ── */}
          <div
            className={`banner-container w-full bg-[#36B936] rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-row items-stretch transform ${smoothEase} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >

            {/* Layer 1 — background graphics, clipped inside rounded corners */}
            <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden pointer-events-none z-0">
              <div
                className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: "url('/zajel-maze-pattern.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="absolute bottom-0 left-0 w-full flex items-end opacity-30 mix-blend-overlay">
                <svg className="w-full h-auto" viewBox="0 0 1713 339" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
                  <path d="M0.296875 338.07L63.7043 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M127.111 338.07L63.7031 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M190.509 338.07L127.102 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M190.516 338.07L253.923 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M253.906 338.07L317.314 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M317.328 338.07L380.736 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M380.742 338.07L444.15 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M507.556 338.07L444.148 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M507.555 338.07L570.962 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M634.368 338.07L570.961 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M697.775 338.07L634.367 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M761.173 338.07L697.766 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M761.188 338.07L824.595 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M824.594 338.07L888.001 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M951.407 338.07L888 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M951.406 338.07L1014.81 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1078.22 338.07L1014.81 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1141.63 338.07L1078.23 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1141.63 338.07L1205.04 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1205.04 338.07L1268.45 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1331.85 338.07L1268.45 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1395.26 338.07L1331.85 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1395.27 338.07L1458.67 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1522.08 338.07L1458.67 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1585.49 338.07L1522.09 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1648.89 338.07L1585.48 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path d="M1712.3 338.07L1648.89 315.588" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.94" d="M0.296875 315.581L63.7043 293.1" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.94" d="M127.111 315.581L63.7031 293.1" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.94" d="M444.15 315.581L380.742 293.1" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.94" d="M1648.89 315.581L1712.3 293.1" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.87" d="M63.7043 293.097L0.296875 270.615" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.87" d="M1712.3 293.097L1648.89 270.615" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.55" d="M0.296875 180.695L63.7043 158.213" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.55" d="M1712.3 180.695L1648.89 158.213" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.17" d="M0.296875 45.8035L63.7043 23.3218" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.17" d="M1712.3 45.8035L1648.89 23.3218" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.1" d="M0.296875 23.3191L63.7043 0.837395" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                  <path opacity="0.1" d="M1712.3 23.3193L1648.89 0.837639" stroke="white" strokeOpacity="0.42" strokeWidth="1.77708"/>
                </svg>
              </div>
            </div>

            {/* Layer 2 — Text content */}
            <div
              className={`text-content transform ${smoothEase} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h2 className="banner-heading">
                Download the <br />ZAJEL App
              </h2>
              <p className="banner-subtext">
                Track shipments, get instant updates, and manage your deliveries anytime, anywhere.
              </p>
              <div>
                <span className="download-label">Download Our App</span>
                <div className="store-buttons">
                  <a href="#" className="store-button-link">
                    <img src="/image copy 15.png" alt="Get it on Google Play" />
                  </a>
                  <a href="#" className="store-button-link">
                    <img src="/image copy 16.png" alt="Download on the App Store" />
                  </a>
                </div>
              </div>
            </div>

            {/*
             * Layer 3 — Phone image (INSIDE the banner div).
             *
             * HOW IT WORKS:
             *   position: absolute + bottom: 0
             *   → the bottom edge of the phone img = the bottom edge of the green card.
             *
             *   The phone image's natural height is greater than the card's height,
             *   so the phone automatically extends UPWARD above the card's top edge.
             *
             *   overflow: visible on .banner-container lets it show above the card freely.
             *   The inner graphics layer (overflow:hidden) doesn't clip this element
             *   because this div is a sibling, not a child, of that layer.
             *
             *   Result: phone base sits at card bottom, phone top floats above card top.
             */}
            <div
              className={`phone-image-wrap transform ${smoothEase} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <img
                src="/phone-app.png"
                alt="Zajel Mobile App Preview"
              />
            </div>

          </div>{/* end .banner-container */}

        </div>
      </section>
    </>
  );
};

export default AppDownloadSection;