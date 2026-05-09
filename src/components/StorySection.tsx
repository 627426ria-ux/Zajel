import React from 'react';

const StorySection: React.FC = () => {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .story-wrapper { overflow: visible !important; }
          .story-section-inner { margin-top: 60px; }
        }
      `}</style>

      <section
        className="w-full pb-16 pt-8 lg:pb-32 lg:pt-16 px-6 lg:px-12 bg-[#F6F8F6]"
        style={{ fontFamily: '"Manrope", sans-serif' }}
      >
        <div className="story-section-inner max-w-[1200px] mx-auto relative lg:mt-24">

          {/* Main Banner Wrapper */}
          <div className="story-wrapper relative w-full flex flex-col md:flex-row min-h-[220px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[420px] overflow-visible rounded-[2rem] md:rounded-[2.5rem]">

            {/* --- LAYER 1: Gradient Background & Fold --- */}
            <div
              className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden z-0"
              style={{
                background: 'linear-gradient(90deg, #F6F8F6 0%, #36B936 41%, #36B936 100%)'
              }}
            >
              <svg
                className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-[#D2EBD2]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon fill="currentColor" points="100,0 100,100 0,100" />
              </svg>
            </div>

            {/* --- LAYER 2: Foreground Content Wrapper --- */}
            <div className="relative z-10 w-full flex flex-col md:flex-row items-stretch">

              {/* ── MOBILE layout ── */}
              <div className="flex md:hidden w-full relative min-h-[220px] sm:min-h-[300px]">

                {/* Image — overflows upward for pop-out effect */}
                <div className="absolute left-0 bottom-0 w-[48%] overflow-visible z-20">
                  <img
                    src="/delivery-man.png"
                    alt="Zajel Delivery Professional"
                    className="w-full object-contain object-bottom pointer-events-none"
                    style={{ height: '340px', marginTop: '-80px' }}
                  />
                </div>

                {/* Text — right side, vertically centered */}
                <div className="absolute right-0 top-0 w-[52%] h-full flex flex-col justify-center pr-4 pl-2">
                  <h2 className="text-white text-[0.85rem] sm:text-[1rem] font-light leading-[1.3] tracking-tight mb-3 drop-shadow-sm">
                    At ZAJEL, we go beyond delivery to provide agile, global logistics and business transformation
                  </h2>
                  <button className="bg-white hover:bg-gray-50 transition-colors duration-300 text-[#36B936] px-4 py-2 rounded-full text-[10px] font-bold shadow-sm self-start focus:outline-none">
                    Explore Our Story
                  </button>
                </div>
              </div>

              {/* ── TABLET + DESKTOP layout ── */}

              {/* Left Side: Image — pops out above the banner */}
              <div className="hidden md:block w-[42%] lg:w-[45%] relative" style={{ overflow: 'visible' }}>
                <img
                  src="/delivery-man.png"
                  alt="Zajel Delivery Professional"
                  className="absolute bottom-0
                             md:-left-6
                             lg:-left-10
                             xl:-left-16
                             w-[280px] lg:w-[360px] xl:w-[420px]
                             max-w-none h-auto object-contain
                             drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]
                             pointer-events-none"

                />
              </div>

              {/* Right Side: Text */}
              <div className="hidden md:flex w-[58%] lg:w-[55%] p-10 lg:p-14 xl:p-16 flex-col items-start justify-center">
                <h2 className="text-white text-[1.75rem] lg:text-[2.1rem] xl:text-[2.5rem] font-light leading-[1.2] tracking-tight mb-8 drop-shadow-sm">
                  At ZAJEL, we go beyond delivery to provide agile, global logistics and business transformation
                </h2>
                <button className="bg-white hover:bg-gray-50 transition-colors duration-300 text-[#36B936] px-8 py-3.5 rounded-full text-[15px] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#36B936] focus:ring-offset-[#36B936]">
                  Explore Our Story
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorySection;