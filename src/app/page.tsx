import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div >
      <section className="h-screen snap-center" id="hero">
        <Hero />
      </section>

      <section className="h-screen snap-center" id="services">
        <Services />
      </section>

      <section className="h-screen snap-center" id="portfolio">
        <Portfolio />
      </section>

      <section className="h-screen snap-center" id="contact">
        <Contact />
      </section>

    </div>
  );
}
