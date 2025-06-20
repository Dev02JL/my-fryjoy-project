import Image from "next/image";

export default function Home() {
  return (
    <div className="snap-container">
      {/* Section Hero */}
      <section className="snap-section flex items-center justify-center">
        <div className="text-center py-20">
          <Image
            src="/logo.png"
            alt="Logo FryJoy"
            width={120}
            height={120}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="w-full font-bold mb-6 tracking-tight text-center text-4xl sm:text-5xl whitespace-normal">
            Faites croustiller vos légumes avec style grâce à{" "}
            <span className="text-primary">FryJoy</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Sain, rapide, et croustillant. Préparez vos snacks préférés à la maison en 5 minutes.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="#description"
              className="inline-block border border-primary px-6 py-3 rounded-full text-lg font-medium transition bg-white text-primary"
            >
              En savoir plus
            </a>
            <a
              href="#commande"
              className="inline-block text-white px-6 py-3 rounded-full text-lg font-medium transition bg-primary"
            >
              Commander maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Section Description */}
      <section id="description" className="snap-section flex items-center justify-center bg-white">
        <div className="text-center py-20 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Comment ça marche ?</h2>
          <p className="text-lg sm:text-xl mb-4">
            FryJoy est une machine révolutionnaire conçue pour réaliser chez vous des chips et crackers maison, sains et savoureux. Inspirée des meilleures technologies d'Air Fryer et de déshydratation, elle intègre une cuve unique issue de la LG HomeBrew pour une expérience simplifiée et performante.
          </p>
          <p className="text-lg sm:text-xl mb-4">
            Variez les plaisirs : chips nature, aux fruits, aux légumes ou encore crackers croustillants… Laissez libre cours à votre créativité !
          </p>
          <p className="text-lg sm:text-xl mb-4">
            Idéale pour des moments conviviaux entre amis, des goûters pour enfants, des brunchs ou des événements, FryJoy s'adapte à toutes vos envies.
          </p>
          <p className="text-lg sm:text-xl">
            Découvrez également notre catalogue de recettes exclusives, ou inventez les vôtres selon vos goûts et inspirations du moment.
          </p>
        </div>
      </section>

      {/* Section Produits */}
      <section className="snap-section flex items-center justify-center">
        <div className="text-center py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Nos Produits</h2>
          <p className="text-lg sm:text-xl mb-8">
            Découvrez notre gamme de produits innovants et variés pour des légumes croustillants à la perfection.
          </p>
          <Image
            src="/fryjoy.png"
            alt="FryJoy - Produit"
            width={320}
            height={320}
            className="mx-auto mb-8"
            priority={false}
          />
        </div>
      </section>

      {/* Section Commande */}
      <section id="commande" className="snap-section flex items-center justify-center bg-white">
        <div className="text-center py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Commandez maintenant</h2>
          <p className="text-lg sm:text-xl mb-8">
            Profitez de nos offres spéciales et commencez à préparer des légumes croustillants dès aujourd'hui.
          </p>
        </div>
      </section>
    </div>
  );
}