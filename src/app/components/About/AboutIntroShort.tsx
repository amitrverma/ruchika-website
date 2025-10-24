import Image from "next/image";

export default function AboutIntroShort() {
  return (
    <section className="relative bg-gradient-to-br from-brand-accent/10 via-white to-brand-accent/20 py-24">
      {/* Background motif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative z-10 grid md:grid-cols-[2fr_1fr] gap-12 items-center max-w-6xl px-6">
        {/* === TEXT === */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark leading-snug">
            Hi, I’m <span className="text-brand-accent font-semibold">Ruchika</span>
          </h2>

          <p className="text-lg md:text-xl text-brand-dark/90 leading-relaxed">
            I help scaling service providers with their{" "}
            <span className="font-semibold text-brand-accent">
              brand messaging and conversion-focused copy
            </span>{" "}
            — so they can confidently market their services, connect with their audience,
            and attract right-fit clients.
          </p>

          <div className="h-[2px] w-20 bg-brand-accent/40 my-6" />

          <div className="space-y-3 text-brand-dark/80">
            <p>
              Whether you’re revamping your website, launching a new offer, or clarifying
              your brand voice, I blend strategy + storytelling to help your message land
              — and last.
            </p>
            <p>
              <span className="font-medium text-brand-dark">
                Strategic thinking meets human insight.
              </span>{" "}
              That’s my approach to copywriting — because clarity converts better than hype.
            </p>
          </div>
        </div>

        {/* === IMAGE === */}
        <div className="relative mx-auto md:mx-0">
          {/* Framed photo */}
          <div className="relative w-[260px] h-[260px] rounded-2xl overflow-hidden shadow-md border border-brand-accent/20">
            <Image
              src="/assets/ruchika-about.png"
              alt="Ruchika Ratna - Copywriter"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Framed tagline block */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-brand-dark rounded-xl shadow-sm border border-brand-accent/10 py-2 px-4 text-sm font-medium tracking-wide">
            Certified Conversion Copywriter
          </div>
        </div>
      </div>
    </section>
  );
}
