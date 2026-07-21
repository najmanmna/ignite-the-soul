import { NextResponse } from "next/server";
import { contactFormSchema } from "@/types/contact";
import { sendContactEmail } from "@/lib/resend";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "That submission didn't look right, please check the form and try again." },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message." },
      { status: 500 }
    );
  }
}
