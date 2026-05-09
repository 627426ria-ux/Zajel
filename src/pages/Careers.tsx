import React from 'react';
import CareerHero from '../components/CareerHero';
import JobOpenings from '../components/JobOpenings';
import LifeAtZajel from '../components/LifeAtZajel';
import BenefitsSection from '../components/BenefitsSection';
import CareersHeroMain from '../components/CareersHero';

const CareersPage: React.FC = () => {
  return (
    <main>
      {/* The high-impact green gradient section */}

      <CareersHeroMain/> 
      
      <CareerHero />

      <JobOpenings/>

      <LifeAtZajel/>

      <BenefitsSection/>
      
      {/* Future sections like <JobOpenings />, <Culture />, etc. can go here */}
    </main>
  );
};

export default CareersPage;