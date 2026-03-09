import { useTranslations } from "next-intl";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { CardHover } from "@/components/motion/CardHover";

export default function StudioPage() {
  const t = useTranslations("studio");

  return (
    <main>
        {/* Hero */}
        <section className="aura-orb aura-orb-subhero relative overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-28 md:pb-36">
          <div className="absolute inset-0 bg-linear-to-b from-aura-blush/40 via-aura-peach/20 to-transparent" />
          <FadeIn className="relative mx-auto max-w-3xl" duration={0.9}>
            <h1 className="font-accent text-4xl font-semibold text-aura-charcoal sm:text-5xl md:text-6xl">
              {t("heading")}
            </h1>
            <p className="mt-5 font-accent text-lg italic leading-relaxed text-aura-warm-gray sm:mt-7 sm:text-xl md:text-2xl">
              {t("intro")}
            </p>
          </FadeIn>
        </section>

        {/* Description */}
        <section className="aura-orb aura-orb-content px-6 py-16 sm:py-20">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-aura-warm-gray sm:text-lg">
              {t("description")}
            </p>
          </FadeIn>
        </section>

        {/* Offerings Grid */}
        <section className="aura-orb aura-orb-offerings px-6 py-20 sm:py-28 md:py-36">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
                {t("offerings_heading")}
              </h2>
            </FadeIn>
            <Stagger className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8" stagger={0.1}>
              {(["yoga", "sauna", "meditation", "community"] as const).map((key) => (
                <StaggerItem key={key}>
                  <CardHover className="rounded-2xl bg-aura-card p-7 sm:p-9">
                    <h3 className="font-accent text-xl font-semibold text-aura-charcoal sm:text-2xl">
                      {t(`offerings_${key}_title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-aura-warm-gray sm:mt-4 sm:text-base">
                      {t(`offerings_${key}_description`)}
                    </p>
                  </CardHover>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* The Loft */}
        <section className="aura-orb aura-orb-cream relative overflow-hidden px-6 py-20 sm:py-28 md:py-36">
          <div className="absolute inset-0 bg-linear-to-br from-aura-blush/15 via-transparent to-aura-peach/10 aura-flow-mask" />
          <FadeIn className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl md:text-4xl">
              {t("loft_heading")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-aura-warm-gray sm:mt-7 sm:text-lg">
              {t("loft_description")}
            </p>
          </FadeIn>
        </section>

        {/* Yogaraum */}
        <section className="aura-orb aura-orb-content px-6 py-20 sm:py-28 md:py-36">
          <FadeIn className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl md:text-4xl">
              {t("yogaraum_heading")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-aura-warm-gray sm:mt-7 sm:text-lg">
              {t("yogaraum_description")}
            </p>
          </FadeIn>
        </section>

        {/* Sauna & Ritual Experiences */}
        <section className="aura-orb aura-orb-gray aura-flow-light-gray px-6 py-20 sm:py-28 md:py-36">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl md:text-4xl">
              {t("sauna_heading")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-aura-warm-gray sm:mt-7 sm:text-lg">
              {t("sauna_description")}
            </p>
          </FadeIn>
        </section>

        {/* Sauna Drop-in */}
        <section className="aura-orb aura-orb-content px-6 py-20 sm:py-28 md:py-36">
          <FadeIn className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl md:text-4xl">
              {t("sauna_dropin_heading")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-aura-warm-gray sm:mt-7 sm:text-lg">
              {t("sauna_dropin_description")}
            </p>
          </FadeIn>
        </section>

        {/* Location */}
        <section className="aura-orb aura-orb-location relative overflow-hidden px-6 py-20 sm:py-28 md:py-36">
          <div className="absolute inset-0 bg-linear-to-br from-aura-blush/15 via-transparent to-aura-peach/10 aura-flow-mask" />
          <FadeIn className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
              {t("location_heading")}
            </h2>
            <p className="mt-3 text-lg font-medium text-aura-orange sm:text-xl">
              {t("location_address")}
            </p>
            <p className="mt-5 text-base leading-relaxed text-aura-warm-gray sm:mt-7 sm:text-lg">
              {t("location_description")}
            </p>
          </FadeIn>
        </section>

        {/* Kursplan */}
        <section className="px-6 pb-24 sm:pb-32 md:pb-40">
          <FadeIn className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-aura-card p-8 text-center sm:p-12">
              <p className="font-accent text-xl font-semibold text-aura-charcoal sm:text-2xl">
                {t("kursplan")}
              </p>
              <p className="mt-3 text-sm text-aura-warm-gray sm:mt-4 sm:text-base">
                {t("kursplanDescription")}
              </p>
            </div>
          </FadeIn>
        </section>
    </main>
  );
}
