import { FAQEntity } from "@/core/domain/entities/FAQEntity";
import FAQList from "@/core/presentation/components/FAQList/FAQList";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function FAQSection() {
  const faq: FAQEntity[] = [
    {
      question: "What does the web development process entail?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam repudiandae. Illo, dolore hic? Placeat magnam pariatur qui aliquam, praesentium saepe eligendi, ullam blanditiis aut velit iste nulla ipsum quam.",
    },
    {
      question: "How long does it usually take to see SEO results?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam repudiandae. Illo, dolore hic? Placeat magnam pariatur qui aliquam, praesentium saepe eligendi, ullam blanditiis aut velit iste nulla ipsum quam.",
    },
    {
      question:
        " What level of customization is possible for web design packages?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam repudiandae. Illo, dolore hic? Placeat magnam pariatur qui aliquam, praesentium saepe eligendi, ullam blanditiis aut velit iste nulla ipsum quam.",
    },
    {
      question: "Can I switch between SEO packages if my needs change?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam repudiandae. Illo, dolore hic? Placeat magnam pariatur qui aliquam, praesentium saepe eligendi, ullam blanditiis aut velit iste nulla ipsum quam.",
    },
    {
      question:
        "How does e-commerce integration fit into your web development packages?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam repudiandae. Illo, dolore hic? Placeat magnam pariatur qui aliquam, praesentium saepe eligendi, ullam blanditiis aut velit iste nulla ipsum quam.",
    },
    {
      question: "What kind of reporting can I expect with your SEO packages?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam repudiandae. Illo, dolore hic? Placeat magnam pariatur qui aliquam, praesentium saepe eligendi, ullam blanditiis aut velit iste nulla ipsum quam.",
    },
  ];

  return (
    <SectionContainer
      id="faq"
      sectionName="FAQ"
      sectionTitle={
        <>
          <span className="text-orange">Got Questions? </span>
          We Have Answers!
        </>
      }
    >
      <FAQList faqList={faq} />
    </SectionContainer>
  );
}
