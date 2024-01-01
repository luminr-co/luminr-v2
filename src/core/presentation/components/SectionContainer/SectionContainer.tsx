import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  sectionName: string;
  sectionTitle: React.ReactNode;
  id: string;
}

export default function SectionContainer({
  sectionName,
  sectionTitle,
  children,
  id
}: Props) {
  return (
    <>
      <div id={id}></div>
      <section className="px-8 py-16 container mx-auto">
        <div>
          <h2 className="lg:text-2xl text-sm font-medium text-gray text-center mb-4 uppercase">
            {sectionName}
          </h2>
          <h3 className="lg:text-5xl text-2xl font-extrabold font-primary text-beige text-center lg:mb-4 mb-10 px-24">
            {sectionTitle}
          </h3>
        </div>

        <div className="mt-16">{children}</div>
      </section>
    </>
  );
}
