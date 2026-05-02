import type { Metadata } from "next";
import { Heart, BookOpen, Sprout, Shield, Lightbulb } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Our Mission & Beliefs",
  description:
    "Learn about the mission and beliefs behind Untapped Soul — a faith-centered platform helping young people discover who they truly are.",
};

const beliefs = [
  {
    icon: Lightbulb,
    title: "Self-Awareness Is the Foundation",
    description:
      "You cannot build a meaningful life without first knowing yourself. Self-awareness is not a luxury — it is the starting point of every true transformation. We help people develop the courage to look inward honestly, compassionately, and consistently.",
  },
  {
    icon: Heart,
    title: "Spiritual Grounding Changes Everything",
    description:
      "We believe that identity rooted in God is unshakeable. When you understand who you are in the light of your Creator, you gain access to a peace, purpose, and confidence that no external circumstance can take away.",
  },
  {
    icon: Sprout,
    title: "Healing Is Not Optional",
    description:
      "Unexamined wounds shape unintentional behaviour. We believe healing is a sacred process — messy, non-linear, and absolutely necessary. You don't have to carry what has been holding you down.",
  },
  {
    icon: BookOpen,
    title: "Growth Is a Daily Practice",
    description:
      "Transformation doesn't happen in a single session. It is built through consistent reflection, honest conversation, and daily choices that align with your values. We walk alongside you in that practice.",
  },
  {
    icon: Shield,
    title: "Truth Leads to Freedom",
    description:
      "We are committed to honesty over comfort. Truth — even when it's hard — is the only path to genuine freedom. Our environment is one where you are safe to be real, to be imperfect, and to grow.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="pt-36 pb-20 bg-teal-mist relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(at 80% 20%, rgba(110,209,180,0.4) 0%, transparent 55%), radial-gradient(at 20% 80%, rgba(34,132,142,0.2) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <span className="pill bg-white text-teal-deep border border-teal-seafoam mb-6">
              Who We Are
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-teal-abyss leading-tight mt-4 mb-6 max-w-3xl">
              A space built for the{" "}
              <em className="text-teal-deep">seekers.</em>
            </h1>
            <p className="font-body text-teal-abyss/65 text-lg leading-relaxed max-w-2xl">
              Untapped Soul was born from a simple but profound conviction: that
              every person carries an extraordinary depth within them — and that
              most people go their entire lives without ever accessing it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mission ── */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="pill bg-teal-mist text-teal-deep mb-4">
              Our Mission
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-teal-abyss leading-tight mt-4 mb-6">
              To guide individuals from inner confusion to conscious, purposeful
              living.
            </h2>
            <p className="font-body text-teal-abyss/65 text-base leading-relaxed mb-5">
              We exist to create a space where young people can stop performing
              and start discovering. Where they can lay down the masks, untangle
              the noise, and step into the truth of who God created them to be.
            </p>
            <p className="font-body text-teal-abyss/65 text-base leading-relaxed mb-8">
              We do this through deeply personal coaching, intentional programs,
              and a community grounded in faith, self-inquiry, and radical
              honesty.
            </p>
            <CTAButton href="/work-with-me" size="md" arrow>
              Work With Us
            </CTAButton>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative">
              <div className="rounded-3xl bg-teal-mist p-10 lg:p-12 border border-teal-seafoam">
                <blockquote className="font-display text-xl lg:text-2xl text-teal-abyss font-medium leading-snug mb-6">
                  &quot;The deepest form of prayer is learning to listen to who
                  God says you are — and choosing to believe it.&quot;
                </blockquote>
                <div className="accent-divider mb-4" />
                <p className="font-body text-sm text-teal-abyss/50 uppercase tracking-widest">
                  Untapped Soul
                </p>
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-teal-seafoam/30 -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* ── Beliefs ── */}
      <SectionWrapper background="cloud">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="pill bg-teal-mist text-teal-deep mb-4">
              What We Believe
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-teal-abyss mt-4 leading-tight">
              The convictions that shape everything we do
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.slice(0, 3).map((belief, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-white rounded-3xl p-8 card-lift border border-teal-mist hover:border-teal-seafoam h-full">
                <div className="w-11 h-11 bg-teal-mist rounded-2xl flex items-center justify-center mb-5">
                  <belief.icon size={20} className="text-teal-deep" />
                </div>
                <h3 className="font-display text-xl font-semibold text-teal-abyss mb-3 leading-snug">
                  {belief.title}
                </h3>
                <p className="font-body text-sm text-teal-abyss/60 leading-relaxed">
                  {belief.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {beliefs.slice(3).map((belief, i) => (
            <ScrollReveal key={i} delay={(i + 3) * 100}>
              <div className="bg-white rounded-3xl p-8 card-lift border border-teal-mist hover:border-teal-seafoam h-full">
                <div className="w-11 h-11 bg-teal-mist rounded-2xl flex items-center justify-center mb-5">
                  <belief.icon size={20} className="text-teal-deep" />
                </div>
                <h3 className="font-display text-xl font-semibold text-teal-abyss mb-3 leading-snug">
                  {belief.title}
                </h3>
                <p className="font-body text-sm text-teal-abyss/60 leading-relaxed">
                  {belief.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ── CTA ── */}
      <SectionWrapper background="mist">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-teal-abyss leading-tight mb-6">
              Ready to begin your discovery?
            </h2>
            <p className="font-body text-teal-abyss/60 text-base leading-relaxed mb-8">
              Whatever stage you&apos;re at — even if you can&apos;t name
              exactly what you&apos;re looking for — there is a path forward.
              Let&apos;s walk it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/work-with-me" size="lg" arrow>
                Explore Services
              </CTAButton>
              <CTAButton href="/contact" variant="outline" size="lg">
                Get In Touch
              </CTAButton>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
