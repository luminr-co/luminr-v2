import { ServiceEntity } from "../../../../../core/domain/entities/ServiceEntity";
import SectionHeader from "../../../../home/presentation/components/SectionHeader/SectionHeader";
import { BenefitList } from "../../../../../core/presentation/components/BenefitList";
import { Button } from "../../../../../core/presentation/components/Button";
import CallIcon from "../../../../../core/presentation/assets/icons/CallIcon";
import Tailored from "../../assets/images/BenefitSection/Tailored";
import DataDriven from "../../assets/images/BenefitSection/DataDriven";
import Ethical from "../../assets/images/BenefitSection/Ethical";

export default function BenefitSection() {
  const benefits: ServiceEntity[] = [
    {
      image: <Tailored />,
      title: "Unmatched Customization",
      description: "Tailored, unique designs surpass DIY platforms.",
    },
    {
      image: <DataDriven />,
      title: "Expert Quality",
      description: "Pro-level, bug-free, responsive websites.",
    },
    {
      image: <Ethical />,
      title: "Long-term Value",
      description: "Future-proof, better ROI than quick DIY.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center lg:px-64 px-6 lg:pt-48 pt-24">
      <SectionHeader sectionName="benefits" />
      <h1
        className="lg:text-5xl text-2xl font-extrabold text-beige text-center mb-8"
        id="benefits"
      >
        Get in front of users who are already searching for the products you
        sell
      </h1>
      <BenefitList benefits={benefits} />
      <Button className="flex flex-row gap-3 justify-center items-center text-beige font-secondary text-xl font-medium mt-16">
        <span>
          <CallIcon />
        </span>
        <p className="lg:text-xl text-sm">Book a Free Discovery Call</p>
      </Button>
    </div>
  );
}
