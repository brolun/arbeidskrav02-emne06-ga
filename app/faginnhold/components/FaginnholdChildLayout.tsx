import { ReactNode, useState } from "react";
import { Button } from "@/app/components/Button";

interface FaginnholdChildLayoutProps {
  description: ReactNode;
  example: ReactNode;
}

export function FaginnholdChildLayout({
  description,
  example,
}: FaginnholdChildLayoutProps) {
  const [showExample, setShowExample] = useState(false);
  return (
    <section>
      <div className="space-y-4 mb-7">{description}</div>
      <Button
        onClick={() => setShowExample((v) => !v)}
        aria-expanded={showExample}
      >
        {showExample ? "Skjul eksempel" : "Vis eksempel"}
      </Button>
      {showExample && <div className="space-y-7 mt-6">{example}</div>}
    </section>
  );
}

export function CodeSnippet({
  title = "Kode",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <pre className="text-light p-5 rounded-lg text-sm whitespace-pre-wrap break-words font-mono bg-dark space-y-4 shadow hover:shadow-lg transition flex flex-col justify-between h-full overflow-x-auto">
        {children}
      </pre>
    </div>
  );
}

export function CodeResult({
  title = "Resultat",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      {children}
    </div>
  );
}
