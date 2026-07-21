"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Flame, HeartHandshake, ShieldCheck, Sprout, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface WhatIBelieveProps {
  eyebrow?: string;
  mission: string;
  values: string[];
  want: string;
  different: string;
}

// One icon per value, matched by name rather than position — if the values
// passed in ever change order (or drop one), each label keeps its own icon
// instead of silently picking up the wrong one.
const VALUE_ICONS: Record<string, LucideIcon> = {
  Support: HeartHandshake,
  Growth: Sprout,
  Authenticity: BadgeCheck,
  Respect: ShieldCheck,
  Empowerment: Flame,
};

export function WhatIBelieve({
  eyebrow = "What I Believe",
  mission,
  values,
  want,
  different,
}: WhatIBelieveProps) {
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <Section size="large" className="overflow-hidden bg-background">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="mb-12 text-center text-caption uppercase tracking-[0.2em] text-accent md:mb-16"
        >
          {eyebrow}
        </motion.p>

        {/* The mission stands alone as the section's heading — no separate
            "My Mission" tagline above it, one less headline in a page that
            was starting to feel like a stack of labels. */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...transition, delay: 0.1 }}
          className="mx-auto max-w-4xl text-center text-h2 font-display leading-tight text-secondary md:text-h1 lg:text-hero"
        >
          {mission}
        </motion.h2>

        {/* Want & Different keep their exact wording but lose their caption
            labels too — italic vs. plain type is enough to tell them apart. */}
        <div className="mx-auto mb-20 mt-20 grid max-w-5xl grid-cols-1 gap-16 border-t border-accent/20 pt-16 lg:mb-24 lg:mt-24 lg:grid-cols-2 lg:gap-24 lg:pt-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.2 }}
            className="text-h4 font-display italic leading-relaxed text-secondary/90 md:text-h3"
          >
            &ldquo;{want}&rdquo;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.3 }}
            className="text-body-lg font-light leading-relaxed text-secondary/80 lg:mt-2"
          >
            {different}
          </motion.p>
        </div>

        {/* No visible "My Values" label — aria-label keeps it announced for
            screen readers even without a visible heading. Each value gets
            its own icon badge instead of sitting in a dot-separated line. */}
        <motion.ul
          aria-label="Our values"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
          }}
          className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-12"
        >
          {values.map((value) => {
            const Icon = VALUE_ICONS[value];
            return (
              <motion.li
                key={value}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: { opacity: 1, y: 0, transition },
                }}
                className="flex w-28 flex-col items-center gap-4 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 text-accent">
                  {Icon && <Icon aria-hidden="true" size={26} strokeWidth={1.5} />}
                </span>
                <span className="text-body font-display text-secondary md:text-body-lg">
                  {value}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </Section>
  );
}
