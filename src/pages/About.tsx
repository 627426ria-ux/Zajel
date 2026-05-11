import React from 'react';
// Import the UI component from your components folder
import AboutHero from '../components/AboutHero';
import WhoWeAre from '../components/WhoWeAre';
import Leadership from '../components/Leadership';
import Testimonials from '../components/Testimonials';
import SmartLogistics from '../components/SmartLogistics';
import RatesSection from '../components/RatesSection';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <main className="bg-[#FDFDFD]">
      {/* Hero Section with the three-column image grid */}
      <AboutHero />

      <WhoWeAre/>

      <SmartLogistics/>

      <Leadership/>
      
      <Testimonials/>
      <RatesSection/>

      <Footer/>
      {/* You can add more sections here later, like <AboutMission />, <AboutTeam />, etc. */}
    </main>
  );
};

export default AboutPage;