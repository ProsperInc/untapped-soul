import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import InsightCard from "@/components/InsightCard";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Insights — Reflections on Faith, Self & Growth",
  description:
    "Explore articles, reflections, and perspectives on self-awareness, faith, emotional healing, and purposeful living from Untapped Soul.",
};

const insights = [
  {
    title: "Why Self-Awareness Is the First Act of Faith",
    excerpt:
      "Most of us are taught to look outward for answers — to scripture, to mentors, to God. But what if true faith also requires looking inward? What if knowing yourself is part of knowing the One who made you?",
    category: "Faith & Identity",
    readTime: "6 min read",
    date: "May 2025",
    slug: "self-awareness-first-act-of-faith",
    featured: true,
  },
  {
    title: "The Difference Between Healing and Coping",
    excerpt:
      "Coping keeps you functioning. Healing sets you free. Understanding this distinction could change everything about how you approach your pain.",
    category: "Healing",
    readTime: "5 min read",
    date: "Apr 2025",
    slug: "healing-vs-coping",
  },
  {
    title: "What Your Emotional Triggers Are Actually Telling You",
    excerpt:
      "Emotional triggers are not the enemy — they are invitations. Learn to read them as internal messages pointing to what still needs your attention.",
    category: "Emotional Intelligence",
    readTime: "7 min read",
    date: "Apr 2025",
    slug: "emotional-triggers-insight",
  },
  {
    title: "3 Questions That Will Help You Clarify Your Purpose",
    excerpt:
      "Purpose isn't found through a lightning bolt moment. It's often uncovered through patient, honest reflection — starting with these three questions.",
    category: "Purpose",
    readTime: "4 min read",
    date: "Mar 2025",
    slug: "three-questions-for-purpose",
  },
  {
    title: "Identity Crisis Is Not a Breakdown — It's a Breakthrough",
    excerpt:
      "What feels like the ground disappearing beneath you could be the beginning of the most important construction project of your life. Here's why identity crisis can be a gift.",
    category: "Identity",
    readTime: "8 min read",
    date: "Mar 2025",
    slug: "identity-crisis-breakthrough",
  },
  {
    title: "When God Feels Silent: Navigating Spiritual Dry Seasons",
    excerpt:
      "The silence of God is one of the most disorienting experiences a person of faith can have. But silence is not absence. Here's how to navigate it.",
    category: "Faith & Spirituality",
    readTime: "6 min read",
    date: "Feb 2025",
    slug: "navigating-spiritual-dry-seasons",
  },
];

const categories = [
  "All",
  "Faith & Identity",
  "Healing",
  "Emotional Intelligence",
  "Purpose",
  "Identity",
  "Faith & Spirituality",
];

export default function InsightsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-20 mesh-bg relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <span className="pill bg-white/70 text-teal-deep border border-teal-seafoam mb-6">
              Insights
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-teal-abyss leading-tight mt-4 mb-6 max-w-3xl">
              Words for the{" "}
              <em className="text-teal-deep">inner journey.</em>
            </h1>
            <p className="font-body text-teal-abyss/65 text-lg leading-relaxed max-w-xl">
              Reflections on faith, self-awareness, emotional healing, and
              living with purpose. Written for seekers at every stage of the
              journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Categories filter ── */}
      <div className="border-b border-teal-mist bg-white sticky top-[72px] z-30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-body font-medium transition-colors ${
                  cat === "All"
                    ? "bg-teal-deep text-white"
                    : "bg-teal-mist text-teal-abyss/60 hover:text-teal-deep hover:bg-teal-seafoam/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cards ── */}
      <SectionWrapper background="cloud">
        {/* Featured post */}
        <ScrollReveal>
          <div className="mb-8">
            <InsightCard {...insights[0]} featured />
          </div>
        </ScrollReveal>

        {/* Regular grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.slice(1).map((post, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <InsightCard {...post} />
            </ScrollReveal>
          ))}
        </div>

        {/* Load more placeholder */}
        <ScrollReveal delay={300}>
          <div className="mt-14 text-center">
            <p className="font-body text-sm text-teal-abyss/40 mb-4">
              More reflections coming soon
            </p>
            <button className="px-6 py-3 border border-teal-mist rounded-xl font-body text-sm text-teal-abyss/50 hover:border-teal-seafoam hover:text-teal-deep transition-colors cursor-default">
              Load More Insights
            </button>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* ── Newsletter CTA ── */}
      <SectionWrapper background="abyss">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="pill bg-teal-mint/20 text-teal-mint mb-6">
              Stay Connected
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white leading-tight mt-4 mb-5">
              Get new insights delivered to your inbox.
            </h2>
            <p className="font-body text-white/55 text-base leading-relaxed mb-8">
              No noise. No spam. Just honest, thoughtful reflections on
              faith, self, and purposeful living — when they&apos;re ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/30 text-sm font-body focus:outline-none focus:border-teal-mint transition-colors"
              />
              <button className="px-6 py-3 bg-teal-mint text-teal-abyss font-body font-medium text-sm rounded-xl hover:bg-teal-seafoam transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="font-body text-xs text-white/30 mt-4">
              Unsubscribe at any time. Your data is safe with us.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
