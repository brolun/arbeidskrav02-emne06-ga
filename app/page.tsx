"use client";
import Image from "next/image";
import { Button } from "./components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/faginnhold");
  };

  return (
    <>
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="text-center md:text-left">
          <p className="mb-10 text-4xl font-semibold text-dark">
            Lær å mestre webens magi — fra nybegynner til trollmann.
          </p>
          <Button onClick={handleButtonClick}>Start din reise her</Button>
        </div>
        <Image
          src="/assets/wizard.png"
          alt="Trollmann som koder"
          width={400}
          height={400}
          className="max-w-md w-full h-auto"
        />
      </section>
    </>
  );
}
