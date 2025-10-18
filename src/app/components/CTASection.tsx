export default function CTASection() {
  return (
    <section className="py-20 bg-brandDark text-white text-center">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Let’s skip to the part where your copy confidently attracts your ideal clients.
        </h2>
        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 rounded-lg bg-brandAccent hover:bg-brandLight text-white font-medium transition-colors"
        >
          I’m In. Let’s Talk
        </a>
      </div>
    </section>
  );
}
