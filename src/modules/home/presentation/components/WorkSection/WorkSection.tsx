import { SliderEntity } from "@/core/domain/entities/SliderEntity";

import tiggImage from "@/core/presentation/assets/images/work/tiggapp.webp";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import { Slider } from "@/core/presentation/components/Slider";
import brandpark from "@/core/presentation/assets/images/work/brandpark.png";
import chewybliss from "@/core/presentation/assets/images/work/chewybliss.png";

export default function WorkSection() {
  const works: SliderEntity[] = [
    {
      image: tiggImage,
    },
    {
      image: brandpark,
    },
    {
      image: chewybliss,
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
