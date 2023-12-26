import SectionHeader from "../../../../modules/home/presentation/components/SectionHeader/SectionHeader";
import { FaqEntity } from "../../../domain/entities/FaqEntity";
import { FaqList } from "./FaqList";

export default function FaqSection() {
  const faq: FaqEntity[] = [
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
    <section id="faq" className="pt-52">
      <SectionHeader sectionName="faq" />
      <h1 className="text-5xl font-extrabold font-primary text-beige text-center mb-16 ">
        <span className="text-orange">Got Questions? </span>
        We Have Answers!
      </h1>
      <FaqList faqList={faq} />
    </section>
  );
}