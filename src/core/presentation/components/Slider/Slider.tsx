import { SliderEntity } from "@/core/domain/entities/SliderEntity";
import SliderComponent from "./SliderComponent";

interface Props {
  sliders: SliderEntity[];
}
export default function Slider({ sliders }: Props) {
  return (
    <div className="overflow-x-hidden">
      <div className="overflow-x-scroll no-scrollbar">
        <div className="flex flex-row overflow-x-scroll gap-6 no-scrollbar justify-center">
          {sliders.map((image, i) => (
            <div className="lg:min-w-[42%] min-w-[110%]" key={i}>
              <SliderComponent image={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
