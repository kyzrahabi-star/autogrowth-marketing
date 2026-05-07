import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How AutoGrowth AI Works",
  description:
    "5 specialists that run your marketing on autopilot — AI search, content, leads, follow-up, and reputation.",
};

const specialists = [
  {
    icon: "🔍",
    name: "AI Search Analyst",
    description:
      "Runs daily scans of ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot. Searches 20+ queries relevant to your business — 'AC repair Columbus OH', 'best HVAC near me', and more. You get a morning briefing email with your citation count vs. competitors.",
    whatYouSee:
      "Morning briefing showing 'Reynolds HVAC: 3 citations yesterday. Top competitor: 7. Gap: closing.'",
    realExample:
      "Reynolds Heating and Cooling had 0 AI citations on Day 1. After 6 weeks: 14 citations across 3 AI engines.",
  },
  {
    icon: "✏️",
    name: "Content Director",
    description:
      "Writes one long-form blog post and four video scripts per week. Content covers your services, your city, real HVAC problems with concrete answers. Written to sound like a real technician — because AI search rewards expertise, not marketing copy.",
    whatYouSee:
      "Content calendar showing published posts, citation impact, and which posts earned AI citations.",
    realExample:
      "Reynolds' blog post 'AC Repair Columbus OH: What It Costs in 2026' earned 3 Perplexity citations in 11 days.",
  },
  {
    icon: "⚡",
    name: "Lead Specialist",
    description:
      "Every inbound call, form fill, or chat gets scored 0–100 in under 60 seconds. Score 80+: instant SMS to your phone with name, number, service requested, and a one-line reason why they're hot. Score below 40: filed for follow-up, not dropped.",
    whatYouSee:
      "Live feed showing today's leads with scores, service type, and alert status.",
    realExample:
      "Reynolds gets 60–80 leads/month. Before: 40% follow-up rate. After: 94%. 18 additional jobs booked in 30 days.",
  },
  {
    icon: "🎯",
    name: "Customer Pursuit Manager",
    description:
      "Sends 6 follow-up messages over 14 days when a lead doesn't book. Day 0: immediate reply. Day 1: check-in. Day 3: seasonal tip. Day 7: last question. Day 10: competitor warning. Day 14: final offer. Stops the moment they book or say stop.",
    whatYouSee:
      "Sequence tracker showing active leads, their stage, open rates, and conversion by stage.",
    realExample:
      "Reynolds' 14-day drip converted 11 leads that had gone silent. Average value: $420. $4,620 in recovered revenue.",
  },
  {
    icon: "⭐",
    name: "Reputation Director",
    description:
      "Sends a review request SMS 2 hours after job complete. Monitors Google and Yelp for new reviews — positive or negative. Drafts a response in your voice for every review. Alerts you immediately when a negative review hits.",
    whatYouSee:
      "Review inbox showing new reviews, drafted responses (one-click approve), and 30-day review velocity.",
    realExample:
      "Reynolds went from 47 Google reviews (3.8 stars) to 89 reviews (4.7 stars) in 60 days.",
  },
];

const industries = [
  { icon: "🌡️", name: "HVAC" },
  { icon: "🔧", name: "Plumbing" },
  { icon: "⚡", name: "Electrical" },
  { icon: "🏠", name: "Roofing" },
  { icon: "🚗", name: "Auto Repair" },
  { icon: "🦷", name: "Dental" },
  { icon: "⚖️", name: "Legal" },
  { icon: "🏡", name: "Real Estate" },
  { icon: "💅", name: "Beauty & Wellness" },
  { icon: "🍽️", name: "Restaurants" },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-8 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            5 Specialists. Your market. Dominated.
          </h1>
          <p className="text-gray-500 text-lg">
            Each one handles a specific part of your marketing — automatically.
            Together, they run your entire growth operation while you focus on
            the work.
          </p>
        </div>
      </section>

      {/* Specialists */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto space-y-24">
          {specialists.map((s, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-12 items-start ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50 rounded-2xl p-8 -mx-8"
              } ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Placeholder visual */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center h-48 text-gray-400 text-sm">
                Dashboard Screenshot
              </div>

              {/* Text */}
              <div>
                <p className="text-sm text-emerald-600 font-semibold mb-1">
                  Specialist {i + 1} of 5
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{s.name}</h2>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {s.description}
                </p>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Real example
                  </p>
                  <p className="text-sm text-gray-700 italic">{s.realExample}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Autopilot */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-10">
            Everything runs on autopilot
          </h2>
          <ul className="space-y-4">
            {[
              "Morning briefing email — 90 seconds to read.",
              "Review responses drafted for your approval.",
              "Leads scored and alerted automatically.",
              "You answer the phone and do the work.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 text-base"
              >
                <span className="text-emerald-500 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Built for trades */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-4">
            Built for trades
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Works for any service business.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-emerald-300 hover:bg-emerald-50 transition-colors text-center text-gray-700"
              >
                <span className="text-2xl">{ind.icon}</span>
                <span className="text-xs text-gray-700">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 text-center bg-gray-50">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">See it in action</h2>
        <p className="text-gray-500 mb-8">
          Book a 15-minute demo. We&apos;ll run a live audit on your actual
          business.
        </p>
        <Link
          href="/demo"
          className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
        >
          Book a 15-min demo →
        </Link>
      </section>

      {/* Dark CTA band */}
      <section className="bg-zinc-900 py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white font-bold text-4xl tracking-tight mb-4">
            Ready to stop being invisible?
          </h2>
          <p className="text-zinc-400 text-xl mb-10">
            Get your free AI visibility audit. See exactly where you stand vs. your competitors — in 24 hours.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Get your free audit →
          </Link>
        </div>
      </section>
    </div>
  );
}
