import Image from "next/image";
import SectionValeursEcologiques from "./SectionValeursEcologiques";
import Link from "next/link";

export default function Home() {
  return (
    <div className="snap-container">
      {/* Section Hero */}
      <section className="snap-section flex items-center justify-center">
        <div className="text-center py-20 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche - Texte */}
            <div className="order-2 lg:order-1">
              <h1 className="w-full font-bold mb-6 tracking-tight text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl whitespace-normal animate-fade-in-up delay-200">
                Faites croustiller vos légumes avec style grâce à{" "}
                <span className="text-primary">FryJoy</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 animate-fade-in-up delay-300 text-center lg:text-left">
                Sain, rapide, et croustillant. Préparez vos snacks préférés à la maison en 5 minutes.
              </p>
              <div className="flex justify-center lg:justify-start flex-wrap gap-4 animate-fade-in-up delay-400">
                <a
                  href="#description"
                  className="btn-innocent text-white hover-lift"
                >
                  En savoir plus
                </a>
                <Link
                  href="/panier"
                  className="inline-block border border-primary px-6 py-3 rounded-full text-lg font-medium transition-smooth bg-white text-primary hover-lift"
                >
                  Commander maintenant
                </Link>
              </div>
            </div>
            
            {/* Colonne droite - Image du produit */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/fryjoy.png"
                  alt="FryJoy - Machine à chips et crackers"
                  width={500}
                  height={500}
                  className="mx-auto animate-scale-in delay-100 hover-scale transition-smooth"
                  priority
                />
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Description */}
      <section id="description" className="snap-section flex items-center justify-center bg-light">
        <div className="w-full max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-primary animate-fade-in-up text-center">
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {/* Étape 1 */}
            <div className="bg-white rounded-2xl shadow-md p-12 px-4 flex flex-col items-center animate-fade-in-up delay-100 min-w-[320px] max-w-sm">
              <div className="text-6xl mb-4">🥕</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Préparez vos légumes</h3>
              <p className="text-gray-700 text-center">Lavez, coupez et assaisonnez vos légumes préférés.</p>
            </div>
            {/* Étape 2 */}
            <div className="bg-white rounded-2xl shadow-md p-12 px-4 flex flex-col items-center animate-fade-in-up delay-200 min-w-[320px] max-w-sm">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Lancez FryJoy</h3>
              <p className="text-gray-700 text-center">Placez-les dans la machine, choisissez le mode, appuyez sur Start.</p>
            </div>
            {/* Étape 3 */}
            <div className="bg-white rounded-2xl shadow-md p-12 px-4 flex flex-col items-center animate-fade-in-up delay-300 min-w-[320px] max-w-sm">
              <div className="text-6xl mb-4">😋</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Savourez !</h3>
              <p className="text-gray-700 text-center">En quelques minutes, dégustez des snacks croustillants, sains et faits maison.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs Écologiques */}
      <SectionValeursEcologiques />

      {/* Section Fiche Technique */}
      <section className="snap-section flex items-center justify-center bg-white">
        <div className="w-full max-w-3xl mx-auto py-20 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-primary text-center">Fiche technique FryJoy</h2>
          <div className="bg-light rounded-2xl shadow-md p-8">
            <ul className="divide-y divide-gray-200">
              <li className="flex justify-between py-4">
                <span className="font-semibold">Dimensions</span>
                <span>32 x 24 x 24 cm</span>
              </li>
              <li className="flex justify-between py-4">
                <span className="font-semibold">Poids</span>
                <span>3,2 kg</span>
              </li>
              <li className="flex justify-between py-4">
                <span className="font-semibold">Capacité</span>
                <span>1,5 L</span>
              </li>
              <li className="flex justify-between py-4">
                <span className="font-semibold">Matériaux</span>
                <span>Cuve inox recyclée, plastique sans BPA</span>
              </li>
              <li className="flex justify-between py-4">
                <span className="font-semibold">Consommation</span>
                <span>800 W</span>
              </li>
              <li className="flex justify-between py-4">
                <span className="font-semibold">Compatibilité</span>
                <span>Fruits, légumes, crackers</span>
              </li>
              <li className="flex justify-between py-4">
                <span className="font-semibold">Entretien</span>
                <span>Cuve amovible, passe au lave-vaisselle</span>
              </li>
              <li className="flex justify-between py-4">
                <span className="font-semibold">Garantie</span>
                <span>2 ans</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/panier" className="btn-innocent text-white text-lg font-semibold hover-lift">
              Commander
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}