import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Trade from "@/components/Trade";
import Method from "@/components/Method";
import WhyAZ from "@/components/WhyAZ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
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
