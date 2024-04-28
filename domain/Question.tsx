import { Answer } from "@/domain/Answer";
import { Explanation } from "@/domain/Explanation";
import Category from "@/domain/Category";

type Question = {
  title: string;
  answers: Answer[];
  explanation: Explanation;
  category: Category;
};

export type { Question };
