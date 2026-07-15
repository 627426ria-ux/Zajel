import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../supabase';
import type { HomeTrustedContent } from '../admin/sections/homepage/types';

// --- DATA FETCHING HOOK ---
function useSectionContent<T>(id: string) {
  const { i18n } = useTranslation();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchSection = async () => {
      const { data: section, error } = await supabase
        .from('page_sections')
        .select('id, enabled, content_en, content_ar')
        .eq('id', id)
        .single<{ id: string; enabled: boolean; content_en: T | string; content_ar: T | string }>();

      if (!isMounted) return;

      if (!error && section?.enabled) {
        const raw = i18n.language === 'ar' ? section.content_ar : section.content_en;
        const content: T | null = typeof raw === 'string' ? JSON.parse(raw) : (raw ?? null);
        setData(content);
      } else {
        setData(null);
      }
      setLoading(false);
    };

    fetchSection();
    return () => { isMounted = false; };
  }, [id, i18n.language]);

  return { data, loading };
}

// --- ANIMATED COUNTER HOOK/COMPONENT ---
const AnimatedCounter = ({ 
  end, 
  suffix = "", 
  duration = 2000, 
  isVisible,
  isArabic = false 
}: { 
  end: number, 
  suffix?: string, 
  duration?: number, 
  isVisible: boolean,
  isArabic?: boolean 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // Does not start counting until scrolled into view
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth ease-out cubic function for premium deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure it lands exactly on the target
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  // Convert to Eastern Arabic numerals if language is Arabic
  const displayCount = isArabic 
    ? new Intl.NumberFormat('ar-EG').format(count) 
    : count;

  return <>{displayCount}{suffix}</>;
};

const TrustedSection: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  // Fetch CMS Data
  const { data, loading } = useSectionContent<HomeTrustedContent>('home_trusted');

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // --- SCROLL REVEAL LOGIC ---
  useEffect(() => {
    // Prevent observer from attaching before data is loaded and DOM is ready
    if (loading || !data || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Fires only once when scrolled into view
        }
      },
      { threshold: 0.25 } // Triggers when 25% of the section is visible on screen
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [loading, data]); // Re-run effect ONLY when data finishes loading

  // Show nothing if loading or if section is disabled/missing in DB
  if (loading || !data) return null;

  // Smooth easing bezier curve
  const smoothEase = "transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]";
  
  // RTL adjustments
  const borderSide = isRtl ? 'border-l' : 'border-r';
  const originSide = isRtl ? 'origin-right' : 'origin-left';

  // Ensure we have exactly 4 stats for the grid, using fallbacks if array is incomplete
  const safeStats = data.stats || [];
  const getStat = (index: number) => safeStats[index] || { value: 0, suffix: '', label: '' };

  return (
    <section 
      ref={sectionRef}
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full pt-30 pb-10 md:pb-16 lg:pb-20 px-5 sm:px-6 lg:px-12 bg-white overflow-hidden" 
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[1000px] mx-auto">
        
        {/* --- HEADER AREA (Animated) --- */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12 transform ${smoothEase} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left: Main Heading */}
          <h2 className="text-[#0A4D26] text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight">
            {data.heading1} <br className="hidden sm:block" />
            <span className="text-[#36B936]">{data.headingHighlight}</span> <br className="hidden sm:block" />
            {data.heading2}
          </h2>
          
          {/* Right: Subtext */}
          <p className="text-[#0A4D26]/80 text-[13px] md:text-[14px] lg:text-[15px] font-light leading-relaxed max-w-full md:max-w-[280px] pb-1">
            {data.subtext}
          </p>
          
        </div>

        {/* --- STATS GRID (Animated with a slight delay) --- */}
        <div className={`w-full rounded-[1.2rem] md:rounded-[1.5rem] border border-[#36B936]/30 overflow-hidden bg-white shadow-sm transform ${smoothEase} delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          <div className="grid grid-cols-2 md:grid-cols-2">
            
            {/* Cell 1 */}
            <div className={`group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 border-b ${borderSide} border-[#36B936]/30 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default`}>
              <div className={`text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-light leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] ${originSide}`}>
                <AnimatedCounter end={getStat(0).value} suffix={getStat(0).suffix} isVisible={isVisible} isArabic={isRtl} />
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-light transition-colors duration-300">
                {getStat(0).label}
              </div>
            </div>

            {/* Cell 2 */}
            <div className="group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 border-b border-[#36B936]/30 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default">
              <div className={`text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-light leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] ${originSide}`}>
                <AnimatedCounter end={getStat(1).value} suffix={getStat(1).suffix} isVisible={isVisible} isArabic={isRtl} />
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-light transition-colors duration-300">
                {getStat(1).label}
              </div>
            </div>

            {/* Cell 3 */}
            <div className={`group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 ${borderSide} border-[#36B936]/30 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default`}>
              <div className={`text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-light leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] ${originSide}`}>
                <AnimatedCounter end={getStat(2).value} suffix={getStat(2).suffix} isVisible={isVisible} isArabic={isRtl} />
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-light transition-colors duration-300">
                {getStat(2).label}
              </div>
            </div>

            {/* Cell 4 */}
            <div className="group flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12 transition-colors duration-500 hover:bg-[#36B936]/[0.03] cursor-default">
              <div className={`text-[#36B936] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-light leading-none tracking-tight mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#0A4D26] ${originSide}`}>
                <AnimatedCounter end={getStat(3).value} suffix={getStat(3).suffix} isVisible={isVisible} isArabic={isRtl} />
              </div>
              <div className="text-[#0A4D26] text-[11px] md:text-[13px] lg:text-[15px] font-light transition-colors duration-300">
                {getStat(3).label}
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
};

export default TrustedSection;