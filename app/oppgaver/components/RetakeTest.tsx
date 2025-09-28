import { QuizActionButton } from "./QuizActionButton";

type RetakeTestProps = {
  resetQuiz: () => void;
};

export function RetakeTest({ resetQuiz }: RetakeTestProps) {
  return <QuizActionButton label="Prøv igjen" onClick={resetQuiz} />;
}
