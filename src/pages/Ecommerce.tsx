import EcommerceDetails from "../components/EcommerceBenefits";
import EcommerceHero from "../components/EcommerceHero";
import EcommerceSection from "../components/EcommerceService";
import Footer from "../components/Footer";
import RatesSection from "../components/RatesSection";


export default function EcommercerPage() {
  return (
    <main className="bg-white">
      {/* 1. New Hero with Van Image */}
      <EcommerceHero/>
      <EcommerceSection/>
      <EcommerceDetails/>
      <RatesSection/>
      <Footer/>
     
    </main>
  );
}