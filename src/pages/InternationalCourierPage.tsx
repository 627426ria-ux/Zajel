import React from 'react';
import InternationalHero from "../components/InternationalHero";
import GlobalFreightSection from "../components/International2";
import InternationalDetails from '../components/InternationalDetails';

const InternationalCourierPage: React.FC = () => {
  return (
    <main className="bg-white">
      <InternationalHero />
      {/* You can reuse your existing sections here too! */}
      <GlobalFreightSection/>
      <InternationalDetails/>

    </main>
  );
};

export default InternationalCourierPage;