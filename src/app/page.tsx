import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#EEE7D9", color: "#2c2f28" }}
      className="min-h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-sans"
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="text-center py-20 px-6 sm:px-12 max-w-4xl mx-auto">
          <Image
            src="/logo.png"
            alt="Logo FryJoy"
            width={120}
            height={120}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Faites croustiller vos légumes avec style grâce à{" "}
            <span style={{ color: "#f16c2d" }}>FryJoy</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8" style={{ color: "#2c2f28" }}>
            Sain, rapide, et croustillant. Préparez vos snacks préférés à la maison en 5 minutes.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="#description"
              className="inline-block border px-6 py-3 rounded-full text-lg font-medium transition"
              style={{
                color: "#f16c2d",
                borderColor: "#f16c2d",
                backgroundColor: "#ffffff",
              }}
            >
              En savoir plus
            </a>
            <a
              href="#commande"
              className="inline-block text-white px-6 py-3 rounded-full text-lg font-medium transition"
              style={{
                backgroundColor: "#f16c2d",
              }}
            >
              Commander maintenant
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}