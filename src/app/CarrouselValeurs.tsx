import { useEffect, useState } from "react";

const valeurs = [
  {
    icon: "♻️",
    title: "Recyclage LG HomeBrew",
    desc: "Notre machine utilise une cuve unique issue du recyclage de la LG HomeBrew, donnant une seconde vie à des composants de qualité.",
    color: "bg-green-100",
  },
  {
    icon: "🏭",
    title: "Production Locale",
    desc: "FryJoy est conçu et assemblé localement, réduisant l'empreinte carbone et soutenant l'économie locale.",
    color: "bg-blue-100",
  },
  {
    icon: "⚡",
    title: "Énergie Économique",
    desc: "Technologie optimisée pour une consommation d'énergie réduite, respectueuse de l'environnement et de votre facture.",
    color: "bg-yellow-100",
  },
  {
    icon: "🌱",
    title: "Matériaux Durables",
    desc: "Composants sélectionnés pour leur durabilité et leur impact environnemental minimal, garantissant une longue durée de vie.",
    color: "bg-green-100",
  },
  {
    icon: "🗑️",
    title: "Réduction des Déchets",
    desc: "Préparation maison = moins d'emballages plastiques et de déchets alimentaires. Un geste simple pour la planète.",
    color: "bg-purple-100",
  },
  {
    icon: "🚚",
    title: "Circuit Court",
    desc: "Distribution en circuit court pour minimiser les transports et réduire l'impact environnemental de la logistique.",
    color: "bg-orange-100",
  },
];

export default function CarrouselValeurs() {
  const [index, setIndex] = useState(0);
  const nbCartes = valeurs.length;
  const nbAffichees = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 2;

  // Responsive : 1 carte sur mobile, 2 sur desktop
  const [cardsToShow, setCardsToShow] = useState(2);
  useEffect(() => {
    function handleResize() {
      setCardsToShow(window.innerWidth < 768 ? 1 : 2);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Défilement automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + cardsToShow) % nbCartes);
    }, 4000);
    return () => clearInterval(timer);
  }, [cardsToShow, nbCartes]);

  // Affichage des cartes
  const cartes = [];
  for (let i = 0; i < cardsToShow; i++) {
    const idx = (index + i) % nbCartes;
    const v = valeurs[idx];
    cartes.push(
      <div key={v.title} className="animate-fade-in-up hover-lift transition-smooth">
        <div className="bg-white rounded-2xl p-6 shadow-lg h-full mx-2">
          <div className={`w-16 h-16 ${v.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <span className="text-2xl">{v.icon}</span>
          </div>
          <h3 className="text-xl font-bold mb-3">{v.title}</h3>
          <p className="text-gray-600">{v.desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-stretch w-full gap-4 transition-smooth">
      {cartes}
    </div>
  );
} 