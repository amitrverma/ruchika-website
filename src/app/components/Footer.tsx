"use client";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-[#f9fafb] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 space-y-6 md:space-y-0">
        {/* Left: Copyright */}
        <p className="text-center md:text-left">
          © {currentYear}{" "}
          <span className="font-semibold text-[#042a2b]">Ruchika Copy Solutions</span>.
          All rights reserved.
        </p>

        {/* Center: Social links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ed254e] transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5eb1bf] transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a93f55] transition-colors"
          >
            <FaXTwitter size={20} />
          </a>
        </div>

        {/* Right: Links */}
        <div className="flex space-x-6 text-center md:text-right">
          <a href="/about" className="hover:text-[#042a2b] transition-colors">
            About
          </a>
          <a href="/contact" className="hover:text-[#042a2b] transition-colors">
            Contact
          </a>
          <a href="/privacy" className="hover:text-[#042a2b] transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
