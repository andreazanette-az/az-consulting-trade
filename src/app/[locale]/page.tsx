import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Trade from "@/components/Trade";
import Method from "@/components/Method";
import WhyAZ from "@/components/WhyAZ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Trade />
        <Method />
        <WhyAZ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
