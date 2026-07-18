"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface CTAProps {
  heading: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
}

// Deep Teal background: docs/03-design-system.md Color System lists
// "Interactive elements" among Primary's documented purpose; used here for
// a bold closing moment that echoes the Navbar/Footer treatment. (Footer,
// which follows immediately, carries its own top border to mark the seam
// between the two Deep Teal sections.)
export function CTA({ heading, description, ctaLabel, ctaHref }: CTAProps) {
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <Section size="large" className="overflow-hidden bg-primary text-primary-foreground">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <h2 className="text-h3 font-display text-primary-foreground md:text-h2 lg:text-h1">
            {heading}
          </h2>

          {description && (
            <p className="mt-8 max-w-2xl text-body-lg font-sans font-light text-primary-foreground/80 md:text-h4">
              {description}
            </p>
          )}

          <div className="mt-12 md:mt-16">
            <Button href={ctaHref} variant="inverse" size="large">
              {ctaLabel}
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
