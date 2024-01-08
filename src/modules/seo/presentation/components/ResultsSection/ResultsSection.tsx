import Image from "next/image";
import seoImage from "../../assets/images/HeroSection/seoImage.png";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function ResultsSection() {
  return (
    <section className="px-6 lg:px-0">
    <SectionContainer
      id="results"
      sectionName="RESULTS"
      sectionTitle="40% increase in organical keywords, in just 30 days."
    >
      <div className="flex items-center justify-center">
      <Image
        src={seoImage}
        alt="Growth Chart"
        className="rounded-2xl"
        width={782}
        height={326}
      />

      </div>
    </SectionContainer>
    </section>
  );
}
