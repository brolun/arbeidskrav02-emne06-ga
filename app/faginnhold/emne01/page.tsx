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
    { id: 3, name: "Roman", role: "viewer" },
  ];

  const admins = useMemo(
    () => users.filter((u) => u.role === "admin"),
    [users]
  );

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

      <ul className="list-disc list-inside">
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>

      <p>Antall administratorer: {admins.length}</p>
    </main>
  );
}
