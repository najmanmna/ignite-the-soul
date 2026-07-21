"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface AboutClosingProps {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

export function AboutClosing({
  heading,
  body,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
}: AboutClosingProps) {
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <Section size="none" className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-center" />
        {/* Teal scrim (Secondary) rather than a generic dark overlay — keeps
            the closing moment tied to the brand palette, and Ivory text on
            it mirrors the same pairing Card.tsx already uses. */}
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="mx-auto flex max-w-2xl flex-col items-center py-24 text-center"
        >
          <h2 className="text-h2 font-display font-medium text-secondary-foreground md:text-h1">
            {heading}
          </h2>
          <p className="mt-6 text-body-lg font-light text-secondary-foreground/90">{body}</p>
          <Button href={ctaHref} variant="inverse" size="large" className="mt-10">
            {ctaLabel}
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
