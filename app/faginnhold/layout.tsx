"use client";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl mx-auto">{children}</div>;
}
