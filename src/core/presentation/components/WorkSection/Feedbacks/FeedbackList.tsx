import { FeedbackEntity } from "../../../../domain/entities/FeedbackEntity";
import FeedbackComponent from "./FeedbackComponent";

interface Props {
  variant?: "primary" | "secondary";
}

export default function FeedbackList({ variant }: Props) {
  const feedbacks: FeedbackEntity[] = [
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consectetur adipiscing elit, sed do eiusmod tempor incididunt”",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consectetur adipiscing elit, sed do eiusmod tempor incididunt”",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consectetur adipiscing elit, sed do eiusmod tempor incididunt”",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
    {
      feedback:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consectetur adipiscing elit, sed do eiusmod tempor incididunt”",
      name: "John Doe",
      profession: "CEO, Acme Inc.",
      image: "../../assets/images/WorkSection/Feedback/personImage.jpg",
    },
  ];
  return (
    <div className="container mx-auto">
      {variant == "primary" && (
        <div className="overflow-x-hidden w-full pt-4" id="testimonials">
          <div className=" overflow-x-scroll no-scrollbar">
            <div className=" flex flex-row overflow-x-scroll no-scrollbar">
              {feedbacks.map((feedback) => (
                <FeedbackComponent feedbackCard={feedback} variant="primary" />
              ))}
            </div>
          </div>
        </div>
      )}
      {variant == "secondary" && (
        <div
          className="lg:overflow-x-hidden w-full lg:px-24 px-5"
          id="testimonials"
        >
          <div className="flex lg:flex-row flex-col gap-6">
            {feedbacks.map((feedback) => (
              <FeedbackComponent feedbackCard={feedback} variant="secondary" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
