"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SidebarLink = {
  href: string;
  label: string;
};

type SidebarLayoutProps = {
  heading: string;
  links: SidebarLink[];
  basePath: string;
  children: React.ReactNode;
};

export default function SidebarLayout({
  heading,
  links,
  basePath,
  children,
}: SidebarLayoutProps) {
  const pathname = usePathname();
  const isRoot = pathname === basePath;

  if (isRoot) {
    return (
      <>
        <h2>{heading}</h2>
        <nav className="flex gap-4 mt-0 mb-4 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        {children}
      </>
    );
  }

  return (
    <div className="flex gap-8">
      <aside className="min-w-[140px] mt-6 border-r pr-4">
        <nav className="flex flex-col gap-2">
          <Link
            href={basePath}
            className="hover:underline mb-2 text-xl font-semibold"
          >
            {heading}
          </Link>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <article className="flex-1">{children}</article>
    </div>
  );
}
