import React from 'react';
import { AppHero } from '../components/DownloadHero';
import { AppShowcase } from '../components/InsideApp';
import { AppSteps } from '../components/HowItWorks';
import AppDownloadSection from '../components/AppDownloadSection';
import Footer from '../components/Footer';

export default function DownloadAppPage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0" style={{ fontFamily: '"Manrope", sans-serif' }}> 
      {/* Imported Sections */}
      <AppHero />
      <AppShowcase />
      <AppSteps />

      
      
      
      <AppDownloadSection/>
      <Footer/>
    </main>
  );
}