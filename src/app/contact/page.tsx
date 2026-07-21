import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { getExperiences } from "@/data/experiences";
import { getUpcomingEvents } from "@/data/upcomingEvents";

export const metadata: Metadata = {
  title: "Contact | Ignite The Soul",
  description:
    "Reach out to Ignite The Soul: ask about Coffee Talks, Workshops, Group Coaching, or the Soulful Farm Retreat, and we'll get back to you.",
};

interface ContactPageProps {
  searchParams: Promise<{ offering?: string; event?: string }>;
}

export default async function Contact({ searchParams }: ContactPageProps) {
  const { offering, event: eventSlug } = await searchParams;
  const [experiences, events] = await Promise.all([getExperiences(), getUpcomingEvents()]);
  const event = events.find((item) => item.slug === eventSlug);

  return (
    <Section size="large" className="bg-background">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center md:mb-16">
            <SectionHeading
              as="h1"
              eyebrow="Get In Touch"
              heading="Let's Connect"
              description="Tell us a little about what you're looking for, and we'll get back to you soon."
            />
          </div>
          <ContactForm
            experiences={experiences}
            initialOffering={offering}
            initialEventTitle={event?.title}
          />
        </div>
      </Container>
    </Section>
  );
}
