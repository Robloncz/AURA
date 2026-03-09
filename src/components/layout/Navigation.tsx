"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { AuraLogo } from "@/components/ui/AuraLogo";

export function Navigation() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/studio", label: t("studio") },
    { href: "/clarity", label: t("clarity") },
    { href: "/philosophy", label: t("philosophy") },
    { href: "/about", label: t("about") },
  ] as const;

  return (
    <nav
      className="fixed top-0 z-50 w-full nav-fade-bg backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" aria-label="AURA Home">
          <AuraLogo height={120} />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "font-medium text-aura-orange"
                  : "text-aura-charcoal/70 hover:text-aura-charcoal"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/clarity"
            className="rounded-full bg-aura-orange px-5 py-2 text-sm font-medium text-white transition-all hover:bg-aura-orange/90"
          >
            {t("book")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-aura-charcoal transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-aura-charcoal transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-aura-charcoal transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-aura-white/95 backdrop-blur-sm transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`font-accent text-3xl transition-colors ${
                pathname === href
                  ? "font-semibold text-aura-orange"
                  : "text-aura-charcoal/70 hover:text-aura-charcoal"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/clarity"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-full bg-aura-orange px-8 py-3 text-base font-medium text-white transition-all hover:bg-aura-orange/90"
          >
            {t("book")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
