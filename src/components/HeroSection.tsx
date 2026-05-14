import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Search, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const HERO_SLIDES = [
  {
    title: 'Global\nCourier',
    desc: 'Seamless international shipping and logistics.\nConnecting you to the world.',
    bgDesktop: '/ChatGPT Image May 14, 2026, 01_14_25 PM.png',
    bgMobile:  '/ChatGPT Image May 14, 2026, 01_13_31 PM.png',
  },
  {
    title: 'Intelligent\nmovement',
    desc: 'Moving what matters \n with precision, trust, and control.',
    bgDesktop: '/ChatGPT Image May 12, 2026, 02_58_21 AM.png',
    bgMobile:  '/ChatGPT Image May 12, 2026, 02_58_25 AM.png',
  },
  {
    title: 'E-commerce\nSolutions',
    desc: 'End-to-end fulfillment and rapid delivery.\nBuilt to scale your online business.',
    bgDesktop: '/ChatGPT Image May 12, 2026, 02_30_58 AM.png',
    bgMobile:  '/ChatGPT Image May 12, 2026, 02_26_18 AM.png',
  },
  {
    title: 'Everyday \n Reliability',
    desc: 'Fast, secure, and reliable delivery solutions built for everyday UAE life.',
    bgDesktop: '/ChatGPT Image May 14, 2026, 01_24_32 AM.png',
    bgMobile:  '/ChatGPT Image May 14, 2026, 01_30_01 AM.png',
  },
  {
    title: 'Freight \n Solutions',
    desc: 'Reliable freight movement designed for modern businesses across air, land, and global trade networks.',
    bgDesktop: '/ChatGPT Image May 14, 2026, 02_22_11 AM.png',
    bgMobile:  '/ChatGPT Image May 14, 2026, 02_23_35 AM.png',
  },
  {
    title: 'ZAJEL \n NOW',
    desc: 'Instant city wide pickups and deliveries made simple through the ZAJEL app.',
    bgDesktop: '/ChatGPT Image May 14, 2026, 02_00_48 PM.png',
    bgMobile:  '/ChatGPT Image May 14, 2026, 02_03_54 PM.png',
  },
  
];

const STATISTICS = [
  { value: '15+',   label: 'Years of Success' },
  { value: '45M+',  label: 'Shipments Delivered' },
  { value: '200+',  label: 'Countries Covered' },
  { value: '500K+', label: 'Worldwide Destinations' },
];

const TrackIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" fill="none">
    <path d="M33.7514 33.7514L24.2236 24.2236M24.2236 24.2236C26.8023 21.6449 28.251 18.1474 28.251 14.5005C28.251 10.8537 26.8023 7.35616 24.2236 4.77743C21.6449 2.19871 18.1474 0.75 14.5005 0.75C10.8537 0.75 7.35616 2.19871 4.77743 4.77743C2.19871 7.35616 0.75 10.8537 0.75 14.5005C0.75 18.1474 2.19871 21.6449 4.77743 24.2236C7.35616 26.8023 10.8537 28.251 14.5005 28.251C18.1474 28.251 21.6449 26.8023 24.2236 24.2236Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const QuotationIcon = ({ }: { size?: number }) => (
  <svg width="24" height="24" viewBox="0 0 29 35" fill="none">
    <path d="M22.6875 5.5H6.1875C6.00516 5.5 5.83029 5.57243 5.70136 5.70136C5.57243 5.8303 5.5 6.00516 5.5 6.1875V14.4375C5.5 14.6198 5.57243 14.7947 5.70136 14.9236C5.83029 15.0526 6.00516 15.125 6.1875 15.125H22.6875C22.8698 15.125 23.0447 15.0526 23.1736 14.9236C23.3026 14.7947 23.375 14.6198 23.375 14.4375V6.1875C23.375 6.00516 23.3026 5.8303 23.1736 5.70136C23.0447 5.57243 22.8698 5.5 22.6875 5.5ZM22 13.75H6.875V6.875H22V13.75ZM26.8125 0H2.0625C1.51549 0 0.990886 0.217299 0.604092 0.604092C0.217298 0.990886 0 1.51549 0 2.0625V32.3125C0 32.8595 0.217298 33.3841 0.604092 33.7709C0.990886 34.1577 1.51549 34.375 2.0625 34.375H26.8125C27.3595 34.375 27.8841 34.1577 28.2709 33.7709C28.6577 33.3841 28.875 32.8595 28.875 32.3125V2.0625C28.875 1.51549 28.6577 0.990886 28.2709 0.604092C27.8841 0.217299 27.3595 0 26.8125 0ZM27.5 32.3125C27.5 32.4948 27.4276 32.6697 27.2986 32.7986C27.1697 32.9276 26.9948 33 26.8125 33H2.0625C1.88016 33 1.7053 32.9276 1.57636 32.7986C1.44743 32.6697 1.375 32.4948 1.375 32.3125V2.0625C1.375 1.88016 1.44743 1.7053 1.57636 1.57636C1.7053 1.44743 1.88016 1.375 2.0625 1.375H26.8125C26.9948 1.375 27.1697 1.44743 27.2986 1.57636C27.4276 1.7053 27.5 1.88016 27.5 2.0625V32.3125Z" fill="white"/>
  </svg>
);

