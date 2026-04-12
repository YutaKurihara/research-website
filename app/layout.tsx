import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://yutakurihara.github.io/research-website";

export const metadata: Metadata = {
  title: {
    default: "Kurihara Yuta | Disaster Risk Reduction Researcher",
    template: "%s | Kurihara Yuta",
  },
  description:
    "Research portfolio of Kurihara Yuta. Flood risk assessment, probabilistic rainfall forecasting, remote sensing, climate change impact analysis. Oriental Consultants Global / GRIPS ICHARM.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Kurihara Yuta | Disaster Risk Reduction Researcher",
    description:
      "Flood risk assessment, probabilistic forecasting, remote sensing, and climate change impact analysis in Southeast Asia.",
    url: siteUrl,
    siteName: "Kurihara Yuta Research",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kurihara Yuta | Disaster Risk Reduction Researcher",
    description:
      "Flood risk assessment, probabilistic forecasting, remote sensing research.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-67PGDV9Z54" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-67PGDV9Z54');`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
