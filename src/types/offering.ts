export interface Offering {
  name: string;
  description: string;
  /** Falls back to a styled placeholder in OfferingsPreview when not set (see PastEvents/FeaturedVideoTestimonial for the same honest-placeholder pattern). */
  imageUrl?: string;
  imageAlt?: string;
  /** Falls back to /offerings until the Offerings page has real per-offering anchors/routes. */
  href?: string;
}
