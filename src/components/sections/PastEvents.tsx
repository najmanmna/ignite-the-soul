"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/utils/cn";

interface PastEventPhoto {
  src: string;
  alt: string;
}

interface PastEventsProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  photos?: PastEventPhoto[];
  /** Only used as a fallback when `photos` is empty — renders an honest
   * placeholder grid rather than fabricated or stock imagery (see
   * docs/references/client-notes.md, which lists event photography as
   * still outstanding for anything we don't have a real photo for). */
  placeholderCount?: number;
}

export function PastEvents({
  eyebrow,
  heading,
  description,
  photos = [],
  placeholderCount = 6,
}: PastEventsProps) {
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition },
  };

  const hasPhotos = photos.length > 0;
  const items: (PastEventPhoto | null)[] = hasPhotos
    ? photos
    : Array.from({ length: placeholderCount }, () => null);

  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={
            hasPhotos
              ? "mt-12 grid grid-cols-2 gap-4"
              : "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          }
        >
          {items.map((photo, index) => {
            // Editorial rhythm rather than a uniform grid: the last photo
            // runs large and full-width beneath the smaller squares above it.
            const isLarge = hasPhotos && index === items.length - 1;
            return (
              <motion.li
                key={photo ? photo.src : index}
                variants={itemVariants}
                className={isLarge ? "col-span-2" : undefined}
              >
                {photo ? (
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-image",
                      isLarge ? "aspect-3/2" : "aspect-square"
                    )}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                      sizes={isLarge ? "100vw" : "(max-width: 640px) 50vw, 33vw"}
                    />
                  </div>
                ) : (
                  <div
                    role="img"
                    aria-label="Event photography coming soon"
                    className={cn(
                      "rounded-image bg-secondary/40",
                      isLarge ? "aspect-3/2" : "aspect-square"
                    )}
                  />
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </Section>
  );
}
