import Image from "next/image";
import { CTAButton } from "../ui/CTAButton";

export default function Hero() {
  return (
    <section className="relative bg-brandPrimary pb-30 pt-44 md:pt-58">
      <div className="container mx-auto grid md:grid-cols-[3fr_2fr] items-center gap-10 md:gap-16">

        {/* === MOBILE IMAGE (hidden on desktop) === */}
        <div className="relative w-full h-64 mb-6 md:hidden">
          <Image
            src="/assets/hero-image.png"
            alt="Ruchika Copy Solutions - strategic copywriting"
            fill
            className="object-cover rounded-2xl shadow-md"
            priority
          />
        </div>

        {/* === Left — Text === */}
        <div className="text-left space-y-5 text-brandSecondary px-4 md:px-0">

          <p className="font-semibold text-sm md:text-base">
            Messaging-first copywriter for websites, emails & sales pages.
          </p>

          <h1 className="
            text-2xl leading-snug font-serif text-brandDark 
            md:text-5xl
          ">
            Strategic copywriting for <br className="hidden md:block" />
            service providers on the cusp <br className="hidden md:block" />
            of growth – Positioning you as <br className="hidden md:block" />
            <span className="font-semibold underline whitespace-nowrap">the obvious choice</span>{" "}
            in your space
          </h1>

          <p className="text-base md:text-xl leading-relaxed max-w-xl md:mt-2">
            Audience research. Clear messaging. Your authentic voice.
          </p>

          <p className="text-base md:text-xl text-brandDark font-bold leading-relaxed max-w-xl">
            So you attract right-fit clients who are ready to invest.
          </p>

          <p className="text-sm md:text-base mt-1">Prefer to talk, not read?</p>

          <CTAButton
            href="/contact"
            size="md"
            className="block w-max"
          >
            LET&apos;S CONNECT OVER A CALL
          </CTAButton>
        </div>

        {/* === Desktop Image — untouched === */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/assets/hero-image.png"
            alt="Ruchika Copy Solutions - strategic copywriting"
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover rounded-2xl shadow-md"
            priority
          />
        </div>

      </div>
    </section>
  );
}
