import React, { useState, useEffect, useCallback } from 'react';
import { Search, ChevronRight, ChevronLeft } from 'lucide-react';

// --- SLIDER DATA FOR BACKGROUND & TEXT ---
const HERO_SLIDES = [
  {
    title: 'Global\nCourier',
    desc: 'Seamless international shipping and logistics.\nConnecting you to the world.',
    bgDesktop: '/ChatGPT Image May 12, 2026 at 02_03_10 AM.png',        // <-- DESKTOP IMAGE FOR SLIDE 1
    bgMobile: '/ChatGPT Image May 12, 2026 at 02_04_41 AM.png'        // <-- MOBILE IMAGE FOR SLIDE 1
  },
  {
    title: 'Intelligent\nmovement',
    desc: 'Reliable Courier & Logistics Solutions.\nBuilt for Speed',
    bgDesktop: '/ChatGPT Image May 12, 2026, 02_58_21 AM.png', // <-- DESKTOP IMAGE FOR SLIDE 2
    bgMobile: '/ChatGPT Image May 12, 2026, 02_58_25 AM.png'   // <-- MOBILE IMAGE FOR SLIDE 2
  },
  {
    title: 'E-commerce\nSolutions',
    desc: 'End-to-end fulfillment and rapid delivery.\nBuilt to scale your online business.',
    bgDesktop: '/ChatGPT Image May 12, 2026, 02_30_58 AM.png',          // <-- DESKTOP IMAGE FOR SLIDE 3
    bgMobile: '/ChatGPT Image May 12, 2026, 02_26_18 AM.png'          // <-- MOBILE IMAGE FOR SLIDE 3
  }
];

const STATISTICS = [
  { value: '15+',   label: 'Years of\nSuccess' },
  { value: '45M+',  label: 'Shipments\nDelivered' },
  { value: '200+',  label: 'Countries\nCovered' },
  { value: '500K+', label: 'Worldwide\nDestinations' },
];

const TrackIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" fill="none">
    <path d="M33.7514 33.7514L24.2236 24.2236M24.2236 24.2236C26.8023 21.6449 28.251 18.1474 28.251 14.5005C28.251 10.8537 26.8023 7.35616 24.2236 4.77743C21.6449 2.19871 18.1474 0.75 14.5005 0.75C10.8537 0.75 7.35616 2.19871 4.77743 4.77743C2.19871 7.35616 0.75 10.8537 0.75 14.5005C0.75 18.1474 2.19871 21.6449 4.77743 24.2236C7.35616 26.8023 10.8537 28.251 14.5005 28.251C18.1474 28.251 21.6449 26.8023 24.2236 24.2236Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const QuotationIcon = ({ }: { size?: number }) => (
  <svg width="24" height="24" viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6875 5.5H6.1875C6.00516 5.5 5.83029 5.57243 5.70136 5.70136C5.57243 5.8303 5.5 6.00516 5.5 6.1875V14.4375C5.5 14.6198 5.57243 14.7947 5.70136 14.9236C5.83029 15.0526 6.00516 15.125 6.1875 15.125H22.6875C22.8698 15.125 23.0447 15.0526 23.1736 14.9236C23.3026 14.7947 23.375 14.6198 23.375 14.4375V6.1875C23.375 6.00516 23.3026 5.8303 23.1736 5.70136C23.0447 5.57243 22.8698 5.5 22.6875 5.5ZM22 13.75H6.875V6.875H22V13.75ZM26.8125 0H2.0625C1.51549 0 0.990886 0.217299 0.604092 0.604092C0.217298 0.990886 0 1.51549 0 2.0625V32.3125C0 32.8595 0.217298 33.3841 0.604092 33.7709C0.990886 34.1577 1.51549 34.375 2.0625 34.375H26.8125C27.3595 34.375 27.8841 34.1577 28.2709 33.7709C28.6577 33.3841 28.875 32.8595 28.875 32.3125V2.0625C28.875 1.51549 28.6577 0.990886 28.2709 0.604092C27.8841 0.217299 27.3595 0 26.8125 0ZM27.5 32.3125C27.5 32.4948 27.4276 32.6697 27.2986 32.7986C27.1697 32.9276 26.9948 33 26.8125 33H2.0625C1.88016 33 1.7053 32.9276 1.57636 32.7986C1.44743 32.6697 1.375 32.4948 1.375 32.3125V2.0625C1.375 1.88016 1.44743 1.7053 1.57636 1.57636C1.7053 1.44743 1.88016 1.375 2.0625 1.375H26.8125C26.9948 1.375 27.1697 1.44743 27.2986 1.57636C27.4276 1.7053 27.5 1.88016 27.5 2.0625V32.3125ZM8.9375 20.625C8.9375 20.8969 8.85686 21.1628 8.70577 21.3889C8.55468 21.615 8.33994 21.7913 8.08869 21.8953C7.83744 21.9994 7.56097 22.0266 7.29425 21.9736C7.02753 21.9205 6.78253 21.7896 6.59023 21.5973C6.39793 21.405 6.26697 21.16 6.21392 20.8932C6.16087 20.6265 6.1881 20.3501 6.29217 20.0988C6.39624 19.8476 6.57247 19.6328 6.79859 19.4817C7.02471 19.3306 7.29055 19.25 7.5625 19.25C7.92717 19.25 8.27691 19.3949 8.53477 19.6527C8.79263 19.9106 8.9375 20.2603 8.9375 20.625ZM15.8125 20.625C15.8125 20.8969 15.7319 21.1628 15.5808 21.3889C15.4297 21.615 15.2149 21.7913 14.9637 21.8953C14.7124 21.9994 14.436 22.0266 14.1693 21.9736C13.9025 21.9205 13.6575 21.7896 13.4652 21.5973C13.2729 21.405 13.142 21.16 13.0889 20.8932C13.0359 20.6265 13.0631 20.3501 13.1672 20.0988C13.2712 19.8476 13.4475 19.6328 13.6736 19.4817C13.8997 19.3306 14.1656 19.25 14.4375 19.25C14.8022 19.25 15.1519 19.3949 15.4098 19.6527C15.6676 19.9106 15.8125 20.2603 15.8125 20.625ZM22.6875 20.625C22.6875 20.8969 22.6069 21.1628 22.4558 21.3889C22.3047 21.615 22.0899 21.7913 21.8387 21.8953C21.5874 21.9994 21.311 22.0266 21.0443 21.9736C20.7775 21.9205 20.5325 21.7896 20.3402 21.5973C20.1479 21.405 20.017 21.16 19.9639 20.8932C19.9109 20.6265 19.9381 20.3501 20.0422 20.0988C20.1462 19.8476 20.3225 19.6328 20.5486 19.4817C20.7747 19.3306 21.0406 19.25 21.3125 19.25C21.6772 19.25 22.0269 19.3949 22.2848 19.6527C22.5426 19.9106 22.6875 20.2603 22.6875 20.625ZM8.9375 27.5C8.9375 27.7719 8.85686 28.0378 8.70577 28.2639C8.55468 28.49 8.33994 28.6663 8.08869 28.7703C7.83744 28.8744 7.56097 28.9016 7.29425 28.8486C7.02753 28.7955 6.78253 28.6646 6.59023 28.4723C6.39793 28.28 6.26697 28.035 6.21392 27.7682C6.16087 27.5015 6.1881 27.2251 6.29217 26.9738C6.39624 26.7226 6.57247 26.5078 6.79859 26.3567C7.02471 26.2056 7.29055 26.125 7.5625 26.125C7.92717 26.125 8.27691 26.2699 8.53477 26.5277C8.79263 26.7856 8.9375 27.1353 8.9375 27.5ZM15.8125 27.5C15.8125 27.7719 15.7319 28.0378 15.5808 28.2639C15.4297 28.49 15.2149 28.6663 14.9637 28.7703C14.7124 28.8744 14.436 28.9016 14.1693 28.8486C13.9025 28.7955 13.6575 28.6646 13.4652 28.4723C13.2729 28.28 13.142 28.035 13.0889 27.7682C13.0359 27.5015 13.0631 27.2251 13.1672 26.9738C13.2712 26.7226 13.4475 26.5078 13.6736 26.3567C13.8997 26.2056 14.1656 26.125 14.4375 26.125C14.8022 26.125 15.1519 26.2699 15.4098 26.5277C15.6676 26.7856 15.8125 27.1353 15.8125 27.5ZM22.6875 27.5C22.6875 27.7719 22.6069 28.0378 22.4558 28.2639C22.3047 28.49 22.0899 28.6663 21.8387 28.7703C21.5874 28.8744 21.311 28.9016 21.0443 28.8486C20.7775 28.7955 20.5325 28.6646 20.3402 28.4723C20.1479 28.28 20.017 28.035 19.9639 27.7682C19.9109 27.5015 19.9381 27.2251 20.0422 26.9738C20.1462 26.7226 20.3225 26.5078 20.5486 26.3567C20.7747 26.2056 21.0406 26.125 21.3125 26.125C21.6772 26.125 22.0269 26.2699 22.2848 26.5277C22.5426 26.7856 22.6875 27.1353 22.6875 27.5Z" fill="white"/>
