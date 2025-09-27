import { Button } from "@/app/components/Button";

type RetakeTestProps = {
  resetQuiz: () => void;
};

export function RetakeTest({ resetQuiz }: RetakeTestProps) {
  return <Button onClick={resetQuiz}>Prøv igjen</Button>;
}
