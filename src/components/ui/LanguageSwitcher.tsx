"use client";

import { useLocale } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Props = {
  tone?: "ink" | "white";
};

export default function LanguageSwitcher({ tone = "ink" }: Props) {
  const locale = useLocale();
  const pathname = usePathname();

  const base = tone === "white" ? "text-white/50" : "text-ink/65";
  const hover = tone === "white" ? "hover:text-white" : "hover:text-ink";
  const active = tone === "white" ? "text-white" : "text-ink";

  return (
    <div
      className={`flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.1em] ${base}`}
      aria-label="Selettore lingua / Language switcher"
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden="true">/</span>}
          <Link
            href={pathname}
            locale={loc}
            aria-current={locale === loc ? "true" : undefined}
            className={`transition-colors duration-300 ${hover} ${
              locale === loc ? active : ""
            }`}
          >
            {loc.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
