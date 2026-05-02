import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

interface InsightCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
  featured?: boolean;
}

export default function InsightCard({
  title,
  excerpt,
  category,
  readTime,
  date,
  slug,
  featured = false,
}: InsightCardProps) {
  return (
    <Link
      href={`/insights/${slug}`}
      className={`group block card-lift bg-white rounded-3xl overflow-hidden border border-teal-mist hover:border-teal-seafoam transition-all ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Color bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-teal-deep to-teal-mint" />

      <div className="p-7 lg:p-8">
        {/* Category pill */}
        <div className="pill bg-teal-mist text-teal-deep mb-4 w-fit">
          {category}
        </div>

        <h3
          className={`font-display font-semibold text-teal-abyss leading-tight mb-3 group-hover:text-teal-deep transition-colors ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {title}
        </h3>

        <p className="font-body text-sm text-teal-abyss/60 leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-body text-teal-abyss/40">
            <span>{date}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {readTime}
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-teal-mist flex items-center justify-center group-hover:bg-teal-deep transition-colors">
            <ArrowUpRight
              size={14}
              className="text-teal-deep group-hover:text-white transition-colors"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
