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
    <section className="pb-8 mb-10">
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-2xl font-semibold mb-3">{children}</h3>;
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
      <SectionTitle>{title}</SectionTitle>
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
    <div className="space-y-2">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );
}
