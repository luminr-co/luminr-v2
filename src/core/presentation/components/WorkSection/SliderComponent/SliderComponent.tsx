import { SliderEntity } from "../../../../domain/entities/SliderEntity";

interface Props {
  image: SliderEntity;
}

export default function ({ image }: Props) {
  return (
    <div className="bg-orange h-[39.063rem] rounded-3xl">
      <img src={image.image} />
    </div>
  );
}
