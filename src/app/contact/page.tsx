import ContactForm from "../components/Contact/ContactForm";
import Image from "next/image";

export const metadata = {
  title: "Contact | Ruchika Copy Solutions",
  description:
    "Get in touch to discuss your next copywriting project — brand messaging, website, emails, or sales pages. Let’s connect!",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative isolate bg-gradient-to-b from-brandAccent/20 via-white to-white py-28 text-center">
        {/* Decorative motifs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brandAccent/15 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-brandAccent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative container max-w-4xl px-6">
          <p className="text-sm uppercase tracking-wide text-brandDark/80 mb-3">
            Ready to start your next copywriting project?
          </p>
          <h1 className="text-3xl md:text-4xl font-serif text-brandDark leading-snug mb-4">
            Let’s craft copy that connects — and converts
          </h1>
          <p className="text-lg text-brandDark/80 max-w-2xl mx-auto">
            Reach out to discuss your goals, project ideas, or challenges. I’ll get back
            within 24–48 hours (Mon–Fri) — with clarity, not confusion.
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO ===== */}
      <section className="relative bg-white py-20">
        <div className="container max-w-3xl text-left leading-relaxed text-brandDark px-6 space-y-6">
          <div className="border-l-4 border-brandAccent/40 pl-6">
            <p className="text-lg font-medium mb-2 text-brandDark">
              Prefer to email directly?
            </p>
            <p>
              <a
                href="mailto:ruchikaratna@gmail.com"
                className="text-brandAccent font-semibold underline hover:text-brandDark"
              >
                ruchikaratna@gmail.com
              </a>
            </p>
          </div>

          <div>
            <p>
              Business hours: <strong>Monday – Friday, 10 AM – 4:30 PM IST</strong>
            </p>
            <p>Closed on major Indian holidays.</p>
          </div>

          <p className="italic text-brandDark/80">
            I treat every project like a partnership — grounded in clarity, communication,
            and care.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="w-16 h-[2px] bg-brandAccent/40 mx-auto mt-16" />
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="relative bg-gradient-to-br from-brandAccent/10 via-[#f9f9f7] to-brandAccent/10 py-28">
        {/* Optional image background motif */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/textures/paper-pattern.png" // optional subtle texture
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative container max-w-2xl z-10 text-center px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-brandDark mb-10">
            Let’s make something great together
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
