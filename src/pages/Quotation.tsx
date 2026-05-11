import React from 'react';
import CourierCalculator from '../components/Quotation';
import HelpCTA from '../components/HelpCta';
import RatesSection from '../components/RatesSection';
import Footer from '../components/Footer';

const QuotationPage: React.FC = () => {
  return (
    <main className="bg-[#F9FBF9]">
      <CourierCalculator />
      <HelpCTA/>
      <RatesSection/>
      <Footer/>
    </main>
  );
};

export default QuotationPage;