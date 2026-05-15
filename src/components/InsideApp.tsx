import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease, delay: i * 0.08 },
  }),
};




export const AppShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section
      ref={ref}
      className="px-3 sm:px-6 lg:px-16 pb-12 sm:pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #f0faf0 0%, #ffffff 20%)' }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[10px] sm:text-[11px] font-medium sm:font-semibold tracking-widest uppercase text-[#36B936] mb-2 sm:mb-3">
            Why Zajel
          </p>
          <h2
            className="text-xl sm:text-3xl lg:text-[2.6rem] text-[#064423] tracking-tight"
            style={{ fontWeight: 300, lineHeight: 1.15 }}
          >
            Ship smarter,<br />deliver faster.
          </h2>
        </motion.div>

        {/* ── BENTO GRID ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-2 sm:gap-3 grid-cols-1 lg:grid-cols-[5fr_8fr]"
        >

          {/* ── LEFT — tall hero card ── */}
          <motion.div
            custom={0}
            variants={cardVariants}
            whileHover={{ scale: 1.015, transition: { duration: 0.28 } }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-4 sm:p-7"
            style={{ background: '#064423', minHeight: 360 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-2.5 sm:px-3 py-1 mb-3 sm:mb-5" style={{ background: 'rgba(54,185,54,0.18)', border: '1px solid rgba(54,185,54,0.3)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#36B936] animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-medium sm:font-semibold text-[#36B936] tracking-widest uppercase">Live Tracking</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-medium sm:font-bold text-white leading-tight mb-2 sm:mb-3">
                Track Every<br />Shipment in<br />Real Time
              </h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                From pickup to doorstep — live GPS updates, ETA countdowns, and instant status alerts.
              </p>
            </div>

            {/* Tracking UI mockup */}
            <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl p-3 sm:p-4" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {[
                { label: 'Picked Up', time: '9:14 AM', done: true },
                { label: 'In Transit', time: '11:32 AM', done: true },
                { label: 'Out for Delivery', time: '2:05 PM', done: true },
                { label: 'Delivered', time: 'Expected 4:00 PM', done: false },
              ].map((step, idx, arr) => (
                <div key={step.label} className="flex items-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-3 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: step.done ? '#36B936' : 'rgba(255,255,255,0.12)', border: step.done ? 'none' : '1px solid rgba(255,255,255,0.2)' }}
                    >
                      {step.done && (
                        <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                          <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="w-px mt-1" style={{ height: 12, background: step.done ? '#36B936' : 'rgba(255,255,255,0.1)' }} />
                    )}
                  </div>
                  <div className="pb-1">
                    <p className="text-[10px] sm:text-xs font-normal sm:font-semibold" style={{ color: step.done ? 'white' : 'rgba(255,255,255,0.35)' }}>{step.label}</p>
                    <p className="text-[9px] sm:text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{step.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Placeholder for real screenshot */}
            <p className="text-center text-[9px] sm:text-[10px] mt-2 sm:mt-3" style={{ color: 'rgba(255,255,255,0.15)', fontFamily: 'monospace' }}>
              App screenshot here
            </p>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-2 sm:gap-3">

            {/* Top row — 2 cards */}
            <div className="grid gap-2 sm:gap-3 grid-cols-2">

              {/* Instant Quote */}
              <motion.div
                custom={1}
                variants={cardVariants}
                whileHover={{ scale: 1.015, transition: { duration: 0.28 } }}
                className="rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer p-3.5 sm:p-6 flex flex-col justify-between"
                style={{ background: '#EEF8EE', minHeight: 160 }}
              >
                <div>
                  <p className="text-[9px] sm:text-[10px] font-medium sm:font-semibold tracking-widest uppercase mb-1.5 sm:mb-2" style={{ color: 'rgba(6,68,35,0.4)' }}>Instant Quote</p>
                  <h3 className="text-sm sm:text-lg font-medium sm:font-bold leading-snug" style={{ color: '#064423' }}>Get a Price<br />in Seconds</h3>
                  <p className="text-[10px] sm:text-xs font-light mt-1.5 sm:mt-2 leading-relaxed hidden sm:block" style={{ color: 'rgba(6,68,35,0.5)' }}>Enter pickup & drop-off — get an exact quote instantly.</p>
                </div>
                {/* Price card */}
                <div className="mt-3 sm:mt-4 rounded-xl sm:rounded-2xl p-2.5 sm:p-3" style={{ background: '#064423' }}>
                  <p className="text-white/50 text-[9px] sm:text-[10px] mb-0.5 sm:mb-1">Estimated Cost</p>
                  <div className="flex items-end justify-between">
                    <p className="text-white text-sm sm:text-xl font-medium sm:font-bold">AED 35.00</p>
                    <span className="text-[9px] sm:text-[10px] font-medium sm:font-semibold px-2 py-0.5 sm:py-1 rounded-full" style={{ background: '#36B936', color: 'white' }}>Book</span>
                  </div>
                </div>
              </motion.div>

              {/* Deliveries stat */}
              <motion.div
                custom={2}
                variants={cardVariants}
                whileHover={{ scale: 1.015, transition: { duration: 0.28 } }}
                className="rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer p-3.5 sm:p-6 flex flex-col justify-between"
                style={{ background: '#064423', minHeight: 160 }}
              >
                <div>
                  <p className="text-[9px] sm:text-[10px] font-medium sm:font-semibold tracking-widest uppercase mb-1.5 sm:mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Trusted By</p>
                  <p className="text-2xl sm:text-4xl font-medium sm:font-bold text-white leading-none">2.5M+</p>
                  <p className="text-sm sm:text-lg font-light text-white/70 mt-0.5 sm:mt-1">Deliveries</p>
                </div>
                <div>
                  <div className="flex items-center mt-3 sm:mt-4">
                    {['#36B936', '#2da02d', '#4CC94C', '#1a7a36'].map((bg, i) => (
                      <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ background: bg, borderColor: '#064423', marginLeft: i === 0 ? 0 : -6 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)">
  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
</svg>
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] sm:text-[10px] mt-1.5 sm:mt-2 font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>★ 4.9 · 48k+ reviews</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom row — 2 cards */}
            <div className="grid gap-2 sm:gap-3 grid-cols-2">

              {/* Schedule Pickup */}
              <motion.div
                custom={3}
                variants={cardVariants}
                whileHover={{ scale: 1.015, transition: { duration: 0.28 } }}
                className="rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer p-3.5 sm:p-6 flex flex-col justify-between"
                style={{ background: '#36B936', minHeight: 180 }}
              >
                <div>
                  <p className="text-[9px] sm:text-[10px] font-medium sm:font-semibold tracking-widest uppercase mb-1.5 sm:mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>Door to Door</p>
                  <h3 className="text-sm sm:text-xl font-medium sm:font-bold text-white leading-snug">
                    Schedule a<br />Pickup Anytime
                  </h3>
                  <p className="text-[10px] sm:text-xs font-light mt-1.5 sm:mt-2 text-white/60 hidden sm:block">
                    Same-day, next-day, or scheduled — pick what works for you.
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <span className="text-white text-xs sm:text-sm font-medium sm:font-semibold">Book</span>
                  <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-white">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6.5 3L9 6l-2.5 3" stroke="#36B936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Delivery analytics */}
              <motion.div
                custom={4}
                variants={cardVariants}
                whileHover={{ scale: 1.015, transition: { duration: 0.28 } }}
                className="rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer p-3.5 sm:p-6 flex flex-col justify-between"
                style={{ background: '#EEF8EE', minHeight: 180 }}
              >
                <div>
                  <p className="text-[9px] sm:text-[10px] font-medium sm:font-semibold tracking-widest uppercase mb-1.5 sm:mb-2" style={{ color: 'rgba(6,68,35,0.4)' }}>Delivery History</p>
                  <h3 className="text-sm sm:text-lg font-medium sm:font-bold leading-snug" style={{ color: '#064423' }}>
                    Every Shipment<br />on Record
                  </h3>
                  <p className="text-[10px] sm:text-xs font-light mt-1.5 sm:mt-2 leading-relaxed hidden sm:block" style={{ color: 'rgba(6,68,35,0.5)' }}>
                    Proof of delivery, invoices, and timelines — always accessible.
                  </p>
                </div>
                {/* Mini donut */}
                <div className="mt-3 sm:mt-4 flex items-center gap-2.5 sm:gap-4">
                  <div className="relative w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#D6EDD6" strokeWidth="5"/>
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#36B936" strokeWidth="5" strokeDasharray="70 88" strokeLinecap="round"/>
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#064423" strokeWidth="5" strokeDasharray="18 88" strokeDashoffset="-70" strokeLinecap="round"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[9px] sm:text-[10px] font-medium sm:font-bold" style={{ color: '#064423' }}>98%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-medium sm:font-bold" style={{ color: '#064423' }}>142</p>
                    <p className="text-[9px] sm:text-xs font-light" style={{ color: 'rgba(6,68,35,0.45)' }}>This month</p>
                    <p className="text-[9px] sm:text-[10px] font-medium sm:font-semibold mt-0.5" style={{ color: '#36B936' }}>98% on time</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;