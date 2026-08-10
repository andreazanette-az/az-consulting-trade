import Link from "next/link";
import Container from "./ui/Container";
import Logo from "./ui/Logo";
import { contact, footerLinks } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black pb-10 pt-16 text-white/60">
      <Container>
        <div className="flex flex-col gap-12 border-b border-white/10 pb-12 sm:flex-row sm:justify-between">
          <div>
            <Logo tone="white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/40">
              Consulenza tecnica, progettazione, automazione e fornitura
              diretta per l&apos;industria.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-1"
            aria-label="Link footer"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 text-sm">
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>P.IVA {contact.vat}</p>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white/60 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} AZ Consulting &amp; Trade. Tutti i diritti riservati.</span>
          <span>Engineering · Automation · Trade</span>
        </div>
      </Container>
    </footer>
  );
}
