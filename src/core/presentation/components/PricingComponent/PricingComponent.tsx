import PricingEntity from "../../../domain/entities/PricingEntity";
import { Button } from "../Button";
import TickIcon from "../../assets/icons/TickIcon";
import { twMerge } from "tailwind-merge";

interface Props {
  pricing: PricingEntity;
}

export default function PricingComponent({ pricing }: Props) {
  return (
    <>
      <div
        className={twMerge(
          `flex flex-col border-4 rounded-xl font-secondary border-beige lg:p-8 p-6 ${
            pricing.height == "primary" ? "lg:pb-44 pb-32" : "lg:pb-72 pb-32 "
          } text-beige gap-8 lg:w-1/3 relative`,
          pricing.variant == "orange" && "border-orange mt-3 lg:mt-0"
        )}
      >
        <div className="flex flex-row items-center justify-center ">
          {pricing.variant == "orange" && (
            <div className="text-beige text-base font-bold bg-orange px-4 py-3 w-fit absolute rounded lg:-translate-y-8 -translate-y-1/2 ">
              {pricing.height == "primary" && "Best Value"}
              {pricing.height == "secondary" && "Recommended"}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-secondary lg:text-4xl text-2xl font-bold">
            {pricing.title}
          </h1>
          <p className="text-gray lg:text-xl text-base font-normal">
            {pricing.subTitle}
          </p>
          <hr className="h-px lg:mb-8 mb-5 mt-4 bg-gray border-0 bg-opacity-20"></hr>
        </div>

        <div className="flex flex-col gap-6 min-h-80 flex-1">
          {pricing.features.map((feature, i) => (
            <div className="flex flex-row gap-2" key={i}>
              <span>
                <TickIcon />
              </span>
              <p className="lg:text-xl text-base font-normal">{feature}</p>
            </div>
          ))}
        </div>
        <Button className="w-full text-xl px-4 py-3 lg:py-5 lg:px-5 ">
          Explore Plan
        </Button>
      </div>
    </>
  );
}
