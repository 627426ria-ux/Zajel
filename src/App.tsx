import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Import Global Components
import Navbar from './components/Navbar';

import LogoLoader from './components/LogoLoader';

// Import your Pages
import HomePage from './pages/HomePage';
import DomesticCourierPage from './pages/DomesticCourierPage';
import InternationalCourierPage from './pages/InternationalCourierPage';
import FreightCourierPage from './pages/FreightPage';
import SupportPage from './pages/Support';
import BlogPage from './components/BlogPage';
import BlogDetailPage from './pages/BlogDetail';
import ContactPage from './pages/Contact';
import FaqPage from './pages/FaqPage';
import AboutPage from './pages/About';
import CareersPage from './pages/Careers';
import TrackShipment from './components/TrackShipment';
import TrackingResults from './pages/TrackingResults';
import QuotationPage from './pages/Quotation';
import EcommercerPage from './pages/Ecommerce';

// === UPDATED SERVICES IMPORTS ===
import AllServicesPage from './pages/AllServices';
import ServiceDetailPage from './pages/ServiceDetailPage'; 
import SecureMailPage from './pages/Mail';
import SecureDocsPage from './pages/SecureDocs';
import SecureIDPage from './pages/SecureID';
import GovInstitutionalPage from './pages/Govt';
import DownloadAppPage from './pages/Download';
import ShipmentTimeline from './pages/ShipmentTimeline';
import ProofOfDelivery from './pages/ProofOfDelivery';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(
    !sessionStorage.getItem("introPlayed")
  );
  useEffect(() => {

    if (!loading) return;
  
    const timer = setTimeout(() => {
  
      sessionStorage.setItem("introPlayed", "true");
  
      setLoading(false);
  
    }, 3000);
  
    return () => clearTimeout(timer);
  
  }, [loading]);
  
  
  return (
    <>
      {loading && <LogoLoader />}
    <Router>
      <ScrollToTop />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/domestic-courier" element={<DomesticCourierPage />} />
          <Route path="/international-courier" element={<InternationalCourierPage />} />
          <Route path="/freight-courier" element={<FreightCourierPage/>} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/blog/:id" element={<BlogDetailPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/quotation" element={<QuotationPage />} />
          <Route path="/track" element={<TrackShipment />} />
          <Route path="/trackresults" element={<TrackingResults />} />
          <Route path="/ecommerce" element={<EcommercerPage />} />

          {/* === FIXED DYNAMIC ROUTES === */}
          <Route path="/all-services" element={<AllServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/secure-mail" element={<SecureMailPage />} />
          <Route path="/secure-docs" element={<SecureDocsPage/>} />
          <Route path="/secure-id" element={<SecureIDPage/>} />
          <Route path="/secure-gov" element={<GovInstitutionalPage/>} />
          <Route path="/download" element={<DownloadAppPage/>} />
          <Route path="/shipment-timeline" element={<ShipmentTimeline />} />
          <Route path="/proof-of-delivery" element={<ProofOfDelivery />} />
        </Routes>
      </main>
    </Router>
    </>
  );
}

export default App;