import { twMerge } from "tailwind-merge";
import { Button } from "../../../../../../core/presentation/components/Button";
import { ServiceEntity } from "../../../../../../core/domain/entities/ServiceEntity";

export interface ServiceComponentProps {
  service: ServiceEntity;
}

export default function ServiceComponent({ service }: ServiceComponentProps) {
  return (
    <>
      <section
        className={twMerge(
          " text-beige flex flex-row items-center max-w-full justify-between",
          service.variant == "imgLeft" && "flex-row-reverse gap-28"
        )}
      >
        <div className="flex flex-col gap-6">
            <div className="">
          <h2 className="text-5xl font-extrabold font-primary mb-2">
            {service.title}
          </h2>
          <p className="font-secondary text-2xl font-normal ">
            {service.description}
          </p>
          </div>
          <Button className="py-4 px-8">Learn More</Button>
        </div>
        <div className="">{service.image}</div>
      </section>
    </>
  );
}
