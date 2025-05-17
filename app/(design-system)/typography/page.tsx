import Typography from "@/components/ui/typography";

export default function TypographyPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Typography
          components="h1"
          variants="h4"
          weight="medium"
          className="max-sm:text-3xl"
        >
          Typographie – Design System
        </Typography>
        <div className="grid grid-cols-3">
          <Typography
            components="p"
            variants="body-base"
            className="max-sm:text-3xs col-span-3 text-gray-600 sm:col-span-2"
          >
            Découvrez les règles typographiques utilisées dans notre design
            system. Cette section définit les styles de texte standards (titres,
            paragraphes, légendes, etc.) avec leurs tailles, graisses,
            interlignes et comportements responsives. L’objectif est d’assurer
            une cohérence visuelle et une hiérarchie claire dans l’ensemble de
            l’interface.
          </Typography>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              Display
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-8xl: 7.5rem | 120px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.375rem | -6px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 500
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 7.5rem | 120px
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography components="h1" variants="display">
              Typographie.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              H1
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-7xl: 4.5rem | 72px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.375rem | -4.499px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 600
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 5rem | 80px
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography components="p" variants="h1">
              Typographie.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              H2
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-6xl: 3.4375rem | 55px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.1562rem | -2.499px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 500
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 3.75rem | 60px
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography components="p" variants="h2">
              Une typographie claire pour une interface cohérente et accessible.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              H3
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-5xl: 3rem | 48px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.1rem | -1.6px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 500
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 3.375rem | 54px
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography components="p" variants="h3">
              Une typographie claire pour une interface cohérente et accessible.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              H4
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-4xl: 2.25rem | 36px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.075rem | -1.2px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 500
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 2.75rem | 44px
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography components="p" variants="h4">
              Une typographie claire pour une interface cohérente et accessible.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              H5
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-3xl: 1.75rem | 28px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.05rem | -0.8px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 500
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 2.125rem | 34px
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography components="p" variants="h5">
              Une typographie claire pour une interface cohérente et accessible.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              Lead
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-2xl: 1.5rem | 24px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.0625rem | -1px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 400 / 500
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 1.875rem | 30px
            </Typography>
          </div>
          <div className="col-span-2 flex flex-col space-y-4">
            <Typography components="p" variants="lead" weight="regular">
              Une typographie claire pour une interface cohérente et accessible.
            </Typography>
            <Typography components="p" variants="lead" weight="medium">
              Une typographie claire pour une interface cohérente et accessible.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              Body-lg
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-lg: 1.3125em | 21px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.05rem | -0.8px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 400
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 1.875rrem | 30px
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography components="p" variants="body-lg">
              Une typographie claire pour une interface cohérente et accessible.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              Body-base
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-base: 1.0625em | 17px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.0437rem | -0.699px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 400
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 1.5625rrem | 25px
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography components="p" variants="body-base">
              Une typographie claire pour une interface cohérente et accessible.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              Body-sm
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-sm: 0.9375em | 15px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.0375rem | -0.6px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 400
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 1.5rem | 24px
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography components="p" variants="body-sm">
              Une typographie claire pour une interface cohérente et accessible.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              Caption 1
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-xs: 1.25rem | 20px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.0375rem | -0.6px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 400 / 500
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 1.5rem | 24px
            </Typography>
          </div>
          <div className="col-span-2">
            <div className="col-span-2 flex flex-col space-y-4">
              <Typography components="p" variants="xs">
                Une typographie claire pour une interface cohérente et
                accessible.
              </Typography>
              <Typography components="p" variants="xs" weight="medium">
                Une typographie claire pour une interface cohérente et
                accessible.
              </Typography>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              Caption 2
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-2xs: 1.25rem | 20px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.0188rem | -0.301px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 400 / 500
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 1.25rem | 20px
            </Typography>
          </div>
          <div className="col-span-2">
            <div className="col-span-2 flex flex-col space-y-4">
              <Typography components="p" variants="2xs">
                Une typographie claire pour une interface cohérente et
                accessible.
              </Typography>
              <Typography components="p" variants="2xs" weight="medium">
                Une typographie claire pour une interface cohérente et
                accessible.
              </Typography>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              Caption 3
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-3xs: 1rem | 16px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.0312rem | -0.499px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 400 / 500
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 1.125rem | 18px
            </Typography>
          </div>
          <div className="col-span-2">
            <div className="col-span-2 flex flex-col space-y-4">
              <Typography components="p" variants="3xs">
                Une typographie claire pour une interface cohérente et
                accessible.
              </Typography>
              <Typography components="p" variants="3xs" weight="medium">
                Une typographie claire pour une interface cohérente et
                accessible.
              </Typography>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center border-b border-gray-100 py-16">
          <div className="flex flex-col">
            <Typography components="h2" variants="lead">
              Caption 4
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Text-4xs: 0.8125rem | 13px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Letter spacing: -0.0125rem | -0.2px
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Font weight: 400 / 500
            </Typography>
            <Typography components="h2" variants="body-sm" themes="gray">
              Line height: 0.9375rem | 15px
            </Typography>
          </div>
          <div className="col-span-2">
            <div className="col-span-2 flex flex-col space-y-4">
              <Typography components="p" variants="4xs">
                Une typographie claire pour une interface cohérente et
                accessible.
              </Typography>
              <Typography components="p" variants="4xs" weight="medium">
                Une typographie claire pour une interface cohérente et
                accessible.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
