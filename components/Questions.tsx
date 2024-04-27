import { Question } from "@/domain/Question";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import {
  QUESTION_STATE_ANSWERING,
  QUESTION_STATE_SHOW_ANSWER,
  QUESTION_STATE_SHOW_EXPLANATION,
  QUESTION_STATE_STARTING,
} from "@/domain/questionStates";
import { Button } from "@/components/ui/button";
import QuestionStarting from "@/components/QuestionStarting";
import QuestionExplanation from "@/components/QuestionExplanation";
import CategoryType from "@/domain/Category";
import { Answer } from "@/domain/Answer";
import Back from "@/components/Back";

const DEFAULT_BEGINS_IN_SECONDS = 3;
const DEFAULT_ANSWERING_SECONDS = 5;
const Questions = ({
  questions,
  back,
  endQuestions,
}: {
  questions: Question[];
  back: () => void;
  endQuestions: (score: number) => void;
}) => {
  const [beginsInSecond, setBeginsInSecond] = useState(
    DEFAULT_BEGINS_IN_SECONDS,
  );
  const [answeringInSecond, setAnsweringInSecond] = useState(
    DEFAULT_ANSWERING_SECONDS,
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<null | Answer>(null);
  const [score, setScore] = useState(0);
  const [questionState, setQuestionState] = useState(QUESTION_STATE_STARTING);

  useEffect(() => {
    if (questionState !== QUESTION_STATE_STARTING) {
      return;
    }

    let startingInterval = setInterval(() => {
      if (beginsInSecond > 1) {
        setBeginsInSecond(beginsInSecond - 1);
      } else {
        setQuestionState(QUESTION_STATE_ANSWERING);
      }
    }, 1000);
    return () => {
      clearInterval(startingInterval);
    };
  }, [beginsInSecond, questionState]);

  useEffect(() => {
    if (questionState !== QUESTION_STATE_ANSWERING) {
      return;
    }

    let answeringInterval = setInterval(() => {
      if (answeringInSecond > 1) {
        setAnsweringInSecond(answeringInSecond - 1);
      } else {
        setAnsweringInSecond(answeringInSecond - 1);
        if (currentAnswer) {
          submitAnswer(currentAnswer);
        }
        setQuestionState(QUESTION_STATE_SHOW_ANSWER);
      }
    }, 1000);
    return () => {
      clearInterval(answeringInterval);
    };
  }, [answeringInSecond, questionState]);

  const submitAnswer = (answer: Answer) => {
    if (answer.isRight) {
      setScore(score + 1);
    }
  };

  const getShowAnswerExtraClasses = (answer: Answer) => {
    if (questionState !== QUESTION_STATE_SHOW_ANSWER) {
      return "";
    }

    if (JSON.stringify(currentAnswer) === JSON.stringify(answer)) {
      if (currentAnswer?.isRight) {
        return "bg-[#00FF472B] text-[#71FFB8]";
      }
      return "bg-[#FF998B1A] text-[#FF998B]";
    }

    if (answer.isRight) {
      return "bg-[#14594D] text-white";
    }
    return "opacity-25";
  };

  const nextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      return endQuestions(score);
    }

    setBeginsInSecond(DEFAULT_BEGINS_IN_SECONDS);
    setAnsweringInSecond(DEFAULT_ANSWERING_SECONDS);
    setCurrentAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
    setQuestionState(QUESTION_STATE_STARTING);
  };

  return (
    <>
      {questionState === QUESTION_STATE_STARTING && (
        <QuestionStarting beginsInSecond={beginsInSecond} />
      )}
      {questionState === QUESTION_STATE_SHOW_EXPLANATION && (
        <QuestionExplanation
          explanation={questions[currentQuestion].explanation}
          nextQuestion={nextQuestion}
          isLast={currentQuestion === questions.length - 1}
        />
      )}
      {(questionState === QUESTION_STATE_ANSWERING ||
        questionState === QUESTION_STATE_SHOW_ANSWER) && (
        <div className="flex min-h-screen flex-col items-center justify-between bg-[url('/decor-1.svg')] bg-cover bg-bottom bg-no-repeat p-4  px-4 pb-4 pt-8 bg-blend-luminosity md:pt-16">
          <main className={"container space-y-14"}>
            <div className={"flex flex-wrap justify-between gap-4"}>
              <Back back={back} />
              {questionState && QUESTION_STATE_SHOW_ANSWER && (
                <div className={"text-xl"}>{answeringInSecond}</div>
              )}
            </div>
            <div className={"mx-auto max-w-6xl space-y-12"}>
              <div
                className={
                  "flex items-center justify-center gap-2 text-center text-xl"
                }
              >
                <span>QUESTION</span>{" "}
                <span
                  className={
                    "inline-block rounded-full border border-[#55536C] bg-[#252244] px-2"
                  }
                >
                  {currentQuestion + 1} / {questions.length}
                </span>
              </div>
              <div className={"text-center text-5xl font-bold"}>
                {questions[currentQuestion].title}
              </div>
              <div className={"grid gap-4 md:grid-cols-2"}>
                {questions[currentQuestion].answers.map((answer) => (
                  <div
                    className={`rounded-2xl ${questionState === QUESTION_STATE_ANSWERING ? "cursor-pointer hover:opacity-90 " : ""} ${questionState === QUESTION_STATE_ANSWERING && JSON.stringify(currentAnswer) === JSON.stringify(answer) ? "bg-[#211B4E]" : "bg-[#29224A]"} p-7 text-lg ${getShowAnswerExtraClasses(answer)}`}
                    key={answer.title}
                    onClick={() =>
                      questionState === QUESTION_STATE_ANSWERING
                        ? setCurrentAnswer(answer)
                        : {}
                    }
                  >
                    {answer.title}
                  </div>
                ))}
              </div>
              {questionState === QUESTION_STATE_SHOW_ANSWER && (
                <div className={"flex justify-center"}>
                  <Button
                    className={"bg-[#2D2453] text-white hover:bg-[#2D2453]"}
                    onClick={() =>
                      setQuestionState(QUESTION_STATE_SHOW_EXPLANATION)
                    }
                  >
                    Voir l'explication
                  </Button>
                </div>
              )}
            </div>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Questions;
