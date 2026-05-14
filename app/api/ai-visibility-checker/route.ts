import { NextRequest, NextResponse } from "next/server";

const TWIN_WEBHOOK_URL =
  "https://build.twin.so/triggers/1deb43fd-45b9-47c4-9c79-ab0733dfa87c/webhook";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      business_name?: string;
      city?: string;
      state?: string;
      industry?: string;
      email?: string;
      phone?: string;
      consent?: boolean;
    };

    const { business_name, city, state, industry, email, consent } = body;

    if (!business_name || !city || !state || !industry || !email) {
      return NextResponse.json(
        { error: "Business name, city, state, industry, and email are required." },
        { status: 400 },
      );
    }

    if (consent !== true) {
      return NextResponse.json(
        { error: "Consent is required to submit this form." },
        { status: 400 },
      );
    }

    const consentIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const consentUserAgent = req.headers.get("user-agent") || "unknown";
    const consentTimestamp = new Date().toISOString();

    console.log("[ai-visibility-checker-submission]", {
      ...body,
      submittedAt: consentTimestamp,
      consent: {
        granted: true,
        timestamp: consentTimestamp,
        ip: consentIp,
        userAgent: consentUserAgent,
      },
    });

    fetch(TWIN_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        business_name,
        city,
        state,
        industry,
        email,
        phone: body.phone ?? "",
        tcpa_consent: true,
        consent_timestamp: consentTimestamp,
        consent_ip: consentIp,
        consent_user_agent: consentUserAgent,
      }),
    }).catch((err) => console.error("[ai-visibility-checker-webhook]", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[POST /api/ai-visibility-checker]", err);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 },
    );
  }
}
