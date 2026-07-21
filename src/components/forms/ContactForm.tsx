"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/types/contact";
import type { Experience } from "@/types/experience";
import { Button } from "@/components/ui/Button";

const WHATSAPP_LINK = "https://wa.me/97451313556";

interface ContactFormProps {
  /** Fetched server-side (getExperiences() is async, ready for a future
   * Sanity swap) and passed in, since this is a Client Component. */
  experiences: Experience[];
  initialOffering?: string;
  /** Human-readable event title (e.g. "Soulful Farm Retreat"), used to
   * prefill the message when arriving via a "Register Interest" CTA. */
  initialEventTitle?: string;
}

const fieldClasses =
  "w-full rounded-input border border-input bg-background px-4 py-3 text-body text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ContactForm({ experiences, initialOffering, initialEventTitle }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const offeringOptions = [
    { slug: "general", name: "General Inquiry" },
    ...experiences.map((experience) => ({ slug: experience.slug, name: experience.name })),
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      offering:
        initialOffering && offeringOptions.some((option) => option.slug === initialOffering)
          ? initialOffering
          : "general",
      message: initialEventTitle ? `I'd like to register my interest in: ${initialEventTitle}` : "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!result.ok) {
        setErrorMessage(result.error ?? "Something went wrong sending your message.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong sending your message.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card bg-card p-8 text-center text-card-foreground">
        <p className="text-h4 font-display">Thank you for reaching out</p>
        <p className="mt-3 text-body text-card-foreground/80">
          We&apos;ve received your message and will be in touch soon.
        </p>
        <p className="mt-6 text-body">
          Need anything?{" "}
          <a href={WHATSAPP_LINK} className="underline underline-offset-4 hover:no-underline">
            Chat with us on WhatsApp.
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {status === "error" && (
        <div
          role="alert"
          className="rounded-input border border-destructive/30 bg-destructive/5 px-4 py-3 text-body text-destructive"
        >
          <p>{errorMessage}</p>
          <p className="mt-2">
            You can also{" "}
            <a href={WHATSAPP_LINK} className="underline underline-offset-4 hover:no-underline">
              chat with us on WhatsApp
            </a>{" "}
            instead.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block text-body font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          type="text"
          className={fieldClasses}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-small text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-body font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={fieldClasses}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-small text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-body font-medium text-foreground">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          className={fieldClasses}
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-2 text-small text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="offering" className="mb-2 block text-body font-medium text-foreground">
          What are you interested in?
        </label>
        <select id="offering" className={fieldClasses} {...register("offering")}>
          {offeringOptions.map((option) => (
            <option key={option.slug} value={option.slug}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-body font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={fieldClasses}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-small text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
