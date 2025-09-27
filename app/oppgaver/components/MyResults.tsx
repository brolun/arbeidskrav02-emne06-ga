import { useQuizStore } from "@/app/store/store";
import RetakeTest from "./RetakeTest";

type RetakeTestProps = {
    resetQuiz: () => void;
}


export default function MyResults( { resetQuiz }: RetakeTestProps) {
    const UserAnswers = useQuizStore((state) => state.UserAnswers);
    const myQuestions = useQuizStore((state) => state.myQuestions);

    const correctAnswers = myQuestions.filter(question => {
        const userAnswer = UserAnswers[question.id];
        return userAnswer === question.correctAnswer;
    }).length;

    const percentage = Math.round((correctAnswers / myQuestions.length) * 100);
    const passMessage = percentage >= 80 ? 
    `Du har svart ${percentage}% riktig, og har bestått kurset!` :
    `Du har svart ${percentage}% riktig.`

return (
    <div>
    <h2>Your Results</h2>
    <p>{passMessage}</p>
    

    {myQuestions.map(question => {
        const UserAnswer = UserAnswers[question.id]; 
        //Dette bruker id fra UserAnswers og id fra questions array 
        //til å matche id og svar. 
        const correctAnswer = question.correctAnswer;
        const isCorrect = UserAnswer === correctAnswer;

        return (
            <div key={question.id}>
                <h2>Question {question.id}:</h2>
                <h3>{question.question}</h3>
                
                {question.options.map(option => 
                    <article key={option.optionId}>
                        <ul>
                            <li>{option.letter}. {option.answer}</li>
                        </ul> 
                    </article>
                )}
                
                <p>Your answer: {UserAnswer}</p>
                <p>{isCorrect ? "You answered correctly!" : "Wrong answer, try again"}</p>
            </div>
        );
    })}
    <RetakeTest resetQuiz={resetQuiz} />
    </div>
)
} 