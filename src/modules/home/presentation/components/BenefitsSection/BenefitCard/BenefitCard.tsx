import { ServiceEntity } from "../../../../../../core/domain/entities/ServiceEntity"

interface Props{
    benefit: ServiceEntity,
}

export default function BenefitCard({benefit}:Props) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-beige font-secondary w-96 text-center">
        <div className="h-60">{benefit.image}</div>
        <h2 className="text-3xl font-medium">{benefit.title}</h2>
        <p className="text-2xl font-light">{benefit.description}</p>
    </div>
  )
}
 