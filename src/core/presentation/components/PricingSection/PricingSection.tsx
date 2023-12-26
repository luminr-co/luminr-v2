import SectionHeader from "../../../../modules/home/presentation/components/SectionHeader/SectionHeader";
import PricingEntity from "../../../domain/entities/PricingEntity";
import { ToggleButton } from "../ToggleButton";
import PricingPlans from "./PricingComponent/PricingPlans";

export default function PricingSection() {
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
      variant: 'orange',
    },
  ];
  return (
    <section className="pt-56 mb-8 " id="pricing">
      <SectionHeader sectionName="pricing" />
      <h1 className="text-5xl font-extrabold font-primary text-beige text-center mb-12 px-72">
      Tailored Solutions for Every Startup: 
        <span className="text-orange"> Discover Your Perfect Package</span>
      </h1>
      <ToggleButton/>
      <PricingPlans pricingPlans={pricingPlans} />
    </section>
  );
}
