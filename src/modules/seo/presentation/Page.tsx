import { CalendarSection } from "../../../core/presentation/components/CalendarSection";
import { FaqSection } from "../../../core/presentation/components/FaqSection";
import { Footer } from "../../../core/presentation/components/Footer";
import { PricingSectionSeo } from "./components/PricingSection";
import { BenefitSection } from "./components/BenefitSection";
import { HeroSection } from "./components/HeroSection";
import { ProcessSection } from "./components/ProcessSection";
import ResultsSection from "./components/ResultsSection/ResultsSection";
import { Testimonials } from "./components/Testimonials";
import { GuaranteeSection } from "./components/GuaranteeSection";

export default function SeoPage() {
  return (
    <>
      <div className="bg-black">
        <HeroSection />
        <ResultsSection />
        <BenefitSection />
        <ProcessSection />
        <Testimonials />
        <PricingSectionSeo />
        <FaqSection />
        <CalendarSection />
        <GuaranteeSection/>
        <Footer />
      </div>
    </>
  );
}
