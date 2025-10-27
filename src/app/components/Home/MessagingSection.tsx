"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MessagingSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#fdfcfb] to-white py-24 overflow-hidden">


      <div className="container relative z-10 max-w-3xl mx-auto px-6 text-brandDark">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold leading-relaxed mb-8"
        >
          And you’re probably looking for a professional copywriter for one or more
          of these reasons:
        </motion.h2>

        {/* Bullet Points */}
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-5  text-lg leading-relaxed"
        >
          <li className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 bg-brandSecondary rounded-full flex-shrink-0 "></span>
            <span>
              You want a website that aligns with your expert level positioning and rates
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 bg-brandSecondary rounded-full flex-shrink-0"></span>
            <span>
              You want to be more intentional with your email marketing — turning your thoughts,
              stories, and experiences into emails that build trust, make sales, and have your
              audience looking forward to seeing your name in their inbox.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 bg-brandSecondary rounded-full flex-shrink-0"></span>
            <span>
              You’re selling a program, course, or digital product and need email copy and a
              sales page that help your audience see your offer as the right solution,
              without relying on pressure or hype.
            </span>
          </li>
        </motion.ul>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-brandSecondary/30 my-10 mx-auto"></div>

        {/* Emphasis Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl leading-relaxed space-y-5"
        >
          <p>
            Which ultimately starts with your{" "}
            <span className="font-semibold text-brandDark">MESSAGING.</span>
          </p>
          <p className="">
            It’s the foundation of everything — website, emails, social —{" "}
            <span className="font-medium text-brandDark">EVERYTHING</span>
          </p>
          <p>
            And it wouldn’t be an exaggeration to say your{" "}
            <span className="font-semibold text-brandSecondary">COPY</span> makes your
            message come alive.
          </p>
          <p className="font-medium text-brandDark">That’s where I come in.</p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brandSecondary hover:bg-brandDark text-white font-medium tracking-wide px-8 py-3 rounded-md shadow-md transition-all duration-200"
          >
            LET’S TALK MESSAGING
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Floating Accent Word */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-5 text-6xl font-serif tracking-wider select-none pointer-events-none">
        MESSAGING
      </div>
    </section>
  );
}
