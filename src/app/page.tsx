import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { FounderPreview } from "@/components/sections/FounderPreview";
import { OfferingsPreview } from "@/components/sections/OfferingsPreview";
import { PastEvents } from "@/components/sections/PastEvents";
import { FeaturedVideoTestimonial } from "@/components/sections/FeaturedVideoTestimonial";
import { CTA } from "@/components/sections/CTA";
import { offerings } from "@/data/offerings";

export default function Home() {
  return (
    <>
      <Hero
        heading="Reconnect with Yourself"
        description="Ignite The Soul is a space for women to slow down, feel supported, and rediscover who they are through coaching, retreats, workshops, and community."
        ctaLabel="Explore Our Experiences"
        ctaHref="/offerings"
      />
      <Mission
        eyebrow="Our Mission"
        heading="Lasting transformation begins within"
        body="To help women reconnect with themselves through coaching, workshops, retreats, women's circles, and community, while providing practical guidance, emotional support, and safe spaces for growth."
      />
      <FounderPreview
        eyebrow="Meet the Founder"
        heading="Meet Mafaza"
        statement="I am passionate about helping women discover their strengths, embrace a positive mindset, and become the best version of themselves. My mission is to create a safe, supportive, and non-judgmental space where women feel heard, valued, and empowered to grow in confidence, wellbeing, and success."
        name="Mafaza Rafeek"
        role="Founder, Ignite The Soul"
        ctaLabel="Learn More"
        ctaHref="/about"
      />
      <OfferingsPreview
        eyebrow="Experiences"
        heading="Explore the Experiences"
        description="Four ways to begin. Choose what feels right for where you are."
        offerings={offerings}
        ctaLabel="Explore Our Experiences"
        ctaHref="/offerings"
      />
      <PastEvents
        eyebrow="Community"
        heading="Moments from Our Community"
        description="Real moments from our circles, workshops, and community initiatives."
        photos={[
          {
            src: "/images/past-event-coffee-talk-launch.jpeg",
            alt: "Women celebrating the first Coffee Talk session at Robin Cafe",
          },
          {
            src: "/images/past-event-community-fridge.jpeg",
            alt: "Ignite The Soul community members restocking a shared community fridge",
          },
          {
            src: "/images/past-event-coffee-talk-wide.jpeg",
            alt: "Women gathered together over coffee and conversation at a women's circle",
          },
        ]}
      />
      <FeaturedVideoTestimonial
        eyebrow="Testimonials"
        heading="Hear From Our Community"
        description="A real moment from our community, in her own words."
        videoSrc="/videos/testimonial-reel.mp4"
        videoLabel="A woman sharing her experience with Ignite The Soul"
        posterSrc="/images/testimonial-poster.jpg"
      />
      <CTA
        heading="You Don't Have To Walk Alone"
        description="Reach out, and let's begin together."
        ctaLabel="Let's Connect"
        ctaHref="/contact"
      />
    </>
  );
}