const DomesticIcon = () => (
  <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1875 0C13.7881 0 10.4651 1.00803 7.63864 2.89662C4.81217 4.7852 2.60921 7.46952 1.30833 10.6101C0.0074468 13.7507 -0.332923 17.2066 0.330261 20.5406C0.993444 23.8747 2.63039 26.9372 5.03411 29.3409C7.43783 31.7446 10.5003 33.3816 13.8344 34.0447C17.1684 34.7079 20.6243 34.3676 23.7649 33.0667C26.9055 31.7658 29.5898 29.5628 31.4784 26.7364C33.367 23.9099 34.375 20.5869 34.375 17.1875C34.37 12.6306 32.5576 8.26183 29.3354 5.03963C26.1132 1.81743 21.7444 0.00500431 17.1875 0ZM17.1875 32.7611C16.0995 31.7144 13.2344 28.5656 11.813 23.375H22.562C21.1406 28.5656 18.2755 31.7144 17.1875 32.7611ZM11.4847 22C10.8385 18.8242 10.8385 15.5508 11.4847 12.375H22.8903C23.5366 15.5508 23.5366 18.8242 22.8903 22H11.4847ZM17.1875 1.61391C18.2755 2.66062 21.1406 5.80937 22.562 11H11.813C13.2344 5.80937 16.0995 2.66062 17.1875 1.61391ZM24.3049 12.375H32.2506C33.2498 15.5055 33.2498 18.8695 32.2506 22H24.3049C24.8984 18.8191 24.8984 15.5559 24.3049 12.375ZM31.7384 11H24.0041C23.1366 7.46314 21.4138 4.19343 18.987 1.47812C21.7631 1.80066 24.4046 2.85122 26.6439 4.52337C28.8832 6.19553 30.6407 8.42986 31.7384 11ZM15.3897 1.47812C12.963 4.19343 11.2402 7.46314 10.3727 11H2.63829C3.736 8.42986 5.49353 6.19553 7.73283 4.52337C9.97213 2.85122 12.6136 1.80066 15.3897 1.47812ZM2.12438 12.375H10.0702C9.47664 15.5559 9.47664 18.8191 10.0702 22H2.12438C1.12524 18.8695 1.12524 15.5055 2.12438 12.375ZM2.64001 23.375H10.3744C11.2419 26.9119 12.9647 30.1816 15.3914 32.8969C12.6147 32.5749 9.97253 31.5246 7.73258 29.8524C5.49263 28.1802 3.73456 25.9456 2.63657 23.375H2.64001ZM18.9888 32.8969C21.4143 30.1812 23.1359 26.9115 24.0023 23.375H31.7367C30.639 25.9451 28.8815 28.1795 26.6422 29.8516C24.4029 31.5238 21.7614 32.5743 18.9853 32.8969H18.9888Z" fill="white"/>
  </svg>
);

