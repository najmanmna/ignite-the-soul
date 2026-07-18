import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Offerings", href: "/offerings" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

// TODO: replace href with the real Instagram URL once confirmed.
// docs/references/founder-profile.md lists Instagram as a channel but no
// handle/URL is on record yet — left as "#" rather than guessing one.
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

// Deep Teal background: docs/03-design-system.md Color System lists
// "Footer" explicitly under Primary's documented purpose. The top border
// marks a clear edge against whatever Primary-colored section (e.g. the
// CTA) precedes it, so the two don't visually merge into one block.
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-foreground/20 bg-primary text-primary-foreground">
      <Container>
        <div className="flex flex-col gap-12 py-16 md:flex-row md:items-start md:justify-between md:py-section-sm">
          <div className="max-w-reading">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <p className="font-display text-h4">Ignite The Soul</p>
            </div>
            <p className="mt-4 text-body text-primary-foreground/80">
              A space for women to reconnect with themselves through coaching, retreats,
              workshops, and community.
            </p>
          </div>

          <div>
            <p className="mb-4 text-caption uppercase tracking-[0.2em] text-primary-foreground/60">
              Explore
            </p>
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body text-primary-foreground/90 hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-caption uppercase tracking-[0.2em] text-primary-foreground/60">
              Follow
            </p>
            <ul className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    aria-label={`Ignite The Soul on ${social.label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors duration-200 hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-primary-foreground/15 py-6 text-caption text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ignite The Soul. All rights reserved.</p>
          <Link href="#top" className="text-primary-foreground/70 hover:text-primary-foreground">
            Back to top ↑
          </Link>
        </div>
      </Container>
    </footer>
  );
}
