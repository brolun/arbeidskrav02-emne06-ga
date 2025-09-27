
type RetakeTestProps = {
    resetQuiz: () => void;
}


export default function RetakeTest( { resetQuiz }: RetakeTestProps) {

    
    return (
        <button onClick={resetQuiz}>Take the test again</button>
    )
}