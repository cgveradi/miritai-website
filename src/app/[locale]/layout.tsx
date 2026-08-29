import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import SpaceBackground from "@/components/SpaceBackground";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin", "cyrillic"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "cyrillic"] });

export function generateStaticParams() { return routing.locales.map((locale) => ({ locale })); }

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return <div lang={locale} className={`${geist.className} ${geist.variable} ${mono.variable}`}><a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-foreground px-4 py-2 text-sm text-canvas focus:translate-y-0">Skip to content</a><SpaceBackground/><NextIntlClientProvider>{children}</NextIntlClientProvider></div>;
}
