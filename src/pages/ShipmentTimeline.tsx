import React from 'react';
import { useNavigate } from 'react-router-dom';
import RatesSection from '../components/RatesSection';
import Footer from '../components/Footer';

const timelineSteps = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6 3.91646L8.725 0.154738C8.54131 0.0532399 8.33487 0 8.125 0C7.91513 0 7.70869 0.0532399 7.525 0.154738L0.65 3.91802C0.453663 4.02544 0.289768 4.18361 0.175431 4.37601C0.0610939 4.5684 0.000508014 4.78797 0 5.01177V12.4836C0.000508014 12.7074 0.0610939 12.927 0.175431 13.1194C0.289768 13.3118 0.453663 13.47 0.65 13.5774L7.525 17.3407C7.70869 17.4422 7.91513 17.4954 8.125 17.4954C8.33487 17.4954 8.54131 17.4422 8.725 17.3407L15.6 13.5774C15.7963 13.47 15.9602 13.3118 16.0746 13.1194C16.1889 12.927 16.2495 12.7074 16.25 12.4836V5.01255C16.2499 4.78835 16.1895 4.5683 16.0752 4.37545C15.9608 4.18261 15.7967 4.02407 15.6 3.91646ZM8.125 1.24849L14.4016 4.68599L12.0758 5.95943L5.79844 2.52193L8.125 1.24849ZM8.125 8.12349L1.84844 4.68599L4.49687 3.23599L10.7734 6.67349L8.125 8.12349ZM1.25 5.77974L7.5 9.20005V15.9024L1.25 12.4844V5.77974ZM15 12.4813L8.75 15.9024V9.20318L11.25 7.83521V10.6235C11.25 10.7892 11.3158 10.9482 11.4331 11.0654C11.5503 11.1826 11.7092 11.2485 11.875 11.2485C12.0408 11.2485 12.1997 11.1826 12.3169 11.0654C12.4342 10.9482 12.5 10.7892 12.5 10.6235V7.15083L15 5.77974V12.4805V12.4813Z" fill="white"/>
      </svg>
    ),
    label: 'Created',
    location: 'Dubai Marina, Dubai',
    datetime: 'Jan 5, 2026  •  09:00 AM',
    note: 'Shipment created and booking confirmed',
    done: true,
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9547 9.14062L18.8609 6.40625C18.7681 6.1749 18.608 5.97674 18.4013 5.83745C18.1946 5.69815 17.9508 5.62414 17.7016 5.625H15V5C15 4.83424 14.9342 4.67527 14.8169 4.55806C14.6997 4.44085 14.5408 4.375 14.375 4.375H2.5C2.16848 4.375 1.85054 4.5067 1.61612 4.74112C1.3817 4.97554 1.25 5.29348 1.25 5.625V14.375C1.25 14.7065 1.3817 15.0245 1.61612 15.2589C1.85054 15.4933 2.16848 15.625 2.5 15.625H3.82812C3.96581 16.1628 4.27856 16.6394 4.71707 16.9798C5.15557 17.3202 5.69489 17.5049 6.25 17.5049C6.80511 17.5049 7.34443 17.3202 7.78293 16.9798C8.22144 16.6394 8.53419 16.1628 8.67188 15.625H12.5781C12.7158 16.1628 13.0286 16.6394 13.4671 16.9798C13.9056 17.3202 14.4449 17.5049 15 17.5049C15.5551 17.5049 16.0944 17.3202 16.5329 16.9798C16.9714 16.6394 17.2842 16.1628 17.4219 15.625H18.75C19.0815 15.625 19.3995 15.4933 19.6339 15.2589C19.8683 15.0245 20 14.7065 20 14.375V9.375C20.0002 9.29468 19.9848 9.21508 19.9547 9.14062ZM15 6.875H17.7016L18.4516 8.75H15V6.875ZM2.5 5.625H13.75V10.625H2.5V5.625ZM6.25 16.25C6.00277 16.25 5.7611 16.1767 5.55554 16.0393C5.34998 15.902 5.18976 15.7068 5.09515 15.4784C5.00054 15.2499 4.97579 14.9986 5.02402 14.7561C5.07225 14.5137 5.1913 14.2909 5.36612 14.1161C5.54093 13.9413 5.76366 13.8222 6.00614 13.774C6.24861 13.7258 6.49995 13.7505 6.72835 13.8451C6.95676 13.9398 7.15199 14.1 7.28934 14.3055C7.42669 14.5111 7.5 14.7528 7.5 15C7.5 15.3315 7.3683 15.6495 7.13388 15.8839C6.89946 16.1183 6.58152 16.25 6.25 16.25ZM15 16.25C14.7528 16.25 14.5111 16.1767 14.3055 16.0393C14.1 15.902 13.9398 15.7068 13.8451 15.4784C13.7505 15.2499 13.7258 14.9986 13.774 14.7561C13.8222 14.5137 13.9413 14.2909 14.1161 14.1161C14.2909 13.9413 14.5137 13.8222 14.7561 13.774C14.9986 13.7258 15.2499 13.7505 15.4784 13.8451C15.7068 13.9398 15.902 14.1 16.0393 14.3055C16.1767 14.5111 16.25 14.7528 16.25 15C16.25 15.3315 16.1183 15.6495 15.8839 15.8839C15.6495 16.1183 15.3315 16.25 15 16.25ZM18.75 14.375H17.4219C17.2825 13.8385 16.9692 13.3635 16.5309 13.0242C16.0927 12.6849 15.5543 12.5005 15 12.5V10H18.75V14.375Z" fill="white"/>
        </svg>
    ),
    label: 'Picked Up',
    location: 'Dubai Marina',
    datetime: 'Jan 5, 2026  •  10:30 AM',
    note: 'Package picked up from sender location',
    done: true,
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.25 4.5C7.50832 4.5 6.7833 4.71993 6.16661 5.13199C5.54993 5.54404 5.06928 6.12971 4.78545 6.81494C4.50162 7.50016 4.42736 8.25416 4.57205 8.98159C4.71675 9.70902 5.0739 10.3772 5.59835 10.9017C6.1228 11.4261 6.79098 11.7833 7.51841 11.9279C8.24584 12.0726 8.99984 11.9984 9.68506 11.7145C10.3703 11.4307 10.956 10.9501 11.368 10.3334C11.7801 9.7167 12 8.99168 12 8.25C12 7.25544 11.6049 6.30161 10.9017 5.59835C10.1984 4.89509 9.24456 4.5 8.25 4.5ZM8.25 0C6.06273 0.00248131 3.96575 0.872472 2.41911 2.41911C0.872472 3.96575 0.00248131 6.06273 0 8.25C0 11.1938 1.36031 14.3138 3.9375 17.2734C5.09552 18.6108 6.39886 19.8151 7.82344 20.8641C7.94954 20.9524 8.09978 20.9998 8.25375 20.9998C8.40772 20.9998 8.55796 20.9524 8.68406 20.8641C10.106 19.8147 11.4068 18.6104 12.5625 17.2734C15.1359 14.3138 16.5 11.1938 16.5 8.25C16.4975 6.06273 15.6275 3.96575 14.0809 2.41911C12.5343 0.872472 10.4373 0.00248131 8.25 0Z" fill="white"/>
      </svg>
    ),
    label: 'At Hub',
    location: 'ZAJEL Hub – Dubai',
    datetime: 'Jan 5, 2026  •  11:45 AM',
    note: 'Arrived at sorting facility',
    done: true,
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9547 9.14062L18.8609 6.40625C18.7681 6.1749 18.608 5.97674 18.4013 5.83745C18.1946 5.69815 17.9508 5.62414 17.7016 5.625H15V5C15 4.83424 14.9342 4.67527 14.8169 4.55806C14.6997 4.44085 14.5408 4.375 14.375 4.375H2.5C2.16848 4.375 1.85054 4.5067 1.61612 4.74112C1.3817 4.97554 1.25 5.29348 1.25 5.625V14.375C1.25 14.7065 1.3817 15.0245 1.61612 15.2589C1.85054 15.4933 2.16848 15.625 2.5 15.625H3.82812C3.96581 16.1628 4.27856 16.6394 4.71707 16.9798C5.15557 17.3202 5.69489 17.5049 6.25 17.5049C6.80511 17.5049 7.34443 17.3202 7.78293 16.9798C8.22144 16.6394 8.53419 16.1628 8.67188 15.625H12.5781C12.7158 16.1628 13.0286 16.6394 13.4671 16.9798C13.9056 17.3202 14.4449 17.5049 15 17.5049C15.5551 17.5049 16.0944 17.3202 16.5329 16.9798C16.9714 16.6394 17.2842 16.1628 17.4219 15.625H18.75C19.0815 15.625 19.3995 15.4933 19.6339 15.2589C19.8683 15.0245 20 14.7065 20 14.375V9.375C20.0002 9.29468 19.9848 9.21508 19.9547 9.14062Z" fill="white"/>
      </svg>
    ),
    label: 'In Transit',
    location: 'En route to Abu Dhabi',
    datetime: 'Jan 5, 2026  •  01:00 PM',
    note: 'Package in transit to destination city',
    done: true,
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9547 9.14062L18.8609 6.40625C18.7681 6.1749 18.608 5.97674 18.4013 5.83745C18.1946 5.69815 17.9508 5.62414 17.7016 5.625H15V5C15 4.83424 14.9342 4.67527 14.8169 4.55806C14.6997 4.44085 14.5408 4.375 14.375 4.375H2.5C2.16848 4.375 1.85054 4.5067 1.61612 4.74112C1.3817 4.97554 1.25 5.29348 1.25 5.625V14.375C1.25 14.7065 1.3817 15.0245 1.61612 15.2589C1.85054 15.4933 2.16848 15.625 2.5 15.625H3.82812C3.96581 16.1628 4.27856 16.6394 4.71707 16.9798C5.15557 17.3202 5.69489 17.5049 6.25 17.5049C6.80511 17.5049 7.34443 17.3202 7.78293 16.9798C8.22144 16.6394 8.53419 16.1628 8.67188 15.625H12.5781C12.7158 16.1628 13.0286 16.6394 13.4671 16.9798C13.9056 17.3202 14.4449 17.5049 15 17.5049C15.5551 17.5049 16.0944 17.3202 16.5329 16.9798C16.9714 16.6394 17.2842 16.1628 17.4219 15.625H18.75C19.0815 15.625 19.3995 15.4933 19.6339 15.2589C19.8683 15.0245 20 14.7065 20 14.375V9.375C20.0002 9.29468 19.9848 9.21508 19.9547 9.14062Z" fill="white"/>
      </svg>
    ),
    label: 'Out for Delivery',
    location: 'Abu Dhabi',
    datetime: 'Jan 5, 2026  •  02:15 PM',
    note: 'Out for delivery to recipient address',
    done: true,
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21H14C14 17.6863 11.3137 15 8 15C4.68629 15 2 17.6863 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="white"/>
      </svg>
    ),
    label: 'Delivered',
    location: 'Downtown, Abu Dhabi',
    datetime: 'Jan 5, 2026  •  03:45 PM',
    note: 'Successfully delivered to recipient',
    done: true,
  },
];

