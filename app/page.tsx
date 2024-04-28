// @ts-nocheck

import Game from "@/components/Game";
import { fetchCategories, fetchQuestions } from "@/lib/data";
import Category from "@/domain/Category";
import { Question } from "@/domain/Question";

export default async function App() {
  const categoriesData = await fetchCategories();
  const questionsData = await fetchQuestions();

  const categories: Category[] = categoriesData.results.map((result) => ({
    title: result.properties["Nom"].title[0].plain_text,
    emoji: result.properties["Emoji"].url,
  }));

  const questions: Question[] = questionsData.results.map((result) => ({
    title: result.properties["Question"].title[0].text.content,
    category: categories[result.properties["Catégorie"].select.name - 1],
    explanation: {
      content: result.properties["Contenu explication"].rich_text[0].plain_text,
      knowMore: result.properties["Lien explication"].url,
    },
    answers: [1, 2, 3, 4].map((index) => ({
      title: result.properties[`Réponse ${index}`].rich_text[0].plain_text,
      isRight:
        parseInt(result.properties["Bonne réponse"].select.name) === index,
    })),
  }));

  return <Game questions={questions} categories={categories} />;
}
