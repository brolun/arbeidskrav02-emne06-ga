"use client";
import { ReactNode } from "react";
import SidebarLayout from "../components/SidebarLayout";
import { oppgaverLinks } from "../components/NavLinks";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarLayout
      heading="Oppgaver"
      links={oppgaverLinks}
      basePath="/oppgaver"
    >
      {children}
    </SidebarLayout>
  );
}
