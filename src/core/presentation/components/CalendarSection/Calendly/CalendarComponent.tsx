"use client";
/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

//@ts-ignore
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal.ns["discovery-call"]("ui", {
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
          namespace="discovery-call"
          calLink="luminr/discovery-call"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </>
  );
}
