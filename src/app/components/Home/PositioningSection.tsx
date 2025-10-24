"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Mail, Globe, Sparkles } from "lucide-react";

export default function PositioningSection() {
  const points = [
    {
      icon: <Globe className="w-5 h-5 text-brand-dark" />,
      text: "You want a website that aligns with your expert-level positioning and rates.",
    },
    {
      icon: <Mail className="w-5 h-5 text-brand-dark" />,
      text: "You want to get intentional with your email marketing strategy.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-dark" />,
      text: "You want to build consistency through emails — a space that’s yours, not the algorithm’s.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-brand-dark" />,
      text: (
        <>
          You’re selling a program, course, or digital product — and you need copy that helps your audience
          see your offer as the natural next step{" "}
          <span className="block text-sm text-brand-dark/70">
            (without resorting to pressure or gimmicks)
          </span>
        </>
      ),
    },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* === Split background stripe === */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/15 via-transparent to-transparent"></div>

      <div className="container relative z-10 max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        {/* === Left: Copy block === */}
        <div className="space-y-6 text-brand-dark">
          <p className="text-sm uppercase tracking-wide text-brand-dark/70">
            You’re probably looking for a professional copywriter because…
          </p>

          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            It’s time to move from{" "}
            <span className="bg-brand-dark text-brandAccent px-2 py-1 rounded-sm">
              order-taker
            </span>{" "}
            to{" "}
            <Link
              href="#"
              className="inline-block text-brand-accent font-semibold hover:underline decoration-brand-accent/70"
            >
              boss business owner
            </Link>
          </h2>

          <p className="text-lg font-medium">
            You’re ready to lead with clarity, conviction, and copy that carries your voice.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-accent text-brand-dark font-medium rounded-md hover:bg-brand-dark hover:text-white transition-all shadow-sm"
            >
              Let’s Talk Messaging
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* === Right: Visual List === */}
        <motion.ul
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          {points.map((p, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-brand-accent/10 hover:bg-brand-accent/20 transition-colors p-5 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 mt-1">{p.icon}</div>
              <p className="text-brand-dark leading-relaxed">{p.text}</p>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* === Floating wordmark accent === */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-10 text-6xl font-serif pointer-events-none select-none">
        BOSS ENERGY
      </div>
    </section>
  );
}
