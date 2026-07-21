/**
 * One of the evergreen experiences Ignite The Soul offers — Coffee Talks,
 * Workshops, Group Coaching, Soulful Farm Retreat. These are stable; the
 * specific scheduled instances under them (see UpcomingEvent) come and go.
 * Field names are chosen to map directly onto a future Sanity "experience"
 * document type.
 */
export interface Experience {
  slug: string;
  name: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  /** Label for the short highlights list, e.g. "What You'll Experience",
   * "Recent Workshop Themes", "Programme Highlights" — varies per
   * experience, but every experience uses the same label + tags layout. */
  highlightsLabel?: string;
  highlights?: string[];
}
