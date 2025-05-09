"use client";

import Button from "@/components/ui/buttons";
import { generateMetadata } from "@/utils/generateMetadata";
import { useEffect } from "react";
import { LuApple } from "react-icons/lu";

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
          <Button size="xs">Eat an apple</Button>
          <Button size="xs" variants="secondary">
            Eat an apple
          </Button>
          <Button size="xs" variants="outline">
            Eat an apple
          </Button>
          <Button size="xs" variants="disabled">
            Eat an apple
          </Button>
          <Button size="xs" icon={{ icon: LuApple }}>
            Eat Apple
          </Button>
          <Button size="xs" icon={{ icon: LuApple }} iconPosition="left">
            Eat Apple
          </Button>
          <Button
            size="xs"
            variants="icon"
            icon={{ icon: LuApple }}
            icontheme="accent"
          />
          <Button
            size="xs"
            variants="icon"
            icon={{ icon: LuApple }}
            icontheme="secondary"
          />
          <Button
            size="xs"
            variants="icon"
            icon={{ icon: LuApple }}
            icontheme="gray"
          />
          <Button size="xs" isLoading>
            Accent
          </Button>
          <Button size="xs" variants="icon" isLoading>
            Accent
          </Button>
        </div>
      </main>
    </div>
  );
}
