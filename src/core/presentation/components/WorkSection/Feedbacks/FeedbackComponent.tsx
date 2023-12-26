import { FeedbackEntity } from "../../../../domain/entities/FeedbackEntity";

interface Props {
  feedbackCard: FeedbackEntity;
  variant?: "primary" | "secondary";
}

export default function FeedbackComponent({ feedbackCard, variant }: Props) {
  return (
    <>
      {variant == "primary" && (
        <div className="px-56 min-w-full ">
          <div className="px-28 py-14 rounded-xl bg-beige font-secondary text-black flex flex-col items-center  gap-14 container object-cover min-w-full">
            <p className="text-2xl font-normal text-center">{feedbackCard.feedback}</p>
            <div className="flex flex-col justify-center gap-4">
              <img
                src={feedbackCard.image}
                className="w-28 h-28 rounded-full"
              />

              <p className="text-2xl font-bold mt-1">{feedbackCard.name}</p>
              <p className="text-base font-medium">{feedbackCard.profession}</p>
            </div>
          </div>
        </div>
      )}
      {variant == "secondary" && (
        <div className="p-6 rounded-xl bg-beige font-secondary text-black flex flex-col items-start justify-start gap-4 mr-6 h-[32.625rem]">
           <div className="flex flex-row justify-center gap-4">
            <img src={feedbackCard.image} className="w-28 h-28 rounded-full" />
            <div className="flex flex-col ">
              <p className="text-2xl font-bold mt-1">{feedbackCard.name}</p>
              <p className="text-base font-medium">{feedbackCard.profession}</p>
            </div>
            </div>
          <p className="text-2xl font-normal">{feedbackCard.feedback}</p>
        
          
        </div>
      )}
    </>
  );
}
