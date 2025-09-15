export const navLinks = [
  { href: "/", label: "Hjem" },
  {
    href: "/faginnhold",
    label: "Faginnhold",
    children: [
      { href: "/faginnhold/emne01", label: "Emne 01" },
      { href: "/faginnhold/emne02", label: "Emne 02" },
      { href: "/faginnhold/emne03", label: "Emne 03" },
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
export const faginnholdLinks = navLinks.find(l => l.href === "/faginnhold")?.children || [];
export const oppgaverLinks = navLinks.find(l => l.href === "/oppgaver")?.children || [];