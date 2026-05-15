import React from 'react';
import { useNavigate } from 'react-router-dom';
import RatesSection from '../components/RatesSection';
import Footer from '../components/Footer';

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9847 9.16849C20.4033 11.223 20.105 13.359 19.1394 15.2201C18.1738 17.0813 16.5994 18.5552 14.6786 19.396C12.7578 20.2369 10.6069 20.3938 8.5844 19.8407C6.56193 19.2875 4.79022 18.0578 3.56471 16.3565C2.3392 14.6551 1.73399 12.5851 1.84998 10.4916C1.96598 8.39806 2.79618 6.40757 4.20214 4.85206C5.60809 3.29655 7.50482 2.27005 9.57602 1.94374C11.6472 1.61742 13.7677 2.01103 15.5838 3.0589" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.25 10.0846L11 12.8346L20.1667 3.66797" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21H14C14 17.6863 11.3137 15 8 15C4.68629 15 2 17.6863 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="white"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const NoteIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

const ImageIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const ProofOfDelivery: React.FC = () => {
  const navigate = useNavigate();

  const infoRows = [
    {
      icon: <UserIcon />,
      label: 'RECEIVED BY',
      value: 'John Smith',
    },
    {
      icon: <CalendarIcon />,
      label: 'DELIVERY DATE',
      value: 'January 5, 2026',
    },
    {
      icon: <ClockIcon />,
      label: 'DELIVERY TIME',
      value: '03:45 PM',
    },
    {
      icon: <NoteIcon />,
      label: 'DELIVERY NOTES',
      value: 'Package delivered to reception desk as per instructions',
    },
  ];

  return (
    <>
      <section
        className="w-full pt-32 pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white"
        style={{ fontFamily: '"Manrope", sans-serif' }}
      >
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 max-w-[500px] px-2">
          <h2 className="text-[#064423] text-3xl sm:text-4xl md:text-[2.75rem] font-light tracking-tight mb-3 sm:mb-4">
            Track Your Shipment
          </h2>
          <p className="text-[#064423]/60 text-xs sm:text-sm font-light leading-relaxed">
            Enter your AWB number or mobile number to get instant{' '}
            <br className="hidden sm:block" />
            updates on your package location and delivery status
          </p>
        </div>

        {/* Main Grid */}
        <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT: Proof of Delivery Details */}
          <div className="lg:col-span-8 bg-[#F0F4F2] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8">

            {/* Card header */}
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2.5 text-[#064423]">
                <CheckCircleIcon />
                <h3 className="text-xl md:text-[1.35rem] font-normal">Proof of Delivery</h3>
              </div>
              <div className="bg-[#36B936] text-white text-[11px] font-light rounded-full px-4 py-1.5">
                Delivered
              </div>
            </div>
            <p className="text-[#064423]/60 text-[12px] font-light mb-6 ml-[26px]">
              Your shipment has been successfully delivered
            </p>

            {/* Info rows */}
            <div className="bg-white rounded-[1.25rem] p-5 sm:p-6 shadow-sm flex flex-col divide-y divide-[#064423]/[0.06] mb-4">
              {infoRows.map((row, idx) => (
                <div key={idx} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#36B936] flex items-center justify-center mt-0.5">
                    {row.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-normal text-[#064423]/50 tracking-wider mb-0.5">
                      {row.label}
                    </div>
                    <div className="text-[15px] font-normal text-[#064423] leading-snug">
                      {row.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Confirmation note */}
            <div className="bg-white rounded-[1.25rem] px-5 py-4 shadow-sm flex items-start gap-3">
              <div className="text-[#36B936] mt-0.5 shrink-0">
                <CheckCircleIcon />
              </div>
              <p className="text-[12px] text-[#064423]/60 font-light leading-relaxed text-center w-full">
                <span className="font-normal text-[#064423]">Delivery Confirmed:</span>{' '}
                This proof of delivery serves as confirmation that your shipment was successfully received.
                Keep this for your records.
              </p>
            </div>

          </div>

          {/* RIGHT: POD Image + Status + Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-4">

            {/* POD card */}
            <div className="bg-[#F0F4F2] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 flex-1">

              {/* Card header */}
              <div className="flex items-center gap-2 text-[#064423] mb-4">
                <ImageIcon />
                <span className="text-[14px] font-normal">Proof of Delivery</span>
              </div>

              {/* Delivery photo */}
              <div
                className="w-full rounded-[1rem] overflow-hidden mb-4"
                style={{ minHeight: '220px', background: '#064423/10' }}
              >
                
                  
                  <img src="/image copy 20.png" alt="Proof of delivery" className="w-full h-full object-cover" />
               
                
              </div>

              {/* Status row */}
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="text-[11px] font-light text-[#064423]/60 mb-1">
                    Jan 5, 2026 at 02:30 PM
                  </div>
                  <div className="text-[15px] font-normal text-[#064423]">
                    Successfully Delivered
                  </div>
                </div>
                <div className="bg-[#36B936] text-white text-[11px] font-light rounded-full px-3 py-1.5 flex items-center gap-1.5 shrink-0">
                  <CheckCircleIcon />
                  Status
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 bg-white border border-[#E5EBE7] text-[#064423] font-light text-[13px] md:text-sm py-3.5 rounded-full hover:bg-gray-50 transition-colors duration-300 outline-none"
              >
                Back
              </button>
              <button
                onClick={() => navigate('/track')}
                className="flex-1 bg-[#36B936] text-white font-normal text-[13px] md:text-sm py-3.5 rounded-full hover:bg-[#2EA32E] active:scale-[0.99] transition-all duration-300 shadow-[0_4px_14px_rgba(54,185,54,0.15)] outline-none"
              >
                Track Another
              </button>
            </div>

          </div>
        </div>
      </section>

      <RatesSection />
      <Footer />
    </>
  );
};

export default ProofOfDelivery;