"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

type IubCsConfiguration = { lang?: string; [key: string]: unknown };

declare global {
  interface Window {
    _iub?: { csConfiguration?: IubCsConfiguration } & unknown[];
  }
}

/**
 * Iubenda's Cookie Solution auto-detects the banner language from
 * <html lang>. Switching locale here updates that attribute without a
 * full page reload, which made the widget re-evaluate consent and pop
 * the banner again mid-navigation. Setting `_iub.csConfiguration.lang`
 * explicitly (and keeping it in sync on every locale change) makes
 * Iubenda trust our language instead of reacting to the attribute
 * mutation.
 */
export default function IubendaConfig() {
  const locale = useLocale();

  useEffect(() => {
    const iub = window._iub || ([] as unknown as NonNullable<Window["_iub"]>);
    iub.csConfiguration = { ...iub.csConfiguration, lang: locale };
    window._iub = iub;
  }, [locale]);

  return null;
}
