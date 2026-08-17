import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miritai.com"),
  title: "Miritai — Data, AI & Software Studio",
  description: "Focused data tools, lightweight web apps, and practical AI automations for growing teams.",
  openGraph: {
    title: "Miritai — Small systems. Serious leverage.",
    description: "Focused data tools, lightweight web apps, and practical AI automations for growing teams.",
    url: "https://miritai.com",
    siteName: "Miritai",
    images: [{ url: "/og.png", width: 1792, height: 1024, alt: "Miritai — Small systems. Serious leverage." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miritai — Small systems. Serious leverage.",
    description: "Focused data tools, lightweight web apps, and practical AI automations for growing teams.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
