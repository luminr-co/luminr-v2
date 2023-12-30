import SectionHeader from "../../../../home/presentation/components/SectionHeader/SectionHeader";
import seoImage from "../../assets/images/HeroSection/seoImage.png"

export default function ResultsSection() {
  return (
    <section className="flex flex-col justify-center lg:px-80 px-6 lg:pt-36 pt-16">
        <SectionHeader sectionName="results"/>
        <h1 className="lg:text-5xl text-2xl font-extrabold text-beige text-center lg:mb-8 mb-10 ">
        40% increase in organical keywords, in just 30 days.
      </h1>
      <img src={seoImage} className="rounded-2xl"/>

    </section>
  )
}
