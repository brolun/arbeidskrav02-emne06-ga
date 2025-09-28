import { Button } from "@/app/components/Button";

type QuizActionButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export function QuizActionButton({
  label,
  onClick,
  className,
}: QuizActionButtonProps) {
  return (
    <Button
      className={`block mx-auto mt-8 ${className || ""}`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
