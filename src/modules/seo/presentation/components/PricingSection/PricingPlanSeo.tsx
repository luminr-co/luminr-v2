import PricingEntity from "../../../../../core/domain/entities/PricingEntity";
import PricingComponent from "../../../../../core/presentation/components/PricingComponent/PricingComponent";

export default function PricingPlanSeo() {
    const starter: PricingEntity = {
        title: "Starter",
        subTitle:
          "Great for brands that are just launching with limited capital and low time.",
        features: [
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
        ],
        height: "primary",
      };
      const growth: PricingEntity = {
        title: "Growth",
        subTitle:
          "Great for brands that are just launching with limited capital and low time.",
        features: [
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
        ],
        variant: "orange",
        height: "secondary",
      };
    
      const pro: PricingEntity = {
        title: "Pro",
        subTitle:
          "Great for brands that are just launching with limited capital and low time.",
        features: [
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
          "Lorem Ipsum dolor amit set.",
        ],
        height: "primary",
      };
  return (
    <div className="flex lg:flex-row flex-col lg:mx-auto lg:gap-10 gap-6 justify-between items-center">
    <PricingComponent pricing={starter} />
    
    <PricingComponent pricing={growth} />
  
    <PricingComponent pricing={pro} />
  </div>
  )
}
