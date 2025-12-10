"use client";

import { motion, Variants } from "framer-motion";
import { Megaphone, Globe, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { CTAButton } from "../ui/CTAButton";

export default function ServicesOverview() {
  const services = [
    {
      title: "Brand Messaging & Tone of Voice Guide",
      icon: <Megaphone className="w-8 h-8 text-brandSecondary" />,
      description:
        "This is the foundation, where we get clear on who you are, who you serve, and how you communicate, so all your copy and content stays cohesive and strategic.",
      bullets: [
        "Brand foundations (values, mission, brand promise)",
        "Positioning and differentiation",
        "Right-fit client clarity",
        "Voice and messaging guide (voice, tone, and key phrases)",
        "Content pillars",
        "Delivered as a digital brand booklet in Canva",
      ],
      extraHeading: "This is for you if you're:",
      extraBullets: [
        "Starting out and want your foundation rock solid from day one",
        "Scaling up and need your messaging to match where your business is now",
        "Pivoting and need your message and voice crystal clear for your new direction",
      ],
      extraDescription:
        "This becomes your go-to resource for all content creation — whether you're writing it yourself or getting someone else on your team to write for you.\n\nWith clarity on your positioning, POV, and what sets you apart in your space, everything you create calls in the right-fit people.",
    },

    {
      title: "Website Copywriting",
      icon: <Globe className="w-8 h-8 text-brandSecondary" />,
      description:
        "Strategic, conversion-focused website copywriting that positions you as the expert, speaks directly to your right-fit client, and turns curious visitors into confident buyers.",
      bullets: [
        "Website strategy (structure and messaging framework)",
        "Audience research (customer surveys, competitor analysis, forum mining)",
        "Website copy written with SEO best practices",
        "Website wireframe in Canva",
        "Designer collaboration (I'll work with your designer to ensure smooth implementation)",
      ],
      extraDescription:
        "Every website is custom-scoped based on your specific needs – whether that's a one-offer and one-audience type site or a more complex structure with multiple service offerings and audience types.",
    },

    {
      title: "Email Copywriting",
      icon: <Mail className="w-8 h-8 text-brandSecondary" />,
      description:
        "Sequences that nurture your audience, warm up leads, and drive action — whether that's booking calls, buying offers, or building long-term trust.",
      bullets: [
        "Email sequence strategy – Map out the right number of emails and approach based on your business goals",
        "Audience research to understand their language, motivations, and objections",
        "Strategic email copy that builds trust and drives action",
      ],
      extraHeading: "Pick the sequences that fit your goals:",
      extraBullets: [
        "Welcome sequences",
        "Launch sequence",
        "Sales sequences",
        "Webinar sequences",
        "Newsletter series",
        "Custom sequences for your specific goals",
      ],
      extraDescription:
        "Each project is tailored to your audience and goals – because effective email strategy isn't one-size-fits-all.",
    },

    {
      title: "Sales Page Copywriting",
      icon: <FileText className="w-8 h-8 text-brandSecondary" />,
      description:
        "Research-backed, long-form sales page copy that speaks to your audience’s deeper desires, addresses their objections, and positions your offer as the solution they've been looking for. Every project will include strategy and research.",
      bullets: [
        "Sales page strategy – positioning, flow, and messaging approach",
        "Audience research to understand their language, motivations, and objections",
        "Strategic long-form sales page copy",
      ],
      extraDescription:
        "Sales page lengths are customized based on your offer complexity and where your audience is in their decision-making journey.",
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
          <span className="text-brandSecondary font-semibold">
            value your thinking
          </span>
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
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: "0 20px 50px -10px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="
    group relative flex flex-col
    bg-white/80 backdrop-blur-md 
    border border-brandDark/10 
    rounded-2xl
    shadow-[0_8px_25px_-8px_rgb(0,0,0/0.08)]
    transition-all duration-300 p-8

    bg-[radial-gradient(circle_at_90%_20%,transparent)]
  "
            >
              {/* Floating Icon */}
              <div className="absolute -top-5 left-6 bg-white/90 backdrop-blur-sm border border-brandDark/5 rounded-full p-3 shadow-sm group-hover:shadow-md transition-shadow">
                {service.icon}
              </div>

              <div className="mt-8 space-y-8">
                {/* === Title & Short Description === */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 tracking-tight text-brandSecondary">
                    {service.title}
                  </h3>

                  <p className="text-brandDark/75 leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-brandDark/10 to-transparent" />

                {/* === WHAT’S INCLUDED === */}
                {service.bullets && (
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-brandSecondary/10 text-xs tracking-wider font-semibold text-brandSecondary/90">
                      WHAT’S INCLUDED
                    </span>

                    <ul className="list-disc list-outside space-y-1 mt-3 ml-4 text-brandDark/75 leading-relaxed">
                      {service.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Divider */}
                {(service.extraBullets || service.extraDescription) && (
                  <div className="h-px bg-gradient-to-r from-transparent via-brandDark/10 to-transparent" />
                )}

                {/* === WHO THIS IS FOR === */}
                {service.extraBullets && (
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-brandSecondary/10 text-xs tracking-wider font-semibold text-brandSecondary/90">
                      {service.extraHeading || "WHO THIS IS FOR"}
                    </span>

                    <ul className="list-disc list-outside space-y-1 mt-3 ml-4 text-brandDark/75 leading-relaxed">
                      {service.extraBullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* === SUPPORTING PARAGRAPH === */}
                {service.extraDescription && (
                  <p className="text-brandDark/70 leading-relaxed whitespace-pre-line border-l-2 border-brandSecondary/30 pl-4 italic">
                    {service.extraDescription}
                  </p>
                )}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <CTAButton href="/contact" size="sm">
                  INQUIRE HERE
                </CTAButton>
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
          All my services are project-based and can be tailored to your specific
          needs. If you have a unique scope in mind or need a custom combination
          of services, let&apos;s talk about what works best for your business.
          <br />{" "}
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
