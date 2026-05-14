import React from 'react';

const SupportTicket: React.FC = () => {
  return (
    <section className="w-full min-h-[100svh] bg-[#FDFDFD] pt-[clamp(5rem,8vw,7rem)] pb-[clamp(3rem,6vw,5rem)] px-[clamp(1.5rem,5vw,6rem)]" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-[clamp(3rem,6vw,5rem)] gap-[clamp(1.5rem,3vw,2rem)]">
          <div className="max-w-[clamp(300px,50vw,600px)]">
            <h1 className="text-[#064423] text-[clamp(2rem,5vw,2.8rem)] font-light leading-[1.1] tracking-tight">
              Raise a Support <br className="hidden sm:block" /> Ticket
            </h1>
          </div>
          <div className="text-left md:text-right max-w-[clamp(280px,30vw,320px)] md:ml-auto">
            <p className="text-[#064423]/60 text-[clamp(12px,1.2vw,13px)] leading-[1.6] mb-[clamp(0.75rem,1.5vw,1rem)] font-light">
              We're here to help you with shipment issues, service requests, and general support.
            </p>
            <span className="inline-block bg-[#EAF1E7] text-[#064423] text-[clamp(9px,1vw,10px)] px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.25rem,0.5vw,0.375rem)] rounded-full font-semibold uppercase tracking-[0.1em]">
              Typical response time: <span className="opacity-70 font-light lowercase">within 24 working hours</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[clamp(1.5rem,4vw,3rem)] items-start">
          
          {/* LEFT SIDE: Main Form Body */}
          <div className="flex-1 w-full bg-white rounded-[clamp(1.5rem,3vw,2.5rem)] border border-gray-100 p-[clamp(1.5rem,4vw,3.5rem)] shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <form className="space-y-[clamp(1.5rem,4vw,3rem)]">
              
              {/* Service Information */}
              <div className="space-y-[clamp(1rem,2vw,1.5rem)]">
                <h2 className="text-[#064423] text-[clamp(15px,1.5vw,18px)] font-bold tracking-tight">Service Information</h2>
                <div className="grid grid-cols-1 gap-[clamp(1rem,2vw,1.5rem)]">
                  <SelectField label="Product" hint="Choose the service related to your issue" />
                  <SelectField label="Ticket Type" hint="This helps us route your request faster" />
                  <SelectField label="Issue Related To" hint="Select the closest match to your concern" />
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-[clamp(1rem,2vw,1.5rem)] pt-[clamp(0.5rem,1vw,1rem)]">
                <h2 className="text-[#064423] text-[clamp(15px,1.5vw,18px)] font-bold tracking-tight">Personal Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(1rem,2vw,1.5rem)] gap-y-[clamp(1rem,2vw,1.5rem)]">
                  <InputField label="First Name" placeholder="Enter your first name" />
                  <InputField label="Last Name" placeholder="Enter your last name" />
                  <InputField label="Email Address" placeholder="Enter your email address" hint="Ticket updates will be sent to this email" />
                  <InputField label="Phone Number" placeholder="Enter your mobile number" hint="Used only if urgent clarification is required" />
                </div>
              </div>

              {/* Shipment Identifier */}
              <div className="space-y-[clamp(1rem,2vw,1.5rem)] pt-[clamp(0.5rem,1vw,1rem)]">
                <h2 className="text-[#064423] text-[clamp(15px,1.5vw,18px)] font-bold tracking-tight">Shipment Identifier</h2>
                <InputField label="AWB / Application Number" placeholder="Enter AWB or application number (if available)" hint="Providing this helps us resolve your issue faster" />
              </div>

              {/* Issue Details */}
              <div className="space-y-[clamp(1rem,2vw,1.5rem)] pt-[clamp(0.5rem,1vw,1rem)]">
                <h2 className="text-[#064423] text-[clamp(15px,1.5vw,18px)] font-bold tracking-tight">Issue Details</h2>
                <div className="flex flex-col gap-[clamp(0.25rem,0.5vw,0.5rem)]">
                  <label className="text-[#064423] text-[clamp(11px,1.2vw,13px)] font-medium opacity-90">Message <span className="text-[#36B936]">*</span></label>
                  <textarea rows={5} placeholder="Please describe your issue in detail. Include shipment status, dates, locations, or any relevant information." className="w-full p-[clamp(0.75rem,1.5vw,1rem)] rounded-[clamp(0.5rem,1vw,0.75rem)] border border-gray-100 bg-[#FCFCFC] text-[clamp(12px,1.2vw,13px)] outline-none focus:border-[#36B936]/20 font-light resize-none placeholder:text-gray-400" />
                  <p className="text-[clamp(10px,1vw,11px)] text-gray-400 font-light">The more details you provide, the faster we can assist you.</p>
                </div>
              </div>

              {/* Verification Section */}
              <div className="space-y-[clamp(1rem,2vw,1.5rem)] pt-[clamp(0.5rem,1vw,1rem)]">
                <h2 className="text-[#064423] text-[clamp(15px,1.5vw,18px)] font-bold tracking-tight">Verification</h2>
                <div className="flex flex-col gap-[clamp(0.5rem,1vw,1rem)]">
                  <label className="text-[#064423] text-[clamp(11px,1.2vw,13px)] font-medium opacity-90">Enter the code shown below <span className="text-[#36B936]">*</span></label>
                  <div className="flex flex-wrap items-stretch gap-[clamp(0.5rem,1vw,1rem)]">
                    <div className="bg-[#F3F7F3] border border-[#EAF1E7] px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] rounded-[clamp(0.5rem,1vw,0.75rem)] flex items-center justify-center text-[#36B936] text-[clamp(16px,1.8vw,20px)] font-bold tracking-[0.3em] select-none">TJ35LT</div>
                    <input type="text" placeholder="Enter code" className="flex-1 min-w-[160px] p-[clamp(0.75rem,1.5vw,1rem)] rounded-[clamp(0.5rem,1vw,0.75rem)] border border-gray-100 bg-[#FCFCFC] text-[clamp(12px,1.2vw,13px)] outline-none" />
                  </div>
                </div>
                <div className="flex items-center gap-[clamp(0.25rem,0.5vw,0.5rem)] text-[clamp(10px,1vw,11px)] text-gray-400 font-light">
                  <svg className="w-[clamp(12px,1.2vw,14px)] h-[clamp(12px,1.2vw,14px)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>Your information is secure and will only be used to assist with your request.</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-[clamp(0.5rem,1vw,1rem)]">
                <button type="submit" className="w-full sm:w-auto bg-[#36B936] hover:bg-[#2da12d] text-white px-[clamp(1.5rem,3vw,3rem)] py-[clamp(0.75rem,1.5vw,1rem)] rounded-full text-[clamp(12px,1.2vw,14px)] font-medium tracking-wide transition-all shadow-sm active:scale-95">
                  Submit Ticket
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT SIDE: Sidebar */}
          <aside className="w-full lg:w-[clamp(280px,25vw,360px)] lg:sticky lg:top-[clamp(1.5rem,3vw,2.5rem)] shrink-0">
            <div className="bg-white rounded-[clamp(1.5rem,3vw,2.5rem)] border border-gray-100 p-[clamp(1.5rem,3vw,2.5rem)] shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-[clamp(0.5rem,1vw,0.75rem)] mb-[clamp(0.25rem,0.5vw,0.5rem)]">
                <div className="w-[clamp(1.5rem,2.5vw,2rem)] h-[clamp(1.5rem,2.5vw,2rem)] rounded-[clamp(0.4rem,0.8vw,0.5rem)] bg-[#EAF1E7] flex items-center justify-center shrink-0">
                  <svg className="w-[clamp(12px,1.5vw,16px)] h-[clamp(12px,1.5vw,16px)]" viewBox="0 0 24 24" fill="none" stroke="#064423" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <h3 className="text-[#064423] font-normal text-[clamp(15px,1.5vw,18px)] leading-tight">Need Quick Help?</h3>
              </div>
              <p className="text-[#064423]/40 text-[clamp(11px,1.2vw,13px)] mb-[clamp(1.5rem,3vw,2rem)] font-light">Before raising a ticket, you may try:</p>
              
              <div className="space-y-[clamp(0.5rem,1vw,0.75rem)] mb-[clamp(1.5rem,3vw,2rem)]">
                <SidebarAction icon={<BoxIcon />} label="Track Your Shipment" />
                <SidebarAction icon={<FileIcon />} label="View FAQs" />
                <SidebarAction icon={<PhoneIcon />} label="Contact Support" />
              </div>
              
              <button className="w-full h-[clamp(40px,4vw,48px)] flex items-center justify-center bg-[#064423] hover:bg-[#0b180e] transition-colors text-[#36B936] rounded-full text-[clamp(12px,1.1vw,14px)] font-medium tracking-wide">
                Submit
              </button>
              
              <div className="pt-[clamp(1.5rem,3vw,2rem)] mt-[clamp(1.5rem,3vw,2rem)] border-t border-gray-100 space-y-[clamp(1rem,2vw,1.5rem)]">
                <div>
                  <h4 className="text-[#064423] font-medium text-[clamp(12px,1.2vw,14px)] mb-[clamp(0.75rem,1.5vw,1.25rem)]">Support Hours</h4>
                  <div className="space-y-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(11px,1.1vw,13px)] font-light text-[#064423]/60">
                    <div className="flex justify-between"><span>Monday - Friday</span><span className="text-[#064423]">8:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span className="text-[#064423]">9:00 AM - 2:00 PM</span></div>
                    <p className="opacity-40">Sunday: Closed</p>
                  </div>
                </div>
                <div className="pt-[clamp(0.5rem,1vw,1rem)]">
                  <h4 className="text-[#064423] font-medium text-[clamp(12px,1.2vw,14px)] mb-[clamp(0.25rem,0.5vw,0.5rem)]">Emergency Support</h4>
                  <p className="text-[#064423] font-light text-[clamp(14px,1.5vw,17px)] tracking-tight">+966 12 345 6789</p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};

