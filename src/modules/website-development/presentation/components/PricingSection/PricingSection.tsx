import SectionHeader from "../../../../home/presentation/components/SectionHeader/SectionHeader";
import PricingPlansWeb from "./PricingPlansWeb";
export default function PricingSection() {
  return (
    <section className="lg:pt-56 pt-36 lg:mb-8 " id="pricing">
      <SectionHeader sectionName="pricing" />
      <h1 className="lg:text-5xl text-2xl font-extrabold font-primary text-beige text-center mb-4 lg:px-72">
        Growth Plans for
        <span className="text-orange"> Everyone</span>
      </h1>
      <p className="mt-2 lg:mb-20 mb-10 font-secondary lg:text-2xl text-base font-normal text-beige text-center">
        All prices are based on the complexity of the projects
      </p>
      <PricingPlansWeb />
    </section>
  )
}
