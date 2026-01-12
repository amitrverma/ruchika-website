"use client";

import { useEffect } from "react";

export default function ContactPage() {
  // Load Calendly script only on the client
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      script.remove();
    };
  }, []);

  return (
    <main className="relative bg-white text-brandDark">
      {/* ===== HERO + CALENDLY ===== */}
      <section className="py-24 md:py-32 bg-brandPrimary text-center">
        <div className="container max-w-3xl mx-auto px-6">
          <h1 className="text-2xl md:text-4xl font-serif leading-snug text-brandDark mb-10">
            Your go-to copywriter for messaging and words that make{" "}
            <span className="font-semibold underline underline-offset-4">
              you the clear choice
            </span>{" "}
            for your right-fit clients.
          </h1>
        </div>

        <div className="container max-w-6xl mx-auto text-center px-6 mt-16">
          <h2 className="text-xl md:text-2xl font-semibold text-brandDark mb-10">
            Ready to start your copywriting project? Schedule your call below.
          </h2>

          {/* Calendly Embed */}
          <div className="bg-white/80 backdrop-blur-md p-0 rounded-3xl border border-brandDark/10 shadow-[0_12px_40px_-12px_rgb(0,0,0,0.15)]">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/ruchikaratna/45-mins-free-consultation"
              style={{ minWidth: "320px", width: "100%", height: "700px" }}
            />
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
    </main>
  );
}
