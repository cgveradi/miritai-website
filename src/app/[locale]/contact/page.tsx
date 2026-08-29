import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
  const t = useTranslations("contact");
  return <><Navbar/><main id="main-content" className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_.8fr]">
    <section><p className="font-mono text-xs uppercase tracking-[.2em] text-accent">{t("eyebrow")}</p><h1 className="mt-7 text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl">{t("title")}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-muted">{t("intro")}</p><p className="mt-5 text-sm text-muted">{t("small")}</p></section>
    <ContactForm/>
  </div></main><SiteFooter/></>;
}
