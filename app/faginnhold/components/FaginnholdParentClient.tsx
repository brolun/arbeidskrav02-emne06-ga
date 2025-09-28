"use client";
import { useRouter } from "next/navigation";
import { FaginnholdCard } from "./FaginnholdCard";

type Emne = {
  href: string;
  label: string;
  desc: string;
};

export default function FaginnholdParentClient({
  faginnholdChildren,
}: {
  faginnholdChildren: Emne[];
}) {
  const router = useRouter();

  const handleButtonClick = (href: string) => {
    router.push(href);
  };

  return (
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
  );
}
