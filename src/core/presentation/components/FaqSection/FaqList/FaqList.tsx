import { FaqEntity } from "../../../../domain/entities/FaqEntity";
import FaqComponent from "./FaqComponent";

interface Props {
  faqList: FaqEntity[];
}
export default function FaqList({ faqList }: Props) {
  return (
    <div className="flex flex-col gap-6 px-72">
      {faqList.map((faq) => (
        <FaqComponent faq={faq} />
      ))}
    </div>
  );
}
