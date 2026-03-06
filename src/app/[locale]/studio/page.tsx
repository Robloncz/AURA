import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export default function StudioPage() {
  const t = useTranslations("studio");

  return (
    <main>
        {/* Hero */}
        <section className="aura-orb aura-orb-subhero relative overflow-hidden px-6 pt-28 pb-16 sm:pt-32 sm:pb-24 md:pb-32">
          <div className="absolute inset-0 bg-linear-to-b from-aura-blush/40 via-aura-peach/20 to-transparent" />
          <FadeIn className="relative mx-auto max-w-3xl" duration={0.9}>
            <h1 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-5xl md:text-6xl">
              {t("heading")}
            </h1>
            <p className="mt-4 font-accent text-lg italic text-aura-warm-gray sm:mt-6 sm:text-xl">
              {t("intro")}
            </p>
          </FadeIn>
        </section>

        {/* Description */}
        <section className="aura-orb aura-orb-content px-6 pb-12 sm:pb-16">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
              {t("description")}
            </p>
          </FadeIn>
        </section>

        {/* The Loft */}
        <section className="aura-orb aura-orb-cream aura-flow-cream px-6 py-12 sm:py-16 md:py-20">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
              {t("loft_heading")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
              {t("loft_description")}
            </p>
          </FadeIn>
        </section>

        {/* Yogaraum */}
        <section className="aura-orb aura-orb-content px-6 py-12 sm:py-16 md:py-20">
          <FadeIn className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
              {t("yogaraum_heading")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
              {t("yogaraum_description")}
            </p>
          </FadeIn>
        </section>

        {/* Sauna & Ritual Experiences */}
        <section className="aura-orb aura-orb-gray aura-flow-light-gray px-6 py-12 sm:py-16 md:py-20">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
              {t("sauna_heading")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
              {t("sauna_description")}
            </p>
          </FadeIn>
        </section>

        {/* Sauna Drop-in */}
        <section className="aura-orb aura-orb-content px-6 py-12 sm:py-16 md:py-20">
          <FadeIn className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
              {t("sauna_dropin_heading")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
              {t("sauna_dropin_description")}
            </p>
          </FadeIn>
        </section>

        {/* Kursplan */}
        <section className="px-6 pb-16 sm:pb-24 md:pb-32">
          <FadeIn className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-aura-cream p-6 text-center sm:p-12">
              <p className="font-accent text-xl font-semibold text-aura-charcoal sm:text-2xl">
                {t("kursplan")}
              </p>
              <p className="mt-3 text-sm text-aura-warm-gray sm:mt-4">
                {t("kursplanDescription")}
              </p>
            </div>
          </FadeIn>
        </section>
    </main>
  );
}
