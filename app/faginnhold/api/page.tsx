export const metadata = {
  title: "The Wizard of Web | API",
};

import { Page } from "@/app/components/Page";
import {
  FaginnholdChildLayout,
  CodeSnippet,
  CodeResult,
} from "../components/FaginnholdChildLayout";
import ApiPageClient from "../components/ApiExampleClient";

const snippet = `// Eksempel: hent 5 tilfeldige Harry Potter-karakterer
async function hentHpKarakterer() {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  const all = await res.json();
  // Velg 5 tilfeldige karakterer
  const randomFive = all.sort(() => 0.5 - Math.random()).slice(0, 5);
  console.log(randomFive);
}`;

export default function ApiPage() {
  return (
    <Page title="API">
      <FaginnholdChildLayout
        description={
          <>
            <p>
              Et <strong>API (Application Programming Interface)</strong> er et{" "}
              <strong>grensesnitt</strong> som gjør at to programmer eller
              systemer kan <strong>snakke sammen</strong>.
            </p>
            <p>
              Det brukes for å <strong>hente</strong> informasjon (for eksempel
              en liste med data) eller <strong>sende</strong> informasjon (for
              eksempel et nytt innlegg i en database).
            </p>
            <p>
              I nettleseren brukes ofte <code>fetch</code> for å hente eller
              sende data til et
              <strong> REST-API</strong>. På den måten kan en webside vise
              oppdatert innhold fra en ekstern tjeneste – som i eksempelet vårt
              med <strong>Harry Potter-karakterer</strong>.
            </p>
          </>
        }
        example={
          <>
            <CodeSnippet title="Kode (eksempel)">{snippet}</CodeSnippet>
            <CodeResult title="Resultat">
              <ApiPageClient />
            </CodeResult>
          </>
        }
      />
    </Page>
  );
}
