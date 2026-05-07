import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "You're In — AutoGrowth AI",
};

const TIMELINE = [
  {
    time: "Within 1 hour",
    detail: "We'll call you to confirm your setup details",
  },
  {
    time: "Within 24 hours",
    detail: "Your AI team starts scanning your market",
  },
  {
    time: "Within 7 days",
    detail: "First content and visibility report delivered",
  },
  {
    time: "Within 30 days",
    detail: "Full dashboard live with real data",
  },
];

export default function GetStartedThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-md w-full">
        {/* Check mark */}
        <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6">
          <Check className="w-7 h-7 text-emerald-500" strokeWidth={2.5} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          You&apos;re In.
        </h1>
        <p className="text-gray-500 text-center mb-10">
          Here&apos;s what happens next.
        </p>

        {/* Timeline */}
        <div className="space-y-0 mb-10">
          {TIMELINE.map(({ time, detail }, i) => (
            <div key={time} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                {i < TIMELINE.length - 1 && (
                  <div className="w-px bg-gray-200 flex-1 min-h-[2rem]" />
                )}
              </div>
              <div className="pt-1 pb-6">
                <p className="text-xs font-semibold text-emerald-600 mb-0.5">
                  {time}
                </p>
                <p className="text-sm text-gray-700">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <a
            href="https://cal.com/evan-ringsonce-demo/ringsonce-demo"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-full text-sm text-center transition-colors"
          >
            Questions? Book a Call →
          </a>
          <a
            href="tel:+18449102116"
            className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors py-2"
          >
            <Phone className="w-4 h-4" />
            Or call us: (844) 910-2116
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          <Link href="/" className="underline underline-offset-2 hover:text-gray-600">
            Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
