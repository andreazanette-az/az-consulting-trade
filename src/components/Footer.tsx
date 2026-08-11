import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Container from "./ui/Container";
import Logo from "./ui/Logo";
import { contact, footerLinkAnchors, iubendaPolicyId } from "@/lib/content";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  // Iubenda serves a policy in a given language only if it has been
  // enabled for that document in the Iubenda dashboard; the `lang`
  // param requests it, it doesn't guarantee it exists.
  const langParam = locale === "en" ? "?lang=en" : "";

  return (
    <footer className="bg-black pb-10 pt-16 text-white/60">
      <Container>
        <div className="flex flex-col gap-12 border-b border-white/10 pb-12 sm:flex-row sm:justify-between">
          <div>
            <Logo tone="white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/40">
              {t("description")}
            </p>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-1"
            aria-label="Footer"
          >
            {footerLinkAnchors.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {t(`links.${link.key}`)}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 text-sm">
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>
              {t("vatLabel")} {contact.vat}
            </p>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white/60 transition-colors hover:text-white"
            >
              {t("linkedin")}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>{t("copyright", { year })}</span>

          <div className="flex items-center gap-5">
            <a
              href={`https://www.iubenda.com/privacy-policy/${iubendaPolicyId}${langParam}`}
              className="iubenda-white iubenda-noiframe iubenda-embed text-xs text-white/50 transition-colors hover:text-white"
              title={t("privacyPolicy")}
            >
              {t("privacyPolicy")}
            </a>
            <a
              href={`https://www.iubenda.com/privacy-policy/${iubendaPolicyId}/cookie-policy${langParam}`}
              className="iubenda-white iubenda-noiframe iubenda-embed text-xs text-white/50 transition-colors hover:text-white"
              title={t("cookiePolicy")}
            >
              {t("cookiePolicy")}
            </a>
          </div>

          <span>{t("tagline")}</span>
        </div>
      </Container>
    </footer>
  );
}
