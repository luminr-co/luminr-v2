import PricingEntity from "../../../../domain/entities/PricingEntity";
import { Button } from "../../Button";
import TickIcon from "../../../assets/icons/TickIcon";
import { twMerge } from "tailwind-merge";

interface Props {
  pricing: PricingEntity;
}

export default function PricingComponent({
  pricing
}: Props) {
  return (
    <div
      className={twMerge(
        "flex flex-col border-4 rounded-xl border-beige p-8 h-[46.875rem] text-beige gap-8 w-1/3 relative",
        pricing.variant == "orange" && "border-orange"
      )}
    >
        <div className="flex flex-row items-center justify-center">
        {
            pricing.variant=='orange' && (
                <div className="text-beige text-base font-bold bg-orange px-4 py-3 w-fit absolute rounded -translate-y-8 ">
                    Best Value
                </div>
            )
        }
        </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-secondary text-4xl font-bold">{pricing.title}</h1>
        <p className="text-gray text-xl font-normal">{pricing.subTitle}</p>
        <hr className="h-px mb-8 mt-4 bg-gray border-0 bg-opacity-20"></hr>
      </div>

      <div className="flex flex-col gap-6">
        {pricing.features.map((feature) => (
          <div className="flex flex-row gap-2">
            <span>
              <TickIcon />
            </span>
            <p className="text-xl font-normal">{feature}</p>
          </div>
        ))}
      </div>
      <Button className="w-full">Explore Plan</Button>
    </div>
  );
}
