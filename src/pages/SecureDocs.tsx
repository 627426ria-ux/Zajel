import React, { useEffect, useRef, useState } from 'react';
import { FileText, Gavel, Landmark, type LucideIcon } from 'lucide-react';
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
// 2. DOCUMENT PROTOCOL BOX
// ==========================================
interface SecureBoxProps {
  Icon: LucideIcon; 
  title: string | React.ReactNode;
  content: string;
  buttonText: string;
  delay?: number;
}

const SecureBox: React.FC<SecureBoxProps> = ({ Icon, title, content, buttonText, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <div className="group bg-[#36B936] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col h-full min-h-[260px] md:min-h-[360px] shadow-sm hover:shadow-2xl transition-all duration-500 ease-out">
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
const SecureDocsHero: React.FC = () => {
  return (
    <section className="w-full min-h-[100svh] flex items-center justify-center pt-20 md:pt-32 pb-12 px-5 md:px-12 bg-white" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-1">
          <Reveal delay={100}>
            <p className="text-[#36B936] text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-2 md:mb-4">Official Logistics</p>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="text-[#0A4D26] font-light leading-[1.1] tracking-tight text-[2.2rem] md:text-[4.2rem] mb-3 md:mb-6">
              Secure Docs <br className="hidden md:block" /> & Legal Filings
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-gray-600 font-light leading-relaxed text-[14px] md:text-[18px] mb-6 md:mb-10 max-w-[480px]">
              Priority handling for UAE Courts, MOFA attestations, and Customs documentation. We ensure your critical legal papers are delivered with zero-risk.
            </p>
          </Reveal>
          
          <div className="hidden lg:flex flex-row gap-3 w-full sm:w-auto">
            <button className="bg-[#36B936] hover:bg-[#2da12d] transition-all duration-300 text-white rounded-full px-8 py-3.5 text-[13px] font-medium shadow-lg active:scale-95">
              Request Document Pickup
            </button>
            <button className="bg-white border border-gray-200 hover:border-[#36B936] transition-all duration-300 text-[#0A4D26] rounded-full px-8 py-3.5 text-[13px] font-medium active:scale-95">
              Contact Legal Desk
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-2">
          <Reveal delay={500}>
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
              {/* Ensure this image represents a professional legal/official setting */}
              <img src="/secure-docs-hero.png" alt="Secure Legal Documents" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="flex lg:hidden flex-col gap-3 w-full order-3">
          <Reveal delay={600}>
            <button className="bg-[#36B936] hover:bg-[#2da12d] transition-all duration-300 text-white rounded-full w-full py-4 text-[14px] font-medium shadow-lg active:scale-95">
              Request Document Pickup
            </button>
          </Reveal>
          <Reveal delay={700}>
            <button className="bg-white border border-gray-200 hover:border-[#36B936] transition-all duration-300 text-[#0A4D26] rounded-full w-full py-4 text-[14px] font-medium active:scale-95">
              Contact Legal Desk
            </button>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

// ==========================================
// SECTION 2: SPECIALIZED COMPLIANCE
// ==========================================
const ComplianceDetails: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-32 px-5 md:px-12 bg-white" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col">
            <Reveal>
              <h2 className="text-[#0A4D26] text-[2rem] md:text-[3.5rem] font-light leading-[1.1] mb-5">
                Government & <br className="hidden md:block" /> <span className="text-[#36B936]">Court Integration.</span>
              </h2>
              <p className="text-gray-500 font-light text-[15px] md:text-[18px] leading-relaxed mb-8">
                As a trusted partner for official entities, ZAJEL provides the specific logistics needed for time-sensitive judicial and attestation workflows.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12 mt-8 lg:mt-0">
            {[
              { title: "Judicial Filings", desc: "Direct delivery to UAE Courts with verified proof of submission and timestamped receipts." },
              { title: "MOFA Attestations", desc: "End-to-end handling of document legalization and Ministry of Foreign Affairs attestation rounds." },
              { title: "Customs Clearances", desc: "Priority routing for bill of lading, manifests, and critical import/export documentation to avoid port delays." },
              { title: "Chain of Custody", desc: "Strict tracking for original deeds, passports, and high-value legal instruments." }
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
// SECTION 3: OFFICIAL PROTOCOLS
// ==========================================
const LegalProtocol: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-32 px-5 md:px-12 bg-white border-t border-gray-50" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-16">
            <h2 className="text-[#0A4D26] text-[2rem] md:text-[3.2rem] font-light leading-[1.1] mb-4">
              Official Channels
            </h2>
            <p className="text-[#0A4D26]/70 text-[15px] md:text-[18px] font-light">
              Verified logistics paths engineered for the UAE’s governing and judicial bodies.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <SecureBox 
            delay={100} Icon={Gavel}
            title={<>Court <br className="hidden sm:block" /> Submissions</>}
            content="Direct-to-clerk filing services for legal firms and individual litigants across the emirates."
            buttonText="File Document"
          />
          <SecureBox 
            delay={200} Icon={Landmark}
            title={<>Ministry <br className="hidden sm:block" /> Rounds</>}
            content="Standardized round-trips for MOFA, Chamber of Commerce, and Embassy attestations."
            buttonText="Start Attestation"
          />
          <SecureBox 
            delay={300} Icon={FileText}
            title={<>Customs <br className="hidden sm:block" /> Logistics</>}
            content="Accelerated physical delivery of original manifests and shipping documents to Port Authorities."
            buttonText="Clearance Desk"
          />
        </div>
      </div>
    </section>
  );
};

export default function SecureDocsPage() {
  return (
    <div className="bg-white overflow-hidden selection:bg-[#36B936] selection:text-white">
      <SecureDocsHero />
      <LegalProtocol />
      <ComplianceDetails />
      <RatesSection />
      <Footer />
    </div>
  );
}