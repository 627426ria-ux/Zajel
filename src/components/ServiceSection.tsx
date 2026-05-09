import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- CONFIGURATION DATA ---
const SERVICES_DATA = [
  {
    id: 'domestic',
    title: 'Domestic Courier Services',
    description: 'Thanks to our extensive fleet network, you can rely on ZAJEL to offer a seamless service from booking and pickup to final delivery.',
    image: '/ChatGPT Image Apr 30, 2026 at 08_47_06 PM.png',
    path: '/domestic-courier',
    shortTitle: 'Domestic',
  },
  {
    id: 'international',
    title: 'International Courier Services',
    description: 'Global reach with local expertise. We deliver your packages across borders with full tracking, customs clearance, and speed.',
    image: '/7be9399d-bd5b-44e2-97ed-97d5efce871c.png',
    path: '/international-courier',
    shortTitle: 'International',
  },
  {
    id: 'freight',
    title: 'Foreign Freight Services',
    description: 'Heavy lifting made easy. Our freight solutions provide cost-effective, large-scale shipping for businesses worldwide.',
    image: '/5853de78-ecb1-4202-8bad-3befd452cf47.png',
    path: '/freight-courier',
    shortTitle: 'Foreign Freight',
  },
  {
    id: 'all',
    title: 'All Services',
    description: 'Explore our complete suite of logistics, warehousing, and e-commerce fulfillment solutions tailored for your business needs.',
    image: '/all-services.jpg',
    path: '#',
    shortTitle: 'All',
  }
];

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const active = SERVICES_DATA[activeTab];

  return (
    <>
      <style>{`
        @keyframes contentFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-content { animation: contentFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        /* Hide scrollbar on tab strip */
        .tab-strip::-webkit-scrollbar { display: none; }
        .tab-strip { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section
        ref={sectionRef}
        className="w-full py-16 md:py-24 px-5 sm:px-6 lg:px-12 bg-[#F6F8F6] overflow-hidden"
        style={{ fontFamily: '"Manrope", sans-serif' }}
      >
        <div className="max-w-[1400px] mx-auto">

          {/* ── Section Heading ── */}
          <div className={`text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0A4D26] mb-4">
              
              Our Services
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.1rem] lg:text-[2.75rem] font-medium text-[#0A4D26] leading-[1.15] tracking-tight mb-10 md:mb-16">
              Delivering a smarter <br /> shipping experience.
            </h2>
          </div>

          {/* ══════════════════════════════════════
              MOBILE LAYOUT  (below lg)
          ══════════════════════════════════════ */}
          <div className="block lg:hidden">

            {/* Horizontal pill tab strip */}
            <div className={`transform transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="tab-strip flex gap-2.5 overflow-x-auto pb-1 mb-8">
                {SERVICES_DATA.map((service, index) => {
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveTab(index)}
                      className={`flex-shrink-0 px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 focus:outline-none ${
                        isActive
                          ? 'bg-[#0A4D26] text-white shadow-md'
                          : 'bg-white text-[#0A4D26] border border-gray-200'
                      }`}
                    >
                      {service.shortTitle}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Card: image on top, content below */}
            <div
              key={`mobile-${activeTab}`}
              className={`animate-content rounded-[2rem] overflow-hidden bg-[#36B936] shadow-lg transform transition-all duration-1000 delay-400 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Image — top portion */}
              <div className="relative w-full h-[260px] sm:h-[320px]">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover object-center"
                />
                {/* Fade into green at the bottom */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 50%, rgba(54,185,54,1) 100%)'
                  }}
                />
              </div>

              {/* Text content — below image */}
              <div className="px-7 pt-4 pb-8 flex flex-col">
                <h3 className="text-white text-[1.9rem] sm:text-[2.25rem] font-normal leading-[1.15] tracking-tight mb-4">
                  {active.title}
                </h3>
                <p className="text-[#0A4D26] text-[14px] font-medium leading-relaxed mb-7">
                  {active.description}
                </p>
                <Link
                  to={active.path}
                  className="self-start bg-[#0A4D26] hover:bg-black transition-colors duration-300 text-[#36B936] px-6 py-3 rounded-full text-[13px] font-bold flex items-center gap-2"
                >
                  + Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════
              DESKTOP LAYOUT  (lg and above)
          ══════════════════════════════════════ */}
          <div className="hidden lg:grid grid-cols-12 gap-16">

            {/* Left: vertical tab list */}
            <div className={`col-span-4 flex flex-col justify-between h-full py-1 transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              {SERVICES_DATA.map((service, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full group flex items-center justify-between px-8 py-5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A4D26] ${
                      isActive
                        ? 'bg-[#0A4D26] text-[#36B936] border-transparent shadow-lg scale-[1.02]'
                        : 'bg-transparent text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-white'
                    }`}
                  >
                    <span className={`text-[16px] font-medium transition-colors ${isActive ? 'text-[#36B936]' : 'text-[#0A4D26]'}`}>
                      {service.title}
                    </span>
                    <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-[#36B936] scale-110 shadow-[0_0_8px_rgba(54,185,54,0.5)]' : 'bg-gray-200 group-hover:bg-gray-300'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right: content card */}
            <div className={`col-span-8 h-full transform transition-all duration-1000 delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}>
              <div
                key={`desktop-${activeTab}`}
                className="relative w-full min-h-[480px] h-full rounded-[2.5rem] overflow-hidden bg-[#36B936] shadow-xl animate-content flex items-center"
              >
                <div className="absolute top-0 right-0 w-[65%] h-full z-0">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover object-right"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to right, rgba(54,185,54,1) 0%, rgba(54,185,54,0.95) 15%, rgba(54,185,54,0) 45%)'
                    }}
                  />
                </div>
                <div className="relative z-10 w-full md:w-[55%] p-10 lg:p-14 flex flex-col justify-center">
                  <h3 className="text-white text-[2.75rem] lg:text-[3.25rem] font-normal leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
                    {active.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        {i === 0 ? <br /> : ' '}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-[#0A4D26] text-[15px] font-medium leading-relaxed mb-10 max-w-[90%]">
                    {active.description}
                  </p>
                  <Link
                    to={active.path}
                    className="bg-[#0A4D26] hover:bg-black transition-colors duration-300 text-[#36B936] w-fit px-6 py-3 rounded-full text-[13px] font-bold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#36B936] focus:ring-[#0A4D26]"
                  >
                    + Learn More
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;