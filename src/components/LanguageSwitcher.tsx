"use client";

import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const switcher = useRef<HTMLDivElement>(null);
  const currentLocale = routing.locales.find((candidate) => candidate === locale) ?? routing.defaultLocale;

  useEffect(() => {
    if (!open) return;
    function close(event: MouseEvent) {
      if (!switcher.current?.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", close);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return <div className="language-switcher" ref={switcher}>
    <button
      type="button"
      className="utility-toggle language-toggle"
      onClick={() => setOpen((visible) => !visible)}
      aria-label="Choose language"
      aria-expanded={open}
      aria-haspopup="menu"
    >{currentLocale.toUpperCase()}</button>
    <div className={`language-menu${open ? " is-open" : ""}`} role="menu" aria-hidden={!open}>
      {routing.locales.map((candidate) => <button
        key={candidate}
        type="button"
        role="menuitem"
        className={candidate === currentLocale ? "is-current" : undefined}
        tabIndex={open ? 0 : -1}
        onClick={() => {
          setOpen(false);
          if (candidate !== currentLocale) router.replace(pathname, { locale: candidate });
        }}
      ><span>{candidate.toUpperCase()}</span>{languageNames[candidate]}</button>)}
    </div>
  </div>;
}
