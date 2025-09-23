"use client";

import Link from "next/link";

export default function Page() {
  const sections = [
    {
      title: "Semantisk HTML + CSS",
      desc: "Bygger grunnstrukturen (HTML) og utseendet (CSS) til nettsider, med semantikk.",
      link: "/faginnhold/emne03",
    },
    {
      title: "JavaScript",
      desc: "Gir liv til nettsider: logikk, hendelser, lister, interaktive elementer.",
      link: "/faginnhold/emne04",
    },
    {
      title: "TypeScript",
      desc: "Legger til typer i JavaScript for tryggere kode: objekter, unioner, generics.",
      link: "/faginnhold/emne01",
    },
    {
      title: "React",
      desc: "Hvordan lage komponenter, bruke props, state, hendelser og hooks som useEffect.",
      link: "/faginnhold/emne05",
    },
    {
      title: "Zustand",
      desc: "Et lettvekts verktøy for global tilstand – del data mellom komponenter enkelt.",
      link: "/faginnhold/emne02",
    },
    {
      title: "API",
      desc: "Hvordan hente og sende data til andre tjenester ved hjelp av fetch og REST-API.",
      link: "/faginnhold/emne06",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="space-y-4 text-center">
        <p className="text-gray-300">
          Her får du en oversikt over hva du kan lære i de ulike seksjonene.
          Klikk deg videre for eksempler og forklaringer.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {sections.map((s) => (
          <div
            key={s.title}
            className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-white">{s.title}</h2>
              <p className="text-gray-300 mt-2">{s.desc}</p>
            </div>
            <div className="mt-4">
              <Link
                href={s.link}
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition"
              >
                Les mer
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
