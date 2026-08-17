"use client";

import { FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${t("name")}: ${data.get("name")}`,
      `${t("email")}: ${data.get("email")}`,
      `${t("company")}: ${data.get("company") || "—"}`,
      "",
      `${t("project")}:`,
      String(data.get("project")),
    ].join("\n");
    window.location.href = `mailto:hello@miritai.com?subject=${encodeURIComponent(t("emailSubject"))}&body=${encodeURIComponent(body)}`;
  }
  return <form className="contact-form" onSubmit={submit}>
    <label>{t("name")}<input name="name" autoComplete="name" required/></label>
    <label>{t("email")}<input name="email" type="email" autoComplete="email" required/></label>
    <label>{t("company")}<input name="company" autoComplete="organization"/></label>
    <label>{t("project")}<textarea name="project" rows={7} required/></label>
    <button className="button button-solid" type="submit">{t("submit")} <span aria-hidden="true">↗</span></button>
    <p>{t("formNote")}</p>
  </form>;
}
