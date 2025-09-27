import { Button } from "../../components/Button";

interface FaginnholdCardProps {
  label: string;
  desc: string;
  href: string;
  onClick: (href: string) => void;
}

export function FaginnholdCard({
  label,
  desc,
  href,
  onClick,
}: FaginnholdCardProps) {
  return (
    <div className="bg-dark p-5 rounded-lg space-y-4 shadow hover:shadow-lg transition flex flex-col justify-between h-full">
      <h3 className="text-light text-2xl font-semibold mb-0 mt-0">{label}</h3>
      <p className="text-light">{desc}</p>
      <Button onClick={() => onClick(href)} className="self-start">
        Les mer om {label}
      </Button>
    </div>
  );
}
