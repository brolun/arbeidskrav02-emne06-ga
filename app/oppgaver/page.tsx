import ShowQuiz from "./components/ShowQuiz";

export const metadata = {
  title: "The Wizard of Web | Oppgaver",
};

export default function Quiz() {
  return (
    <main>
      <form>
        <ShowQuiz />
      </form>
    </main>
  );
}
