"use client";
import Link from "next/link";
import { faginnholdChildren } from "./FaginnholdChildren";
import { usePathname } from "next/navigation";

export function HeaderNav() {
  const baseClass =
    "cursor-pointer hover:text-accent transition-transform duration-200 hover:scale-110";

  return (
    <nav className="relative flex justify-center gap-8 text-light text-l py-4">
      <Link href="/" className={baseClass}>
        Forside
      </Link>
      <div className="group">
        <Link
          href="/faginnhold"
          className={`${baseClass} group-hover:scale-110`}
        >
          Faginnhold
        </Link>
        <FaginnholdSubNav />
      </div>
      <Link href="/oppgaver" className={baseClass}>
        Oppgaver
      </Link>
    </nav>
  );
}

export function FaginnholdSubNav() {
  return (
    <nav className="absolute left-0 right-0 w-full bg-dark z-10 hidden group-hover:flex justify-center gap-8 py-4">
      {faginnholdChildren.map((emne) => (
        <Link
          key={emne.href}
          href={emne.href}
          className="text-light transition-colors duration-200 hover:bg-accent/20 hover:text-accent hover:scale-110 rounded"
        >
          {emne.label}
        </Link>
      ))}
    </nav>
  );
}
