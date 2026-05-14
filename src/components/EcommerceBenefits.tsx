import React, { useEffect, useRef, useState } from 'react';

const EcommerceDetails: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const revealClass = `transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 lg:translate-y-12'
  }`;

  const listItems = [
    "End-to-end fulfillment and secure warehousing",
    "Seamless integration with major e-commerce platforms",
    "Automated inventory management and real-time updates",
    "Fast and reliable last-mile delivery to your customers",
    "Hassle-free reverse logistics and returns management",
    "Dedicated 24/7 support for growing online businesses"
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 items-center">

        {/* LEFT SIDE: Benefits List */}
        <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-1">
          <h2
            className={`text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] font-light mb-6 sm:mb-10 leading-[1.1] tracking-tight ${revealClass}`}
            style={{ transitionDelay: '200ms' }}
          >
            Why Choose This Service?
          </h2>

          <ul className="space-y-0">
            {listItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-start gap-4 sm:gap-5 py-4 sm:py-6 border-b border-gray-100 last:border-b-0 ${revealClass}`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <span className="text-[#36B936] text-xl sm:text-2xl mt-0.5 sm:mt-0 leading-none">•</span>
                <span className="text-[#064423]/80 text-[15px] sm:text-[16px] lg:text-[18px] font-light leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE: Split Card on Mobile / Image with Overlay on Desktop */}
        <div
          className={`relative w-full lg:w-1/2 flex flex-col lg:block rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-gray-50 lg:bg-transparent shadow-sm lg:shadow-2xl order-2 lg:order-2 ${revealClass}`}
          style={{ transitionDelay: '0ms' }}
        >

          {/* Mobile Text (Top) / Desktop Overlay (Bottom) */}
          <div className="flex flex-col p-6 sm:p-8 lg:absolute lg:bottom-12 lg:left-10 lg:right-10 lg:p-0 z-10 order-1 lg:order-none">
            <h3 className="text-[#064423] lg:text-white text-2xl sm:text-3xl lg:text-[3rem] font-light leading-tight tracking-tight mb-3 sm:mb-4">
              Ready to Scale Your Store?
            </h3>
            <p className="text-[#064423]/70 lg:text-white/90 text-[14px] sm:text-[15px] lg:text-lg mb-6 sm:mb-10 max-w-md font-light leading-relaxed">
              Get a tailored fulfillment strategy for your online business or speak with our e-commerce experts to learn more.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* PRIMARY BUTTON (Matched) */}
              <button
                className="w-full sm:w-auto justify-center bg-[#05361A] hover:bg-[#03200F] transition-all duration-300 text-[#36B936] rounded-full flex items-center shadow-sm hover:shadow-md lg:hover:scale-105 lg:active:scale-95"
                style={{
                  gap: 'clamp(5px, 0.8vw, 8px)',
                  paddingInline: 'clamp(1.1rem, 2vw, 1.75rem)',
                  paddingBlock: 'clamp(0.6rem, 0.9vw, 0.875rem)',
                  fontSize: 'clamp(0.75rem, 0.68rem + 0.36vw, 0.9375rem)',
                }}
              >
                <span className="font-extralight text-base leading-none">+</span>
                <span className="font-medium tracking-wide">Get a Quote</span>
              </button>

              {/* SECONDARY BUTTON (Matched structural clamping) */}
              <button
                className="w-full sm:w-auto justify-center bg-transparent lg:bg-white border border-gray-300 lg:border-none text-[#05361A] hover:bg-gray-100 lg:hover:bg-gray-50 transition-all duration-300 rounded-full flex items-center shadow-sm lg:shadow-lg hover:shadow-md lg:hover:scale-105 lg:active:scale-95"
                style={{
                  gap: 'clamp(5px, 0.8vw, 8px)',
                  paddingInline: 'clamp(1.1rem, 2vw, 1.75rem)',
                  paddingBlock: 'clamp(0.6rem, 0.9vw, 0.875rem)',
                  fontSize: 'clamp(0.75rem, 0.68rem + 0.36vw, 0.9375rem)',
                }}
              >
                <span className="font-extralight text-base leading-none">+</span>
                <span className="font-medium tracking-wide">Contact Sales</span>
              </button>
            </div>
          </div>

          {/* Image: attached below text on Mobile / Full background on Desktop */}
          <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[600px] order-2 lg:order-none">
            <img
              src="/ChatGPT Image May 12, 2026 at 01_55_01 AM.png"
              alt="Zajel E-commerce Fulfillment"
              className="w-full h-full object-cover"
            />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default EcommerceDetails;