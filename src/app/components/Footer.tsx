"use client";

import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-brandSecondary/20 to-white border-t border-brandDark/10">

      {/* Gradient decorative blurs */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-brandPrimary/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brandPrimary/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Footer main content */}
      <div className="relative z-10 container py-16 border-t border-brandDark/10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* ----------- FORM ----------- */}
          <div className="max-w-md">
            <h3 className="text-2xl font-serif text-brandDark mb-4">
              May I enter your inbox?
            </h3>
            <p className="text-brandDark/90 mb-3 leading-relaxed max-w-md">
              Asking your permission to have a clear, reflective conversation
              like a chai or coffee-fuelled chat that leaves you feeling
              understood. About messages, copy, and building a business.
            </p>
            <p className="text-brandDark/70 italic mb-6">
              Also, you can email me back any time.
            </p>

            <form
              action="https://app.kit.com/forms/8732446/subscriptions"
              method="post"
              className="max-w-sm space-y-3"
            >
              <input
                type="text"
                name="fields[first_name]"
                placeholder="Name"
                className="w-full border border-brandDark/30 bg-white rounded-md px-3 py-2 text-brandDark placeholder:text-brandDark/60 focus:outline-none focus:ring-2 focus:ring-brandSecondary/50"
              />
              <input
                type="email"
                name="email_address"
                placeholder="Email address"
                required
                className="w-full border border-brandDark/30 bg-white rounded-md px-3 py-2 text-brandDark placeholder:text-brandDark/60 focus:outline-none focus:ring-2 focus:ring-brandSecondary/50"
              />
              <button
                type="submit"
                className="w-auto bg-brandSecondary text-white font-semibold tracking-wide px-8 py-2 rounded-full hover:bg-brandDark hover:text-white transition-all duration-300 shadow-sm"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* ----------- QUICK LINKS ----------- */}
          <div className="flex flex-col justify-start md:justify-center">
            <h4 className="font-semibold text-brandDark mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-brandDark/90">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-brandSecondary transition-colors font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ----------- SOCIAL ----------- */}
          <div className="flex flex-col justify-start md:justify-center md:items-end">
            <h4 className="font-semibold text-brandDark mb-3 leading-relaxed max-w-xs text-left md:text-right">
              Let’s connect on social and be biz friends beyond this page
            </h4>
            <div className="flex gap-5 text-2xl justify-start md:justify-end">
              <Link
                href="https://www.linkedin.com/in/ruchikaratna/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-[#0077b5] hover:opacity-80 transition-opacity"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
                className="text-[#E4405F] hover:opacity-80 transition-opacity"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* ----------- COPYRIGHT ----------- */}
        <div className="mt-12 pt-6 border-t border-brandDark/10 text-center text-sm text-brandDark/80">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong>Ruchika Copy Solutions</strong> · Made with clarity & chai ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
