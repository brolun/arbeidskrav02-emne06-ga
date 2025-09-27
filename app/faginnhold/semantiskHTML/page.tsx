"use client";

import { Button } from "@/app/components/Button";
import { useState } from "react";

export default function Page() {
  const [showExample, setShowExample] = useState(false);

  const snippet = `<!-- Semantisk struktur av en nettside -->
<header>
  <h1>Sidens tittel</h1>
  <p>Kort beskrivelse</p>
</header>
<nav>
  <a href="#">Start</a>
  <a href="#art">Artikkel</a>
  <a href="#aside">Tillegg</a>
</nav>
<main>
  <article id="art">
    <h2>Artikkel</h2>
    <p>Hovedinnhold…</p>
  </article>
  <aside id="aside">
    <h3>Sidepanel</h3>
    <p>Lenker, notater…</p>
  </aside>
</main>
<footer>
  <small>Bunntekst</small>
</footer>`;

  return (
    <>
      <section className="code-info">
        <h2>Semantisk HTML</h2>
        <p>
          <strong>Semantisk HTML</strong> betyr at vi bruker riktige tagger for
          riktig type innhold. Det gjør koden mer forståelig for både mennesker
          og datamaskiner (for eksempel søkemotorer eller skjermlesere).
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>&lt;header&gt;</code> brukes til toppseksjonen.
          </li>
          <li>
            <code>&lt;nav&gt;</code> til navigasjon.
          </li>
          <li>
            <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>,{" "}
            <code>&lt;aside&gt;</code> til hoved- og sideinnhold.
          </li>
          <li>
            <code>&lt;footer&gt;</code> til bunntekst.
          </li>
        </ul>
        <p>
          Med semantikk blir strukturen ryddigere, enklere å vedlikeholde og mer
          tilgjengelig for alle brukere.
        </p>
      </section>

      <section className="code-example">
        <Button
          onClick={() => setShowExample((v) => !v)}
          aria-expanded={showExample}
        >
          {showExample ? "Skjul eksempel" : "Eksempel"}
        </Button>

        {showExample && (
          <>
            <h3>Kode (utdrag)</h3>
            <pre>{snippet}</pre>

            <h3>Resultat</h3>
            <div className="border border-gray-600 rounded-lg p-6 space-y-6 bg-gray-700 text-white">
              <header className="text-center space-y-1">
                <h1 className="text-2xl font-bold">Sidens tittel</h1>
                <p className="text-gray-300">Kort beskrivelse</p>
              </header>

              <nav className="flex justify-center space-x-6">
                <a href="#start" className="hover:underline">
                  Start
                </a>
                <a href="#art" className="hover:underline">
                  Artikkel
                </a>
                <a href="#aside" className="hover:underline">
                  Tillegg
                </a>
              </nav>

              <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article id="art" className="md:col-span-2 space-y-2">
                  <h2 className="text-xl font-semibold">Artikkel</h2>
                  <p>Hovedinnhold…</p>
                </article>
                <aside id="aside" className="bg-gray-500 p-4 rounded-lg">
                  <h3>Sidepanel</h3>
                  <p>Lenker, notater…</p>
                </aside>
              </main>

              <footer className="text-center text-gray-400">
                <small>Footer</small>
              </footer>
            </div>
          </>
        )}
      </section>
    </>
  );
}
