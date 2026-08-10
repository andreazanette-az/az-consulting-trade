import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.azconsultingtrade.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AZ Consulting & Trade | Engineering, Automation & Die Casting",
  description:
    "AZ Consulting & Trade offre consulenza, progettazione, installazione e manutenzione per pressofusione, automazione industriale e robotica, oltre alla fornitura diretta di soluzioni industriali.",
  keywords: [
    "consulenza industriale",
    "pressofusione",
    "automazione industriale",
    "robotica industriale",
    "engineering",
    "die casting",
    "impianti industriali",
  ],
  openGraph: {
    title: "AZ Consulting & Trade | Engineering, Automation & Die Casting",
    description:
      "Consulenza tecnica, progettazione, installazione, manutenzione e fornitura diretta per pressofusione, automazione e robotica industriale.",
    url: siteUrl,
    siteName: "AZ Consulting & Trade",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
