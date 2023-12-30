import { SliderEntity } from "../../../../domain/entities/SliderEntity"
import SliderComponent from "./SliderComponent";

interface Props{
    sliders : SliderEntity[];
}
export default function Sliders({sliders}:Props) {
  return (
    <div className="overflow-x-hidden lg:mb-56 mb-20">
    <div className="overflow-x-scroll no-scrollbar">
    <div className="flex flex-row overflow-x-scroll gap-6 no-scrollbar">
        {
            sliders.map((image)=>(
                <div className="lg:min-w-[42%] min-w-[110%]">
                <SliderComponent image={image}/>
                </div>
            ))
        }
    </div>
    </div>
    </div>
  )
}
