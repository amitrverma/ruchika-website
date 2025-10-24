"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Ruchika Copy Solutions logo"
            width={155}
            height={155}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-md font-medium text-brandDark">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brandAccent transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>

        {open && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-4 border-b border-gray-50 hover:bg-brandAccent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
