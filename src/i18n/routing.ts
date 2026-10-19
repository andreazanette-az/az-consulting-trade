import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en"],
  defaultLocale: "it",
  localePrefix: "as-needed",
  // Always open in the default locale regardless of the visitor's browser
  // language; the header IT/EN switcher still works since it navigates to
  // an explicit /en (or /) URL, which is resolved before this setting
  // applies.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
