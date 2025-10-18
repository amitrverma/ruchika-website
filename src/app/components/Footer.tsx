import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f9f7f2] border-t border-gray-100 mt-20">
      <div className="container py-16 grid md:grid-cols-2 gap-10">
        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-serif text-brandDark mb-4">
            May I enter your inbox?
          </h3>

          <p className="text-gray-700 mb-6 max-w-md leading-relaxed">
            Asking your permission to have a clear, reflective conversation —
            like a chai or coffee-fuelled chat that leaves you feeling understood.
            About messages, copy, and building a business.
          </p>

          <p className="text-gray-600 mb-6">
            Also, you can email me back any time.
          </p>

          <form className="max-w-sm space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-brandAccent"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-brandAccent"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-[#c0654f] text-white font-medium tracking-wide px-8 py-2 rounded-md hover:bg-brandDark transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Quick Links + Social */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:text-brandAccent font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brandAccent font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brandAccent font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-10 md:mt-0">
            <h4 className="font-semibold text-gray-800 mb-3">
              Let’s connect on social and be biz friends beyond this page
            </h4>
            <div className="flex gap-4 text-2xl">
              <Link
                href="https://www.linkedin.com/in/ruchikaratna/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-[#0077b5] hover:opacity-80"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
                className="text-[#E4405F] hover:opacity-80"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Ruchika Copy Solutions · Made with clarity & chai ☕
      </div>
    </footer>
  );
}
