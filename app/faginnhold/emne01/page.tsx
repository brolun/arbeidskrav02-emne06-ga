"use client";

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">TypeScript</h1>
    </main>
  );
}

type User = {id: number; name: string; role?: "admin" | "editor"  | "viewer" };

function pickBy<T extends object, K extends keyof T>(obj : T, keys : K []): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const k of keys) (out as any) [k] = obj[k];
  return out;
}
