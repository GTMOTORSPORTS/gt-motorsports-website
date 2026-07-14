import { NextRequest, NextResponse } from "next/server";
import { sendBookingEmails } from "@/lib/booking-email";
import { validateBookingEnquiry } from "@/lib/booking";

export const runtime = "nodejs";

const rateLimitWindowMs = 15 * 60 * 1000;
const maxSubmissionsPerWindow = 5;
const submissions = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = submissions.get(key);

  if (!current || current.resetAt <= now) {
    submissions.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (current.count >= maxSubmissionsPerWindow) {
    return true;
  }

  current.count += 1;
  return false;
}

function hasValidOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  return origin === request.nextUrl.origin || origin === "https://www.gtmotorsports.com.au";
}

export async function POST(request: NextRequest) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json({ ok: false, message: "Invalid request origin." }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json({ ok: false, message: "Invalid request format." }, { status: 415 });
  }

  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong; please call 0414 901 666" },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true, message: "Thanks. Your enquiry has been received." });
  }

  const validation = validateBookingEnquiry(body);

  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, message: "Please check the form and try again.", errors: validation.errors },
      { status: 400 },
    );
  }

  try {
    await sendBookingEmails(validation.data);
    return NextResponse.json({ ok: true, message: "Booking request received" });
  } catch (error) {
    console.error("Booking email failed", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong; please call 0414 901 666",
      },
      { status: 503 },
    );
  }
}
