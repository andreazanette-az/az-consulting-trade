import { useTranslations } from "next-intl";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import GrowLine from "./ui/GrowLine";

type WhyAzItem = { number: string; title: string; text: string };

export default function WhyAZ() {
  const t = useTranslations("whyAz");
  const items = t.raw("items") as WhyAzItem[];

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.01em] text-ink text-balance">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <GrowLine />
          </Reveal>
          <div className="grid grid-cols-1 gap-10 py-0 sm:grid-cols-3 sm:gap-8">
            {items.map((item, index) => (
              <Reveal key={item.number} delay={index * 100}>
                <div className="pt-10">
                  <span className="font-display text-3xl font-medium text-gray-light sm:text-4xl">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-base font-semibold uppercase tracking-[0.06em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-gray">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <GrowLine />
        </div>
      </Container>
    </section>
  );
}
