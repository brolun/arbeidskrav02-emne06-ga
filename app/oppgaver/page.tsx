import { ShowQuiz } from "./components/ShowQuiz";
import { Page } from "../components/Page";

export const metadata = {
  title: "The Wizard of Web | Oppgaver",
};

export default function Quiz() {
  return (
    <Page title="Oppgaver">
      <form className="max-w-xl mx-auto">
        <ShowQuiz />
      </form>
    </Page>
  );
}
