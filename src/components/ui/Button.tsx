import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "text" | "inverse";
type ButtonSize = "default" | "large";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-button font-sans font-medium transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

// Primary/secondary/inverse keep a 44px+ touch target (docs/03-design-system.md
// Accessibility: "Touch targets Minimum 44px"). Text is an inline-link style
// used within copy, which WCAG exempts from the minimum target size, so it
// doesn't participate in `size` at all (see variantStyles.text below).
const sizeStyles: Record<ButtonSize, string> = {
  default: "min-h-11 px-6 py-3 text-body",
  large: "min-h-12 px-10 py-4 text-body-lg",
};

// "primary"/"inverse" intentionally reference the Primary token (Sage Green,
// brand chrome). "secondary"/"text" reference the Secondary token (Deep Teal)
// instead of Primary — those are outline/inline styles meant to sit directly
// on light backgrounds, and Sage Green doesn't have enough contrast there;
// Teal (Secondary, post color-swap) does.
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary:
    "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground",
  text: "py-1 text-body text-secondary underline-offset-4 hover:underline",
  // Solid fill for use on Primary-colored (Deep Sage) backgrounds, e.g. the
  // CTA section — colors inverted relative to `primary` (Ivory bg, sage text).
  inverse: "bg-primary-foreground text-primary hover:bg-muted",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variant !== "text" && sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
