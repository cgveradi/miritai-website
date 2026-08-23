import {useTranslations} from "next-intl";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import {Link} from "@/i18n/navigation";

const paths=["/services#data-analytics","/services#digital-workers","/services#web-apps"];

export default function WorkPage(){
  const t=useTranslations("work"); const home=useTranslations("home");
  const groups=[1,2,3].map((n,index)=>({label:t(`group${n}Label`),title:t(`group${n}Title`),text:t(`group${n}Text`),example:t(`group${n}Example`),result:t(`group${n}Result`),tags:t.raw(`group${n}Tags`) as string[],href:paths[index]}));
  return <><Navbar/><main className="work-page"><header className="work-hero"><div className="service-hero-grid"/><div className="wrap"><p className="eyebrow">{t("eyebrow")}</p><h1>{t("title")}</h1><p>{t("intro")}</p></div></header><section className="work-index"><div className="wrap"><p className="work-note">{t("note")}</p>{groups.map((group,index)=><ScrollReveal key={group.title}><article className={`work-group work-group-${index+1}`} id={`work-${index+1}`}><div className="work-group-id"><span>0{index+1}</span><p>{group.label}</p></div><div className="work-group-main"><h2>{group.title}</h2><p>{group.text}</p><div className="work-example"><span>{t("exampleLabel")}</span><h3>{group.example}</h3><p>{group.result}</p></div><div className="deliverable-tags">{group.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><Link href={group.href} className="work-group-link" aria-label={`${t("viewService")} — ${group.title}`}>↗</Link></article></ScrollReveal>)}</div></section><section className="closing service-closing"><p className="eyebrow">{t("closingEyebrow")}</p><h2>{t("closingTitle")}</h2><Link className="button button-dark" href="/contact">{home("cta")} <span aria-hidden="true">↗</span></Link></section></main><footer className="compact-footer"><div className="wrap"><div className="footer-main"><div><Link className="logo" href="/">MIRIT<span>AI</span></Link><p>{home("footerText")}</p></div></div><div className="footer-bottom"><span>© 2026 MIRITAI. {home("rights")}</span><span><a href="https://mirit.org">MIRIT</a> · Research · Culture · Innovation</span></div></div></footer></>;
}
