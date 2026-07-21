"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface WhyItExistsProps {
  eyebrow?: string;
  heading: string;
  pullQuote: string;
  body: string;
}

// Typography-led rather than photo-led — the asymmetric 7/5 split against
// Hero's/MeetMafaza's 5/7 image splits keeps the page from feeling like the
// same layout repeated with different photos.
export function WhyItExists({ eyebrow = "Our Why", heading, pullQuote, body }: WhyItExistsProps) {
  const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <Section size="large" className="bg-muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="mb-12 md:mb-16"
        >
          <p className="mb-3 text-caption uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2 className="text-h3 font-display font-medium text-secondary md:text-h2">{heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.1 }}
            className="text-h3 font-display italic leading-snug text-secondary lg:col-span-7 lg:text-h2"
          >
            &ldquo;{pullQuote}&rdquo;
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.2 }}
            className="text-body-lg font-light text-secondary/80 lg:col-span-5 lg:mt-4"
          >
            {body}
          </motion.p>
        </div>
      </Container>
    </Section>
  );
}
