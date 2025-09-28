"use client";
import { Button } from "@/app/components/Button";
import { useState } from "react";
import { Page } from "@/app/components/Page";
import {
  FaginnholdChildLayout,
  CodeSnippet,
  CodeResult,
} from "../components/FaginnholdChildLayout";

type HpChar = {
  name: string;
  house?: string;
  actor?: string;
  image?: string;
};

export default function ApiPage() {
  const [items, setItems] = useState<HpChar[]>([]);
  const [loading, setLoading] = useState(false);

  const snippet = `// Eksempel: hent 5 tilfeldige Harry Potter-karakterer
async function hentHpKarakterer() {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  const all = await res.json();
  // Velg 5 tilfeldige karakterer
  const randomFive = all.sort(() => 0.5 - Math.random()).slice(0, 5);
  console.log(randomFive);
}`;

  async function hentHpKarakterer() {
    try {
      setLoading(true);
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const all: HpChar[] = await res.json();

      const randomFive = all
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)
        .map(({ name, house, actor, image }) => ({
          name,
          house,
          actor,
          image,
        }));

      setItems(randomFive);
    } catch (e) {
      console.error("Feil ved henting:", e);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

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
              <Button onClick={hentHpKarakterer} disabled={loading}>
                {loading ? "Laster..." : "Hent 5 karakterer"}
              </Button>
              {items.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {items.map((it, idx) => (
                    <li key={idx}>
                      {it.name}
                      {it.house ? ` — ${it.house}` : ""}
                    </li>
                  ))}
                </ul>
              ) : (
                !loading && (
                  <p className="text-gray-300">Ingen data hentet ennå.</p>
                )
              )}
            </CodeResult>
          </>
        }
      />
    </Page>
  );
}
