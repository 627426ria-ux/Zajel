import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

// Import the data you created earlier
import { SERVICES_DATA } from '../data/servicesData'; 

export default function ServiceDetailPage() {
  // Grab the 'id' from the URL (e.g., /services/cash-on-delivery -> id = 'cash-on-delivery')
  const { id } = useParams<{ id: string }>();

  // Find the matching service in your data file
  const service = SERVICES_DATA.find((s) => s.id === id);

  // If someone types a wrong URL, show them this error state
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white" style={{ fontFamily: '"Manrope", sans-serif' }}>
        <div className="text-center">
          <h1 className="text-[#0A4D26] text-[2rem] font-light mb-4">Service Not Found</h1>
          <Link to="/all-services" className="text-[#36B936] hover:underline font-medium text-[15px]">
            Return to All Services
          </Link>
        </div>
      </div>
    );
  }

  // The minimal, single-section layout
  return (
    <div className="bg-white min-h-screen pt-32 pb-24" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[800px] mx-auto px-6 sm:px-8">
        
        {/* Back Link */}
        <Link 
          to="/all-services" 
          className="inline-flex items-center gap-2 text-[#0A4D26]/50 hover:text-[#36B936] transition-colors font-medium text-[13px] sm:text-[14px] mb-12"
        >
          <ArrowLeft size={16} /> Back to All Services
        </Link>

        {/* Header Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-[#36B936]/10 text-[#36B936] flex items-center justify-center shrink-0">
            {service.icon}
          </div>
          <h1 className="text-[#0A4D26] text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-light leading-[1.1] tracking-tight">
            {service.title}
          </h1>
        </div>

        <h3 className="text-[#36B936] text-[16px] sm:text-[18px] font-medium tracking-wide mb-12">
          {service.subtitle}
        </h3>

        {/* Overview Paragraph */}
        <div className="mb-12">
          <p className="text-gray-600 font-light leading-relaxed text-[15px] sm:text-[16px]">
            {service.overview}
          </p>
        </div>

        {/* Key Features List */}
        <div className="mb-16">
          <h4 className="text-[#0A4D26] text-[1.25rem] font-medium mb-6 pb-4 border-b border-gray-100">
            Key Advantages
          </h4>
          <ul className="space-y-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#36B936] shrink-0 mt-0.5" />
                <span className="text-gray-600 font-light leading-relaxed text-[14px] sm:text-[15px]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Minimal Call to Action Box */}
        <div className="bg-[#F8FAF8] rounded-[2rem] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-gray-100">
          <div>
            <h4 className="text-[#0A4D26] text-[1.25rem] font-medium mb-2">Ready to ship with us?</h4>
            <p className="text-[#0A4D26]/70 font-light text-[14px]">Get a tailored quote for your specific needs.</p>
          </div>
          <button className="w-full sm:w-auto bg-[#0A4D26] hover:bg-black transition-colors duration-300 text-[#36B936] rounded-full px-8 py-3.5 shadow-md active:scale-95 text-[14px] font-medium whitespace-nowrap">
            Get a Quote
          </button>
        </div>

      </div>
    </div>
  );
}