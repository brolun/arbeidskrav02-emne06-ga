export const navLinks = [
  { href: "/", label: "Hjem" },
  {
    href: "/faginnhold",
    label: "Faginnhold",
    children: [
      { href: "/faginnhold/sematiskHTML", label: "Semantisk HTML" },
      { href: "/faginnhold/javascript", label: "JavaScript" },
      { href: "/faginnhold/typescript", label: "TypeScript" },
      { href: "/faginnhold/react", label: "React" },
      { href: "/faginnhold/zustand", label: "Zustand" },
      { href: "/faginnhold/api", label: "API" },
    ],
  },
  {
    href: "/oppgaver",
    label: "Oppgaver",
    children: [
      { href: "/oppgaver/oppgave01", label: "Oppgave 01" },
      { href: "/oppgaver/oppgave02", label: "Oppgave 02" },
      { href: "/oppgaver/oppgave03", label: "Oppgave 03" },
    ],
  },
];

// For SideBarLayout
export const faginnholdLinks =
  navLinks.find((l) => l.href === "/faginnhold")?.children || [];
export const oppgaverLinks =
  navLinks.find((l) => l.href === "/oppgaver")?.children || [];
