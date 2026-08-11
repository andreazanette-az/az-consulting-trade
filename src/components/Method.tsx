import { useTranslations } from "next-intl";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import GrowLine from "./ui/GrowLine";

type MethodStep = { number: string; title: string; text: string };

export default function Method() {
  const t = useTranslations("method");
  const steps = t.raw("steps") as MethodStep[];

  return (
    <section id="metodo" className="py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.01em] text-ink text-balance">
              {t("title")}
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <div className="relative border-l border-gray-light pl-6 lg:border-l-0 lg:pl-0">
                <div className="hidden lg:block">
                  <GrowLine delay={index * 90} />
                </div>
                <span
                  className="absolute -left-[3px] top-0 h-1.5 w-1.5 bg-accent lg:left-0 lg:top-[-3px]"
                  aria-hidden="true"
                />
                <span className="block pt-6 font-display text-3xl font-medium text-gray-light sm:text-4xl">
                  {step.number}
                </span>
                <h3 className="mt-3 text-base font-semibold uppercase tracking-[0.08em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-gray">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
