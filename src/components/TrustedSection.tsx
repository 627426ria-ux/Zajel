import React, { useState, useEffect, useRef } from 'react';

// --- ANIMATED COUNTER HOOK/COMPONENT ---
const AnimatedCounter = ({ end, suffix = "", duration = 2000, isVisible }: { end: number, suffix?: string, duration?: number, isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth ease-out cubic function for premium deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure it lands exactly on the target
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <>{count}{suffix}</>;
};

const TrustedSection: React.FC = () => {
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

  // Smooth easing bezier curve
  const smoothEase = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";

  return (
    <section 
      ref={sectionRef}
      className="w-full pt-30 pb-10 md:pb-16 lg:pb-20 px-5 sm:px-6 lg:px-12 bg-white overflow-hidden" 
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[1000px] mx-auto">
        
        {/* --- HEADER AREA (Animated) --- */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12 transform ${smoothEase} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left: Main Heading (Updated to font-light/300) */}
          <h2 className="text-[#0A4D26] text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight">
            Trusted by <br className="hidden sm:block" />
            <span className="text-[#36B936]">500K +</span> <br className="hidden sm:block" />
            Businesses
          </h2>
          
          {/* Right: Subheading (Updated to font-light/300) */}
          <p className="text-[#0A4D26]/80 text-[13px] md:text-[14px] lg:text-[15px] font-light leading-relaxed max-w-full md:max-w-[280px] pb-1">
            From solo traders to enterprise — Zajel powers shipments across 200+ countries every day.
          </p>
          
        </div>

        {/* --- STATS GRID (Animated with a slight delay) --- */}
        <div className={`w-full rounded-[1.2rem] md:rounded-[1.5rem] border border-[#36B936]/30 overflow-hidden bg-white shadow-sm transform ${smoothEase} delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          <div className="grid grid-cols-2 md:grid-cols-2">
            
            {/* Cell 1: Top Left */}
            <div className="group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 border-b border-r border-[#36B936]/30 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default">
              <div className="text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-light leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] origin-left">
                <AnimatedCounter end={42} suffix="M+" isVisible={isVisible} />
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-light transition-colors duration-300">
                Shipments Delivered
              </div>
            </div>

            {/* Cell 2: Top Right */}
            <div className="group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 border-b border-[#36B936]/30 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default">
              <div className="text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-light leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] origin-left">
                <AnimatedCounter end={200} suffix="+" isVisible={isVisible} />
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-light transition-colors duration-300">
                Countries Covered
              </div>
            </div>

            {/* Cell 3: Bottom Left */}
            <div className="group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 border-r border-[#36B936]/30 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default">
              <div className="text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-light leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] origin-left">
                <AnimatedCounter end={15} suffix="" isVisible={isVisible} />
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-light transition-colors duration-300">
                Years of Success
              </div>
            </div>

            {/* Cell 4: Bottom Right */}
            <div className="group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default">
              <div className="text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-light leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] origin-left">
                <AnimatedCounter end={500} suffix="K+" isVisible={isVisible} />
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-light transition-colors duration-300">
                Worldwide Destinations
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
};

export default TrustedSection;