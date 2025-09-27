"use client";

import { useState } from "react";

type HpChar = {
  name: string;
  house?: string;
  actor?: string;
  image?: string;
};

export default function Page() {
  const [showExample, setShowExample] = useState(false);
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
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <section className="space-y-4">
        <h2>API</h2>
        <p>
          Et <strong>API (Application Programming Interface)</strong> er et
          <strong>grensesnitt</strong> som gjør at to programmer eller systemer
          kan <strong>snakke sammen</strong>.
        </p>
        <p>
          Det brukes for å <strong>hente</strong> informasjon (for eksempel en
          liste med data) eller <strong>sende</strong> informasjon (for eksempel
          et nytt innlegg i en database).
        </p>
        <p>
          I nettleseren brukes ofte <code>fetch</code> for å hente eller sende
          data til et
          <strong> REST-API</strong>. På den måten kan en webside vise oppdatert
          innhold fra en ekstern tjeneste – som i eksempelet vårt med
          <strong>Harry Potter-karakterer</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <button
          type="button"
          onClick={() => setShowExample((v) => !v)}
          aria-expanded={showExample}
          className="px-4 py-2 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-500 transition"
        >
          {showExample ? "Skjul eksempel" : "Eksempel"}
        </button>

        {showExample && (
          <div className="space-y-6">
            <h3>Kode (eksempel)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap break-words">
              {snippet}
            </pre>

            <h3>Resultat</h3>

              <button
                onClick={hentHpKarakterer}
                disabled={loading}
                className="px-3 py-1 rounded bg-green-600 hover:bg-green-500 disabled:opacity-60"
              >
                {loading ? "Laster..." : "Hent 5 karakterer"}
              </button>

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
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
