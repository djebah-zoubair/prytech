import Button from "@/components/ui/buttons";
import Typography from "@/components/ui/typography";
import { LuApple } from "react-icons/lu";

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Typography
          components="h1"
          variants="h4"
          weight="medium"
          className="max-sm:text-3xl"
        >
          Buttons – Design System
        </Typography>
        <div className="grid grid-cols-3">
          <Typography
            components="p"
            variants="body-base"
            className="max-sm:text-3xs col-span-3 text-gray-600 sm:col-span-2"
          >
            Les boutons permettent de déclencher des actions ou de naviguer dans
            l’interface. Ils existent en plusieurs variantes (primaire,
            secondaire, désactivé, avec icône...) et respectent la cohérence
            visuelle du système de design.
          </Typography>
        </div>
      </div>

      <div className="space-y-4 rounded-xl border border-dashed border-gray-300">
        <div className="flex flex-col gap-2 border-b border-dashed border-gray-300 p-4 lg:flex-row">
          {/* Section taille */}
          <div className="flex-1">
            <div className="flex">xs</div>
          </div>

          {/* Section variantes */}
          <div className="flex-[6]">
            <div className="flex flex-wrap gap-2">
              <Button size="xs">Accent</Button>
              <Button size="xs" variants="secondary">
                Secondary
              </Button>
              <Button size="xs" variants="outline">
                Outline
              </Button>
              <Button size="xs" variants="disabled">
                disabled
              </Button>
              <Button size="xs" icon={{ icon: LuApple }}>
                Icon Right
              </Button>
              <Button size="xs" icon={{ icon: LuApple }} iconPosition="left">
                Icon Left
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
              <Button size="xs" variants="icon" isLoading icontheme="secondary">
                Accent
              </Button>
              <Button size="xs" variants="icon" isLoading icontheme="gray">
                Accent
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b border-dashed border-gray-300 p-4 lg:flex-row">
          <div className="flex-1">
            <div className="flex">sm</div>
          </div>

          <div className="flex-[6]">
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Accent</Button>
              <Button size="sm" variants="secondary">
                Secondary
              </Button>
              <Button size="sm" variants="outline">
                Outline
              </Button>
              <Button size="sm" variants="disabled">
                disabled
              </Button>
              <Button size="sm" icon={{ icon: LuApple }}>
                Icon Right
              </Button>
              <Button size="sm" icon={{ icon: LuApple }} iconPosition="left">
                Icon Left
              </Button>
              <Button
                size="sm"
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="accent"
              />
              <Button
                size="sm"
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="secondary"
              />
              <Button
                size="sm"
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="gray"
              />
              <Button size="sm" isLoading>
                Accent
              </Button>
              <Button size="sm" variants="icon" isLoading>
                Accent
              </Button>
              <Button size="sm" variants="icon" isLoading icontheme="secondary">
                Accent
              </Button>
              <Button size="sm" variants="icon" isLoading icontheme="gray">
                Accent
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b border-dashed border-gray-300 p-4 lg:flex-row">
          <div className="flex-1">
            <div className="flex">base</div>
          </div>

          <div className="flex-[6]">
            <div className="flex flex-wrap gap-2">
              <Button>Accent</Button>
              <Button variants="secondary">Secondary</Button>
              <Button variants="outline">Outline</Button>
              <Button variants="disabled">disabled</Button>
              <Button icon={{ icon: LuApple }}>Icon Right</Button>
              <Button icon={{ icon: LuApple }} iconPosition="left">
                Icon Left
              </Button>
              <Button
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="accent"
              />
              <Button
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="secondary"
              />
              <Button
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="gray"
              />
              <Button isLoading>Accent</Button>
              <Button variants="icon" isLoading>
                Accent
              </Button>
              <Button variants="icon" isLoading icontheme="secondary">
                Accent
              </Button>
              <Button variants="icon" isLoading icontheme="gray">
                Accent
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b border-dashed border-gray-300 p-4 lg:flex-row">
          <div className="flex-1">
            <div className="flex">lg</div>
          </div>

          <div className="flex-[6]">
            <div className="flex flex-wrap gap-2">
              <Button size="lg">Accent</Button>
              <Button size="lg" variants="secondary">
                Secondary
              </Button>
              <Button size="lg" variants="outline">
                Outline
              </Button>
              <Button size="lg" variants="disabled">
                disabled
              </Button>
              <Button size="lg" icon={{ icon: LuApple }}>
                Icon Right
              </Button>
              <Button size="lg" icon={{ icon: LuApple }} iconPosition="left">
                Icon Left
              </Button>
              <Button
                size="lg"
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="accent"
              />
              <Button
                size="lg"
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="secondary"
              />
              <Button
                size="lg"
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="gray"
              />
              <Button size="lg" isLoading>
                Accent
              </Button>
              <Button size="lg" variants="icon" isLoading>
                Accent
              </Button>
              <Button size="lg" variants="icon" isLoading icontheme="secondary">
                Accent
              </Button>
              <Button size="lg" variants="icon" isLoading icontheme="gray">
                Accent
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b border-dashed border-gray-300 p-4 lg:flex-row">
          <div className="flex-1">
            <div className="flex">xl</div>
          </div>

          <div className="flex-[6]">
            <div className="flex flex-wrap gap-2">
              <Button size="xl">Accent</Button>
              <Button size="xl" variants="secondary">
                Secondary
              </Button>
              <Button size="xl" variants="outline">
                Outline
              </Button>
              <Button size="xl" variants="disabled">
                disabled
              </Button>
              <Button size="xl" icon={{ icon: LuApple }}>
                Icon Right
              </Button>
              <Button size="xl" icon={{ icon: LuApple }} iconPosition="left">
                Icon Left
              </Button>
              <Button
                size="xl"
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="accent"
              />
              <Button
                size="xl"
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="secondary"
              />
              <Button
                size="xl"
                variants="icon"
                icon={{ icon: LuApple }}
                icontheme="gray"
              />
              <Button size="xl" isLoading>
                Accent
              </Button>
              <Button size="xl" variants="icon" isLoading>
                Accent
              </Button>
              <Button size="xl" variants="icon" isLoading icontheme="secondary">
                Accent
              </Button>
              <Button size="xl" variants="icon" isLoading icontheme="gray">
                Accent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
