import React from 'react';
// Import the UI component from your components folder
import FaqAccordion from '../components/FaqAccordion'; 

const FaqPage: React.FC = () => {
  return (
    <main className="bg-[#FDFDFD]">
      <FaqAccordion />
    </main>
  );
};

export default FaqPage;