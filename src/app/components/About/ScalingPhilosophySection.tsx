"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function ScalingPhilosophySection() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut", // ✅ use string literal instead of cubic-bezier array
      },
    },
  };

  return (
    <section className="relative overflow-hidden  py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative max-w-4xl mx-auto text-brandDark leading-relaxed px-6 z-10"
      >
        {/* Opening pull-quote */}
        <motion.h3
          variants={fadeUp}
          className="text-2xl md:text-3xl font-serif font-medium text-center md:text-left mb-10 md:mb-12 max-w-2xl"
        >
          As you scale, it’s time to position yourself as{" "}
          <span className="text-brandSecondary font-semibold relative">
            the expert you’re becoming.
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brandSecondary/30 rounded-full"></span>
          </span>
        </motion.h3>

        {/* Body paragraphs */}
        <div className="space-y-8 text-lg md:text-[1.125rem] ">
          <motion.p variants={fadeUp}>
            Your expertise, your results, are so compelling that people want to
            work with you.
          </motion.p>

          <motion.p variants={fadeUp}>
            But experience has taught you something deeper: As a service
            provider, sustainable success isn’t built on constant hustle. It
            comes from the right alignment with the right people.
          </motion.p>

          <motion.p variants={fadeUp}>
            This next phase is about stepping fully into that potential. It’s
            where your business becomes a space for the right partnerships, the
            kind of collaborations that elevate your impact and feel
            intentional.
          </motion.p>

          <motion.p variants={fadeUp}>
            You’re not just looking for ready-to-invest clients, you’re looking
            for right-fit clients who are ready to invest.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-brandSecondary/90 italic border-l-4 border-brandSecondary pl-5 py-2"
          >
            The next level isn’t just about more — it’s about better.
          </motion.p>

          <motion.p variants={fadeUp}>
            You’re building your dream business, and if I can support that
            through the power of messaging and words, I’d be honored.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
