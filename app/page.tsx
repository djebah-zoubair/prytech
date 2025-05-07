"use client";

import { generateMetadata } from "@/utils/generateMetadata";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Générer les métadonnées avec les arguments de la page
    const metadata = generateMetadata(
      "Accueil",
      "Prytech est une agence web et digitale spécialisée dans la création de sites web sur mesure...",
    );

    // Mettre à jour le titre de la page
    document.title = metadata.title;

    // Mettre à jour la balise meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = metadata.description;
  }, []); // Ce code s'exécute une seule fois au premier rendu de la page

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Prytech</h1>
      </main>
    </div>
  );
}
