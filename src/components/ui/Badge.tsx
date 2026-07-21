import { cn } from "@/utils/cn";

type BadgeVariant = "open" | "upcoming" | "coming-soon";

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

// Status labels stay neutral/informational (docs/02 Brand Don'ts: "Never use
// urgency marketing") — no color implies scarcity or a countdown.
const variantStyles: Record<BadgeVariant, string> = {
  open: "border-accent/40 text-accent",
  upcoming: "border-secondary/30 text-secondary",
  "coming-soon": "border-muted-foreground/30 text-muted-foreground",
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-caption uppercase tracking-[0.15em]",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
