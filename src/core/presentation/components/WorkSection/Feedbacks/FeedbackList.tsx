import { FeedbackEntity } from "../../../../domain/entities/FeedbackEntity";
import FeedbackComponent from "./FeedbackComponent";

interface Props {
  feedbacks: FeedbackEntity[];
  variant?: "primary" | "secondary";
}

export default function FeedbackList({ variant, feedbacks }: Props) {
  return (
   <>
   {
    variant == 'primary' && (
      <div className="overflow-x-hidden w-full pt-4" id="testimonials">
      <div className=" overflow-x-scroll no-scrollbar">
    <div className=" flex flex-row overflow-x-scroll no-scrollbar">
      {feedbacks.map((feedback) => (
        <FeedbackComponent feedbackCard={feedback} variant="primary"/>
      ))}
    </div>
    </div>
    </div>
    )
   }
   {
    variant=='secondary' && (
      <div className="overflow-x-hidden w-full px-24" id="testimonials">
      <div className="flex flex-row overflow-x-scroll">
    <div className=" flex flex-row overflow-x-scroll w-full">
      {feedbacks.map((feedback) => (
        <div className="min-w-[33.3333%]">
        <FeedbackComponent feedbackCard={feedback} variant="secondary"/>
        </div>
      ))}
    </div>
    </div>
    </div>
    )
   }
   </>
  );
}
