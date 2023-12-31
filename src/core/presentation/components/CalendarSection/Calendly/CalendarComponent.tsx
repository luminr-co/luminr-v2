/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal.ns["30min"]("ui", {
        styles: { branding: { brandColor: "#DB6332" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <> 
    <div className=" h-fit lg:w-full">
      <Cal
        namespace="30min"
        calLink="samriddhi-paudel/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
      </div>
    </>
  );
}
