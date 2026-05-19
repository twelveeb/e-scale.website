import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "E-Scale — Agência de Crescimento Digital",
    template: "%s | E-Scale",
  },
  description:
    "Construímos sistemas digitais que transformam visibilidade em faturação real. Agência de crescimento digital em Portugal.",
  keywords: [
    "agência digital",
    "crescimento digital",
    "marketing digital",
    "Portugal",
    "gestão de redes sociais",
    "anúncios",
    "funis de vendas",
  ],
  authors: [{ name: "E-Scale" }],
  creator: "E-Scale",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://escale.pt",
    siteName: "E-Scale",
    title: "E-Scale — Agência de Crescimento Digital",
    description:
      "Construímos sistemas digitais que transformam visibilidade em faturação real.",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Scale — Agência de Crescimento Digital",
    description:
      "Construímos sistemas digitais que transformam visibilidade em faturação real.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-dvh overflow-x-hidden">
        <Providers>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
