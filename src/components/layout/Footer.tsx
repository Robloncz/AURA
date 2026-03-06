"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AuraLogo } from "@/components/ui/AuraLogo";
import { AuraSlogan } from "@/components/ui/AuraSlogan";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-aura-charcoal/5 bg-aura-white px-6 py-10 sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 sm:gap-8">
        <AuraSlogan height={120} className="sm:h-50 sm:w-auto" />

        <div className="flex gap-6 text-sm text-aura-warm-gray">
          <Link href="/impressum" className="transition-colors hover:text-aura-charcoal">
            {t("impressum")}
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-aura-charcoal">
            {t("datenschutz")}
          </Link>
        </div>

        <p className="text-xs text-aura-warm-gray/60">
          &copy; {currentYear} AURA. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
