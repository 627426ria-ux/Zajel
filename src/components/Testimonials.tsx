import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabase'; // <-- Adjust to your supabase client path

// Interfaces
export interface AboutTestimonial {
  text: string;
  name: string;
  role: string;
  image_url: string;
}

export interface AboutTestimonialsContent {
  heading: string;
  subheading: string;
  testimonials: AboutTestimonial[];
}

// Helpers
const useCardsPerView = () => {
  const [cardsPerView, setCardsPerView] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return cardsPerView;
};

const QuoteIcon = () => (
  <svg width="44" height="44" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.83333 1C6.02102 1 4.28294 1.71994 3.00144 3.00144C1.71994 4.28294 1 6.02102 1 7.83333V28.3333C1 30.1456 1.71994 31.8837 3.00144 33.1652C4.28294 34.4467 6.02102 35.1667 7.83333 35.1667C8.73949 35.1667 9.60853 35.5266 10.2493 36.1674C10.89 36.8081 11.25 37.6772 11.25 38.5833V42C11.25 43.8123 10.5301 45.5504 9.24856 46.8319C7.96706 48.1134 6.22898 48.8333 4.41667 48.8333C3.51051 48.8333 2.64147 49.1933 2.00072 49.834C1.35997 50.4748 1 51.3438 1 52.25V59.0833C1 59.9895 1.35997 60.8585 2.00072 61.4993C2.64147 62.14 3.51051 62.5 4.41667 62.5C9.8536 62.5 15.0679 60.3402 18.9124 56.4957C22.7568 52.6512 24.9167 47.4369 24.9167 42V7.83333C24.9167 6.02102 24.1967 4.28294 22.9152 3.00144C21.6337 1.71994 19.8956 1 18.0833 1H7.83333Z" stroke="#2BA735" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M45.4154 1C43.6031 1 41.865 1.71994 40.5835 3.00144C39.302 4.28294 38.582 6.02102 38.582 7.83333V28.3333C38.582 30.1456 39.302 31.8837 40.5835 33.1652C41.865 34.4467 43.6031 35.1667 45.4154 35.1667C46.3215 35.1667 47.1906 35.5266 47.8313 36.1674C48.4721 36.8081 48.832 37.6772 48.832 38.5833V42C48.832 43.8123 48.1121 45.5504 46.8306 46.8319C45.5491 48.1134 43.811 48.8333 41.9987 48.8333C41.0925 48.8333 40.2235 49.1933 39.5828 49.834C38.942 50.4748 38.582 51.3438 38.582 52.25V59.0833C38.582 59.9895 38.942 60.8585 39.5828 61.4993C40.2235 62.14 41.0925 62.5 41.9987 62.5C47.4356 62.5 52.6499 60.3402 56.4944 56.4957C60.3389 52.6512 62.4987 47.4369 62.4987 42V7.83333C62.4987 6.02102 61.7788 4.28294 60.4973 3.00144C59.2158 1.71994 57.4777 1 55.6654 1H45.4154Z" stroke="#2BA735" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TestimonialCard = ({ item }: { item: AboutTestimonial }) => (
  <div style={{ background: '#FFFFFF', border: '1.2px solid rgba(43, 167, 53, 0.18)', borderRadius: '24px', padding: '32px 28px 28px', display: 'flex', flexDirection: 'column', fontFamily: '"Manrope", sans-serif', minHeight: '300px', height: '100%' }}>
    <div style={{ marginBottom: '20px' }}><QuoteIcon /></div>
    <p style={{ color: '#064423', fontSize: '14px', fontWeight: 400, lineHeight: '1.78', margin: '0 0 28px 0', flex: 1, opacity: 0.92, whiteSpace: 'pre-line' }}>{item.text}</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid rgba(6,68,35,0.1)', flexShrink: 0, background: '#f0f7f1' }}>
        {item.image_url ? <img src={item.image_url} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : <div style={{width: '100%', height: '100%', background: '#eaeaea'}} />}
      </div>
      <div>
        <p style={{ color: '#064423', fontSize: '14px', fontWeight: 400, lineHeight: 1.2, margin: '0 0 4px 0' }}>{item.name}</p>
        <p style={{ color: 'rgba(6,68,35,0.42)', fontSize: '12px', fontWeight: 400, lineHeight: 1.2, margin: 0 }}>{item.role}</p>
      </div>
    </div>
  </div>
);

