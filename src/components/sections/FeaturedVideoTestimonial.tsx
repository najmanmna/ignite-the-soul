"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface FeaturedVideoTestimonialProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  videoSrc?: string;
  videoLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

// Click-to-play rather than autoplay: docs/references/inspiration.md's "What
// To Avoid" list calls out auto-playing video, and it keeps the section calm
// on scroll (docs/03-design-system.md: "Calm Before Interaction"). Falls back
// to the honest "coming soon" placeholder when no video is supplied yet.
export function FeaturedVideoTestimonial({
  eyebrow,
  heading,
  description,
  videoSrc,
  videoLabel = "Video testimonial",
  ctaLabel = "Explore More Stories",
  ctaHref = "/testimonials",
}: FeaturedVideoTestimonialProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    videoRef.current?.play();
    setIsPlaying(true);
  }

  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 flex justify-center"
        >
          {videoSrc ? (
            <div className="relative aspect-9/16 w-full max-w-sm overflow-hidden rounded-image bg-muted shadow-soft">
              <video
                ref={videoRef}
                src={videoSrc}
                controls={isPlaying}
                playsInline
                loop
                preload="metadata"
                aria-label={videoLabel}
                className="h-full w-full object-cover"
              />
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label={`Play ${videoLabel}`}
                  className="absolute inset-0 flex items-center justify-center bg-primary/10 transition-colors duration-300 hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-primary shadow-soft">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          ) : (
            <div
              role="img"
              aria-label="Video testimonial coming soon"
              className="flex aspect-video w-full max-w-content items-center justify-center rounded-image bg-muted"
            >
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted-foreground"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
              </svg>
            </div>
          )}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2 rounded-button text-body text-accent transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {ctaLabel}
            <span
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
