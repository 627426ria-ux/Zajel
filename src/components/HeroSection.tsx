import React from 'react';
import { Search, Calculator, ShoppingCart, Truck, Briefcase, Package } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleTrackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input');
    if (input && input.value.trim()) {
      navigate(`/track?awb=${encodeURIComponent(input.value.trim())}`);
    } else {
      navigate('/track');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700&display=swap');
        
        .hero-font {
          font-family: 'Manrope', sans-serif;
        }

        /* ══ Brand Type Hierarchy (per Brand Book) ══ */
        .h1-style {
          color: #064423;
          font-weight: 400;
          letter-spacing: -0.01em;
        }
        .h2-style {
          color: #064423;
          font-weight: 400;
        }
        .h3-style {
          color: #064423;
          font-weight: 400;
        }
        .bc1-style {
          color: #132818;
          font-weight: 400;
        }
        .n1-style {
          color: #36B936;
          font-weight: 400;
        }
        .n2-style {
          color: #6B7280;
          font-weight: 400;
        }

        /* ══════════════════════════════════════════════
           High-end entrance sequence
           Every element starts hidden (animation-fill-mode: backwards)
           and is revealed in a single orchestrated wave, timed so the
           eye travels: headline → subtitle → banner → search → dock → CTA → icons.
           ══════════════════════════════════════════════ */

        @keyframes heroRise {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroDrop {
          from { opacity: 0; transform: translate(-50%, -14px) scale(0.96); }
          to   { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        @keyframes heroScaleIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes heroDockRise {
          from { opacity: 0; transform: translate(-50%, 28px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes heroPop {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          65%  { opacity: 1; transform: translate(-50%, -50%) scale(1.04); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes heroSheen {
          from { transform: translateX(-130%) skewX(-12deg); }
          to   { transform: translateX(230%) skewX(-12deg); }
        }
        @keyframes heroFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .anim-title {
          animation: heroRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.05s;
        }
        .anim-subtitle {
          animation: heroRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.2s;
        }
        .anim-banner {
          animation: heroScaleIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.35s;
        }
        .anim-search {
          animation: heroDrop 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.65s;
        }
        .anim-dock {
          animation: heroDockRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.55s;
        }
        .anim-dock-left {
          animation: heroFade 0.6s ease-out both;
          animation-delay: 0.95s;
        }
        .anim-dock-right {
          animation: heroFade 0.6s ease-out both;
          animation-delay: 1.05s;
        }
        .anim-cta {
          animation: heroPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          animation-delay: 0.85s;
        }
        .anim-cta-sheen {
          animation: heroSheen 1.1s ease-in-out both;
          animation-delay: 1.5s;
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-title, .anim-subtitle, .anim-banner, .anim-search,
          .anim-dock, .anim-dock-left, .anim-dock-right, .anim-cta {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .anim-search, .anim-dock, .anim-cta {
            transform: translate(-50%, 0) !important;
          }
          .anim-cta {
            transform: translate(-50%, -50%) !important;
          }
          .anim-cta-sheen {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>

      {/* Main Outer Canvas */}
      <section className="w-full min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center pb-12 hero-font overflow-hidden py-10">
        
        {/* ══ Header Typography (H1 + BC1) ══ */}
        <div className="text-center z-10 mb-8 md:mb-10 px-4">
          <h1 className="anim-title h1-style text-[36px] md:text-[44px] mb-3 tracking-tight leading-[1.2]">
            {t('hero.title.line1', 'Intelligent Movement,')}
            <br />
            {t('hero.title.line2', 'Nationwide and Beyond')}
          </h1>
          <p className="anim-subtitle bc1-style text-[14px] md:text-[16px] max-w-[600px] mx-auto leading-relaxed">
            {t('hero.subtitle', 'From a single shipment to a full supply chain, Zajel moves what matters, across the UAE and to 200+ countries beyond it')}
          </p>
        </div>

        {/* Relative Container for Overlapping Elements */}
        <div className="relative w-full max-w-[1100px] px-4 md:px-8">
          
          {/* ══ Overlapping Search Bar ══ */}
          <div className="anim-search absolute top-6 left-1/2 w-full max-w-[500px] z-30 px-4">
            <form 
              onSubmit={handleTrackSubmit}
              className="bg-white p-[6px] rounded-full flex items-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-100 transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
            >
              <input 
                type="text" 
                placeholder={t('hero.search.placeholder', 'Enter AWB Number or Mobile')} 
                className="n2-style flex-1 px-5 outline-none text-[13px] md:text-[14px] placeholder:text-[#9CA3AF] bg-transparent"
              />
              <button 
                type="submit"
                className="bg-[#36B936] hover:bg-[#2ea22e] text-white px-5 md:px-7 py-2.5 rounded-full text-[13px] md:text-[14px] font-normal flex items-center gap-1.5 transition-colors"
              >
                {t('hero.search.button', 'Track Now')} <Search size={16} strokeWidth={2.5} />
              </button>
            </form>
          </div>

          {/* Main Banner Image Container */}
          <div className="anim-banner relative w-full h-[360px] md:h-[440px] rounded-[24px] md:rounded-[32px] bg-gray-200 overflow-hidden shadow-sm">
            
            {/* Top Fade Gradient to blend with background */}
            <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#F9FAFB] to-transparent z-10 pointer-events-none" />

            {/* The Background Image */}
            <img 
              src="/ChatGPT Image May 14, 2026, 01_14_25 PM.png" 
              alt="Cargo ship and airplane" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* ══ Overlapping Bottom Dock ══ */}
          <div className="anim-dock absolute -bottom-12 left-1/2 z-30 w-full max-w-[740px] px-2">
            <div className="bg-white rounded-[16px] md:rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 h-[96px] flex items-center relative">
              
              {/* Left Items */}
              <div className="anim-dock-left flex items-center h-full flex-1 justify-evenly pr-[60px] md:pr-[80px]">
                <Link to="/business-solutions" className="flex flex-col items-center justify-center gap-1.5 group outline-none">
                  <Briefcase className="w-6 h-6 text-[#36B936] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
                  <span className="n1-style text-[13px] md:text-[14px] text-center leading-tight">
                    {t('hero.actions.business.label', 'Business Solution')}
                  </span>
                </Link>
                <div className="w-[1px] h-[36px] bg-gray-200" />
                <Link to="/quotation" className="flex flex-col items-center justify-center gap-1.5 group outline-none">
                  <Calculator className="w-6 h-6 text-[#36B936] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
                  <span className="n1-style text-[13px] md:text-[14px]">
                    {t('hero.actions.rate.label', 'Quotation')}
                  </span>
                </Link>
              </div>

              {/* ══ Middle Card (Perfectly Centered) ══ */}
              <Link to="/send-shipment" className="anim-cta absolute left-1/2 top-1/2 z-40 outline-none group">
                <div className="relative w-[120px] h-[86px] md:w-[145px] md:h-[96px] bg-[#36B936] hover:bg-[#2ea22e] rounded-[16px] md:rounded-[20px] shadow-[0_12px_24px_rgba(54,185,54,0.35)] flex flex-col items-center justify-center gap-2 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <Package className="w-[26px] h-[26px] md:w-[28px] md:h-[28px] text-white" strokeWidth={2} />
                  <span className="text-white text-[13px] md:text-[14px] font-normal text-center leading-tight">
                    Send shipment
                  </span>
                  {/* one-time light sheen sweep to draw the eye once everything has landed */}
                  <span
                    aria-hidden="true"
                    className="anim-cta-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                  />
                </div>
              </Link>

              {/* Right Items */}
              <div className="anim-dock-right flex items-center h-full flex-1 justify-evenly pl-[60px] md:pl-[80px]">
                <Link to="/ecommerce" className="flex flex-col items-center justify-center gap-1.5 group outline-none">
                  <ShoppingCart className="w-6 h-6 text-[#36B936] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
                  <span className="n1-style text-[13px] md:text-[14px] text-center leading-tight">
                    {t('hero.actions.ecommerce.label', 'Ecommerce')}
                  </span>
                </Link>
                <div className="w-[1px] h-[36px] bg-gray-200" />
                <Link to="/domestic-courier" className="flex flex-col items-center justify-center gap-1.5 group outline-none">
                  <Truck className="w-6 h-6 text-[#36B936] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
                  <span className="n1-style text-[13px] md:text-[14px]">
                    {t('hero.actions.domestic.label', 'Domestic')}
                  </span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;