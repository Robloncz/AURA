import { useTranslations } from "next-intl";
import { AuraSlogan } from "@/components/ui/AuraSlogan";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { CardHover } from "@/components/motion/CardHover";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
        {/* Hero */}
        <section className="aura-orb aura-orb-hero relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 bg-linear-to-br from-aura-blush via-aura-peach to-aura-orange opacity-80 aura-flow-mask-bottom" />
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <FadeIn duration={1} delay={0.2} noSlide>
              <h1>
                <AuraSlogan height={160} className="md:h-60 md:w-auto" />
                <span className="sr-only">AURA</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.6} duration={0.8}>
              <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
                <a
                  href="#discover"
                  className="rounded-full bg-aura-charcoal px-8 py-3 text-sm font-medium text-aura-cream transition-all hover:bg-aura-charcoal/90"
                >
                  {t("hero.cta_primary")}
                </a>
                <a
                  href="#waitlist"
                  className="rounded-full border border-aura-charcoal/20 px-8 py-3 text-sm font-medium text-aura-charcoal transition-all hover:bg-aura-charcoal/5"
                >
                  {t("hero.cta_secondary")}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Discover */}
        <section id="discover" className="aura-orb aura-orb-discover px-6 py-16 sm:py-24 md:py-32">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
              {t("about.heading")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-warm-gray sm:mt-6 sm:text-lg">
              {t("about.intro")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-aura-warm-gray/80 sm:mt-4 sm:text-base">
              {t("about.description")}
            </p>
          </FadeIn>

          {/* The Loft */}
          <FadeIn className="mx-auto mt-10 max-w-3xl text-center sm:mt-14" delay={0.1}>
            <p className="font-accent text-base italic leading-relaxed text-aura-warm-gray sm:text-lg">
              {t("about.loft")}
            </p>
          </FadeIn>

          {/* Three Pillars */}
          <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
            <FadeIn className="text-center">
              <h3 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
                {t("about.pillars_heading")}
              </h3>
            </FadeIn>
            <Stagger className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-3" stagger={0.15}>
              {(["body", "clarity", "community"] as const).map((key) => (
                <StaggerItem key={key} className="text-center">
                  <h4 className="font-accent text-xl font-semibold text-aura-orange sm:text-2xl">
                    {t(`about.pillar_${key}_title`)}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-aura-warm-gray sm:mt-3">
                    {t(`about.pillar_${key}_description`)}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Offerings */}
        <section className="aura-orb aura-orb-offerings aura-flow-cream px-6 py-16 sm:py-24 md:py-32">
          <div className="relative z-10 mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
                {t("offerings.heading")}
              </h2>
            </FadeIn>
            <Stagger className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3" stagger={0.1}>
              {(["yoga", "sauna", "clarity", "meditation", "community"] as const).map((key) => (
                <StaggerItem key={key}>
                  <CardHover className="rounded-2xl bg-aura-white p-6 sm:p-8">
                    <h3 className="font-accent text-xl font-semibold text-aura-charcoal sm:text-2xl">
                      {t(`offerings.${key}.title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-aura-warm-gray sm:mt-4">
                      {t(`offerings.${key}.description`)}
                    </p>
                  </CardHover>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* For You */}
        <section className="aura-orb aura-orb-forYou relative overflow-hidden px-6 py-16 sm:py-24 md:py-32">
          <div className="absolute inset-0 bg-linear-to-br from-aura-blush/30 via-aura-peach/20 to-aura-orange/10 aura-flow-mask" />
          <FadeIn className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
              {t("forYou.heading")}
            </h2>
            <p className="mt-4 font-accent text-lg italic leading-relaxed text-aura-warm-gray sm:mt-6 sm:text-xl md:text-2xl">
              {t("forYou.description")}
            </p>
          </FadeIn>
        </section>

        {/* Location */}
        <section className="aura-orb aura-orb-location aura-flow-light-gray px-6 py-16 sm:py-24 md:py-32">
          <FadeIn className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
              {t("location.heading")}
            </h2>
            <p className="mt-2 text-base font-medium text-aura-orange sm:text-lg">
              {t("location.address")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray sm:mt-6 sm:text-base">
              {t("location.description")}
            </p>
          </FadeIn>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="aura-orb aura-orb-waitlist relative overflow-hidden px-6 py-16 sm:py-24 md:py-32">
          <div className="absolute inset-0 bg-linear-to-tr from-aura-cream via-aura-blush/40 to-aura-peach/30 aura-flow-mask" />
          <FadeIn className="relative z-10 mx-auto max-w-xl text-center">
            <h2 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
              {t("waitlist.heading")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-warm-gray sm:mt-6 sm:text-base">
              {t("waitlist.description")}
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <input
                type="email"
                placeholder={t("waitlist.placeholder")}
                className="flex-1 rounded-full border border-aura-charcoal/10 bg-aura-white px-5 py-3 text-sm text-aura-charcoal placeholder:text-aura-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-aura-peach sm:px-6"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-aura-orange px-6 py-3 text-sm font-medium text-aura-cream transition-all hover:bg-aura-orange/90 sm:px-8"
              >
                {t("waitlist.button")}
              </button>
            </form>
          </FadeIn>
        </section>
    </main>
  );
}
