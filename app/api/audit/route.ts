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
      hearAbout?: string;
    };

    const { businessName, city, state, service, phone, email, hearAbout } = body;

    if (!businessName || !city || !state || !service || !phone || !email) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    console.log("[audit-submission]", {
      businessName,
      city,
      state,
      service,
      phone,
      email,
      hearAbout,
      submittedAt: new Date().toISOString(),
    });

    // Fire-and-forget — Twin Lead Specialist webhook
    fetch(
      "https://build.twin.so/triggers/990247dd-e6d8-4e12-9a15-d822a2b296a3/webhook",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_name: businessName,
          city,
          state,
          primary_service: service,
          phone,
          email,
          hear_about: hearAbout ?? "",
          source: "website_audit",
        }),
      }
    ).catch((err) => console.error("[audit-webhook]", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[POST /api/audit]", err);
    return NextResponse.json(
      { error: "Failed to process audit request" },
      { status: 500 }
    );
  }
}
