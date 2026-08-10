import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import GrowLine from "./ui/GrowLine";

export default function Intro() {
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
                AZ Consulting &amp; Trade
              </span>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink text-balance">
                Non vendiamo semplicemente tecnologia.
                <br />
                Costruiamo soluzioni che funzionano.
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10 max-w-2xl space-y-5 text-[15px] leading-relaxed text-gray sm:text-base">
                <p>Ogni impianto industriale presenta esigenze specifiche.</p>
                <p>
                  Per questo partiamo dall&apos;analisi del processo
                  produttivo, individuiamo le criticità e sviluppiamo
                  soluzioni tecniche in grado di integrarsi realmente nella
                  produzione del cliente.
                </p>
                <p className="text-ink">
                  Un unico interlocutore per consulenza, progettazione,
                  installazione, manutenzione e fornitura.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
