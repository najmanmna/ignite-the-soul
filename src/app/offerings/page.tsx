import type { Metadata } from "next";
import { OfferingsHero } from "@/components/sections/OfferingsHero";
import { UpcomingExperiences } from "@/components/sections/UpcomingExperiences";
import { ExploreExperiences } from "@/components/sections/ExploreExperiences";
import { CTA } from "@/components/sections/CTA";
import { getExperiences } from "@/data/experiences";
import { getUpcomingEvents } from "@/data/upcomingEvents";

export const metadata: Metadata = {
  title: "Offerings | Ignite The Soul",
  description:
    "Explore Ignite The Soul's experiences: Coffee Talks, Workshops, Group Coaching, and the Soulful Farm Retreat, including what's open to join right now.",
};

export default async function Offerings() {
  const [experiences, events] = await Promise.all([getExperiences(), getUpcomingEvents()]);

  return (
    <>
      <OfferingsHero
        eyebrow="Offerings"
        heading="Experiences designed to help you reconnect, grow, and heal."
        description="From weekly conversations to immersive retreats, every experience is built to meet you where you are."
        ctaLabel="View Upcoming Experiences ↓"
        ctaHref="#upcoming"
      />
      <UpcomingExperiences
        id="upcoming"
        eyebrow="Join Us"
        heading="Upcoming Experiences"
        description="What's open to join, right now."
        events={events}
        experiences={experiences}
      />
      <ExploreExperiences
        eyebrow="Explore"
        heading="Explore Our Experiences"
        description="Four ways to begin."
        experiences={experiences}
      />
      <CTA
        heading="Not sure where to begin?"
        description="Let's find the experience that's right for you."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
