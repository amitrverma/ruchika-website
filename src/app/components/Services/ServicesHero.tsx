import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative bg-brandPrimary overflow-hidden min-h-[70vh] flex items-center mt-[104px]">
      {/* === Background Image === */}
      <div className="absolute inset-0">
        <Image
          src="/assets/services-hero.png"
          alt="Laptop and workspace"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* === Soft Overlay (for readability) === */}
      <div className="absolute inset-0 bg-brandPrimary/30" />

      {/* === Content === */}
      <div className="relative container mx-auto max-w-6xl flex justify-end px-6 md:px-12 z-10">
        <div className="max-w-xl text-right py-24 md:py-32">
          <h1 className="text-3xl md:text-5xl font-serif text-brandDark leading-tight mb-6">
            1:1 Copywriting Services to{" "}
            <span className="text-brandSecondary">Launch, Rebrand,</span> or{" "}
            <span className="text-brandSecondary">Optimize</span>
          </h1>

          <p className="text-lg md:text-xl text-brandDark/90 leading-relaxed mb-10">
            Everything you need to position yourself as an expert and attract the
            right-fit clients who are ready to invest — with clarity, confidence,
            and conversion in mind.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-brandSecondary text-white px-8 py-3 rounded-full font-medium tracking-wide hover:bg-brandDark transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.15)]"
          >
            LET’S TALK
          </Link>
        </div>
      </div>
    </section>
  );
}
