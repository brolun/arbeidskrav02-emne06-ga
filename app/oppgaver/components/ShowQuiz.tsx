"use client";

import { Button } from "@/app/components/Button";
import { MyResults } from "../components/MyResults";
import { useQuizStore } from "@/app/store/store";
import { useState, useEffect } from "react";

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
    <main>
      {myQuestions.map((question) => (
        <article key={question.id}>
          <h3>Spørsmål {question.id}:</h3>
          <h4>{question.question}</h4>

          {question.options.map((option) => (
            <ul key={option.optionId}>
              <li>
                {option.letter}. {option.answer}
              </li>
            </ul>
          ))}

          <select
            value={UserAnswers[question.id] || ""}
            //(evt) lager en funkjson som tar imot eventet
            onChange={(evt) => setAnswer(question.id, evt.target.value)}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </article>
      ))}
      <Button
        onClick={() => {
          setIsSubmitted(true);
          window.scrollTo(0, 0);
        }}
      >
        Sjekk svarene dine
      </Button>
    </main>
  );
}
