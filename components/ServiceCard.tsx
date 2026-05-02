import CTAButton from "./CTAButton";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-8 card-lift transition-all ${
        highlighted
          ? "bg-teal-abyss text-white shadow-card"
          : "bg-white border border-teal-mist hover:border-teal-seafoam"
      }`}
    >
      {highlighted && (
        <div className="absolute top-6 right-6">
          <span className="pill bg-teal-mint/20 text-teal-mint text-[10px]">
            Most Popular
          </span>
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
          highlighted ? "bg-teal-mint/20" : "bg-teal-mist"
        }`}
      >
        <Icon
          size={22}
          className={highlighted ? "text-teal-mint" : "text-teal-deep"}
        />
      </div>

      {/* Subtitle pill */}
      <span
        className={`text-xs font-body font-medium tracking-widest uppercase mb-3 block ${
          highlighted ? "text-teal-mint" : "text-teal-deep"
        }`}
      >
        {subtitle}
      </span>

      <h3
        className={`font-display text-2xl font-semibold mb-3 ${
          highlighted ? "text-white" : "text-teal-abyss"
        }`}
      >
        {title}
      </h3>

      <p
        className={`font-body text-sm leading-relaxed mb-6 ${
          highlighted ? "text-white/65" : "text-teal-abyss/60"
        }`}
      >
        {description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2.5 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span
              className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                highlighted ? "bg-teal-mint" : "bg-teal-deep"
              }`}
            />
            <span
              className={`text-sm font-body ${
                highlighted ? "text-white/70" : "text-teal-abyss/65"
              }`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      <CTAButton
        href={ctaHref}
        variant={highlighted ? "light" : "primary"}
        size="md"
        arrow
        className="w-full justify-center"
      >
        {ctaLabel}
      </CTAButton>
    </div>
  );
}
