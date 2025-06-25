import Image from "next/image";
import SectionValeursEcologiques from "./SectionValeursEcologiques";

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
                <a
                  href="#commande"
                  className="inline-block border border-primary px-6 py-3 rounded-full text-lg font-medium transition-smooth bg-white text-primary hover-lift"
                >
                  Commander maintenant
                </a>
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
      <section id="description" className="snap-section flex items-center justify-center section-alt">
        <div className="text-center py-20 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in-up">Comment ça marche ?</h2>
          <p className="text-lg sm:text-xl mb-4 animate-fade-in-up delay-100">
            FryJoy est une machine révolutionnaire conçue pour réaliser chez vous des chips et crackers maison, sains et savoureux. Inspirée des meilleures technologies d'Air Fryer et de déshydratation, elle intègre une cuve unique issue de la LG HomeBrew pour une expérience simplifiée et performante.
          </p>
          <p className="text-lg sm:text-xl mb-4 animate-fade-in-up delay-200">
            Variez les plaisirs : chips nature, aux fruits, aux légumes ou encore crackers croustillants… Laissez libre cours à votre créativité !
          </p>
          <p className="text-lg sm:text-xl mb-4 animate-fade-in-up delay-300">
            Idéale pour des moments conviviaux entre amis, des goûters pour enfants, des brunchs ou des événements, FryJoy s'adapte à toutes vos envies.
          </p>
          <p className="text-lg sm:text-xl animate-fade-in-up delay-400">
            Découvrez également notre catalogue de recettes exclusives, ou inventez les vôtres selon vos goûts et inspirations du moment.
          </p>
        </div>
      </section>

      {/* Section Valeurs Écologiques */}
      <SectionValeursEcologiques />

      {/* Section Commande */}
      <section id="commande" className="snap-section flex items-center justify-center section-alt">
        <div className="text-center py-20 max-w-2xl mx-auto w-full px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in-up">Commandez maintenant</h2>
          <p className="text-lg sm:text-xl mb-8 animate-fade-in-up delay-100">
            Remplissez le formulaire ci-dessous pour votre FryJoy.
          </p>
          
          <form className="space-y-6 text-left animate-fade-in-up delay-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="animate-fade-in-left delay-300">
                <label htmlFor="prenom" className="block text-sm font-medium mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="Votre prénom"
                />
              </div>
              
              <div className="animate-fade-in-right delay-300">
                <label htmlFor="nom" className="block text-sm font-medium mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="Votre nom"
                />
              </div>
            </div>
            
            <div className="animate-fade-in-up delay-400">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="votre.email@exemple.com"
              />
            </div>
            
            <div className="animate-fade-in-up delay-500">
              <label htmlFor="telephone" className="block text-sm font-medium mb-2">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="06 12 34 56 78"
              />
            </div>
            
            <div className="animate-fade-in-up delay-500">
              <label htmlFor="adresse" className="block text-sm font-medium mb-2">
                Adresse complète
              </label>
              <textarea
                id="adresse"
                name="adresse"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="123 Rue de la Paix, 75001 Paris"
              ></textarea>
            </div>
            
            <div className="text-center pt-4 animate-slide-in-bottom delay-500">
              <button
                type="submit"
                className="btn-innocent text-white hover-lift"
              >
                Commander
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}