// --- Refined Components ---

const SelectField = ({ label, hint }: any) => (
  <div className="flex flex-col gap-[clamp(0.25rem,0.5vw,0.5rem)]">
    <label className="text-[#064423] text-[clamp(11px,1.2vw,13px)] font-medium opacity-90">{label} <span className="text-[#36B936]">*</span></label>
    <div className="relative">
      <select className="w-full p-[clamp(0.75rem,1.5vw,1rem)] rounded-[clamp(0.5rem,1vw,0.75rem)] border border-gray-100 bg-[#FCFCFC] text-gray-400 text-[clamp(12px,1.2vw,13px)] outline-none appearance-none font-light">
        <option>Select a {label.toLowerCase()}</option>
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300 text-[10px]">▼</div>
    </div>
    <p className="text-[clamp(10px,1vw,11px)] text-gray-400 font-light italic">{hint}</p>
  </div>
);

const InputField = ({ label, placeholder, hint }: any) => (
  <div className="flex flex-col gap-[clamp(0.25rem,0.5vw,0.5rem)]">
    <label className="text-[#064423] text-[clamp(11px,1.2vw,13px)] font-medium opacity-90">{label} <span className="text-[#36B936]">*</span></label>
    <input type="text" placeholder={placeholder} className="w-full p-[clamp(0.75rem,1.5vw,1rem)] rounded-[clamp(0.5rem,1vw,0.75rem)] border border-gray-100 bg-[#FCFCFC] text-[clamp(12px,1.2vw,13px)] outline-none font-light placeholder:text-gray-300" />
    {hint && <p className="text-[clamp(10px,1vw,11px)] text-gray-400 font-light italic">{hint}</p>}
  </div>
);

const SidebarAction = ({ icon, label }: any) => (
  <button className="w-full flex items-center gap-[clamp(0.5rem,1vw,1rem)] p-[clamp(0.75rem,1.5vw,1rem)] rounded-[clamp(0.5rem,1vw,0.75rem)] border border-gray-50 text-[#064423] text-[clamp(11px,1.2vw,13px)] font-light transition-all hover:bg-[#F9FBF9] group">
    <span className="text-gray-300 group-hover:text-[#36B936] transition-colors shrink-0">{icon}</span>
    {label}
  </button>
);

const BoxIcon = () => <svg className="w-[clamp(14px,1.5vw,18px)] h-[clamp(14px,1.5vw,18px)]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25m-9-5.25v9l9 5.25m0-9v9" /></svg>;
const FileIcon = () => <svg className="w-[clamp(14px,1.5vw,18px)] h-[clamp(14px,1.5vw,18px)]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const PhoneIcon = () => <svg className="w-[clamp(14px,1.5vw,18px)] h-[clamp(14px,1.5vw,18px)]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;

export default SupportTicket;