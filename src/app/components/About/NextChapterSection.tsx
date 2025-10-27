"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function NextChapterSection() {
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafaf9] to-brandPrimary/10 py-28">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative z-10 max-w-4xl px-6 text-brandDark leading-relaxed"
      >
        {/* === Heading === */}
        <motion.h3
          variants={fadeUp}
          className="text-2xl md:text-3xl font-serif text-center md:text-left mb-12"
        >
          And here’s what happened next…
        </motion.h3>

        {/* === Body === */}
        <div className="space-y-7 text-lg md:text-[1.125rem] max-w-3xl text-brandDark">
          <motion.p variants={fadeUp}>
            I decided to invest in myself and upskill. Because I can&apos;t expect others to invest
            in me if I haven&apos;t done the same.
          </motion.p>

          <motion.p variants={fadeUp}>
            So I immersed myself in learning — brand messaging, storytelling, and
            conversion-focused copywriting — guided by some of the best mentors in the field.
          </motion.p>

          <motion.p variants={fadeUp}>
            That experience changed how I approach communication entirely. It became less about
            “selling” and more about **understanding** — seeing through the eyes of the client and
            speaking to what truly moves them.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="text-brandSecondary/90 italic border-l-4 border-brandSecondary pl-5 py-2 leading-relaxed bg-brandSecondary/5 rounded-r-md"
          >
            Understand your audience inside and out.  
            Get your messaging right.  
            Combine it with your one-of-a-kind voice to write copy that earns  
            <span className="font-semibold text-brandSecondary"> “heck yes” </span> inquiries  
            from your right-fit clients.
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
