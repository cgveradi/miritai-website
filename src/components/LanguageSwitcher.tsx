"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const languageNames: Record<(typeof routing.locales)[number], string> = {
  en: "English",
  ru: "Russian",
  es: "Spanish",
  de: "German",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const otherLocales = routing.locales.filter((candidate) => candidate !== locale);

  return <div className="language-switcher" aria-label="Choose language">
    {otherLocales.map((candidate) => <button
      key={candidate}
      type="button"
      className="utility-toggle language-toggle"
      onClick={() => router.replace(pathname, { locale: candidate })}
      aria-label={`Switch language to ${languageNames[candidate]}`}
    >{candidate.toUpperCase()}</button>)}
  </div>;
}
