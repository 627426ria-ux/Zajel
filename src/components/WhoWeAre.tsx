import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre: React.FC = () => {
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
          className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.2] tracking-tight mb-6"
        >
          Who We Are?
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-[#396E49] text-[13px] md:text-[14px] font-normal leading-relaxed max-w-[700px] mb-16 px-4"
        >
          Established in 2008, Zajel Courier & Services has grown into one of the UAE's most reliable logistics networks. Our focus is simple — to make delivery smarter, faster, and more secure. From local courier services to cross-border freight, we connect people and businesses through technology and efficiency.
        </motion.p>

        {/* 2. STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-16 w-full max-w-[1100px] mt-8">
          
          <StatBlock number="17+" label="Years of Success" variants={itemVariants} />
          <StatBlock number="42M+" label="Deliveries Completed" variants={itemVariants} />
          <StatBlock number="200+" label="Global Destinations" variants={itemVariants} />
          <StatBlock number="24/7" label="Customer Support" variants={itemVariants} />

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