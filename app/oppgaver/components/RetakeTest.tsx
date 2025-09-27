import { Button } from "@/app/components/Button";

type RetakeTestProps = {
  resetQuiz: () => void;
};

export default function RetakeTest({ resetQuiz }: RetakeTestProps) {
  return <Button onClick={resetQuiz}>Prøv igjen</Button>;
}
