import { FeedbackEntity } from "../../../../domain/entities/FeedbackEntity";

interface Props {
  feedbackCard: FeedbackEntity;
  variant?: "primary" | "secondary";
}

export default function FeedbackComponent({ feedbackCard, variant }: Props) {
  return (
    <>
      {variant == "primary" && (
        <div className="lg:px-56 px-5 min-w-full">
          <div className="lg:px-28 p-6 lg:py-14 rounded-xl bg-beige font-secondary text-black flex flex-col items-center  lg:gap-14 gap-6  object-cover min-w-full">
            <p className="lg:text-2xl text-base font-normal text-center">{feedbackCard.feedback}</p>
            <div className="flex flex-col justify-center gap-4">
              <img
                src={feedbackCard.image}
                className="lg:w-28 lg:h-28 w-24 h-24 rounded-full"
              />

              <p className="lg:text-2xl text-base font-bold mt-1">{feedbackCard.name}</p>
              <p className="lg:text-base text-xs font-medium">{feedbackCard.profession}</p>
            </div>
          </div>
        </div>
      )}
      {variant == "secondary" && (
        <div className="p-6 rounded-xl bg-beige font-secondary text-black flex lg:flex-col flex-col-reverse items-center lg:items-start lg:justify-start gap-4 lg:mr-6 lg:h-[32.625rem]">
           <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center gap-4">
            <img src={feedbackCard.image} className="w-28 h-28 rounded-full" />
            <div className="flex flex-col ">
              <p className="lg:text-2xl text-base font-bold mt-1">{feedbackCard.name}</p>
              <p className="lg:text-base font-medium text-xs">{feedbackCard.profession}</p>
            </div>
            </div>
          <p className="lg:text-2xl text-base font-normal lg:text-left text-center">{feedbackCard.feedback}</p>
        
          
        </div>
      )}
    </>
  );
}
