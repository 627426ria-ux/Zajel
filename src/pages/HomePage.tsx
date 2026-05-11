import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServiceSection";
import AdvantageSection from "../components/Advantage";
import TrustedMarquee from "../components/TrustedMarquee";
import AppDownloadSection from "../components/AppDownloadSection";
import TrustedSection from "../components/TrustedSection";
import StorySection from "../components/StorySection";
import ZajelFooter from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AdvantageSection />
      <TrustedMarquee />
      <AppDownloadSection />
      <TrustedSection />
      <StorySection />
      <ZajelFooter/>
    </main>
  );
}