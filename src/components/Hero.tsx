import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import ArrowCta from "./ui/ArrowCta";
import Reveal from "./ui/Reveal";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="relative isolate min-h-dvh overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-bg" aria-hidden="true">
        {/*
          object-cover scales by exactly the minimum factor needed to cover
          the section — never more than that — so the photo is enlarged
          only as much as its own shape requires to fill the frame with no
          gaps.
        */}
        <Image
          src="/assets/images/hero-industrial.jpg"
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[82%_40%] lg:object-[72%_42%]"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-bg/70 to-bg sm:h-44 lg:h-56" />
      </div>

      <div
        className="pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 xl:block"
        aria-hidden="true"
      >
        <span
          className="block text-[11px] font-medium uppercase tracking-[0.5em] text-gray [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.6))]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {t("verticalTag")}
        </span>
      </div>

      <Container>
        <div className="max-w-2xl [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.55))_drop-shadow(0_10px_28px_rgba(0,0,0,0.35))]">
          <Reveal>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
          </Reveal>

          <h1 className="sr-only">{t("seoH1")}</h1>

          <Reveal delay={80}>
            <p className="mt-6 max-w-2xl font-display text-[clamp(2.25rem,4.6vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
              <br />
              {t("titleLine3")}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-gray sm:text-base">
              {t("paragraph1")}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-gray sm:text-base">
              {t("paragraph2")}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ArrowCta href="#servizi" variant="primary">
                {t("ctaPrimary")}
              </ArrowCta>
              <a
                href="#contatti"
                className="text-sm font-medium text-ink underline decoration-gray-light decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent"
              >
                {t("ctaSecondary")}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
