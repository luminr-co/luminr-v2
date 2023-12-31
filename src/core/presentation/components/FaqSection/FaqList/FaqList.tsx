import { FaqEntity } from "../../../../domain/entities/FaqEntity";
import FaqComponent from "./FaqComponent";

interface Props {
  faqList: FaqEntity[];
}
export default function FaqList({ faqList }: Props) {
  return (
    <div className="flex flex-col lg:gap-6 gap-4 lg:px-72 px-6">
      {faqList.map((faq, i) => (
        <FaqComponent faq={faq} key={i} />
      ))}
    </div>
  );
}
