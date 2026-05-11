import React from 'react';
import BlogPage from '../components/BlogPage';
import RatesSection from '../components/RatesSection';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  return (
    <main className="bg-[#F9FBF9]">
      <BlogPage/>
      <RatesSection/>
      <Footer/>
    </main>
  );
};

export default SupportPage;