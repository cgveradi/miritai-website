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

  return <div className="relative" ref={switcher}>
    <button
      type="button"
      className="grid size-10 place-items-center rounded-full border border-line font-mono text-[11px] font-bold transition hover:border-accent"
      onClick={() => setOpen((visible) => !visible)}
      aria-label="Choose language"
      aria-expanded={open}
      aria-haspopup="menu"
    >{currentLocale.toUpperCase()}</button>
    <div className={`${open?"visible translate-y-0 opacity-100":"invisible -translate-y-2 opacity-0"} absolute right-0 top-12 w-40 rounded-xl border border-line bg-canvas p-1 shadow-2xl transition`} role="menu" aria-hidden={!open}>
      {routing.locales.map((candidate) => <button
        key={candidate}
        type="button"
        role="menuitem"
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs hover:bg-surface ${candidate===currentLocale?"text-accent":"text-muted"}`}
        tabIndex={open ? 0 : -1}
        onClick={() => {
          setOpen(false);
          if (candidate !== currentLocale) router.replace(pathname, { locale: candidate });
        }}
      ><span className="w-7 font-mono text-[10px] font-bold">{candidate.toUpperCase()}</span>{languageNames[candidate]}</button>)}
    </div>
  </div>;
}
