"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-teal-mist"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-2.5">
                {/* Logo mark - SVG placeholder matching brand */}
                <div className="relative w-9 h-9">
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="18" cy="18" r="17" stroke="#22848E" strokeWidth="1.5" />
                    <path d="M18 8C18 8 11 13 11 20C11 24.4 14.1 28 18 28C21.9 28 25 24.4 25 20C25 13 18 8 18 8Z" fill="#22848E" opacity="0.15" />
                    <path d="M18 8C18 8 11 13 11 20C11 24.4 14.1 28 18 28" stroke="#22848E" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M18 8C18 8 25 13 25 20C25 24.4 21.9 28 18 28" stroke="#6ED1B4" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="18" cy="18" r="3" fill="#22848E" />
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-display font-semibold text-teal-abyss text-base tracking-tight group-hover:text-teal-deep transition-colors">
                    Untapped
                  </span>
                  <span className="font-display text-teal-deep text-[11px] tracking-[0.18em] uppercase font-medium">
                    Soul
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-teal-deep"
                      : "text-teal-abyss/70 hover:text-teal-deep"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-teal-deep text-white text-sm font-medium rounded-xl hover:bg-teal-lagoon transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Book a Session
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-teal-abyss hover:bg-teal-mist transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-teal-abyss/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 pt-24 flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-4 rounded-xl font-body font-medium text-base transition-colors ${
                  pathname === link.href
                    ? "bg-teal-mist text-teal-deep"
                    : "text-teal-abyss hover:bg-teal-mist hover:text-teal-deep"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-teal-mist">
              <Link
                href="/contact"
                className="block text-center px-5 py-3 bg-teal-deep text-white font-medium rounded-xl hover:bg-teal-lagoon transition-colors"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
