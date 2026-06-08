import React from 'react';
import { motion } from 'framer-motion';

const CareersHeroMain: React.FC = () => {
  const smoothTransition = { 
    duration: 1.2, 
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
  };

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-[#0B1111]"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/image copy 13.png" 
          alt="Zajel Team"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10" />
      </div>

      {/* CENTERED CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[720px] mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={smoothTransition}
          className="text-white text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight mb-6"
        >
          Deliver Your Future <br /> with Zajel
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...smoothTransition, delay: 0.3 }}
          className="text-white/70 text-[11px] md:text-[12px] font-light leading-[1.9] tracking-[0.12em] uppercase mb-10 max-w-[340px]"
        >
          Join a team that's transforming the way the UAE moves — powered by technology and trust.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.5 }}
          whileHover={{ scale: 1.02, backgroundColor: '#005f0c' }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '17px 32px',
            gap: '10px',
            width: '175px',
            height: '60px',
            background: '#004E09',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
          }}
          className="shadow-2xl"
        >
          <span className="text-white text-lg font-light leading-none">+</span>
          <span className="text-white text-[13px] font-normal tracking-wide whitespace-nowrap">
            Open positions
          </span>
        </motion.button>

      </div>
    </section>
  );
};

export default CareersHeroMain;