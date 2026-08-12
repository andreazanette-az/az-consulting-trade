import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const siteUrl = "https://www.azconsultingtrade.it";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((locale) => [
            locale,
            locale === routing.defaultLocale ? siteUrl : `${siteUrl}/${locale}`,
          ])
        ),
      },
    },
  ];
}
