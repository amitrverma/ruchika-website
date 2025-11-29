"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative bg-white text-brandDark">
      {/* ===== HERO ===== */}
      <section className="py-24 md:py-32 bg-brandPrimary text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="container max-w-3xl mx-auto px-6"
        >
          <p className="text-sm font-semibold text-brandSecondary mb-6">
            Ready to start your copywriting project? Let’s connect.
          </p>

          <h1 className="text-3xl md:text-5xl font-serif leading-snug text-brandDark mb-10">
            Your go-to copywriter for messaging and words that make{" "}
            <span className="font-semibold underline underline-offset-4">
              you the clear choice
            </span>{" "}
            for your right-fit clients.
          </h1>
        </motion.div>
      </section>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
      {/* ===== CONTACT INFO ===== */}
      <section className="py-20 md:py-28 bg-white text-brandDark">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="container max-w-3xl mx-auto px-6 leading-relaxed"
        >
          {/* Updated main text */}
          <p className="text-lg md:text-xl text-brandDark/80 mb-10">
            Use the calendar below to book a no-obligation intro call.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg">
            {/* === Email === */}
            <div>
              <h3 className="font-semibold text-brandDark mb-2 uppercase tracking-wide text-sm">
                Prefer to Email?
              </h3>
              <a
                href="mailto:hello@ruchikacopy.com"
                className="underline decoration-2 underline-offset-4 font-medium hover:text-brandSecondary transition-colors"
              >
                hello@ruchikacopy.com
              </a>
            </div>

            {/* === Business Hours (unchanged) === */}
            <div>
              <h3 className="font-semibold text-brandDark mb-2 uppercase tracking-wide text-sm">
                Business Hours
              </h3>
              <p>
                Monday – Friday, 10:00 am – 4:30 pm IST <br />
                <span className="text-brandDark/70">
                  Closed on major Indian holidays.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
      <section className="py-24 md:py-28 relative bg-brandPrimary">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="container max-w-3xl mx-auto text-center px-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-brandDark mb-10">
            Schedule your call below
          </h2>

          {/* Calendly Embed */}
          <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-brandDark/10 shadow-[0_12px_40px_-12px_rgb(0,0,0,0.15)]">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/ruchikaratna/45-mins-free-consultation"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>

          {/* Calendly script */}
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>
        </motion.div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
    </main>
  );
}
