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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f9f9f7] to-white py-28">
      {/* Background halos for subtle energy */}
      <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-brandAccent/10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-brandSecondary/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 animate-pulse-slower" />

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
          <span className="text-brand-accent font-semibold relative">
            the expert you’re becoming.
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brandAccent/30 rounded-full"></span>
          </span>
        </motion.h3>

        {/* Body paragraphs */}
        <div className="space-y-8 text-lg md:text-[1.125rem] text-gray-700">
          <motion.p variants={fadeUp}>
            Your expertise and results speak for themselves — people want to work with you.
          </motion.p>

          <motion.p variants={fadeUp}>
            But experience has taught you something deeper: that sustainable success isn’t built on
            constant hustle, but on alignment — surrounding yourself with the right people, the
            right energy, and the right vision.
          </motion.p>

          <motion.p variants={fadeUp}>
            This next phase is about stepping fully into that potential. It’s where your business
            becomes a space for the right partnerships — collaborations that elevate your impact and
            feel effortless. You’re not just looking for <em>ready-to-invest</em> clients; you’re
            calling in <strong>right-fit</strong> clients who are ready to grow with you.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-brandSecondary/90 italic border-l-4 border-brandSecondary pl-5 py-2"
          >
            The next level isn’t just about more — it’s about better.
          </motion.p>

          <motion.p variants={fadeUp} className="text-brandDark font-medium">
            You’re building your dream business, and if I can support that through the power of
            messaging and words,{" "}
            <span className="text-brand-accent font-semibold">I’d be honored.</span>
          </motion.p>
        </div>

        {/* Accent underline */}
        <motion.div
          variants={fadeUp}
          className="w-16 h-[2px] bg-brandAccent/40 mt-12 mx-auto md:mx-0"
        />
      </motion.div>
    </section>
  );
}
