import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase'; // <-- Adjust to your supabase client path

export interface AboutHeroContent {
  heading: string;
  description: string;
  btn1_label: string;
  btn1_url: string;
  btn2_label: string;
  btn2_url: string;
  image1_url: string;
  image2_url: string;
  image3_url: string;
}

const AboutHero: React.FC = () => {
  const [data, setData] = useState<AboutHeroContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      const { data: sectionData, error } = await supabase
        .from('page_sections')
        .select('content_en, enabled')
        .eq('id', 'about_hero')
        .single();

      if (!error && sectionData?.enabled && sectionData.content_en) {
        setData(sectionData.content_en as AboutHeroContent);
      }
      setLoading(false);
    };

    fetchHero();
  }, []);

  if (loading || !data) return null;

  return (
    <section className="w-full bg-[#FDFDFD] pt-24 pb-16 px-6 lg:px-24" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1300px] mx-auto">
        
        {/* 1. TOP HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10">
          <div className="max-w-3xl">
            {/* whitespace-pre-line renders the \n from the CMS as a line break */}
            <h1 className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight whitespace-pre-line">
              {data.heading}
            </h1>
            
            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a 
                href={data.btn1_url}
                className="bg-[#36B936] hover:bg-[#2da32d] text-white px-8 py-3.5 rounded-full text-[14px] font-medium transition-all flex items-center gap-2 shadow-sm active:scale-95"
              >
                <span className="text-lg leading-none">+</span> {data.btn1_label}
              </a>
              
              <a 
                href={data.btn2_url}
                className="border border-[#064423]/10 hover:border-[#36B936]/30 hover:bg-[#EAF1E7]/30 text-[#064423]/70 px-8 py-3.5 rounded-full text-[14px] font-medium transition-all flex items-center gap-2 active:scale-95"
              >
                {data.btn2_label} <span className="text-[10px] transform rotate-45">↑</span>
              </a>
            </div>
          </div>

          {/* Right Side Description */}
          <div className="md:max-w-[320px] pt-4 md:pt-12">
            <p className="text-[#064423]/50 text-[13px] font-light leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
          </div>
        </div>

        {/* 2. IMAGE GRID SECTION */}
        <div className="mt-16">

          {/* Mobile: single center image only (Uses image2_url) */}
          <div className="block md:hidden w-full h-[280px] rounded-[2rem] overflow-hidden bg-[#F9FBF9] border border-[#064423]/5">
            <img
              src={data.image2_url || "/image copy.png"}
              alt="Zajel Headquarters"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tablet & Desktop: full three-column grid */}
          <div className="hidden md:grid md:grid-cols-12 gap-5 h-[500px]">

            {/* Left Image */}
            <div className="md:col-span-4 rounded-[2.5rem] overflow-hidden bg-[#F9FBF9] border border-[#064423]/5">
              <img
                src={data.image1_url || "/image.png"}
                alt="Zajel Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Center Image: Largest */}
            <div className="md:col-span-5 rounded-[2.5rem] overflow-hidden bg-[#F9FBF9] border border-[#064423]/5">
              <img
                src={data.image2_url || "/image copy.png"}
                alt="Zajel Headquarters"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Image */}
            <div className="md:col-span-3 rounded-[2.5rem] overflow-hidden bg-[#F9FBF9] border border-[#064423]/5">
              <img
                src={data.image3_url || "/image copy 2.png"}
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