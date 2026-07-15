import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabase'; // <-- Adjust to your supabase client path

// CMS Interfaces
export interface AboutStatCard {
  number: string;
  label: string;
}

export interface AboutWhoWeAreContent {
  heading: string;
  description: string;
  stats: AboutStatCard[];
}

const WhoWeAre: React.FC = () => {
  const [data, setData] = useState<AboutWhoWeAreContent | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch from Supabase on mount
  useEffect(() => {
    const fetchSection = async () => {
      const { data: sectionData, error } = await supabase
        .from('page_sections')
        .select('content_en, enabled')
        .eq('id', 'about_who_we_are')
        .single();

      if (!error && sectionData?.enabled && sectionData.content_en) {
        setData(sectionData.content_en as AboutWhoWeAreContent);
      }
      setLoading(false);
    };

    fetchSection();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] 
      } 
    },
  };

  // If loading or disabled, do not render
  if (loading || !data) return null;

  return (
    <section className="w-full bg-[#FDFDFD] py-24 px-6 lg:px-24 overflow-hidden" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <motion.div 
        className="max-w-[1300px] mx-auto text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        
        {/* 1. SECTION HEADER */}
        <motion.h2 
          variants={itemVariants}
          className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.2] tracking-tight mb-6 whitespace-pre-line"
        >
          {data.heading}
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-[#396E49] text-[13px] md:text-[14px] font-normal leading-relaxed max-w-[700px] mb-16 px-4 whitespace-pre-line"
        >
          {data.description}
        </motion.p>

        {/* 2. STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-16 w-full max-w-[1100px] mt-8">
          {data.stats?.map((stat, idx) => (
            <StatBlock key={idx} number={stat.number} label={stat.label} variants={itemVariants} />
          ))}
        </div>

      </motion.div>
    </section>
  );
};

// --- Sub-Component: Animated Stat Block ---
const StatBlock = ({ number, label, variants }: { number: string; label: string; variants: any }) => (
  <motion.div 
    variants={variants}
    className="flex flex-col items-center text-center"
  >
    <span className="text-[#36B936] text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-light leading-none tracking-tight mb-2">
      {number}
    </span>
    <span className="text-[#396E49] text-[12px] md:text-[13px] font-medium leading-tight">
      {label}
    </span>
  </motion.div>
);

export default WhoWeAre;