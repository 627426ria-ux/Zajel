import React from 'react';

const EcommerceHero: React.FC = () => {
  return (
    <section
      className="w-full px-4 md:px-6 lg:px-12 pt-24 lg:pt-[104px]
                 min-h-screen flex items-center"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div
        className="max-w-[1400px] w-full mx-auto relative overflow-hidden
                   h-[80svh] sm:h-[60svh] lg:h-[70svh]
                   flex items-end shadow-lg rounded-[2rem] lg:rounded-[2.5rem]"
      >
        {/* LAYER 1: Background Images */}
        
        {/* Mobile Image (Hidden on medium screens and larger) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 block md:hidden"
          style={{ backgroundImage: "url('/ChatGPT Image May 12, 2026 at 02_04_41 AM.png')" }}
        />
        
        {/* Desktop Image (Hidden on small screens) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 hidden md:block"
          style={{ backgroundImage: "url('/ChatGPT Image May 12, 2026 at 01_42_28 AM.png')" }}
        />

        {/* LAYER 2: Gradient */}
        <div className="absolute inset-0 w-full h-full z-10
                        bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* LAYER 3: Content pinned to bottom */}
        <div className="relative z-20 w-full sm:w-[80%] md:w-[60%] lg:w-[50%]
                        p-6 sm:p-8 lg:p-12 xl:p-16
                        flex flex-col items-start">
          <h1 className="text-white font-light leading-[1.05] tracking-tight
                         text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[4rem]
                         mb-3 md:mb-4">
            E-commerce <br /> Solutions
          </h1>
          <p className="text-white/75 font-extralight leading-relaxed
                        text-[12px] sm:text-[14px] lg:text-[16px]
                        mb-6 md:mb-8 max-w-[400px]">
            End-to-end fulfillment, seamless platform integrations, and rapid last-mile delivery — built to scale your online business and delight your customers.
          </p>
          <button className="bg-[#05361A] hover:bg-[#03200F] transition-colors duration-300
                             text-[#36B936] rounded-full
                             flex items-center gap-2
                             px-5 md:px-7 py-2.5 md:py-3
                             text-[12px] md:text-[14px]
                             shadow-sm hover:shadow-md">
            <span className="text-base font-extralight leading-none">+</span>
            <span className="font-medium tracking-wide">Get a Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcommerceHero;