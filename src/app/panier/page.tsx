import SectionCommandePanier from "../SectionCommandePanier";
import Link from "next/link";

export default function PanierPage() {
  return (
    <div className="min-h-screen bg-light">
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <div className="flex justify-center md:justify-start mb-8">
          <Link
            href="/"
            className="btn-innocent flex items-center gap-2 text-white text-lg font-semibold hover-lift px-6 py-3"
            style={{ minWidth: 0 }}
          >
            <span className="text-2xl">←</span>
            Retour à l&apos;accueil
          </Link>
        </div>
        <SectionCommandePanier />
      </div>
    </div>
  );
} 