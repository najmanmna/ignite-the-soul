import { Resend } from "resend";

// RESEND_API_KEY, CONTACT_INBOX_EMAIL, and CONTACT_FROM_EMAIL must all be set
// as env vars (and later as Cloudflare Workers secrets for production) — not
// committed, not invented here. CONTACT_FROM_EMAIL needs a domain verified
// in the Resend dashboard; it can't just be any address.
//
// The client is constructed lazily, inside sendContactEmail, rather than at
// module scope — the Resend constructor throws immediately when the key is
// missing, which would otherwise crash the build/dev server entirely before
// the env var is ever configured.

interface ContactEmailInput {
  name: string;
  email: string;
  phone: string;
  offering: string;
  message: string;
}

export async function sendContactEmail(input: ContactEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_INBOX_EMAIL;
  if (!apiKey || !from || !to) {
    throw new Error(
      "RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_INBOX_EMAIL must all be set — no defaults are assumed."
    );
  }

  const resend = new Resend(apiKey);

  return resend.emails.send({
    from,
    to,
    replyTo: input.email,
    subject: `New enquiry: ${input.offering} (${input.name})`,
    text: [
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Phone: ${input.phone}`,
      `Interested in: ${input.offering}`,
      "",
      input.message,
    ].join("\n"),
  });
}
