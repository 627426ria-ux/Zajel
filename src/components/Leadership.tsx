import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabase'; // <-- Adjust to your supabase client path

export interface AboutLeader {
  name: string;
  role: string;
  image_url: string;
}

export interface AboutLeadershipContent {
  heading: string;
  leaders: AboutLeader[];
}

const Leadership: React.FC = () => {
  const [data, setData] = useState<AboutLeadershipContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: sectionData, error } = await supabase
        .from('page_sections')
        .select('content_en, enabled')
        .eq('id', 'about_leadership')
        .single();
      if (!error && sectionData?.enabled && sectionData.content_en) {
        setData(sectionData.content_en as AboutLeadershipContent);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] } } };

  if (loading || !data) return null;

  return (
    <section className="w-full bg-[#FDFDFD] py-24 px-6 lg:px-24 overflow-hidden" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] }}
          className="text-[#064423] text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] font-light leading-[1.3] tracking-tight text-center max-w-[900px] mb-20 whitespace-pre-line"
        >
          {data.heading}
        </motion.h2>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 w-full">
          {data.leaders?.map((leader, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col">
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-[#F9FBF9] border border-[#064423]/5 group flex items-center justify-center">
                {leader.image_url ? (
                  <img src={leader.image_url} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                ) : (
                   <div className="w-full h-full bg-gray-100 animate-pulse" />
                )}
              </div>
              <h3 className="text-[#064423] text-[18px] md:text-[20px] font-medium tracking-tight mb-1">{leader.name}</h3>
              <p className="text-[#064423]/40 text-[12px] md:text-[13px] font-light uppercase tracking-[0.1em]">{leader.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Leadership;