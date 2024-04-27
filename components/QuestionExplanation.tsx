import { Explanation } from "@/domain/Explanation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const QuestionExplanation = ({
  explanation,
  nextQuestion,
  isLast,
}: {
  explanation: Explanation;
  nextQuestion: () => void;
  isLast: boolean;
}) => {
  return (
    <div className={"flex h-screen w-screen items-center justify-center"}>
      <div className={"space-y-6"}>
        <div className={"text-center text-lg "}>{explanation.content}</div>
        <div className={"flex items-center justify-center gap-2"}>
          <Button
            className={"bg-[#2D2453] text-white hover:bg-[#2D2453]"}
            asChild
          >
            <Link href={explanation.knowMore} target={"_blank"}>
              En savoir plus
            </Link>
          </Button>
          <Button
            className={"bg-[#2D2453] text-white hover:bg-[#2D2453]"}
            onClick={() => nextQuestion()}
          >
            {isLast ? "Voir mes résultats" : "Question suivante"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default QuestionExplanation;
