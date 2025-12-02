"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative bg-[#F3EDE5] overflow-hidden min-h-[70vh] flex items-center mt-[104px]">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* === LEFT IMAGES === */}
        <div className="relative">
          {/* Main portrait */}
          <div className="w-full h-[520px] relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/ruchika-service.jpeg" // replace with your real image
              alt="Ruchika"
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Overlapping desk image */}
          <div className="absolute -bottom-12 -left-10 w-[300px] h-[300px] rounded-lg overflow-hidden shadow-lg hidden md:block">
            <Image
              src="/assets/coffee-service.jpeg" // replace with your real image
              alt="Workspace"
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        </div>

        {/* === RIGHT CONTENT === */}
        <div className="z-10 text-left md:pl-10">
          <h1 className="text-3xl md:text-5xl font-serif text-brandDark leading-tight mb-6">
            1:1 copywriting services to{" "}
            <span className="font-semibold">launch, rebrand, or optimize</span>
          </h1>

          <p className="text-lg md:text-xl text-brandDark/80 leading-relaxed mb-10 max-w-md">
            Everything you need to position yourself as an expert to attract 
            the right-fit clients who are ready to invest.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-brandSecondary text-white px-10 py-4 rounded-md font-medium shadow-md hover:bg-brandDark transition-all duration-300"
          >
            LET’S TALK
          </Link>
        </div>

      </div>
    </section>
  );
}
