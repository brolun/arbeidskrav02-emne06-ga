"use client";
import { ReactNode } from "react";
import SidebarLayout from "../components/SidebarLayout";

const links = [
  { href: "/faginnhold/emne01", label: "Emne 01" },
  { href: "/faginnhold/emne02", label: "Emne 02" },
  { href: "/faginnhold/emne03", label: "Emne 03" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarLayout heading="Faginnhold" links={links} basePath="/faginnhold">
      {children}
    </SidebarLayout>
  );
}
