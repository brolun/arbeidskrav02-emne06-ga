"use client";

import { useMemo, useState } from "react";

type User = { id: number; name: string; role?: "admin" | "editor" | "viewer" };

function pickBy<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const k of keys) (out as any)[k] = obj[k];
  return out;
}

export default function Page() {
  const [showExample, setShowExample] = useState(false);

  const users: User[] = [
    { id: 1, name: "Vegard", role: "admin" },
    { id: 2, name: "Gløer", role: "editor" },
    { id: 3, name: "Amina", role: "admin" },
  ];

  const admins = useMemo(
    () => users.filter((u) => u.role === "admin"),
    [users]
  );

  const snippet = `type User = { id: number; name: string; role?: "admin" | "editor" | "viewer" };

// Generic: plukk ut bare feltene du ønsker, typesikkert
function pickBy<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const k of keys) (out as any)[k] = obj[k];
  return out;
}

const users: User[] = [
  { id: 1, name: "Vegard", role: "admin" },
  { id: 2, name: "Gløer", role: "editor" },
  { id: 3, name: "Amina" role: "admin"}, 
];

const admins = users.filter(u => u.role === "admin"); // type-sjekket ved bygging`;

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">TypeScript</h1>

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
          <h2 className="text-xl font-semibold">Kode (utdrag)</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap break-words">
            {snippet}
          </pre>

          <h2 className="text-xl font-semibold">Resultat</h2>
          <div className="bg-gray-800 text-white p-4 rounded-lg space-y-3">
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
            <p className="text-gray-300 text-sm">
              Merk: TypeScript-feil fanges under utvikling – i nettleseren
              kjører ren JavaScript.
            </p>
          </div>
        </div>
      )}

      <ul className="list-disc list-inside">
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>

      <p>Antall administratorer: {admins.length}</p>
    </main>
  );
}
