import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import PricingPlanSeo from "./PricingPlanSeo";

export default function PricingSection() {
  return (
    <SectionContainer
      id="pricing"
      sectionName="PRICING"
      sectionTitle="Growth Plans for Everyone"
    >
      <PricingPlanSeo />
    </SectionContainer>
  );
}
