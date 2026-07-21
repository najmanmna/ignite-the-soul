import type { Experience } from "@/types/experience";

// Static for now. Defined as an async function (rather than a bare export)
// so a future Sanity-backed fetch can replace the body without touching any
// call site — they already do `await getExperiences()`.
// No real Soulful Farm Retreat photo exists yet, so it intentionally has no
// imageUrl — the honest placeholder renders instead of a mismatched
// stand-in photo.
export async function getExperiences(): Promise<Experience[]> {
  return [
    {
      slug: "coffee-talks",
      name: "Coffee Talks",
      description:
        "Guided conversations and meaningful connection in a warm, welcoming circle, every Saturday evening.",
      imageUrl: "/images/offering-circles.jpeg",
      imageAlt: "Women gathered in conversation at a Coffee Talk women's circle",
      // Reused verbatim from the existing homepage Coffee Talk section.
      highlightsLabel: "What You'll Experience",
      highlights: ["Guided Conversations", "Emotional Wellbeing", "Women's Community"],
    },
    {
      slug: "workshops",
      name: "Workshops",
      description:
        "Interactive learning experiences designed around specific themes that encourage practical transformation.",
      imageUrl: "/images/offering-workshops.jpeg",
      imageAlt: "Women filling out registration materials at an Ignite The Soul event",
      // The two real upcoming workshop titles, used as recent/example themes.
      highlightsLabel: "Recent Workshop Themes",
      highlights: ["Art Therapy", "Vision Board Workshop"],
    },
    {
      // Description and highlights reused verbatim from the real "2 Months
      // Self-Transformation Journey" flyer for this programme.
      slug: "group-coaching",
      name: "Group Coaching",
      description:
        "Become a better you. A 2-month women's transformation journey focused on self-growth and personal transformation.",
      imageUrl: "/images/offering-coaching.jpeg",
      imageAlt: "A woman in conversation, gesturing warmly while holding notes",
      highlightsLabel: "Programme Highlights",
      highlights: [
        "Heal Your Mind",
        "Restore Your Energy",
        "Build Unshakable Confidence",
        "Reconnect With Your Purpose",
        "Create a Life You Love",
      ],
    },
    {
      slug: "soulful-farm-retreat",
      name: "Soulful Farm Retreat",
      description:
        "A soulful evening designed for women to relax, reconnect with nature, nourish the mind, and embrace inner peace.",
      // A representative few, drawn verbatim from the real brochure's
      // itinerary — not the full list, to stay consistent in scale with
      // the other 3 experiences' shorter highlight sets.
      highlightsLabel: "Experience Highlights",
      highlights: ["Guided Farm Tour", "Meditation & Sound Healing", "Henna Art Experience"],
    },
  ];
}
