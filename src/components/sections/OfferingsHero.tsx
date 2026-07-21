"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface OfferingsHeroProps {
  eyebrow?: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function OfferingsHero({
  eyebrow,
  heading,
  description,
  ctaLabel,
  ctaHref,
}: OfferingsHeroProps) {
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    // Added explicit pt-24/pt-32 to push the content down out from under the sticky navbar
    // Added a minimum height so it commands the screen before the user scrolls
    <Section className="flex min-h-[70vh] flex-col justify-center bg-background pb-16 pt-24 lg:pb-24 lg:pt-32">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              // Increased bottom margin from 6 to 8 for breathing room
              className="mb-8 block text-caption uppercase tracking-[0.2em] text-accent"
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            // Smoothed the responsive scale: h2 -> h1 -> hero
            className="text-h2 font-display font-medium leading-tight text-secondary md:text-h1 lg:text-hero"
          >
            {heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            // Increased top margin from 6 to 8
            className="mt-8 max-w-xl text-body-lg font-light leading-relaxed text-secondary/80"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.4 }}
            // Increased top margin from 10 to 12 to separate the CTA from the reading experience
            className="mt-12"
          >
            <Button 
              href={ctaHref} 
              variant="primary"
              // Injected the 500ms slow hover transition we use globally
              className="px-8 py-4 transition-all duration-500"
            >
              {ctaLabel}
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}