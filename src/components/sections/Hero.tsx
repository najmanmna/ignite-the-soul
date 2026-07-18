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
      {/* Background image with a soft overlay for text readability */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-community.png"
          alt="Women gathered together over coffee and conversation at a women's circle"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        {/* Soft gradient overlay pulling from the Ivory/background token */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
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
            className="mt-6 max-w-lg text-body-lg text-primary/80"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.4 }}
            className="mt-10"
          >
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
