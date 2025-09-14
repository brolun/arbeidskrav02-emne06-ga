"use client";
import { ReactNode } from "react";
import SidebarLayout from "../components/SidebarLayout";

const links = [
  { href: "/oppgaver/oppgave01", label: "Oppgave 01" },
  { href: "/oppgaver/oppgave02", label: "Oppgave 02" },
  { href: "/oppgaver/oppgave03", label: "Oppgave 03" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarLayout heading="Oppgaver" links={links} basePath="/oppgaver">
      {children}
    </SidebarLayout>
  );
}
