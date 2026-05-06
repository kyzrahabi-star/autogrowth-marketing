import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      businessName?: string;
      city?: string;
      state?: string;
      service?: string;
      phone?: string;
      email?: string;
    };

    const { businessName, city, state, service, phone, email } = body;

    if (!businessName || !city || !state || !service || !phone || !email) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // Log submission — wire to Lead Specialist webhook later
    console.log("[audit-submission]", {
      businessName,
      city,
      state,
      service,
      phone,
      email,
      submittedAt: new Date().toISOString(),
    });

    // TODO: POST to webhook, send confirmation email via Resend, store in DB

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[POST /api/audit]", err);
    return NextResponse.json(
      { error: "Failed to process audit request" },
      { status: 500 }
    );
  }
}
