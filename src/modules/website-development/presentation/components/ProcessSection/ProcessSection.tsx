import { ProcessEntity } from "../../../../../core/domain/entities/ProcessEntity";
import { ProcessList } from "../../../../../core/presentation/components/ProcessList";
import SectionHeader from "../../../../home/presentation/components/SectionHeader/SectionHeader";
import ContentWriting from "../../../../../core/presentation/assets/images/ProcessSection/ContentWriting";
import Development from "../../../../../core/presentation/assets/images/ProcessSection/Development";
import DiscoveryCall from "../../assets/images/ProcessSection/DiscoveryCall";
import HandOff from "../../assets/images/ProcessSection/HandOff";
import HighFidelity from "../../assets/images/ProcessSection/HighFidelity";
import Onboarding from "../../assets/images/ProcessSection/Onboarding";
import { NumberingSection } from "../NumberingSection";

export default function ProcessSection() {
  const processlist: ProcessEntity[] = [
    {
      image: <DiscoveryCall />,
      title: "Discovery Call",
      description:
        "We hop on a call with you and gain an insight on your requirements and scope of work.",
      time: "30 minutes",
    },
    {
      image: <Onboarding />,
      title: "Onboarding",
      description:
        "We invite you to our communication channel and make you familiar with the process and set clear expectations moving forward.",
      time: "30 minutes",
    },
    {
      image: <ContentWriting />,
      title: "Content Writing and Wireframing",
      description:
        "We gather assets to help clear how you want the website’s design direction to be like. We also create low to mid fidelity wireframes. We have a DIY/DWY/DFY approach when it comes to content creation.",
      time: "30 minutes",
    },
    {
      image: <HighFidelity />,
      title: "High Fidelity Design",
      description:
        "High Fidelity Designs are created that communicate your business’s value and mission.",
      time: "30 minutes",
    },
    {
      image: <Development />,
      title: "Development",
      description:
        "High Fidelity Designs are converted into working product that you can show off to the world.",
      time: "30 minutes",
    },
    {
      image: <HandOff />,
      title: "Hand Off",
      description: "We give yo",
      time: "30 minutes",
    },
  ];
  return (
    <section className="lg:px-56 px-5 lg:pt-32 pt-40">
      <SectionHeader sectionName="process" />
      <h1 className="lg:text-5xl text-2xl font-extrabold text-beige text-center lg:mb-40 mb-10">
        At Luminr, We Have Well Defined Processes to Help You Save Time and
        Focus on Your Business
      </h1>
      <div className="flex flex-row gap-14 items-center">
        <div className="hidden lg:inline-block">
        <NumberingSection />
        </div>
        <div className="flex justify-center">
          <ProcessList processes={processlist} />
        </div>
      </div>
    </section>
  );
}
