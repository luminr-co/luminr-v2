import SectionHeader from "../../../../modules/home/presentation/components/SectionHeader/SectionHeader";
import { ToggleButton } from "../ToggleButton";

export default function PricingSection() {

  return (
    <section className="lg:pt-56 pt-36 mb-8 " id="pricing">
      <SectionHeader sectionName="pricing" />
      <h1 className="lg:text-5xl text-2xl font-extrabold font-primary text-beige text-center lg:mb-12 mb-4 px-6 lg:px-72">
        Tailored Solutions for Every Startup:
        <span className="text-orange"> Discover Your Perfect Package</span>
      </h1>
      <ToggleButton package={true}/>
      
    </section>
  );
}
