import { useState } from "react";
import { twMerge } from "tailwind-merge";
export default function ToggleButton() {
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
    <div className="flex flex-row border-8 border-orange gap-0 justify-between rounded-xl w-min mx-auto mb-24">
      <button
        className={twMerge(
          "px-4 py-2 font-bold text-3xl text-beige text-center w-48",
          isActiveWebsite && "bg-orange"
        )}
        onClick={handleWebsiteClick}
      >
        WEBSITE
      </button>
      <button
        className={twMerge(
          "px-4 py-2 font-bold text-3xl text-beige text-center w-48",
          isActiveSEO && "bg-orange"
        )}
        onClick={handleSEOClick}
      >
        SEO
      </button>
    </div>
  );
}
