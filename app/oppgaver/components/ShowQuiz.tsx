"use client"

import { useQuizStore } from "@/app/store/store";
import { useState, useEffect } from "react";

export default function ShowQuiz() {
    const [isClient, setIsClient] = useState(false);
    const myQuestions = useQuizStore((state) => state.myQuestions);
    const setAnswer = useQuizStore((state) => state.setAnswer);
    const UserAnswers = useQuizStore((state) => state.UserAnswers)

    useEffect(() => {
        setIsClient(true);
    }, [])

    if(!isClient) {
        return <div>Loading...</div>;
    }

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
            <input type="text" 
            placeholder="Type answer here" 
            value={UserAnswers[question.id] || '' }
            //(evt) lager en funkjson som tar imot eventet
            onChange={(evt) => setAnswer(question.id, evt.target.value)} ></input>
     </article>
    )}
    </main>
    )
}