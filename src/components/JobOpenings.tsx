import React from 'react';
import { motion } from 'framer-motion';

const jobs = [
  {
    title: "Operations Executive",
    desc: "Coordinate daily logistics operations, support drivers, and ensure SLA compliance.",
    location: "Dubai, UAE",
    type: "Full-Time"
  },
  {
    title: "Operations Executive",
    desc: "Coordinate daily logistics operations, support drivers, and ensure SLA compliance.",
    location: "Dubai, UAE",
    type: "Full-Time"
  },
  {
    title: "Operations Executive",
    desc: "Coordinate daily logistics operations, support drivers, and ensure SLA compliance.",
    location: "Dubai, UAE",
    type: "Full-Time"
  }
];

const JobOpenings: React.FC = () => {
  const smoothTransition = { 
    duration: 0.8, 
    ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] 
  };

  return (
    <section className="w-full bg-[#FDFDFD] py-14 md:py-24 px-4 sm:px-6 lg:px-24 overflow-hidden" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        
        {/* 1. SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-[#064423] text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] font-light leading-tight tracking-tight mb-4">
            Opportunities That <br /> Move You Forward
          </h2>
          <p className="text-[#064423]/50 text-[13px] sm:text-[14px] font-normal max-w-[400px] mx-auto leading-relaxed">
            Explore our current openings and become part of one of the UAE's most trusted courier brands.
          </p>
        </motion.div>

        {/* 2. JOBS GRID */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
        >
          {jobs.map((job, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: smoothTransition }
              }}
              className="bg-white border border-[#064423]/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col min-h-[320px] md:min-h-[420px] hover:border-[#36B936]/30 transition-all duration-500 group"
            >
              {/* Title */}
              <h3 className="text-[#064423] text-[20px] md:text-[28px] font-light leading-tight mb-3 md:mb-4">
                {job.title}
              </h3>

              {/* Description */}
              <p className="text-[#064423]/70 text-[13px] md:text-[14px] font-light leading-relaxed mb-5 md:mb-6 max-w-[240px]">
                {job.desc}
              </p>

              {/* Meta Info */}
              <p className="text-[#064423]/40 text-[12px] md:text-[13px] font-normal mb-auto uppercase tracking-wide">
                {job.location} | {job.type}
              </p>

              {/* CTA Button */}
              <button className="mt-8 md:mt-12 w-fit border border-[#064423]/20 text-[#064423] px-6 md:px-8 py-3 md:py-3.5 rounded-xl text-[13px] md:text-[14px] font-medium flex items-center gap-3 hover:bg-[#064423] hover:text-white transition-all duration-300 active:scale-95">
                Join our Team 
                <span className="text-[10px] transform rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↑
                </span>
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default JobOpenings;