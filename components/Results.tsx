import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Question } from "@/domain/Question";

const Results = ({
  score,
  questions,
}: {
  score: number;
  questions: Question[];
}) => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 pb-4 pt-8 md:pt-16"
      style={{
        backgroundImage: `url('/spotlight.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={"space-y-8"}>
        <div className={"max-w-sm rounded-xl bg-white p-3"}>
          <div className={"h-[355px] w-full rounded-lg bg-[#0C0A2D]"}>
            <Image
              src={"/valerie-1.png"}
              className={"mix-blend-luminosity"}
              alt={"Personnage du résultat"}
              width={356}
              height={388}
            />
          </div>
          <div className={"mt-4 grid grid-cols-3 items-end"}>
            <div className={""}></div>
            <div
              className={"mb-2 text-center text-xs uppercase text-[#1C0156]"}
            >
              Vous êtes
            </div>
            <div
              className={
                "ml-auto inline-block h-fit w-fit rounded-full border border-red-500 px-3 py-1 text-red-500"
              }
            >
              {score} / {questions.length}
            </div>
          </div>

          <div className={"text-center text-xl font-bold text-[#1C0156]"}>
            Valérie Masson-Delmotte
          </div>
          <div className={"mb-6 text-center text-[#7D7C7E]"}>
            Soit vous êtes un auteur du GIEC, soit vous avez lu l’intégralité
            des articles sur Bon Pote : Merci et Bravo
          </div>
        </div>
        <div className={"flex justify-center"}>
          <Button
            asChild
            className={"min-w-44 bg-[#36059E] hover:bg-[#36059E]"}
          >
            <Link href={"https://google.com"}>Partager</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
