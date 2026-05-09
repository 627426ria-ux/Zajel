import React from 'react';
import { motion } from 'framer-motion';

const leaders = [
  {
    name: "Abdul Rahman Al Darei",
    role: "CEO",
    image: "/image copy 3.png"
  },
  {
    name: "Fatima Al Shamsi",
    role: "Head of Client Relations",
    image: "/image copy 4.png"
  },
  {
    name: "Hussain Al Suwaidi",
    role: "Operations Director",
    image: "/image copy 5.png"
  }
];

const Leadership: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1 
      }
    }
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
    }
  };

  return (
    <section className="w-full bg-[#FDFDFD] py-24 px-6 lg:px-24 overflow-hidden" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* 1. ANIMATED HEADER */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] 
          }}
          className="text-[#064423] text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] font-light leading-[1.3] tracking-tight text-center max-w-[900px] mb-20"
        >
          Our leadership brings decades of experience in logistics, operations, and technology — united by one mission: delivering excellence.
        </motion.h2>

        {/* 2. STAGGERED LEADERS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 w-full"
        >
          {leaders.map((leader, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col">
              
              {/* Image Container */}
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-[#F9FBF9] border border-[#064423]/5 group">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Leader Info */}
              <h3 className="text-[#064423] text-[18px] md:text-[20px] font-medium tracking-tight mb-1">
                {leader.name}
              </h3>
              <p className="text-[#064423]/40 text-[12px] md:text-[13px] font-light uppercase tracking-[0.1em]">
                {leader.role}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Leadership;