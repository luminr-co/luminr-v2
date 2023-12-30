import { CalendarSection } from "../../../core/presentation/components/CalendarSection";
import { FaqSection } from "../../../core/presentation/components/FaqSection";
import { Footer } from "../../../core/presentation/components/Footer";
import { PricingSectionWeb } from "./components/PricingSection";
import { BenefitSection } from "./components/BenefitSection";
import { HeroSection } from "./components/HeroSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { WorkSection } from "./components/WorkSection";

export default function WebsitePage() {
  return (
    <div className="bg-black max-w-full">
      <HeroSection />
      <WorkSection />
      <BenefitSection />
      <ProcessSection />
      <TestimonialSection />
      <PricingSectionWeb />
      <FaqSection />
      <CalendarSection />
      <Footer />
    </div>
  );
}
