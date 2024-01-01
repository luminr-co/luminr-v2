import Sliders from "../../../../../core/presentation/components/WorkSlider/SliderComponent/Sliders";
import { SliderEntity } from "../../../../../core/domain/entities/SliderEntity";
import SectionHeader from "../../../../home/presentation/components/SectionHeader/SectionHeader";

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
    <div className="lg:pt-32 pt-10 flex flex-col lg:gap-14 gap-4">
        <SectionHeader sectionName="work"/>
       <Sliders sliders={sliders}/> 
    </div>
  )
}
