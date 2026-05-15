import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

// ─────────────────────────────────────────────
// ANIMATION VARIANTS (Apple-Style Easing)
// ─────────────────────────────────────────────
const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: customEase },
  },
};

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
export const AppSteps = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const steps = [
    { num: '01', title: 'Verify & Register', desc: 'Instantly register using UAE Pass for trusted identity verification.' },
    { num: '02', title: 'Request Pickup', desc: 'Input package details, view transparent rates, and book instantly.' },
    { num: '03', title: 'Track In Real-Time', desc: 'Watch the progress live on the dynamic map until delivery.' },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 bg-[#0A4D26] text-white overflow-hidden">

      {/* Header */}
      <motion.div
        className="max-w-[1200px] mx-auto text-center mb-10 sm:mb-16 lg:mb-20"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.7, ease: customEase }}
      >
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 tracking-tight">
          Shipping made brilliantly simple.
        </h2>
        <p className="text-white/55 text-sm sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
          From download to first shipment in minutes. Here is how it works.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <motion.div
        className="max-w-[1100px] mx-auto grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-16 relative"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Connecting line — all sizes */}
        <motion.div
          className="absolute top-[22px] sm:top-[28px] left-[18%] right-[18%] h-px bg-white/10 z-0 origin-left"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: customEase }}
        />

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="relative z-10 flex flex-col items-center text-center"
            variants={stepVariants}
          >
            {/* Number circle */}
            <div className="relative mb-4 sm:mb-7">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#36B936] flex items-center justify-center text-xs sm:text-base font-normal sm:font-semibold text-white relative z-10">
                {step.num}
              </div>
              {/* Static soft glow */}
              <div
                className="absolute inset-0 rounded-full bg-[#36B936] -z-10 opacity-20"
                style={{ transform: 'scale(1.35)', filter: 'blur(6px)' }}
              />
            </div>

            <h3 className="text-xs sm:text-2xl font-normal sm:font-semibold mb-1.5 sm:mb-3 tracking-tight leading-snug">
              {step.title}
            </h3>
            <p className="text-white/45 sm:text-white/55 text-[10px] sm:text-base font-light leading-relaxed max-w-[120px] sm:max-w-[260px]">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppSteps;