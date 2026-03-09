import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { routing } from "@/i18n/routing";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

const satoshi = localFont({
  src: [
    { path: "../../../public/fonts/Satoshi-Bold.woff2" },
    { path: "../../../public/fonts/Satoshi-Bold.woff" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  weight: "700",
});

const satoshiItalic = localFont({
  src: [
    { path: "../../../public/fonts/Satoshi-Italic.woff2" },
    { path: "../../../public/fonts/Satoshi-Italic.woff" },
  ],
  variable: "--font-satoshi-italic",
  display: "swap",
  weight: "400",
  style: "italic",
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
    <html lang={locale} className={`${satoshi.variable} ${satoshiItalic.variable}`}>
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
