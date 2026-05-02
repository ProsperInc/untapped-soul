import Link from "next/link";
import { Instagram, Twitter, Mail, Heart } from "lucide-react";

const footerLinks = {
  Navigate: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work With Me", href: "/work-with-me" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Soul Discovery Sessions", href: "/work-with-me#sessions" },
    { label: "Transformation Programs", href: "/work-with-me#programs" },
    { label: "Bootcamps", href: "/work-with-me#bootcamps" },
    { label: "Workshops", href: "/work-with-me#workshops" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-teal-abyss text-white relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #6ED1B4 0%, transparent 60%),
                            radial-gradient(circle at 80% 20%, #22848E 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-8">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="18" cy="18" r="17" stroke="#6ED1B4" strokeWidth="1.5" />
                  <path d="M18 8C18 8 11 13 11 20C11 24.4 14.1 28 18 28" stroke="#9DE0D0" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M18 8C18 8 25 13 25 20C25 24.4 21.9 28 18 28" stroke="#6ED1B4" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="3" fill="#6ED1B4" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-semibold text-white text-base tracking-tight">Untapped</span>
                <span className="font-display text-teal-mint text-[11px] tracking-[0.18em] uppercase font-medium">Soul</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm font-body leading-relaxed max-w-xs mb-6">
              Helping individuals move from confusion and inner conflict to self-awareness, healing, and purposeful living through faith-based guidance.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-teal-mint hover:border-teal-mint transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-teal-mint hover:border-teal-mint transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="mailto:hello@untappedsoul.com"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-teal-mint hover:border-teal-mint transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-body font-semibold tracking-[0.12em] uppercase text-teal-mint mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/55 hover:text-white text-sm font-body transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Email signup strip */}
        <div className="border border-white/10 rounded-2xl p-6 mb-10 bg-white/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-white font-medium text-base mb-1">
                Join the journey.
              </p>
              <p className="text-white/50 text-sm font-body">
                Insights, reflections & resources — straight to your inbox.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-52 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/30 text-sm font-body focus:outline-none focus:border-teal-mint transition-colors"
              />
              <button className="px-5 py-2.5 bg-teal-mint text-teal-abyss font-medium text-sm rounded-xl hover:bg-teal-seafoam transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-white/35 text-xs font-body">
            © {new Date().getFullYear()} Untapped Soul. All rights reserved.
          </p>
          <p className="text-white/35 text-xs font-body flex items-center gap-1.5">
            Made with <Heart size={11} className="text-teal-mint fill-teal-mint" /> for the seekers
          </p>
        </div>
      </div>
    </footer>
  );
}
