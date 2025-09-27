import { create } from "zustand";
import { persist } from "zustand/middleware"

type Question = {
    id: number;
    question: string;
    options: { optionId: number; letter: string; answer: string}[];
    correctAnswer: string;
}

type useQuizStore = {
    myQuestions: Question[];
    UserAnswers:{ [questionId: number] : string}
    setAnswer: (questionId: number, answer: string) => void;
}
//for UserAnswers: Brackets gjør at property can endre seg
//UserAnswers lager et objekt som tar imot svar som f.eks {1: "A"}

export const useQuizStore = create<useQuizStore>()(
  persist(
    (set) => ({
    myQuestions: [{  //første property of store object
      id: 1,
      question: "Hva betyr semantisk HTML?",
      options: [
        { optionId: 1, letter: "A", answer: "At vi skriver HTML i flere språk" },
        { optionId: 2, letter: "B", answer: "At vi bruker riktige tagger for riktig type innhold" },
        { optionId: 3, letter: "C", answer: "At vi alltid bruker inline-stiler" },
        { optionId: 4, letter: "D", answer: "At HTML kun brukes til design" }
      ],
      correctAnswer: "B"
    },
    {
      id: 2,
      question: "Hvilken HTML-tagg brukes til navigasjonsmenyer?",
      options: [
        { optionId: 5, letter: "A", answer: "<header>" },
        { optionId: 6, letter: "B", answer: "<footer>" },
        { optionId: 7, letter: "C", answer: "<nav>" },
        { optionId: 8, letter: "D", answer: "<article>" }
      ],
      correctAnswer: "C"
    },
    {
      id: 3,
      question: "Hva brukes JavaScript til på en nettside?",
      options: [
        { optionId: 9, letter: "A", answer: "Å lage dynamiske og interaktive funksjoner" },
        { optionId: 10, letter: "B", answer: "Kun å style nettsiden" },
        { optionId: 11, letter: "C", answer: "Å skrive serverkode i alle språk" },
        { optionId: 12, letter: "D", answer: "Å lage databaser" }
      ],
      correctAnswer: "A"
    },
    {
      id: 4,
      question: "Hva kan JavaScript gjøre uten å laste inn siden på nytt?",
      options: [
        { optionId: 13, letter: "A", answer: "Endre innholdet på en side" },
        { optionId: 14, letter: "B", answer: "Endre nettleseren sin logo" },
        { optionId: 15, letter: "C", answer: "Erstatte HTML med CSS" },
        { optionId: 16, letter: "D", answer: "Installere nye fonter automatisk" }
      ],
      correctAnswer: "A"
    },
    {
      id: 5,
      question: "Hva er TypeScript?",
      options: [
        { optionId: 17, letter: "A", answer: "Et helt nytt programmeringsspråk uten JavaScript" },
        { optionId: 18, letter: "B", answer: "JavaScript med typer" },
        { optionId: 19, letter: "C", answer: "Et bibliotek for CSS" },
        { optionId: 20, letter: "D", answer: "En database for webutvikling" }
      ],
      correctAnswer: "B"
    },
    {
      id: 6,
      question: "Hva er en fordel med å bruke TypeScript?",
      options: [
        { optionId: 21, letter: "A", answer: "Koden kan kjøres raskere i nettleseren" },
        { optionId: 22, letter: "B", answer: "Feil oppdages mens du koder, før siden kjøres" },
        { optionId: 23, letter: "C", answer: "Det fjerner behovet for JavaScript helt" },
        { optionId: 24, letter: "D", answer: "Det gjør alle variabler globale automatisk" }
      ],
      correctAnswer: "B"
    },
    {
      id: 7,
      question: "Hva er React?",
      options: [
        { optionId: 25, letter: "A", answer: "Et programmeringsspråk" },
        { optionId: 26, letter: "B", answer: "Et databaseverktøy" },
        { optionId: 27, letter: "C", answer: "Et JavaScript-bibliotek for å bygge brukergrensesnitt" },
        { optionId: 28, letter: "D", answer: "Et designprogram" }
      ],
      correctAnswer: "C"
    },
    {
      id: 8,
      question: "Hva er en viktig fordel med å bruke React?",
      options: [
        { optionId: 29, letter: "A", answer: "At man alltid må laste hele siden på nytt" },
        { optionId: 30, letter: "B", answer: "At man kan dele opp nettsiden i gjenbrukbare komponenter" },
        { optionId: 31, letter: "C", answer: "At React automatisk designer nettsiden" },
        { optionId: 32, letter: "D", answer: "At React erstatter HTML fullstendig" }
      ],
      correctAnswer: "B"
    },
    {
      id: 9,
      question: "Hva brukes Zustand til i en app?",
      options: [
        { optionId: 33, letter: "A", answer: "Å style komponenter med CSS" },
        { optionId: 34, letter: "B", answer: "Å lagre og dele felles data (global tilstand)" },
        { optionId: 35, letter: "C", answer: "Å bygge hele nettsider uten React" },
        { optionId: 36, letter: "D", answer: "Å teste JavaScript-kode" }
      ],
      correctAnswer: "B"
    },
    {
      id: 10,
      question: "Hva er en fordel med å bruke Zustand?",
      options: [
        { optionId: 37, letter: "A", answer: "Alle data lagres i én felles 'boks' som kan brukes overalt i appen" },
        { optionId: 38, letter: "B", answer: "Det gjør at appen automatisk genererer design" },
        { optionId: 39, letter: "C", answer: "Det fjerner behovet for HTML helt" },
        { optionId: 40, letter: "D", answer: "Det lager en database på serveren" }
      ],
      correctAnswer: "A"
    },
    {
      id: 11,
      question: "Hva er et API?",
      options: [
        { optionId: 41, letter: "A", answer: "Et ferdig designbibliotek for nettsider" },
        { optionId: 42, letter: "B", answer: "Et grensesnitt som gjør at programmer kan snakke sammen" },
        { optionId: 43, letter: "C", answer: "En database for å lagre brukere" },
        { optionId: 44, letter: "D", answer: "En server som alltid kjører i bakgrunnen" }
      ],
      correctAnswer: "B"
    },
    {
      id: 12,
      question: "Hva brukes fetch vanligvis til i nettleseren?",
      options: [
        { optionId: 45, letter: "A", answer: "Å style HTML-elementer" },
        { optionId: 46, letter: "B", answer: "Å hente eller sende data til et API" },
        { optionId: 47, letter: "C", answer: "Å lage nye databasetabeller" },
        { optionId: 48, letter: "D", answer: "Å lagre filer på brukerens PC" }
      ],
      correctAnswer: "B"
    }
  ],
UserAnswers: {}, //second property of store object 

setAnswer: (questionID: number, answer: string) => set((state) => {
  console.log("setAnswer called")
  console.log('UserAnswers:', state.UserAnswers);
  answer !=== toLowercase(A,B,C,D)
  return { UserAnswers: {...state.UserAnswers, [questionID]: answer} };
})
/*setAnswer: (questionID: number, answer: string) => set((state) => ({
  UserAnswers: {...state.UserAnswers, [questionID]: answer}
})) */
 
}), //end of store object
{ name: "answer-storage" }
)
);

//Legger til hvert bruker svar som den får fra setAnswer,
//og lager sitt eget object hvor den kobler svaret opp
//spørsmål id'en



  

