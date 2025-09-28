"use client";
import { Button } from "@/app/components/Button";
import { CodeSnippet, CodeResult } from "../components/FaginnholdChildLayout";
import React, { useState } from "react";

type Props = {
  snippet1: string;
  snippet2: string;
};

export default function JavascriptExampleClient({ snippet1, snippet2 }: Props) {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((n) => n * 2);
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <CodeSnippet title="Kode (eksempel 1: lister)">{snippet1}</CodeSnippet>
      <CodeResult title="Resultat">
        <p>Opprinnelige tall: {numbers.join(", ")}</p>
        <p>Doblede tall: {doubled.join(", ")}</p>
        <p>Summen av tallene: {sum}</p>
      </CodeResult>
      <CodeSnippet title="Kode (eksempel 2: klikk-teller)">
        {snippet2}
      </CodeSnippet>
      <CodeResult title="Resultat">
        <p>Antall klikk: {clicks}</p>
        <Button onClick={() => setClicks((c) => c + 1)} className="self-start">
          Klikk meg
        </Button>
      </CodeResult>
    </>
  );
}
