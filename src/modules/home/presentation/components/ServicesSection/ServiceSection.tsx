import { ServiceEntity } from "../../../../../core/domain/entities/ServiceEntity";
import SeoServiceImage from "../../assets/images/ServiceSection/SeoServiceImage";
import WebServiceImage from "../../assets/images/ServiceSection/WebServiceImage";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ServiceList } from "./ServiceList";

export default function ServiceSection() {
  const services: ServiceEntity[] = [
    {
      title: "Web Design and Development",
      description:
        "Elevate your brand with captivating landing and product pages. Our Web Design focuses on seamless user experiences, creating visually stunning sites for enhanced engagement.",
      image: <WebServiceImage />,
      variant: "imgRight",
    },
    {
      title: "SEO for Shopify Stores",
      description:
        "Strategies tailored to the unique needs of e-commerce stores and optimize for higher search rankings, ensuring your products shine. ",
      image: <SeoServiceImage />,
      variant: "imgLeft",
    },
  ];
  return (
    <div
      className="px-28 bg-black py-40"
      id="services container font-secondary"
    >
      <SectionHeader sectionName="services" />
      <h1 className="text-5xl font-extrabold font-primary text-beige text-center mb-72">
        Refine Your Digital Presence:
        <span className="text-orange"> Web Design & SEO Specializations</span>
      </h1>
      <ServiceList services={services} />
    </div>
  );
}
