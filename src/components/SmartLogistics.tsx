import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabase'; // <-- Adjust to your supabase client path

export interface AboutSmartLogisticsContent {
  heading: string;
  description: string;
  app_image_url: string;
  card1_title: string;
  card1_description: string;
  card1_btn_label: string;
  card1_btn_url: string;
  card2_title: string;
  card2_description: string;
  card2_btn_label: string;
  card2_btn_url: string;
}

const SmartLogistics: React.FC = () => {
  const [data, setData] = useState<AboutSmartLogisticsContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSection = async () => {
      const { data: sectionData, error } = await supabase
        .from('page_sections')
        .select('content_en, enabled')
        .eq('id', 'about_smart_logistics')
        .single();

      if (!error && sectionData?.enabled && sectionData.content_en) {
        setData(sectionData.content_en as AboutSmartLogisticsContent);
      }
      setLoading(false);
    };

    fetchSection();
  }, []);

  const smoothTransition = { 
    duration: 0.8, 
    ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] 
  };

  if (loading || !data) return null;

  return (
    <section className="w-full bg-[#0B1111] py-14 md:py-24 px-4 sm:px-6 lg:px-24 overflow-hidden" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1300px] mx-auto">
        
        {/* 1. TOP ROW: HEADING & MOBILE APP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            <h2 className="text-white text-[2rem] sm:text-[2.8rem] md:text-[3.8rem] font-light leading-[1.1] tracking-tight mb-5 md:mb-8 whitespace-pre-line">
              {data.heading}
            </h2>
            <p className="text-white/50 text-[13px] sm:text-[14px] font-light leading-relaxed max-w-[480px] whitespace-pre-line">
              {data.description}
            </p>
          </motion.div>

          {/* Mobile App Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={smoothTransition}
            className="relative bg-gradient-to-br from-[#36B936] to-[#1A5F1A] rounded-[2rem] md:rounded-[2.5rem] aspect-[4/3] flex items-center justify-center overflow-hidden"
          >
            <div className="w-[40%] drop-shadow-2xl translate-y-6 md:translate-y-12">
              <img src={data.app_image_url || "/image copy 7.png"} alt="Mobile App" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* 2. BOTTOM ROW: BENTO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* IMS Policy Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="md:col-span-5 bg-gradient-to-br from-[#36B936] to-[#247A24] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col h-full justify-between items-start">
              <div>
                <h3 className="text-white text-[18px] md:text-[24px] font-light leading-tight mb-3 md:mb-4 max-w-[280px] whitespace-pre-line">
                  {data.card1_title}
                </h3>
                <p className="text-white/80 text-[12px] md:text-[13px] font-light leading-relaxed max-w-[250px] mb-6 md:mb-8 whitespace-pre-line">
                  {data.card1_description}
                </p>
              </div>
              <a 
                href={data.card1_btn_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#36B936] px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-[13px] font-medium flex items-center gap-2 hover:bg-gray-100 transition-all active:scale-95 shadow-lg"
              >
                {data.card1_btn_label} <span className="text-lg leading-none">↓</span>
              </a>
            </div>
            
            <div className="absolute right-0 bottom-0 opacity-20 group-hover:rotate-45 transition-transform duration-1000 scale-110 translate-x-4 translate-y-4">
               <SettingSVG />
            </div>
          </motion.div>

          {/* Company Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="md:col-span-7 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row justify-between items-end md:items-stretch overflow-hidden group bg-[#0D1515]"
          >
            <div className="flex flex-col justify-between h-full relative z-10 w-full md:w-auto">
              <div>
                <h3 className="text-white text-[18px] md:text-[24px] font-light leading-tight mb-3 md:mb-4 whitespace-pre-line">
                  {data.card2_title}
                </h3>
                <p className="text-white/40 text-[12px] md:text-[13px] font-light leading-relaxed max-w-[280px] whitespace-pre-line">
                  {data.card2_description}
                </p>
              </div>
              <a 
                href={data.card2_btn_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#064423] text-[#36B936] border border-[#36B936]/20 px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-[13px] font-medium flex items-center gap-2 hover:bg-[#085a2e] transition-all active:scale-95 w-fit mt-8 md:mt-0 shadow-xl"
              >
                {data.card2_btn_label} <span className="text-lg leading-none">↓</span>
              </a>
            </div>

            <div className="hidden sm:flex opacity-20 group-hover:scale-105 transition-transform duration-700 items-end">
               <CompanySVG />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- SVGs ---

const SettingSVG = () => (
  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompanySVG = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M83.3359 100H116.669" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M83.3359 66.668H116.669" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M116.669 174.999V149.999C116.669 145.578 114.913 141.339 111.788 138.214C108.662 135.088 104.423 133.332 100.003 133.332C95.5823 133.332 91.3431 135.088 88.2175 138.214C85.0919 141.339 83.3359 145.578 83.3359 149.999V174.999" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M49.9974 83.332H33.3307C28.9105 83.332 24.6712 85.088 21.5456 88.2136C18.42 91.3392 16.6641 95.5784 16.6641 99.9987V158.332C16.6641 162.752 18.42 166.992 21.5456 170.117C24.6712 173.243 28.9105 174.999 33.3307 174.999H166.664C171.084 174.999 175.324 173.243 178.449 170.117C181.575 166.992 183.331 162.752 183.331 158.332V74.9987C183.331 70.5784 181.575 66.3392 178.449 63.2136C175.324 60.088 171.084 58.332 166.664 58.332H149.997" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 175V41.6667C50 37.2464 51.7559 33.0072 54.8816 29.8816C58.0072 26.7559 62.2464 25 66.6667 25H133.333C137.754 25 141.993 26.7559 145.118 29.8816C148.244 33.0072 150 37.2464 150 41.6667V175" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default SmartLogistics;