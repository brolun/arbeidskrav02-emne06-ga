import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>Faginnhold</h1>
      <nav>
        <Link href="/faginnhold/emne01">Emne 01</Link>
        <Link href="/faginnhold/emne02">Emne 02</Link>
        <Link href="/faginnhold/emne03">Emne 03</Link>
      </nav>
      {children}
    </main>
  );
}
