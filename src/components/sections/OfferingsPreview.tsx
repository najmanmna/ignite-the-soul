"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import type { Offering } from "@/types/offering";

interface OfferingsPreviewProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  offerings: Offering[];
  ctaLabel: string;
  ctaHref: string;
}

export function OfferingsPreview({
  id,
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
    <Section id={id} className="overflow-hidden bg-muted">
      <Container>
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center md:mb-16">
          <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
        </div>

        {/* 3-col so the first offering can be featured full-width, with the
            other three as a supporting row beneath — premium editorial sites
            rarely present a set like this as four identical cards. */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-x-12"
        >
          {offerings.map((offering, index) => {
            const isFeatured = index === 0;
            return (
              <motion.li
                key={offering.name}
                variants={itemVariants}
                className={cn("group", isFeatured && "sm:col-span-3")}
              >
                <Link
                  href={offering.href || "/offerings"}
                  className={cn("block", isFeatured && "sm:flex sm:items-center sm:gap-10 lg:gap-16")}
                >
                  {/* The Visual: featured gets a wide crop and takes 3/5 of the
                      row at sm+; regular offerings keep the portrait crop. An
                      honest placeholder shows when no real photo exists yet
                      (see PastEvents for the same pattern). */}
                  <div
                    className={cn(
                      "relative mb-8 w-full overflow-hidden rounded-image",
                      isFeatured ? "aspect-video sm:mb-0 sm:w-3/5" : "aspect-4/5"
                    )}
                  >
                    {offering.imageUrl ? (
                      <>
                        <Image
                          src={offering.imageUrl}
                          alt={offering.imageAlt || offering.name}
                          fill
                          className={cn(
                            "object-cover transition-transform duration-1000 group-hover:scale-105",
                            // The featured crop is much wider/shorter than the source
                            // portrait photos — center-cropping cuts off faces, so
                            // anchor to the top instead.
                            isFeatured && "object-top"
                          )}
                          sizes={
                            isFeatured
                              ? "(max-width: 640px) 100vw, 60vw"
                              : "(max-width: 640px) 100vw, 33vw"
                          }
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
                  <div className={isFeatured ? "sm:w-2/5" : undefined}>
                    <h3
                      className={cn(
                        "mb-3 font-display text-primary transition-colors duration-500 group-hover:text-accent",
                        isFeatured ? "text-h3 md:text-h2" : "text-h4 md:text-h3"
                      )}
                    >
                      {offering.name}
                    </h3>
                    <p
                      className={cn(
                        "mb-6 text-primary/70",
                        isFeatured ? "text-body-lg" : "text-body line-clamp-2"
                      )}
                    >
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
                  </div>
                </Link>
              </motion.li>
            );
          })}
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
