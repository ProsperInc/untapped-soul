import type { Metadata } from "next";
import { Mail, Calendar, MessageSquare, MapPin, Clock } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — Book a Session or Get In Touch",
  description:
    "Book a Soul Discovery Session, send a message, or join the Untapped Soul community. We'd love to hear from you.",
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@untappedsoul.com",
    sub: "We respond within 24–48 hours",
    href: "mailto:hello@untappedsoul.com",
  },
  {
    icon: Calendar,
    title: "Book a Session",
    detail: "Calendly Scheduling",
    sub: "Pick a time that works for you",
    href: "#calendly",
  },
  {
    icon: MessageSquare,
    title: "Social",
    detail: "@untappedsoul",
    sub: "Instagram · Twitter",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-20 bg-teal-mist relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(at 70% 30%, rgba(110,209,180,0.5) 0%, transparent 55%), radial-gradient(at 20% 70%, rgba(34,132,142,0.2) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <span className="pill bg-white/80 text-teal-deep border border-teal-seafoam mb-6">
              Let&apos;s Connect
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-teal-abyss leading-tight mt-4 mb-6 max-w-3xl">
              This is where the journey{" "}
              <em className="text-teal-deep">begins.</em>
            </h1>
            <p className="font-body text-teal-abyss/65 text-lg leading-relaxed max-w-xl">
              Whether you&apos;re ready to book a session, have a question, or
              just want to say hello — we&apos;re here, and we&apos;re
              listening.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact methods ── */}
      <SectionWrapper background="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <a
                href={method.href}
                className="block p-7 rounded-3xl border border-teal-mist bg-cloud hover:border-teal-seafoam hover:shadow-soft card-lift text-center"
              >
                <div className="w-12 h-12 bg-teal-mist rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <method.icon size={20} className="text-teal-deep" />
                </div>
                <h3 className="font-display text-lg font-semibold text-teal-abyss mb-1">
                  {method.title}
                </h3>
                <p className="font-body text-sm text-teal-deep font-medium mb-1">
                  {method.detail}
                </p>
                <p className="font-body text-xs text-teal-abyss/45">
                  {method.sub}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Two-column layout: form + info */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal>
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-teal-abyss mb-2">
                Send a message
              </h2>
              <p className="font-body text-sm text-teal-abyss/55 mb-8 leading-relaxed">
                Tell us a little about where you are and what you&apos;re
                looking for. We&apos;ll get back to you thoughtfully.
              </p>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-teal-abyss/60 uppercase tracking-wide mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-cloud border border-teal-mist rounded-xl text-sm font-body text-teal-abyss placeholder:text-teal-abyss/30 focus:outline-none focus:border-teal-deep transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-teal-abyss/60 uppercase tracking-wide mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your surname"
                      className="w-full px-4 py-3 bg-cloud border border-teal-mist rounded-xl text-sm font-body text-teal-abyss placeholder:text-teal-abyss/30 focus:outline-none focus:border-teal-deep transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-teal-abyss/60 uppercase tracking-wide mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-cloud border border-teal-mist rounded-xl text-sm font-body text-teal-abyss placeholder:text-teal-abyss/30 focus:outline-none focus:border-teal-deep transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-teal-abyss/60 uppercase tracking-wide mb-2 block">
                    What brings you here?
                  </label>
                  <select className="w-full px-4 py-3 bg-cloud border border-teal-mist rounded-xl text-sm font-body text-teal-abyss/80 focus:outline-none focus:border-teal-deep transition-colors appearance-none">
                    <option value="">Select an option</option>
                    <option>Soul Discovery Session (1:1)</option>
                    <option>Transformation Program</option>
                    <option>Bootcamp</option>
                    <option>Workshop / Group</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-teal-abyss/60 uppercase tracking-wide mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Share a little about where you are right now — what are you navigating? What are you hoping to find?"
                    className="w-full px-4 py-3 bg-cloud border border-teal-mist rounded-xl text-sm font-body text-teal-abyss placeholder:text-teal-abyss/30 focus:outline-none focus:border-teal-deep transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-teal-deep text-white font-body font-medium text-sm rounded-xl hover:bg-teal-lagoon hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                >
                  Send Message
                </button>

                <p className="text-xs font-body text-teal-abyss/35 text-center">
                  Your message is confidential. We reply within 24–48 hours.
                </p>
              </form>
            </div>
          </ScrollReveal>

          {/* Info + Calendly */}
          <div className="flex flex-col gap-6">
            {/* Calendly Placeholder */}
            <ScrollReveal delay={150}>
              <div
                id="calendly"
                className="rounded-3xl border-2 border-dashed border-teal-seafoam bg-teal-mist/40 p-10 flex flex-col items-center justify-center text-center min-h-64"
              >
                <Calendar
                  size={32}
                  className="text-teal-deep mb-4 opacity-70"
                />
                <h3 className="font-display text-xl font-semibold text-teal-abyss mb-2">
                  Book a Session
                </h3>
                <p className="font-body text-sm text-teal-abyss/55 mb-5 max-w-xs leading-relaxed">
                  Your Calendly widget will appear here. Embed your scheduling
                  link below to allow direct booking.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-teal-deep text-white text-sm font-body font-medium rounded-xl hover:bg-teal-lagoon transition-colors"
                >
                  Connect Calendly →
                </a>
                <p className="text-[11px] font-body text-teal-abyss/35 mt-3">
                  Replace this with your Calendly embed code
                </p>
              </div>
            </ScrollReveal>

            {/* Session info */}
            <ScrollReveal delay={220}>
              <div className="rounded-3xl bg-cloud border border-teal-mist p-7">
                <h3 className="font-display text-lg font-semibold text-teal-abyss mb-5">
                  What happens next?
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: Clock,
                      step: "We review your message",
                      detail: "Usually within 24 hours",
                    },
                    {
                      icon: Calendar,
                      step: "We schedule a time",
                      detail: "At a pace that works for you",
                    },
                    {
                      icon: MessageSquare,
                      step: "We begin the conversation",
                      detail: "Your journey starts here",
                    },
                  ].map(({ icon: Icon, step, detail }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-teal-mist rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-teal-deep" />
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-teal-abyss">
                          {step}
                        </p>
                        <p className="font-body text-xs text-teal-abyss/45">
                          {detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Email signup */}
            <ScrollReveal delay={280}>
              <div className="rounded-3xl bg-teal-abyss p-7 text-white">
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  Not ready to reach out yet?
                </h3>
                <p className="font-body text-sm text-white/55 leading-relaxed mb-5">
                  Join our community list for weekly reflections, resources, and
                  updates. No pressure — just presence.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2.5 bg-white/10 border border-white/15 rounded-xl text-sm font-body text-white placeholder:text-white/25 focus:outline-none focus:border-teal-mint transition-colors"
                  />
                  <button className="px-4 py-2.5 bg-teal-mint text-teal-abyss font-body font-medium text-sm rounded-xl hover:bg-teal-seafoam transition-colors whitespace-nowrap">
                    Join
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
