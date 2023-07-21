import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative gap-10 place-items-center before:absolute before:h-[100vh] before:w-[100vh] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="flex gap-10 items-center justify-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="https://evolutecc.com/images/navbar/evolutecc-logo-blanco.svg"
            style={{ filter: "drop-shadow(0 0 0.3rem #ffffff70) invert(0)" }}
            alt="Next.js Logo"
            width={400}
            height={400}
            priority
          />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/io-logo-2023.png"
            style={{ filter: "drop-shadow(0 0 0.3rem #ffffff70) invert(0)" }}
            alt="Next.js Logo"
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="mt-10 text-center font-bold text-3xl">
          <h1> Como iniciar en Cloud - Luis Carlos Reyes Vanegas - EvolutecC </h1>
        </div>
      </div>
    </main>
  );
}
