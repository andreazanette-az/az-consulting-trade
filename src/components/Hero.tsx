import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import ArrowCta from "./ui/ArrowCta";
import IndustrialFrame from "./ui/IndustrialFrame";
import Reveal from "./ui/Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44 lg:pt-48"
    >
      <div
        className="pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 xl:block"
        aria-hidden="true"
      >
        <span
          className="block text-[11px] font-medium uppercase tracking-[0.5em] text-gray"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Consulting — Engineering — Trade
        </span>
      </div>

      <Container>
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 xl:col-span-6">
            <Reveal>
              <Eyebrow>Engineering · Automation · Die Casting</Eyebrow>
            </Reveal>

            <h1 className="sr-only">
              Soluzioni industriali per pressofusione, automazione e robotica
            </h1>

            <Reveal delay={80}>
              <p className="mt-6 max-w-2xl font-display text-[clamp(2.65rem,6.2vw,5.625rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink text-balance">
                Soluzioni industriali.
                <br />
                Dalla progettazione
                <br />
                alla produzione.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-gray sm:text-base">
                AZ Consulting &amp; Trade affianca le aziende nella
                progettazione, installazione e manutenzione di impianti
                industriali, sistemi di automazione e soluzioni per la
                pressofusione.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-gray sm:text-base">
                Dalla consulenza tecnica alla fornitura diretta, sviluppiamo
                soluzioni pensate per migliorare efficienza, affidabilità e
                produttività.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
                <ArrowCta href="#servizi" variant="primary">
                  Scopri i nostri servizi
                </ArrowCta>
                <a
                  href="#contatti"
                  className="text-sm font-medium text-ink underline decoration-gray-light decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent"
                >
                  Parliamo del tuo progetto
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 xl:col-span-6">
            <Reveal delay={160} className="relative">
              <IndustrialFrame
                src="/assets/images/hero-industrial.jpg"
                alt="Impianto industriale con bracci robotici e linea automatica"
                label="Impianto industriale · linea automatizzata"
                className="aspect-[4/5] w-full sm:aspect-[16/11] lg:aspect-[4/5]"
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 border border-ink/15 sm:block" aria-hidden="true" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
