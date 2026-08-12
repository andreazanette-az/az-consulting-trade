import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import ArrowCta from "@/components/ui/ArrowCta";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="flex min-h-screen items-center">
      <Container>
        <span className="text-xs font-medium uppercase tracking-[0.24em] text-gray">
          {t("eyebrow")}
        </span>
        <h1 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.08] tracking-[-0.01em] text-ink">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray sm:text-base">
          {t("body")}
        </p>
        <div className="mt-10">
          <ArrowCta href="/">{t("cta")}</ArrowCta>
        </div>
      </Container>
    </main>
  );
}
