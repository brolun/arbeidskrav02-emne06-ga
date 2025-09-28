import { useQuizStore } from "@/app/store/store";
import { RetakeTest } from "./RetakeTest";
import { QuestionCard } from "./QuestionCard";

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
    percentage >= 80 ? (
      <p>Du har svart {percentage}% riktig, og har bestått kurset!</p>
    ) : (
      <>
        <p>Du har svart {percentage}% riktig, og derfor ikke bestått kurset.</p>
        <p>Du må ha minst 80% riktig for å bestå kurset. Prøv igjen!</p>
      </>
    );

  return (
    <>
      <h3 className="text-xl text-center font-semibold mb-4">
        Resultatet ditt:{" "}
        <span className={percentage >= 80 ? "text-green-600" : "text-red-600"}>
          {percentage >= 80 ? "Bestått" : "Ikke bestått"}
        </span>
      </h3>
      <div className="text-center mb-6">{passMessage}</div>

      {myQuestions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          value={UserAnswers[question.id] || ""}
          showSelect={false}
          showResult={true}
          correctAnswer={question.correctAnswer}
        />
      ))}
      <RetakeTest resetQuiz={resetQuiz} />
    </>
  );
}
