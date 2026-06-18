import React, { useEffect, useRef, useState } from 'react';
import { Landmark, FileCheck, History, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import RatesSection from '../components/RatesSection';
import Footer from '../components/Footer';

// ==========================================
// 1. ANIMATED "REVEAL" WRAPPER
// ==========================================
const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ==========================================
// 2. INSTITUTIONAL PROTOCOL BOX
// ==========================================
interface GovBoxProps {
  Icon: LucideIcon; 
  title: string;
  content: string;
  delay?: number;
}

const GovBox: React.FC<GovBoxProps> = ({ Icon, title, content, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <div className="group bg-[#36B936] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col h-full min-h-[220px] md:min-h-[280px] shadow-sm hover:shadow-2xl transition-all duration-500 ease-out text-start">
        <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-6 shadow-sm text-[#36B936]">
          <Icon className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
        </div>
        <h3 className="text-white text-[1.15rem] md:text-[1.75rem] font-light leading-tight tracking-tight mb-3 md:mb-5 whitespace-pre-line">
          {title}
        </h3>
        <p className="text-white/90 text-[12px] md:text-[14px] font-light leading-relaxed flex-1">
          {content}
        </p>
      </div>
    </Reveal>
  );
};

// ==========================================
// SECTION 1: RESPONSIVE VIEWPORT HERO
// ==========================================
const GovHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full min-h-[100svh] flex items-center justify-center pt-20 md:pt-32 pb-12 px-5 md:px-12 bg-white" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start text-start order-1">
          <Reveal delay={100}>
            <p className="text-[#36B936] text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-2 md:mb-4">
              {t('gov.hero.eyebrow')}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="text-[#0A4D26] font-light leading-[1.1] tracking-tight text-[2.2rem] md:text-[4.2rem] mb-3 md:mb-6 whitespace-pre-line">
              {t('gov.hero.title')}
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-gray-600 font-light leading-relaxed text-[15px] md:text-[18px] mb-6 md:mb-10 max-w-[500px]">
              {t('gov.hero.description')}
            </p>
          </Reveal>
          
          <div className="hidden lg:flex flex-row gap-3 w-full sm:w-auto">
            <button className="bg-[#36B936] hover:bg-[#2da12d] transition-all duration-300 text-white rounded-full px-8 py-3.5 text-[13px] font-medium tracking-wide shadow-lg active:scale-95 flex items-center gap-2">
              <span className="font-extralight text-base leading-none">+</span>
              <span>{t('gov.hero.btnPrimary')}</span>
            </button>
            <button className="bg-white border border-gray-200 hover:border-[#36B936] transition-all duration-300 text-[#0A4D26] rounded-full px-8 py-3.5 text-[13px] font-medium tracking-wide active:scale-95 flex items-center gap-2">
              <span className="font-extralight text-base leading-none">+</span>
              <span>{t('gov.hero.btnSecondary')}</span>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-2">
          <Reveal delay={500}>
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/ChatGPT Image May 12, 2026, 02_14_43 PM.png" alt="Government Institutional Logistics" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="flex lg:hidden flex-col gap-3 w-full order-3">
          <Reveal delay={600}>
            <button className="bg-[#36B936] hover:bg-[#2da12d] transition-all duration-300 text-white rounded-full w-full py-4 text-[14px] font-medium tracking-wide shadow-lg active:scale-95 flex items-center justify-center gap-2">
              <span className="font-extralight text-lg leading-none">+</span>
              <span>{t('gov.hero.btnPrimary')}</span>
            </button>
          </Reveal>
          <Reveal delay={700}>
            <button className="bg-white border border-gray-200 hover:border-[#36B936] transition-all duration-300 text-[#0A4D26] rounded-full w-full py-4 text-[14px] font-medium tracking-wide active:scale-95 flex items-center justify-center gap-2">
              <span className="font-extralight text-lg leading-none">+</span>
              <span>{t('gov.hero.btnSecondary')}</span>
            </button>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

// ==========================================
// SECTION 2: REGULATORY ADHERENCE
// ==========================================
const ComplianceDetails: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  // Custom numbers mapped per index to support native Arabic numerals cleanly
  const indexNumbers = isRtl ? ['٠١', '٠٢', '٠٣', '٠٤'] : ['01', '02', '03', '04'];

  return (
    <section className="w-full py-16 md:py-32 px-5 md:px-12 bg-white" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col">
            <Reveal>
              <h2 className="text-[#0A4D26] text-[2rem] md:text-[3.5rem] font-light leading-[1.1] mb-5 text-start whitespace-pre-line">
                {t('gov.compliance.title1')}
                <span className="text-[#36B936]">{t('gov.compliance.title2')}</span>
              </h2>
              <p className="text-gray-500 font-light text-[15px] md:text-[18px] leading-relaxed mb-8 text-start">
                {t('gov.compliance.description')}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12 mt-8 lg:mt-0 text-start">
            {[0, 1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex gap-4 md:gap-6 group">
                  <span className="text-[#36B936]/20 text-[1.5rem] md:text-[2.5rem] font-light leading-none">
                    {indexNumbers[i]}
                  </span>
                  <div className="flex flex-col">
                    <h4 className="text-[#0A4D26] text-[1.1rem] md:text-[1.25rem] font-medium mb-1 group-hover:text-[#36B936] transition-colors">
                      {t(`gov.compliance.features.${i}.title`)}
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed text-[13px] md:text-[15px]">
                      {t(`gov.compliance.features.${i}.desc`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 3: INSTITUTIONAL PROTOCOLS
// ==========================================
const InstitutionalProtocol: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-16 md:py-32 px-5 md:px-12 bg-white border-t border-gray-50" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-16 text-start">
            <h2 className="text-[#0A4D26] text-[2rem] md:text-[3.2rem] font-light leading-[1.1] mb-4">
              {t('gov.protocol.title')}
            </h2>
            <p className="text-[#0A4D26]/70 text-[15px] md:text-[18px] font-light">
              {t('gov.protocol.subtitle')}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <GovBox 
            delay={100} Icon={Landmark}
            title={t('gov.protocol.cards.0.title')}
            content={t('gov.protocol.cards.0.content')}
          />
          <GovBox 
            delay={200} Icon={FileCheck}
            title={t('gov.protocol.cards.1.title')}
            content={t('gov.protocol.cards.1.content')}
          />
          <GovBox 
            delay={300} Icon={History}
            title={t('gov.protocol.cards.2.title')}
            content={t('gov.protocol.cards.2.content')}
          />
        </div>
      </div>
    </section>
  );
};

export default function GovInstitutionalPage() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-white overflow-hidden selection:bg-[#36B936] selection:text-white">
      <GovHero />
      <InstitutionalProtocol />
      <ComplianceDetails />
      <RatesSection />
      <Footer />
    </div>
  );
}