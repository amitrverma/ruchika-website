"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, Clock, MessageCircle, CheckCircle } from "lucide-react";

export default function GuaranteeSection() {
  const items = [
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-accent" />,
      title: "Post-Delivery Support",
      desc: "My support doesn’t stop at delivery. You’ll receive two weeks of post-delivery support for any tuning or feedback needed.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-brand-accent" />,
      title: "A Partner Who Cares",
      desc: "I treat your success as my own. This is a partnership — not just a project.",
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-accent" />,
      title: "On-Time Delivery, Every Time",
      desc: "Your deadlines matter. I honor them — unless we both agree to an adjustment.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-brand-accent" />,
      title: "Clear Communication, Always",
      desc: "You’ll always know what’s happening. No confusion, no waiting in the dark.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-brand-accent/10 py-24">
      {/* --- Subtle moving background circles --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] rounded-full bg-brand-accent/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-120px] left-[-80px] w-[300px] h-[300px] rounded-full bg-brand-accent/20 blur-3xl animate-pulse-slow delay-700"></div>
      </div>

      <div className="container relative z-10 max-w-3xl text-center text-brand-dark leading-relaxed">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-serif mb-12"
        >
          The <span className="text-brand-accent">Copywriter-Who-Really-Cares</span> Guarantee
        </motion.h2>

        <div className="grid gap-8 text-left">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-5 bg-white/70 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">{item.title}</h4>
                <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block mt-12 bg-brand-accent text-white px-8 py-3 rounded-md font-medium tracking-wide hover:bg-brand-dark transition-colors"
          >
            LET’S CONNECT TODAY
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
