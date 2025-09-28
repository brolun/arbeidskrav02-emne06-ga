"use client";
import { faginnholdChildren } from "../components/FaginnholdChildren";
import { useRouter } from "next/navigation";
import { FaginnholdCard } from "./components/FaginnholdCard";
import { Page } from "../components/Page";

export default function FaginnholdParentPage() {
  const router = useRouter();

  const handleButtonClick = (href: string) => {
    router.push(href);
  };

  return (
    <Page title="Faginnhold">
      <p className="text-center mb-10">
        Her får du en oversikt over hva du kan lære i de ulike seksjonene. Klikk
        deg videre for eksempler og forklaringer.
      </p>
      <section className="grid gap-6 md:grid-cols-2 space-y-8">
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
    </Page>
  );
}
