"use client"

import { useQuizStore } from "@/app/store/store";

export default function ShowQuiz() {
    const myQuestions = useQuizStore((state) => state.myQuestions);
    const setAnswer = useQuizStore((state) => state.setAnswer);
    const _hasHydrated = useQuizStore((state) => state._hasHydrated)
    console.log('_hasHydrated value:', _hasHydrated);
    console.log('Store state:', useQuizStore.getState()); 

    if(!_hasHydrated) {
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
            //(evt) lager en funkjson som tar imot eventet
            onChange={(evt) => setAnswer(question.id, evt.target.value)} ></input>
     </article>
    )}
    </main>
    )
}