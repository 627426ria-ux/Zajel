import React from 'react';
import { CMS_SECTIONS, PAGE_GROUPS } from '../config/sections';
import type { CmsSection } from '../config/sections';

interface Props {
  onSelectPage: (group: CmsSection['group']) => void;
}

const PagesList: React.FC<Props> = ({ onSelectPage }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-light text-gray-900 tracking-tight">Pages</h1>
        <p className="text-sm text-gray-400 mt-1">Manage all website pages and content</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
              <th className="px-6 py-4">Page</th>
              <th className="px-6 py-4">Sections</th>
              <th className="px-6 py-4" />
            </tr>
          </thead>
          <tbody>
            {PAGE_GROUPS.map((group) => {
              const count = CMS_SECTIONS.filter((s) => s.group === group).length;
              return (
                <tr
                  key={group}
                  onClick={() => onSelectPage(group)}
                  className="border-b border-gray-50 last:border-b-0 hover:bg-gray-50/60 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">{group}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {count} section{count === 1 ? '' : 's'}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-xs text-green-700 font-medium">Manage →</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PagesList;