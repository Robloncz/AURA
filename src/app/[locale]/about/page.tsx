import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <main>
        <section className="relative overflow-hidden px-6 pt-28 pb-16 sm:pt-32 sm:pb-24 md:pb-32">
          <div className="absolute inset-0 bg-linear-to-b from-aura-blush/40 via-aura-peach/20 to-transparent aura-ambient-subhero" />
          <FadeIn className="relative mx-auto max-w-3xl" duration={0.9}>
            <h1 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-5xl md:text-6xl">
              {t("heading")}
            </h1>
          </FadeIn>
        </section>

        <section className="px-6 pb-16 sm:pb-24 md:pb-32">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
              {t("monika.name")}
            </h2>
            <p className="mt-2 text-sm font-medium text-aura-orange">
              {t("monika.role")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray/80 sm:mt-6 sm:text-base">
              {t("monika.description")}
            </p>
          </FadeIn>
        </section>
    </main>
  );
}
