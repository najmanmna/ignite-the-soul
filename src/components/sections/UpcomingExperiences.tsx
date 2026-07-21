"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Experience } from "@/types/experience";
import type { UpcomingEvent, UpcomingEventStatus } from "@/types/upcomingEvent";

interface UpcomingExperiencesProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  events: UpcomingEvent[];
  experiences: Experience[];
}

const DEFAULT_STATUS_LABEL: Record<UpcomingEventStatus, string> = {
  "now-open": "Now Open",
  "coming-soon": "Coming Soon",
  upcoming: "Upcoming",
};

const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

export function UpcomingExperiences({
  id,
  eyebrow,
  heading,
  description,
  events,
  experiences,
}: UpcomingExperiencesProps) {
  const experienceNameBySlug = new Map(
    experiences.map((experience) => [experience.slug, experience.name])
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition },
  };

  return (
    // Sand background — docs/03-design-system.md's documented "section
    // backgrounds, soft contrast" role for this token. Separates this
    // section from the Ivory Hero above and Explore Our Experiences below,
    // which would otherwise run together as three identical backgrounds.
    <Section id={id} size="large" className="bg-muted">
      <Container>
        <div className="mx-auto mb-20 flex max-w-2xl flex-col items-center text-center md:mb-32">
          <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
        </div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto flex max-w-5xl flex-col"
        >
          {events.map((event, index) => {
            const typeLabel = experienceNameBySlug.get(event.experienceSlug);
            const statusLabel = event.statusLabel ?? DEFAULT_STATUS_LABEL[event.status];
            const destinationHref = event.learnMoreHref || event.ctaHref;

            return (
              <motion.li
                key={event.slug}
                variants={itemVariants}
                // Massive vertical padding (py-16 to py-24).
                // Using border-b (and border-t on the first item) for that print-magazine feel.
                // Teal, not Bronze — Bronze-on-Sand is too low-contrast to
                // read as a real divider now that the section background is Sand.
                className={`group flex flex-col border-b border-secondary/20 py-16 lg:py-24 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                {/* 1. The Top Bar (Status & Date/Location) */}
                <div className="mb-10 flex w-full items-start justify-between md:mb-14">
                  <span className="text-caption font-medium uppercase tracking-[0.2em] text-accent">
                    {statusLabel}
                  </span>
                  <div className="text-right">
                    <span className="block text-body font-display text-secondary/80 md:text-body-lg">
                      {event.dateLabel}
                    </span>
                    {event.timeLabel && (
                      <span className="mt-1 block text-caption text-secondary/70">
                        {event.timeLabel}
                      </span>
                    )}
                    {event.location && (
                      <span className="mt-1 block text-caption text-secondary/60">
                        {event.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* 2. The Core (Title & Experience Tag) */}
                <div className="mb-10 flex flex-col md:mb-14">
                  <Link
                    href={destinationHref}
                    className="w-fit rounded-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <h3 className="text-h3 font-display leading-tight text-secondary transition-colors duration-500 group-hover:text-accent md:text-h2 lg:text-h1">
                      {event.title}
                    </h3>
                  </Link>
                  {typeLabel && (
                    <span className="mt-6 text-caption font-sans uppercase tracking-[0.2em] text-secondary/70">
                      [ {typeLabel} ]
                    </span>
                  )}
                </div>

                {/* 3. The Bottom (Summary & CTA) */}
                <div className="flex flex-col items-start gap-10 md:flex-row md:items-end">
                  {event.summary && (
                    <p className="max-w-xl text-body-lg font-light leading-relaxed text-secondary/80">
                      {event.summary}
                    </p>
                  )}

                  <div className="flex shrink-0 items-center gap-6 self-end md:ml-auto">
                    {event.learnMoreHref && (
                      <Link
                        href={event.learnMoreHref}
                        className="rounded-button text-caption uppercase tracking-[0.15em] text-secondary/70 transition-colors duration-500 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        Learn More
                      </Link>
                    )}

                    <Button href={event.ctaHref} variant="secondary">
                      {event.ctaLabel}
                    </Button>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </Section>
  );
}