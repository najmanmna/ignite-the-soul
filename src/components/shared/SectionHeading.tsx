import { cn } from "@/utils/cn";

type HeadingLevel = "h1" | "h2" | "h3";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  /** Semantic heading level; visual size stays consistent regardless (docs/05: "Maintain proper heading hierarchy"). */
  as?: HeadingLevel;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-reading", className)}>
      {eyebrow && (
        <p className="mb-3 text-caption uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <Heading className="text-h2 font-display font-medium text-foreground">{heading}</Heading>
      {description && <p className="mt-4 text-body-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
