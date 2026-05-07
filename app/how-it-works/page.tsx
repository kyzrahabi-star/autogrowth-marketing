import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  PenTool,
  Zap,
  MessageSquare,
  Star,
  Check,
  Thermometer,
  Wrench,
  Home,
  Car,
  Smile,
  Scale,
  Building,
  Sparkles,
  Utensils,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How AutoGrowth AI Works",
  description:
    "5 specialists that run your marketing on autopilot — AI search, content, leads, follow-up, and reputation.",
};

const specialists: Array<{
  Icon: LucideIcon;
  name: string;
  description: string;
  whatYouSee: string;
  realExample: string;
}> = [
  {
    Icon: Search,
    name: "AI Search Analyst",
    description:
      "Runs daily scans across Google Search, Google Maps, Google AI Overviews, ChatGPT, Perplexity, and Bing Copilot. Checks 20+ queries relevant to your business every morning. You get a briefing email showing your citation count, Google ranking position, and exactly where competitors are beating you.",
    whatYouSee:
      "Morning briefing showing 'Reynolds HVAC: 3 citations yesterday. Top competitor: 7. Gap: closing.'",
    realExample:
      "Reynolds Heating and Cooling had 0 AI citations and ranked page 3 on Google on Day 1. After 6 weeks: 14 AI citations and page 1 rankings for 3 local searches.",
  },
  {
    Icon: PenTool,
    name: "Content Director",
    description:
      "Writes one long-form blog post and four video scripts per week. Each piece is optimized to rank on Google AND to be cited by AI engines. Written to sound like a real technician — because both Google and AI reward genuine expertise.",
    whatYouSee:
      "Content calendar showing published posts, citation impact, and which posts earned AI citations.",
    realExample:
      "Reynolds' post 'AC Repair Columbus OH: What It Costs in 2026' ranked on Google page 1 in 3 weeks and earned 3 Perplexity citations in 11 days.",
  },
  {
    Icon: Zap,
    name: "Lead Specialist",
    description:
      "Every inbound call, form fill, or chat gets scored 0–100 in under 60 seconds. Score 80+: instant SMS to your phone with name, number, service requested, and a one-line reason why they're hot. Score below 40: filed for follow-up, not dropped.",
    whatYouSee:
      "Live feed showing today's leads with scores, service type, and alert status.",
    realExample:
      "Reynolds gets 60–80 leads/month. Before: 40% follow-up rate. After: 94%. 18 additional jobs booked in 30 days.",
  },
  {
    Icon: MessageSquare,
    name: "Customer Pursuit Manager",
    description:
      "Sends 6 follow-up messages over 14 days when a lead doesn't book. Day 0: immediate reply. Day 1: check-in. Day 3: seasonal tip. Day 7: last question. Day 10: competitor warning. Day 14: final offer. Stops the moment they book or say stop.",
    whatYouSee:
      "Sequence tracker showing active leads, their stage, open rates, and conversion by stage.",
    realExample:
      "Reynolds' 14-day drip converted 11 leads that had gone silent. Average value: $420. $4,620 in recovered revenue.",
  },
  {
    Icon: Star,
    name: "Reputation Director",
    description:
      "Sends a review request SMS 2 hours after job complete. Google reviews directly impact both your local Google ranking and your AI citation count. Monitors Google and Yelp, drafts responses in your voice, and alerts you immediately when a negative review hits.",
    whatYouSee:
      "Review inbox showing new reviews, drafted responses (one-click approve), and 30-day review velocity.",
    realExample:
      "Reynolds went from 47 Google reviews (3.8★) to 89 reviews (4.7★) in 60 days. Their Google Maps ranking improved from position 7 to position 2 in their area.",
  },
];

const industries: Array<{ Icon: LucideIcon; name: string }> = [
  { Icon: Thermometer, name: "HVAC" },
  { Icon: Wrench, name: "Plumbing" },
  { Icon: Zap, name: "Electrical" },
  { Icon: Home, name: "Roofing" },
  { Icon: Car, name: "Auto Repair" },
  { Icon: Smile, name: "Dental" },
  { Icon: Scale, name: "Legal" },
  { Icon: Building, name: "Real Estate" },
  { Icon: Sparkles, name: "Beauty & Wellness" },
  { Icon: Utensils, name: "Restaurants" },
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
            Each one handles a specific part of your visibility — Google, AI
            search, content, leads, and reputation. Together they run your
            entire growth operation while you focus on the work.
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-50 rounded-xl p-2.5">
                    <s.Icon className="w-7 h-7 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-emerald-600 font-semibold">
                    Specialist {i + 1} of 5
                  </p>
                </div>
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

      {/* One system section */}
      <section className="py-20 px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
            One system. Every platform.
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-10">
            Other agencies do SEO. Some startups do AI optimization. Nobody does both.
            AutoGrowth covers Google Search, Google Maps, Google AI Overviews, ChatGPT,
            and Perplexity — all from one dashboard, with one team of specialists.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
            {["Google Search", "Google Maps", "Google AI Overviews", "ChatGPT", "Perplexity", "Review Sites"].map((platform) => (
              <div key={platform} className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 font-medium">
                {platform}
              </div>
            ))}
          </div>
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
              <li key={i} className="flex items-start gap-3 text-gray-700 text-base">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" strokeWidth={2.5} />
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
                className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-emerald-300 hover:bg-emerald-50 transition-colors text-center"
              >
                <ind.Icon className="w-6 h-6 text-gray-500" strokeWidth={1.5} />
                <span className="text-xs text-gray-700">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 text-center bg-gray-50">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">See it in action</h2>
        <p className="text-gray-500 mb-8">
          Book a 15-minute demo. We&apos;ll run a live audit on your business
          across Google and AI search engines and show you exactly where
          customers are finding your competitors instead of you.
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
            Ready to show up everywhere your customers are looking?
          </h2>
          <p className="text-zinc-400 text-xl mb-10">
            Get your free visibility audit. See exactly where you rank on Google AND AI — vs. your top competitors.
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
