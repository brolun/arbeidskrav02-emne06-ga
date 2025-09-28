"use client";
import { Button } from "@/app/components/Button";
import { MyResults } from "../components/MyResults";
import { useQuizStore } from "@/app/store/store";
import { useState, useEffect } from "react";
import { QuestionCard } from "./QuestionCard";

export function ShowQuiz() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const myQuestions = useQuizStore((state) => state.myQuestions);
  const setAnswer = useQuizStore((state) => state.setAnswer);
  const UserAnswers = useQuizStore((state) => state.UserAnswers);

  function resetQuiz() {
    setIsSubmitted(false);
    useQuizStore.getState().clearAnswers();
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Vennligst vent ...</div>;
  }

  return isSubmitted ? (
    <MyResults resetQuiz={resetQuiz} />
  ) : (
    <>
      {myQuestions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          value={UserAnswers[question.id] || ""}
          setAnswer={setAnswer}
        />
      ))}
      <Button
        onClick={() => {
          setIsSubmitted(true);
          window.scrollTo(0, 0);
        }}
      >
        Sjekk svarene dine
      </Button>
    </>
  );
}
