import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Flame,
  Leaf,
  CheckCircle2,
  Quote,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Untapped Soul — From Confusion to Clarity",
  description:
    "You feel like there's more to who you are—but you don't know how to access it. Untapped Soul helps you move from confusion to self-awareness, healing, and purposeful living.",
};

const problems = [
  {
    icon: "💭",
    text: "You wake up feeling like something is missing, but can't name what it is.",
  },
  {
    icon: "🌀",
    text: "Your emotions overwhelm you or you feel completely disconnected from them.",
  },
  {
    icon: "🔍",
    text: "You don't know who you truly are beneath the roles and expectations.",
  },
  {
    icon: "🧭",
    text: "You sense a calling but feel paralysed, confused about which direction to take.",
  },
];

const truths = [
  "You are not broken — you are becoming.",
  "God created you with a purpose that is specific, deep, and irreplaceable.",
  "Your confusion is not a dead end; it is an invitation to go deeper.",
  "Healing, clarity, and direction are available to you — right now.",
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with honest self-inquiry. You'll map your inner landscape — your emotions, patterns, beliefs, and desires.",
  },
  {
    number: "02",
    title: "Heal",
    description:
      "We gently confront the wounds and narratives that have kept you stuck, creating space for real transformation.",
  },
  {
    number: "03",
    title: "Align",
    description:
      "We anchor your life to your values and faith — building a grounded identity that moves with purpose and confidence.",
  },
  {
    number: "04",
    title: "Live",
    description:
      "You step into your untapped potential — with tools, clarity, and the inner strength to sustain it.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden mesh-bg grain">
        {/* Decorative orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-30 animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(110,209,180,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/6 w-64 h-64 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(34,132,142,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="pill bg-white/70 text-teal-deep border border-teal-seafoam mb-8 inline-flex animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-mint" />
              Faith · Healing · Purpose
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-teal-abyss leading-[1.1] tracking-tight mb-6 animate-fade-up">
              You feel like there&apos;s{" "}
              <em className="italic text-teal-deep not-italic">more</em> to who
              you are—
              <br className="hidden sm:block" />
              but you don&apos;t know how{" "}
              <span className="relative inline-block">
                to access it.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 6 Q100 0 200 6"
                    stroke="#6ED1B4"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="font-body text-lg text-teal-abyss/65 leading-relaxed mb-10 max-w-xl animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              Untapped Soul is a faith-centered space for young people ready to
              move from confusion, emotional pain, and identity crisis — toward
              deep self-awareness, healing, and a life of genuine purpose.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              <CTAButton href="/work-with-me" size="lg" arrow>
                Start Your Self-Awareness Journey
              </CTAButton>
              <CTAButton href="/about" variant="outline" size="lg">
                Learn More
              </CTAButton>
            </div>

            {/* Social proof */}
            <div
              className="mt-12 flex items-center gap-6 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <div className="flex -space-x-2">
                {[
                  "bg-teal-deep",
                  "bg-teal-lagoon",
                  "bg-teal-mint",
                  "bg-teal-seafoam",
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center`}
                  >
                    <span className="text-white text-[10px] font-bold">
                      {["AK", "MJ", "TP", "SN"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-body text-teal-abyss/55">
                Joined by{" "}
                <strong className="text-teal-abyss font-semibold">
                  200+ seekers
                </strong>{" "}
                on their journey
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-50">
          <div className="w-px h-10 bg-gradient-to-b from-teal-deep to-transparent" />
          <p className="text-[10px] font-body tracking-widest uppercase text-teal-deep">
            Scroll
          </p>
        </div>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <SectionWrapper background="white">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="pill bg-teal-mist text-teal-deep mb-4">
              Does this sound like you?
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-teal-abyss mt-4 leading-tight">
              You&apos;re not lost. You&apos;re just navigating without a map.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-teal-mist/50 border border-teal-mist hover:border-teal-seafoam card-lift">
                <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                <p className="font-body text-teal-abyss/75 text-sm leading-relaxed">
                  {p.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <p className="font-display text-xl text-teal-abyss italic">
              &quot;What if this confusion was never the problem — but the
              beginning of your becoming?&quot;
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* ── TRUTH SECTION ── */}
      <SectionWrapper background="abyss">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="pill bg-teal-mint/20 text-teal-mint mb-6">
              The Truth
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight mt-4 mb-6">
              There is a version of you{" "}
              <em className="text-teal-mint">waiting to be found.</em>
            </h2>
            <p className="font-body text-white/60 text-base leading-relaxed mb-8">
              Your potential isn&apos;t locked away because you&apos;re
              deficient. It&apos;s untapped because no one has ever helped you
              look within — with honesty, with grace, and with the light of
              faith.
            </p>
            <CTAButton href="/about" variant="light" size="md" arrow>
              Our Approach
            </CTAButton>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {truths.map((truth, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                  <CheckCircle2
                    size={20}
                    className="text-teal-mint flex-shrink-0 mt-0.5"
                  />
                  <p className="font-body text-white/80 text-sm leading-relaxed">
                    {truth}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── TRANSFORMATION / QUOTE ── */}
      <SectionWrapper background="mist">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <Quote
              size={48}
              className="text-teal-seafoam mx-auto mb-6 opacity-60"
            />
            <blockquote className="font-display text-2xl lg:text-3xl xl:text-4xl text-teal-abyss font-medium leading-snug mb-8">
              &quot;Self-awareness is the beginning of transformation. You
              cannot become who you were created to be while remaining
              unknowing of who you are.&quot;
            </blockquote>
            <div className="accent-divider mx-auto mb-6" />
            <p className="font-body text-teal-abyss/50 text-sm tracking-wide uppercase">
              The Untapped Soul Principle
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Compass,
                label: "Self-Awareness",
                text: "Know yourself with radical honesty and compassion.",
              },
              {
                icon: Flame,
                label: "Spiritual Grounding",
                text: "Anchor your identity in something far greater than yourself.",
              },
              {
                icon: Leaf,
                label: "Purposeful Living",
                text: "Act from a place of conviction, clarity, and aligned values.",
              },
            ].map(({ icon: Icon, label, text }, i) => (
              <div
                key={i}
                className="text-center p-8 bg-white rounded-3xl shadow-soft card-lift"
              >
                <div className="w-12 h-12 bg-teal-mist rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-teal-deep" />
                </div>
                <h3 className="font-display text-lg font-semibold text-teal-abyss mb-2">
                  {label}
                </h3>
                <p className="font-body text-sm text-teal-abyss/55 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* ── HOW IT WORKS ── */}
      <SectionWrapper background="white">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="pill bg-teal-mist text-teal-deep mb-4">
              The Process
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-teal-abyss mt-4 leading-tight">
              How the journey unfolds
            </h2>
            <p className="font-body text-teal-abyss/55 text-base mt-4 leading-relaxed">
              A guided four-stage process designed to bring you from the inside
              out — rooted in faith, psychology, and lived experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-teal-seafoam to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 130}>
                <div className="relative text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-6">
                    <div className="w-full h-full rounded-full bg-teal-mist flex items-center justify-center border-2 border-teal-seafoam">
                      <span className="font-display text-2xl font-bold text-teal-deep">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-teal-abyss mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-teal-abyss/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── CTA SECTION ── */}
      <SectionWrapper background="white">
        <ScrollReveal>
          <div
            className="relative rounded-4xl overflow-hidden p-12 lg:p-20 text-center abyss-mesh grain"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="pill bg-teal-mint/20 text-teal-mint mb-6">
                Ready to begin?
              </span>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight mt-4 mb-6">
                Your untapped potential is not waiting for the right
                moment — it&apos;s waiting for{" "}
                <em className="text-teal-mint">you.</em>
              </h2>
              <p className="font-body text-white/60 text-base leading-relaxed mb-10">
                Take the first step. Book a soul discovery session or explore
                our programs designed to walk with you on this journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/work-with-me" variant="light" size="lg" arrow>
                  Explore How We Work
                </CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg">
                  <span className="text-white border-white">Book a Session</span>
                </CTAButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
