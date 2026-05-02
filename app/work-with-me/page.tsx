import type { Metadata } from "next";
import {
  User,
  Calendar,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Work With Me — Sessions, Programs & Workshops",
  description:
    "Explore Soul Discovery Sessions, transformation programs, bootcamps, and workshops designed to help you move from confusion to clarity.",
};

const services = [
  {
    icon: User,
    title: "Soul Discovery Sessions",
    subtitle: "1:1 Coaching",
    description:
      "A private, one-on-one coaching experience designed to go deep. In these sessions, we create a safe space for radical honesty, self-exploration, and guided reflection. You'll leave each session with new clarity, tools, and inner movement.",
    features: [
      "60-minute deep-dive conversation",
      "Personalised reflection exercises",
      "Identity & emotional mapping",
      "Follow-up resources & journaling prompts",
      "Booking via Calendly — flexible scheduling",
    ],
    ctaLabel: "Book a Session",
    ctaHref: "/contact",
    highlighted: false,
  },
  {
    icon: Calendar,
    title: "Transformation Programs",
    subtitle: "4–8 Weeks",
    description:
      "A structured, immersive program for those ready for lasting change. Over 4 to 8 weeks, we work systematically through self-awareness, healing, identity, and purposeful living — with ongoing support throughout.",
    features: [
      "Weekly 1:1 coaching sessions",
      "Structured curriculum & workbooks",
      "Emotional healing framework",
      "Purpose & values clarification",
      "WhatsApp check-ins between sessions",
      "Community & accountability",
    ],
    ctaLabel: "Apply Now",
    ctaHref: "/contact",
    highlighted: true,
  },
  {
    icon: Zap,
    title: "Bootcamps",
    subtitle: "Intensive Format",
    description:
      "A concentrated, high-impact experience for those who want transformation in a short window. Bootcamps run over a weekend or a focused multi-day format — ideal when you need momentum fast.",
    features: [
      "Weekend or multi-day intensive",
      "Small group or solo format",
      "Deep-dive identity sessions",
      "Structured daily rhythm",
      "Breakthrough-focused design",
    ],
    ctaLabel: "Register Interest",
    ctaHref: "/contact",
    highlighted: false,
  },
  {
    icon: Users,
    title: "Workshops",
    subtitle: "Group Experience",
    description:
      "Facilitated group workshops that blend teaching, discussion, and self-inquiry. Perfect for communities, churches, campuses, or organisations looking to invest in the inner development of their people.",
    features: [
      "90-minute to full-day formats",
      "Custom content for your audience",
      "Interactive & reflection-based",
      "Available in-person or virtual",
      "Certificate of attendance",
    ],
    ctaLabel: "Enquire for Groups",
    ctaHref: "/contact",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Is this coaching or therapy?",
    a: "Untapped Soul sessions are coaching and personal development — not clinical therapy. We work with healthy individuals who want to grow, gain clarity, and build self-awareness. If you are experiencing a mental health crisis, we encourage you to seek professional therapeutic support.",
  },
  {
    q: "Is this faith-based? Do I need to share your beliefs?",
    a: "Our foundation is God-centered. Sessions are shaped by a belief in the inherent worth and purpose of every person as created by God. You are welcome wherever you are in your faith journey — curiosity is enough.",
  },
  {
    q: "How do I know which offering is right for me?",
    a: "Start with a Soul Discovery Session. It's the best way for us to understand where you are and recommend the most aligned path forward. You can book directly through our contact page.",
  },
  {
    q: "What if I can't afford the programs right now?",
    a: "We believe access to growth should not be gated solely by finances. Reach out to us directly — we are open to conversations about payment plans and scholarship spots where available.",
  },
];

export default function WorkWithMePage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="pt-36 pb-20 bg-teal-abyss relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(at 70% 30%, rgba(34,132,142,0.5) 0%, transparent 55%), radial-gradient(at 20% 70%, rgba(110,209,180,0.2) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <span className="pill bg-teal-mint/20 text-teal-mint mb-6">
              Work With Me
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mt-4 mb-6 max-w-3xl">
              Real change. Done with{" "}
              <em className="text-teal-mint">intention.</em>
            </h1>
            <p className="font-body text-white/60 text-lg leading-relaxed max-w-xl">
              Whether you need a single session to gain clarity or a full
              program to rebuild from the inside out — there is a path here
              designed for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <SectionWrapper background="cloud" id="sessions">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="pill bg-teal-mist text-teal-deep mb-4">
              How We Work Together
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-teal-abyss mt-4 leading-tight">
              Choose the path that fits your season
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="programs">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ── What to expect ── */}
      <SectionWrapper background="mist">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="pill bg-white text-teal-deep border border-teal-seafoam mb-4">
              What to Expect
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-teal-abyss leading-tight mt-4 mb-6">
              You will be held, challenged, and moved.
            </h2>
            <p className="font-body text-teal-abyss/65 text-base leading-relaxed mb-6">
              Our work together is not performative. It is not a quick fix or a
              motivational boost. It is a genuine process of looking inward with
              honesty and courage — and emerging more whole.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "A safe, confidential, and non-judgmental space",
                "Coaches who have walked through their own journey",
                "Faith-centered but universally human approach",
                "Practical tools you can use beyond sessions",
                "Respect for your pace and process",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-teal-deep flex-shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-teal-abyss/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-white rounded-3xl p-8 shadow-card border border-teal-mist">
              <h3 className="font-display text-xl font-semibold text-teal-abyss mb-6">
                Not sure where to start?
              </h3>
              <p className="font-body text-sm text-teal-abyss/60 leading-relaxed mb-6">
                A Soul Discovery Session is always the best first step. It is a
                no-pressure space to talk, explore, and figure out what you
                need. There is no commitment required beyond the session itself.
              </p>
              <CTAButton href="/contact" size="md" arrow className="w-full justify-center">
                Book a Discovery Session
              </CTAButton>
              <p className="text-center text-xs font-body text-teal-abyss/40 mt-4">
                Flexible scheduling · Secure booking
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* ── FAQ ── */}
      <SectionWrapper background="white">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="pill bg-teal-mist text-teal-deep mb-4">FAQ</span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-teal-abyss mt-4 leading-tight">
              Questions you might have
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="p-6 rounded-2xl border border-teal-mist bg-cloud hover:border-teal-seafoam transition-colors">
                <h4 className="font-display text-base font-semibold text-teal-abyss mb-3">
                  {faq.q}
                </h4>
                <p className="font-body text-sm text-teal-abyss/60 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <p className="font-body text-sm text-teal-abyss/50 mb-4">
              Have another question?
            </p>
            <CTAButton href="/contact" variant="outline" size="md">
              Reach Out Directly
            </CTAButton>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
