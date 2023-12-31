import { CalendarSection } from "../../../core/presentation/components/CalendarSection";
import { FaqSection } from "../../../core/presentation/components/FaqSection";
import { Footer } from "../../../core/presentation/components/Footer";
import PricingSection from "../../../core/presentation/components/PricingSection/PricingSection";
import { WorkSection } from "../../../core/presentation/components/WorkSection";
import { BenefitSection } from "./components/BenefitsSection";
import { HeroSection } from "./components/HeroSection";
import ServiceSection from "./components/ServicesSection/ServiceSection";

export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <ServiceSection />
      <BenefitSection />
      <WorkSection />
      <PricingSection />
      <FaqSection />
      <CalendarSection />
      <Footer />
    </div>
  );
}
