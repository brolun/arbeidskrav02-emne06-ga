"use client"

import { useQuizStore } from "@/app/store/store";

export default function ShowQuiz() {
    const myQuestions = useQuizStore((state) => state.myQuestions);

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
            <input type="letter" placeholder="Type answer here" onChange={setAnswer(event)} ></input>
     </article>
    )}
    </main>
    )
}