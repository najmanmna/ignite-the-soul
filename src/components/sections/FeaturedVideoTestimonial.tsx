"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface SupportingTestimonial {
  quote: string;
  name: string;
}

interface FeaturedVideoTestimonialProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  videoSrc?: string;
  videoLabel?: string;
  posterSrc?: string;
  testimonials?: SupportingTestimonial[];
  ctaLabel?: string;
  ctaHref?: string;
}

const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };
const SUPPORTING_SLOTS = 3;

export function FeaturedVideoTestimonial({
  eyebrow,
  heading,
  description,
  videoSrc,
  videoLabel = "Video testimonial",
  posterSrc,
  testimonials = [],
  ctaLabel = "View All Stories",
  ctaHref = "/testimonials",
}: FeaturedVideoTestimonialProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  const supportingSlots = Array.from(
    { length: SUPPORTING_SLOTS },
    (_, index) => testimonials[index]
  );

  return (
    <Section className="overflow-hidden bg-background">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
        </div>

        {/* 12-column grid to give the video more horizontal dominance */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">
          {/* Left Column: The Highlight Video (lg:col-span-7 = 58% of the width) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
            className="flex w-full flex-col items-center lg:col-span-7 lg:items-start"
          >
            {videoSrc ? (
              // aspect-9/16 stays fixed at every breakpoint so the video is
              // never cropped — a variable-height desktop crop was cutting
              // into the vertical video before.
              <div className="relative aspect-9/16 w-full overflow-hidden rounded-image bg-muted shadow-lg transition-transform duration-1000 ease-out hover:scale-105">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={posterSrc}
                  playsInline
                  loop
                  preload="none"
                  aria-label={videoLabel}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  // object-cover ensures it fills the new viewport shape perfectly without stretching
                  className="h-full w-full object-cover object-center"
                />
                {!isPlaying ? (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={`Play ${videoLabel}`}
                    className="group absolute inset-0 flex items-center justify-center bg-primary/5 transition-colors duration-700 hover:bg-primary/20 focus-visible:outline-none"
                  >
                    <span className="flex h-24 w-24 items-center justify-center rounded-full bg-background text-secondary shadow-xl transition-transform duration-700 group-hover:scale-110">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={`Pause ${videoLabel}`}
                    className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/80 text-secondary shadow-soft transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  </button>
                )}
              </div>
            ) : (
              <div
                role="img"
                aria-label="Video testimonial coming soon"
                className="flex aspect-9/16 w-full items-center justify-center rounded-image bg-muted"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-accent/50"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
                </svg>
              </div>
            )}
          </motion.div>

          {/* Right Column: The Quotes (lg:col-span-5 = 42% of the width) */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
            }}
            className="flex w-full flex-col lg:col-span-5"
          >
            {supportingSlots.map((testimonial, index) => (
              <motion.li
                key={testimonial?.name ?? index}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0, transition },
                }}
                className="border-b border-accent/15 py-8 first:pt-0 last:border-0 last:pb-0"
              >
                {testimonial ? (
                  <>
                    <p className="text-body-lg font-display italic leading-relaxed text-secondary/90">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <p className="mt-4 text-caption uppercase tracking-[0.2em] text-accent">
                      {testimonial.name}
                    </p>
                  </>
                ) : (
                  <p className="text-body font-sans font-light italic text-secondary/50">
                    Her story will be featured here soon.
                  </p>
                )}
              </motion.li>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition },
              }}
              className="mt-10 pt-4"
            >
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 rounded-button text-body uppercase tracking-wider text-accent transition-colors duration-500 hover:text-secondary focus-visible:outline-none"
              >
                {ctaLabel}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 group-hover:translate-x-2"
                >
                  &rarr;
                </span>
              </Link>
            </motion.div>
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}
