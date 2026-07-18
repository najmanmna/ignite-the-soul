"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function Hero({ heading, description, ctaLabel, ctaHref }: HeroProps) {
  // Our defined global easing curve for that "breathing" feel
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <Section size="none" className="relative flex min-h-[90vh] items-center bg-background">
      {/* Background image with a compound overlay for guaranteed text readability */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-community.png"
          alt="Women gathered together over coffee and conversation at a women's circle"
          fill
          priority
          className="object-cover object-center opacity-85 transition-transform duration-1000 ease-out hover:scale-105"
        />
        {/* Vertical gradient for overall softness */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        {/* Horizontal gradient specifically to protect the text contrast on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent md:w-3/4" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="mt-24 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="text-hero font-display font-medium text-primary"
          >
            {heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            // Box/card styling removed per feedback.
            className="mt-8 max-w-lg text-body-lg text-primary/90 font-light"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.4 }}
            className="mt-12"
          >
            <Button href={ctaHref} variant="primary" size="large">
              {ctaLabel}
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}