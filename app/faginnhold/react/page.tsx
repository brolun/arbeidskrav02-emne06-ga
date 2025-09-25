"use client";

import { useMemo, useState } from "react";

type User = { id: number; name: string; role?: "admin" | "editor" | "viewer" };

function pickBy<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const k of keys) out[k] = obj[k];
  return out;
}

export default function Page() {
  const [showExample, setShowExample] = useState(false);

  const users: User[] = useMemo(
    () => [
      { id: 1, name: "Stine", role: "admin" },
      { id: 2, name: "Bjørn", role: "editor" },
      { id: 3, name: "Aurora", role:"admin" },
    ],
    []
  );
  const admins = useMemo(
    () => users.filter((u) => u.role === "admin"),
    [users]
  );

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">React</h1>
        <p>
          <strong>React</strong> er et verktøy (et bibliotek) laget i JavaScript
          som hjelper til med å bygge <strong>nettsider og apper</strong> på en
          måte som gjør dem <strong>raske, oversiktlige</strong> og{" "}
          <strong>enkle å videreutvikle</strong>.
        </p>
        <p>
          I stedet for å lage en nettside som ett stort dokument, deler man den
          i <strong>små byggeklosser</strong> (<em>komponenter</em>).
        </p>
        <ul className="list-disc list-inside">
          <li>En kloss kan være en knapp,</li>
          <li>en annen et søkefelt,</li>
          <li>en tredje en hel produktliste.</li>
        </ul>
        <p>
          Deretter kan man <strong>sette sammen og gjenbruke</strong> disse
          klossene, slik at utvikleren slipper å skrive alt fra bunnen av hver
          gang.
        </p>

        <h2 className="text-xl font-semibold">Hva brukes det til?</h2>
        <ul className="list-disc list-inside">
          <li>
            Å lage <strong>moderne nettsider og apper</strong> (f.eks. bruker
            mange store tjenester React).
          </li>
          <li>
            Å bygge grensesnitt som <strong>reagerer raskt</strong> - uten å
            laste hele siden på nytt.
          </li>
        </ul>
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kode (utdrag)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap break-words">
              {`type User = { id: number; name: string; role?: "admin" | "editor" | "viewer" };

function pickBy<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T,K> {
  const out = {} as Pick<T,K>;
  for (const k of keys) (out as any)[k] = obj[k];
  return out;
}`}
            </pre>

            <h3 className="text-lg font-semibold">Resultat</h3>
            <p>Antall administratorer: {admins.length}</p>
            <ul className="list-disc list-inside">
              {users.map((u) => {
                const safe = pickBy(u, ["id", "name"]);
                return (
                  <li key={u.id}>
                    {safe.name} (ID: {safe.id}) {u.role && `[${u.role}]`}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