const ArrowBtn = ({ direction, disabled, onClick }: { direction: 'left' | 'right'; disabled: boolean; onClick: () => void }) => (
  <button onClick={onClick} disabled={disabled} style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', border: `1px solid ${disabled ? 'rgba(6,68,35,0.1)' : 'rgba(6,68,35,0.18)'}`, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: disabled ? 'not-allowed' : 'pointer', color: disabled ? 'rgba(6,68,35,0.2)' : 'rgba(6,68,35,0.4)', transition: 'border-color .2s, color .2s', padding: 0 }} onMouseEnter={e => { if (!disabled) { (e.currentTarget as HTMLButtonElement).style.borderColor = '#2BA735'; (e.currentTarget as HTMLButtonElement).style.color = '#2BA735'; }}} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = disabled ? 'rgba(6,68,35,0.1)' : 'rgba(6,68,35,0.18)'; (e.currentTarget as HTMLButtonElement).style.color = disabled ? 'rgba(6,68,35,0.2)' : 'rgba(6,68,35,0.4)'; }}>
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  </button>
);

const Testimonials: React.FC = () => {
  const [data, setData] = useState<AboutTestimonialsContent | null>(null);
  const [loading, setLoading] = useState(true);
  
  const cardsPerView = useCardsPerView();
  const isMobile = cardsPerView === 1;
  const [idx, setIdx] = useState(0);
  const [slideDir, setSlideDir] = useState(1);
  
  // Safe calculation for dynamic length
  const maxIdx = Math.max(0, (data?.testimonials?.length || 0) - cardsPerView);

  useEffect(() => {
    const fetchData = async () => {
      const { data: sectionData, error } = await supabase
        .from('page_sections')
        .select('content_en, enabled')
        .eq('id', 'about_testimonials')
        .single();
      if (!error && sectionData?.enabled && sectionData.content_en) {
        setData(sectionData.content_en as AboutTestimonialsContent);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setIdx(prev => Math.min(prev, Math.max(0, (data?.testimonials?.length || 0) - cardsPerView)));
  }, [cardsPerView, data]);

  const go = (next: number) => {
    setSlideDir(next > idx ? 1 : -1);
    setIdx(next);
  };

  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && idx < maxIdx) go(idx + 1);
      else if (diff < 0 && idx > 0) go(idx - 1);
    }
    touchStartX.current = null;
  };

  if (loading || !data) return null;

  const visible = data.testimonials?.slice(idx, idx + cardsPerView) || [];
  const gridCols = cardsPerView === 1 ? 'repeat(1, 1fr)' : cardsPerView === 2 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <section style={{ width: '100%', background: '#FDFDFD', padding: 'clamp(48px, 8vw, 80px) clamp(20px, 5vw, 48px)', fontFamily: '"Manrope", sans-serif' }}>
      <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ color: '#064423', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.5px', lineHeight: 1.1, margin: '0 0 10px 0' }}>{data.heading}</h2>
          <p style={{ color: 'rgba(6,68,35,0.45)', fontSize: '13px', margin: 0 }}>{data.subheading}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 0 : '16px' }}>
          {!isMobile && <ArrowBtn direction="left" disabled={idx === 0} onClick={() => go(idx - 1)} />}
          <div style={{ overflow: 'hidden', flex: 1 }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <AnimatePresence mode="wait" custom={slideDir}>
              <motion.div key={`${idx}-${cardsPerView}`} custom={slideDir} initial={{ opacity: 0, x: slideDir * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: slideDir * -60 }} transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} style={{ display: 'grid', gridTemplateColumns: gridCols, gap: '16px' }}>
                {visible.map((item, i) => <TestimonialCard key={`${idx}-${i}`} item={item} />)}
              </motion.div>
            </AnimatePresence>
          </div>
          {!isMobile && <ArrowBtn direction="right" disabled={idx >= maxIdx} onClick={() => go(idx + 1)} />}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginTop: '28px' }}>
          {isMobile && <ArrowBtn direction="left" disabled={idx === 0} onClick={() => go(idx - 1)} />}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button key={i} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} style={{ height: '7px', width: i === idx ? '22px' : '7px', borderRadius: '4px', border: 'none', background: i === idx ? '#2BA735' : 'rgba(6,68,35,0.15)', cursor: 'pointer', padding: 0, transition: 'all 0.28s ease' }} />
            ))}
          </div>
          {isMobile && <ArrowBtn direction="right" disabled={idx >= maxIdx} onClick={() => go(idx + 1)} />}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;