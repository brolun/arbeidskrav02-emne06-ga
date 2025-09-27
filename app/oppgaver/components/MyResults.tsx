import { useQuizStore } from "@/app/store/store";
import { RetakeTest } from "./RetakeTest";

type RetakeTestProps = {
  resetQuiz: () => void;
};

export function MyResults({ resetQuiz }: RetakeTestProps) {
  const UserAnswers = useQuizStore((state) => state.UserAnswers);
  const myQuestions = useQuizStore((state) => state.myQuestions);

  const correctAnswers = myQuestions.filter((question) => {
    const userAnswer = UserAnswers[question.id];
    return userAnswer === question.correctAnswer;
  }).length;

  const percentage = Math.round((correctAnswers / myQuestions.length) * 100);
  const passMessage =
    percentage >= 80
      ? `Du har svart ${percentage}% riktig, og har bestått kurset!`
      : `Du har svart ${percentage}% riktig, og derfor ikke bestått kurset. Prøv igjen!`;

  return (
    <div>
      <h3>Resultatet ditt</h3>
      <p>{passMessage}</p>

      {myQuestions.map((question) => {
        const UserAnswer = UserAnswers[question.id];
        //Dette bruker id fra UserAnswers og id fra questions array
        //til å matche id og svar.
        const correctAnswer = question.correctAnswer;
        const isCorrect = UserAnswer === correctAnswer;

        return (
          <div key={question.id}>
            <h3>Spørsmål {question.id}:</h3>
            <h4>{question.question}</h4>

            {question.options.map((option) => (
              <article key={option.optionId}>
                <ul>
                  <li>
                    {option.letter}. {option.answer}
                  </li>
                </ul>
              </article>
            ))}

            <p>Svaret ditt: {UserAnswer}</p>
            <p>{isCorrect ? "Du svarte riktig!" : "Feil svar, prøv igjen!"}</p>
          </div>
        );
      })}
      <RetakeTest resetQuiz={resetQuiz} />
    </div>
  );
}
