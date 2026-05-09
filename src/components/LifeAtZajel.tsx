import React from 'react';
import { motion } from 'framer-motion';

const LifeAtZajel: React.FC = () => {
  const smoothTransition = { 
    duration: 0.8, 
    ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] 
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: smoothTransition }
  };

  return (
    <section className="w-full bg-[#FDFDFD] py-14 md:py-24 px-4 sm:px-6 lg:px-24 overflow-hidden" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1300px] mx-auto">
        
        {/* 1. TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-6 md:mb-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
            className="lg:col-span-5 pt-1" 
          >
            <h2 className="text-[#064423] text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-light leading-[1.1] tracking-tight mb-5 md:mb-8">
              Life at Zajel — More <br /> Than Just Work
            </h2>
            <p className="text-[#064423]/50 text-[13px] sm:text-[14px] font-light leading-relaxed max-w-[380px]">
              We're building a culture where collaboration, curiosity, and care meet every day. Our people are our greatest delivery — and their growth is our priority.
            </p>
          </motion.div>

          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-[20px] overflow-hidden h-[220px] sm:h-[300px] lg:h-[400px]"
          >
            <img 
              src="/image copy 8.png" 
              alt="Zajel Exhibition" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>

        {/* 2. BOTTOM SECTION */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
        >
          {/* Left Image */}
          <motion.div 
            variants={imageVariants} 
            className="md:col-span-3 rounded-[20px] overflow-hidden h-[220px] md:h-[380px]"
          >
            <img 
              src="/image copy 10.png" 
              alt="Team" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
            />
          </motion.div>

          {/* Middle Image */}
          <motion.div 
            variants={imageVariants} 
            className="md:col-span-6 rounded-[20px] overflow-hidden h-[220px] md:h-[380px]"
          >
            <img 
              src="/image copy 9.png" 
              alt="Employee Award" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
            />
          </motion.div>

          {/* Right Image */}
          <motion.div 
            variants={imageVariants} 
            className="md:col-span-3 rounded-[20px] overflow-hidden h-[220px] md:h-[380px]"
          >
            <img 
              src="/image copy 11.png" 
              alt="Operations" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default LifeAtZajel;