const InternationalIcon = () => (
  <svg width="26" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.8252 10.0581L37.4189 4.0425C37.2653 3.66084 37.0011 3.33384 36.6602 3.10352C36.3193 2.87319 35.9173 2.75008 35.5059 2.75H28.875V0.6875C28.875 0.505164 28.8026 0.330295 28.6736 0.201364C28.5447 0.072433 28.3698 0 28.1875 0H2.0625C1.51549 0 0.990886 0.217298 0.604092 0.604092C0.217299 0.990886 0 1.51549 0 2.0625V21.3125C0 21.8595 0.217299 22.3841 0.604092 22.7709C0.990886 23.1577 1.51549 23.375 2.0625 23.375H5.54984C5.71588 24.5197 6.28864 25.5663 7.16326 26.3232C8.03787 27.0801 9.15584 27.4967 10.3125 27.4967C11.4692 27.4967 12.5871 27.0801 13.4617 26.3232C14.3364 25.5663 14.9091 24.5197 15.0752 23.375H24.7998C24.9659 24.5197 25.5386 25.5663 26.4133 26.3232C27.2879 27.0801 28.4058 27.4967 29.5625 27.4967C30.7192 27.4967 31.8371 27.0801 32.7117 26.3232C33.5864 25.5663 34.1591 24.5197 34.3252 23.375H37.8125C38.3595 23.375 38.8841 23.1577 39.2709 22.7709C39.6577 22.3841 39.875 21.8595 39.875 21.3125V10.3125C39.8747 10.2253 39.8577 10.139 39.8252 10.0581ZM28.875 4.125H35.5059C35.6434 4.12473 35.7778 4.16569 35.8918 4.24259C36.0058 4.3195 36.0941 4.42881 36.1453 4.55641L38.1717 9.625H28.875V4.125ZM1.375 2.0625C1.375 1.88016 1.44743 1.70529 1.57636 1.57636C1.7053 1.44743 1.88016 1.375 2.0625 1.375H27.5V13.75H1.375V2.0625ZM10.3125 26.125C9.63263 26.125 8.96802 25.9234 8.40273 25.5457C7.83743 25.168 7.39684 24.6311 7.13666 24.003C6.87649 23.3749 6.80841 22.6837 6.94105 22.0169C7.07369 21.3501 7.40108 20.7376 7.88182 20.2568C8.36256 19.7761 8.97507 19.4487 9.64188 19.316C10.3087 19.1834 10.9999 19.2515 11.628 19.5117C12.2561 19.7718 12.793 20.2124 13.1707 20.7777C13.5484 21.343 13.75 22.0076 13.75 22.6875C13.75 23.5992 13.3878 24.4735 12.7432 25.1182C12.0985 25.7628 11.2242 26.125 10.3125 26.125ZM24.7998 22H15.0752C14.9091 20.8553 14.3364 19.8087 13.4617 19.0518C12.5871 18.2949 11.4692 17.8783 10.3125 17.8783C9.15584 17.8783 8.03787 18.2949 7.16326 19.0518C6.28864 19.8087 5.71588 20.8553 5.54984 22H2.0625C1.88016 22 1.7053 21.9276 1.57636 21.7986C1.44743 21.6697 1.375 21.4948 1.375 21.3125V15.125H27.5V18.3408C26.7836 18.6815 26.1624 19.1937 25.6914 19.832C25.2204 20.4703 24.9141 21.215 24.7998 22ZM29.5625 26.125C28.8826 26.125 28.218 25.9234 27.6527 25.5457C27.0874 25.168 26.6468 24.6311 26.3867 24.003C26.1265 23.3749 26.0584 22.6837 26.191 22.0169C26.3237 21.3501 26.6511 20.7376 27.1318 20.2568C27.6126 19.7761 28.2251 19.4487 28.8919 19.316C29.5587 19.1834 30.2499 19.2515 30.878 19.5117C31.5061 19.7718 32.043 20.2124 32.4207 20.7777C32.7984 21.343 33 22.0076 33 22.6875C33 23.5992 32.6378 24.4735 31.9932 25.1182C31.3485 25.7628 30.4742 26.125 29.5625 26.125ZM38.5 21.3125C38.5 21.4948 38.4276 21.6697 38.2986 21.7986C38.1697 21.9276 37.9948 22 37.8125 22H34.3252C34.1427 20.7369 33.466 19.598 32.444 18.8338C31.4219 18.0696 30.1381 17.7426 28.875 17.9248V11H38.5V21.3125Z" fill="white"/>
  </svg>
);

