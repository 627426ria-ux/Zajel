import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section 
      // pt-28 and lg:pt-32 push the section down to account for the navbar
      className="w-full min-h-screen bg-[#FDFDFD] pt-28 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-12" 
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col">
        
        {/* TOP: Main Title (Spans across the top, separated from the split layout) */}
        <h1 className="text-[#064423] text-3xl sm:text-[2.2rem] lg:text-[3rem] leading-[1.2] font-light tracking-tight mb-10 sm:mb-14 lg:mb-20 max-w-[800px]">
          We're here to help with your shipments, services, and general inquiries.
        </h1>

        {/* BOTTOM: Split Layout (Details Left, Form Right) */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-24 items-start">
          
          {/* LEFT SIDE: Contact Details */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 sm:gap-8">
            
            {/* Phone */}
            <div className="flex items-start gap-4">
              <IconWrapper><PhoneIcon /></IconWrapper>
              <div className="flex flex-col">
                <span className="text-[#064423]/60 text-[13px] font-light leading-tight">Phone</span>
                <span className="text-[#064423] text-[15px] font-medium tracking-tight mt-0.5">+971 60 053 1111</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <IconWrapper><EmailIcon /></IconWrapper>
              <div className="flex flex-col">
                <span className="text-[#064423]/60 text-[13px] font-light leading-tight mb-0.5">Email</span>
                <span className="text-[#064423] text-[15px] font-medium tracking-tight leading-tight">info@zajel.ae</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4">
              <IconWrapper><ClockIcon /></IconWrapper>
              <div className="flex flex-col">
                <span className="text-[#064423] text-[15px] font-medium tracking-tight leading-tight mb-1">Business Hours</span>
                <span className="text-[#064423]/60 text-[13px] font-light leading-snug">Sunday - Saturday: 8 AM - 6 PM</span>
                <span className="text-[#064423]/60 text-[13px] font-light leading-snug">Friday: Closed</span>
              </div>
            </div>

            {/* Address 1 */}
            <div className="flex items-start gap-4 mt-2 lg:mt-4">
              <IconWrapper><PinIcon /></IconWrapper>
              <div className="flex flex-col">
                <span className="text-[#064423] text-[15px] font-medium tracking-tight leading-tight mb-1">Headquarters</span>
                <span className="text-[#064423]/60 text-[13px] font-light leading-snug">ZAJEL Courier Services</span>
                <span className="text-[#064423]/60 text-[13px] font-light leading-snug">Dubai, United Arab Emirates</span>
              </div>
            </div>

            {/* Address 2 */}
            <div className="flex items-start gap-4">
              <IconWrapper><PinIcon /></IconWrapper>
              <div className="flex flex-col">
                <span className="text-[#064423] text-[15px] font-medium tracking-tight leading-tight mb-1">Branch Office</span>
                <span className="text-[#064423]/60 text-[13px] font-light leading-snug">ZAJEL Courier Services</span>
                <span className="text-[#064423]/60 text-[13px] font-light leading-snug">Abu Dhabi, United Arab Emirates</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: The Form Card */}
          <div className="w-full lg:w-[60%]">
            <div className="bg-white rounded-[1.5rem] lg:rounded-[2rem] border border-gray-100 p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              
              <h2 className="text-[#064423] text-[18px] sm:text-[20px] font-medium mb-6 sm:mb-8">Send us a Message</h2>

              <form className="space-y-5 sm:space-y-6">
                
                {/* Inputs flex to full width on mobile, split to 2 columns on md+ screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <InputField label="Full Name" placeholder="John Doe" />
                  <InputField label="Email Address" placeholder="john@example.com" type="email" />
                  <InputField label="Phone Number" placeholder="+971 XXX XXXX" type="tel" />
                  <InputField label="Subject" placeholder="How can we help?" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#064423] text-[13px] font-medium opacity-80">
                    Message <span className="text-[#5DBA52]">*</span>
                  </label>
                  <textarea 
                    rows={4} 
                    placeholder="Please provide details about your inquiry..." 
                    className="w-full p-3.5 rounded-xl border border-gray-100 bg-[#FCFCFC] text-[13px] text-[#064423] outline-none focus:border-[#5DBA52]/40 focus:bg-white font-light resize-none placeholder:text-gray-300 transition-all" 
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-[#5DBA52] hover:bg-[#4ea843] text-white py-3.5 rounded-xl text-[14px] font-medium transition-all shadow-sm active:scale-95"
                  >
                    Submit Message
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Sub-Components ---

const InputField = ({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-[#064423] text-[13px] font-medium opacity-80">
      {label} <span className="text-[#5DBA52]">*</span>
    </label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full p-3.5 rounded-xl border border-gray-100 bg-[#FCFCFC] text-[#064423] text-[13px] outline-none font-light placeholder:text-gray-300 focus:border-[#5DBA52]/40 focus:bg-white transition-all" 
    />
  </div>
);

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="min-w-[40px] w-[40px] h-[40px] rounded-[12px] bg-[#5DBA52] flex items-center justify-center text-white shrink-0">
    {children}
  </div>
);

// --- SVGs ---
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
    <rect x="3" y="5" width="18" height="14" rx="2" />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default ContactPage;