import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark text-white">
      {/* Hero background */}
      <div className="absolute inset-0">
        <Image
          src="/services-hero.jpg" // replace with your hero image
          alt="Laptop and workspace"
          fill
          priority
          className="object-cover object-center opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Hero content */}
      <div className="relative container max-w-4xl text-center py-40 px-6 z-10">
        <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
          1:1 Copywriting Services to{" "}
          <span className="text-brand-accent">Launch, Rebrand,</span> or{" "}
          <span className="text-brand-accent">Optimize</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Everything you need to position yourself as an expert and attract the right-fit clients
          who are ready to invest — with clarity, confidence, and conversion in mind.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-brand-accent text-brand-dark px-8 py-3 rounded-full font-medium tracking-wide hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.25)]"
        >
          LET’S TALK
        </Link>
      </div>

      {/* Decorative gradient ring */}
      <div className="absolute -bottom-24 right-1/3 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-3xl" />
    </section>
  );
}
