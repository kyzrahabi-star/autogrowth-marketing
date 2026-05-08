import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Results — AutoGrowth AI",
  description:
    "Real results for real contractors. See how AutoGrowth AI transforms online visibility and lead flow for home services businesses.",
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            Real Results for Real Contractors
          </h1>
          <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">
            See how AutoGrowth transforms online visibility and lead flow for home
            services businesses.
          </p>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-zinc-700">
            <div className="text-center px-8">
              <p className="text-5xl font-bold text-white">31+</p>
              <p className="text-sm text-zinc-400 mt-1">
                Competitors identified in first 48 hours
              </p>
            </div>
            <div className="text-center px-8">
              <p className="text-5xl font-bold text-white">15</p>
              <p className="text-sm text-zinc-400 mt-1">AI engines scanned daily</p>
            </div>
            <div className="text-center px-8">
              <p className="text-5xl font-bold text-white">60 sec</p>
              <p className="text-sm text-zinc-400 mt-1">Average lead scoring time</p>
            </div>
            <div className="text-center px-8">
              <p className="text-5xl font-bold text-white">24/7</p>
              <p className="text-sm text-zinc-400 mt-1">AI receptionist uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 1 — Reynolds Heating & Cooling */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
              Case Study
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Reynolds Heating &amp; Cooling
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Columbus, OH &middot; HVAC &middot; Started April 2026
            </p>
          </div>

          {/* Before / After */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {/* Before */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Before AutoGrowth
              </p>
              <p className="text-5xl font-bold text-gray-900">0/100</p>
              <p className="text-xs text-gray-400 mb-4">AI Visibility Score</p>
              <ul className="space-y-2">
                {[
                  "Zero citations across ChatGPT, Perplexity, Google AI",
                  "Losing calls to 31 competitors",
                  "No follow-up system",
                  "No review strategy",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="shrink-0 mt-0.5 text-gray-400">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-6">
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-3">
                After 30 Days
              </p>
              <p className="text-5xl font-bold text-gray-900">12/100</p>
              <p className="text-xs text-gray-400 mb-4">AI Visibility Score</p>
              <ul className="space-y-2">
                {[
                  "First AI citations appearing across 3 engines",
                  "8 leads scored and tracked",
                  "3-step automated follow-up running",
                  "Daily competitor tracking active",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="shrink-0 mt-0.5 text-emerald-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="border-l-2 border-gray-200 pl-6 mt-8">
            <p className="text-xl text-gray-700 italic leading-relaxed">
              I had no idea AI search engines even existed. Turns out my competitors
              were getting recommended while I was invisible.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              — James London, Reynolds Heating &amp; Cooling
            </p>
          </blockquote>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { number: "0 → 12", label: "visibility score" },
              { number: "31", label: "competitors discovered" },
              { number: "8", label: "leads scored in first week" },
              { number: "100%", label: "follow-up rate" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study 2 — Thompson Plumbing (coming soon) */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block bg-gray-200 text-gray-500 text-xs font-medium px-3 py-1 rounded-full mb-4">
            Coming Soon
          </span>
          <h3 className="text-2xl font-bold text-gray-400">
            Thompson Plumbing &amp; Heating
          </h3>
          <p className="text-sm text-gray-400 mt-1">Columbus, OH</p>
          <p className="text-gray-400 mt-2">
            Results from our first plumbing client will appear here.
          </p>
        </div>
      </section>

      {/* Case Study 3 — Your Business */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="border-2 border-dashed border-emerald-200 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900">
              Your Business Could Be Here
            </h3>
            <p className="text-gray-500 mt-3">
              Get your free audit and see where you stand vs. your top competitors.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full px-8 py-3 text-sm transition-colors mt-8"
            >
              Get Your Free Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready to stop being invisible?
          </h2>
          <p className="text-zinc-400 text-xl mt-4 max-w-2xl">
            Get your free audit. See exactly where you rank vs. your competitors — in
            under 3 minutes.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full px-8 py-4 text-sm transition-colors mt-10"
          >
            Get Your Free Audit →
          </Link>
        </div>
      </section>
    </div>
  );
}
