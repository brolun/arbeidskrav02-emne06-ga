"use client";
import { ReactNode } from "react";
import { SidebarLayout } from "../components/SidebarLayout";
import { faginnholdLinks } from "../components/NavLinks";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarLayout
      heading="Faginnhold"
      links={faginnholdLinks}
      basePath="/faginnhold"
    >
      {children}
    </SidebarLayout>
  );
}
