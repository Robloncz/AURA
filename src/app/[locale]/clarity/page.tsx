import { useTranslations } from "next-intl";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { CardHover } from "@/components/motion/CardHover";

export default function ClarityPage() {
  const t = useTranslations("clarity");

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

        {/* What is a Clarity Session */}
        <section className="aura-orb aura-orb-content px-6 py-20 sm:py-28 md:py-36">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl md:text-4xl">
              {t("what_heading")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-aura-warm-gray sm:mt-7 sm:text-lg">
              {t("what_text")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-aura-warm-gray/80 sm:text-lg">
              {t("description")}
            </p>
          </FadeIn>
        </section>

        {/* A·U·R·A Framework */}
        <section className="aura-orb aura-orb-cream px-6 py-20 sm:py-28 md:py-36">
          <div className="mx-auto max-w-4xl">
            <FadeIn className="text-center">
              <h2 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
                {t("framework_heading")}
              </h2>
              <p className="mt-3 text-base text-aura-warm-gray sm:mt-4 sm:text-lg">
                {t("framework_subheading")}
              </p>
            </FadeIn>

            <Stagger className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2" stagger={0.15}>
              {(["arrive", "uncovering", "recognition", "alignment"] as const).map((phase) => (
                <StaggerItem key={phase}>
                  <CardHover className="rounded-2xl bg-aura-card p-7 sm:p-9">
                    <h3 className="font-accent text-xl font-semibold text-aura-orange sm:text-2xl">
                      {t(`${phase}_title`)}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-aura-warm-gray sm:text-base">
                      {t(`${phase}_subtitle`)}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
                      {t(`${phase}_text`)}
                    </p>
                  </CardHover>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* For Whom */}
        <section className="aura-orb aura-orb-content relative overflow-hidden px-6 py-20 sm:py-28 md:py-36">
          <div className="absolute inset-0 bg-linear-to-br from-aura-blush/15 via-transparent to-aura-peach/10 aura-flow-mask" />
          <FadeIn className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl md:text-4xl">
              {t("forwhom_heading")}
            </h2>
            <p className="mt-5 font-accent text-lg italic leading-relaxed text-aura-warm-gray sm:mt-7 sm:text-xl">
              {t("forwhom_text")}
            </p>
          </FadeIn>
        </section>

        {/* Details & Pricing */}
        <section className="px-6 py-20 sm:py-28 md:py-36">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
              {t("pricing_heading")}
            </h2>
            <div className="mt-6 space-y-2 text-base text-aura-warm-gray sm:text-lg">
              <p>{t("pricing_format")}</p>
              <p className="font-medium text-aura-charcoal">{t("pricing_price")}</p>
              <p className="text-sm text-aura-warm-gray/80 sm:text-base">{t("pricing_note")}</p>
            </div>
          </FadeIn>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24 sm:pb-32 md:pb-40">
          <FadeIn className="mx-auto max-w-3xl rounded-2xl bg-aura-card p-8 text-center sm:p-12">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
              {t("cta")}
            </h2>
            <p className="mt-3 text-sm text-aura-warm-gray sm:mt-4 sm:text-base">
              {t("cta_description")}
            </p>
            <div className="mt-6 sm:mt-8">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-aura-orange px-10 py-3.5 text-sm font-medium text-white transition-all hover:bg-aura-orange/90 sm:text-base"
              >
                {t("cta")}
              </a>
            </div>
          </FadeIn>
        </section>
    </main>
  );
}
