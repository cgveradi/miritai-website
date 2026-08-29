"use client";
import {useEffect,useState} from "react";
import {useTranslations} from "next-intl";
import {Link,usePathname} from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import BrandWord from "./BrandWord";

export default function Navbar(){
  const t=useTranslations("nav"); const pathname=usePathname(); const [open,setOpen]=useState(false);
  const items=[{href:"/services",label:t("services")},{href:"/cases",label:t("cases")},{href:"/work",label:t("work")},{href:"/about",label:t("about")}];
  useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
  return <header className="sticky top-0 z-50 border-b border-line bg-canvas/95"><div className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
    <Link href="/" className="text-lg font-bold" aria-label="Miritai home"><BrandWord/></Link>
    <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-line bg-surface/45 p-1 md:flex" aria-label="Main navigation">{items.map(item=><Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground ${pathname===item.href?"bg-foreground text-canvas shadow-sm":"text-muted"}`}>{item.label}</Link>)}</nav>
    <div className="flex items-center gap-2.5"><Link href="/contact" className="hidden rounded-full border border-line px-5 py-3 font-mono text-xs font-semibold transition hover:border-accent lg:inline-flex">{t("start")} <span className="ml-3 text-accent">+</span></Link><LanguageSwitcher/><ThemeToggle/><button type="button" className="grid size-12 place-items-center rounded-full border border-line text-xl md:hidden" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}><span aria-hidden="true">{open?"×":"≡"}</span></button></div>
  </div>{open&&<nav className="fixed inset-x-0 top-[77px] flex min-h-[calc(100svh-77px)] flex-col bg-canvas px-5 py-10 md:hidden" aria-label="Mobile navigation">{items.map((item,index)=><Link onClick={()=>setOpen(false)} key={item.href} href={item.href} className="flex items-center justify-between border-b border-line py-6 text-3xl font-semibold tracking-tight"><span><small className="mr-5 font-mono text-xs text-muted">0{index+1}</small>{item.label}</span><span className="font-mono text-lg text-accent">+</span></Link>)}</nav>}</header>;
}
