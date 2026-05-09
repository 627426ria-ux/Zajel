import React, { useEffect, useRef, useState } from 'react';

const WhyChooseZajel: React.FC = () => {
  const patternStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h10v10H0V0zm10 10h10v10H10V10zm10 0h10V0H20v10zm10 10h10v10H30V20zm10 0h10V10H40v10zm10 10h10V20H50v10zM0 20h10v10H0V20zm10 10h10v10H10V30zm20 0h10v10H30V30zm10-10h10v10H40V20zm10 10h10V20H50v10zM0 40h10v10H0V40zm10 10h10v10H10V50zm10 0h10V40H20v10zm10 10h10v10H30V50zm10 0h10V40H40v10zm10 10h10V40H50v10z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const revealClass = (delay: string) => `
    transition-all duration-1000 ease-out 
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
    ${delay}
  `;

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 bg-white overflow-hidden"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <h2 className={`text-center font-medium text-[#0A4D26] mb-8 sm:mb-12
                        text-[1.75rem] sm:text-[2.25rem] lg:text-[3.25rem]
                        ${revealClass('delay-0')}`}>
          Why Choose Zajel
        </h2>

        {/* Bento Grid — always 2 columns, top card always full-width */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6">

          {/* ── TOP WIDE CARD ── */}
          <div className={`col-span-2 relative bg-[#36B936] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden flex items-center
                          h-[160px] sm:h-[220px] lg:h-[280px]
                          ${revealClass('delay-100')}`}>
            <div className="absolute inset-0 z-0 opacity-40" style={patternStyle} />

            {/* Stat text */}
            <div className="relative z-20 pl-7 sm:pl-12 lg:pl-16 w-1/2">
              <div className="text-white font-medium leading-none mb-1 sm:mb-2
                              text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem]">
                1M+
              </div>
              <div className="text-white/80 font-light
                              text-[11px] sm:text-[14px] lg:text-[16px]">
                Deliveries Completed
              </div>
            </div>

            {/* Image */}
            <div className="absolute right-0 top-0 h-full w-[55%] z-10">
              <img
                src="/ChatGPT Image Apr 23, 2026 at 11_02_53 AM.png"
                alt="Zajel delivery boxes"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#36B936] via-[#36B936]/60 to-transparent" />
            </div>
          </div>

          {/* ── BOTTOM LEFT ── */}
          <div className={`relative bg-[#36B936] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden flex flex-col justify-center
                          h-[160px] sm:h-[220px] lg:h-[280px]
                          p-6 sm:p-9 lg:p-12
                          ${revealClass('delay-300')}`}>
            <div className="absolute inset-0 z-0 opacity-40" style={patternStyle} />

            <div className="relative z-10">
              <svg className="text-[#0A4D26] mb-4 sm:mb-6 lg:mb-8
                              w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div className="text-white font-medium leading-none mb-1 sm:mb-2
                              text-[1.75rem] sm:text-[2.4rem] lg:text-[3rem]">
                200+
              </div>
              <div className="text-white/80 font-light
                              text-[11px] sm:text-[14px] lg:text-[16px]">
                Countries Reached
              </div>
            </div>
          </div>

          {/* ── BOTTOM RIGHT ── */}
          <div className={`relative bg-[#36B936] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden flex flex-col justify-center
                          h-[160px] sm:h-[220px] lg:h-[280px]
                          p-6 sm:p-9 lg:p-12
                          ${revealClass('delay-500')}`}>
            <div className="absolute inset-0 z-0 opacity-40" style={patternStyle} />

            <div className="relative z-10">
              <svg className="text-[#0A4D26] mb-4 sm:mb-6 lg:mb-8
                              w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <div className="text-white font-medium leading-none mb-1 sm:mb-2
                              text-[1.75rem] sm:text-[2.4rem] lg:text-[3rem]">
                Same Day
              </div>
              <div className="text-white/80 font-light
                              text-[11px] sm:text-[14px] lg:text-[16px]">
                Pickup Available
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .delay-0   { transition-delay: 0ms; }
        .delay-100 { transition-delay: 100ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-500 { transition-delay: 500ms; }
      `}</style>
    </section>
  );
};

export default WhyChooseZajel;