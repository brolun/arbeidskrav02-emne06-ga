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

export function SidebarLayout({
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
        <h2 className="text-center">{heading}</h2>
        {children}
      </>
    );
  }

  return (
    <div className="grid md:grid-cols-[10rem_1fr] gap-8 w-full text-dark">
      <aside className="hidden md:block mt-6 border-r boder-dark pr-4">
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
      <article className="min-w-0">{children}</article>
    </div>
  );
}
