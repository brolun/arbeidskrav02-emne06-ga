"use client";
import { useState } from "react";
import { Button } from "@/app/components/Button";

type HpChar = {
  name: string;
  house?: string;
  actor?: string;
  image?: string;
};

export default function ApiPageClient() {
  const [items, setItems] = useState<HpChar[]>([]);
  const [loading, setLoading] = useState(false);

  async function hentHpKarakterer() {
    try {
      setLoading(true);
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const all: HpChar[] = await res.json();

      const randomFive = all
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)
        .map(({ name, house, actor, image }) => ({
          name,
          house,
          actor,
          image,
        }));

      setItems(randomFive);
    } catch (e) {
      console.error("Feil ved henting:", e);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button onClick={hentHpKarakterer} disabled={loading}>
        {loading ? "Laster..." : "Hent 5 karakterer"}
      </Button>
      {items.length > 0 ? (
        <ul className="list-disc list-inside space-y-1">
          {items.map((it, idx) => (
            <li key={idx}>
              {it.name}
              {it.house ? ` — ${it.house}` : ""}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p className="text-gray-500">Ingen data hentet ennå.</p>
      )}
    </>
  );
}
