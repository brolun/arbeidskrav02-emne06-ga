"use client";
import { useMemo } from "react";
import { CodeSnippet, CodeResult } from "../components/FaginnholdChildLayout";

type User = { id: number; name: string; role?: "admin" | "editor" | "viewer" };

function pickBy<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const k of keys) out[k] = obj[k];
  return out;
}

export default function TypescriptExampleClient({
  snippet,
}: {
  snippet: string;
}) {
  const users: User[] = useMemo(
    () => [
      { id: 1, name: "Vegard", role: "admin" },
      { id: 2, name: "Gløer", role: "editor" },
      { id: 3, name: "Amina", role: "admin" },
    ],
    []
  );

  const admins = useMemo(
    () => users.filter((u) => u.role === "admin"),
    [users]
  );

  return (
    <>
      <CodeSnippet title="Kode (utdrag)">{snippet}</CodeSnippet>
      <CodeResult title="Resultat">
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
        <p className="text-gray-500 text-sm mt-6">
          Merk: TypeScript-feil fanges under utvikling – i nettleseren kjører
          ren JavaScript.
        </p>
      </CodeResult>
    </>
  );
}
