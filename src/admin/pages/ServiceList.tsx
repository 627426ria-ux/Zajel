import React from 'react';
import { SERVICE_GROUPS } from '../config/sections';
import type { SectionGroup } from '../config/sections';

interface Props {
  onSelectService: (service: SectionGroup) => void;
}

const ServicesList: React.FC<Props> = ({ onSelectService }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-light text-gray-900 tracking-tight">Services</h2>
        <p className="text-sm text-gray-500 mt-1 font-light">Manage all service pages and content</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50/50 text-xs text-gray-400 font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Service Category</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {SERVICE_GROUPS.map((service) => (
              <tr key={service} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4 font-medium text-gray-900">{service}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-[#0A4D26] font-medium text-xs tracking-wide group-hover:underline"
                  >
                    Manage →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesList;