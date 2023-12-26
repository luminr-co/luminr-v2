import PricingComponent from "./PricingComponent";
import PricingEntity from "../../../../domain/entities/PricingEntity";

interface Props {
  pricingPlans: PricingEntity[];
}
export default function PricingPlans({ pricingPlans }: Props) {
  return (
    <div className="flex flex-row gap-11 justify-center items-center mx-auto " id="packages">
      {pricingPlans.map((pricing) => (
        <PricingComponent pricing={pricing} />
      ))}
    </div>
  );
}
