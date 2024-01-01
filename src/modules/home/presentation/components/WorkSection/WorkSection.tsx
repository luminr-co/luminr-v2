import { SliderEntity } from "@/core/domain/entities/SliderEntity";

import tiggImage from "@/core/presentation/assets/images/work/tiggapp.webp";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import { Slider } from "@/core/presentation/components/Slider";

export default function WorkSection() {
  const works: SliderEntity[] = [
    {
      image: tiggImage,
    },
  ];

  return (
    <SectionContainer
      id="work"
      sectionName="WORK"
      sectionTitle="Some Brands We've Transformed Digitally"
    >
      <Slider sliders={works} />
    </SectionContainer>
  );
}
