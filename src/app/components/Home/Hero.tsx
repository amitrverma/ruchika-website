import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-brandPrimary py-30">
      <div className="container mx-auto grid md:grid-cols-[3fr_2fr] items-center gap-10 md:gap-16">
        {/* Left — Text */}
        <div className="text-center md:text-left space-y-5 text-brandSecondary">
          <p>Messaging-first copywriter for websites, emails & sales pages.</p>
          <h1 className="text-4xl md:text-6xl font-serif text-brandDark leading-tight">
           Strategic copywriting for
service providers on the cusp of
growth<br/> - Positioning you as the
expert you’re becoming
        </h1>

          <p className="text-lg md:text-xl  leading-relaxed max-w-xl md:mt-2">
            Audience research. Clear messaging. Your authentic voice.<br />
            <strong className="text-brandDark font-semibold">
              Positioning you as the expert you’re becoming.
            </strong>
          </p>
    
            Prefer to talk, not read? <br/><br/>
     
        <a
          href="/contact"
          className="btn text-md text-white bg-brandSecondary hover:bg-brandDark px-6 py-3 rounded-full font-semibold transition-colors block w-max mx-auto md:mx-0"
        >
         LET&apos;S CONNECT OVER A CALL
        </a>
        </div>

        {/* Right — Image (≈40%) */}
        <div className="relative w-full h-full">
          <Image
            src="/assets/hero-image.png"  // replace with your real image
            alt="Ruchika Copy Solutions - strategic copywriting"
            fill
            className="object-cover rounded-2xl shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
