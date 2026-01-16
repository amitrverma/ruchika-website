"use client";

import { motion, Variants } from "framer-motion";
import { Megaphone, Globe, Mail, FileText } from "lucide-react";
import { CTAButton } from "../ui/CTAButton";

export default function ServicesOverviewSection() {
  const services = [
    {
      title: "Brand Messaging & Tone of Voice Guide",
      desc: "This guide helps you get clear and confident in your messaging before any copy is written. It nails down your positioning, who you serve, what you stand for, and how your brand voice shows up in your copy. It’s the foundation for everything else: your website, emails, and social content.",
      icon: <Megaphone className="w-8 h-8 text-brandSecondary" />,
    },
    {
      title: "Website Copywriting",
      desc: "Your website (aka your most powerful brand asset) is where people decide if you’re the right fit to work with. \n I write website copy that helps your best-fit clients understand what you do, why it matters, and why you’re the right partner to help them move forward.",
      icon: <Globe className="w-8 h-8 text-brandSecondary" />,
    },
    {
      title: "Email Copywriting",
      desc: "Your email list is one of your most valuable assets. I write emails that feel like they're coming from a real person (because they are), build trust over time, and guide your subscribers to take action. \n Whether it's booking a call, buying your offer, or just staying engaged with your work. Have an email list? Let's make it work harder for you.",
      icon: <Mail className="w-8 h-8 text-brandSecondary" />,
    },
    {
      title: "Sales Page Copywriting",
      desc: "When you're launching a program, course, or high-ticket offer, you need a sales page that does the heavy lifting. \n I write long-form sales pages that walk your audience through the transformation, answer their objections, and make your offer feel like the obvious next step.",
      icon: <FileText className="w-8 h-8 text-brandSecondary" />,
    },
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-brandPrimary py-16 md:py-24">
      <div className="container max-w-5xl mx-auto text-brandDark">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-snug mb-4 text-brandDark">
            Need words that match <span className="font-serif text-brandSecondary">your level of expertise</span> and fill your calendar with right-fit clients?
          </h2>
          <p className="text-lg md:text-xl text-brandDark/80 font-light">
            Brand messaging and copywriting services for you
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="flex flex-col gap-4 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-brandSecondary p-8 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-brandDark leading-snug">
                  {s.title}
                </h3>
              </div>
              <p className="text-[1.05rem] text-brandDark/80 leading-relaxed font-sans font-normal max-w-prose  whitespace-pre-line">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <CTAButton href="/services" size="lg" className="text-lg">
            EXPLORE SERVICES IN DETAIL
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
