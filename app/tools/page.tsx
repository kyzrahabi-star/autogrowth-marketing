import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Tools",
  description:
    "Free tools to check your online visibility. Get a full business audit or check if AI assistants like ChatGPT are recommending your competitors instead of you.",
  openGraph: {
    title: "Free Tools — AutoGrowth AI",
    description:
      "Free tools to check your online visibility. Get a full business audit or check if AI assistants like ChatGPT are recommending your competitors instead of you.",
  },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Page intro */}
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">
              Free Tools
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              See where you stand. Free.
            </h1>
            <p className="text-gray-500 text-lg">
              Honest data, no credit card, results in minutes.
            </p>
          </div>

          {/* HERO: Free Business Audit */}
          <div className="bg-gradient-to-br from-emerald-50 via-white to-white border border-emerald-200 rounded-3xl shadow-lg p-8 sm:p-12 mb-10">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">
              The full visibility scan
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Free Business Audit
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              We scan Google Search, Google Maps, ChatGPT, Perplexity, and
              Google AI Overviews for your business. Get a visibility score,
              see your top 3 competitors, and walk away with a prioritized
              action plan &mdash; all in under 3 minutes.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Full visibility score across 5 platforms",
                "Top 3 competitors compared side-by-side",
                "Prioritized action plan you can run yourself",
                "Live results — no waiting for an email",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <Check
                    className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg transition-colors shadow-sm"
            >
              Get Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              No credit card. No email gate. Just data.
            </p>
          </div>

          {/* Secondary: AI Visibility Checker */}
          <div className="text-center">
            <p className="text-gray-600 text-base">
              Just want a quick check?{" "}
              <Link
                href="/tools/ai-visibility-checker"
                className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center gap-1"
              >
                Try our AI Visibility Checker
                <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
