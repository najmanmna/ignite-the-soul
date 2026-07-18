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

// Coffee Talk is the brand's signature circle, not just another offering —
// this section is deliberately its own editorial moment (full-bleed photo,
// no card, no button) sitting between Meet Mafaza and the Offerings grid,
// so visitors feel invited into the community before browsing services.
// Content is adapted from the brand's own Coffee Talk Instagram carousel,
// condensed to short, emotional copy rather than the carousel's full
// feature list — and none of the carousel's graphics/overlays are reused.
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
    <Section className="bg-background">
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

      {/* Full-bleed, breaking out of Container — the "large immersive
          photograph" the section is built around. */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={transition}
        className="relative mt-12 aspect-video w-full overflow-hidden md:mt-16"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...transition, delay: 0.15 }}
          className="mx-auto mt-12 flex max-w-2xl flex-col items-center text-center md:mt-16"
        >
          {/* Three subtle highlights — plain text, not icon cards, to stay
              understated per the brief. */}
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {highlights.map((highlight, index) => (
              <li key={highlight.label} className="flex items-center gap-6">
                {index > 0 && (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary/30" />
                )}
                <span className="text-caption uppercase tracking-[0.2em] text-accent">
                  {highlight.label}
                </span>
              </li>
            ))}
          </ul>

          {/* Refined text link, not a button — smooth-scrolls to the
              Offerings section (scroll-smooth is set globally on <html>). */}
          <a
            href={ctaHref}
            className="group mt-8 inline-flex items-center gap-2 rounded-button text-body text-primary transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {ctaLabel}
            <span
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
