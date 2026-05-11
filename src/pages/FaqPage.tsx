import React from 'react';
// Import the UI component from your components folder
import FaqAccordion from '../components/FaqAccordion'; 
import RatesSection from '../components/RatesSection';
import Footer from '../components/Footer';

const FaqPage: React.FC = () => {
  return (
    <main className="bg-[#FDFDFD]">
      <FaqAccordion />
      <RatesSection/>
      <Footer/>
    </main>
  );
};

export default FaqPage;