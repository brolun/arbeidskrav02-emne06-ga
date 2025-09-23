export const navLinks = [
  { href: "/", label: "Hjem" },
  {
    href: "/faginnhold",
    label: "Faginnhold",
    children: [
      { href: "/faginnhold/emne03", label: "Semantisk HTML" },
      { href: "/faginnhold/emne04", label: "JavaScript" },
      { href: "/faginnhold/emne01", label: "TypeScript" },
      { href: "/faginnhold/emne05", label: "React" },
      { href: "/faginnhold/emne02", label: "Zustand" },
      { href: "/faginnhold/emne06", label: "API" },
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
