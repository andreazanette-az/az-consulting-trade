import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import IubendaConfig from "@/components/IubendaConfig";
import { IUBENDA_BANNER_CONFIG } from "@/lib/iubenda";
import "../globals.css";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const ogImage = locale === "en" ? "/assets/og-image-en.jpg" : "/assets/og-image.jpg";

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(",").map((k) => k.trim()),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: {
        it: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      url: siteUrl,
      siteName: "AZ Consulting & Trade",
      locale: locale === "it" ? "it_IT" : "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "AZ Consulting & Trade" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("ogDescription"),
      images: [ogImage],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <NextIntlClientProvider>
          {children}

          {/*
            Pins Iubenda's banner language to our current locale instead
            of letting it auto-detect from <html lang> (see IubendaConfig
            for why), and renders the banner as a bottom-center floating
            box instead of Iubenda's default top placement, which
            rendered on top of our fixed header navigation (see
            IUBENDA_BANNER_CONFIG). Must run before the widget script
            below — using next/script (not a raw <script> tag) so it's
            actually guaranteed to execute: React doesn't run plain
            <script> elements it renders itself.
          */}
          <Script
            id="iubenda-config"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `window._iub=window._iub||[];window._iub.csConfiguration={lang:${JSON.stringify(
                locale
              )},banner:${JSON.stringify(IUBENDA_BANNER_CONFIG)}};`,
            }}
          />
          <IubendaConfig />

          {/* Iubenda cookie banner (Privacy Controls and Cookie Solution) */}
          <Script
            id="iubenda-cs"
            src="https://embeds.iubenda.com/widgets/4b5dfbe4-0a7b-4fc5-9918-fc6b8d0cdedd.js"
            strategy="afterInteractive"
          />

          {/*
            Iubenda's embed loader: styles/opens the Privacy Policy and
            Cookie Policy links (.iubenda-embed) rendered in the footer.
            Loaded once here so it isn't duplicated across components.
          */}
          <Script
            id="iubenda-embed-loader"
            src="https://cdn.iubenda.com/iubenda.js"
            strategy="afterInteractive"
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
