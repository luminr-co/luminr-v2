import { NumberEntity } from "../../../domain/entities/NumberEntity";
import { NumberingComponent } from "./NumberingComponent.tsx";

interface NumberingSectionProp {
  numbers: NumberEntity[];
}

export default function NumberingSection({ numbers }: NumberingSectionProp) {
  return (
    <div>
      {numbers.map((number) => (
        <NumberingComponent number={number} />
      ))}
    </div>
  );
}
