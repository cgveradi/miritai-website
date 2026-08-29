"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";
function getTheme(): Theme { return document.documentElement.classList.contains("dark") ? "dark" : "light"; }
function subscribe(onStoreChange: () => void) { window.addEventListener("miritai-themechange", onStoreChange); return () => window.removeEventListener("miritai-themechange", onStoreChange); }

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");
  const isDark = theme === "dark";
  function toggleTheme() { const next: Theme = isDark ? "light" : "dark"; document.documentElement.classList.toggle("dark", next === "dark"); localStorage.setItem("miritai-theme", next); window.dispatchEvent(new Event("miritai-themechange")); }
  return <button type="button" className="group grid size-12 place-items-center rounded-full border border-line transition hover:border-accent hover:bg-surface" onClick={toggleTheme} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={isDark}><span aria-hidden="true" className="transition-transform duration-500 group-hover:rotate-12">{isDark?<svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg>:<svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19.2 15.4A8.2 8.2 0 0 1 8.6 4.8 8.2 8.2 0 1 0 19.2 15.4Z"/><circle cx="17.5" cy="6.5" r=".8" className="fill-current stroke-none"/></svg>}</span></button>;
}
