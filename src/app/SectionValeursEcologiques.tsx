"use client";
import CarrouselValeurs from "./CarrouselValeurs";

export default function SectionValeursEcologiques() {
  return (
    <section className="snap-section-auto min-h-screen flex flex-col justify-center items-center">
      <div className="text-center py-20 max-w-5xl w-full px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in-up">Nos Valeurs Écologiques</h2>
        <p className="text-lg sm:text-xl mb-12 animate-fade-in-up delay-100">
          FryJoy s&apos;engage pour un avenir plus durable et responsable.
        </p>
        <CarrouselValeurs />
      </div>
    </section>
  );
} 