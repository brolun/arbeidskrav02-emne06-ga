export const metadata = {
  title: "The Wizard of Web | Faginnhold",
};

import { faginnholdChildren } from "../components/FaginnholdChildren";
import { Page } from "../components/Page";
import FaginnholdParentClient from "./components/FaginnholdParentClient";

export default function FaginnholdParentPage() {
  return (
    <Page title="Faginnhold">
      <p className="text-center mb-10">
        Her får du en oversikt over hva du kan lære i de ulike seksjonene. Klikk
        deg videre for eksempler og forklaringer.
      </p>
      <FaginnholdParentClient faginnholdChildren={faginnholdChildren} />
    </Page>
  );
}
