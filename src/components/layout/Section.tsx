import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionSize = "default" | "large" | "none";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /**
   * "large" reaches the upper end of the documented 96-160px desktop range,
   * for standout sections like the CTA. "none" removes vertical padding
   * entirely, for full-bleed sections (e.g. an edge-to-edge Hero image)
   * that manage their own spacing internally.
   */
  size?: SectionSize;
}

const sizeStyles: Record<SectionSize, string> = {
  default: "py-16 md:py-section-sm",
  large: "py-20 md:py-section-lg",
  none: "",
};

/**
 * Vertical rhythm only — pair with Container for horizontal constraint.
 * Padding is chosen via `size` rather than a className override so it
 * can never collide with another py-* utility passed through className
 * (no tailwind-merge is installed to arbitrate conflicting utilities).
 */
export function Section({ children, className, id, size = "default" }: SectionProps) {
  return (
    <section id={id} className={cn(sizeStyles[size], className)}>
      {children}
    </section>
  );
}
