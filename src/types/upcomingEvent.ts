export type UpcomingEventStatus = "now-open" | "coming-soon" | "upcoming";

/**
 * A specific, time-bound instance of one of the evergreen Experiences (see
 * src/types/experience.ts) — e.g. the October 2026 Soulful Farm Retreat, or
 * Coffee Talk Season 2. Experiences are stable; these come and go, and a
 * single Experience may eventually have several active at once.
 *
 * Field names are chosen to map directly onto a future Sanity "event"
 * document type.
 */
export interface UpcomingEvent {
  slug: string;
  /** Experience.slug this event belongs to — drives the small type label shown under the title. */
  experienceSlug: string;
  status: UpcomingEventStatus;
  /** Override display text for the status badge, e.g. "Coming This October 2026", when the default label for `status` doesn't fit. */
  statusLabel?: string;
  title: string;
  /** A cadence or window, not always a single calendar date, e.g. "Every Saturday Evening". */
  dateLabel: string;
  /** Kept separate from dateLabel (rather than combined into one string) so
   * mobile layouts can stack them instead of wrapping one long line. Only
   * set when the event has a specific time, e.g. "4:00 PM to 7:00 PM". */
  timeLabel?: string;
  location?: string;
  /** Only set when real, verified copy exists — never fabricated. */
  summary?: string;
  /** A real photo, not the promotional flyer/poster graphic — those have
   * text/branding baked in that duplicates what's already rendered here and
   * clashes with the site's own typography. Falls back to an honest "Image
   * coming soon" placeholder when unset. */
  imageSrc?: string;
  imageAlt?: string;
  ctaLabel: string;
  ctaHref: string;
  /** Scrolls to this event's Experience block in "Explore Our Experiences". */
  learnMoreHref?: string;
}
