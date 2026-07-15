import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabase'; // <-- IMPORTANT: Adjust this path to your supabase client!

// 1. Interfaces for the CMS data
export interface CareersBenefitCard {
  title: string;
  desc: string;
  icon_url: string;
}

export interface CareersBenefitsContent {
  heading: string;
  description: string;
  benefits: CareersBenefitCard[];
}

const BenefitsSection: React.FC = () => {
  const [data, setData] = useState<CareersBenefitsContent | null>(null);
  const [loading, setLoading] = useState(true);

  // 2. Fetch the data directly from Supabase when the component loads
  useEffect(() => {
    const fetchBenefits = async () => {
      const { data: sectionData, error } = await supabase
        .from('page_sections')
        .select('content_en, enabled')
        .eq('id', 'careers_benefits')
        .single();

      if (!error && sectionData?.enabled && sectionData.content_en) {
        setData(sectionData.content_en as CareersBenefitsContent);
      }
      setLoading(false);
    };

    fetchBenefits();
  }, []);

  const smoothTransition = { 
    duration: 0.8, 
    ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] 
  };

  // If loading or if disabled in CMS, don't show anything
  if (loading || !data) return null;

  return (
    <section className="w-full bg-[#FDFDFD] py-14 md:py-24 px-4 sm:px-6 lg:px-24" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
          className="text-center mb-10 md:mb-16"
        >
          {/* whitespace-pre-line ensures Enter key presses from the CMS show up as line breaks */}
          <h2 className="text-[#064423] text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] font-light leading-tight mb-4 whitespace-pre-line">
            {data.heading}
          </h2>
          <p className="text-[#064423]/60 text-[13px] sm:text-[14px] font-normal max-w-[350px] mx-auto leading-relaxed whitespace-pre-line">
            {data.description}
          </p>
        </motion.div>

        {/* BORDERED GRID */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, scale: 0.98 },
            visible: { 
              opacity: 1, 
              scale: 1, 
              transition: { 
                ...smoothTransition,
                staggerChildren: 0.1,
                delayChildren: 0.2
              } 
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 border border-[#064423]/10 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(6,68,35,0.02)]"
        >
          {data.benefits?.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: smoothTransition }
              }}
              className={`p-6 md:p-10 lg:p-14 flex flex-col items-start text-left transition-colors duration-500 hover:bg-[#F9FBF9] group
                ${idx < data.benefits.length - 1 ? 'border-b' : ''}
                ${idx >= 3 && idx < data.benefits.length - 1 ? 'md:border-b-0' : ''}
                ${idx < 3 ? 'md:border-b' : ''}
                ${(idx + 1) % 3 !== 0 ? 'md:border-r' : ''}
                border-[#064423]/10`}
            >
              {/* Image renderer from CMS */}
              <div className="mb-5 md:mb-8 transform group-hover:scale-110 transition-transform duration-500 h-10 w-10 flex items-center justify-start">
                {item.icon_url ? (
                  <img src={item.icon_url} alt={item.title} className="w-full h-full object-contain" />
                ) : (
                  <div className="w-8 h-8 rounded bg-[#064423]/10 animate-pulse" />
                )}
              </div>
              <h3 className="text-[#064423] text-[18px] md:text-[20px] font-medium mb-2 md:mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[#064423]/50 text-[13px] md:text-[14px] font-light leading-relaxed max-w-[200px] whitespace-pre-line">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BenefitsSection;