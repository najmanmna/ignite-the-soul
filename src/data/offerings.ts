import type { Offering } from "@/types/offering";

// Copy sourced verbatim from docs/01-project-overview.md Core Offerings.
// No real Retreats photo exists yet, so it intentionally has no imageUrl —
// OfferingsPreview renders an honest placeholder for it instead of a
// mismatched stand-in photo.
export const offerings: Offering[] = [
  {
    name: "Coaching",
    description:
      "Personal guidance that helps women navigate challenges, build confidence, and reconnect with themselves.",
    imageUrl: "/images/offering-coaching.jpeg",
    imageAlt: "A woman in conversation, gesturing warmly while holding notes",
  },
  {
    name: "Retreats",
    description:
      "Immersive wellness experiences focused on rest, reflection, connection, and growth.",
  },
  {
    name: "Workshops",
    description:
      "Interactive learning experiences designed around specific themes that encourage practical transformation.",
    imageUrl: "/images/offering-workshops.jpeg",
    imageAlt: "Women filling out registration materials at an Ignite The Soul event",
  },
  {
    name: "Women's Circles",
    description:
      "Community gatherings where women can share experiences, connect deeply, and support one another.",
    imageUrl: "/images/offering-circles.jpeg",
    imageAlt: "Women gathered in conversation at a Coffee Talk women's circle",
  },
];
