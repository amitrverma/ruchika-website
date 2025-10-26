"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntroSection() {
  return (
    <section className="relative bg-[#f8f5ef] py-20 md:py-24 overflow-hidden">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-[3fr_2fr] items-center gap-12 px-6 text-brandDark">
        
        {/* === TEXT COLUMN === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-brandDark">
            Hi, I am <span className="text-brand-accent font-bold">Ruchika</span>, your strategic partner for brand messaging
            and copywriting services
          </h2>

          <p className="italic text-brandDark/80 text-base md:text-lg">
            When there are many amazing copywriters out there, why choose me?{" "}
            <br className="hidden md:block" />
            <span className="text-sm text-brandDark/60 font-medium">
              (And I&apos;m only comparing myself to other HUMANS)
            </span>
          </p>

          <h3 className="font-semibold text-lg md:text-xl mt-6">
            With my marketing background and copywriting skills, I’ve got your back. Here’s what I bring:
          </h3>

          <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed text-[1.05rem]">
            <li>Master’s in marketing,</li>
            <li>
              Spent 9 years in marketing, writing and managing content across websites, emails, and social media
              in the corporate world.
            </li>
            <li>
              I understand how a marketing funnel works and how to integrate SEO keywords strategically and structure
              copy for the best user experience.
            </li>
          </ul>

          <p className="font-semibold text-brandDark mt-6">
            I&apos;m a Copyhackers certified copywriter.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I invested in myself and learned copywriting and brand messaging & tone of voice from top experts in this field.
          </p>
        </motion.div>

        {/* === IMAGE COLUMN === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-8"
        >
          {/* Profile Image */}
          <div className="relative w-[280px] h-[280px] rounded-[2rem] border-2 border-gray-200 bg-white p-2 shadow-md">
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-gray-300">
              <Image
                src="/assets/ruchika-profile.png"
                alt="Ruchika Ratna - Copywriter and Brand Messaging Specialist"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Certification Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-2">
            {[
              { src: "/assets/badge-webcopy.png", alt: "Web Copy Certificate" },
              { src: "/assets/badge-emails.png", alt: "Email Copy Certificate" },
              { src: "/assets/badge-brandvoice.png", alt: "Brand Voice Certificate" },
              { src: "/assets/badge-conversion.png", alt: "Conversion Copy Certificate" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={90}
                  height={90}
                  className="object-contain drop-shadow-sm hover:drop-shadow-md transition-all"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-brand-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
}
