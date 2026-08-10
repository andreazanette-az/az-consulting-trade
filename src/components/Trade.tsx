import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import ArrowCta from "./ui/ArrowCta";
import IndustrialFrame from "./ui/IndustrialFrame";

export default function Trade() {
  return (
    <section id="trade" className="bg-black py-24 text-white sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="white">Industrial Trade</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 max-w-lg font-display text-[clamp(2.1rem,4.2vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.01em] text-white text-balance">
                La tecnologia giusta.
                <br />
                Direttamente dove serve.
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 max-w-md space-y-5 text-[15px] leading-relaxed text-white/60 sm:text-base">
                <p>
                  Grazie alla conoscenza del mercato e a una rete consolidata
                  di partner e produttori, AZ Consulting &amp; Trade può
                  fornire direttamente macchinari, componenti e soluzioni
                  destinate all&apos;industria.
                </p>
                <p>
                  Il nostro valore non è semplicemente trovare un prodotto,
                  ma individuare la soluzione tecnicamente più adatta al
                  processo produttivo del cliente.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10">
                <ArrowCta href="#contatti" variant="onDark">
                  Richiedi una consulenza
                </ArrowCta>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={140}>
              <IndustrialFrame
                src="/assets/images/trade-machinery.jpg"
                alt="Macchinario industriale pronto per la fornitura"
                label="Fornitura diretta · macchinari industriali"
                className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5]"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