const PinIcon = () => (
  <svg width="10" height="12" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.25 4.5C7.50832 4.5 6.7833 4.71993 6.16661 5.13199C5.54993 5.54404 5.06928 6.12971 4.78545 6.81494C4.50162 7.50016 4.42736 8.25416 4.57205 8.98159C4.71675 9.70902 5.0739 10.3772 5.59835 10.9017C6.1228 11.4261 6.79098 11.7833 7.51841 11.9279C8.24584 12.0726 8.99984 11.9984 9.68506 11.7145C10.3703 11.4307 10.956 10.9501 11.368 10.3334C11.7801 9.7167 12 8.99168 12 8.25C12 7.25544 11.6049 6.30161 10.9017 5.59835C10.1984 4.89509 9.24456 4.5 8.25 4.5ZM8.25 0C6.06273 0.00248131 3.96575 0.872472 2.41911 2.41911C0.872472 3.96575 0.00248131 6.06273 0 8.25C0 11.1938 1.36031 14.3138 3.9375 17.2734C5.09552 18.6108 6.39886 19.8151 7.82344 20.8641C7.94954 20.9524 8.09978 20.9998 8.25375 20.9998C8.40772 20.9998 8.55796 20.9524 8.68406 20.8641C10.106 19.8147 11.4068 18.6104 12.5625 17.2734C15.1359 14.3138 16.5 11.1938 16.5 8.25C16.4975 6.06273 15.6275 3.96575 14.0809 2.41911C12.5343 0.872472 10.4373 0.00248131 8.25 0Z" fill="currentColor"/>
  </svg>
);

