"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntroSection() {
  return (
    <section className="bg-brandPrimary py-14 md:py-20">
      <div className="container grid md:grid-cols-[3fr_2fr] items-center gap-12 max-w-6xl relative z-10">

        {/* === TEXT COLUMN === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-5 text-brandDark"
        >
          <h2 className="text-3xl md:text-5xl font-serif leading-snug mb-4">
            Hi, I’m <span className="text-brand-accent relative">
              Ruchika
              <motion.span
                layoutId="underline"
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-accent"
              />
            </span> — your strategic partner for brand messaging & copywriting
          </h2>

          <p className="text-lg italic">
            When there are many amazing copywriters out there, why choose me?{" "}
            <span className="block md:inline text-sm text-brand-dark/70 font-normal">
              (And I’m only comparing myself to other HUMANS)
            </span>
          </p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="font-semibold text-brand-dark mt-6"
          >
            With my marketing background and copywriting skills, I’ve got your back.
            Here’s what I bring:
          </motion.h3>

          <div className="space-y-4 text-brand-dark/90 leading-relaxed">
            <p>
              After earning my master’s in marketing, I spent 9 years managing content across
              websites, emails, and social channels in the corporate world.
            </p>

            <p>
              I understand how a marketing funnel works and how to integrate SEO keywords
              strategically. I structure copy for the best user experience and apply marketing
              psychology to craft messages that engage and drive results.
            </p>

            <p>
              <strong className="font-semibold text-brand-dark">
                I’m a Copyhackers certified copywriter.
              </strong>{" "}
              Marketing and copywriting share research, analysis, and strategy —
              but copywriting adds emotional precision: crafting messages that
              connect and inspire action.
            </p>

            <p>
              So I learned brand messaging and tone of voice from the top experts in this field
              — and now help service-based businesses do the same.
            </p>
          </div>
        </motion.div>

        {/* === IMAGE COLUMN === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6"
        >
          {/* Profile image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden border border-brandSecondary/20 shadow-lg shadow-brand-accent/10"
          >
            <Image
              src="/assets/ruchika-profile.png"
              alt="Ruchika Ratna - Copywriter and Brand Messaging Specialist"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Certification badges */}
          <div className="flex flex-wrap justify-center gap-5 mt-4">
            {[
              { src: "/assets/badge-webcopy.png", alt: "Web Copy Certificate", delay: 0 },
              { src: "/assets/badge-emails.png", alt: "Email Copy Certificate", delay: 0.15 },
              { src: "/assets/badge-brandvoice.png", alt: "Brand Voice Certificate", delay: 0.3 },
              { src: "/assets/badge-conversion.png", alt: "Brand Voice Certificate", delay: 0.45 },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: badge.delay, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={100}
                  height={100}
                  className="object-contain drop-shadow-sm hover:drop-shadow-md transition-all"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* === BACKGROUND MOTIF === */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
    </section>
  );
}
