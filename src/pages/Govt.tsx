import React, { useEffect, useRef, useState } from 'react';
import { Landmark, FileCheck, ShieldCheck, ArrowRight, History, type LucideIcon } from 'lucide-react';
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
  title: string | React.ReactNode;
  content: string;
  buttonText: string;
  delay?: number;
}

const GovBox: React.FC<GovBoxProps> = ({ Icon, title, content, buttonText, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <div className="group bg-[#36B936] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col h-full min-h-[260px] md:min-h-[360px] shadow-sm hover:shadow-2xl transition-all duration-500 ease-out text-left">
        <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-6 shadow-sm text-[#36B936]">
          <Icon className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
        </div>
        <h3 className="text-white text-[1.15rem] md:text-[1.75rem] font-light leading-tight tracking-tight mb-3 md:mb-5">
          {title}
        </h3>
        <p className="text-white/90 text-[12px] md:text-[14px] font-light leading-relaxed mb-6 md:mb-8 flex-1">
          {content}
        </p>
        <div className="mt-auto self-start">
          <button className="bg-[#0A4D26] hover:bg-black transition-all duration-300 text-[#36B936] rounded-full flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 shadow-md active:scale-95">
            <span className="text-[10px] md:text-[12px] font-bold tracking-wide uppercase">{buttonText}</span>
          </button>
        </div>
      </div>
    </Reveal>
  );
};

// ==========================================
// SECTION 1: RESPONSIVE VIEWPORT HERO
// ==========================================
const GovHero: React.FC = () => {
  return (
    <section className="w-full min-h-[100svh] flex items-center justify-center pt-20 md:pt-32 pb-12 px-5 md:px-12 bg-white" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-1">
          <Reveal delay={100}>
            <p className="text-[#36B936] text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-2 md:mb-4">Public Sector Logistics</p>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="text-[#0A4D26] font-light leading-[1.1] tracking-tight text-[2.2rem] md:text-[4.2rem] mb-3 md:mb-6">
              Government & <br className="hidden md:block" /> Institutional Flows
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-gray-600 font-light leading-relaxed text-[15px] md:text-[18px] mb-6 md:mb-10 max-w-[500px]">
              Highly compliant document handling for UAE’s largest public institutions. We provide the structural logistics needed for high-volume legal and official mandates.
            </p>
          </Reveal>
          
          <div className="hidden lg:flex flex-row gap-3 w-full sm:w-auto">
            <button className="bg-[#36B936] hover:bg-[#2da12d] transition-all duration-300 text-white rounded-full px-8 py-3.5 text-[13px] font-medium shadow-lg active:scale-95">
              Initiate Partnership
            </button>
            <button className="bg-white border border-gray-200 hover:border-[#36B936] transition-all duration-300 text-[#0A4D26] rounded-full px-8 py-3.5 text-[13px] font-medium active:scale-95">
              Compliance Manual
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
            <button className="bg-[#36B936] hover:bg-[#2da12d] transition-all duration-300 text-white rounded-full w-full py-4 text-[14px] font-medium shadow-lg active:scale-95">
              Initiate Partnership
            </button>
          </Reveal>
          <Reveal delay={700}>
            <button className="bg-white border border-gray-200 hover:border-[#36B936] transition-all duration-300 text-[#0A4D26] rounded-full w-full py-4 text-[14px] font-medium active:scale-95">
              Compliance Manual
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
  return (
    <section className="w-full py-16 md:py-32 px-5 md:px-12 bg-white" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col">
            <Reveal>
              <h2 className="text-[#0A4D26] text-[2rem] md:text-[3.5rem] font-light leading-[1.1] mb-5 text-left">
                Precision and <br className="hidden md:block" /> <span className="text-[#36B936]">Full Compliance.</span>
              </h2>
              <p className="text-gray-500 font-light text-[15px] md:text-[18px] leading-relaxed mb-8 text-left">
                Zajel's institutional framework is designed to align with the stringent regulatory requirements of the UAE government, ensuring data privacy and operational continuity.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12 mt-8 lg:mt-0 text-left">
            {[
              { title: "Standardized SLAs", desc: "Rigid Service Level Agreements (SLAs) tailored for public sector performance metrics and timeframes." },
              { title: "Bulk Handling", desc: "Equipped to handle daily volumes exceeding 50,000+ official documents with individual scan-point tracking." },
              { title: "API Synchronization", desc: "Direct integration with government ERP and CRM portals for automated dispatch and return receipting." },
              { title: "Archive Integration", desc: "Logistics flows that support long-term physical document storage and retrieval requirements." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex gap-4 md:gap-6 group">
                  <span className="text-[#36B936]/20 text-[1.5rem] md:text-[2.5rem] font-light leading-none">0{i+1}</span>
                  <div className="flex flex-col">
                    <h4 className="text-[#0A4D26] text-[1.1rem] md:text-[1.25rem] font-medium mb-1 group-hover:text-[#36B936] transition-colors">{item.title}</h4>
                    <p className="text-gray-500 font-light leading-relaxed text-[13px] md:text-[15px]">{item.desc}</p>
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
  return (
    <section className="w-full py-16 md:py-32 px-5 md:px-12 bg-white border-t border-gray-50" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-16 text-left">
            <h2 className="text-[#0A4D26] text-[2rem] md:text-[3.2rem] font-light leading-[1.1] mb-4">
              Structural Governance
            </h2>
            <p className="text-[#0A4D26]/70 text-[15px] md:text-[18px] font-light">
              Managed logistics ecosystems for the public sector.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <GovBox 
            delay={100} Icon={Landmark}
            title={<>Dedicated <br className="hidden sm:block" /> Hubs</>}
            content="On-site sorting and dispatch facilities embedded within major institutional headquarters."
            buttonText="Our Facilities"
          />
          <GovBox 
            delay={200} Icon={FileCheck}
            title={<>Verified <br className="hidden sm:block" /> Submissions</>}
            content="Standardized POD (Proof of Delivery) recognized by all major UAE Ministries."
            buttonText="View Formats"
          />
          <GovBox 
            delay={300} Icon={History}
            title={<>Audit <br className="hidden sm:block" /> Trails</>}
            content="Comprehensive data logs providing a 100% auditable history of every document's movement."
            buttonText="Audit Standards"
          />
        </div>
      </div>
    </section>
  );
};

export default function GovInstitutionalPage() {
  return (
    <div className="bg-white overflow-hidden selection:bg-[#36B936] selection:text-white">
      <GovHero />
      <InstitutionalProtocol />
      <ComplianceDetails />
      <RatesSection />
      <Footer />
    </div>
  );
}