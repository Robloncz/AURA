import { useTranslations } from "next-intl";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { CardHover } from "@/components/motion/CardHover";

export default function PhilosophyPage() {
  const t = useTranslations("philosophy");

  return (
    <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-28 pb-16 sm:pt-32 sm:pb-24 md:pb-32">
          <div className="absolute inset-0 bg-linear-to-b from-aura-blush/40 via-aura-peach/20 to-transparent aura-ambient-subhero" />
          <FadeIn className="relative mx-auto max-w-3xl" duration={0.9}>
            <h1 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-5xl md:text-6xl">
              {t("heading")}
            </h1>
            <p className="mt-4 font-accent text-lg italic text-aura-warm-gray sm:mt-6 sm:text-xl">
              {t("intro")}
            </p>
          </FadeIn>
        </section>

        {/* Main description */}
        <section className="px-6 pb-12 sm:pb-16">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
              {t("description")}
            </p>
          </FadeIn>
        </section>

        {/* A Space to Remember */}
        <section className="px-6 pb-12 sm:pb-16">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
              {t("remember_heading")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
              {t("remember_text")}
            </p>
          </FadeIn>
        </section>

        {/* Three Pillars */}
        <section className="aura-flow-cream px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
                {t("pillars_heading")}
              </h2>
            </FadeIn>
            <Stagger className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-3" stagger={0.15}>
              {(["body", "clarity", "community"] as const).map((key) => (
                <StaggerItem key={key}>
                  <CardHover className="rounded-2xl bg-aura-white p-6 sm:p-8">
                    <h3 className="font-accent text-xl font-semibold text-aura-orange sm:text-2xl">
                      {t(`pillar_${key}_title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-aura-warm-gray sm:mt-4">
                      {t(`pillar_${key}_text`)}
                    </p>
                  </CardHover>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Anti-consumption */}
        <section className="px-6 py-12 sm:py-16 md:py-20">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
              {t("anticonsumption_heading")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
              {t("anticonsumption_text")}
            </p>
          </FadeIn>
        </section>

        {/* Ich habe genug */}
        <section className="relative overflow-hidden px-6 py-12 sm:py-16 md:py-20">
          <div className="absolute inset-0 bg-linear-to-br from-aura-blush/20 via-aura-peach/10 to-transparent aura-flow-mask aura-ambient-philosophy" />
          <FadeIn className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl md:text-4xl">
              {t("enough_heading")}
            </h2>
            <p className="mt-4 font-accent text-base italic leading-relaxed text-aura-warm-gray sm:text-lg">
              {t("enough_text")}
            </p>
          </FadeIn>
        </section>

        {/* Urban Ritualraum */}
        <section className="px-6 pb-16 sm:pb-24 md:pb-32">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
              {t("ritualraum_heading")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
              {t("ritualraum_text")}
            </p>
          </FadeIn>
        </section>
    </main>
  );
}
