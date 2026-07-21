"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface AboutHeroProps {
  eyebrow?: string;
  heading: string;
  name?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  credentials: string[];
}

interface Callout {
  text: string;
  side: "left" | "right";
  top: string;
  lineWidth: string;
}

export function AboutHero({
  eyebrow,
  heading,
  name,
  description,
  imageSrc,
  imageAlt,
  credentials,
}: AboutHeroProps) {
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  const callouts: Callout[] = credentials.map((text, index) => ({
    text,
    side: index % 2 === 0 ? "left" : "right",
    // Slightly tightened the vertical spread so they cluster closer to the portrait's center of mass
    top: ["15%", "15%", "48%", "48%", "80%", "80%"][index] ?? "50%",
    lineWidth: ["w-6", "w-6", "w-10", "w-10", "w-16", "w-16"][index] ?? "w-10",
  }));

  const calloutContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
  };

  // Custom variants so the left callouts slide in from the left, and right from the right
  const calloutItemLeft = {
    hidden: { opacity: 0, x: -15 },
    show: { opacity: 1, x: 0, transition },
  };
  
  const calloutItemRight = {
    hidden: { opacity: 0, x: 15 },
    show: { opacity: 1, x: 0, transition },
  };

  return (
    <Section size="none" className="overflow-hidden bg-background pb-20 pt-24 lg:pb-32 lg:pt-32">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
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

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.1 }}
            className="text-h2 font-display font-medium leading-tight text-secondary md:text-h1"
          >
            {heading}
          </motion.h1>

          {name && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transition, delay: 0.15 }}
              className="mt-4 text-body font-sans font-medium text-secondary/70"
            >
              {name}
            </motion.p>
          )}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.2 }}
            className="mt-6 max-w-lg text-body-lg font-light leading-relaxed text-secondary/80"
          >
            {description}
          </motion.p>
        </div>

        {/* Desktop: Flanking Annotations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...transition, delay: 0.3 }}
          className="relative mx-auto mt-16 hidden max-w-4xl lg:mt-24 lg:block"
        >
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-image">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              // Restored the 10-second ultra-slow continuous zoom
              className="object-cover transition-transform duration-[10s] ease-out hover:scale-105"
              sizes="(min-width: 1024px) 384px, 100vw"
            />
          </div>

          <motion.ul
            variants={calloutContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="pointer-events-none absolute inset-0"
          >
            {callouts.map((callout) => (
              <motion.li
                key={callout.text}
                variants={callout.side === "left" ? calloutItemLeft : calloutItemRight}
                style={{ top: callout.top }}
                className={
                  callout.side === "left"
                    ? "absolute left-0 flex w-56 items-center justify-end gap-3 text-right"
                    : "absolute right-0 flex w-56 items-center justify-start gap-3 text-left"
                }
              >
                {callout.side === "left" ? (
                  <>
                    {/* Shifted to display font and italics for an elegant, annotated feel */}
                    <span className="w-36 shrink-0 text-lg font-display font-semibold italic leading-tight text-secondary/90">
                      {callout.text}
                    </span>
                    {/* Thinned out the line and dot for delicacy */}
                    <span className={`h-px shrink-0 bg-accent/30 ${callout.lineWidth}`} />
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                  </>
                ) : (
                  <>
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                    <span className={`h-px shrink-0 bg-accent/30 ${callout.lineWidth}`} />
                    <span className="w-36 shrink-0 text-lg font-display font-semibold italic leading-tight text-secondary/90">
                      {callout.text}
                    </span>
                  </>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Mobile: Standard Portrait & Flowing Typography */}
        <div className="mt-16 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.3 }}
            className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-image"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              // Added the 10-second breath to the mobile image as well
              className="object-cover transition-transform duration-[10s] ease-out hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.4 }}
            className="mx-auto mt-12 max-w-md text-center"
          >
            {/* Using the typographic ribbon style for mobile to keep the poetic feel without lines */}
            <p className="text-lg font-display font-semibold leading-[2.2] text-secondary/90">
              {credentials.map((credential, index) => (
                <span key={credential}>
                  <span className="italic">{credential}</span>
                  {index < credentials.length - 1 && (
                    <span className="mx-3 font-sans text-accent/40 not-italic">/</span>
                  )}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}