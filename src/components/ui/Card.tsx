import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

// Sage Green background: docs/03-design-system.md Color System lists
// "Cards" explicitly under Secondary's documented purpose.
export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-card bg-card p-8 text-card-foreground", className)}>
      {children}
    </div>
  );
}
