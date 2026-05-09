import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- MOCK DATA ---
const faqData = [
  {
    id: 'cat-1',
    title: 'SHIPMENT & TRACKING',
    questions: [
      { id: 'q-1-1', question: 'How can I track my shipment?', answer: 'You can track your shipment by entering your AWB number or registered mobile number on the Track Shipment page. You\'ll receive real-time updates on shipment status and location.' },
      { id: 'q-1-2', question: 'What details are shown when I track my shipment?', answer: 'You will see the current location, status history, and estimated delivery time.' },
      { id: 'q-1-3', question: 'Why is my tracking status not updating?', answer: 'Tracking updates may take a few hours to reflect after scanning. Please check again later.' },
      { id: 'q-1-4', question: 'What does "Out for Delivery" mean?', answer: 'It means our courier is currently out with your package and will deliver it to your address today.' },
      { id: 'q-1-5', question: 'Can I track my shipment without an AWB number?', answer: 'Yes, you can track it using the registered mobile number associated with the shipment.' },
    ]
  },
  {
    id: 'cat-2',
    title: 'COURIER & DELIVERY SERVICES',
    questions: [
      { id: 'q-2-1', question: 'What are your delivery hours?', answer: 'We deliver from 8 AM to 6 PM, Saturday through Thursday.' }
    ]
  },
  {
    id: 'cat-3',
    title: 'INTERNATIONAL SHIPPING & CUSTOMS',
    questions: [
      { id: 'q-3-1', question: 'Do you ship internationally?', answer: 'Yes, we provide international shipping to over 200 countries.' }
    ]
  },
  {
    id: 'cat-4',
    title: 'PRICING & QUOTATIONS',
    questions: [
      { id: 'q-4-1', question: 'How can I get a shipping quote?', answer: 'You can use our online rate calculator by entering the package dimensions and destination.' },
      { id: 'q-4-2', question: 'Is the quoted price final?', answer: 'Quotes are estimates. Final prices may vary based on actual weight and customs duties.' },
      { id: 'q-4-3', question: 'Does the quotation include VAT?', answer: 'Yes, all domestic shipment quotes are inclusive of the 5% VAT.' },
    ]
  },
  {
    id: 'cat-5',
    title: 'PAYMENTS & CASH ON DELIVERY',
    questions: [
      { id: 'q-5-1', question: 'Do you offer Cash on Delivery (COD)?', answer: 'Yes, COD is available for select e-commerce partners and domestic deliveries.' },
      { id: 'q-5-2', question: 'How will I receive proof of payment for COD?', answer: 'An electronic receipt will be emailed or sent via SMS immediately upon payment.' },
    ]
  },
  {
    id: 'cat-6',
    title: 'RETURNS & REVERSE LOGISTICS',
    questions: [
      { id: 'q-6-1', question: 'Do you offer return services?', answer: 'Yes, we handle seamless returns for e-commerce orders.' },
      { id: 'q-6-2', question: 'Can businesses use return services?', answer: 'Absolutely. We offer customized reverse logistics solutions for businesses.' },
    ]
  },
  {
    id: 'cat-7',
    title: 'E-COMMERCE & BUSINESS SERVICES',
    questions: [
      { id: 'q-7-1', question: 'Do you provide courier services for e-commerce businesses?', answer: 'Yes, we offer specialized APIs, warehousing, and fulfillment for e-commerce.' },
      { id: 'q-7-2', question: 'Can I schedule bulk or recurring shipments?', answer: 'Yes, business accounts can schedule daily or weekly bulk pickups.' },
    ]
  }
];

const FaqAccordion: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<string[]>(['cat-1', 'cat-4', 'cat-5', 'cat-6', 'cat-7']);
  const [openQuestion, setOpenQuestion] = useState<string | null>('q-1-1');

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => 
      prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]
    );
  };

  const toggleQuestion = (id: string) => {
    setOpenQuestion(prev => prev === id ? null : id);
  };

  const smoothTransition = { 
    duration: 0.4, 
    ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number] 
  };

  return (
    <section className="w-full min-h-screen bg-[#FDFDFD] pt-24 pb-16 px-6 lg:px-12" style={{ fontFamily: '"Manrope", sans-serif' }}>
      
      {/* HEADER SECTION */}
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-start mb-12">
        
        <h1 className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight text-left">
          Frequently Asked <br /> Questions
        </h1>
        
        <div className="w-full md:max-w-[380px] pt-6 md:pt-16"> 
          <p className="text-[#064423]/60 text-[13px] font-light leading-relaxed text-left">
            Find quick answers to common questions about our courier, shipping, tracking, and support services. If you need further assistance, our support team is always here to help.
          </p>
        </div>
        
      </div>

      {/* ACCORDION SECTION - Shares the same max-width as header */}
      <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
        {faqData.map((category) => {
          const isCategoryOpen = openCategories.includes(category.id);

          return (
            <div key={category.id} className="w-full flex flex-col shadow-sm rounded-[14px]">
              
              {/* Category Header */}
              <button 
                onClick={() => toggleCategory(category.id)}
                className={`w-full flex items-center justify-between px-6 py-4 transition-colors duration-500 z-10 text-white bg-[#36B936] hover:bg-[#2da32d] ${isCategoryOpen ? 'rounded-t-[14px]' : 'rounded-[14px]'}`}
              >
                <span className="text-[14px] font-medium tracking-wide uppercase">
                  {category.title}
                </span>
                
                <motion.span 
                  animate={{ rotate: isCategoryOpen ? 180 : 0 }}
                  transition={smoothTransition}
                >
                  {isCategoryOpen ? <MinusCircleIcon /> : <PlusCircleIcon />}
                </motion.span>
              </button>

              {/* Category Questions Wrapper */}
              <AnimatePresence initial={false}>
                {isCategoryOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={smoothTransition}
                    className="overflow-hidden bg-white border-x border-b border-gray-100 rounded-b-[14px]"
                  >
                    {category.questions.map((q, index) => {
                      const isQuestionOpen = openQuestion === q.id;
                      const isLast = index === category.questions.length - 1;

                      return (
                        <div key={q.id} className={`flex flex-col ${!isLast ? 'border-b border-gray-50' : ''}`}>
                          
                          {/* Question Button */}
                          <button 
                            onClick={() => toggleQuestion(q.id)}
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

                          {/* Answer Body */}
                          <AnimatePresence initial={false}>
                            {isQuestionOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={smoothTransition}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-5 pt-1 text-[#064423]/60 text-[13px] font-light leading-relaxed pr-12">
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
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

const MinusCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12h8" />
  </svg>
);

const DownChevron = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default FaqAccordion;