import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <main>
        <section className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-28 md:pb-36">
          <div className="absolute inset-0 bg-linear-to-b from-aura-blush/40 via-aura-peach/20 to-transparent" />
          <FadeIn className="relative mx-auto max-w-3xl" duration={0.9}>
            <h1 className="font-accent text-4xl font-semibold text-aura-charcoal sm:text-5xl md:text-6xl">
              {t("heading")}
            </h1>
          </FadeIn>
        </section>

        <section className="px-6 py-20 pb-24 sm:py-28 sm:pb-32 md:py-36 md:pb-40">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl md:text-4xl">
              {t("monika.name")}
            </h2>
            <p className="mt-3 text-base font-medium text-aura-orange sm:text-lg">
              {t("monika.role")}
            </p>
            <p className="mt-5 text-base leading-relaxed text-aura-warm-gray sm:mt-7 sm:text-lg">
              {t("monika.description")}
            </p>
          </FadeIn>
        </section>
    </main>
  );
}
