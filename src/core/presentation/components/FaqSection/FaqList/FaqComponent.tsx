import { useState } from "react";
import { FaqEntity } from "../../../../domain/entities/FaqEntity";
import AddIcon from "../../../assets/icons/AddIcon";
import { twMerge } from "tailwind-merge";

interface Props {
  faq: FaqEntity;
}

export default function FaqComponent({ faq }: Props) {
  const [isAnswerVisible, setAnswerVisible] = useState(false);

  const handleAnswerVisibility = () => {
    setAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="border-4 border-beige rounded-xl py-6 px-8 gap-5">
      <div className="flex flex-row justify-between items-center">
        <p className="text-beige text-2xl font-normal">{faq.question}</p>
        <button
          onClick={handleAnswerVisibility}
          className={twMerge(
            "bg-beige p-2 rounded-full w-fit ml-1",
            isAnswerVisible ? "rotate-45" : ""
          )}
        >
          <AddIcon />
        </button>
      </div>
      {isAnswerVisible && (
        <p className="text-2xl font-normal text-gray mt-4">{faq.answer}</p>
      )}
    </div>
  );
}
