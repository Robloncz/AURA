import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { Plus_Jakarta_Sans, Cormorant } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURA — A Space to Remember",
  description:
    "Ein Raum für Yoga, Meditation, Clarity Sessions und bewusstes Zusammensein in Köln.",
  metadataBase: new URL("https://aura-cologne.com"),
  openGraph: {
    title: "AURA — A Space to Remember",
    description:
      "Ein Raum für Yoga, Meditation, Clarity Sessions und bewusstes Zusammensein in Köln.",
    url: "https://aura-cologne.com",
    siteName: "AURA",
    locale: "de_DE",
    type: "website",
  },
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${jakarta.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
