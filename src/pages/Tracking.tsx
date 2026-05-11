import React from 'react';
import TrackShipment from '../components/TrackShipment';
import RatesSection from '../components/RatesSection';
import Footer from '../components/Footer';
const SupportPage: React.FC = () => {
  return (
    <main className="bg-[#F9FBF9]">
      <TrackShipment />
      <RatesSection/>
      <Footer/>
    </main>
  );
};

export default SupportPage;