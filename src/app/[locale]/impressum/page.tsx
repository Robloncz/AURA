export default function ImpressumPage() {
  return (
    <main>
        <section className="relative overflow-hidden px-6 pt-28 pb-16 sm:pt-32 sm:pb-24 md:pb-32">
          <div className="absolute inset-0 bg-linear-to-b from-aura-blush/40 via-aura-peach/20 to-transparent" />
          <div className="relative mx-auto max-w-3xl">
            <h1 className="font-accent text-3xl font-semibold text-aura-charcoal sm:text-5xl">
              Impressum
            </h1>
          </div>
        </section>
        <section className="px-6 pb-16 sm:pb-24 md:pb-32">
          <div className="mx-auto max-w-3xl text-base leading-relaxed text-aura-warm-gray">
            <p>Angaben folgen in Kürze.</p>
          </div>
        </section>
    </main>
  );
}
