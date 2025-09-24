import { faginnholdChildren } from "./FaginnholdChildren";
import { oppgaverChildren } from "./OppgaverChildren";

// For hodenavigasjon
export const navLinks = [
  { href: "/", label: "Hjem" },
  {
    href: "/faginnhold",
    label: "Faginnhold",
    children: faginnholdChildren,
  },
  {
    href: "/oppgaver",
    label: "Oppgaver",
    children: oppgaverChildren,
  },
];

// For SideBarLayout
export const faginnholdLinks =
  navLinks.find((l) => l.href === "/faginnhold")?.children || [];
export const oppgaverLinks =
  navLinks.find((l) => l.href === "/oppgaver")?.children || [];
