import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData'; // Adjust path if needed

export default function AllServicesPage() {
  const [activeService, setActiveService] = useState(SERVICES_DATA[0].id);

  const handleScrollTo = (id: string) => {
    setActiveService(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F8FAF8] min-h-screen pb-24" style={{ fontFamily: '"Manrope", sans-serif' }}>
      
      {/* HEADER SECTION */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 pt-24 lg:pt-32 pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12 border-b border-gray-200 pb-10">
          <h1 className="text-[#0A4D26] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-light leading-[1.15] tracking-tight max-w-2xl">
            Comprehensive Courier & Logistics Services in the UAE
          </h1>
          <p className="text-[#0A4D26]/70 text-[14px] sm:text-[15px] leading-relaxed max-w-lg font-light">
            ZAJEL offers a complete range of courier, freight, and logistics services designed to support individuals, SMEs, and large enterprises. From domestic deliveries and e-commerce fulfillment to international freight and customs clearance.
          </p>
        </div>
      </div>

      {/* MAIN GRID CONTENT */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDEBAR (Sticky) */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-[#0A4D26] font-semibold text-[13px] tracking-widest uppercase mb-4 px-3">
                Service Lists
              </h3>
              <nav className="flex flex-col gap-1">
                {SERVICES_DATA.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleScrollTo(service.id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeService === service.id 
                        ? 'bg-[#36B936]/10 text-[#0A4D26] font-medium' 
                        : 'text-gray-500 hover:bg-gray-50 hover:text-[#0A4D26] font-light'
                    }`}
                  >
                    <span className={activeService === service.id ? 'text-[#36B936]' : 'text-gray-400'}>
                      {service.icon}
                    </span>
                    <span className="text-[13px]">{service.title}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Form Widget */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-[#0A4D26] font-semibold text-[15px] mb-5">
                Have any Question?
              </h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] text-gray-500 font-medium">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#36B936] focus:bg-white transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] text-gray-500 font-medium">Email address</label>
                  <input type="email" placeholder="Enter your email address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#36B936] focus:bg-white transition-colors placeholder:text-gray-400" />
                </div>
                <button type="submit" className="w-full bg-[#36B936] hover:bg-[#0A4D26] text-white font-medium py-3 rounded-lg text-[13px] transition-colors duration-300 shadow-sm mt-1">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT CONTENT (Service Cards) */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            {SERVICES_DATA.map((service) => (
              <div 
                key={service.id} 
                id={service.id}
                className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow duration-300"
              >
                {/* Card Image */}
                <Link to={`/services/${service.id}`} className="w-full sm:w-[280px] md:w-[320px] h-[200px] sm:h-auto bg-gray-100 shrink-0 relative block overflow-hidden group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <Link to={`/services/${service.id}`} className="hover:opacity-80 transition-opacity w-max">
                    <h2 className="text-[#0A4D26] text-[1.25rem] sm:text-[1.4rem] font-medium mb-1">
                      {service.title}
                    </h2>
                  </Link>
                  <h4 className="text-[#36B936] text-[13px] font-medium mb-3">
                    {service.subtitle}
                  </h4>
                  <p className="text-gray-500 font-light text-[13px] sm:text-[14px] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <div className="text-[12px] sm:text-[13px]">
                      <span className="font-semibold text-[#0A4D26]">Best for: </span>
                      <span className="text-gray-500 font-light">{service.bestFor}</span>
                    </div>
                    
                    {/* THIS LINK NOW ROUTES TO THE DYNAMIC DETAIL PAGE */}
                    <Link to={`/services/${service.id}`} className="flex items-center gap-1.5 text-[#36B936] hover:text-[#0A4D26] transition-colors group">
                      <span className="text-[13px] font-medium">Learn More</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}