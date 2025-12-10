"use client";

import { CTAButton } from "../ui/CTAButton";
import { motion } from "framer-motion";
import { HeartHandshake, Clock, MessageCircle, CheckCircle } from "lucide-react";

export default function GuaranteeSection() {
  const items = [
    {
      icon: <CheckCircle className="w-8 h-8 text-brandSecondary" />,
      title: "Post Delivery support",
      desc: "My support doesn’t end with the delivery of the copy. You will receive 2 weeks of support after your copy goes live. This support focuses on fine-tuning and improving the existing copy if required.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-brandSecondary" />,
      title: "A Partner Who Cares",
      desc: "I’m 100% invested in your success. Your project isn’t just another job for me. it’s a partnership. I take the time to thoroughly understand your business, your audience, and your goals.",
    },
    {
      icon: <Clock className="w-8 h-8 text-brandSecondary" />,
      title: "On-Time Delivery, Every Time",
      desc: "Your deadlines are my priority. I ensure your copy is delivered on time. Unless we both agree to an extension.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-brandSecondary" />,
      title: "Clear Communication, Always",
      desc: "You’ll never be left wondering what’s happening. I’ll keep you updated every step of the way, so you’re always in the loop.",
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
    <section className="relative overflow-hidden bg-white py-24">

      <div className="container relative z-10 max-w-3xl text-center text-brand-dark leading-relaxed">
<motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl font-serif mb-12 flex flex-col items-center"
>
  <span className="relative inline-block">
    <span className="relative z-10 font-semibold text-brandDark">
      The Copywriter-Who-Really-Cares Guarantee
    </span>

    {/* === Wavy underline SVG === */}
    <svg
      className="absolute left-0 bottom-0 w-full h-[6px] text-brandSecondary"
      viewBox="0 0 200 6"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      
      <path
        d="M2 4C50 6 80 2 10 4C140 6 170 2 198 4"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </span>
</motion.h2>


        <div className="grid gap-8 text-left">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-5 bg-white/70 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all border border-brandSecondary"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-brandDark mb-1">{item.title}</h4>
                <p className=" text-sm md:text-base text-brandDark">{item.desc}</p>
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
          <CTAButton href="/contact" size="md" className="mt-12">
            LET'S CONNECT TODAY
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
