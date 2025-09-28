"use client";
import { Button } from "@/app/components/Button";
import { useState } from "react";
import { Page } from "@/app/components/Page";
import {
  FaginnholdChildLayout,
  CodeSnippet,
  CodeResult,
} from "../components/FaginnholdChildLayout";

export default function JavascriptPage() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((n) => n * 2);
  const sum = numbers.reduce((acc, n) => acc + n, 0);

  const [clicks, setClicks] = useState(0);

  const snippet1 = `const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15`;

  const snippet2 = `let count = 0;

function handleClick() {
  count++;
  console.log("Du har klikket " + count + " ganger");
}`;

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
          <>
            <CodeSnippet title="Kode (eksempel 1: lister)">
              {snippet1}
            </CodeSnippet>
            <CodeResult title="Resultat">
              <p>Opprinnelige tall: {numbers.join(", ")}</p>
              <p>Doblede tall: {doubled.join(", ")}</p>
              <p>Summen av tallene: {sum}</p>
            </CodeResult>
            <CodeSnippet title="Kode (eksempel 2: klikk-teller)">
              {snippet2}
            </CodeSnippet>
            <CodeResult title="Resultat">
              <p>Antall klikk: {clicks}</p>
              <Button
                onClick={() => setClicks((c) => c + 1)}
                className="self-start"
              >
                Klikk meg
              </Button>
            </CodeResult>
          </>
        }
      />
    </Page>
  );
}
