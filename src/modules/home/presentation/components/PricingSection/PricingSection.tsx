import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import { ToggleButton } from "@/core/presentation/components/ToggleButton";

export default function PricingSection() {
  return (
    <SectionContainer
      id="pricing"
      sectionName="Pricing"
      sectionTitle={
        <>
          Tailored Solutions for Every Startup:
          <span className="text-orange"> Discover Your Perfect Package</span>
        </>
      }
    >
      <ToggleButton package={true} />
    </SectionContainer>
  );
}
