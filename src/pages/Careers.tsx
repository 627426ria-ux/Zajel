import React from 'react';
import CareerHero from '../components/CareerHero';
import JobOpenings from '../components/JobOpenings';
import LifeAtZajel from '../components/LifeAtZajel';
import BenefitsSection from '../components/BenefitsSection';
import CareersHeroMain from '../components/CareersHero';
import RatesSection from '../components/RatesSection';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  return (
    <main>
      {/* The high-impact green gradient section */}

      <CareersHeroMain/> 
      
      <CareerHero />

      <JobOpenings/>

      <LifeAtZajel/>

      <BenefitsSection/>

      <RatesSection/>

      <Footer/>
      
      {/* Future sections like <JobOpenings />, <Culture />, etc. can go here */}
    </main>
  );
};

export default CareersPage;