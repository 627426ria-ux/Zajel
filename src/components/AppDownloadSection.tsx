import React from 'react';

const AppDownloadSection: React.FC = () => {
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
        className="section-mobile-pt relative w-full flex items-center justify-center px-4 sm:px-8 md:px-12 bg-[#F6F8F6] pt-[140px] sm:pt-[160px] md:pt-0 pb-8 md:pb-0 md:min-h-[100svh]"
        style={{ fontFamily: '"Manrope", sans-serif' }}
      >
        <div className="w-full max-w-[1200px] relative">

          {/* Main Green Banner Container */}
          <div className="relative w-full h-[150px] sm:h-[320px] md:h-[491px] bg-[#36B936] rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-row items-center justify-between overflow-visible">

            {/* --- LAYER 1: The Pattern Mask --- */}
            <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden pointer-events-none z-0">
              <div
                className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: "url('/zajel-maze-pattern.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>

            {/* --- LAYER 2: Text Content (Left Side) --- */}
            <div className="text-left-mobile w-[55%] h-full p-5 sm:p-10 md:p-16 relative z-10 flex flex-col justify-center">

              <h2 className="text-white text-[1.35rem] sm:text-[2.2rem] md:text-[4rem] font-normal leading-[1.05] tracking-tight mb-2 sm:mb-4 md:mb-6 drop-shadow-sm">
                Download the <br /> ZAJEL App
              </h2>

              <p className="text-[#0A4D26] text-[10px] sm:text-[14px] md:text-[18px] font-medium leading-snug sm:leading-relaxed mb-3 sm:mb-6 md:mb-10 max-w-md">
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

            {/* --- LAYER 3: Phone Image — tablet/desktop only (inside banner) --- */}
            <div className="phone-original w-[45%] relative h-full z-20 flex-shrink-0">
              <img
                src="/phone-app.png"
                alt="Zajel Mobile App Preview"
                className="absolute bottom-0 right-2 sm:right-6 md:right-12
                           sm:w-[260px] md:w-[480px] md:max-w-none
                           h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)] pointer-events-none"
              />
            </div>

          </div>

          {/* --- MOBILE ONLY: Phone floats freely outside the banner, right side --- */}
          <img
            src="/phone-app.png"
            alt="Zajel Mobile App Preview"
            className="phone-floating-mobile hidden h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)] pointer-events-none"
          />

        </div>
      </section>
    </>
  );
};

export default AppDownloadSection;