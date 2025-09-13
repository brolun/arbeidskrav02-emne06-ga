import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>Oppgaver</h1>
      <nav>
        <Link href="/oppgaver/oppgave01">Oppgave 01</Link>
        <Link href="/oppgaver/oppgave02">Oppgave 02</Link>
        <Link href="/oppgaver/oppgave03">Oppgave 03</Link>
      </nav>
      {children}
    </main>
  );
}
