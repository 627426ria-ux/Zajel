import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen bg-[#FDFDFD] pt-28 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-12"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col">

        {/* Eyelet tag */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#36B936]" />
          <span className="text-[#36B936] text-[11px] font-semibold tracking-[0.12em] uppercase">Get in touch</span>
        </div>

        {/* Main Title */}
        <h1 className="text-[#064423] text-3xl sm:text-[2.2rem] lg:text-[3rem] leading-[1.2] font-light tracking-tight mb-10 sm:mb-14 lg:mb-20 max-w-[800px]">
          We're here to help with your shipments, services, and general inquiries.
        </h1>

        {/* Split Layout */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-24 items-start">

          {/* LEFT: Contact Details */}
          <div className="w-full lg:w-[38%] flex flex-col">

            {/* Info rows with dividers */}
            {[
              {
                icon: <PhoneIcon />,
                label: 'Phone',
                primary: '+971 60 053 1111',
              },
              {
                icon: <EmailIcon />,
                label: 'Email',
                primary: 'info@zajel.ae',
              },
              {
                icon: <ClockIcon />,
                label: 'Business Hours',
                primary: 'Sun – Sat: 8 AM – 6 PM',
                secondary: 'Friday: Closed',
              },
              {
                icon: <PinIcon />,
                label: 'Headquarters',
                primary: 'Dubai, United Arab Emirates',
                secondary: 'ZAJEL Courier Services',
              },
              {
                icon: <PinIcon />,
                label: 'Branch Office',
                primary: 'Abu Dhabi, United Arab Emirates',
                secondary: 'ZAJEL Courier Services',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-4 border-b border-[#064423]/[0.07] first:border-t"
              >
                <div className="min-w-[36px] w-[36px] h-[36px] rounded-[10px] bg-[#EAF7EA] flex items-center justify-center text-[#36B936] shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[#064423]/40 text-[10.5px] font-semibold tracking-[0.09em] uppercase mb-0.5">{item.label}</span>
                  <span className="text-[#064423] text-[14px] font-medium leading-snug">{item.primary}</span>
                  {item.secondary && (
                    <span className="text-[#064423]/55 text-[13px] font-light leading-snug">{item.secondary}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="mt-7">
              <span className="text-[#064423]/40 text-[10.5px] font-semibold tracking-[0.09em] uppercase block mb-3">Follow us</span>
              <div className="flex gap-2.5 flex-wrap">
                {[
                  { label: 'Instagram', icon: <InstagramIcon /> },
                  { label: 'X', icon: <XIcon /> },
                  { label: 'LinkedIn', icon: <LinkedInIcon /> },
                  { label: 'Facebook', icon: <FacebookIcon /> },
                  
                ].map(({ label, icon }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-[38px] h-[38px] rounded-[10px] border border-[#064423]/10 bg-white flex items-center justify-center text-[#064423]/50 hover:bg-[#EAF7EA] hover:border-[#36B936]/40 hover:text-[#36B936] transition-all"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Form Card */}
          <div className="w-full lg:w-[62%]">
            <div className="bg-white rounded-[1.5rem] lg:rounded-[2rem] border border-gray-100 p-6 sm:p-8 lg:p-10 shadow-[0_4px_32px_rgba(0,0,0,0.03)]">

              <h2 className="text-[#064423] text-[18px] sm:text-[20px] font-medium mb-6 sm:mb-8">Send us a message</h2>

              <form className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <InputField label="Full Name" placeholder="John Doe" />
                  <InputField label="Email Address" placeholder="john@example.com" type="email" />
                  <InputField label="Phone Number" placeholder="+971 XXX XXXX" type="tel" />
                  <InputField label="Subject" placeholder="How can we help?" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#064423] text-[13px] font-medium opacity-80">
                    Message <span className="text-[#36B936]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please provide details about your inquiry..."
                    className="w-full p-3.5 rounded-xl border border-gray-100 bg-[#FCFCFC] text-[13px] text-[#064423] outline-none focus:border-[#36B936]/40 focus:bg-white font-light resize-none placeholder:text-gray-300 transition-all"
                  />
                </div>

                <div className="pt-1 flex flex-col sm:flex-row gap-3 items-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto sm:flex-1 bg-[#064423] hover:bg-[#36B936] text-white py-3.5 px-8 rounded-full text-[14px] font-medium tracking-wide transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Submit Message
                    <ArrowRightIcon />
                  </button>
                  <p className="text-[#064423]/35 text-[11.5px] font-light text-center sm:text-left">
                    We typically respond within 24 hours.
                  </p>
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

const InputField = ({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-[#064423] text-[13px] font-medium opacity-80">
      {label} <span className="text-[#36B936]">*</span>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3.5 rounded-xl border border-gray-100 bg-[#FCFCFC] text-[#064423] text-[13px] outline-none font-light placeholder:text-gray-300 focus:border-[#36B936]/40 focus:bg-white transition-all"
    />
  </div>
);

// --- Contact SVG Icons ---
const PhoneIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 7L10.2 11.65C11.267 12.45 12.733 12.45 13.8 11.65L20 7" />
    <rect x="3" y="5" width="18" height="14" rx="2" />
  </svg>
);

const ClockIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

const PinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// --- Social Media SVG Icons ---
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.985l4.258 5.63 4.751-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);



export default ContactPage;