import { FeedbackEntity } from "../../../../../core/domain/entities/FeedbackEntity";
import { FeedbackList } from "../../../../../core/presentation/components/WorkSection/Feedbacks";
import SectionHeader from "../../../../home/presentation/components/SectionHeader/SectionHeader";

export default function Testimonials() {
  const feedbacks: FeedbackEntity[] = [
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
  ];
  return (
    <section className="lg:pt-52 pt-28">
      <SectionHeader sectionName="testimonials" />
      <h1 className="lg:text-5xl text-2xl font-extrabold text-beige text-center lg:mb-40 mb-10 px-5 lg:px-0">
        Trusted by Founders and Industry Leaders
      </h1>
      <div>
        <FeedbackList variant="secondary" feedbacks={feedbacks} />
      </div>
    </section>
  );
}
