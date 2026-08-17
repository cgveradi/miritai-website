"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "ru" : "en";
  return <button type="button" className="utility-toggle language-toggle" onClick={() => router.replace(pathname, { locale: otherLocale })} aria-label={`Switch language to ${otherLocale.toUpperCase()}`}>{otherLocale.toUpperCase()}</button>;
}
