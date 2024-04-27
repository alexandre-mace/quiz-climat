"use client";

import { useState } from "react";
import {
  GAME_STATE_CATEGORY,
  GAME_STATE_HOME,
  GAME_STATE_QUESTIONS,
  GAME_STATE_RESULTS,
} from "@/domain/gameStates";
import Home from "@/components/Home";
import SelectCategory from "@/components/SelectCategory";
import Category from "@/domain/Category";
import Questions from "@/components/Questions";
import { questions } from "@/domain/data";
import Results from "@/components/Results";

export default function App() {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState(GAME_STATE_HOME);
  const [selectedCategory, setSelectedCategory] = useState<null | Category>(
    null,
  );
  const selectGameCategory = () => {
    setSelectedCategory(null);
    setGameState(GAME_STATE_CATEGORY);
  };

  const startQuestions = (category: Category) => {
    setSelectedCategory(category);
    setGameState(GAME_STATE_QUESTIONS);
  };

  const endQuestions = (score: number) => {
    setScore(score);
    setGameState(GAME_STATE_RESULTS);
  };

  const back = () => {
    switch (gameState) {
      case GAME_STATE_HOME:
      case GAME_STATE_CATEGORY:
        return setGameState(GAME_STATE_HOME);
      case GAME_STATE_QUESTIONS:
        return setGameState(GAME_STATE_CATEGORY);
    }
  };

  return (
    <div className={"min-h-screen bg-[#120C41] text-white"}>
      {gameState === GAME_STATE_HOME && (
        <Home selectGameCategory={selectGameCategory} />
      )}

      {gameState === GAME_STATE_CATEGORY && (
        <SelectCategory startQuestions={startQuestions} back={back} />
      )}

      {gameState === GAME_STATE_QUESTIONS && selectedCategory && (
        <Questions
          questions={questions.filter(
            (question) =>
              JSON.stringify(question.tag) ===
              JSON.stringify(selectedCategory.tag),
          )}
          endQuestions={endQuestions}
          back={back}
        />
      )}
      {gameState === GAME_STATE_RESULTS && (
        <Results
          score={score}
          questions={questions.filter(
            (question) =>
              JSON.stringify(question.tag) ===
              JSON.stringify(selectedCategory?.tag),
          )}
        />
      )}
    </div>
  );
}
