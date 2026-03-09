import { useTranslations } from "next-intl";
import { AuraLogo } from "@/components/ui/AuraLogo";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { CardHover } from "@/components/motion/CardHover";
import { HeroOrb } from "@/components/motion/HeroOrb";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
        {/* Hero — full viewport, AURA logo dominant */}
        <section className="aura-orb aura-orb-hero relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
          <HeroOrb />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center">
            <FadeIn duration={1.2} delay={0.2} noSlide>
              <h1 className="flex flex-col items-center">
                <AuraLogo height={200} className="h-50 w-auto sm:h-70 md:h-90 lg:h-105" />
              </h1>
            </FadeIn>
            <FadeIn delay={0.8} duration={0.9} className="-mt-8">
              <p className="font-accent text-xl italic tracking-wide text-aura-charcoal/70 sm:text-2xl md:text-3xl">
                {t("hero.tagline")}
              </p>
            </FadeIn>
            <FadeIn delay={1.1} duration={0.8}>
              <div className="mt-4 flex w-full flex-col gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:gap-4">
                <Link
                  href="/clarity"
                  className="rounded-full bg-aura-orange px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-aura-orange/90 sm:px-10 sm:text-base"
                >
                  {t("hero.cta_primary")}
                </Link>
                <a
                  href="#waitlist"
                  className="rounded-full border border-aura-charcoal/15 px-8 py-3.5 text-sm font-medium text-aura-charcoal/80 transition-all hover:bg-aura-charcoal/5 sm:px-10 sm:text-base"
                >
                  {t("hero.cta_secondary")}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Clarity Sessions — primary offering */}
        <section className="aura-orb aura-orb-content px-6 py-24 sm:py-32 md:py-40">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-widest text-aura-orange">
                {t("clarityHome.with")}
              </p>
              <h2 className="mt-3 font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
                {t("clarityHome.heading")}
              </h2>
              <p className="mt-4 font-accent text-lg italic leading-relaxed text-aura-warm-gray sm:mt-6 sm:text-xl">
                {t("clarityHome.intro")}
              </p>
              <p className="mt-4 text-base leading-relaxed text-aura-warm-gray/80 sm:text-lg">
                {t("clarityHome.description")}
              </p>
            </FadeIn>

            {/* A·U·R·A Framework */}
            <FadeIn className="mt-14 sm:mt-20" delay={0.1}>
              <h3 className="font-accent text-2xl font-semibold text-aura-charcoal sm:text-3xl">
                {t("clarityHome.framework_heading")}
              </h3>
            </FadeIn>
            <Stagger className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8" stagger={0.12}>
              {(["arrive", "uncovering", "recognition", "alignment"] as const).map((phase) => (
                <StaggerItem key={phase}>
                  <CardHover className="rounded-2xl bg-aura-card p-6 sm:p-8">
                    <h4 className="font-accent text-xl font-semibold text-aura-orange sm:text-2xl">
                      {t(`clarityHome.${phase}_title`)}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-aura-warm-gray sm:mt-4">
                      {t(`clarityHome.${phase}_text`)}
                    </p>
                  </CardHover>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeIn className="mt-12 sm:mt-16" delay={0.1}>
              <Link
                href="/clarity"
                className="inline-block rounded-full bg-aura-orange px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-aura-orange/90 sm:px-10 sm:text-base"
              >
                {t("clarityHome.cta")}
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Studio Teaser */}
        <section className="aura-orb aura-orb-cream relative overflow-hidden px-6 py-24 sm:py-32 md:py-40">
          <div className="absolute inset-0 bg-linear-to-br from-aura-blush/20 via-aura-peach/10 to-transparent aura-flow-mask" />
          <FadeIn className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-aura-orange/10 px-4 py-1.5 text-xs font-medium tracking-wide text-aura-orange sm:text-sm">
              {t("studioTeaser.comingSoon")}
            </span>
            <h2 className="mt-6 font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
              {t("studioTeaser.heading")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-warm-gray sm:mt-6 sm:text-lg">
              {t("studioTeaser.description")}
            </p>
            <div className="mt-8 sm:mt-10">
              <Link
                href="/studio"
                className="inline-block rounded-full border border-aura-charcoal/15 px-8 py-3 text-sm font-medium text-aura-charcoal/80 transition-all hover:bg-aura-charcoal/5 sm:text-base"
              >
                {t("studioTeaser.cta")}
              </Link>
            </div>
          </FadeIn>
        </section>

        {/* Waitlist / Founding Member */}
        <section id="waitlist" className="aura-orb aura-orb-waitlist relative overflow-hidden px-6 py-24 sm:py-32 md:py-40">
          <div className="absolute inset-0 bg-linear-to-tr from-aura-cream via-aura-blush/40 to-aura-peach/30 aura-flow-mask" />
          <FadeIn className="relative z-10 mx-auto max-w-xl text-center">
            <h2 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-4xl md:text-5xl">
              {t("waitlist.heading")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-warm-gray sm:mt-6 sm:text-lg">
              {t("waitlist.description")}
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <input
                type="email"
                placeholder={t("waitlist.placeholder")}
                className="flex-1 rounded-full border border-aura-charcoal/10 bg-aura-off-white px-6 py-3.5 text-sm text-aura-charcoal placeholder:text-aura-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-aura-peach sm:text-base"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-aura-orange px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-aura-orange/90 sm:px-10"
              >
                {t("waitlist.button")}
              </button>
            </form>
          </FadeIn>
        </section>
    </main>
  );
}
