import React from 'react';

// --- CONFIGURATION DATA ---
const LOGOS = [
  { id: 1, src: '/logo1.png', alt: 'Dubai Customs' },
  { id: 2, src: '/logo2.png', alt: 'Jafza' },
  { id: 3, src: '/logo3.png', alt: 'Dubai Courts' },
  { id: 4, src: '/logo4.png', alt: 'Public Prosecution' },
  { id: 5, src: '/logo5.png', alt: 'Dubai Police' },
  { id: 6, src: '/logo6.png', alt: 'Identity and Citizenship' },
];

const TrustedMarquee: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 35s linear infinite;
          }
          @media (max-width: 639px) {
            .animate-infinite-scroll {
              animation-duration: 20s;
            }
          }
          .pause-on-hover:hover .animate-infinite-scroll {
            animation-play-state: paused;
          }
        `}
      </style>

      <section
        className="w-full py-8 lg:py-12 bg-[#FFFFFF] overflow-hidden flex flex-col items-center border-t border-[#36B936]/10"
        style={{ fontFamily: '"Manrope", sans-serif' }}
      >
        {/* Section Heading */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-10">
          <h3 className="text-[#0A4D26] text-[12px] sm:text-[13px] lg:text-[14px] font-bold tracking-[0.15em] uppercase">
            Trusted by Contractors
          </h3>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full max-w-[1600px] mx-auto pause-on-hover flex">
          <div className="absolute top-0 left-0 w-10 sm:w-16 md:w-32 h-full bg-gradient-to-r from-[#F6F8F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-10 sm:w-16 md:w-32 h-full bg-gradient-to-l from-[#F6F8F6] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-infinite-scroll w-max">
            {/* Track 1 */}
            <div className="flex items-center justify-around min-w-full gap-6 sm:gap-10 md:gap-16 px-4 sm:px-6 md:px-10">
              {LOGOS.map((logo) => (
                <img
                  key={`t1-${logo.id}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[80px] sm:max-w-[100px] md:max-w-none object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>
            {/* Track 2 */}
            <div className="flex items-center justify-around min-w-full gap-6 sm:gap-10 md:gap-16 px-4 sm:px-6 md:px-10" aria-hidden="true">
              {LOGOS.map((logo) => (
                <img
                  key={`t2-${logo.id}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[80px] sm:max-w-[100px] md:max-w-none object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedMarquee;