import React, { useState } from 'react';
import { useAdminAuth } from './hooks/useAdminAuth';
import Sidebar from './components/Sidebar';
import PagesList from './pages/PagesList';
import ServicesList from './pages/ServiceList'; // <-- Import the new list
import PageEditor from './pages/PageEditor';
import BlogPostsListEditor from './sections/blog/BlogPostsListEditor';
import BlogPostEditor from './sections/blog/BlogPostEditor';
import type { SectionGroup } from './config/sections'; 

const AdminDashboardShell: React.FC = () => {
  const { checking, logout } = useAdminAuth();
  
  const [activeNav, setActiveNav] = useState<string>('pages');
  const [selectedPage, setSelectedPage] = useState<SectionGroup | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  if (checking) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#FAFAFA]">
        <div className="text-sm tracking-widest text-gray-400 uppercase">Loading Workspace...</div>
      </div>
    );
  }

  const renderContent = () => {
    // 1. IF BLOG IS SELECTED
    if (selectedPage === 'Blog') {
      return selectedPostId ? (
        <BlogPostEditor postId={selectedPostId} onBack={() => setSelectedPostId(null)} />
      ) : (
        <BlogPostsListEditor onSelectPost={setSelectedPostId} />
      );
    }

    // 2. IF ANY SPECIFIC PAGE/SERVICE IS SELECTED (Drill-down view)
    // Both standard Pages and Services use the PageEditor component!
    if (selectedPage) {
      return (
        <PageEditor
          pageGroup={selectedPage}
          pageTitle={selectedPage}
          onBack={() => setSelectedPage(null)} // Returns to the list view
        />
      );
    }

    // 3. IF SIDEBAR "SERVICES" TAB IS ACTIVE (Show Services List)
    if (activeNav === 'services') {
      return (
        <div className="max-w-4xl mx-auto">
          <ServicesList onSelectService={(service) => setSelectedPage(service)} />
        </div>
      );
    }

    // 4. DEFAULT: IF SIDEBAR "PAGES" TAB IS ACTIVE (Show Pages List)
    return (
      <div className="max-w-4xl mx-auto">
        <PagesList onSelectPage={(page) => setSelectedPage(page as SectionGroup)} />
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-[#FAFAFA] font-sans text-gray-900 overflow-hidden">
      <Sidebar
        activeNav={activeNav}
        onSelectNav={(nav) => {
          setActiveNav(nav);
          setSelectedPage(null); // Reset drill-down state when switching sidebar tabs
          setSelectedPostId(null);
        }}
        onLogout={logout}
      />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
        <div className="flex-1 overflow-y-auto p-10">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardShell;