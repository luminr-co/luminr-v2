import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import PricingPlansWeb from "./PricingPlansWeb";

export default function PricingSection() {
  return (
    <SectionContainer
      id="pricing"
      sectionName="PRICING"
      sectionTitle={
        <>
          Growth Plans for
          <span className="text-orange"> Everyone</span>
        </>
      }
    >
      <PricingPlansWeb />
    </SectionContainer>
  );
}
