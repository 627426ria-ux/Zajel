import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabase'; // <-- Adjust to your supabase client path

// Interfaces
export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  questions: FaqQuestion[];
}

export interface FaqAccordionContent {
  heading: string;
  description: string;
  categories: FaqCategory[];
}

const FaqAccordion: React.FC = () => {
  const [data, setData] = useState<FaqAccordionContent | null>(null);
  const [loading, setLoading] = useState(true);

  // Set default open items (Categories 0, 3, 4, 5, 6 as per your original logic)
  const [openCategories, setOpenCategories] = useState<string[]>(['cat-0', 'cat-3', 'cat-4', 'cat-5', 'cat-6']);
  const [openQuestion, setOpenQuestion] = useState<string | null>('q-0-0');

  useEffect(() => {
    const fetchFaqs = async () => {
      const { data: sectionData, error } = await supabase
        .from('page_sections')
        .select('content_en, enabled')
        .eq('id', 'faqs_accordion')
        .single();
      if (!error && sectionData?.enabled && sectionData.content_en) {
        setData(sectionData.content_en as FaqAccordionContent);
      }
      setLoading(false);
    };
    fetchFaqs();
  }, []);

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]);
  };

  const toggleQuestion = (id: string) => {
    setOpenQuestion(prev => prev === id ? null : id);
  };

  const smoothTransition = { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] };

  if (loading || !data) return null;

  return (
    <section className="w-full min-h-screen bg-[#FDFDFD] pt-24 pb-16 px-6 lg:px-12" style={{ fontFamily: '"Manrope", sans-serif' }}>
      
      {/* HEADER SECTION */}
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-start mb-12">
        <h1 className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight text-left whitespace-pre-line">
          {data.heading}
        </h1>
        <div className="w-full md:max-w-[380px] pt-6 md:pt-16"> 
          <p className="text-[#064423]/60 text-[13px] font-light leading-relaxed text-left whitespace-pre-line">
            {data.description}
          </p>
        </div>
      </div>

      {/* ACCORDION SECTION */}
      <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
        {data.categories?.map((category, catIdx) => {
          const categoryId = `cat-${catIdx}`;
          const isCategoryOpen = openCategories.includes(categoryId);

          return (
            <div key={categoryId} className="w-full flex flex-col shadow-sm rounded-[14px]">
              
              {/* Category Header */}
              <button 
                onClick={() => toggleCategory(categoryId)}
                className={`w-full flex items-center justify-between px-6 py-4 transition-colors duration-500 z-10 text-white bg-[#36B936] hover:bg-[#2da32d] ${isCategoryOpen ? 'rounded-t-[14px]' : 'rounded-[14px]'}`}
              >
                <span className="text-[14px] font-medium tracking-wide uppercase">
                  {category.title}
                </span>
                <motion.span animate={{ rotate: isCategoryOpen ? 180 : 0 }} transition={smoothTransition}>
                  {isCategoryOpen ? <MinusCircleIcon /> : <PlusCircleIcon />}
                </motion.span>
              </button>

              {/* Questions Wrapper */}
              <AnimatePresence initial={false}>
                {isCategoryOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={smoothTransition}
                    className="overflow-hidden bg-white border-x border-b border-gray-100 rounded-b-[14px]"
                  >
                    {category.questions?.map((q, qIdx) => {
                      const questionId = `q-${catIdx}-${qIdx}`;
                      const isQuestionOpen = openQuestion === questionId;
                      const isLast = qIdx === category.questions.length - 1;

                      return (
                        <div key={questionId} className={`flex flex-col ${!isLast ? 'border-b border-gray-50' : ''}`}>
                          
                          <button 
                            onClick={() => toggleQuestion(questionId)}
                            className="w-full flex items-center justify-between px-6 py-4 text-left group"
                          >
                            <span className={`text-[14px] font-medium transition-all duration-300 transform group-hover:translate-x-1 group-hover:text-[#36B936] ${isQuestionOpen ? 'text-[#36B936]' : 'text-[#064423] opacity-90'}`}>
                              {q.question}
                            </span>
                            <motion.span 
                              animate={{ rotate: isQuestionOpen ? -180 : 0 }}
                              transition={smoothTransition}
                              className={`ml-4 shrink-0 transition-colors ${isQuestionOpen ? 'text-[#36B936]' : 'text-[#064423]/40 group-hover:text-[#36B936]'}`}
                            >
                              <DownChevron />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isQuestionOpen && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={smoothTransition} className="overflow-hidden">
                                <div className="px-6 pb-5 pt-1 text-[#064423]/60 text-[13px] font-light leading-relaxed pr-12 whitespace-pre-line">
                                  {q.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// --- Minimal SVGs ---
const PlusCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></svg>
);
const MinusCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9" /><path d="M8 12h8" /></svg>
);
const DownChevron = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
);

export default FaqAccordion;