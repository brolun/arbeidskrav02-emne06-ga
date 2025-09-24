"use client"

import { useQuizStore } from "@/app/store/store";

export default function ShowQuiz() {
    const myQuestions = useQuizStore((state) => state.myQuestions);

    return (
         <main>
    {myQuestions.map(question => <article>
        <h1 key="question.id">Question {question.id}:</h1>
        <h2>{question.question}</h2>
            <ul>
                <li>{question.options}</li>
            </ul>
     </article>)}
    </main>
    )
}