const QUICK_ACTIONS = [
  { label: 'Track',         fullLabel: 'Track Shipment',     desc: 'Real-time tracking for all your packages',                   path: '/track',       Icon: TrackIcon,         iconBg: '#2BA735' },
  { label: 'Quotation',     fullLabel: 'Shipping Quotation', desc: 'Get instant price estimates for domestic and international', path: '/quotation',             Icon: QuotationIcon,     iconBg: '#5B3C8C' },
  { label: 'Domestic',      fullLabel: 'Domestic Services',  desc: 'Fast and reliable delivery within the country',             path: '/domestic-courier',      Icon: DomesticIcon,      iconBg: '#C8922A' },
  { label: 'International', fullLabel: 'International',      desc: 'Shipping to over 200 countries worldwide',                  path: '/international-courier', Icon: InternationalIcon, iconBg: '#C0392B' },
];

const DOT_COUNT = QUICK_ACTIONS.length;

// Ken Burns zoom directions — cycles per slide so each gets a unique feel


// ─── Stats Bar ────────────────────────────────────────────────────────────────
const StatsBar: React.FC = () => (
  <div style={{ display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'flex-end', width:'100%', gap:0 }}>
    {STATISTICS.map((stat, i) => (
      <React.Fragment key={i}>
        <div style={{ flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', padding:'0 4px' }}>
          <span style={{ display:'block', color:'#ffffff', fontWeight:300, lineHeight:1, letterSpacing:'-0.02em', fontSize:'clamp(1rem, 3.5vw, 2.25rem)', whiteSpace:'nowrap' }}>
            {stat.value}
          </span>
          <span style={{ display:'block', color:'rgba(255,255,255,0.6)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em', lineHeight:1.3, marginTop:'5px', fontSize:'clamp(6px, 1.2vw, 10px)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
            {stat.label}
          </span>
        </div>
        {i < STATISTICS.length - 1 && (
          <div style={{ width:1, alignSelf:'stretch', background:'rgba(255,255,255,0.18)', flexShrink:0, margin:'2px 0' }} />
        )}
      </React.Fragment>
    ))}
  </div>
);

// ─── Component ────────────────────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx]     = useState(0);
  const [heroIdx, setHeroIdx]         = useState(0);
  const [prevHeroIdx, setPrevHeroIdx] = useState<number | null>(null);
  const [animDir, setAnimDir]         = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const [slidePhase, setSlidePhase]   = useState<'idle' | 'exit' | 'enter'>('idle');
  const [textKey, setTextKey]         = useState(0);
  const heroIdxRef = useRef(heroIdx);
useEffect(() => { heroIdxRef.current = heroIdx; }, [heroIdx]);

  const goTo = useCallback((idx: number, dir: 'left' | 'right') => {
    if (isAnimating) return;
    setAnimDir(dir);
    setIsAnimating(true);
    setTimeout(() => { setActiveIdx(idx); setIsAnimating(false); }, 260);
  }, [isAnimating]);

  const prev = () => goTo((activeIdx - 1 + DOT_COUNT) % DOT_COUNT, 'left');
  const next = () => goTo((activeIdx + 1) % DOT_COUNT, 'right');

  useEffect(() => {
    const t = setInterval(() => goTo((activeIdx + 1) % DOT_COUNT, 'right'), 3200);
    return () => clearInterval(t);
  }, [activeIdx, goTo]);

  // Hero slide transition with cinematic phases
  useEffect(() => {
    const t = setInterval(() => {
      const current = heroIdxRef.current;
      const next = (current + 1) % HERO_SLIDES.length;
  
      setPrevHeroIdx(current);
      setSlidePhase('exit');
  
      setTimeout(() => {
        setHeroIdx(next);
        setSlidePhase('enter');
        setTextKey(k => k + 1);
        setTimeout(() => {
          setPrevHeroIdx(null);
          setSlidePhase('idle');
        }, 1400);
      }, 700);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const handleTrackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input');
    if (input && input.value.trim()) {
      navigate(`/track?awb=${encodeURIComponent(input.value.trim())}`);
    } else {
      navigate('/track');
    }
  };

  const action = QUICK_ACTIONS[activeIdx];
  const { Icon } = action;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');

        /* ── Entry animations ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes qaSlideRight { from { opacity:0; transform:translateX(14px); }  to { opacity:1; transform:translateX(0); } }
        @keyframes qaSlideLeft  { from { opacity:0; transform:translateX(-14px); } to { opacity:1; transform:translateX(0); } }

        .hf1 { animation: fadeUp .7s ease forwards; }
        .hf2 { animation: fadeUp .7s .12s ease forwards; opacity:0; }
        .hf3 { animation: fadeUp .7s .22s ease forwards; opacity:0; }
        .hf4 { animation: fadeUp .7s .32s ease forwards; opacity:0; }
        .hf5 { animation: fadeUp .7s .42s ease forwards; opacity:0; }

        .qa-sl { animation: qaSlideLeft  .26s cubic-bezier(.22,1,.36,1) forwards; }
        .qa-sr { animation: qaSlideRight .26s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── Ken Burns zoom variants ── */
       @keyframes kbZoomOut {
  from { transform: scale(1.1); }
  to   { transform: scale(1.0); }
}

.kb-0, .kb-1, .kb-2, .kb-3, .kb-4 {
  animation: kbZoomOut 5.7s ease-out both;
}

        /* ── Slide transition overlays ── */
        @keyframes slideReveal {
          from { clip-path: inset(0 100% 0 0); opacity: 0; }
          to   { clip-path: inset(0 0% 0 0);   opacity: 1; }
        }
        @keyframes slideExit {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(1.04); }
        }
        @keyframes crossFadeIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes crossFadeOut {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }

        /* ── Cinematic text transitions ── */
        @keyframes textReveal {
          0%   { opacity: 0; transform: translateY(22px) skewY(1.5deg); filter: blur(4px); }
          60%  { filter: blur(0px); }
          100% { opacity: 1; transform: translateY(0px) skewY(0deg); filter: blur(0px); }
        }
        @keyframes subtitleReveal {
          0%   { opacity: 0; transform: translateY(14px); filter: blur(2px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }

        /* ── Shimmer wipe on transition ── */
        @keyframes shimmerWipe {
          0%   { transform: translateX(-100%); opacity: 0.6; }
          100% { transform: translateX(200%);  opacity: 0; }
        }

        /* ── Progress bar for slide timing ── */
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }

        .slide-text-title {
          animation: textReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .slide-text-desc {
          animation: subtitleReveal 0.85s 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .hero-bg-active {
          animation-timing-function: linear;
          animation-fill-mode: both;
        }
        .hero-bg-entering {
          animation: crossFadeIn 0.85s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .hero-bg-exiting {
          animation: crossFadeOut 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        

        /* ── Shimmer overlay on transition ── */
        .slide-shimmer {
          position: absolute; inset: 0; z-index: 5; pointer-events: none;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%);
          animation: shimmerWipe 1.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* ── Progress indicator ── */
        .slide-progress {
          height: 2px;
          background: rgba(255,255,255,0.35);
          border-radius: 99px;
          overflow: hidden;
        }
        .slide-progress-bar {
          height: 100%;
          background: rgba(255,255,255,0.9);
          border-radius: 99px;
          animation: progressBar 5s linear forwards;
        }

        .qa-dot {
          height: 4px; border-radius: 99px; border: none; padding: 0; cursor: pointer;
          transition: width .35s cubic-bezier(.22,1,.36,1), background-color .35s ease;
        }
        .qa-nav {
          width: 28px; height: 28px; border-radius: 50%;
          border: 1.5px solid rgba(0,78,9,.15);
          background: rgba(255,255,255,.55); backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          color: rgba(0,78,9,.5); cursor: pointer; transition: all .18s ease;
        }
        .qa-nav:hover { background: rgba(255,255,255,.95); color: #004E09; }

        .qa-card {
          display: flex; align-items: center; gap: 14px;
          background: rgba(255,255,255,.86);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border-radius: 18px; padding: 13px 16px 13px 13px; width: 320px;
          border: 1px solid rgba(255,255,255,.5);
          box-shadow: 0 10px 36px rgba(0,0,0,.09), 0 1px 0 rgba(255,255,255,.8) inset;
          text-decoration: none; transition: background .2s ease;
        }
        .qa-card:hover { background: rgba(255,255,255,.98); }
        .qa-icon {
          width: 48px; height: 48px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform .2s ease;
        }
        .qa-card:hover .qa-icon { transform: scale(1.05); }
        .qa-arrow {
          width: 28px; height: 28px; border-radius: 50%;
          border: 1.5px solid rgba(0,78,9,.1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: rgba(0,78,9,.3); transition: all .2s ease;
        }
        .qa-card:hover .qa-arrow { border-color: #2BA735; color: #2BA735; }

        @media (max-width: 1023px) {
          .desktop-only { display: none !important; }
          .mobile-only  { display: flex !important; }
        }
        @media (min-width: 1024px) {
          .mobile-only { display: none !important; }
        }
      `}</style>

      <div
        className="relative w-full overflow-hidden bg-[#e6f0e9]"
        style={{ fontFamily: '"Manrope", sans-serif', minHeight: '100svh' }}
      >
        {/* ── Animated background slides with Ken Burns ── */}
        {HERO_SLIDES.map((slide, idx) => {
          const kbClass   = `kb-${idx % 5}`;
          const isActive  = idx === heroIdx;
          
          const isExiting = idx === prevHeroIdx && (slidePhase === 'exit' || slidePhase === 'enter');
          
          let fadeClass = '';
          if (isActive  && slidePhase === 'enter') fadeClass = 'hero-bg-entering';
          if (isExiting && slidePhase === 'exit')  fadeClass = 'hero-bg-exiting';
          
          const opacity =
            isActive  && slidePhase === 'idle'  ? 1         :
            isActive  && slidePhase === 'exit'  ? 1         :
            isActive  && slidePhase === 'enter' ? undefined :
            isExiting && slidePhase === 'exit'  ? undefined :
            isExiting && slidePhase === 'enter' ? 0         :
            0;
          
          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full overflow-hidden ${fadeClass}`}
              style={{
                zIndex: isActive ? 2 : isExiting ? 1 : -1,
                opacity,
              }}
            >
              {/* Mobile bg */}
              <div
  key={`mob-bg-${idx}-${textKey}`}
  className={`block lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat ${isActive ? kbClass : ''}`}
  style={{ backgroundImage: `url('${slide.bgMobile}')`, transformOrigin: 'center center' }}
/>
<div
  key={`dt-bg-${idx}-${textKey}`}
  className={`hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat ${isActive ? kbClass : ''}`}
  style={{ backgroundImage: `url('${slide.bgDesktop}')`, transformOrigin: 'center center' }}
/>
            </div>
          );
        })}

        {/* Shimmer wipe on transition */}
        {slidePhase === 'enter' && (
          <div key={`shimmer-${textKey}`} className="slide-shimmer" style={{ zIndex: 6 }} />
        )}

        {/* Mobile gradient overlay */}
        <div
          className="mobile-only absolute inset-0 pointer-events-none"
          style={{ zIndex: 7, background: 'linear-gradient(to bottom, rgba(255,255,255,.7) 0%, transparent 38%, rgba(0,0,0,.18) 58%, rgba(0,0,0,.68) 100%)' }}
        />

        {/* Desktop gradient overlay */}
        <div
          className="desktop-only absolute inset-0 pointer-events-none"
          style={{ zIndex: 7, background: 'linear-gradient(110deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.88) 22%, rgba(255,255,255,0) 50%)' }}
        />

        {/* ══════════════════════════════════════════════
            MOBILE  (< 1024px)
        ══════════════════════════════════════════════ */}
        <div className="mobile-only flex-col relative min-h-[100svh]" style={{ zIndex: 10 }}>

          {/* Track bar */}
          <div className="px-5 pt-24">
            <form
              onSubmit={handleTrackSubmit}
              className="hf1 bg-white/90 backdrop-blur-sm rounded-full p-1 flex items-center w-full shadow-sm border border-white/60 mb-7"
            >
              <input
                type="text"
                placeholder="Enter AWB Number or Mobile"
                className="flex-1 px-3.5 outline-none text-[13px] text-gray-700 bg-transparent placeholder:text-gray-400"
              />
              <button type="submit" className="bg-[#15A744] text-white px-4 py-2.5 rounded-full text-[13px] font-semibold flex items-center gap-1.5 shrink-0">
                Track <Search size={12} strokeWidth={2.5} />
              </button>
            </form>
          </div>

          <div className="flex-1" />

          {/* Bottom content */}
          <div className="px-5 pb-8 flex flex-col gap-5">

            <div key={`mob-${textKey}`} className="min-h-[110px]">
              <h1
                className="slide-text-title font-light text-white leading-[1.08] tracking-tight mb-3 whitespace-pre-line"
                style={{ fontSize: 'clamp(2.6rem, 11vw, 3.5rem)' }}
              >
                {HERO_SLIDES[heroIdx].title}
              </h1>
              <p
                className="slide-text-desc text-white/90 font-normal leading-snug whitespace-pre-line"
                style={{ fontSize: 'clamp(14px, 3.8vw, 17px)' }}
              >
                {HERO_SLIDES[heroIdx].desc}
              </p>
            </div>

            {/* Slide progress dots */}
            <div className="flex gap-1.5">
              {HERO_SLIDES.map((_, i) => (
                <div key={i} className="slide-progress flex-1">
                  {i === heroIdx && <div key={`p-${textKey}`} className="slide-progress-bar" />}
                </div>
              ))}
            </div>

            {/* Quick action icon chips */}
            <div className="hf4 flex items-end justify-between">
              {QUICK_ACTIONS.map((qa, i) => {
                const { Icon: QIcon } = qa;
                return (
                  <div key={i} className="flex flex-col items-center gap-2" style={{ flex: 1 }}>
                    <Link
                      to={qa.path}
                      className="flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                      style={{ width: 48, height: 48, borderRadius: 13, backgroundColor: qa.iconBg }}
                      aria-label={qa.fullLabel}
                    >
                      <QIcon size={22} />
                    </Link>
                    <span
                      className="text-white font-medium text-center leading-tight"
                      style={{ fontSize: 10, letterSpacing: '.04em', textTransform: 'uppercase' }}
                    >
                      {qa.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.22)' }} />

            <div className="hf5">
              <StatsBar />
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════
            DESKTOP  (≥ 1024px)
        ══════════════════════════════════════════════ */}
        <main className="desktop-only relative h-screen flex flex-col justify-between px-6 md:px-10 lg:px-14 pt-36 pb-10" style={{ zIndex: 10 }}>

          {/* Top: track bar + animated headline */}
          <div>
            <form
              onSubmit={handleTrackSubmit}
              className="hf1 bg-white rounded-full p-1.5 flex items-center w-full max-w-[400px] shadow-sm border border-gray-100 mb-10 focus-within:shadow-md transition-shadow"
            >
              <label htmlFor="dt-track" className="sr-only">Enter AWB Number or Mobile</label>
              <input
                id="dt-track"
                type="text"
                placeholder="Enter AWB Number or Mobile"
                className="flex-1 px-4 outline-none text-[13px] text-gray-700 bg-transparent placeholder:text-gray-400"
              />
              <button type="submit" className="bg-[#15A744] hover:bg-[#0e8f38] transition-colors text-white px-5 py-2.5 rounded-full text-[13px] font-semibold flex items-center gap-1.5">
                Track <Search size={13} strokeWidth={2.5} />
              </button>
            </form>

            <div key={`dt-${textKey}`} className="min-h-[200px]">
              <h1
                className="slide-text-title font-light text-[#0A4D26] leading-[1.05] tracking-tight mb-5 whitespace-pre-line"
                style={{ fontSize: 'clamp(3.5rem, 6.5vw, 6.5rem)' }}
              >
                {HERO_SLIDES[heroIdx].title}
              </h1>
              <p
                className="slide-text-desc text-[#0A4D26] font-normal max-w-sm leading-snug whitespace-pre-line"
                style={{ fontSize: 'clamp(15px, 1.3vw, 18px)' }}
              >
                {HERO_SLIDES[heroIdx].desc}
              </p>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-row justify-between items-end w-full gap-10">

            {/* Quick-action carousel */}
            <div className="hf4 flex flex-col gap-3.5 shrink-0">
              <Link to={action.path} className={`qa-card ${isAnimating ? (animDir === 'right' ? 'qa-sr' : 'qa-sl') : ''}`}>
                <div className="qa-icon" style={{ backgroundColor: action.iconBg }}><Icon size={26} /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#004E09] text-[13px] font-semibold leading-tight mb-1">{action.fullLabel}</p>
                  <p className="text-[#004E09]/50 text-[11px] leading-snug line-clamp-2">{action.desc}</p>
                </div>
                <div className="qa-arrow"><ChevronRight size={12} strokeWidth={2} /></div>
              </Link>
              <div className="flex items-center gap-2 pl-0.5">
                <button onClick={prev} aria-label="Previous" className="qa-nav"><ChevronLeft size={12} strokeWidth={2} /></button>
                <div className="flex items-center gap-1.5" role="tablist">
                  {QUICK_ACTIONS.map((_, i) => (
                    <button
                      key={i} role="tab" aria-selected={i === activeIdx}
                      onClick={() => goTo(i, i > activeIdx ? 'right' : 'left')}
                      className="qa-dot"
                      style={{
                        width: i === activeIdx ? '20px' : '5px',
                        backgroundColor: i === activeIdx ? '#2BA735' : 'rgba(0,78,9,.2)',
                      }}
                    />
                  ))}
                </div>
                <button onClick={next} aria-label="Next" className="qa-nav"><ChevronRight size={12} strokeWidth={2} /></button>
              </div>
            </div>

            {/* Stats */}
            <div className="hf5 flex-1 min-w-0 flex flex-col items-end gap-5">
              {/* Slide progress bars */}
              <div className="flex gap-1.5 w-full max-w-xs">
                {HERO_SLIDES.map((_, i) => (
                  <div key={i} className="slide-progress flex-1">
                    {i === heroIdx && <div key={`dp-${textKey}`} className="slide-progress-bar" />}
                  </div>
                ))}
              </div>
              <p
                className="text-right text-white/80 drop-shadow-sm leading-relaxed"
                style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}
              >
                Domestic and international shipping, smart tracking, instant<br />
                quotations, and dependable delivery — powered by technology.
              </p>
              <StatsBar />
            </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default HeroSection;