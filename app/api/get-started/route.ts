import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, unknown>;

    const b = body as {
      businessName?: string;
      firstName?: string;
      cityState?: string;
      phone?: string;
      email?: string;
      website?: string;
      industry?: string;
      services?: string[];
      hearAbout?: string;
      consent?: boolean;
    };

    if (b.consent !== true) {
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

    console.log("[get-started-submission]", {
      ...body,
      submittedAt: consentTimestamp,
      consent: {
        granted: true,
        timestamp: consentTimestamp,
        ip: consentIp,
        userAgent: consentUserAgent,
      },
    });

    fetch(
      "https://build.twin.so/triggers/990247dd-e6d8-4e12-9a15-d822a2b296a3/webhook",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_name: b.businessName ?? "",
          city: b.cityState ?? "",
          state: "",
          primary_service: Array.isArray(b.services) && b.services.length
            ? b.services.join(", ")
            : (b.industry ?? ""),
          phone: b.phone ?? "",
          email: b.email ?? "",
          hear_about: b.hearAbout ?? "",
          source: "website_get_started",
          website: b.website ?? "",
          industry: b.industry ?? "",
          tcpa_consent: true,
          consent_timestamp: consentTimestamp,
          consent_ip: consentIp,
          consent_user_agent: consentUserAgent,
          full_payload: JSON.stringify(body),
        }),
      }
    ).catch((err) => console.error("[get-started-webhook]", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[POST /api/get-started]", err);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
