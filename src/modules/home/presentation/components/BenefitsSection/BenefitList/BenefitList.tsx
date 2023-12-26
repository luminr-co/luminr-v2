import { ServiceEntity } from "../../../../../../core/domain/entities/ServiceEntity";
import { BenefitCard } from "../BenefitCard";

interface Props {
  benefits: ServiceEntity[];
}

export default function BenefitList({ benefits }: Props) {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-start">
      {benefits.map((benefit) => (
        <BenefitCard benefit={benefit} />
      ))}
    </div>
  );
}
