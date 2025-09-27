"use client";

import { useState } from "react";

export default function Page() {
  const [showExample, setShowExample] = useState(false);

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
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <section className="space-y-4">
        <h2>JavaScript</h2>
        <p>
          <strong>JavaScript</strong> er et programmeringsspråk som gjør
          nettsider <strong>dynamiske</strong> og <strong>interaktive</strong>.
        </p>
        <p>Språket kan for eksempel:</p>
        <ul className="list-disc list-inside">
          <li>endre innholdet på en side uten å laste den på nytt,</li>
          <li>reagere på klikk, tastetrykk og andre hendelser,</li>
          <li>hente eller sende data til et API,</li>
          <li>lage interaktive elementer som menyer, skjemaer eller spill.</li>
        </ul>
        <p>
          Kort sagt: JavaScript gir liv til nettsider – uten det ville de vært
          statiske og «flate».
        </p>
      </section>

      <section className="space-y-4">
        <button
          type="button"
          onClick={() => setShowExample((v) => !v)}
          aria-expanded={showExample}
          className="button"
        >
          {showExample ? "Skjul eksempel" : "Eksempel"}
        </button>

        {showExample && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h3>Kode (eksempel 1: lister)</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap break-words">
                {snippet1}
              </pre>

              <h3>Resultat</h3>
              <div className="bg-dark p-4 rounded-lg space-y-2">
                <p>Opprinnelige tall: {numbers.join(", ")}</p>
                <p>Doblede tall: {doubled.join(", ")}</p>
                <p>Summen av tallene: {sum}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3>Kode (eksempel 2: klikk-teller)</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap break-words">
                {snippet2}
              </pre>

              <h3>Resultat</h3>
              <div className="bg-dark p-4 rounded-lg space-y-2">
                <p>Antall klikk: {clicks}</p>
                <button
                  onClick={() => setClicks((c) => c + 1)}
                  className="button"
                >
                  Klikk meg
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
