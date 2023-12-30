import { ServiceEntity } from "../../../../../../core/domain/entities/ServiceEntity"
import { ServiceComponent } from "../ServiceComponent";

interface Props{
    services : ServiceEntity[];
}

export default function ServiceList({services}: Props) {
  return (
    <div className="flex flex-col lg:gap-80 gap-12">
        {services.map((service)=>(
            <ServiceComponent service={service}/>
        ))}
    </div>
  )
}
