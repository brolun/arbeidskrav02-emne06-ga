import ShowQuiz from "./components/ShowQuiz";


export const metadata = {
  title: "The Wizard of Web | Quiz",
};

export default function Quiz() {
  return (
    <main>
      <form>
      <ShowQuiz/>
      <button type="submit">Submit your answers here!</button>
      </form>
     </main>
  );
}
