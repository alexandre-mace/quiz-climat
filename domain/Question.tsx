import Tag from "@/domain/Tag";
import { Answer } from "@/domain/Answer";
import { Explanation } from "@/domain/Explanation";

type Question = {
  title: string;
  answers: Answer[];
  explanation: Explanation;
  tag: Tag;
};

export type { Question };
