import { FeedbackList } from "@/core/presentation/components/Feedbacks";
import { FeedbackEntity } from "../../../../../core/domain/entities/FeedbackEntity";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function TestimonialSection() {
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
    <SectionContainer
      id="testimonials"
      sectionName="TESTIMONIALS"
      sectionTitle={<>Trusted by Founders and Industry Leaders</>}
    >
      <FeedbackList variant="secondary" feedbacks={feedbacks} />
    </SectionContainer>
  );
}
