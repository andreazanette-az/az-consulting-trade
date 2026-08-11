import { useTranslations } from "next-intl";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import ContactForm from "./ContactForm";
import { contact } from "@/lib/content";

export default function FinalCTA() {
  const t = useTranslations("finalCta");

  return (
    <section id="contatti" className="bg-black py-24 text-white sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/50">
                {t("kicker")}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-[1.06] tracking-[-0.01em] text-white text-balance">
                {t("title")}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-white/60 sm:text-base">
                {t("body")}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:gap-10">
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
                <span>{t("location")}</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
