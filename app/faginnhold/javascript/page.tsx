export const metadata = {
  title: "The Wizard of Web | JavaScript",
};

import { Page } from "@/app/components/Page";
import { FaginnholdChildLayout } from "../components/FaginnholdChildLayout";
import JavascriptExampleClient from "../components/JavascriptExampleClient";

const snippet1 = `const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15`;

const snippet2 = `let count = 0;

function handleClick() {
  count++;
  console.log("Du har klikket " + count + " ganger");
}`;

export default function JavascriptPage() {
  return (
    <Page title="JavaScript">
      <FaginnholdChildLayout
        description={
          <>
            <p>
              <strong>JavaScript</strong> er et programmeringsspråk som gjør
              nettsider <strong>dynamiske</strong> og{" "}
              <strong>interaktive</strong>.
            </p>
            <p>Språket kan for eksempel:</p>
            <ul className="list-disc list-inside">
              <li>endre innholdet på en side uten å laste den på nytt,</li>
              <li>reagere på klikk, tastetrykk og andre hendelser,</li>
              <li>hente eller sende data til et API,</li>
              <li>
                lage interaktive elementer som menyer, skjemaer eller spill.
              </li>
            </ul>
            <p>
              Kort sagt: JavaScript gir liv til nettsider – uten det ville de
              vært statiske og «flate».
            </p>
          </>
        }
        example={
          <JavascriptExampleClient snippet1={snippet1} snippet2={snippet2} />
        }
      />
    </Page>
  );
}
