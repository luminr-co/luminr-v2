import PricingComponent from "../../../../../core/presentation/components/PricingSection/PricingComponent/PricingComponent";
import PricingEntity from "../../../../../core/domain/entities/PricingEntity";

export default function PricingPlansWeb() {
  const pricingPlans: PricingEntity[] = [
    {
      title: "Starter",
      subTitle:
        "Great for brands that are just launching with limited capital and low time.",
      features: [
        "Single Page ",
        "DIY/DWY/DFY Copywriting approach",
        "Hassle Free Process",
        "Uniquely tailored to your brand",
        "Uniquely tailored to your brand",
      ],
      height: "primary",
      variant: "white",
    },
    {
      title: "Growth",
      subTitle:
        "Great for brands with diverse needs and a wide array of content.",
      features: [
        "Multiple Pages",
        "Custom Illustration",
        "DIY/DWY/DFY Copywriting approach",
        "Hassle Free Process",
        "Uniquely tailored to your brand",
        "12-14 days turnaround time.",
      ],
      variant: "orange",
      height: "primary",
    },
  ];
  return (
    <>
      <div
        className="flex lg:flex-row flex-col lg:gap-11 gap-14 justify-center items-center mx-6 lg:mx-8 items-stretch"
        id="packages"
      >
        {pricingPlans.map((pricing) => (
          <PricingComponent pricing={pricing} />
        ))}
      </div>
    </>
  );
}
