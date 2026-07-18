"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface FounderPreviewProps {
  eyebrow?: string;
  heading?: string;
  statement: string;
  name: string;
  role: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function FounderPreview({
  eyebrow = "Meet the Founder",
  heading = "Hi, I'm Mafaza",
  statement,
  name,
  role,
  ctaLabel,
  ctaHref,
  imageUrl = "/images/founder-2.png",
  imageAlt = "Mafaza Rafeek, Founder of Ignite The Soul",
}: FounderPreviewProps) {
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <Section className="overflow-hidden bg-background">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: The Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
            className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-image lg:col-span-5 lg:mx-0"
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>

          {/* Right Column: The Copy */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {eyebrow && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={transition}
                className="mb-6 block text-caption uppercase tracking-[0.2em] text-accent"
              >
                {eyebrow}
              </motion.span>
            )}

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transition, delay: 0.1 }}
              className="mb-8 text-h3 font-display text-primary md:text-h2"
            >
              {heading}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transition, delay: 0.2 }}
              className="relative"
            >
              <p className="text-h4 font-display italic text-primary/90 md:text-h3">
                &ldquo;{statement}&rdquo;
              </p>

              <div className="mt-8 border-t border-accent/20 pt-8">
                <p className="text-body font-sans font-medium text-primary">{name}</p>
                <p className="mt-1 text-caption font-sans text-primary/70">{role}</p>
              </div>

              <div className="mt-10">
                <Link
                  href={ctaHref}
                  className="group inline-flex items-center gap-2 rounded-button text-body text-accent transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {ctaLabel}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