</svg>

);

const DomesticIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 35 35" fill="none">
    <path d="M17.1875 0C13.7881 0 10.4651 1.00803 7.63864 2.89662C4.81217 4.7852 2.60921 7.46952 1.30833 10.6101C0.0074468 13.7507 -0.332923 17.2066 0.330261 20.5406C0.993444 23.8747 2.63039 26.9372 5.03411 29.3409C7.43783 31.7446 10.5003 33.3816 13.8344 34.0447C17.1684 34.7079 20.6243 34.3676 23.7649 33.0667C26.9055 31.7658 29.5898 29.5628 31.4784 26.7364C33.367 23.9099 34.375 20.5869 34.375 17.1875C34.37 12.6306 32.5576 8.26183 29.3354 5.03963C26.1132 1.81743 21.7444 0.00500431 17.1875 0ZM17.1875 32.7611C16.0995 31.7144 13.2344 28.5656 11.813 23.375H22.562C21.1406 28.5656 18.2755 31.7144 17.1875 32.7611ZM11.4847 22C10.8385 18.8242 10.8385 15.5508 11.4847 12.375H22.8903C23.5366 15.5508 23.5366 18.8242 22.8903 22H11.4847ZM17.1875 1.61391C18.2755 2.66062 21.1406 5.80937 22.562 11H11.813C13.2344 5.80937 16.0995 2.66062 17.1875 1.61391ZM24.3049 12.375H32.2506C33.2498 15.5055 33.2498 18.8695 32.2506 22H24.3049C24.8984 18.8191 24.8984 15.5559 24.3049 12.375ZM31.7384 11H24.0041C23.1366 7.46314 21.4138 4.19343 18.987 1.47812C21.7631 1.80066 24.4046 2.85122 26.6439 4.52337C28.8832 6.19553 30.6407 8.42986 31.7384 11ZM15.3897 1.47812C12.963 4.19343 11.2402 7.46314 10.3727 11H2.63829C3.736 8.42986 5.49353 6.19553 7.73283 4.52337C9.97213 2.85122 12.6136 1.80066 15.3897 1.47812ZM2.12438 12.375H10.0702C9.47664 15.5559 9.47664 18.8191 10.0702 22H2.12438C1.12524 18.8695 1.12524 15.5055 2.12438 12.375ZM2.64001 23.375H10.3744C11.2419 26.9119 12.9647 30.1816 15.3914 32.8969C12.6147 32.5749 9.97253 31.5246 7.73258 29.8524C5.49263 28.1802 3.73456 25.9456 2.63657 23.375H2.64001ZM18.9888 32.8969C21.4143 30.1812 23.1359 26.9115 24.0023 23.375H31.7367C30.639 25.9451 28.8815 28.1795 26.6422 29.8516C24.4029 31.5238 21.7614 32.5743 18.9853 32.8969H18.9888Z" fill="white"/>
  </svg>
);

const InternationalIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size * 1.14} height={size * 0.8} viewBox="0 0 40 28" fill="none">
    <path d="M39.8252 10.0581L37.4189 4.0425C37.2653 3.66084 37.0011 3.33384 36.6602 3.10352C36.3193 2.87319 35.9173 2.75008 35.5059 2.75H28.875V0.6875C28.875 0.505164 28.8026 0.330295 28.6736 0.201364C28.5447 0.072433 28.3698 0 28.1875 0H2.0625C1.51549 0 0.990886 0.217298 0.604092 0.604092C0.217299 0.990886 0 1.51549 0 2.0625V21.3125C0 21.8595 0.217299 22.3841 0.604092 22.7709C0.990886 23.1577 1.51549 23.375 2.0625 23.375H5.54984C5.71588 24.5197 6.28864 25.5663 7.16326 26.3232C8.03787 27.0801 9.15584 27.4967 10.3125 27.4967C11.4692 27.4967 12.5871 27.0801 13.4617 26.3232C14.3364 25.5663 14.9091 24.5197 15.0752 23.375H24.7998C24.9659 24.5197 25.5386 25.5663 26.4133 26.3232C27.2879 27.0801 28.4058 27.4967 29.5625 27.4967C30.7192 27.4967 31.8371 27.0801 32.7117 26.3232C33.5864 25.5663 34.1591 24.5197 34.3252 23.375H37.8125C38.3595 23.375 38.8841 23.1577 39.2709 22.7709C39.6577 22.3841 39.875 21.8595 39.875 21.3125V10.3125C39.8747 10.2253 39.8577 10.139 39.8252 10.0581ZM28.875 4.125H35.5059C35.6434 4.12473 35.7778 4.16569 35.8918 4.24259C36.0058 4.3195 36.0941 4.42881 36.1453 4.55641L38.1717 9.625H28.875V4.125ZM1.375 2.0625C1.375 1.88016 1.44743 1.70529 1.57636 1.57636C1.7053 1.44743 1.88016 1.375 2.0625 1.375H27.5V13.75H1.375V2.0625ZM10.3125 26.125C9.63263 26.125 8.96802 25.9234 8.40273 25.5457C7.83743 25.168 7.39684 24.6311 7.13666 24.003C6.87649 23.3749 6.80841 22.6837 6.94105 22.0169C7.07369 21.3501 7.40108 20.7376 7.88182 20.2568C8.36256 19.7761 8.97507 19.4487 9.64188 19.316C10.3087 19.1834 10.9999 19.2515 11.628 19.5117C12.2561 19.7718 12.793 20.2124 13.1707 20.7777C13.5484 21.343 13.75 22.0076 13.75 22.6875C13.75 23.5992 13.3878 24.4735 12.7432 25.1182C12.0985 25.7628 11.2242 26.125 10.3125 26.125ZM24.7998 22H15.0752C14.9091 20.8553 14.3364 19.8087 13.4617 19.0518C12.5871 18.2949 11.4692 17.8783 10.3125 17.8783C9.15584 17.8783 8.03787 18.2949 7.16326 19.0518C6.28864 19.8087 5.71588 20.8553 5.54984 22H2.0625C1.88016 22 1.7053 21.9276 1.57636 21.7986C1.44743 21.6697 1.375 21.4948 1.375 21.3125V15.125H27.5V18.3408C26.7836 18.6815 26.1624 19.1937 25.6914 19.832C25.2204 20.4703 24.9141 21.215 24.7998 22ZM29.5625 26.125C28.8826 26.125 28.218 25.9234 27.6527 25.5457C27.0874 25.168 26.6468 24.6311 26.3867 24.003C26.1265 23.3749 26.0584 22.6837 26.191 22.0169C26.3237 21.3501 26.6511 20.7376 27.1318 20.2568C27.6126 19.7761 28.2251 19.4487 28.8919 19.316C29.5587 19.1834 30.2499 19.2515 30.878 19.5117C31.5061 19.7718 32.043 20.2124 32.4207 20.7777C32.7984 21.343 33 22.0076 33 22.6875C33 23.5992 32.6378 24.4735 31.9932 25.1182C31.3485 25.7628 30.4742 26.125 29.5625 26.125ZM38.5 21.3125C38.5 21.4948 38.4276 21.6697 38.2986 21.7986C38.1697 21.9276 37.9948 22 37.8125 22H34.3252C34.1427 20.7369 33.466 19.598 32.444 18.8338C31.4219 18.0696 30.1381 17.7426 28.875 17.9248V11H38.5V21.3125Z" fill="white"/>
  </svg>
);

