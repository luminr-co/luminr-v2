import { ProcessEntity } from "../../../domain/entities/ProcessEntity";
import { ProcessComponent } from "./ProcessComponent";

interface IProcessList {
  processes: ProcessEntity[];
}

export default function ProcessList({ processes }: IProcessList) {
  return (
    <>
      <section className="flex flex-col lg:gap-12 gap-4 justify-center items-center">
        {processes.map((process, i) => (
          <ProcessComponent process={process} key={i} />
        ))}
      </section>
    </>
  );
}
