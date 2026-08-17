import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const t = useTranslations("contact");
  return <><Navbar/><main className="contact-page"><div className="contact-grid-bg"/><div className="wrap contact-grid">
    <section><p className="eyebrow">{t("eyebrow")}</p><h1>{t("title")}</h1><p className="contact-intro">{t("intro")}</p><a className="contact-email" href="mailto:hello@miritai.com">hello@miritai.com</a><p className="contact-small">{t("small")}</p></section>
    <ContactForm/>
  </div></main></>;
}
