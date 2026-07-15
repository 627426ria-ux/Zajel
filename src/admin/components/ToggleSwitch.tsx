import React from 'react';

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const ToggleSwitch: React.FC<Props> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      {label && <span className="text-xs font-medium text-gray-500">{label}</span>}
      <span
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
          checked ? 'bg-[#0A4D26]' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-[18px]' : 'translate-x-[3px]'
          }`}
        />
      </span>
    </label>
  );
};

export default ToggleSwitch;