const ShipmentTimeline: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="w-full pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white"
        style={{ fontFamily: '"Manrope", sans-serif' }}
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14 max-w-[500px] px-2">
          <h2 className="text-[#064423] text-2xl sm:text-3xl md:text-[2.75rem] font-light tracking-tight mb-3 sm:mb-4">
            Track Your Shipment
          </h2>
          <p className="text-[#064423]/60 text-xs sm:text-sm font-light leading-relaxed">
            Enter your AWB number or mobile number to get instant{' '}
            <br className="hidden sm:block" />
            updates on your package location and delivery status
          </p>
        </div>

        {/* Main Grid */}
        <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">

          {/* LEFT: Timeline */}
          <div className="lg:col-span-6 bg-[#F0F4F2] rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8">

            {/* Card header */}
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6 text-[#064423]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <h3 className="text-lg sm:text-xl md:text-[1.35rem] font-normal">Shipment Timeline</h3>
            </div>

            {/* Steps */}
            <div className="flex flex-col">
              {timelineSteps.map((step, idx) => {
                const isLast = idx === timelineSteps.length - 1;
                return (
                  <div key={idx} className="flex gap-2.5 sm:gap-3">

                    {/* Icon + connector line */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full flex items-center justify-center"
                        style={{ background: '#36B936' }}
                      >
                        {step.icon}
                      </div>
                      {!isLast && (
                        <div className="w-[2px] flex-1 my-1" style={{ background: '#36B936', minHeight: '1.25rem', opacity: 0.35 }} />
                      )}
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 bg-white rounded-[12px] sm:rounded-[14px] p-3 sm:p-4 min-w-0 ${isLast ? '' : 'mb-2.5 sm:mb-3'}`}>
                      <div className="text-[13px] sm:text-[14px] font-semibold text-[#064423] mb-1">{step.label}</div>
                      <div className="flex items-center gap-1 text-[#064423]/60 text-[10px] sm:text-[11px] mb-1">
                        <PinIcon />
                        <span className="truncate">{step.location}</span>
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#064423]/50 mb-2">{step.datetime}</div>
                      <div className="text-[10px] sm:text-[11px] text-[#064423]/40 bg-[#F0F4F2] rounded-[8px] px-2.5 sm:px-3 py-1.5 sm:py-2">
                        {step.note}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Map + Buttons */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">

            {/* Map container */}
            <div
              className="w-full rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] overflow-hidden"
              style={{
                background: '#064423',
                minHeight: '260px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* On mobile the map sits above the timeline (due to col-1 order),
                  so we give it a shorter min-height; on lg+ it stretches to fill. */}
              <style>{`
                @media (min-width: 1024px) {
                  .map-container { min-height: 420px; }
                }
              `}</style>
              <div className="map-container w-full h-full" style={{ minHeight: 'inherit', display: 'flex' }}>
                <img
                  src="/image copy 19.png"
                  alt="Shipment route map"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 'inherit' }}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 bg-white border border-[#E5EBE7] text-[#064423] font-light text-[13px] sm:text-sm py-3 sm:py-3.5 rounded-full hover:bg-gray-50 transition-colors duration-300 outline-none"
              >
                Back
              </button>
              <button
                onClick={() => navigate('/proof-of-delivery')}
                className="flex-1 bg-[#36B936] text-white font-normal text-[13px] sm:text-sm py-3 sm:py-3.5 rounded-full hover:bg-[#2EA32E] active:scale-[0.99] transition-all duration-300 shadow-[0_4px_14px_rgba(54,185,54,0.15)] outline-none"
              >
                Next
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

export default ShipmentTimeline;