import { SliderEntity } from "@/core/domain/entities/SliderEntity";
import Image from "next/image";

interface Props {
  image: SliderEntity;
}

export default function SliderComponent({ image }: Props) {
  return (
    <div className="bg-white lg:h-[39.063rem] h-80 rounded-3xl px-16 pt-40">
      <Image src={image.image} alt="" width={600} height={625} className="w-full h-full shadow-2xl" />
    </div>
  );
}