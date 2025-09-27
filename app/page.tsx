import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="text-center md:text-left">
          <p className="mb-10 text-4xl font-semibold text-dark">
            Lær å mestre webens magi — fra nybegynner til trollmann.
          </p>
          <Link href="/faginnhold" className="inline-block px-6 py-3 button">
            Start din reise her
          </Link>
        </div>
        <Image
          src="/wizard.png"
          alt="Trollmann som koder"
          width={400}
          height={400}
          className="max-w-md w-full h-auto"
        />
      </section>
    </>
  );
}
