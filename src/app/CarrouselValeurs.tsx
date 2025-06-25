"use client";
import { useRef, useEffect } from "react";

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
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationFrame: number;
    let start: number | null = null;
    let scrollLeft = 0;
    const speed = 0.5; // pixels per frame, ajuster pour la vitesse

    function step(timestamp: number) {
      if (!track) return;
      if (start === null) start = timestamp;
      scrollLeft += speed;
      if (track.scrollWidth - track.clientWidth - scrollLeft <= 0) {
        scrollLeft = 0;
      }
      track.scrollLeft = scrollLeft;
      animationFrame = requestAnimationFrame(step);
    }
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplique les valeurs pour un effet de boucle fluide
  const valeursBoucle = [...valeurs, ...valeurs];

  return (
    <div
      ref={trackRef}
      className="w-full overflow-x-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="flex gap-8 min-w-max py-2">
        {valeursBoucle.map((v, i) => (
          <div
            key={v.title + i}
            className="bg-white rounded-2xl p-6 shadow-lg h-full mx-2 min-w-[320px] max-w-xs flex-shrink-0 animate-fade-in-up hover-lift transition-smooth"
          >
            <div className={`w-16 h-16 ${v.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-2xl">{v.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{v.title}</h3>
            <p className="text-gray-600">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 