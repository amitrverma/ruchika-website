"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function OriginStorySection() {
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
   <section className="relative bg-brandPrimary py-30">


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative z-10 max-w-4xl px-6 text-brandDark leading-relaxed"
      >
        {/* === Heading === */}
        <motion.h3
          variants={fadeUp}
          className="text-2xl md:text-3xl font-serif mb-10 text-center md:text-left"
        >
          Ruchika Copy Solutions believes in building a business that supports your life —{" "}
          <span className="text-brandSecondary font-semibold">
            not the other way around.
          </span>
        </motion.h3>

        {/* === Story Narrative === */}
        <div className="space-y-7 text-lg md:text-[1.125rem] max-w-3xl">
          {[
            "After my master’s in marketing, I spent nine years working full-time in corporate.",
            "In 2017, I took a break. Like, a loooong break.",
            "My health had taken a hit, I had a young child to care for, and I was completely overwhelmed. I felt drained — physically and mentally. So I chose to press pause.",
            "I focused on healing, moving my body, and eating better. And for the first time in a long while, I just felt better.",
            "I wanted to get back to work, but not the 8-to-10-hour grind. Not at the cost of my well-being.",
            "Even with all the doubts in my head — especially after such a long gap — I took the first step. I chose to reinvent myself. To freelance.",
          ].map((para, i) => (
            <motion.p key={i} variants={fadeUp}>
              {para}
            </motion.p>
          ))}

          <motion.p
            variants={fadeUp}
            className="border-l-4 border-brandSecondary/40 pl-5 italic text-brandSecondary/90"
          >
            I believe that everyone has the ability to reinvent themselves — no matter what
            they&apos;ve been through. It&apos;s never too late.
          </motion.p>
        </div>

        {/* === Signature-style line (optional aesthetic) === */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-right italic text-brandDark/80 text-sm md:text-base"
        >
          — Ruchika
        </motion.div>
      </motion.div>
    </section>
  );
}
