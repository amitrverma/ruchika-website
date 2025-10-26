import Image from "next/image";

export default function AboutIntroShort() {
  return (
    <section className="relative bg-brandPrimary py-20 md:py-30">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-[1fr_1.3fr] gap-12 items-center px-6">

        {/* === LEFT COLUMN — RESPONSIVE OVERLAPPING IMAGES === */}
        <div className="relative w-fit mx-auto md:mx-0">
          {/* Top portrait */}
          <div className="relative w-[220px] h-[300px] sm:w-[260px] sm:h-[360px] md:w-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md z-10 border border-brandSecondary">
            <Image
              src="/assets/about.jpg"
              alt="Ruchika smiling"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Bottom landscape (overlapped) */}
          <div className="absolute w-[160px] h-[220px] sm:w-[180px] sm:h-[260px] md:w-[200px] md:h-[300px] 
                          -bottom-16 sm:-bottom-20 md:-bottom-40 
                          -left-6 sm:-left-10 md:-left-20 
                          rounded-lg overflow-hidden shadow-md z-20 border border-brandDark">
            <Image
              src="/assets/about-beach.jpg"
              alt="Ruchika at the beach with child"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* === RIGHT COLUMN — TEXT === */}
        <div className="text-brandDark space-y-5 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic">
            Hi, I am <span className="not-italic font-bold">Ruchika</span>
          </h2>

          <p className="text-base sm:text-lg md:text-2xl font-serif leading-relaxed">
            I help scaling service providers with their{" "}
            <span className="font-semibold text-brandSecondary">
              brand messaging and conversion-focused copy
            </span>
          </p>

          <p className="text-base sm:text-lg md:text-2xl font-serif leading-relaxed">
            So they can confidently market their services, connect with their audience,
            and attract right-fit clients.
          </p>
        </div>
      </div>
    </section>
  );
}
