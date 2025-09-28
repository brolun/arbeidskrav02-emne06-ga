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
        className={`${geistSans.variable} ${geistMono.variable} bg-light text-dark antialiased min-h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        <header className="bg-dark shadow-md">
          <h1 className="text-accent text-center text-4xl font-semibold py-2">
            The Wizard of Web
          </h1>
          <nav className="flex justify-center gap-8 text-light text-l py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="cursor-pointer hover:text-accent transition-transform duration-200 hover:scale-110"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
        <footer className="text-center text-dark text-sm mt-10">
          <p>© 2025 The Wizard of Web</p>
          <p>Design og innhold av Colleen, Roman, og Luna</p>
        </footer>
      </body>
    </html>
  );
}
