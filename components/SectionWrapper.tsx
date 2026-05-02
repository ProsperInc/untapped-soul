import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "mist" | "abyss" | "cloud";
  narrow?: boolean;
}

const bgMap = {
  white: "bg-white",
  mist: "bg-teal-mist",
  abyss: "abyss-mesh text-white",
  cloud: "bg-cloud",
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  background = "white",
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${bgMap[background]} ${className}`}>
      <div
        className={`mx-auto px-6 lg:px-8 py-20 lg:py-28 ${
          narrow ? "max-w-3xl" : "max-w-6xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
