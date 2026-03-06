import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export default function ClarityPage() {
  const t = useTranslations("clarity");

  return (
    <main>
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

        <section className="aura-orb aura-orb-content px-6 pb-16 sm:pb-24 md:pb-32">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="text-sm leading-relaxed text-aura-warm-gray/80 sm:text-base">
              {t("description")}
            </p>
          </FadeIn>
        </section>
    </main>
  );
}
