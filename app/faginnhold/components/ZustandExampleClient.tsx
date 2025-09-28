"use client";
import { create } from "zustand";

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

export default function ZustandExampleClient() {
  const { count, inc, dec, reset } = useCounterStore();

  return (
    <>
      <p className="mb-2">Nåværende verdi: {count}</p>
      <div className="space-x-2 mt-5">
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
    </>
  );
}
