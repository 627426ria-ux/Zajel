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

function App() {
  return (
    <Router>
      {/* 1. GLOBAL NAVBAR */}
      {/* Placed here, it renders once and stays visible across all route changes */}
      <Navbar />
      
      {/* 2. PAGE CONTENT */}
      {/* Wrapped in a main tag for semantic HTML structure */}
      <main>
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Domestic Courier Page Route */}
          <Route path="/domestic-courier" element={<DomesticCourierPage />} />

          {/* International Courier Page Route */}
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



        </Routes>
      </main>
    </Router>
  );
}

export default App;