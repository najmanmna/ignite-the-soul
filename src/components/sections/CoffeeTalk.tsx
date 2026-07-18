"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface CoffeeTalkHighlight {
  label: string;
}

interface CoffeeTalkProps {
  eyebrow?: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  highlights: CoffeeTalkHighlight[];
  ctaLabel: string;
  ctaHref: string;
}

const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

export function CoffeeTalk({
  eyebrow = "A Signature Experience",
  heading,
  body,
  imageSrc,
  imageAlt,
  highlights,
  ctaLabel,
  ctaHref,
}: CoffeeTalkProps) {
  return (
    // size="large" ensures massive vertical padding separates this from adjacent sections
    <Section size="large" className="bg-background overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <SectionHeading eyebrow={eyebrow} heading={heading} description={body} />
        </motion.div>
      </Container>

      {/* 
        The Immersive Photograph:
        Replaced aspect-video with vh units so it acts like a massive editorial window.
      */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative mt-16 w-full h-[50vh] md:h-[60vh] lg:h-[75vh] overflow-hidden lg:mt-24"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          // Slow, subtle hover zoom for continuous, breathing motion
          className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
          sizes="100vw"
        />
      </motion.div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...transition, delay: 0.15 }}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center text-center lg:mt-20"
        >
          {/* Subtle highlights — stacked on mobile rather than wrapped, so a
              divider dot never gets orphaned at the start of a wrapped line. */}
          <ul className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-4">
            {highlights.map((highlight, index) => (
              <li key={highlight.label} className="flex items-center gap-6">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-1 w-1 rounded-full bg-accent/40 sm:block"
                  />
                )}
                <span className="text-caption uppercase tracking-[0.2em] text-primary/90">
                  {highlight.label}
                </span>
              </li>
            ))}
          </ul>

          {/* Upgraded to the project's standard tracking link style */}
          <a
            href={ctaHref}
            className="group mt-12 inline-flex items-center gap-2 rounded-button text-body uppercase tracking-wider text-accent transition-colors duration-500 hover:text-primary focus-visible:outline-none"
          >
            {ctaLabel}
            <span
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:translate-x-2"
            >
              &rarr;
            </span>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}