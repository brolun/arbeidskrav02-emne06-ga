export const metadata = {
  title: "The Wizard of Web | React",
};

import { Page } from "@/app/components/Page";
import { FaginnholdChildLayout } from "../components/FaginnholdChildLayout";
import ReactExampleClient from "../components/ReactExampleClient";

const codeSnippet = `type User = { id: number; name: string; role?: "admin" | "editor" | "viewer" };

function pickBy<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T,K> {
  const out = {} as Pick<T,K>;
  for (const k of keys) (out as any)[k] = obj[k];
  return out;
}`;

export default function ReactPage() {
  return (
    <Page title="React">
      <FaginnholdChildLayout
        description={
          <>
            <p>
              <strong>React</strong> er et verktøy (et bibliotek) laget i
              JavaScript som hjelper til med å bygge{" "}
              <strong>nettsider og apper</strong> på en måte som gjør dem{" "}
              <strong>raske, oversiktlige</strong> og
              <strong>enkle å videreutvikle</strong>.
            </p>
            <p>
              I stedet for å lage en nettside som ett stort dokument, deler man
              den i <strong>små byggeklosser</strong> (<em>komponenter</em>).
            </p>
            <ul className="list-disc list-inside">
              <li>En kloss kan være en knapp,</li>
              <li>en annen et søkefelt,</li>
              <li>en tredje en hel produktliste.</li>
            </ul>
            <p>
              Deretter kan man <strong>sette sammen og gjenbruke</strong> disse
              klossene, slik at utvikleren slipper å skrive alt fra bunnen av
              hver gang.
            </p>
            <h3>Hva brukes det til?</h3>
            <ul className="list-disc list-inside">
              <li>
                Å lage <strong>moderne nettsider og apper</strong> (f.eks.
                bruker mange store tjenester React).
              </li>
              <li>
                Å bygge grensesnitt som <strong>reagerer raskt</strong> - uten å
                laste hele siden på nytt.
              </li>
            </ul>
          </>
        }
        example={<ReactExampleClient codeSnippet={codeSnippet} />}
      />
    </Page>
  );
}
