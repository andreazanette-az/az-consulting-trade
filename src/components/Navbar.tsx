"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Logo from "./ui/Logo";
import Container from "./ui/Container";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import { navAnchors } from "@/lib/content";

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gray-light/70 bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Container className="flex items-center justify-between py-4 sm:py-5">
          <Link href="#top" aria-label={t("homeAriaLabel")}>
            <Logo priority />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label={t("mainAriaLabel")}>
            {navAnchors.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink/80 transition-colors duration-300 hover:text-ink"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <LanguageSwitcher />
            <Link
              href="#contatti"
              className="inline-flex items-center gap-2 border border-ink/20 px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.1em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-bg"
            >
              {t("cta")}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </Container>
      </header>

      {/*
        Rendered as a sibling of <header>, not a child: <header> gains
        backdrop-blur on scroll, and backdrop-filter creates a new
        containing block for `position: fixed` descendants. Nesting this
        panel inside the header made it size itself against the header's
        own (short) box instead of the viewport once scrolled, so its
        content overflowed and overlapped the page below. Keeping it a
        sibling means it always measures against the real viewport.
      */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-bg px-6 pb-10 pt-28 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label={t("mobileAriaLabel")}>
          {navAnchors.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-light py-5 font-display text-3xl font-medium text-ink"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-6">
          <LanguageSwitcher />
          <Link
            href="#contatti"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.1em] text-bg"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </>
  );
}
