import SectionHeader from "../../../../modules/home/presentation/components/SectionHeader/SectionHeader";
import { SliderEntity } from "../../../domain/entities/SliderEntity";
import Sliders from "./SliderComponent/Sliders";

import { ToggleButton } from "../ToggleButton";

export default function WorkSection() {

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
    <section className=" lg:pt-32" id="work">
      <SectionHeader sectionName="work" />
      <h1 className="lg:text-5xl text-2xl px-12 lg:px-0 font-extrabold font-primary text-beige text-center mb-9">
        Some Brands We've Transformed Digitally
      </h1>
      <ToggleButton />
      <Sliders sliders={sliders} />
    </section>
  );
}
