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
        question: "What is typescript?",
        options: [
            "A dog",
            "A computer brand",
            "A javascript helper",
            "A cat"
        ],
        correctAnswer: 3
    },{
        id: 2,
    question: "Which company created TypeScript?",
    options: [
        "Google",
        "Microsoft",
        "Facebook",
        "Amazon"
    ],
    correctAnswer: 2
},{
    id: 3,
    question: "What does TypeScript add to JavaScript?",
    options: [
        "Static typing",
        "New HTML elements",
        "Database management",
        "CSS animations"
    ],
    correctAnswer: 1
},{
    id: 4,
    question: "Which file extension is commonly used for TypeScript files?",
    options: [
        ".js",
        ".ts",
        ".jsx",
        ".css"
    ],
    correctAnswer: 2
},{
    id: 5,
    question: "What is Tailwind CSS primarily used for?",
    options: [
        "Server-side rendering",
        "Utility-first styling",
        "Database queries",
        "Building APIs"
    ],
    correctAnswer: 2
},{
    id: 6,
    question: "Which approach does Tailwind CSS use for styling?",
    options: [
        "Inline CSS only",
        "Utility classes",
        "External CSS libraries",
        "Theme variables only"
    ],
    correctAnswer: 2
},{
    id: 7,
    question: "What is a key advantage of using Tailwind CSS?",
    options: [
        "Faster styling with predefined utility classes",
        "Automatic database creation",
        "AI-powered debugging",
        "Generates HTML content"
    ],
    correctAnswer: 1
},{
    id: 8,
    question: "What is Next.js?",
    options: [
        "A CSS framework",
        "A JavaScript testing tool",
        "A React framework for building web apps",
        "A database system"
    ],
    correctAnswer: 3
},{
    id: 9,
    question: "Which feature is Next.js known for?",
    options: [
        "Server-side rendering",
        "SQL queries",
        "Mobile-only development",
        "AI chatbots"
    ],
    correctAnswer: 1
},{
    id: 10,
    question: "Which company maintains Next.js?",
    options: [
        "Vercel",
        "Google",
        "Meta",
        "Oracle"
    ],
    correctAnswer: 1

    }]
}))

