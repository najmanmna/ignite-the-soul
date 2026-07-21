"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import type { Experience } from "@/types/experience";

interface ExploreExperiencesProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  experiences: Experience[];
}

const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

// Same structure for every experience — title, short description,
// highlights, Register Interest — alternating image/text sides for
// editorial rhythm rather than four identical cards.
export function ExploreExperiences({
  eyebrow,
  heading,
  description,
  experiences,
}: ExploreExperiencesProps) {
  return (
    <Section size="large" className="overflow-hidden bg-background">
      <Container>
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center md:mb-24">
          <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {experiences.map((experience, index) => (
            <ExperienceBlock
              key={experience.slug}
              experience={experience}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ExperienceBlock({ experience, reversed }: { experience: Experience; reversed: boolean }) {
  return (
    <div
      id={experience.slug}
      className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20"
    >
      <motion.div
        initial={{ opacity: 0, x: reversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={transition}
        className={cn(
          "relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-image lg:col-span-5 lg:mx-0",
          reversed && "lg:order-last"
        )}
      >
        {experience.imageUrl ? (
          <Image
            src={experience.imageUrl}
            alt={experience.imageAlt || experience.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        ) : (
          <div
            role="img"
            aria-label={`${experience.name} photography coming soon`}
            className="flex h-full w-full items-center justify-center bg-secondary/40"
          >
            <span className="text-caption uppercase tracking-[0.2em] text-secondary/60">
              Coming Soon
            </span>
          </div>
        )}
      </motion.div>

      <div className="lg:col-span-7">
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="text-h3 font-display text-secondary md:text-h2"
        >
          {experience.name}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...transition, delay: 0.1 }}
          className="mt-6 max-w-lg text-body-lg font-light leading-relaxed text-secondary/80"
        >
          {experience.description}
        </motion.p>

        {experience.highlights && experience.highlights.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.18 } },
            }}
            className="mt-8"
          >
            {experience.highlightsLabel && (
              <p className="mb-4 text-caption uppercase tracking-[0.15em] text-secondary/60">
                {experience.highlightsLabel}
              </p>
            )}
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {experience.highlights.map((highlight) => (
                <motion.li
                  key={highlight}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition },
                  }}
                  className="flex items-start gap-3"
                >
                  <Check
                    aria-hidden="true"
                    size={16}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="text-body text-secondary/90">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...transition, delay: 0.26 }}
          className="mt-8"
        >
          <Button href={`/contact?offering=${experience.slug}`} variant="secondary">
            Register Interest
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
