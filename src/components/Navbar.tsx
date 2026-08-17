"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

function DecodedNavLabel({ label }: { label: string }) {
  const characters = Array.from(label);
  const [display, setDisplay] = useState(characters);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const glyphs = "01{}<>/\\#_";
  function decode() {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches || window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    if (timer.current) clearInterval(timer.current);
    let resolved = 0;
    timer.current = setInterval(() => {
      setDisplay(characters.map((character,index) => character === " " || index < resolved ? character : glyphs[Math.floor(Math.random() * glyphs.length)]));
      resolved += .55;
      if (resolved >= characters.length) { if (timer.current) clearInterval(timer.current); timer.current = null; setDisplay(characters); }
    }, 38);
  }
  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);
  return <span className="nav-label nav-label-decode" aria-hidden="true" onMouseEnter={decode}>{display.map((character,index) => <span key={index} className="nav-label-char">{character === " " ? "\u00a0" : character}</span>)}</span>;
}

export default function Navbar() {
  const t = useTranslations("nav");
  const [open,setOpen] = useState(false);
  const items = [{ href: "/#services", label: t("services") },{ href: "/#approach", label: t("approach") }];
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.body.classList.add("mobile-menu-active"); window.addEventListener("keydown", close);
    return () => { document.body.classList.remove("mobile-menu-active"); window.removeEventListener("keydown", close); };
  },[open]);
  return <nav className="site-nav" aria-label="Main navigation"><div className="wrap nav-inner">
    <Link href="/" className="logo mirit-wordmark" aria-label="Miritai home"><span className="logo-main">MIRIT</span><span className="logo-ai">AI</span></Link>
    <div className="nav-content"><div className="nav-links">{items.map((item) => <a key={item.href} href={item.href} aria-label={item.label}><DecodedNavLabel label={item.label}/></a>)}</div><Link href="/contact" className="button nav-cta">{t("start")} <span aria-hidden="true">↗</span></Link><div className="nav-utilities"><LanguageSwitcher/><ThemeToggle/><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span/><span/></button></div></div>
  </div><div id="mobile-navigation" className={`mobile-navigation${open ? " is-open" : ""}`} aria-hidden={!open}><div className="mobile-navigation-links">{items.map((item,index) => <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} style={{ "--menu-index": index } as React.CSSProperties}><span>0{index+1}</span><strong>{item.label}</strong><b aria-hidden="true">↗</b></a>)}</div><div className="mobile-navigation-footer"><p>Small systems. Serious leverage.</p><span>MIRITAI / 01—26</span></div></div></nav>;
}
