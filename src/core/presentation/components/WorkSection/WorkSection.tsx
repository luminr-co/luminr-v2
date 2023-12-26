import SectionHeader from "../../../../modules/home/presentation/components/SectionHeader/SectionHeader";
import { FeedbackEntity } from "../../../domain/entities/FeedbackEntity";
import { SliderEntity } from "../../../domain/entities/SliderEntity";
import { FeedbackList } from "./Feedbacks";
import Sliders from "./SliderComponent/Sliders";

import { ToggleButton } from "../ToggleButton";

export default function WorkSection() {
  const feedbacks: FeedbackEntity[] = [
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consectetur adipiscing elit, sed do eiusmod tempor incididunt”",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consectetur adipiscing elit, sed do eiusmod tempor incididunt”",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consectetur adipiscing elit, sed do eiusmod tempor incididunt”",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consectetur adipiscing elit, sed do eiusmod tempor incididunt”",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
  ];

  const sliders: SliderEntity[] = [
    {
      image: "",
    },
    {
      image: "",
    },
    {
      image: "",
    },
    {
      image: "",
    },
  ];

  return (
    <section className=" pt-32" id="work">
      <SectionHeader sectionName="work" />
      <h1 className="text-5xl font-extrabold font-primary text-beige text-center mb-9">
        Some Brands We've Transformed Digitally
      </h1>
      <ToggleButton />
      <Sliders sliders={sliders} />
      <FeedbackList feedbacks={feedbacks} variant="primary" />
    </section>
  );
}
