export const metadata = {
  title: "The Wizard of Web | Zustand",
};

import { Page } from "@/app/components/Page";
import {
  FaginnholdChildLayout,
  CodeSnippet,
  CodeResult,
} from "../components/FaginnholdChildLayout";
import ZustandExampleClient from "../components/ZustandExampleClient";

const snippet = `type CounterState = {
  count: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
  dec: () => set((s) => ({ count: Math.max(0, s.count - 1) })),
  reset: () => set({ count: 0 }),
}));`;

export default function ZustandPage() {
  return (
    <Page title="Zustand">
      <FaginnholdChildLayout
        description={
          <>
            <p>
              <strong>Zustand</strong> er som en liten boks der en app kan lagre
              tall, data og informasjon, slik at man lett kan finne dem igjen og
              endre dem.
            </p>
            <p>
              I en vanlig nettside husker hver knapp eller del av skjermen bare
              sine egne data. Hvis flere forskjellige deler skal bruke den samme
              informasjonen (f.eks. en teller, en innlogget bruker eller en
              handlekurv), kan det fort bli rotete.
            </p>
            <p className="font-medium">Zustand løser dette problemet:</p>
            <ul className="list-disc list-inside">
              <li>
                I stedet for å lagre data mange steder, legger man dem i én
                felles «boks» (global tilstand).
              </li>
              <li>
                Hver del av appen kan da <strong>lese</strong> dataene og{" "}
                <strong>endre</strong> dem (f.eks. øke teller eller nullstille
                handlekurv).
              </li>
            </ul>
            <p>
              Slik blir appen enklere, og alt som skal oppdateres på skjermen
              endrer seg automatisk overalt hvor dataene brukes.
            </p>
          </>
        }
        example={
          <>
            <CodeSnippet title="Kode (utdrag)">{snippet}</CodeSnippet>
            <CodeResult title="Resultat">
              <ZustandExampleClient />
            </CodeResult>
          </>
        }
      />
    </Page>
  );
}
