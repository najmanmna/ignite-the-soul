"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface MissionProps {
  eyebrow?: string;
  heading: string;
  body: string;
}

// Sand background: docs/03-design-system.md Color System lists "Section
// backgrounds, Soft contrast" as Neutral's documented purpose.
export function Mission({ eyebrow, heading, body }: MissionProps) {
  // The global "breathing" easing curve
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <Section size="large" className="bg-muted">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transition}
              className="mb-8 block text-caption uppercase tracking-[0.2em] text-accent"
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.1 }}
            className="mb-8 text-h3 font-display text-primary md:text-h2 lg:text-h1"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.2 }}
            className="max-w-3xl text-body font-sans font-light text-primary/80 md:text-body-lg"
          >
            {body}
          </motion.p>
        </div>
      </Container>
    </Section>
  );
}
