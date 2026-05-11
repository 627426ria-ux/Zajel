import React from 'react';
import SupportTicket from '../components/SupportTicket';
import RatesSection from '../components/RatesSection';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  return (
    <main className="bg-[#F9FBF9]">
      <SupportTicket />
      <RatesSection/>
      <Footer/>
    </main>
  );
};

export default SupportPage;