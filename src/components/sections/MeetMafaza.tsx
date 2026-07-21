"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface PersonalFacet {
  label: string;
  description: string;
}

interface MeetMafazaProps {
  eyebrow?: string;
  heading: string;
  intro: string;
  facets: PersonalFacet[];
  imageSrc: string;
  imageAlt: string;
}

export function MeetMafaza({
  eyebrow = "Meet Mafaza",
  heading,
  intro,
  facets,
  imageSrc,
  imageAlt,
}: MeetMafazaProps) {
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <Section className="overflow-hidden bg-background py-20 lg:py-32">
      <Container>
        {/* Part 1: The Stage (Centered Intro) */}
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
            className="mb-6 block text-caption uppercase tracking-[0.2em] text-accent"
          >
            {eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.1 }}
            className="mb-8 text-h3 font-display leading-tight text-secondary md:text-h2"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.2 }}
            className="text-body-lg font-light leading-relaxed text-secondary/80"
          >
            {intro}
          </motion.p>
        </div>

        {/* Part 2: The Centerpiece (Text hugging the image) */}
        {/* Mobile: Stacks Image -> Left Facets -> Right Facets */}
        {/* Desktop: 3 Columns (Left Text, Center Image, Right Text) */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Left Column Facets (Indices 0 and 1) */}
          <div className="order-2 mt-12 flex flex-col gap-12 sm:grid sm:grid-cols-2 lg:order-1 lg:col-span-3 lg:mt-0 lg:flex lg:text-right">
            {facets.slice(0, 2).map((facet, index) => (
              <motion.div
                key={facet.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...transition, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <h3 className="mb-3 text-body font-display text-secondary">{facet.label}</h3>
                <p className="text-body leading-relaxed text-secondary/80">
                  {facet.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column: The Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.2 }}
            className="order-1 relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-image lg:order-2 lg:col-span-6 lg:max-w-none"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right Column Facets (Indices 2 and 3) */}
          <div className="order-3 mt-12 flex flex-col gap-12 sm:grid sm:grid-cols-2 lg:col-span-3 lg:mt-0 lg:flex lg:text-left">
            {facets.slice(2, 4).map((facet, index) => (
              <motion.div
                key={facet.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...transition, delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                <h3 className="mb-3 text-body font-display text-secondary">{facet.label}</h3>
                <p className="text-body leading-relaxed text-secondary/80">
                  {facet.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
