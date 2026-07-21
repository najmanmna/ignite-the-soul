import type { UpcomingEvent } from "@/types/upcomingEvent";

// Static for now. Defined as an async function (rather than a bare export)
// so a future Sanity-backed fetch can replace the body without touching any
// call site — they already do `await getUpcomingEvents()`. Each event's
// experienceSlug must match one of the 4 Experience slugs in
// src/data/experiences.ts.
export async function getUpcomingEvents(): Promise<UpcomingEvent[]> {
  return [
    {
      // Reused verbatim from the real flyer for this one-time workshop. It
      // borrows "Coffee Talk" styling/branding on the flyer itself, but is
      // not an instance of the recurring Coffee Talks experience — it's a
      // standalone session under Workshops. Listed first overall: it has
      // the nearest confirmed date of all 5 events and is open for
      // registration now.
      slug: "vision-board-workshop",
      experienceSlug: "workshops",
      status: "now-open",
      title: "Vision Board Workshop",
      dateLabel: "Saturday, 25 July",
      timeLabel: "4:00 PM to 7:00 PM",
      location: "Robins Speciality Coffee",
      summary:
        "Design your life. Live your vision. A powerful, interactive session to reflect, plan, and bring your dreams to life, with clarity, purpose, and action.",
      ctaLabel: "Register Interest",
      ctaHref: "/contact?offering=workshops&event=vision-board-workshop",
      learnMoreHref: "#workshops",
    },
    {
      // Reused verbatim from the real "2 Months Self-Transformation Journey"
      // flyer — this is the programme's actual name, not a generic label.
      slug: "two-month-self-transformation-journey",
      experienceSlug: "group-coaching",
      status: "now-open",
      title: "2-Month Self-Transformation Journey",
      dateLabel: "Starting August 2026",
      summary: "You don't have to have it all figured out. You just have to take the first step.",
      ctaLabel: "Register Interest",
      ctaHref: "/contact?offering=group-coaching&event=two-month-self-transformation-journey",
    },
    {
      slug: "coffee-talk-season-2",
      experienceSlug: "coffee-talks",
      status: "coming-soon",
      title: "Coffee Talk · Season 2",
      dateLabel: "Every Saturday Evening",
      // Reused verbatim from the existing homepage Coffee Talk section.
      summary: "Sometimes all it takes is one honest conversation.",
      ctaLabel: "Register Interest",
      ctaHref: "/contact?offering=coffee-talks&event=coffee-talk-season-2",
    },
    {
      slug: "art-therapy",
      experienceSlug: "workshops",
      status: "upcoming",
      title: "Art Therapy",
      dateLabel: "July 2026",
      ctaLabel: "Register Interest",
      ctaHref: "/contact?offering=workshops&event=art-therapy",
    },
    {
      slug: "soulful-farm-retreat-october-2026",
      experienceSlug: "soulful-farm-retreat",
      status: "upcoming",
      statusLabel: "Coming This October 2026",
      title: "Soulful Farm Retreat",
      dateLabel: "October 2026",
      location: "Torba Farm, Qatar",
      summary:
        "A soulful evening designed for women to relax, reconnect with nature, nourish the mind, and embrace inner peace.",
      ctaLabel: "Register Interest",
      ctaHref: "/contact?offering=soulful-farm-retreat&event=soulful-farm-retreat-october-2026",
      learnMoreHref: "#soulful-farm-retreat",
    },
  ];
}
