"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Megaphone,
  Globe,
  Mail,
  FileText,
} from "lucide-react";

export default function ServicesOverviewSection() {
  const services = [
    {
      title: "Brand Messaging & Tone of Voice Guide",
      desc: "Before we write a single word of copy, we get clear on your messaging. This guide nails down your positioning, who you serve, what you stand for, and how you sound. It’s the foundation for everything else — your website, emails, and social content.",
      icon: <Megaphone className="w-8 h-8 text-brand-accent" />,
    },
    {
      title: "Website Copywriting",
      desc: "Your website is where people decide if they trust you enough to work with you. I write copy that clearly shows what you do, who it’s for, and why it matters — so visitors don’t just scroll, they reach out. Each page connects and converts.",
      icon: <Globe className="w-8 h-8 text-brand-accent" />,
    },
    {
      title: "Email Copywriting",
      desc: "Your email list is one of your most valuable assets. I write emails that sound human, build trust over time, and guide your subscribers to act — whether that’s booking a call, buying your offer, or just staying engaged.",
      icon: <Mail className="w-8 h-8 text-brand-accent" />,
    },
    {
      title: "Sales Page Copywriting",
      desc: "When you’re launching a program, course, or high-ticket offer, you need a sales page that does the heavy lifting. I craft long-form pages that walk your audience through the transformation, overcome objections, and make your offer the obvious next step.",
      icon: <FileText className="w-8 h-8 text-brand-accent" />,
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
    <section className="bg-brand-accent/10 py-20">
      <div className="container max-w-5xl text-brand-dark">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-serif mb-3">
            Need copy that connects with your audience <br className="hidden md:block" /> 
            and fills your calendar?
          </h2>
          <p className="text-lg font-medium text-brand-dark/80">
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
              className="flex flex-col gap-3 bg-white font-serif rounded-2xl shadow-sm hover:shadow-md border border-brand-accent/20 p-8 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-1">
                {s.icon}
                <h3 className="text-lg font-semibold font-serif text-brand-dark">
                  {s.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="inline-block px-8 py-3 rounded-md font-medium tracking-wide bg-brand-accent text-brand-dark hover:bg-brand-dark hover:text-brandPrimary transition-all shadow-md hover:shadow-lg"
          >
            EXPLORE SERVICES IN DETAIL
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
