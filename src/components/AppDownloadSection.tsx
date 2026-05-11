import React, { useState, useEffect, useRef } from 'react';

const AppDownloadSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // --- SCROLL REVEAL LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Fires only once
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Apple-style smooth easing bezier curve
  const smoothEase = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";

  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          .section-mobile-pt { padding-top: 200px !important; }
          .phone-floating-mobile {
            display: block !important;
            width: 200px !important;
            position: absolute !important;
            bottom: 0 !important;
            right: 12px !important;
            z-index: 30 !important;
          }
          .phone-original { display: none !important; }
          .text-left-mobile { width: 55% !important; }
        }
        @media (min-width: 640px) {
          .phone-floating-mobile { display: none !important; }
          .phone-original { display: block !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`section-mobile-pt relative w-full flex items-center justify-center px-4 sm:px-8 md:px-12 bg-white mt-20 md:mt-32 pt-[140px] sm:pt-[160px] md:pt-0 pb-8 md:pb-0 md:min-h-[100svh] overflow-hidden`}
        style={{ fontFamily: '"Manrope", sans-serif' }}
      >
        <div className="w-full max-w-[1200px] relative">

          {/* Main Green Banner Container */}
          <div className={`relative w-full h-[150px] sm:h-[320px] md:h-[400px] bg-[#36B936] rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-row items-center justify-between overflow-visible transform ${smoothEase} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* --- LAYER 1: Background Graphics Mask --- */}
            {/* The overflow-hidden here ensures your bottom SVG stays cleanly inside the rounded corners */}
            <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden pointer-events-none z-0">
              
              {/* Optional: The faint maze pattern in the background */}
              <div
                className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: "url('/zajel-maze-pattern.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* --- BOTTOM SVG PLACEHOLDER --- */}
              {/* Anchored to the bottom, softly blended for a premium feel */}
              <div className="absolute bottom-0 left-0 w-full flex items-end opacity-30 mix-blend-overlay">
                {/* ======================================================================
                  ⬇️ PASTE YOUR SVG CODE BELOW THIS LINE ⬇️
                  (Pro Tip: Add className="w-full h-auto" to the <svg> tag so it stretches beautifully across the bottom)
                  ======================================================================
                */}
                <svg width="1713" height="339" viewBox="0 0 1713 339" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.296875 338.07L63.7043 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M127.111 338.07L63.7031 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M190.509 338.07L127.102 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M190.516 338.07L253.923 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M253.906 338.07L317.314 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M317.328 338.07L380.736 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M380.742 338.07L444.15 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M507.556 338.07L444.148 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M507.555 338.07L570.962 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M634.368 338.07L570.961 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M697.775 338.07L634.367 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M761.173 338.07L697.766 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M761.188 338.07L824.595 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M824.594 338.07L888.001 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M951.407 338.07L888 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M951.406 338.07L1014.81 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1078.22 338.07L1014.81 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1141.63 338.07L1078.23 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1141.63 338.07L1205.04 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1205.04 338.07L1268.45 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1331.85 338.07L1268.45 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1395.26 338.07L1331.85 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1395.27 338.07L1458.67 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1522.08 338.07L1458.67 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1585.49 338.07L1522.09 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1648.89 338.07L1585.48 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path d="M1712.3 338.07L1648.89 315.588" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M0.296875 315.581L63.7043 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M127.111 315.581L63.7031 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M127.102 315.581L190.509 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M253.923 315.581L190.516 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M317.314 315.581L253.906 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M317.328 315.581L380.736 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M444.15 315.581L380.742 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M507.556 315.581L444.148 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M570.962 315.581L507.555 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M634.368 315.581L570.961 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M634.367 315.581L697.775 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M761.173 315.581L697.766 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M824.595 315.581L761.188 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M888.001 315.581L824.594 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M951.407 315.581L888 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1014.81 315.581L951.406 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1014.81 315.581L1078.22 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1078.23 315.581L1141.63 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1205.04 315.581L1141.63 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1205.04 315.581L1268.45 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1268.45 315.581L1331.85 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1331.85 315.581L1395.26 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1458.67 315.581L1395.27 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1522.08 315.581L1458.67 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1522.09 315.581L1585.49 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1585.48 315.581L1648.89 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.94" d="M1648.89 315.581L1712.3 293.1" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M63.7043 293.097L0.296875 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M127.111 293.097L63.7031 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M127.102 293.097L190.509 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M253.923 293.097L190.516 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M317.314 293.097L253.906 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M380.736 293.097L317.328 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M380.742 293.097L444.15 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M507.556 293.097L444.148 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M507.555 293.097L570.962 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M570.961 293.097L634.368 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M697.775 293.097L634.367 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M697.766 293.097L761.173 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M824.595 293.097L761.188 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M824.594 293.097L888.001 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M951.407 293.097L888 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1014.81 293.097L951.406 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1078.22 293.097L1014.81 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1078.23 293.097L1141.63 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1205.04 293.097L1141.63 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1268.45 293.097L1205.04 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1331.85 293.097L1268.45 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1331.85 293.097L1395.26 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1395.27 293.097L1458.67 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1522.08 293.097L1458.67 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1585.49 293.097L1522.09 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1648.89 293.097L1585.48 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.87" d="M1712.3 293.097L1648.89 270.615" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M63.7043 270.622L0.296875 248.14" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M63.7031 270.617L127.111 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M127.102 270.622L190.509 248.14" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M190.516 270.617L253.923 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M253.906 270.617L317.314 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M317.328 270.617L380.736 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M444.15 270.617L380.742 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M444.148 270.617L507.556 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M570.962 270.622L507.555 248.14" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M570.961 270.617L634.368 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M697.775 270.617L634.367 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M697.766 270.617L761.173 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M824.595 270.617L761.188 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M824.594 270.622L888.001 248.14" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M951.407 270.622L888 248.14" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M951.406 270.617L1014.81 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1078.22 270.622L1014.81 248.14" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1078.23 270.617L1141.63 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1205.04 270.617L1141.63 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1205.04 270.622L1268.45 248.14" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1268.45 270.617L1331.85 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1395.26 270.617L1331.85 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1395.27 270.617L1458.67 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1458.67 270.617L1522.08 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1522.09 270.617L1585.49 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1648.89 270.622L1585.48 248.14" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.81" d="M1712.3 270.617L1648.89 248.136" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M0.296875 248.138L63.7043 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M127.111 248.138L63.7031 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M127.102 248.138L190.509 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M253.923 248.138L190.516 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M317.314 248.138L253.906 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M380.736 248.138L317.328 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M380.742 248.138L444.15 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M444.148 248.138L507.556 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M507.555 248.138L570.962 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M570.961 248.138L634.368 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M634.367 248.138L697.775 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M697.766 248.138L761.173 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M824.595 248.138L761.188 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M888.001 248.138L824.594 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M888 248.138L951.407 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M951.406 248.138L1014.81 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1014.81 248.138L1078.22 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1078.23 248.138L1141.63 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1205.04 248.138L1141.63 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1268.45 248.138L1205.04 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1331.85 248.138L1268.45 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1331.85 248.138L1395.26 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1395.27 248.138L1458.67 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1522.08 248.138L1458.67 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1585.49 248.138L1522.09 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1648.89 248.138L1585.48 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.74" d="M1648.89 248.138L1712.3 225.656" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M0.296875 225.654L63.7043 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M127.111 225.654L63.7031 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M127.102 225.654L190.509 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M253.923 225.654L190.516 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M317.314 225.654L253.906 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M380.736 225.654L317.328 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M444.15 225.654L380.742 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M507.556 225.654L444.148 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M570.962 225.654L507.555 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M570.961 225.654L634.368 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M697.775 225.654L634.367 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M761.173 225.654L697.766 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M824.595 225.654L761.188 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M888.001 225.654L824.594 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M888 225.654L951.407 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M951.406 225.654L1014.81 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1078.22 225.654L1014.81 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1078.23 225.654L1141.63 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1141.63 225.654L1205.04 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1205.04 225.654L1268.45 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1331.85 225.654L1268.45 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1331.85 225.654L1395.26 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1395.27 225.654L1458.67 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1522.08 225.654L1458.67 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1522.09 225.654L1585.49 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1585.48 225.654L1648.89 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.68" d="M1648.89 225.654L1712.3 203.172" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M0.296875 203.174L63.7043 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M127.111 203.174L63.7031 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M127.102 203.174L190.509 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M253.923 203.174L190.516 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M253.906 203.174L317.314 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M317.328 203.174L380.736 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M444.15 203.174L380.742 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M507.556 203.174L444.148 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M570.962 203.174L507.555 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M570.961 203.174L634.368 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M634.367 203.174L697.775 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M761.173 203.174L697.766 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M761.188 203.174L824.595 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M824.594 203.174L888.001 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M888 203.174L951.407 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M951.406 203.174L1014.81 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1014.81 203.174L1078.22 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1078.23 203.174L1141.63 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1205.04 203.174L1141.63 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1268.45 203.174L1205.04 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1331.85 203.174L1268.45 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1331.85 203.174L1395.26 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1458.67 203.174L1395.27 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1458.67 203.174L1522.08 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1522.09 203.174L1585.49 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1585.48 203.174L1648.89 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.62" d="M1712.3 203.174L1648.89 180.693" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M0.296875 180.695L63.7043 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M63.7031 180.695L127.111 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M127.102 180.695L190.509 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M253.923 180.695L190.516 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M317.314 180.695L253.906 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M380.736 180.695L317.328 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M380.742 180.695L444.15 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M444.148 180.695L507.556 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M507.555 180.695L570.962 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M570.961 180.695L634.368 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M697.775 180.695L634.367 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M761.173 180.695L697.766 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M824.595 180.695L761.188 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M888.001 180.695L824.594 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M951.407 180.695L888 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M951.406 180.695L1014.81 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1014.81 180.695L1078.22 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1078.23 180.695L1141.63 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1141.63 180.695L1205.04 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1205.04 180.695L1268.45 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1331.85 180.695L1268.45 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1331.85 180.695L1395.26 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1395.27 180.695L1458.67 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1458.67 180.695L1522.08 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1522.09 180.695L1585.49 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1585.48 180.695L1648.89 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.55" d="M1712.3 180.695L1648.89 158.213" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M0.296875 158.215L63.7043 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M63.7031 158.215L127.111 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M190.509 158.215L127.102 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M253.923 158.215L190.516 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M253.906 158.215L317.314 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M317.328 158.215L380.736 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M444.15 158.215L380.742 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M507.556 158.215L444.148 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M507.555 158.215L570.962 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M634.368 158.215L570.961 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M697.775 158.215L634.367 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M697.766 158.215L761.173 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M761.188 158.215L824.595 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M888.001 158.215L824.594 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M951.407 158.215L888 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1014.81 158.215L951.406 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1014.81 158.215L1078.22 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1078.23 158.215L1141.63 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1141.63 158.215L1205.04 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1205.04 158.215L1268.45 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1331.85 158.215L1268.45 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1331.85 158.215L1395.26 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1395.27 158.215L1458.67 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1458.67 158.215L1522.08 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1585.49 158.215L1522.09 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1585.48 158.215L1648.89 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.49" d="M1648.89 158.215L1712.3 135.733" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M0.296875 135.726L63.7043 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M127.111 135.726L63.7031 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M190.509 135.726L127.102 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M190.516 135.726L253.923 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M253.906 135.726L317.314 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M317.328 135.726L380.736 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M380.742 135.726L444.15 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M507.556 135.726L444.148 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M570.962 135.726L507.555 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M570.961 135.726L634.368 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M634.367 135.726L697.775 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M761.173 135.726L697.766 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M824.595 135.726L761.188 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M888.001 135.726L824.594 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M951.407 135.726L888 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1014.81 135.726L951.406 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1014.81 135.726L1078.22 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1141.63 135.726L1078.23 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1205.04 135.726L1141.63 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1268.45 135.726L1205.04 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1268.45 135.726L1331.85 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1395.26 135.726L1331.85 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1458.67 135.726L1395.27 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1458.67 135.726L1522.08 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1522.09 135.726L1585.49 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1648.89 135.726L1585.48 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.42" d="M1712.3 135.726L1648.89 113.245" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M63.7043 113.256L0.296875 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M63.7031 113.256L127.111 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M127.102 113.256L190.509 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M253.923 113.256L190.516 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M317.314 113.256L253.906 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M380.736 113.256L317.328 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M444.15 113.256L380.742 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M444.148 113.256L507.556 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M507.555 113.256L570.962 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M570.961 113.256L634.368 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M634.367 113.256L697.775 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M697.766 113.256L761.173 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M824.595 113.256L761.188 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M888.001 113.256L824.594 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M951.407 113.256L888 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M951.406 113.256L1014.81 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1014.81 113.256L1078.22 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1078.23 113.256L1141.63 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1205.04 113.256L1141.63 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1205.04 113.256L1268.45 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1268.45 113.256L1331.85 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1331.85 113.256L1395.26 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1395.27 113.256L1458.67 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1522.08 113.256L1458.67 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1585.49 113.256L1522.09 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1585.48 113.256L1648.89 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.36" d="M1712.3 113.256L1648.89 90.7742" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M63.7043 90.7671L0.296875 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M63.7031 90.7671L127.111 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M190.509 90.7671L127.102 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M190.516 90.7671L253.923 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M317.314 90.7671L253.906 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M317.328 90.7671L380.736 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M380.742 90.7671L444.15 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M507.556 90.7671L444.148 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M570.962 90.7671L507.555 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M570.961 90.7671L634.368 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M634.367 90.7671L697.775 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M697.766 90.7671L761.173 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M761.188 90.7671L824.595 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M824.594 90.7671L888.001 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M888 90.7671L951.407 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M951.406 90.7671L1014.81 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1014.81 90.7671L1078.22 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1078.23 90.7671L1141.63 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1141.63 90.7671L1205.04 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1268.45 90.7671L1205.04 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1268.45 90.7671L1331.85 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1331.85 90.7671L1395.26 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1458.67 90.7671L1395.27 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1522.08 90.7671L1458.67 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1585.49 90.7671L1522.09 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1648.89 90.7671L1585.48 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.29" d="M1648.89 90.7671L1712.3 68.2854" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M63.7043 68.2786L0.296875 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M63.7031 68.2786L127.111 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M190.509 68.2786L127.102 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M190.516 68.2786L253.923 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M317.314 68.2786L253.906 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M317.328 68.2786L380.736 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M380.742 68.2786L444.15 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M507.556 68.2786L444.148 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M507.555 68.2786L570.962 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M570.961 68.2786L634.368 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M634.367 68.2786L697.775 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M697.766 68.2786L761.173 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M824.595 68.2786L761.188 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M824.594 68.2786L888.001 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M888 68.2786L951.407 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M951.406 68.2786L1014.81 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1078.22 68.2786L1014.81 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1078.23 68.2786L1141.63 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1205.04 68.2786L1141.63 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1268.45 68.2786L1205.04 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1268.45 68.2786L1331.85 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1395.26 68.2786L1331.85 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1395.27 68.2786L1458.67 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1458.67 68.2786L1522.08 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1522.09 68.2786L1585.49 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1648.89 68.2786L1585.48 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.23" d="M1712.3 68.2786L1648.89 45.7969" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M0.296875 45.8035L63.7043 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M63.7031 45.8035L127.111 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M127.102 45.8035L190.509 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M253.923 45.8035L190.516 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M253.906 45.8035L317.314 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M317.328 45.8035L380.736 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M380.742 45.8035L444.15 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M507.556 45.8035L444.148 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M570.962 45.8035L507.555 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M570.961 45.8035L634.368 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M697.775 45.8035L634.367 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M761.173 45.8035L697.766 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M761.188 45.8035L824.595 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M824.594 45.8035L888.001 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M888 45.8035L951.407 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1014.81 45.8035L951.406 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1014.81 45.8035L1078.22 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1078.23 45.8035L1141.63 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1205.04 45.8035L1141.63 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1205.04 45.8035L1268.45 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1331.85 45.8035L1268.45 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1331.85 45.8035L1395.26 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1395.27 45.8035L1458.67 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1458.67 45.8035L1522.08 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1585.49 45.8035L1522.09 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1648.89 45.8035L1585.48 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.17" d="M1712.3 45.8035L1648.89 23.3218" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M0.296875 23.3191L63.7043 0.837395" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M127.111 23.3193L63.7031 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M127.102 23.3193L190.509 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M253.923 23.3193L190.516 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M253.906 23.3193L317.314 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M380.736 23.3193L317.328 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M380.742 23.3193L444.15 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M444.148 23.3193L507.556 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M570.962 23.3193L507.555 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M570.961 23.3193L634.368 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M634.367 23.3193L697.775 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M761.173 23.3193L697.766 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M761.188 23.3193L824.595 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M888.001 23.3193L824.594 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M888 23.3193L951.407 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1014.81 23.3193L951.406 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1078.22 23.3193L1014.81 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1141.63 23.3193L1078.23 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1141.63 23.3193L1205.04 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1205.04 23.3193L1268.45 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1268.45 23.3193L1331.85 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1331.85 23.3193L1395.26 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1395.27 23.3193L1458.67 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1522.08 23.3193L1458.67 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1585.49 23.3193L1522.09 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1648.89 23.3193L1585.48 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
<path opacity="0.1" d="M1712.3 23.3193L1648.89 0.837639" stroke="white" stroke-opacity="0.42" stroke-width="1.77708"/>
</svg>

                

                {/* ======================================================================
                  ⬆️ PASTE YOUR SVG CODE ABOVE THIS LINE ⬆️
                  ======================================================================
                */}
              </div>
            </div>

            {/* --- LAYER 2: Text Content (Left Side) --- */}
            <div className={`text-left-mobile w-[55%] h-full p-5 sm:p-10 md:p-16 relative z-10 flex flex-col justify-center transform ${smoothEase} delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

              <h2 className="text-white text-[1.35rem] sm:text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] font-normal leading-[1.05] tracking-tight mb-2 sm:mb-4 md:mb-6 drop-shadow-sm">
                Download the <br /> ZAJEL App
              </h2>

              <p className="text-[#0A4D26] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-snug sm:leading-relaxed mb-3 sm:mb-6 md:mb-10 max-w-md">
                Track shipments, get instant updates, and manage your deliveries anytime, anywhere.
              </p>

              <div className="flex flex-col gap-1 sm:gap-3 md:gap-4">
                <span className="text-[#0A4D26] text-[10px] sm:text-[16px] md:text-[20px] font-medium hidden sm:block">
                  Download Our App
                </span>

                {/* App Store Buttons */}
                <div className="flex items-center gap-2 md:gap-4">
                  <a href="#" className="focus:outline-none focus:ring-2 focus:ring-white rounded-lg transition-transform hover:scale-105">
                    <img
                      src="/image copy 15.png"
                      alt="Get it on Google Play"
                      className="h-7 sm:h-10 md:h-12 w-auto object-contain"
                    />
                  </a>

                  <a href="#" className="focus:outline-none focus:ring-2 focus:ring-white rounded-lg transition-transform hover:scale-105">
                    <img
                      src="/image copy 16.png"
                      alt="Download on the App Store"
                      className="h-7 sm:h-10 md:h-12 w-auto object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* --- LAYER 3: Phone Image — tablet/desktop only --- */}
            <div className={`phone-original w-[45%] relative h-full z-20 flex-shrink-0 transform ${smoothEase} delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
              <img
                src="/phone-app.png"
                alt="Zajel Mobile App Preview"
                className="absolute bottom-0 right-2 sm:right-6 md:right-12
                           sm:w-[260px] md:w-[380px] lg:w-[440px] md:max-w-none
                           h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)] pointer-events-none"
              />
            </div>

          </div>

          {/* --- MOBILE ONLY: Phone floats freely outside the banner --- */}
          <img
            src="/phone-app.png"
            alt="Zajel Mobile App Preview"
            className={`phone-floating-mobile hidden h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)] pointer-events-none transform ${smoothEase} delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
          />

        </div>
      </section>
    </>
  );
};

export default AppDownloadSection;