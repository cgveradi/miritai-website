"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (!response.ok) throw new Error("Contact submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <label>{t("name")}<input name="name" autoComplete="name" maxLength={100} required/></label>
    <label>{t("email")}<input name="email" type="email" autoComplete="email" maxLength={254} required/></label>
    <label>{t("company")}<input name="company" autoComplete="organization" maxLength={150}/></label>
    <label>{t("project")}<textarea name="project" rows={7} maxLength={5000} required/></label>
    <label className="contact-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
    <button className="button button-solid" type="submit" disabled={status === "sending"}>{status === "sending" ? t("sending") : t("submit")} <span aria-hidden="true">↗</span></button>
    <p className={`contact-form-status is-${status}`} role="status" aria-live="polite">{status === "success" ? t("success") : status === "error" ? t("error") : t("formNote")}</p>
  </form>;
}
