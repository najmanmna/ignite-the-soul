import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { WhyItExists } from "@/components/sections/WhyItExists";
import { MeetMafaza } from "@/components/sections/MeetMafaza";
import { WhatIBelieve } from "@/components/sections/WhatIBelieve";
import { AboutClosing } from "@/components/sections/AboutClosing";

export const metadata: Metadata = {
  title: "About | Ignite The Soul",
  description:
    "Meet Mafaza Rafeek, the certified life coach and psychology graduate behind Ignite The Soul, and the story, values, and community she's building for women.",
  openGraph: {
    title: "About | Ignite The Soul",
    description:
      "Meet Mafaza Rafeek, the certified life coach and psychology graduate behind Ignite The Soul.",
    images: ["/images/founder-image.jpeg"],
  },
};

export default function About() {
  return (
    <>
      <AboutHero
        eyebrow="About"
        heading="Meet the Founder"
        name="Mafaza Rafeek"
        description="I am passionate about helping women grow into their best selves and creating positive ripples in their lives. With a heart rooted in kindness and understanding, I believe every woman has the power to transform her life, step by step, with community and support."
        imageSrc="/images/founder-image.jpeg"
        imageAlt="Mafaza Rafeek, Founder of Ignite The Soul"
        credentials={[
          "Certified Life Coach",
          "Graduate in Psychology",
          "Educator",
          "Fitness & Wellness Enthusiast",
          "Women's Wellness & Retreat Facilitator",
          "Founder of Ignite the Soul",
        ]}
      />
      <WhyItExists
        eyebrow="Our Why"
        heading="The Story Behind Ignite the Soul"
        pullQuote="I created Ignite the Soul to be a safe, judgment-free space where women feel supported, connected, and empowered to grow."
        body="After navigating much of my own journey alone, I realized how life-changing the right support system can be. That's why I'm passionate about building a community where women uplift one another. Through workshops, practical tools, and reflective journaling, I help women grow with confidence, because when women support women, incredible things happen."
      />
      <MeetMafaza
        eyebrow="Meet Mafaza"
        heading="The Person Behind Ignite the Soul"
        intro="Beyond the coaching sessions and workshops, here's a little more about who I am."
        facets={[
          {
            label: "What I Love",
            description:
              "Leadership and motivational books (Atomic Habits is a favorite), nature, yoga, meditation, and quiet mornings with tea or coffee.",
          },
          {
            label: "Inspired By",
            description: "Women empowering women through strength, resilience, and support.",
          },
          {
            label: "My Lifestyle",
            description:
              "I prioritize self-care, emotional wellbeing, and meaningful time with my family of five.",
          },
          {
            label: "Beyond Work",
            description:
              "I've explored 15+ countries, and love discovering new cultures, journaling, and growth-focused workshops.",
          },
        ]}
        imageSrc="/images/founder-2.png"
        imageAlt="Mafaza Rafeek seated, smiling warmly"
      />
      <WhatIBelieve
        eyebrow="What I Believe"
        mission="To empower women to become resilient, confident, and unshakable through community, knowledge, and self-care."
        values={["Support", "Growth", "Authenticity", "Respect", "Empowerment"]}
        want="To feel inspired, supported, confident, and capable of overcoming any challenge."
        different="A heart-led community that blends practical strategies with genuine support to help women thrive as their most authentic selves."
      />
      <AboutClosing
        heading="A Message to Our Community"
        body="You are stronger than you know, and you never have to walk your journey alone. Expect authentic guidance, practical tools, inspiring stories, and a community that empowers you to grow. Let's grow, support, and thrive together."
        ctaLabel="Explore Our Offerings"
        ctaHref="/offerings"
        imageSrc="/images/about-community-gathering.jpeg"
        imageAlt="Women gathered together at a Coffee Talk community session"
      />
    </>
  );
}
