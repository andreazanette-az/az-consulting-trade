import { useTranslations } from "next-intl";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import GrowLine from "./ui/GrowLine";
import IndustrialFrame from "./ui/IndustrialFrame";
import ArrowCta from "./ui/ArrowCta";
import { partners } from "@/lib/content";

export default function Partners() {
  const t = useTranslations("partners");

  return (
    <section id="collaborazioni" className="scroll-mt-24 pb-24 sm:scroll-mt-28 sm:pb-32">
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

        <div className="mt-16 sm:mt-20">
          {partners.map((partner) => {
            const imageAlts = t.raw(`items.${partner.key}.imageAlts`) as string[];

            return (
              <div key={partner.key}>
                <Reveal>
                  <GrowLine />
                </Reveal>

                <div className="grid grid-cols-1 gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-5">
                    <Reveal>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray">
                        {t(`items.${partner.key}.tag`)}
                      </p>
                      <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-[-0.01em] text-ink sm:text-3xl">
                        {t(`items.${partner.key}.name`)}
                      </h3>
                    </Reveal>
                    <Reveal delay={60}>
                      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray">
                        {t(`items.${partner.key}.description`)}
                      </p>
                      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink">
                        {t(`items.${partner.key}.relation`)}
                      </p>
                      <ArrowCta href={partner.url} variant="ghost" external className="mt-8">
                        {t("visitSite")}
                      </ArrowCta>
                    </Reveal>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
                    {partner.images.map((src, index) => (
                      <Reveal key={src} delay={100 + index * 80}>
                        <IndustrialFrame
                          src={src}
                          alt={imageAlts[index]}
                          className="aspect-[4/3] w-full"
                          sizes="(min-width: 1024px) 28vw, 50vw"
                        />
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <GrowLine />
        </div>
      </Container>
    </section>
  );
}
