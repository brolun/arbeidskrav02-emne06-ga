import { create } from "zustand";

type Question = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number
}

type useQuizStore = {
    myQuestions: Question[];
}

export const useQuizStore = create<useQuizStore>((set) => ({
    myQuestions: [{
        id: 1,
        question: "Hva betyr semantisk HTML?",
        options: [
          "At vi skriver HTML i flere språk",
          "At vi bruker riktige tagger for riktig type innhold",
          "At vi alltid bruker inline-stiler",
          "At HTML kun brukes til design"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Hvilken HTML-tagg brukes til navigasjonsmenyer?",
        options: [
          "<header>",
          "<footer>",
          "<nav>",
          "<article>"
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: "Hva brukes JavaScript til på en nettside?",
        options: [
          "Å lage dynamiske og interaktive funksjoner",
          "Kun å style nettsiden",
          "Å skrive serverkode i alle språk",
          "Å lage databaser"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Hva kan JavaScript gjøre uten å laste inn siden på nytt?",
        options: [
          "Endre innholdet på en side",
          "Endre nettleseren sin logo",
          "Erstatte HTML med CSS",
          "Installere nye fonter automatisk"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Hva er TypeScript?",
        options: [
          "Et helt nytt programmeringsspråk uten JavaScript",
          "JavaScript med typer",
          "Et bibliotek for CSS",
          "En database for webutvikling"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "Hva er en fordel med å bruke TypeScript?",
        options: [
          "Koden kan kjøres raskere i nettleseren",
          "Feil oppdages mens du koder, før siden kjøres",
          "Det fjerner behovet for JavaScript helt",
          "Det gjør alle variabler globale automatisk"
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "Hva er React?",
        options: [
          "Et programmeringsspråk",
          "Et databaseverktøy",
          "Et JavaScript-bibliotek for å bygge brukergrensesnitt",
          "Et designprogram"
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        question: "Hva er en viktig fordel med å bruke React?",
        options: [
          "At man alltid må laste hele siden på nytt",
          "At man kan dele opp nettsiden i gjenbrukbare komponenter",
          "At React automatisk designer nettsiden",
          "At React erstatter HTML fullstendig"
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "Hva brukes Zustand til i en app?",
        options: [
          "Å style komponenter med CSS",
          "Å lagre og dele felles data (global tilstand)",
          "Å bygge hele nettsider uten React",
          "Å teste JavaScript-kode"
        ],
        correctAnswer: 2
      },
      {
        id: 10,
        question: "Hva er en fordel med å bruke Zustand?",
        options: [
          "Alle data lagres i én felles 'boks' som kan brukes overalt i appen",
          "Det gjør at appen automatisk genererer design",
          "Det fjerner behovet for HTML helt",
          "Det lager en database på serveren"
        ],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "Hva er et API?",
        options: [
          "Et ferdig designbibliotek for nettsider",
          "Et grensesnitt som gjør at programmer kan snakke sammen",
          "En database for å lagre brukere",
          "En server som alltid kjører i bakgrunnen"
        ],
        correctAnswer: 2
      },
      {
        id: 12,
        question: "Hva brukes fetch vanligvis til i nettleseren?",
        options: [
          "Å style HTML-elementer",
          "Å hente eller sende data til et API",
          "Å lage nye databasetabeller",
          "Å lagre filer på brukerens PC"
        ],
        correctAnswer: 2
      }]
}))

