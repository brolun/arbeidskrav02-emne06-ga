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

export default function ReactExampleClient({
  codeSnippet,
}: {
  codeSnippet: string;
}) {
  const users: User[] = useMemo(
    () => [
      { id: 1, name: "Stine", role: "admin" },
      { id: 2, name: "Bjørn", role: "editor" },
      { id: 3, name: "Aurora", role: "admin" },
    ],
    []
  );
  const admins = useMemo(
    () => users.filter((u) => u.role === "admin"),
    [users]
  );

  return (
    <>
      <CodeSnippet title="Kode (utdrag)">{codeSnippet}</CodeSnippet>
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
      </CodeResult>
    </>
  );
}
