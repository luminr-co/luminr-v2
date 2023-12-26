import { ServiceEntity } from "../../../../../../core/domain/entities/ServiceEntity"
import { ServiceComponent } from "../ServiceComponent";

interface Props{
    services : ServiceEntity[];
}

export default function ServiceList({services}: Props) {
  return (
    <div className="flex flex-col gap-80">
        {services.map((service)=>(
            <ServiceComponent service={service}/>
        ))}
    </div>
  )
}
