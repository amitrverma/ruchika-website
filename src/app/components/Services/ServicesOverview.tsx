"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Megaphone, Globe, Mail, FileText } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      title: "Brand Messaging & Tone of Voice Guide",
      icon: <Megaphone className="w-8 h-8 text-brandSecondary" />,
      description:
        "Get crystal clear on who you are, who you serve, and how you communicate — so every word across your brand feels consistent, strategic, and unmistakably you.",
      bullets: [
        "Mission statement",
        "Brand values, promises, and positioning",
        "Brand story, archetypes, and personality",
        "Ideal client archetypes",
        "Ideal client profiles",
        "Tone of voice",
        "Key words + phrases",
        "Content pillars",
        "Delivered as a polished Canva booklet",
      ],
    },
    {
      title: "Website Copywriting",
      icon: <Globe className="w-8 h-8 text-brandSecondary" />,
      description:
        "Strategic, conversion-focused website copy that positions you as the expert, connects emotionally with your audience, and turns curious visitors into confident buyers.",
      bullets: [
        "SEO-informed copywriting for your website",
        "Mini brand messaging guide",
        "Audience and market research",
        "Collaboration with your designer for perfect fit",
      ],
    },
    {
      title: "Email Copywriting",
      icon: <Mail className="w-8 h-8 text-brandSecondary" />,
      description:
        "Sequences that build connection, nurture trust, and inspire action — from booking calls to buying offers.",
      bullets: ["Welcome sequences", "Sales sequences", "Webinar series", "Newsletters"],
    },
    {
      title: "Sales Page Copywriting",
      icon: <FileText className="w-8 h-8 text-brandSecondary" />,
      description:
        "Long-form, research-backed copy that speaks to your audience’s deeper motivations, builds trust, and positions your offer as the natural next step.",
    },
  ];

  // === Motion Variants ===
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
    <section className="relative overflow-hidden bg-brandPrimary py-28">
      {/* === Decorative background gradient === */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-brandPrimary/60 to-brandPrimary opacity-60" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative z-10 max-w-6xl text-brandDark"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-serif text-center mb-14 leading-snug"
        >
          Here’s how I help you attract clients who{" "}
          <span className="text-brandSecondary font-semibold">value your thinking</span>
          <br />
          <span className="text-base font-normal text-brandDark/80">
            (not just your deliverables)
          </span>
        </motion.h2>

        {/* === Card Grid === */}
        <motion.div
          variants={container}
          className="grid gap-10 sm:grid-cols-2 md:gap-12"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="group relative flex flex-col justify-between bg-white/80 backdrop-blur-md border border-brandDark/10 rounded-2xl shadow-[0_8px_25px_-8px_rgb(0_0_0/0.08)] hover:shadow-[0_16px_45px_-10px_rgb(0_0_0/0.15)] transition-all duration-300 p-8"
            >
              {/* Floating Icon */}
              <div className="absolute -top-5 left-6 bg-white/90 backdrop-blur-sm border border-brandDark/5 rounded-full p-3 shadow-sm group-hover:shadow-md transition-shadow">
                {service.icon}
              </div>

              {/* Card Content */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-brandSecondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-brandDark/80 leading-relaxed">{service.description}</p>

                {service.bullets && (
                  <ul className="list-disc list-outside mt-4 space-y-1 text-brandDark/70">
                    {service.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white bg-brandSecondary transition-all duration-300 hover:bg-brandDark focus:outline-none focus-visible:ring-2 focus-visible:ring-brandSecondary/50 group"
                >
                  <span className="relative z-10">INQUIRE HERE</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* === Custom Needs CTA === */}
        <motion.div
          variants={fadeUp}
          className="mt-16 text-center text-sm text-brandDark/80 max-w-2xl mx-auto"
        >
          <p className="text-lg font-semibold">Need something different?</p>
         All my services are project-based and can be tailored to your specific needs. If you have a
unique scope in mind or need a custom combination of services, let's talk about what works
best for your business.<br/> {" "}
          <Link
            href="/contact"
            className="text-brandSecondary font-medium underline-offset-2 hover:underline hover:text-brandDark"
          >
            Inquire here
          </Link>
        </motion.div>

        <div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-brandSecondary to-transparent mx-auto mt-20 rounded-full" />
      </motion.div>
    </section>
  );
}
