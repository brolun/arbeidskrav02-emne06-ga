"use client";
import Link from "next/link";
import { faginnholdChildren } from "../components/FaginnholdChildren";

export default function Page() {
  return (
    <>
      <p className="text-center mb-6">
        Her får du en oversikt over hva du kan lære i de ulike seksjonene. Klikk
        deg videre for eksempler og forklaringer.
      </p>
      <section className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto p-6 space-y-8">
        {faginnholdChildren.map((emne) => (
          <div
            key={emne.href}
            className="bg-dark space-y-4 p-5 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between h-full"
          >
            <h3 className="text-xl font-semibold mb-3 text-light">
              {emne.label}
            </h3>
            <p className="text-light">{emne.desc}</p>
            <Link href={emne.href} className="button self-start">
              Les mer
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
