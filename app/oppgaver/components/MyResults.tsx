import { useQuizStore } from "@/app/store/store";

export default function MyResults() {
    const UserAnswers = useQuizStore((state) => state.UserAnswers);
    const myQuestions = useQuizStore((state) => state.myQuestions);

return (
    <div>
    <h2>Your Results</h2>
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
    <button>Take the test again</button>
    </div>
)
} 