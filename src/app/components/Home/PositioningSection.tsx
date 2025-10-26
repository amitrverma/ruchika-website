"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CelebrationSection() {
  const topPoints = [
    {
      title: "You’ve built a business with care",
      desc: "You’re already getting leads through referrals, social media, and word of mouth.",
    },
    {
      title: "You’ve built a reputation through real results",
      desc: "You’ve put in the work and it shows. Clients come back because you bring value every single time.",
    },
    {
      title: "You’re expanding thoughtfully",
      desc: "You’re growing in a way that aligns with your values and the kind of business you want long-term.",
    },
  ];

  const bottomPoints = [
    {
      title: "You’re ready to attract more right-fit clients",
      desc: "The ones who respect your process, your time, and your expertise — the clients who truly value YOU.",
    },
    {
      title: "You’re refining your brand’s messaging",
      desc: "You’re updating, rebranding, optimizing — making your words match how far you’ve evolved.",
    },
    {
      title: "You’re not just doing more — you’re doing better",
      desc: "Thinking long-term. Choosing partners who share your vision and standards.",
    },
  ];

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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafaf9] to-brandPrimary/10 py-28 text-brandDark">
      {/* Subtle celebration confetti background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-brandSecondary via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_80%_90%,_var(--tw-gradient-stops))] from-brandAccent via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-serif leading-relaxed mb-12 flex items-center justify-center gap-3"
        >
          <Sparkles className="text-brandAccent w-6 h-6 animate-pulse" />
          <span>
            Take a moment — you&apos;re right on the edge of something exciting.
            <br />
            <span className="font-semibold text-brandSecondary">
              But first, let’s celebrate this.
            </span>
          </span>
          <Sparkles className="text-brandAccent w-6 h-6 animate-pulse" />
        </motion.h2>

        {/* Top Points */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 mb-20"
        >
          {topPoints.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="group bg-white/90 backdrop-blur-sm border border-brandSecondary/10 rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg md:text-xl mb-2 group-hover:text-brandSecondary transition-colors">
                {item.title}
              </h3>
              <p className="text-brandDark/80 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brandDark/20 to-transparent" />
          <h3 className="relative inline-block bg-white px-4 text-xl md:text-2xl font-serif font-medium text-brandDark">
            Now it’s time to own your next-level era —{" "}
            <span className="text-brandAccent underline decoration-brandAccent/40">
              from order-taker to boss business owner
            </span>
            .
          </h3>
        </motion.div>

        {/* Bottom Points */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {bottomPoints.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="group bg-white/90 backdrop-blur-sm border border-brandSecondary/10 rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg md:text-xl mb-2 group-hover:text-brandAccent transition-colors">
                {item.title}
              </h3>
              <p className="text-brandDark/80 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
