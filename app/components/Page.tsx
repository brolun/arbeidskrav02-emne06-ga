import { ReactNode } from "react";

export function Page({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="px-4 md:px-8 py-8 mx-auto max-w-5xl w-full">
      <h2 className="text-3xl font-semibold text-center mb-8 mt-4">{title}</h2>
      {children}
    </main>
  );
}
