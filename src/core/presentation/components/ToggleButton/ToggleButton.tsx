"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import PricingPlansWeb from "../../../../modules/website-development/presentation/components/PricingSection/PricingPlansWeb";
import PricingPlanSeo from "../../../../modules/seo/presentation/components/PricingSection/PricingPlanSeo";

interface Props {
  package?: boolean;
}

export default function ToggleButton({ package: isPackage }: Props) {
  const [isActiveWebsite, setActiveWebsite] = useState(true);
  const [isActiveSEO, setActiveSEO] = useState(false);

  const handleWebsiteClick = () => {
    setActiveWebsite(true);
    setActiveSEO(false);
  };

  const handleSEOClick = () => {
    setActiveWebsite(false);
    setActiveSEO(true);
  };
  return (
    <>
      <div className="flex flex-row lg:border-8 border-4 border-orange gap-0 justify-between rounded-xl w-min mx-auto mb-24">
        <button
          className={twMerge(
            "lg:px-4 lg:py-2 px-3 py-1 font-bold lg:text-3xl text-lg text-beige text-center lg:w-48 w-32",
            isActiveWebsite && "bg-orange"
          )}
          onClick={handleWebsiteClick}
        >
          WEBSITE
        </button>
        <button
          className={twMerge(
            "lg:px-4 lg:py-2 px-3 py-1 font-bold lg:text-3xl text-lg text-beige text-center lg:w-48 w-32",
            isActiveSEO && "bg-orange"
          )}
          onClick={handleSEOClick}
        >
          SEO
        </button>
      </div>

      {isPackage && isActiveWebsite && (
        <div className="mt-16 ">
          <PricingPlansWeb />
        </div>
      )}

      {isPackage && isActiveSEO && (
        <div className="mt-16 lg:mx-20 mx-6">
          <PricingPlanSeo />
        </div>
      )}
    </>
  );
}
