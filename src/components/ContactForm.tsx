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

  const label="grid gap-2 font-mono text-[10px] uppercase tracking-[.15em] text-muted"; const control="w-full border-0 border-b border-line bg-transparent py-3 text-base normal-case tracking-normal text-foreground outline-none focus:border-accent";
  return <form className="grid gap-6 rounded-3xl border border-line bg-surface/55 p-7 sm:p-10" onSubmit={submit}>
    <label className={label}>{t("name")}<input className={control} name="name" autoComplete="name" maxLength={100} required/></label>
    <label className={label}>{t("email")}<input className={control} name="email" type="email" autoComplete="email" maxLength={254} required/></label>
    <label className={label}>{t("company")}<input className={control} name="company" autoComplete="organization" maxLength={150}/></label>
    <label className={label}>{t("project")}<textarea className={`${control} resize-y`} name="project" rows={7} maxLength={5000} required/></label>
    <label className="contact-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
    <button className="justify-self-start rounded-full bg-foreground px-6 py-3.5 font-mono text-xs font-semibold text-canvas disabled:opacity-50" type="submit" disabled={status === "sending"}>{status === "sending" ? t("sending") : t("submit")} <span aria-hidden="true">+</span></button>
    <p className={`text-xs leading-5 ${status==="error"?"text-red-500":status==="success"?"text-accent":"text-muted"}`} role="status" aria-live="polite">{status === "success" ? t("success") : status === "error" ? t("error") : t("formNote")}</p>
  </form>;
}
