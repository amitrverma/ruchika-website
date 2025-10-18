import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="bg-white py-20 text-center">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-serif text-brandDark mb-4">
          Let’s skip to the part where your copy confidently attracts your ideal clients
        </h2>

        <p className="text-gray-600 mb-8 text-lg">
          This is how it works. Simple and easy <span className="inline-block">↓</span>
        </p>

        <ul className="text-left list-disc list-inside text-gray-700 space-y-4 leading-relaxed mb-10">
          <li>
            Once you fill out the inquiry form, you’ll hear from me within 24–48 hours
            (Monday–Friday) with a confirmation email and call details.
          </li>
          <li>
            We’ll hop on a call to discuss your project, goals, and what you’re looking to achieve.
          </li>
          <li>
            If it feels like a good fit, I’ll send you a detailed proposal covering what’s included,
            timelines, and pricing — everything you need to make an informed decision.
          </li>
          <li>
            Once you’re ready, we’ll make it official with a signed agreement and payment, and then we dive in!
          </li>
        </ul>

        <Link
          href="/contact"
          className="inline-block bg-[#c0654f] text-white px-8 py-3 rounded-md text-sm md:text-base font-medium tracking-wide hover:bg-brandDark transition-colors"
        >
          I’M IN. I WANT TO SCHEDULE A CALL
        </Link>
      </div>
    </section>
  );
}
