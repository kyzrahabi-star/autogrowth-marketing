import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      email?: string;
      businessName?: string;
      vertical?: string;
    };

    const { email, businessName, vertical } = body;

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    console.log("[waitlist-submission]", {
      email,
      businessName,
      vertical,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[POST /api/waitlist]", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
