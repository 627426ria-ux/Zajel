import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Global Components
import Navbar from './components/Navbar';

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

function App() {
  return (
    <Router>
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
          
          {/* This route catches IDs like /services/standard-courier */}
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/secure-mail" element={<SecureMailPage />} />
          <Route path="/secure-docs" element={<SecureDocsPage/>} />
          <Route path="/secure-id" element={<SecureIDPage/>} />
          <Route path="/secure-gov" element={<GovInstitutionalPage/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;