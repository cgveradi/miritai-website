import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export default function SiteFooter() {
  const t = useTranslations("home");
  return <footer className="border-t border-line px-5 py-10 sm:px-8 lg:px-12">
    <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
      <div><Link href="/" className="text-lg font-bold tracking-[.2em]">MIRIT<span className="text-accent">AI</span></Link><p className="mt-4 max-w-sm text-sm leading-6 text-muted">{t("footerText")}</p></div>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"><Link className="hover:text-foreground" href="/cases">Cases</Link><Link className="hover:text-foreground" href="/about">About</Link><Link className="hover:text-foreground" href="/contact">Contact</Link><a className="hover:text-foreground" href="https://mirit.org">MIRIT.org</a></nav>
    </div>
    <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[.14em] text-muted sm:flex-row sm:justify-between"><span>© 2026 MIRITAI</span><span>{t("rights")}</span></div>
  </footer>;
}
