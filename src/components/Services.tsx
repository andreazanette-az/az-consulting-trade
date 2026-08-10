import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import GrowLine from "./ui/GrowLine";
import IndustrialFrame from "./ui/IndustrialFrame";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="servizi" className="pt-10 pb-24 sm:pt-14 sm:pb-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Servizi</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.01em] text-ink text-balance">
              Competenze industriali a 360°
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-[15px] leading-relaxed text-gray sm:text-base">
              Dall&apos;analisi iniziale alla messa in produzione,
              accompagniamo il cliente durante l&apos;intero ciclo di vita
              dell&apos;impianto.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 sm:mt-20">
          {services.map((service, index) => (
            <div key={service.number}>
              <Reveal>
                <GrowLine />
              </Reveal>

              <div className="grid grid-cols-1 gap-8 py-14 lg:grid-cols-12 lg:gap-10 sm:py-16">
                <div className="lg:col-span-2">
                  <Reveal>
                    <span className="font-display text-4xl font-medium text-gray-light sm:text-5xl">
                      {service.number}
                    </span>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-gray">
                      {service.tag}
                    </p>
                  </Reveal>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-3" : ""
                  }`}
                >
                  <Reveal delay={60}>
                    <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.01em] text-ink sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray">
                      {service.text}
                    </p>
                    <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-ink"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Reveal delay={100}>
                    <IndustrialFrame
                      src={service.image}
                      alt={service.title}
                      label={service.tag}
                      className="aspect-[4/3] w-full"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  </Reveal>
                </div>
              </div>
            </div>
          ))}
          <GrowLine />
        </div>
      </Container>
    </section>
  );
}
