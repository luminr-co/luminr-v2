import Image from "../../assets/images/GuaranteeSection/guaranteeImage.png";

export default function GuaranteeSection() {
  return (
    <section className="lg:py-44 py-24 flex flex-col justify-center items-center">
      <img src={Image} alt="error loading the image" className="w-52 h-52 lg:w-auto lg:h-auto" />
      <h1 className="lg:text-5xl text-2xl font-extrabold font-primary text-beige text-center lg:px-96 px-6 lg:mt-12 mt-6">
        We guarantee higher traffic or we’ll{" "}
        <span className="text-orange">continue to work</span>
      </h1>
    </section>
  );
}
