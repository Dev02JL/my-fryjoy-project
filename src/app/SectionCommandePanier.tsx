"use client";
import { useState } from "react";
import Image from "next/image";

export default function SectionCommandePanier() {
  const [quantite, setQuantite] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const prixUnitaire = 69.99;
  const total = (quantite * prixUnitaire).toFixed(2);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  }

  return (
    <section id="commande" className="snap-section flex items-center justify-center section-alt min-h-screen">
      <div className="w-full max-w-5xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in-up">Commandez maintenant</h2>
          <p className="text-lg sm:text-xl mb-8 animate-fade-in-up delay-100">
            Remplissez le formulaire ci-dessous pour votre FryJoy.
          </p>
          <form className="space-y-6 text-left" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-medium mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="votre.email@exemple.com"
              />
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium mb-2">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="06 12 34 56 78"
              />
            </div>
            <div>
              <label htmlFor="adresse" className="block text-sm font-medium mb-2">
                Adresse complète
              </label>
              <textarea
                id="adresse"
                name="adresse"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="123 Rue de la Paix, 75001 Paris"
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="btn-innocent text-white hover-lift"
              >
                Commander
              </button>
            </div>
          </form>
        </div>
        {/* Panier */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center min-h-[400px] w-full">
          <h3 className="text-2xl font-bold mb-6">Votre panier</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-6">
            <Image
              src="/fryjoy.png"
              alt="FryJoy - Produit"
              width={120}
              height={120}
              className="mb-4 sm:mb-0 animate-scale-in"
              priority={false}
            />
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-gray-100 text-2xl font-bold flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
                  onClick={() => setQuantite(q => Math.max(1, q - 1))}
                  aria-label="Diminuer la quantité"
                >
                  -
                </button>
                <span className="text-2xl font-bold w-10 text-center">{quantite}</span>
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-gray-100 text-2xl font-bold flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
                  onClick={() => setQuantite(q => q + 1)}
                  aria-label="Augmenter la quantité"
                >
                  +
                </button>
              </div>
              <div className="mt-6 text-lg w-full flex flex-col items-center">
                <div className="flex justify-between w-full max-w-xs mb-2">
                  <span>Prix unitaire :</span>
                  <span className="font-bold">69,99&nbsp;€</span>
                </div>
                <div className="flex justify-between w-full max-w-xs mb-2">
                  <span>Quantité :</span>
                  <span className="font-bold">{quantite}</span>
                </div>
                <div className="flex justify-between w-full max-w-xs text-xl mt-4 border-t pt-4 font-bold">
                  <span>Total :</span>
                  <span>{total}&nbsp;€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Popup de succès */}
        {showSuccess && (
          <div className="fixed bottom-8 right-8 z-50 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg text-lg font-semibold animate-fade-in-up transition-smooth">
            ✅ Commande envoyée avec succès !
          </div>
        )}
      </div>
    </section>
  );
} 