import Link from "next/link";

export default function ServicesOverviewSection() {
  return (
    <section className="bg-[#f9f7f2] py-20">
      <div className="container max-w-3xl text-left">
        <h2 className="text-2xl md:text-3xl font-serif text-brandDark mb-6">
          Need copy that connects with your audience and fills your calendar?
        </h2>

        <p className="text-lg text-gray-700 font-medium mb-8">
          Brand messaging and copywriting services for you
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* 1️⃣ Brand Messaging */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Brand Messaging &amp; Tone of Voice Guide
            </h3>
            <p>
              Before we write a single word of copy, we get clear on your messaging.
              This guide nails down your positioning, who you serve, what you stand for,
              and how you sound. It’s the foundation for everything else: your website,
              emails, and social content.
            </p>
          </div>

          {/* 2️⃣ Website Copywriting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Website Copywriting</h3>
            <p>
              Your website is where people decide if they trust you enough to work with you.
              I write copy that clearly shows what you do, who it’s for, and why it matters—
              so visitors don’t just scroll, they reach out. Whether it’s your homepage,
              about page, or services, every page is built to connect and convert.
            </p>
          </div>

          {/* 3️⃣ Email Copywriting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Copywriting</h3>
            <p>
              Your email list is one of your most valuable assets. I write emails that feel
              like they’re coming from a real person (because they are), build trust over time,
              and guide your subscribers to take action. Whether it’s booking a call,
              buying your offer, or just staying engaged with your work.
            </p>
            <p className="mt-2">
              Have an email list? Let’s make it work harder for you.
            </p>
          </div>

          {/* 4️⃣ Sales Page Copywriting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Sales Page Copywriting
            </h3>
            <p>
              When you’re launching a program, course, or high-ticket offer, you need a
              sales page that does the heavy lifting. I write long-form sales pages that
              walk your audience through the transformation, answer their objections,
              and make your offer feel like the obvious next step.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-[#c0654f] text-white rounded-md font-medium tracking-wide hover:bg-brandDark transition-colors"
          >
            EXPLORE SERVICES IN DETAIL
          </Link>
        </div>
      </div>
    </section>
  );
}
