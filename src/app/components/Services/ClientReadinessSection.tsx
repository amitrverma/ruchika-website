"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ClientReadinessSection() {
  // === Animation Variants ===
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafaf9] to-white py-28">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brandSecondary via-transparent to-transparent" />

      <div className="container relative max-w-4xl mx-auto px-6 text-brandDark leading-relaxed z-10">
        {/* === Heading === */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-serif text-center mb-16"
        >
          What makes ready-to-invest clients say{" "}
          <span className="relative text-brandSecondary font-semibold">
            “yes”
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brandSecondary/40 rounded-full" />
          </span>
          ?
        </motion.h2>

        {/* === Body Content === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10 text-[1.05rem] md:text-lg "
        >
          {/* Paragraph 1 */}
          <motion.p variants={fadeUp}>
            As a service provider, whether you&apos;re a{" "}
            <strong>
              coach, consultant, designer, photographer, therapist, stylist, marketer, legal or
              financial professional, OBM, or VA
            </strong>
            , the market is crowded, and your potential clients are savvier than ever.
          </motion.p>

          {/* List 1 */}
          <motion.ul variants={fadeUp} className="space-y-4">
            {[
              "They’re not comparing who talks the most about pain points or promises the biggest transformation. Everyone says that.",
              "Ready-to-invest clients focus on the big picture — they evaluate your expertise, your approach, whether you truly understand their needs, and whether you stand out in a sea of similar options.",
            ].map((point, i) => (
              <motion.li key={i} className="flex items-start gap-3" variants={fadeUp}>
                <CheckCircle2 className="mt-1 w-5 h-5 text-brandSecondary shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Key Insight */}
          <motion.p variants={fadeUp} className="font-semibold text-brandDark mt-6">
            They ask:{" "}
            <span className="italic text-brandDark/90">
              “Do you get me? Do you have a clear point of view? Can I trust you? Are you the best
              person to support my long-term goals?”
            </span>
          </motion.p>

          {/* List 2 */}
          <motion.ul variants={fadeUp} className="space-y-4">
            {[
              "That’s where your messaging and copy matter. Every touchpoint — social media, website, emails, and sales pages — either positions you as the expert or blends you into the background.",
              "Shape your messaging for your ideal clients — the ones who are ready to invest.",
            ].map((point, i) => (
              <motion.li key={i} className="flex items-start gap-3" variants={fadeUp}>
                <CheckCircle2 className="mt-1 w-5 h-5 text-brandSecondary shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Closing Paragraph */}
          <motion.p
            variants={fadeUp}
            className="font-semibold text-brandDark mt-10 border-t border-gray-200 pt-6 text-center"
          >
            When your message speaks to their deeper desires and positions you as the go-to expert,{" "}
            <span className="text-brandSecondary font-bold">
              you attract clients who value your expertise — not just price-shop.
            </span>
          </motion.p>
        </motion.div>

        {/* Divider */}
        <div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-brandSecondary to-transparent mx-auto mt-20 rounded-full" />
      </div>
    </section>
  );
}
