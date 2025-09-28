import React from "react";

type Option = {
  optionId: number;
  letter: string;
  answer: string;
};

type Question = {
  id: number;
  question: string;
  options: Option[];
  correctAnswer?: string; // optional for results
};

type QuestionCardProps = {
  question: Question;
  value: string;
  setAnswer?: (id: number, value: string) => void;
  showSelect?: boolean;
  showResult?: boolean;
  correctAnswer?: string;
};

export function QuestionCard({
  question,
  value,
  setAnswer,
  showSelect = true,
  showResult = false,
  correctAnswer,
}: QuestionCardProps) {
  const isCorrect = showResult && correctAnswer && value === correctAnswer;
  const borderColor = showResult
    ? value && isCorrect
      ? "border-green-600"
      : "border-red-600"
    : "border-accent";

  return (
    <fieldset className={`my-12 p-4 rounded border ${borderColor}`}>
      <legend className={`border ${borderColor} rounded px-4 py-2`}>
        <span className="text-gray-500 font-mono mr-2">
          Spørsmål {question.id}:
        </span>
        <br />
        <span className="text-lg font-semibold">{question.question}</span>
      </legend>
      <ul className="space-y-2 px-4 py-2">
        {question.options.map((option) => (
          <li key={option.optionId}>
            <span className="font-semibold pr-2">{option.letter}.</span>{" "}
            <span>{option.answer}</span>
          </li>
        ))}
      </ul>
      {showSelect && setAnswer && (
        <select
          className="border border-dark rounded px-2 py-1 cursor-pointer mx-4 mt-4 mb-2"
          value={value}
          onChange={(evt) => setAnswer(question.id, evt.target.value)}
        >
          <option value="">Velg svar</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      )}
      {showResult && (
        <div className="mx-4 mt-4 mb-2">
          <p>
            <span className="font-semibold">Svaret ditt:</span>{" "}
            {value || <span className="text-gray-400">Ingen svar</span>}
          </p>
          <p className={isCorrect ? "text-green-600" : "text-red-600"}>
            {isCorrect ? "Du svarte riktig!" : "Feil svar, prøv igjen!"}
          </p>
        </div>
      )}
    </fieldset>
  );
}
