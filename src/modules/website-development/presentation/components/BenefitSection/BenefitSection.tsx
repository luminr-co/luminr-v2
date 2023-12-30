import { ServiceEntity } from "../../../../../core/domain/entities/ServiceEntity";
import { BenefitList } from "../../../../../core/presentation/components/BenefitList";
import SectionHeader from "../../../../home/presentation/components/SectionHeader/SectionHeader";
import ExpertQuality from "../../assets/images/BenefitSection/ExpertQuality";
import LongTermValue from "../../assets/images/BenefitSection/LongTermValue";
import UnmatchedCustomization from "../../assets/images/BenefitSection/UnmatchedCustomization";
import { Button } from "../../../../../core/presentation/components/Button";
import CallIcon from "../../../../../core/presentation/assets/icons/CallIcon";

export default function BenefitSection() {
  const benefits: ServiceEntity[] = [
    {
      image: <UnmatchedCustomization />,
      title: "Unmatched Customization",
      description: "Tailored, unique designs surpass DIY platforms.",
    },
    {
      image: <ExpertQuality />,
      title: "Expert Quality",
      description: "Pro-level, bug-free, responsive websites.",
    },
    {
      image: <LongTermValue />,
      title: "Long-term Value",
      description: "Future-proof, better ROI than quick DIY.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center lg:px-64 px-6">
      <SectionHeader sectionName="benefits" />
      <h1
        className="lg:text-5xl text-2xl font-extrabold text-beige text-center mb-4"
        id="benefits"
      >
        Why Luminr Will Be Your Guide to Success
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
