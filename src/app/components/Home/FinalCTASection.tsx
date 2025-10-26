"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Calendar, Phone, FileText, Rocket } from "lucide-react";

export default function FinalCTASection() {
  const steps = [
    {
      icon: <FileText className="w-7 h-7" />,
      title: "Inquiry",
      desc: "Fill the form — I’ll reply within 24–48 hrs (Mon–Fri) with a confirmation & call link.",
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Clarity Call",
      desc: "We discuss goals, fit, and scope. You’ll get straight answers, no fluff.",
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Proposal",
      desc: "Clear deliverables, timeline, and pricing so you can decide with confidence.",
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Kickoff",
      desc: "Sign + first milestone → we start. Smooth onboarding and momentum from day one.",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafaf9] to-brandPrimary/10 py-28">
      {/* Decorative background halo */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brandSecondary/15 rounded-full blur-3xl translate-x-1/4 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-brandDark leading-snug">
            Let’s skip to the part where your copy
            <br className="hidden sm:block" /> confidently attracts your ideal clients
          </h2>
          <p className="text-lg text-brandDark/80 mt-4">
            Here’s the path — simple, human, and efficient
          </p>
        </motion.div>

        {/* Stepper */}
        <ol className="relative grid gap-10 md:grid-cols-4 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="group relative flex md:block items-start md:text-center"
            >
              {/* Connecting line (desktop) */}
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-5 left-1/2 w-full h-[2px] bg-gradient-to-r from-brandSecondary/30 to-transparent transform translate-x-1/2" />
              )}

              {/* Step number */}
              <div className="relative z-10 flex items-center justify-center md:mx-auto w-11 h-11 rounded-full bg-white border border-brandSecondary/30 text-brandSecondary font-semibold group-hover:shadow-[0_0_15px_-2px_rgb(94_177_191/0.4)] transition-all duration-300">
                {i + 1}
              </div>

              {/* Content */}
              <div className="mt-3 md:mt-5 md:px-4">
                <div className="flex md:justify-center items-center gap-2 text-brandSecondary mb-1">
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                    {s.icon}
                  </span>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                </div>
                <p className="text-sm text-brandDark/80 leading-relaxed">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-brandSecondary/30 bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-[0_8px_35px_rgba(0,0,0,0.04)]">
            <p className="text-brandDark text-center text-lg md:text-xl font-medium">
              Ready to move from{" "}
              <span className="italic text-brandSecondary/90">
                “thinking about it”
              </span>{" "}
              to{" "}
              <span className="underline underline-offset-4 decoration-brandAccent font-semibold">
                booking better clients
              </span>
              ?
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-brandSecondary text-white font-medium tracking-wide hover:bg-brandDark transition-all duration-300 shadow-md group"
              >
                <span className="group-hover:scale-105 transition-transform">
                  I’M IN — SCHEDULE A CALL
                </span>
              </Link>
              <span className="text-sm text-brandDark/60">or</span>
              <Link
                href="/services"
                className="text-sm underline underline-offset-4 decoration-brandSecondary/60 hover:text-brandDark"
              >
                Review services
              </Link>
            </div>

            <div className="mt-4 text-center text-xs text-brandDark/60">
              Calendar updated weekly · No high-pressure sales · Clear next steps
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
