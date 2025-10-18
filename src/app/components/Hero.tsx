import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto grid md:grid-cols-[3fr_2fr] items-center gap-10 md:gap-16">
        {/* Left — Text */}
        <div className="text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-6xl font-serif text-brandDark leading-tight">
           Strategic copywriting <br/>for service providers on the cusp of growth who want more visibility, authority, and right-fit clients 
        </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl md:mt-2">
            Audience research. Clear messaging. Your authentic voice.<br />
            <strong className="text-gray-900 font-semibold">
              Positioning you as the expert you’re becoming.
            </strong>
          </p>
    
            Prefer to talk, not read? <br/>
     
        <a
          href="/contact"
          className="btn text-md"
        >
         LET'S CONNECT OVER A CALL
        </a>
        </div>

        {/* Right — Image (≈40%) */}
        <div className="relative w-full h-[280px] md:h-[420px]">
          <Image
            src="/hero-image.jpg"  // replace with your real image
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
