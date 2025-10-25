import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
   <section className="relative bg-brandPrimary py-30">
      {/* Hero background */}
      <div className="absolute inset-0">
        <Image
          src="/services-hero.jpg" // replace with your hero image
          alt="Laptop and workspace"
          fill
          priority
          className="object-cover object-center opacity-25 mix-blend-luminosity"
        />
      </div>

      {/* Hero content */}
      <div className="relative container max-w-4xl text-center py-40 px-6 z-10">
        <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
          1:1 Copywriting Services to{" "}
          <span className="text-brandDark">Launch, Rebrand,</span> or{" "}
          <span className="text-brandDark">Optimize</span>
        </h1>

        <p className="text-lg md:text-xl text-brandDark/90 max-w-2xl mx-auto mb-10">
          Everything you need to position yourself as an expert and attract the right-fit clients
          who are ready to invest — with clarity, confidence, and conversion in mind.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-brandSecondary text-white px-8 py-3 rounded-full font-medium tracking-wide hover:bg-brandDark transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.25)]"
        >
          LET’S TALK
        </Link>
      </div>
    </section>
  );
}
