"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

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
              ? "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3"
              : "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          }
        >
          {items.map((photo, index) => (
            <motion.li key={photo ? photo.src : index} variants={itemVariants}>
              {photo ? (
                <div className="relative aspect-square overflow-hidden rounded-image">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div
                  role="img"
                  aria-label="Event photography coming soon"
                  className="aspect-square rounded-image bg-secondary/40"
                />
              )}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}
