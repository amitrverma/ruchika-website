import Image from "next/image";
import { CTAButton } from "../ui/CTAButton";

export default function Hero() {
  return (
    <section className="relative bg-brandPrimary pb-30 pt-36 md:pt-36">
      <div className="container mx-auto grid md:grid-cols-[3fr_2fr] items-center gap-10 md:gap-8">

        {/* === MOBILE IMAGE (hidden on desktop) === */}
        <div className="relative w-full h-64 mb-6 md:hidden">
          <Image
            src="/assets/hero-image-optimized.jpg"
            alt="Ruchika in front of flowering greenery"
            fill
            className="object-cover rounded-2xl shadow-md"
            priority
          />
        </div>

        {/* === Left — Text === */}
        <div className="text-left space-y-5 text-brandSecondary px-4 md:px-0">

          <p className="font-semibold text-md md:text-base">
            For service providers at the cusp of growth
          </p>

          <h1 className="
            text-2xl leading-[1.2] font-serif text-brandDark 
            md:text-5xl md:leading-[1.12]
          ">
            Strategic copywriting <br className="hidden md:block" />
            that helps you attract <br className="hidden md:block" />
            <span className="font-semibold whitespace-nowrap">right-fit clients</span>{" "}
            <br className="hidden md:block" />
            <span className="font-semibold whitespace-nowrap">ready to invest</span>
          </h1>

          <p className="text-md md:text-xl leading-relaxed max-w-xl md:mt-2">
            I start with your MESSAGING - getting clear on your right-fit
            clients, how you&apos;re positioned, and what sets you apart.
          </p>

          <p className="text-md md:text-xl text-brandDark font-bold leading-relaxed max-w-xl">
            Then bring it to life through COPY that makes you the obvious choice.
          </p>

          <p className="text-md md:text-base mt-8">Prefer to talk, not read?</p>

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
            src="/assets/hero-image-optimized.jpg"
            alt="Ruchika in front of flowering greenery"
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
