import { ServiceEntity } from "../../../../../core/domain/entities/ServiceEntity";
import AudienceImage from "../../assets/images/BenefitSection/AudienceImage";
import BrandInfluence from "../../assets/images/BenefitSection/BrandInfluence";
import CoreBusinessImage from "../../assets/images/BenefitSection/CoreBusinessImage";
import SectionHeader from "../SectionHeader/SectionHeader";
import BenefitList from "../../../../../core/presentation/components/BenefitList/BenefitList";

export default function BenefitSection() {
  const benefits: ServiceEntity[] = [
    {
      title: "Focus on Your Core Business",
      description:
        "Reclaim your time by letting us handle landing page development, product creation, and SEO intricacies.",
      image: <CoreBusinessImage />,
    },
    {
      title: "Captivate Your Audience",
      description:
        "Our expert team tailors designs beyond templates, ensuring a visually appealing, user-friendly online presence that captures and retains your customers.",
      image: <AudienceImage />,
    },
    {
      title: "Amplify Your Brand's Influence",
      description:
        "We go beyond services, crafting a holistic online experience that resonates with your audience, making your brand memorable and influential.",
      image: <BrandInfluence />,
    },
  ];

  return (
    <div className="xl:px-40 px-5 lg:pt-32 mb-32 container mx-auto" id="benefits">
      <SectionHeader sectionName="benefits" />
      <h1 className="lg:text-5xl text-2xl font-extrabold font-primary text-beige text-center lg:mb-4 mb-10 px-24">
        <span className="text-orange"> Skyrocket Your Business: </span>
        Let's Craft Your Digital Success Together
      </h1>
      <BenefitList benefits={benefits} />
    </div>
  );
}
