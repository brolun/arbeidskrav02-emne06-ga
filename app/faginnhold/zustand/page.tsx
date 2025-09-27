"use client";

import { create } from "zustand";
import { useState } from "react";

type CounterState = {
  count: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
  dec: () => set((s) => ({ count: Math.max(0, s.count - 1) })),
  reset: () => set({ count: 0 }),
}));

export default function Page() {
  const { count, inc, dec, reset } = useCounterStore();
  const [showExample, setShowExample] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <section className="space-y-4">
        <h2>Zustand</h2>

        <p>
          <strong>Zustand</strong> er som en liten boks der en app kan lagre
          tall, data og informasjon, slik at man lett kan finne dem igjen og
          endre dem.
        </p>

        <p>
          I en vanlig nettside husker hver knapp eller del av skjermen bare sine
          egne data. Hvis flere forskjellige deler skal bruke den samme
          informasjonen (f.eks. en teller, en innlogget bruker eller en
          handlekurv), kan det fort bli rotete.
        </p>

        <p className="font-medium">Zustand løser dette problemet:</p>
        <ul className="list-disc list-inside">
          <li>
            I stedet for å lagre data mange steder, legger man dem i én felles
            «boks» (global tilstand).
          </li>
          <li>
            Hver del av appen kan da <strong>lese</strong> dataene og{" "}
            <strong>endre</strong> dem (f.eks. øke teller eller nullstille
            handlekurv).
          </li>
        </ul>

        <p>
          Slik blir appen enklere, og alt som skal oppdateres på skjermen endrer
          seg automatisk overalt hvor dataene brukes.
        </p>
      </section>

      <section className="space-y-4">
        <button
          type="button"
          onClick={() => setShowExample((v) => !v)}
          aria-expanded={showExample}
          className="button"
        >
          {showExample ? "Skjul eksempel" : "Eksempel"}
        </button>

        {showExample && (
          <div className="space-y-6">
            <h3>Kode (utdrag)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap break-words">
              {`type CounterState = {
  count: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
  dec: () => set((s) => ({ count: Math.max(0, s.count - 1) })),
  reset: () => set({ count: 0 }),
}));`}
            </pre>

            <h3>Resultat</h3>
            <p className="mb-2">Nåværende verdi: {count}</p>
            <div className="space-x-2">
              <button
                onClick={dec}
                className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded"
              >
                -1
              </button>
              <button
                onClick={inc}
                className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded"
              >
                +1
              </button>
              <button
                onClick={reset}
                className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded"
              >
                Nullstill
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
