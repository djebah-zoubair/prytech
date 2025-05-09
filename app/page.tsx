"use client";

import Button from "@/components/ui/buttons";
import Typography from "@/components/ui/typography";
import { generateMetadata } from "@/utils/generateMetadata";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Générer les métadonnées avec les arguments de la page
    const metadata = generateMetadata(
      "Accueil",
      "Prytech est une agence web et digitale spécialisée dans la création de sites web sur mesure..."
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
        <div className="flex gap-4">
          <Button size="xs">Accent</Button>
          <Button size="xs" variants="secondary">
            Accent
          </Button>
          <Button size="xs" variants="outline">
            Accent
          </Button>
          <Button size="xs" variants="disabled">
            Accent
          </Button>
        </div>

        <div className="flex gap-4">
          <Button size="sm">Accent</Button>
          <Button size="sm" variants="secondary">
            Accent
          </Button>
          <Button size="sm" variants="outline">
            Accent
          </Button>
          <Button size="sm" variants="disabled">
            Accent
          </Button>
        </div>

        <div className="flex gap-4">
          <Button size="base">Accent</Button>
          <Button size="base" variants="secondary">
            Accent
          </Button>
          <Button size="base" variants="outline">
            Accent
          </Button>
          <Button size="base" variants="disabled">
            Accent
          </Button>
        </div>

        <div className="flex gap-4">
          <Button size="lg">Accent</Button>
          <Button size="lg" variants="secondary">
            Accent
          </Button>
          <Button size="lg" variants="outline">
            Accent
          </Button>
          <Button size="lg" variants="disabled">
            Accent
          </Button>
        </div>

        <div className="flex gap-4">
          <Button size="xl">Accent</Button>
          <Button size="xl" variants="secondary">
            Accent
          </Button>
          <Button size="xl" variants="outline">
            Accent
          </Button>
          <Button size="xl" variants="disabled">
            Accent
          </Button>
        </div>
      </main>
    </div>
  );
}
