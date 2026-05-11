import React, { useState, useEffect, useRef } from 'react';

const AdvantageSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // --- SCROLL REVEAL LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Base classes for scroll-driven animations
  const animateBase = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";
  const animateHidden = "opacity-0 translate-y-10";
  const animateVisible = "opacity-100 translate-y-0";

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 md:py-24 px-5 lg:px-12 bg-[#FFFFFF] overflow-hidden" 
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Area */}
        <div className={`text-center mb-10 md:mb-14 ${animateBase} ${isVisible ? animateVisible : animateHidden}`}>
          <h2 className="text-[2.25rem] md:text-[3.25rem] font-medium text-[#0A4D26] mb-3 md:mb-4 leading-tight">
            The ZAJEL Advantage.
          </h2>
          <p className="text-[#0A4D26]/70 text-[13px] md:text-sm max-w-lg mx-auto leading-relaxed">
            We combine technology, expertise, and dedication to deliver exceptional courier services you can trust.
          </p>
        </div>

        {/* 
          BENTO GRID 
          Mobile: 2 Columns with auto height.
          Desktop: 3 Columns with tighter 280px row heights for a sleeker profile.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 grid-auto-rows-min md:auto-rows-[280px]">
          
          {/* 
            1. WIDE COVERAGE (GLOBE CARD)
            Mobile: Reduced min-height (170px)
          */}
          <div className={`
            col-span-2 md:col-span-1 md:row-span-2 
            bg-[#36B936] rounded-[2rem] md:rounded-[2.5rem] 
            min-h-[170px] md:min-h-0
            flex flex-row md:flex-col items-center md:items-stretch overflow-hidden relative shadow-sm
            ${animateBase} delay-100 
            ${isVisible ? animateVisible : animateHidden}
          `}>
            {/* Text Content */}
            <div className="w-[60%] md:w-full p-5 md:p-8 order-1 md:order-2 flex flex-col justify-center md:justify-start z-10 relative md:mt-auto">
              <h3 className="text-white text-[1.5rem] md:text-[2rem] lg:text-[2.25rem] font-medium mb-1.5 md:mb-3 leading-tight">
                Wide <br /> Coverage
              </h3>
              <p className="text-[#0A4D26] text-[12px] md:text-[13px] font-medium leading-relaxed pr-2 md:pr-0 md:max-w-[260px]">
                Extensive network covering all major domestic cities and seamlessly connecting 200+ countries globally.
              </p>
            </div>
            
            {/* Globe Image & Glow Layer */}
            <div className="w-[40%] md:w-full md:h-[55%] h-full relative order-2 md:order-1 flex items-center justify-center md:pt-8 z-0">
              {/* Soft White Radial Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] md:w-[130%] md:h-[130%] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_65%)] pointer-events-none" />
              
              <img 
                src="/ChatGPT Image Apr 23, 2026 at 11_17_37 AM-2.png" 
                alt="Wide Coverage Globe" 
                className="w-[250px] md:w-[95%] md:max-w-[380px] max-w-[220px] object-contain drop-shadow-xl z-10 relative"
              />
            </div>
          </div>

          {/* 
            2. REAL-TIME TRACKING 
          */}
          <div className={`
            col-span-1 
            bg-[#36B936] rounded-[1.75rem] md:rounded-[2.5rem] 
            p-5 md:p-8 
            flex flex-col justify-center shadow-sm 
            ${animateBase} delay-200 
            ${isVisible ? animateVisible : animateHidden}
          `}>
            <h3 className="text-white text-xl md:text-[1.75rem] font-medium mb-2 md:mb-4 leading-tight">
              Real-Time <br className="md:hidden" /> Tracking
            </h3>
            <p className="text-[#0A4D26] text-[11px] md:text-[13px] font-medium leading-relaxed">
              Track your shipments 24/7 with live milestone updates and automated delivery notifications.
            </p>
          </div>

          {/* 
            3. TRANSPARENT PRICING
          */}
          <div className={`
            col-span-1 
            bg-[#36B936] rounded-[1.75rem] md:rounded-[2.5rem] 
            p-5 md:p-8 
            flex flex-col justify-center shadow-sm 
            ${animateBase} delay-300 
            ${isVisible ? animateVisible : animateHidden}
          `}>
            <h3 className="text-white text-xl md:text-[1.75rem] font-medium mb-2 md:mb-4 leading-tight">
              Transparent Pricing
            </h3>
            <p className="text-[#0A4D26] text-[11px] md:text-[13px] font-medium leading-relaxed">
              No hidden fees. Get instant, intelligent quotes and know exactly what you will pay upfront.
            </p>
          </div>

          {/* 
            4. PROFESSIONAL HANDLING
            Mobile: Reduced min-height (170px) to match top box
          */}
          <div className={`
            col-span-2 md:col-span-2 
            bg-[#36B936] rounded-[2rem] md:rounded-[2.5rem] 
            min-h-[170px] md:min-h-0
            flex flex-row overflow-hidden relative shadow-sm 
            ${animateBase} delay-[400ms] 
            ${isVisible ? animateVisible : animateHidden}
          `}>
             <div className="w-[60%] md:w-1/2 p-5 md:p-8 flex flex-col justify-center z-10 relative">
                <h3 className="text-white text-[1.5rem] md:text-[2rem] lg:text-[2.25rem] font-medium mb-1.5 md:mb-3 leading-tight">
                  Professional <br className="md:hidden" /> Handling
                </h3>
                <p className="text-[#0A4D26] text-[12px] md:text-[13px] font-medium leading-relaxed pr-2 md:pr-0 md:max-w-[280px]">
                  Trained staff ensuring your packages are handled with care from pickup to delivery.
                </p>
             </div>
             
             {/* Right Side Image & Gradient */}
             <div className="w-[50%] md:w-1/2 absolute right-0 h-full z-0">
                <img 
                  src="/ChatGPT Image Apr 22, 2026 at 11_59_15 AM-2.png" 
                  alt="Professional Package Handling" 
                  className="w-full h-full object-cover object-left"
                />
                {/* Seamless Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#36B936] via-[#36B936]/80 md:via-[#36B936]/40 to-transparent" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvantageSection; 