const QUICK_ACTIONS = [
  { label: 'Track',         fullLabel: 'Track Shipment',     desc: 'Real-time tracking for all your packages',                    path: '/track-shipment',     Icon: TrackIcon,         iconBg: '#2BA735' },
  { label: 'Quotation',     fullLabel: 'Shipping Quotation', desc: 'Get instant price estimates for domestic and international',  path: '/quotation',          Icon: QuotationIcon,     iconBg: '#5B3C8C' },
  { label: 'Domestic',      fullLabel: 'Domestic Services',  desc: 'Fast and reliable delivery within the country',              path: '/domestic-courier',   Icon: DomesticIcon,      iconBg: '#C8922A' },
  { label: 'International', fullLabel: 'International',      desc: 'Shipping to over 200 countries worldwide',                   path: '/international-courier', Icon: InternationalIcon, iconBg: '#C0392B' },
];

const DOT_COUNT = QUICK_ACTIONS.length;

const HeroSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [heroIdx, setHeroIdx] = useState(0);
  const [animDir, setAnimDir]     = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((idx: number, dir: 'left' | 'right') => {
    if (isAnimating) return;
    setAnimDir(dir); setIsAnimating(true);
    setTimeout(() => { setActiveIdx(idx); setIsAnimating(false); }, 260);
  }, [isAnimating]);

  const prev = () => goTo((activeIdx - 1 + DOT_COUNT) % DOT_COUNT, 'left');
  const next = () => goTo((activeIdx + 1) % DOT_COUNT, 'right');

  // Quick Actions Carousel interval
  useEffect(() => {
    const t = setInterval(() => goTo((activeIdx + 1) % DOT_COUNT, 'right'), 3200);
    return () => clearInterval(t);
  }, [activeIdx, goTo]);

  // Hero Slider interval
  useEffect(() => {
    const t = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const action = QUICK_ACTIONS[activeIdx];
  const { Icon } = action;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes qaSlideRight { from { opacity:0; transform:translateX(14px); } to { opacity:1; transform:translateX(0); } }
        @keyframes qaSlideLeft  { from { opacity:0; transform:translateX(-14px); } to { opacity:1; transform:translateX(0); } }

        .hf1 { animation: fadeUp .7s ease forwards; }
        .hf2 { animation: fadeUp .7s .12s ease forwards; opacity:0; }
        .hf3 { animation: fadeUp .7s .22s ease forwards; opacity:0; }
        .hf4 { animation: fadeUp .7s .32s ease forwards; opacity:0; }
        .hf5 { animation: fadeUp .7s .42s ease forwards; opacity:0; }

        .qa-sr { animation: qaSlideRight .26s cubic-bezier(.22,1,.36,1) forwards; }
        .qa-sl { animation: qaSlideLeft  .26s cubic-bezier(.22,1,.36,1) forwards; }

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
        .qa-icon { width: 48px; height: 48px; border-radius: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform .2s ease; }
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
        style={{
          fontFamily: '"Manrope", sans-serif',
          minHeight: '100svh',
        }}
      >
        {/* Animated Background Layers */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === heroIdx ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          >
            {/* Mobile Image Layer */}
            <div
              className="block lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.bgMobile}')` }}
            />
            {/* Desktop Image Layer */}
            <div
              className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.bgDesktop}')` }}
            />
          </div>
        ))}

        {/* Mobile gradient — darkened bottom area for white text readability */}
        <div
          className="mobile-only absolute inset-0 z-[1] pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,.7) 0%, transparent 40%, rgba(0,0,0,.2) 60%, rgba(0,0,0,.6) 100%)' }}
        />

        {/* Desktop gradient — strong left fade */}
        <div
          className="desktop-only absolute inset-0 z-[1] pointer-events-none"
          style={{ background: 'linear-gradient(110deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.88) 22%, rgba(255,255,255,0) 50%)' }}
        />

        {/* ── MOBILE ── */}
        <div className="mobile-only flex-col relative z-10 min-h-[100svh]">

          {/* top: track bar aligned with content padding, pushed below nav space */}
          <div className="px-5 pt-24">
            <form
              onSubmit={e => e.preventDefault()}
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

          {/* spacer — windshield area remains clear */}
          <div className="flex-1" />

          {/* bottom area: Headline + Description + Quick Actions + Stats */}
          <div className="px-5 pb-9 flex flex-col gap-6">
            
            {/* White text for mobile headline and description (Animated via Key change) */}
            <div key={`mob-${heroIdx}`} className="min-h-[120px]">
              <h1 className="hf2 font-light text-white leading-[1.08] tracking-tight mb-3 whitespace-pre-line" style={{ fontSize: 'clamp(2.6rem, 11vw, 3.5rem)' }}>
                {HERO_SLIDES[heroIdx].title}
              </h1>
              <p className="hf3 text-white/90 font-normal leading-snug whitespace-pre-line" style={{ fontSize: 'clamp(14px, 3.8vw, 17px)' }}>
                {HERO_SLIDES[heroIdx].desc}
              </p>
            </div>

            {/* quick action icon chips */}
            <div className="hf4 flex items-end justify-between">
              {QUICK_ACTIONS.map((qa, i) => {
                const { Icon: QIcon } = qa;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2"
                    style={{ flex: 1 }}
                  >
                    <a
                      href={qa.path}
                      className="flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                      style={{ width: 48, height: 48, borderRadius: 13, backgroundColor: qa.iconBg }}
                      aria-label={qa.fullLabel}
                    >
                      <QIcon size={22} />
                    </a>
                    <span
                      className="text-white font-medium text-center leading-tight"
                      style={{ fontSize: 10, letterSpacing: '.04em', whiteSpace: 'pre-line', textTransform: 'uppercase' }}
                    >
                      {qa.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* thin divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,.25)' }} />

            {/* stats */}
            <div className="hf5 grid grid-cols-2 gap-x-4 gap-y-5">
              {STATISTICS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-white font-light leading-none"
                    style={{ fontSize: 'clamp(1.9rem, 8vw, 2.4rem)', letterSpacing: '-.02em' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-white/60 font-bold mt-1.5 leading-tight whitespace-pre-line"
                    style={{ fontSize: 'clamp(9px, 2.4vw, 11px)', textTransform: 'uppercase', letterSpacing: '.13em' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── DESKTOP (Unchanged structure, Animated text) ── */}
        <main className="desktop-only relative z-10 h-screen flex flex-col justify-between px-6 md:px-10 lg:px-14 pt-36 pb-12">
          <div>
            <form
              onSubmit={e => e.preventDefault()}
              className="hf1 bg-white rounded-full p-1.5 flex items-center w-full max-w-[400px] shadow-sm border border-gray-100 mb-10 focus-within:shadow-md transition-shadow"
            >
              <label htmlFor="dt-track" className="sr-only">Enter AWB Number or Mobile</label>
              <input id="dt-track" type="text" placeholder="Enter AWB Number or Mobile"
                className="flex-1 px-4 outline-none text-[13px] text-gray-700 bg-transparent placeholder:text-gray-400" />
              <button type="submit" className="bg-[#15A744] hover:bg-[#0e8f38] transition-colors text-white px-5 py-2.5 rounded-full text-[13px] font-semibold flex items-center gap-1.5">
                Track <Search size={13} strokeWidth={2.5} />
              </button>
            </form>

            {/* Animated Title & Description (Triggered by Key Change) */}
            <div key={`dt-${heroIdx}`} className="min-h-[200px]">
              <h1 className="hf2 text-[5rem] lg:text-[6.5rem] font-light text-[#0A4D26] leading-[1.05] tracking-tight mb-5 whitespace-pre-line">
                {HERO_SLIDES[heroIdx].title}
              </h1>
              <p className="hf3 text-[18px] text-[#0A4D26] font-normal max-w-sm leading-snug whitespace-pre-line">
                {HERO_SLIDES[heroIdx].desc}
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between items-end w-full">
            {/* carousel */}
            <div className="hf4 flex flex-col gap-3.5">
              <a href={action.path} className={`qa-card ${isAnimating ? (animDir === 'right' ? 'qa-sr' : 'qa-sl') : ''}`}>
                <div className="qa-icon" style={{ backgroundColor: action.iconBg }}><Icon size={26} /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#004E09] text-[13px] font-semibold leading-tight mb-1">{action.fullLabel}</p>
                  <p className="text-[#004E09]/50 text-[11px] leading-snug line-clamp-2">{action.desc}</p>
                </div>
                <div className="qa-arrow"><ChevronRight size={12} strokeWidth={2} /></div>
              </a>
              <div className="flex items-center gap-2 pl-0.5">
                <button onClick={prev} aria-label="Previous" className="qa-nav"><ChevronLeft size={12} strokeWidth={2} /></button>
                <div className="flex items-center gap-1.5" role="tablist">
                  {QUICK_ACTIONS.map((_, i) => (
                    <button key={i} role="tab" aria-selected={i === activeIdx}
                      onClick={() => goTo(i, i > activeIdx ? 'right' : 'left')}
                      className="qa-dot"
                      style={{ width: i === activeIdx ? '20px' : '5px', backgroundColor: i === activeIdx ? '#2BA735' : 'rgba(0,78,9,.2)' }}
                    />
                  ))}
                </div>
                <button onClick={next} aria-label="Next" className="qa-nav"><ChevronRight size={12} strokeWidth={2} /></button>
              </div>
            </div>

            {/* stats */}
            <div className="hf5 flex flex-col items-end text-white max-w-2xl">
              <p className="text-right text-[13px] font-normal mb-7 leading-relaxed text-white/90 drop-shadow-md">
                Domestic and international shipping, smart tracking, instant <br />
                quotations, and dependable delivery — powered by technology.
              </p>
              <div className="grid grid-cols-4 gap-10 text-right">
                {STATISTICS.map((stat, i) => (
                  <div key={i}>
                    <div className="text-[2.25rem] font-light tracking-tight drop-shadow leading-none">{stat.value}</div>
                    <div className="text-[10px] text-white/70 mt-2 uppercase tracking-[.15em] font-bold leading-[1.5] whitespace-pre-line">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

      </div>
    </>
  );
};

export default HeroSection;