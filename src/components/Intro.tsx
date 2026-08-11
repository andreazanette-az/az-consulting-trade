import { useTranslations } from "next-intl";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import GrowLine from "./ui/GrowLine";

export default function Intro() {
  const t = useTranslations("intro");

  return (
    <section className="pt-24 pb-10 sm:pt-32 sm:pb-14">
      <Container>
        <Reveal>
          <GrowLine className="mb-14" />
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-gray">
                {t("kicker")}
              </span>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink text-balance">
                {t("headlineLine1")}
                <br />
                {t("headlineLine2")}
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10 max-w-2xl space-y-5 text-[15px] leading-relaxed text-gray sm:text-base">
                <p>{t("body1")}</p>
                <p>{t("body2")}</p>
                <p className="text-ink">{t("body3")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
