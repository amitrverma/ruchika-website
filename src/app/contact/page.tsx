import ContactForm from "../components/Contact/ContactForm";

export const metadata = {
  title: "Contact | Ruchika Copy Solutions",
  description:
    "Get in touch to discuss your next copywriting project — brand messaging, website, emails, or sales pages. Let’s connect!",
};

export default function ContactPage() {
  return (
    <main>
      {/* Top intro block */}
      <section className="bg-brandAccent py-16 text-center">
        <div className="container max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-brandDark mb-2">
            Ready to start your copywriting project? Let’s connect.
          </p>
          <h1 className="text-2xl md:text-3xl font-serif text-brandDark font-semibold">
            Your go-to copywriter for brand messaging and conversion-focused copy
          </h1>
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-white py-12">
        <div className="container max-w-3xl text-left space-y-4 text-brandDark leading-relaxed">
          <p>
            Contact me via email or fill out the form below, and I’ll get back to you within
            24–48 hours (Monday–Friday).
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:ruchikaratna@gmail.com"
              className="text-brandAccent underline hover:text-brandDark"
            >
              ruchikaratna@gmail.com
            </a>
          </p>
          <p>Business hours: Mondays – Fridays, 10 am – 4:30 pm IST</p>
          <p>My virtual office is closed for major Indian holidays.</p>
        </div>
      </section>

      {/* Contact Form (client-side) */}
      <section className="bg-brandAccent py-16">
        <div className="container max-w-2xl">
          <h2 className="text-center text-xl font-medium mb-8 text-brandAccent">
            Contact Form
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
