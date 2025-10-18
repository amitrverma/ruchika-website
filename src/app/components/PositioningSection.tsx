import Link from "next/link";

export default function PositioningSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container max-w-3xl text-left">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
          You’re probably looking for a professional copywriter because…
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-brandDark mb-8 leading-snug">
          It’s time to shift your positioning from order-taker service provider<br />
          to{" "}
          <Link
            href="#"
            className="text-brandAccent font-semibold hover:underline"
          >
            boss business owner
          </Link>
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          And you’re thinking along these lines…
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
          <li>
            You want a website that aligns with your expert-level positioning and rates.
          </li>
          <li>
            You want to get intentional with your email marketing strategy.
          </li>
          <li>
            You want to send regular emails because, unlike social media, emails are where
            you build consistent, controlled, and compounding relationships with your audience.
          </li>
          <li>
            You’re selling a program, course, or digital product — and you need email copy and
            a sales page that help your audience see your offer as the ultimate solution
            <span className="block text-sm text-gray-500">
              (without manipulating them with urgency or pushy tactics)
            </span>
          </li>
        </ul>

        <p className="text-lg text-gray-700 mb-3">
          Which of course starts with your{" "}
          <strong className="font-semibold text-brandDark">MESSAGING.</strong>{" "}
          It’s the foundation of your marketing — website, emails, social — everything.
        </p>

        <p className="text-lg text-gray-700 mb-8">
          And it wouldn’t be an exaggeration to say your{" "}
          <strong className="font-semibold text-brandDark">COPY</strong>{" "}
          makes your message come alive.
        </p>

        <p className="text-lg text-gray-800 font-medium">
          That’s where I come in.
        </p>
      </div>
    </section>
  );
}
