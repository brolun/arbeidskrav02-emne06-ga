import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { navLinks } from "./components/NavLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Wizard of Web",
  description: "Lær å mestre webens magi — fra nybegynner til trollmann.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        <header>
          <h1 className="text-center text-4xl font-semibold py-6">
            The Wizard of Web
          </h1>
          <nav className="flex justify-center gap-6 border-b border-t text-l py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <Link href={link.href} className="cursor-pointer">
                    {link.label}
                  </Link>
                  <div
                    className="absolute left-0 top-full w-40 border rounded shadow-lg hidden group-hover:block z-10"
                    style={{ background: "var(--background)" }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </header>
        <main className="px-4 md:px-8 py-8 mx-auto max-w-5xl w-full">
          {children}
        </main>
        <footer className="text-center">
          <p>© 2025 The Wizard of Web</p>
          <p>Design og innhold av Colleen, Roman, og Luna</p>
        </footer>
      </body>
    </html>
  );
}
