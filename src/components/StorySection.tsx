import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const StorySection: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const smoothEase = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .story-wrapper { overflow: visible !important; }
          .story-section-inner { margin-top: 50px; } /* Slightly reduced to account for the pop-out */
        }
      `}</style>

      <section
        ref={sectionRef}
        className="w-full pb-16 pt-8 lg:pb-32 lg:pt-16 px-5 sm:px-6 lg:px-12 bg-white"
        style={{ fontFamily: '"Manrope", sans-serif' }}
      >
        <div className="story-section-inner max-w-[1200px] mx-auto relative lg:mt-60">

          {/* Main Banner Wrapper */}
          <div className={`story-wrapper relative w-full flex flex-col md:flex-row h-[160px] sm:h-[200px] md:h-auto md:min-h-[380px] lg:min-h-[420px] overflow-visible rounded-[1.75rem] md:rounded-[2.5rem] transform ${smoothEase} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

            {/* --- LAYER 1: Gradient Background & Fold --- */}
            <div
              className="absolute inset-0 rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden z-0 shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #FFFFFF 0%, #36B936 41%, #36B936 100%)'
              }}
            >
              <svg
                className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 text-[#D2EBD2]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon fill="currentColor" points="100,0 100,100 0,100" />
              </svg>
            </div>

            {/* --- LAYER 2: Foreground Content Wrapper --- */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-stretch">

              {/* ── MOBILE layout ── */}
              <div className="flex md:hidden w-full h-full relative">

                {/* Image Wrapper */}
                <div className="absolute -left-2 bottom-0 w-[45%] h-[140%] sm:h-[135%] overflow-visible z-20 pointer-events-none">
                  <img
                    src="/delivery-man.png"
                    alt="Zajel Delivery Professional"
                    className="w-full h-full object-contain object-bottom drop-shadow-xl"
                  />
                </div>

                {/* Text — right side */}
                <div className="absolute right-0 top-0 w-[55%] h-full flex flex-col justify-center pr-4 pl-1">
                  <h2 className="text-white text-[12px] sm:text-[15px] font-light leading-[1.3] tracking-tight mb-2.5 drop-shadow-sm">
                    At ZAJEL, we go beyond delivery to provide agile, global logistics and business transformation
                  </h2>
                  <Link 
                    to="/about" 
                    className="bg-white hover:bg-gray-50 active:scale-[0.98] transition-all duration-300 text-[#36B936] px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[9px] sm:text-[11px] font-bold shadow-sm self-start focus:outline-none inline-block text-center"
                  >
                    Explore Our Story
                  </Link>
                </div>
              </div>

              {/* ── TABLET + DESKTOP layout ── */}

              {/* Left Side: Image */}
              <div className="hidden md:block w-[42%] lg:w-[45%] relative pointer-events-none" style={{ overflow: 'visible' }}>
                <img
                  src="/delivery-man.png"
                  alt="Zajel Delivery Professional"
                  className="absolute bottom-0
                             md:-left-6
                             lg:-left-10
                             xl:-left-16
                             w-[280px] lg:w-[360px] xl:w-[420px]
                             max-w-none h-auto object-contain
                             drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
                />
              </div>

              {/* Right Side: Text */}
              <div className="hidden md:flex w-[58%] lg:w-[55%] p-10 lg:p-14 xl:p-16 flex-col items-start justify-center">
                <h2 className="text-white text-[1.75rem] lg:text-[2.1rem] xl:text-[2.5rem] font-light leading-[1.2] tracking-tight mb-8 drop-shadow-sm">
                  At ZAJEL, we go beyond delivery to provide agile, global logistics and business transformation
                </h2>
                <Link 
                  to="/about" 
                  className="bg-white hover:bg-gray-50 active:scale-[0.98] transition-all duration-300 text-[#36B936] px-8 py-3.5 rounded-full text-[15px] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#36B936] inline-block"
                >
                  Explore Our Story
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorySection;