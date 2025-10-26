"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProcessHighlightSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-[2fr_3fr] items-center gap-12 px-6 text-brandDark">
        {/* === IMAGE COLUMN === */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-[320px] h-[400px] rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 bg-gradient-to-br from-[#f9f9f9] to-[#fefcfb]">
            <Image
              src="/assets/ruchika-working.png"
              alt="Ruchika working on laptop"
              fill
              className="object-cover rounded-[2rem]"
              priority
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* === TEXT COLUMN === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed"
        >
          <h3 className="font-semibold text-xl md:text-2xl text-brandDark">
            But credentials are just the starting point. Here&apos;s what sets my process apart:
          </h3>

          <div className="space-y-4">
            <h4 className="font-semibold text-brandDark text-lg">Deep audience research:</h4>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                Copy that connects and converts requires deep understanding of who you&apos;re talking to.
              </li>
              <li>
                In my research phase, I dive into your audience&apos;s mindset through review mining,
                surveys, and competitor analysis—building the foundation for copy that converts.
              </li>
            </ul>
          </div>

          <div className="space-y-4 mt-6">
            <h4 className="font-semibold text-brandDark text-lg">Brand voice that feels human:</h4>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                Memorable brands don&apos;t just sell. They stand for something and make you feel something.
                Your brand messaging and tone shape every piece of copy you create.
              </li>
              <li>
                I bring brand messaging and tone of voice expertise (yes, another certification)
                to ensure your copy has the qualities, expression, and quirks that give your brand
                human characteristics.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Background Glow Elements */}
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-brand-accent/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-brandSecondary/10 blur-3xl rounded-full"></div>
    </section>
  );
}
