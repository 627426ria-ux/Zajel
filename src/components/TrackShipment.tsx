import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TabType = 'awb' | 'mobile';

const TrackShipment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('awb');
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleTrack = () => {
    if (!inputValue.trim()) return;
    navigate('/trackresults');
  };

  return (
    <section 
      // Added pt-32 (128px) on mobile and pt-40 on desktop to completely clear your fixed Navbar
      className="w-full pt-32 pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-white"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      {/* --- HEADER --- */}
      <div className="text-center mb-8 sm:mb-10 max-w-[500px] px-2">
        <h2 className="text-[#064423] text-3xl sm:text-4xl md:text-[2.75rem] font-light tracking-tight mb-3 sm:mb-4">
          Track Your Shipment
        </h2>
        <p className="text-[#064423]/60 text-xs sm:text-sm font-light leading-relaxed">
          Enter your AWB number or mobile number to get instant <br className="hidden sm:block" />
          updates on your package location and delivery status
        </p>
      </div>

      {/* --- TRACKING CARD --- */}
      <div className="w-full max-w-[640px] bg-white rounded-[1.25rem] sm:rounded-[1.75rem] border border-[#E5EBE7] shadow-[0_8px_30px_rgba(6,68,35,0.04)] p-4 sm:p-6 md:p-8">
        
        {/* Toggle Tabs */}
        <div className="flex p-1.5 bg-[#F0F4F2] rounded-full mb-6 sm:mb-8 relative">
          
          {/* AWB Number Tab */}
          <button
            onClick={() => setActiveTab('awb')}
            className={`flex-1 flex items-center justify-center gap-2 sm:gap-2.5 py-2.5 sm:py-3 rounded-full text-[12px] sm:text-[13px] md:text-sm font-normal transition-all duration-300 outline-none ${
              activeTab === 'awb' 
                ? 'bg-[#064423] text-[#36B936] shadow-sm' 
                : 'text-[#064423] hover:bg-white/50'
            }`}
          >
            {/* Package Icon */}
            <svg width="16" height="17" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 w-[14px] sm:w-[16px] h-auto">
              <path d="M15.6 3.91646L8.725 0.154738C8.54131 0.0532399 8.33487 0 8.125 0C7.91513 0 7.70869 0.0532399 7.525 0.154738L0.65 3.91802C0.453663 4.02544 0.289768 4.18361 0.175431 4.37601C0.0610939 4.5684 0.000508014 4.78797 0 5.01177V12.4836C0.000508014 12.7074 0.0610939 12.927 0.175431 13.1194C0.289768 13.3118 0.453663 13.47 0.65 13.5774L7.525 17.3407C7.70869 17.4422 7.91513 17.4954 8.125 17.4954C8.33487 17.4954 8.54131 17.4422 8.725 17.3407L15.6 13.5774C15.7963 13.47 15.9602 13.3118 16.0746 13.1194C16.1889 12.927 16.2495 12.7074 16.25 12.4836V5.01255C16.2499 4.78835 16.1895 4.5683 16.0752 4.37545C15.9608 4.18261 15.7967 4.02407 15.6 3.91646ZM8.125 1.24849L14.4016 4.68599L12.0758 5.95943L5.79844 2.52193L8.125 1.24849ZM8.125 8.12349L1.84844 4.68599L4.49687 3.23599L10.7734 6.67349L8.125 8.12349ZM1.25 5.77974L7.5 9.20005V15.9024L1.25 12.4844V5.77974ZM15 12.4813L8.75 15.9024V9.20318L11.25 7.83521V10.6235C11.25 10.7892 11.3158 10.9482 11.4331 11.0654C11.5503 11.1826 11.7092 11.2485 11.875 11.2485C12.0408 11.2485 12.1997 11.1826 12.3169 11.0654C12.4342 10.9482 12.5 10.7892 12.5 10.6235V7.15083L15 5.77974V12.4805V12.4813Z" fill="currentColor"/>
            </svg>
            AWB Number
          </button>

          {/* Mobile Number Tab */}
          <button
            onClick={() => setActiveTab('mobile')}
            className={`flex-1 flex items-center justify-center gap-2 sm:gap-2.5 py-2.5 sm:py-3 rounded-full text-[12px] sm:text-[13px] md:text-sm font-normal transition-all duration-300 outline-none ${
              activeTab === 'mobile' 
                ? 'bg-[#064423] text-[#36B936] shadow-sm' 
                : 'text-[#064423] hover:bg-white/50'
            }`}
          >
            {/* Phone Icon */}
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] sm:w-[15px] h-auto">
              <path d="M15 11.1833V14.1301C15 14.5676 14.6617 14.9306 14.2254 14.9614C13.8609 14.9872 13.5636 15 13.3333 15C5.9695 15 0 9.0305 0 1.66667C0 1.43642 0.012875 1.13906 0.038625 0.774583C0.069475 0.338233 0.43245 0 0.869883 0H3.81675C4.03065 0 4.2098 0.162017 4.23127 0.374833C4.25056 0.565892 4.26848 0.719283 4.28506 0.835017C4.45362 2.01227 4.79794 3.1328 5.29058 4.16919C5.36966 4.33554 5.31809 4.53466 5.16821 4.64172L3.36962 5.9265C4.4646 8.48425 6.51575 10.5354 9.0735 11.6304L10.3559 9.83492C10.4643 9.68325 10.6658 9.63108 10.8342 9.711C11.8705 10.2032 12.9909 10.5472 14.168 10.7153C14.283 10.7318 14.4354 10.7496 14.6252 10.7687C14.838 10.7902 15 10.9694 15 11.1833Z" fill="currentColor"/>
            </svg>
            Mobile Number
          </button>
        </div>

        {/* Input Group */}
        <div className="flex flex-col mb-5 sm:mb-6">
          <label className="text-[12px] sm:text-[13px] font-normal text-[#064423] mb-2.5 sm:mb-3 ml-1">
            {activeTab === 'awb' ? 'AWB / Tracking Number' : 'Mobile Number'}
          </label>
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={activeTab === 'awb' ? 'eg: ZAJEL123456789' : 'eg: +971 50 123 4567'}
            className="w-full border border-gray-200 rounded-[12px] sm:rounded-[14px] px-4 py-3.5 sm:px-5 sm:py-4 text-[13px] sm:text-[14px] font-light outline-none text-[#064423] placeholder:text-gray-400 focus:border-[#36B936] focus:ring-1 focus:ring-[#36B936] transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
        onClick={handleTrack}  
          className="w-full bg-[#36B936] hover:bg-[#2EA32E] active:scale-[0.99] text-white rounded-full py-3.5 sm:py-4 flex items-center justify-center gap-2 sm:gap-2.5 text-[13px] sm:text-[14px] font-normal transition-all duration-300 mb-4 sm:mb-5 outline-none"
        >
          {/* Search Icon */}
          <svg width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[14px] sm:w-[16px] h-auto">
            <path d="M13.3592 12.1807L16.9281 15.7496L15.7496 16.9281L12.1807 13.3592C10.8974 14.3858 9.27 15 7.5 15C3.36 15 0 11.64 0 7.5C0 3.36 3.36 0 7.5 0C11.64 0 15 3.36 15 7.5C15 9.27 14.3858 10.8974 13.3592 12.1807ZM11.6873 11.5623C12.7063 10.5122 13.3333 9.07967 13.3333 7.5C13.3333 4.27708 10.7229 1.66667 7.5 1.66667C4.27708 1.66667 1.66667 4.27708 1.66667 7.5C1.66667 10.7229 4.27708 13.3333 7.5 13.3333C9.07967 13.3333 10.5122 12.7063 11.5623 11.6873L11.6873 11.5623Z" fill="currentColor"/>
          </svg>
          Track Shipment
        </button>

        {/* Helper Note */}
        <p className="text-center text-[#9CA3AF] text-[10px] sm:text-[11px] font-light px-2 leading-snug">
          Track multiple shipments by separating AWB numbers with commas
        </p>

      </div>
    </section>
  );
};

export default TrackShipment;