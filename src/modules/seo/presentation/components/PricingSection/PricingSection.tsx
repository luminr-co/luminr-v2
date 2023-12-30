import SectionHeader from "../../../../home/presentation/components/SectionHeader/SectionHeader";
import PricingPlanSeo from "./PricingPlanSeo";

export default function PricingSection() {
  

  return (
    <section className="lg:pt-56 pt-20 mb-8 lg:px-32 px-7" id="packages">
      <SectionHeader sectionName="pricing" />
      <h1 className="lg:text-5xl text-2xl font-extrabold font-primary text-beige text-center lg:px-72 ">
        Growth Plans for Everyone
      </h1>
      <p className="mt-2 mb-12 lg:mb-20 font-secondary lg:text-2xl text-base font-normal text-beige text-center lg:px-0 ">
        All prices are based on the complexity of the projects
      </p>
      <PricingPlanSeo/>
    </section>
  );
}
