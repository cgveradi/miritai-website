import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

function SystemMap() {
  return <div className="system-map" aria-hidden="true"><div className="map-grid"/><div className="signal-orbit signal-orbit-a"/><div className="signal-orbit signal-orbit-b"/><div className="sputnik"><div className="sputnik-core"><i/><i/><i/></div><span className="antenna antenna-a"/><span className="antenna antenna-b"/><span className="antenna antenna-c"/><span className="antenna antenna-d"/><b>01</b></div><div className="node node-a"><i/><i/><i/><i/><i/><i/></div><div className="node node-b"><i/><i/><i/></div><div className="node node-c"><i/><i/></div><div className="node node-d"><i/><i/><i/><i/><i/><i/></div><div className="wire wire-a"><span/></div><div className="wire wire-b"><span/></div><div className="wire wire-c"><span/></div></div>;
}

export default function Home() {
  const t = useTranslations("home");
  const ticker = t.raw("ticker") as string[];
  const services = [1, 2, 3, 4].map((n) => ({ title: t(`service${n}Title`), text: t(`service${n}Text`) }));
  const steps = [1, 2, 3, 4].map((n) => ({ label: t(`step${n}Label`), title: t(`step${n}Title`), text: t(`step${n}Text`) }));
  return <><Navbar/><main>
    <header className="hero" id="top"><div className="hero-grid"/><i className="cross cross-a"/><i className="cross cross-b"/><div className="wrap hero-inner"><div className="hero-copy"><p className="eyebrow">{t("eyebrow")}</p><h1>MIRIT<span>AI</span></h1><p className="hero-lead"><b>{t("leadA")}</b> <em>{t("leadB")}</em></p><p className="hero-intro">{t("intro")}</p><div className="hero-actions"><Link href="/contact" className="button button-solid">{t("cta")} <span aria-hidden="true">↗</span></Link><a href="#services" className="button">{t("services")} <span aria-hidden="true">↓</span></a></div></div><div className="hero-visual"><SystemMap/></div></div></header>
    <div className="ticker" aria-hidden="true"><div className="ticker-track">{[...ticker,...ticker].map((item,index)=><span key={`${item}-${index}`}>{item} <b>✦</b></span>)}</div></div>
    <section className="section" id="services"><div className="wrap"><ScrollReveal><div className="section-head"><div><p className="eyebrow">{t("buildEyebrow")}</p><h2>{t("buildTitle")}</h2></div><p>{t("buildIntro")}</p></div><div className="bento">{services.map((service,index)=><article className={`service-card service-${index+1}`} key={service.title}><span className="card-id">MODULE / 0{index+1}</span><i/><div><h3>{service.title}</h3><p>{service.text}</p></div></article>)}</div></ScrollReveal></div></section>
    <section className="section approach" id="approach"><div className="wrap"><ScrollReveal><div className="section-head"><div><p className="eyebrow">{t("approachEyebrow")}</p><h2>{t("approachTitle")}</h2></div><p>{t("approachIntro")}</p></div><div className="steps">{steps.map((step,index)=><article className="step" key={step.label} style={{"--step-index":index} as React.CSSProperties}><span>{step.label}</span><i aria-hidden="true"/><b aria-hidden="true">0{index+1}</b><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></ScrollReveal></div></section>
    <section className="closing"><i className="cross cross-a"/><i className="cross cross-b"/><p className="eyebrow">{t("closingEyebrow")}</p><h2>{t("closingTitle")}</h2><Link className="button button-dark" href="/contact">{t("cta")} <span aria-hidden="true">↗</span></Link></section>
  </main><footer><div className="wrap"><div className="footer-grid"><div><a className="logo" href="#top">MIRIT<span>AI</span></a><p>{t("footerText")}</p></div><div><h3>{t("footerServices")}</h3><a href="#services">{t("service1Title")}</a><a href="#services">{t("service2Title")}</a><a href="#services">{t("service3Title")}</a></div><div><h3>{t("footerStudio")}</h3><a href="#approach">{t("approachEyebrow")}</a></div><div><h3>{t("footerContact")}</h3><a href="mailto:hello@miritai.com">hello@miritai.com</a></div></div><div className="footer-bottom"><span>© 2026 MIRITAI. {t("rights")}</span><span>miritai.com</span></div></div></footer></>;
}
