import DomesticHero from "../components/DomesticCourierPage";
import GlobalFreightSection from "../components/GlobalFreightSection";
import ServiceDetails from "../components/ServiceDetails";
import ValueAddedServices from "../components/ValueAddedServices";

export default function DomesticCourierPage() {
  return (
    <main className="bg-white">
      {/* 1. New Hero with Van Image */}
      <DomesticHero />

      {/* 2. Global Freight Cards (Express vs International) */}
      <GlobalFreightSection />

      {/* 3. Reusing the Advantage Section */}
      <ValueAddedServices/>
      <ServiceDetails/>
    </main>
  );
}