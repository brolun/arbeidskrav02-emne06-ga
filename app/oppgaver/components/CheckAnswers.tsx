import { useQuizStore } from "@/app/store/store";

export default function CheckAnswers() {
    const myQuestions = useQuizStore((state) => state.myQuestions);

    myQuestions.map(question =>
     userAnswer === question.correctAnswer ? AnswerIsCorrect : AnswerIsIncorrect
    )
}