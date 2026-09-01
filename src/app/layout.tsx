import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://miritai.com"),
  applicationName: "MiritAI",
  title: "MIRITAI | Data, AI & Software Studio",
  description: "Practical data tools, focused automations, and lightweight web apps for small teams.",
  keywords: ["MiritAI", "data analytics", "AI automation", "workflow automation", "web applications", "software studio"],
  authors: [{ name: "Carlos Vera Diago", url: "https://miritai.com/en/about" }],
  creator: "MiritAI",
  publisher: "MiritAI",
  openGraph: {
    title: "MIRITAI — Small systems. Serious leverage.",
    description: "Practical data tools, focused automations, and lightweight web apps for small teams.",
    url: "https://miritai.com",
    siteName: "MIRITAI",
    images: [{ url: "/og.png", width: 1792, height: 1024, alt: "MIRITAI — Small systems. Serious leverage." }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "MIRITAI — Small systems. Serious leverage.", description: "Practical data tools, focused automations, and lightweight web apps for small teams.", images: ["/og.png"] },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MiritAI",
  alternateName: "MIRITAI",
  url: "https://miritai.com",
  logo: "https://miritai.com/miritai-mark.svg",
  description: "An independent data, AI, automation, and software studio for small teams.",
  founder: { "@type": "Person", name: "Carlos Vera Diago", url: "https://miritai.com/en/about" },
  sameAs: ["https://www.linkedin.com/in/carlosveradiago", "https://github.com/cgveradi"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="dark" suppressHydrationWarning><head><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/><script dangerouslySetInnerHTML={{ __html: `(() => { try { const saved = localStorage.getItem('miritai-theme'); const isDark = saved ? saved === 'dark' : true; document.documentElement.classList.toggle('dark', isDark); } catch {} })()` }} /></head><body>{children}</body></html>;
}
