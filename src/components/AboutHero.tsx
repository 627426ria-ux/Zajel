import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="w-full bg-[#FDFDFD] pt-24 pb-16 px-6 lg:px-24" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1300px] mx-auto">
        
        {/* 1. TOP HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10">
          <div className="max-w-3xl">
            <h1 className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight">
              Delivering a smarter courier <br /> experience Since 2008
            </h1>
            
            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <button className="bg-[#36B936] hover:bg-[#2da32d] text-white px-8 py-3.5 rounded-full text-[14px] font-medium transition-all flex items-center gap-2 shadow-sm active:scale-95">
                <span className="text-lg leading-none">+</span> Download Company Profile
              </button>
              
              <button className="border border-[#064423]/10 hover:border-[#36B936]/30 hover:bg-[#EAF1E7]/30 text-[#064423]/70 px-8 py-3.5 rounded-full text-[14px] font-medium transition-all flex items-center gap-2 active:scale-95">
                IMS Policy <span className="text-[10px] transform rotate-45">↑</span>
              </button>
            </div>
          </div>

          {/* Right Side Description */}
          <div className="md:max-w-[320px] pt-4 md:pt-12">
            <p className="text-[#064423]/50 text-[13px] font-light leading-relaxed">
              At ZAJEL, we're on a mission to be the courier company that goes beyond distance and destination to offer business transformation, reliable global services, and flexible, agile solutions.
            </p>
          </div>
        </div>

        {/* 2. IMAGE GRID SECTION */}
        <div className="mt-16">

          {/* Mobile: single center image only */}
          <div className="block md:hidden w-full h-[280px] rounded-[2rem] overflow-hidden bg-[#F9FBF9] border border-[#064423]/5">
            <img
              src="/image copy.png"
              alt="Zajel Headquarters"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tablet & Desktop: full three-column grid */}
          <div className="hidden md:grid md:grid-cols-12 gap-5 h-[500px]">

            {/* Left Image */}
            <div className="md:col-span-4 rounded-[2.5rem] overflow-hidden bg-[#F9FBF9] border border-[#064423]/5">
              <img
                src="/image.png"
                alt="Zajel Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Center Image: Largest */}
            <div className="md:col-span-5 rounded-[2.5rem] overflow-hidden bg-[#F9FBF9] border border-[#064423]/5">
              <img
                src="/image copy.png"
                alt="Zajel Headquarters"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Image */}
            <div className="md:col-span-3 rounded-[2.5rem] overflow-hidden bg-[#F9FBF9] border border-[#064423]/5">
              <img
                src="/image copy 2.png"
                alt="Zajel Event Booth"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;