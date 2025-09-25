"use client"

import { useQuizStore } from "@/app/store/store";

export default function ShowQuiz() {
    const myQuestions = useQuizStore((state) => state.myQuestions);

    return (
         <main>
    {
    myQuestions.map(question => <article key={question.id}>
        <h1>Question {question.id}:</h1>
        <h2>{question.question}</h2>
            
                {question.options.map(option => 
            <ul key={option.optionId}>
                <li>{option.letter}. {option.answer}</li>
            </ul> 
            )}
            <input type="letter" placeholder="Type answer here"></input>
     </article>
    )}
    </main>
    )
}