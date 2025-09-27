"use client";
import { faginnholdChildren } from "../components/FaginnholdChildren";
import { useRouter } from "next/navigation";
import { FaginnholdCard } from "./components/FaginnholdCard";

export default function Page() {
  const router = useRouter();

  const handleButtonClick = (href: string) => {
    router.push(href);
  };

  return (
    <>
      <p className="text-center mb-6">
        Her får du en oversikt over hva du kan lære i de ulike seksjonene. Klikk
        deg videre for eksempler og forklaringer.
      </p>
      <section className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto p-6 space-y-8">
        {faginnholdChildren.map((emne) => (
          <FaginnholdCard
            key={emne.href}
            label={emne.label}
            desc={emne.desc}
            href={emne.href}
            onClick={handleButtonClick}
          />
        ))}
      </section>
    </>
  );
}
