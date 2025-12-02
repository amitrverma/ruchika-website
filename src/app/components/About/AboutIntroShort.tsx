"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntroShort() {
  return (
    <section className="relative bg-brandPrimary py-30">
      {/* Decorative gradient motif */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-brandSecondary via-transparent to-transparent" />

      <div className="container mx-auto max-w-6xl grid md:grid-cols-[1fr_1.3fr] gap-12 items-center px-6 relative z-10">

        {/* === RIGHT COLUMN — TEXT (BUT FIRST ON MOBILE) === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-brandDark space-y-6 text-center md:text-left order-1 md:order-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic leading-tight">
            Hi, I’m{" "}
            <span className="not-italic font-bold text-brandDark">Ruchika</span>
          </h2>

          <p className="text-base sm:text-lg md:text-2xl font-serif leading-relaxed max-w-xl mx-auto md:mx-0">
            I help scaling service providers with their{" "}
            <span className="font-semibold text-brandSecondary">
              brand messaging and conversion-focused copy
            </span>
            .
          </p>

          <p className="text-base sm:text-lg md:text-2xl font-serif leading-relaxed max-w-xl mx-auto md:mx-0">
            So they can confidently market their services, connect deeply with
            their audience, and attract right-fit clients who truly value their
            expertise.
          </p>
        </motion.div>

        {/* === LEFT COLUMN — IMAGE STACK (BUT SECOND ON MOBILE) === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-fit mx-auto md:mx-0 order-2 md:order-1"
        >
          {/* Main portrait */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-[220px] h-[300px] sm:w-[260px] sm:h-[360px] md:w-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-brandSecondary"
          >
            <Image
              src="/assets/about.jpg"
              alt="Ruchika smiling"
              fill
              priority
              className="object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </motion.div>

          {/* Overlapped beach photo */}
          <motion.div
            whileHover={{ rotate: -2, y: -6 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="absolute w-[160px] h-[220px] sm:w-[180px] sm:h-[260px] md:w-[200px] md:h-[300px]
                        -bottom-16 sm:-bottom-20 md:-bottom-40
                        -left-6 sm:-left-10 md:-left-20
                        rounded-2xl overflow-hidden shadow-xl border border-brandDark bg-white"
          >
            <Image
              src="/assets/about-beach.jpg"
              alt="Ruchika at the beach with child"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </motion.div>

          {/* Glow */}
          <div className="absolute -bottom-16 -right-20 w-60 h-60 bg-brandSecondary/20 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
        </motion.div>

      </div>
    </section>
  );
}
