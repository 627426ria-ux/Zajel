import FreightHero from "../components/Freight Forwarding Services";
import GlobalFreightSection from "../components/GlobalFreightSection";
import InternationalDetails from "../components/InternationalDetails";
export default function FreightCourierPage() {
  return (
    <main className="bg-white">
      {/* 1. New Hero with Van Image */}
      <FreightHero />

      {/* 2. Global Freight Cards (Express vs International) */}
      <GlobalFreightSection />

      {/* 3. Reusing the Advantage Section */}
      <InternationalDetails/>
    </main>
  );
}