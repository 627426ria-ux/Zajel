import React from 'react';
import { motion } from 'framer-motion';

const CareersHeroMain: React.FC = () => {
  const smoothTransition = { 
    duration: 1.2, 
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-start bg-[#0B1111]" style={{ fontFamily: '"Manrope", sans-serif' }}>
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/image copy 13.png" 
          alt="Zajel Team"
          className="w-full h-full object-cover object-center"
        />
        {/* TOP-FOCUSED SCRIM: Ensures legibility for top-aligned text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
      </div>

      <div className="max-w-[1300px] mx-auto w-full px-6 lg:px-24 relative z-10 pt-20 lg:pt-32">
        {/* Changed items-end to items-start to bring everything to the top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 2. PRIMARY CONTENT (Title & Button) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }} // Subtle slide down from top
              animate={{ opacity: 1, y: 0 }}
              transition={smoothTransition}
            >
              <h1 className="text-white text-[2.5rem] md:text-[3rem] lg:text-[3.2rem] font-medium leading-[1.1] tracking-tight mb-10">
                Deliver Your Future <br /> with Zajel
              </h1>
              
              {/* FIGMA-PERFECT BUTTON */}
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#005f0c' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '17px 32px',
                  gap: '10px',
                  width: '175px',
                  height: '60px',
                  background: '#004E09',
                  borderRadius: '30px',
                  border: 'none',
                  cursor: 'pointer'
                }}
                className="shadow-2xl"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-white text-lg font-light leading-none">+</span>
                  <span className="text-white text-[13px] font-normal tracking-wide whitespace-nowrap">
                    Open positions
                  </span>
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* 3. SIDEBAR TEXT (Description) */}
          <div className="lg:col-span-4 lg:flex justify-end lg:pt-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...smoothTransition, delay: 0.4 }}
              className="max-w-[260px]"
            >
              <p className="text-white/80 text-[11px] md:text-[12px] font-light leading-[1.8] tracking-wide uppercase">
                Join a team that's transforming the way the UAE moves — powered by technology and trust.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareersHeroMain;