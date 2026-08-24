import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://miritai.com"),
  title: "MIRITAI — Data, AI & Software Studio",
  description: "Practical data tools, focused automations, and lightweight web apps for small teams.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(() => { try { const saved = localStorage.getItem('miritai-theme'); const isDark = saved ? saved === 'dark' : true; document.documentElement.classList.toggle('dark', isDark); } catch {} })()` }} /></head><body>{children}</body></html>;
}
