import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-brandSecondary/20 to-white border-t border-brandDark/10">
      {/* Decorative motifs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brandPrimary/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-brandPrimary/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Main grid */}
      <div className="relative z-10 container py-20 grid md:grid-cols-[2fr_1fr] gap-16">
        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-serif text-brandDark mb-5">
            May I enter your inbox?
          </h3>
          <p className="text-brandDark/90 mb-4 leading-relaxed max-w-md">
Asking your permission to have a clear, reflective conversation like a
chai or coffee-fuelled chat that leaves you feeling understood. About
messages, copy, and building a business.
          </p>
          <p className="text-brandDark/80 mb-6 italic">
            Also, You can email me back any time.
          </p>

          <form className="max-w-sm space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-brandDark/30 bg-white/90 rounded-md px-3 py-2 text-brandDark placeholder:text-brandDark/60 focus:outline-none focus:ring-2 focus:ring-brandSecondary/50"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-brandDark/30 bg-white/90 rounded-md px-3 py-2 text-brandDark placeholder:text-brandDark/60 focus:outline-none focus:ring-2 focus:ring-brandSecondary/50"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-brandSecondary text-white font-medium tracking-wide px-8 py-2 rounded-full hover:bg-brandDark hover:text-white transition-all duration-300 shadow-sm"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Links + Social */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-semibold text-brandDark mb-4">Quick Links</h4>
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

          <div className="mt-10 md:mt-0">
            <h4 className="font-semibold text-brandDark mb-3">
              Let’s connect on social and be biz friends beyond this page
            </h4>
            <div className="flex gap-5 text-2xl">
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
      </div>

      {/* Divider + Copyright */}
       <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
      <div className="relative border-t border-brandDark/10 py-6 text-center text-sm text-brandDark/80">
        <p>
          © {new Date().getFullYear()} <strong>Ruchika Copy Solutions</strong> ·
          Made with clarity & chai ☕
        </p>
      </div>
    </footer>
  );
}
