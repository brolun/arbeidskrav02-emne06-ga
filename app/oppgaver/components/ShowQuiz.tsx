"use client"



import { useQuizStore } from "@/app/store/store";

export default function ShowQuiz() {
    const myQuestions = useQuizStore((state) => state.myQuestions);
    const setAnswer = useQuizStore((state) => state.setAnswer);

    return (
         <main>
    {
    myQuestions.map(question => <article key={question.id}>
        <h2>Question {question.id}:</h2>
        <h3>{question.question}</h3>
            
                {question.options.map(option => 
            <ul key={option.optionId}>
                <li>{option.letter}. {option.answer}</li>
            </ul> 
            )}
            const questionID = question.id
            <input type="text" 
            placeholder="Type answer here" 
            //(evt) lager en funkjson som tar imot eventet
            onChange={(evt) => setAnswer(question.id, evt.target.value)} ></input>
     </article>
    )}
    </main>
    )
}