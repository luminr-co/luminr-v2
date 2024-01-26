import { SliderEntity } from "@/core/domain/entities/SliderEntity";

import tiggImage from "@/core/presentation/assets/images/work/tiggapp.webp";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import { Slider } from "@/core/presentation/components/Slider";
import brandpark from "@/core/presentation/assets/images/work/brandpark.webp";
import vista_mails from "@/core/presentation/assets/images/work/vista-mails.webp";

export default function WorkSection() {
  const works: SliderEntity[] = [
    {
      image: vista_mails,
    },

    {
      image: brandpark,
    },

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
