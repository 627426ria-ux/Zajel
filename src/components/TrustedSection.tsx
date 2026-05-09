import React from 'react';

const TrustedSection: React.FC = () => {
  return (
    <section 
      className="w-full pt-30 pb-10 md:pb-16 lg:pb-20 px-5 sm:px-6 lg:px-12 bg-[#F6F8F6]" 
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[1000px] mx-auto">
        
        {/* --- HEADER AREA --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12">
          
          {/* Left: Main Heading */}
          <h2 className="text-[#0A4D26] text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] font-medium leading-[1.1] tracking-tight">
            Trusted by <br className="hidden sm:block" />
            <span className="text-[#36B936]">500K +</span> <br className="hidden sm:block" />
            Businesses
          </h2>
          
          {/* Right: Subheading */}
          <p className="text-[#0A4D26]/80 text-[13px] md:text-[14px] lg:text-[15px] font-normal leading-relaxed max-w-full md:max-w-[280px] pb-1">
            From solo traders to enterprise — Zajel powers shipments across 200+ countries every day.
          </p>
          
        </div>

        {/* --- STATS GRID --- */}
        <div className="w-full rounded-[1.2rem] md:rounded-[1.5rem] border border-[#36B936]/30 overflow-hidden bg-white shadow-sm">
          
          <div className="grid grid-cols-2 md:grid-cols-2">
            
            {/* Cell 1: Top Left */}
            <div className="group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 border-b border-r border-[#36B936]/30 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default">
              <div className="text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-medium leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] origin-left">
                42M+
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-medium transition-colors duration-300">
                Shipments Delivered
              </div>
            </div>

            {/* Cell 2: Top Right */}
            <div className="group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 border-b border-[#36B936]/30 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default">
              <div className="text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-medium leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] origin-left">
                200+
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-medium transition-colors duration-300">
                Countries Covered
              </div>
            </div>

            {/* Cell 3: Bottom Left */}
            <div className="group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 border-r border-[#36B936]/30 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default">
              <div className="text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-medium leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] origin-left">
                15
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-medium transition-colors duration-300">
                Years of Success
              </div>
            </div>

            {/* Cell 4: Bottom Right */}
            <div className="group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default">
              <div className="text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-medium leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] origin-left">
                500K+
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-medium transition-colors duration-300">
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