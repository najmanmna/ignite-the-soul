"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Offering } from "@/types/offering";

interface OfferingsPreviewProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  offerings: Offering[];
  ctaLabel: string;
  ctaHref: string;
}

export function OfferingsPreview({
  eyebrow = "Experiences",
  heading,
  description,
  offerings,
  ctaLabel,
  ctaHref,
}: OfferingsPreviewProps) {
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  // Staggered container for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition },
  };

  return (
    <Section className="overflow-hidden bg-muted">
      <Container>
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center md:mb-16">
          <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
        </div>

        {/* 2-col to allow large, editorial imagery per offering */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:gap-x-20"
        >
          {offerings.map((offering) => (
            <motion.li key={offering.name} variants={itemVariants} className="group">
              <Link href={offering.href || "/offerings"} className="block">
                {/* The Visual: large portrait aspect ratio, or an honest placeholder
                    when no real photo exists yet (see PastEvents for the same pattern) */}
                <div className="relative mb-8 aspect-4/5 w-full overflow-hidden rounded-image">
                  {offering.imageUrl ? (
                    <>
                      <Image
                        src={offering.imageUrl}
                        alt={offering.imageAlt || offering.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Subtle overlay that fades in on hover for focus */}
                      <div className="absolute inset-0 bg-primary/0 transition-colors duration-700 group-hover:bg-primary/10" />
                    </>
                  ) : (
                    <div
                      role="img"
                      aria-label={`${offering.name} photography coming soon`}
                      className="flex h-full w-full items-center justify-center bg-secondary/40"
                    >
                      <span className="text-caption uppercase tracking-[0.2em] text-primary/60">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* The Content */}
                <h3 className="mb-3 text-h4 font-display text-primary transition-colors duration-500 group-hover:text-accent md:text-h3">
                  {offering.name}
                </h3>
                <p className="mb-6 line-clamp-2 text-body text-primary/70">
                  {offering.description}
                </p>

                {/* Subtle interaction cue instead of a heavy button */}
                <span className="inline-flex items-center gap-2 text-caption uppercase tracking-[0.2em] text-accent transition-colors duration-500 group-hover:text-primary">
                  Explore{" "}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 group-hover:translate-x-2"
                  >
                    &rarr;
                  </span>
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Button href={ctaHref} variant="secondary">
            {ctaLabel}
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
