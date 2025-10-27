"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "../components/Contact/ContactForm";
import { Mail, Clock, Heart } from "lucide-react";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative bg-brandPrimary overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative py-28 md:py-36 bg-brandPrimary text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="relative container max-w-3xl px-6"
        >
          <p className="text-sm uppercase tracking-widest text-brandDark/80 mb-4">
            Ready to start your next copywriting project?
          </p>

          <h1 className="relative text-3xl md:text-5xl font-serif text-brandDark leading-snug mb-6 inline-block">
            Let’s craft copy that connects — and converts
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-[3px] bg-brandSecondary/60 rounded-full"></span>
          </h1>

          <p className="text-lg md:text-xl text-brandDark/80 leading-relaxed max-w-2xl mx-auto mt-8">
            Reach out to discuss your goals, project ideas, or challenges.
            I’ll get back within 24–48 hours (Mon–Fri) — with clarity, not confusion.
          </p>
        </motion.div>

        <div className="absolute inset-0">
          <Image
            src="/textures/paper-pattern.png"
            alt=""
            fill
            className="object-cover opacity-10 mix-blend-overlay"
          />
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brandDark/20 to-transparent" />

      {/* ===== CONTACT INFO ===== */}
      {/* ===== CONTACT INFO ===== */}
<section className="relative bg-white py-24 md:py-28">
  <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.8 }}
    variants={fadeUp}
    className="container max-w-5xl px-6 text-brandDark leading-relaxed"
  >
    {/* Row: Email + Divider + Business Hours */}
    <div className="flex flex-col md:flex-row md:items-start md:justify-between relative gap-10 md:gap-0">
      {/* Email */}
      <div className="flex items-start gap-4 border-l-4 border-brandPrimary/40 pl-6 md:w-1/2 pr-8">
        <Mail className="w-6 h-6 text-brandSecondary shrink-0 mt-1" />
        <div>
          <p className="text-lg font-semibold mb-1">Prefer to email directly?</p>
          <a
            href="mailto:ruchikaratna@gmail.com"
            className="text-brandSecondary font-semibold underline hover:text-brandSecondary transition-colors"
          >
            ruchikaratna@gmail.com
          </a>
        </div>
      </div>

      {/* Divider Line (visible only on desktop) */}
      <div className="hidden md:block w-[1px] bg-brandDark/20 h-20 absolute left-1/2 top-1/2 -translate-y-1/2"></div>

      {/* Business Hours */}
      <div className="flex items-start gap-4 md:w-1/2 pl-8">
        <Clock className="w-6 h-6 text-brandSecondary shrink-0 mt-1" />
        <div>
          <p>
            Business hours:{" "}
            <strong>Monday – Friday, 10 AM – 4:30 PM IST</strong>
          </p>
          <p>Closed on major Indian holidays.</p>
        </div>
      </div>
    </div>

    {/* Centered Partnership Note */}
    <div className="flex justify-center mt-16">
      <div className="flex items-start gap-3 max-w-2xl text-center">
        <Heart className="w-6 h-6 text-brandSecondary shrink-0 mt-1" />
        <p className="italic text-brandDark/80 leading-relaxed">
          I treat every project like a partnership — grounded in clarity,
          communication, and care.
        </p>
      </div>
    </div>

    <div className="w-16 h-[2px] bg-brandPrimary/40 mx-auto mt-20" />
  </motion.div>
</section>


      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brandDark/20 to-transparent" />

      {/* ===== CONTACT FORM ===== */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <Image
            src="/textures/paper-pattern.png"
            alt=""
            fill
            className="object-cover opacity-10 mix-blend-overlay"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="relative container max-w-2xl z-10 text-center px-6"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-brandDark mb-10">
            Let’s make something great together
          </h2>


            <ContactForm />

        </motion.div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brandDark/20 to-transparent" />
    </main>
  );
}
