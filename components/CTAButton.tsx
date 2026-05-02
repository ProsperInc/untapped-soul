import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
}

const variantStyles = {
  primary:
    "bg-teal-deep text-white hover:bg-teal-lagoon shadow-sm hover:shadow-md hover:-translate-y-0.5",
  outline:
    "border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white hover:-translate-y-0.5",
  ghost:
    "text-teal-deep hover:text-teal-lagoon underline underline-offset-4",
  light:
    "bg-white text-teal-abyss hover:bg-teal-mist shadow-sm hover:shadow-md hover:-translate-y-0.5",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-body font-medium rounded-xl transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
    </Link>
  );
}
