import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = { name: 100, email: 254, company: 150, project: 5000 } as const;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Bots commonly fill fields that are visually hidden from real visitors.
  if (clean(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, MAX_LENGTH.name);
  const email = clean(payload.email, MAX_LENGTH.email).toLowerCase();
  const company = clean(payload.company, MAX_LENGTH.company);
  const project = clean(payload.project, MAX_LENGTH.project);

  if (!name || !EMAIL_PATTERN.test(email) || !project) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Contact form database settings are incomplete.");
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  try {
    const message = company ? `Company: ${company}\n\n${project}` : project;
    const response = await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name: `[MIRITAI] ${name}`, email, message }),
    });

    if (!response.ok) {
      console.error("Contact enquiry storage failed.", response.status, await response.text());
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact enquiry storage failed.", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
