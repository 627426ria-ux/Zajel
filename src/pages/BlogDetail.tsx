import React from 'react';
import BlogDetailComponent from '../components/BlogDetail'; // Assuming you named the component file BlogDetail.tsx

const BlogDetailPage: React.FC = () => {
  return (
    <main className="bg-[#FDFDFD]">
      {/* If you have a global Navigation component, it would go here */}
      <BlogDetailComponent />
      {/* If you have a global Footer component, it would go here */}
    </main>
  );
};

export default BlogDetailPage;