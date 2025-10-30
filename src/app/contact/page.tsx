"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "../components/Contact/ContactForm";

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
            Your go-to copywriter for messaging and
            words that make{" "}
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

    <p className="text-lg md:text-xl text-brandDark/80 mb-10">
      Whether you have a project in mind or just want to say hi, feel free to
      reach out. I usually reply within{" "}
      <span className="font-semibold text-brandAccent">24–48 hours</span>{" "}
      (Monday–Friday).
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg">
      {/* === Email === */}
      <div>
        <h3 className="font-semibold text-brandDark mb-2 uppercase tracking-wide text-sm">
          Email
        </h3>
        <a
          href="mailto:ruchikaratna@gmail.com"
          className="underline decoration-2 underline-offset-4 font-medium hover:text-brandSecondary transition-colors"
        >
          ruchikaratna@gmail.com
        </a>
      </div>

      {/* === Business Hours === */}
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
      {/* ===== CONTACT FORM ===== */}
      <section className="py-24 md:py-28 relative bg-brandPrimary">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="container max-w-2xl mx-auto text-center px-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-brandDark mb-10">
            Contact Form
          </h2>

          <ContactForm />
        </motion.div>
      </section>
       <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
    </main>
  );
}
