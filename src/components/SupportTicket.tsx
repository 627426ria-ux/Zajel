import React from 'react';

const SupportTicket: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-[#FDFDFD] pt-24 pb-16 px-6 lg:px-24" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="max-w-xl">
            <h1 className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight">
              Raise a Support <br /> Ticket
            </h1>
          </div>
          <div className="mt-8 md:mt-2 text-left md:text-right max-w-[320px] md:ml-auto">
            <p className="text-[#064423]/60 text-[13px] leading-relaxed mb-4 font-light">
              We're here to help you with shipment issues, service requests, and general support.
            </p>
            <span className="inline-block bg-[#EAF1E7] text-[#064423] text-[10px] px-4 py-1.5 rounded-full font-semibold uppercase tracking-widest">
              Typical response time: <span className="opacity-70 font-light lowercase">within 24 working hours</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT SIDE: Main Form Body (Updated to Match Figma) */}
          <div className="flex-1 bg-white rounded-[2.5rem] border border-gray-100 p-10 lg:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <form className="space-y-12">
              
              {/* Service Information */}
              <div className="space-y-6">
                <h2 className="text-[#064423] text-[18px] font-bold tracking-tight">Service Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <SelectField label="Product" hint="Choose the service related to your issue" />
                  <SelectField label="Ticket Type" hint="This helps us route your request faster" />
                  <SelectField label="Issue Related To" hint="Select the closest match to your concern" />
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-6 pt-4">
                <h2 className="text-[#064423] text-[18px] font-bold tracking-tight">Personal Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <InputField label="First Name" placeholder="Enter your first name" />
                  <InputField label="Last Name" placeholder="Enter your last name" />
                  <InputField label="Email Address" placeholder="Enter your email address" hint="Ticket updates will be sent to this email" />
                  <InputField label="Phone Number" placeholder="Enter your mobile number" hint="Used only if urgent clarification is required" />
                </div>
              </div>

              {/* Shipment Identifier */}
              <div className="space-y-6 pt-4">
                <h2 className="text-[#064423] text-[18px] font-bold tracking-tight">Shipment Identifier</h2>
                <InputField label="AWB / Application Number" placeholder="Enter AWB or application number (if available)" hint="Providing this helps us resolve your issue faster" />
              </div>

              {/* Issue Details */}
              <div className="space-y-6 pt-4">
                <h2 className="text-[#064423] text-[18px] font-bold tracking-tight">Issue Details</h2>
                <div className="flex flex-col gap-2">
                  <label className="text-[#064423] text-[13px] font-medium opacity-90">Message <span className="text-[#36B936]">*</span></label>
                  <textarea rows={5} placeholder="Please describe your issue in detail. Include shipment status, dates, locations, or any relevant information." className="w-full p-4 rounded-xl border border-gray-100 bg-[#FCFCFC] text-[13px] outline-none focus:border-[#36B936]/20 font-light resize-none placeholder:text-gray-400" />
                  <p className="text-[11px] text-gray-400 font-light">The more details you provide, the faster we can assist you.</p>
                </div>
              </div>

              {/* Verification Section */}
              <div className="space-y-6 pt-4">
                <h2 className="text-[#064423] text-[18px] font-bold tracking-tight">Verification</h2>
                <div className="flex flex-col gap-4">
                  <label className="text-[#064423] text-[13px] font-medium opacity-90">Enter the code shown below <span className="text-[#36B936]">*</span></label>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="bg-[#F3F7F3] border border-[#EAF1E7] px-8 py-3 rounded-xl text-[#36B936] text-[20px] font-bold tracking-[0.3em] select-none">TJ35LT</div>
                    <input type="text" placeholder="Enter code" className="flex-1 min-w-[160px] max-w-[300px] p-3.5 rounded-xl border border-gray-100 bg-[#FCFCFC] text-[13px] outline-none" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-light">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Your information is secure and will only be used to assist with your request.
                </div>
              </div>

              {/* Submit Button (Bottom Right) */}
              <div className="flex justify-end pt-4">
                <button type="submit" className="bg-[#66BB6A] hover:bg-[#4CAF50] text-white px-12 py-3 rounded-full text-[14px] font-semibold transition-all shadow-sm active:scale-95">
                  Submit Ticket
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT SIDE: Sidebar (Keeping Your Perfect Details) */}
          <aside className="w-full lg:w-[360px] lg:sticky lg:top-10">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#EAF1E7] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#064423" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <h3 className="text-[#064423] font-normal text-[18px]">Need Quick Help?</h3>
              </div>
              <p className="text-[#064423]/40 text-[13px] mb-8 font-light">Before raising a ticket, you may try:</p>
              <div className="space-y-3 mb-8">
                <SidebarAction icon={<BoxIcon />} label="Track Your Shipment" />
                <SidebarAction icon={<FileIcon />} label="View FAQs" />
                <SidebarAction icon={<PhoneIcon />} label="Contact Support" />
              </div>
              <button className="w-full h-[48px] bg-[#132818] hover:bg-[#0b180e] transition-colors text-[#36B936] rounded-full text-[14px] font-medium">
                Submit
              </button>
              <div className="pt-8 border-t border-gray-100 space-y-6">
                <div>
                  <h4 className="text-[#064423] font-medium text-[14px] mb-5">Support Hours</h4>
                  <div className="space-y-3 text-[13px] font-light text-[#064423]/60">
                    <div className="flex justify-between"><span>Monday - Friday</span><span className="text-[#064423]">8:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span className="text-[#064423]">9:00 AM - 2:00 PM</span></div>
                    <p className="opacity-40">Sunday: Closed</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="text-[#064423] font-medium text-[14px] mb-2">Emergency Support</h4>
                  <p className="text-[#064423] font-light text-[17px] tracking-tight">+966 12 345 6789</p>
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
  <div className="flex flex-col gap-2">
    <label className="text-[#064423] text-[13px] font-medium opacity-90">{label} <span className="text-[#36B936]">*</span></label>
    <div className="relative">
      <select className="w-full p-3.5 rounded-xl border border-gray-100 bg-[#FCFCFC] text-gray-400 text-[13px] outline-none appearance-none font-light">
        <option>Select a {label.toLowerCase()}</option>
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300 text-[10px]">▼</div>
    </div>
    <p className="text-[11px] text-gray-400 font-light italic">{hint}</p>
  </div>
);

const InputField = ({ label, placeholder, hint }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-[#064423] text-[13px] font-medium opacity-90">{label} <span className="text-[#36B936]">*</span></label>
    <input type="text" placeholder={placeholder} className="w-full p-3.5 rounded-xl border border-gray-100 bg-[#FCFCFC] text-[13px] outline-none font-light placeholder:text-gray-300" />
    {hint && <p className="text-[11px] text-gray-400 font-light italic">{hint}</p>}
  </div>
);

const SidebarAction = ({ icon, label }: any) => (
  <button className="w-full flex items-center gap-4 p-3.5 rounded-xl border border-gray-50 text-[#064423] text-[13px] font-light transition-all hover:bg-[#F9FBF9] group">
    <span className="text-gray-300 group-hover:text-[#36B936] transition-colors">{icon}</span>
    {label}
  </button>
);

const BoxIcon = () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25m-9-5.25v9l9 5.25m0-9v9" /></svg>;
const FileIcon = () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const PhoneIcon = () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;

export default SupportTicket;