import React from 'react';

type NavId = string;

interface NavItem {
  id: NavId;
  label: string;
  enabled: boolean;
  isHeader?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', enabled: false },
  { id: 'pages', label: 'Pages', enabled: true },
  { id: 'services', label: 'Services', enabled: true }, // <-- Single Services button
  
  { id: 'seo-aeo', label: 'SEO & AEO', enabled: false },
  { id: 'local-seo', label: 'Local SEO', enabled: false },
];

interface Props {
  activeNav: NavId;
  onSelectNav: (nav: NavId) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<Props> = ({ activeNav, onSelectNav, onLogout }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col shrink-0 z-20">
      <div className="h-20 flex items-center px-8 border-b border-gray-100">
        
      </div>

      <nav className="flex-1 py-6 px-4 overflow-y-auto space-y-1">
        {NAV_ITEMS.map((item) => {
          if (item.isHeader) {
            return (
              <div 
                key={item.id} 
                className="px-4 pt-5 pb-1 text-[11px] font-bold tracking-wider text-gray-400 uppercase"
              >
                {item.label}
              </div>
            );
          }

          return (
            <button
              key={item.id}
              disabled={!item.enabled}
              onClick={() => item.enabled && onSelectNav(item.id)}
              className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors ${
                !item.enabled
                  ? 'text-gray-300 cursor-not-allowed'
                  : activeNav === item.id
                  ? 'text-green-700 bg-green-50/50 font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100 space-y-1">
        <button className="w-full px-4 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors text-left font-medium">
          Settings
        </button>
        <button onClick={onLogout} className="w-full px-4 py-2 text-sm text-gray-500 hover:text-red-600 transition-colors text-left font-medium">
          Sign out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;