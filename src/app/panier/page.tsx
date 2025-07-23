import SectionCommandePanier from "../SectionCommandePanier";
import Link from "next/link";

export default function PanierPage() {
  return (
    <div className="min-h-screen bg-light">
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <SectionCommandePanier />
      </div>
    </div>
  );
} 