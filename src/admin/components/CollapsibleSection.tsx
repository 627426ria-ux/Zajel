import React, { useState } from 'react';

interface Props {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const CollapsibleSection: React.FC<Props> = ({ title, subtitle, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl border border-[#E8E7E2] overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#FAFAF8] transition-colors"
      >
        <div>
          <h3 className="text-[15px] font-normal text-[#1C2620]">{title}</h3>
          {subtitle && <p className="text-xs text-gray-400 font-light mt-0.5">{subtitle}</p>}
        </div>
        <ChevronIcon open={open} />
      </button>

      <div className={`grid transition-all duration-200 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-1 border-t border-[#F0F0EC]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;