import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "How AutoGrowth AI Works",
  description:
    "5 specialists that run your marketing on autopilot — AI search, content, leads, follow-up, and reputation.",
};

const specialists: Array<{
  name: string;
  description: string;
  realExample: string;
  ui: React.ReactNode;
}> = [
  {
    name: "AI Search Analyst",
    description:
      "Runs daily scans across Google Search, Google Maps, Google AI Overviews, ChatGPT, Perplexity, and Bing Copilot. Checks 20+ queries relevant to your business every morning. You get a briefing email showing your citation count, Google ranking position, and exactly where competitors are beating you.",
    realExample:
      "Reynolds Heating and Cooling had 0 AI citations and ranked page 3 on Google on Day 1. After 6 weeks: 14 AI citations and page 1 rankings for 3 local searches.",
    ui: (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">AI Visibility Report</span>
          <span className="text-xs text-gray-400">Tuesday, May 6</span>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-4 gap-2 mb-4 text-[10px] uppercase tracking-wide text-gray-400 font-semibold">
            <span>Business</span>
            <span className="text-center">ChatGPT</span>
            <span className="text-center">Perplexity</span>
            <span className="text-center">Google AI</span>
          </div>
          {[
            { name: "Columbus Worth. Air", counts: [3, 2, 4], you: false },
            { name: "Custom Air",          counts: [2, 1, 2], you: false },
            { name: "Hetter Heating",      counts: [1, 1, 1], you: false },
            { name: "Reynolds (You)",      counts: [0, 0, 1], you: true  },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 gap-2 py-2 text-xs rounded-lg px-1 ${
                row.you ? "bg-orange-50 border border-dashed border-orange-200 font-semibold" : "border-b border-gray-50"
              }`}
            >
              <span className={row.you ? "text-orange-700" : "text-gray-700"}>{row.name}</span>
              {row.counts.map((c, i) => (
                <span
                  key={i}
                  className={`text-center font-semibold ${
                    c === 0
                      ? row.you ? "text-orange-500" : "text-gray-300"
                      : "text-emerald-600"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          ))}
          <div className="mt-4 flex items-center gap-2 text-xs text-orange-600 bg-orange-50 rounded-lg px-3 py-2">
            <span>⚠</span>
            <span>You ranked 0× on ChatGPT and Perplexity this week.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Content Director",
    description:
      "Writes one long-form blog post and four video scripts per week. Each piece is optimized to rank on Google AND to be cited by AI engines. Written to sound like a real technician — because both Google and AI reward genuine expertise.",
    realExample:
      "Reynolds' post 'AC Repair Columbus OH: What It Costs in 2026' ranked on Google page 1 in 3 weeks and earned 3 Perplexity citations in 11 days.",
    ui: (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center justify-between">
          <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">Published</span>
          <span className="text-xs text-gray-400">Jun 12, 2026</span>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-gray-900 text-base mb-1 leading-snug">
            Your AC Stopped Cooling in Columbus: What It Actually Means
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-600">MR</div>
            <span className="text-xs text-gray-500">Mark Reynolds, NATE-Certified</span>
          </div>
          <div className="bg-blue-50 rounded-lg px-4 py-3 border border-blue-100 mb-4">
            <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide mb-1">Answer Block</p>
            <p className="text-xs text-gray-700 leading-relaxed">
              If your AC is running but not cooling, the most common causes are a dirty filter, low refrigerant, or a failing compressor...
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span className="text-emerald-600 font-semibold">Google #4</span>
            <span className="text-gray-300">·</span>
            <span className="text-emerald-600 font-semibold">3 AI citations</span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-400">847 words</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Lead Specialist",
    description:
      "Every inbound call, form fill, or chat gets scored 0–100 in under 60 seconds. Score 80+: instant SMS to your phone with name, number, service requested, and a one-line reason why they're hot. Score below 40: filed for follow-up, not dropped.",
    realExample:
      "Reynolds gets 60–80 leads/month. Before: 40% follow-up rate. After: 94%. 18 additional jobs booked in 30 days.",
    ui: (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Inbound Lead</span>
          <span className="text-xs text-gray-400">Today, 2:14 PM</span>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="font-bold text-gray-900 text-base">Sarah Mitchell</p>
              <p className="text-xs text-gray-500 mt-0.5">Emergency AC repair · Columbus, OH</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900 leading-none">91</div>
              <div className="text-xs font-bold text-red-500 mt-0.5">HOT</div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4 text-xs text-gray-700 italic">
            &ldquo;AC went out, baby at home, it&apos;s 90° outside. Need someone now.&rdquo;
          </div>
          <div className="space-y-1.5">
            {[
              { label: "Urgency", score: "28/30" },
              { label: "Service value", score: "22/25" },
              { label: "Location", score: "20/20" },
            ].map((d) => (
              <div key={d.label} className="flex items-center justify-between text-xs">
                <span className="text-gray-500">{d.label}</span>
                <span className="font-semibold text-gray-900">{d.score}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-emerald-600 bg-emerald-50 rounded-lg px-3 py-2 flex items-center gap-2">
            <span>⚡</span>
            <span>Owner alerted via SMS in 58 seconds.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Customer Pursuit Manager",
    description:
      "Sends 6 follow-up messages over 14 days when a lead doesn't book. Day 0: immediate reply. Day 1: check-in. Day 3: seasonal tip. Day 7: last question. Day 10: competitor warning. Day 14: final offer. Stops the moment they book or say stop.",
    realExample:
      "Reynolds' 14-day drip converted 11 leads that had gone silent. Average value: $420. $4,620 in recovered revenue.",
    ui: (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Follow-Up Sequence</span>
          <span className="text-xs text-gray-400">Mike Torres · Day 7 of 14</span>
        </div>
        <div className="p-5 space-y-2.5">
          {[
            { day: "Day 0",  label: "Immediate reply",    status: "sent",    note: "Opened" },
            { day: "Day 1",  label: "Check-in",           status: "sent",    note: "Replied" },
            { day: "Day 3",  label: "Seasonal tip",       status: "sent",    note: "Clicked" },
            { day: "Day 7",  label: "Last question",      status: "active",  note: "Sending now" },
            { day: "Day 10", label: "Competitor warning", status: "pending", note: "Pending" },
            { day: "Day 14", label: "Final offer",        status: "pending", note: "Pending" },
          ].map((step) => (
            <div key={step.day} className="flex items-center gap-3 text-xs">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  step.status === "sent"
                    ? "bg-emerald-500"
                    : step.status === "active"
                    ? "bg-gray-900"
                    : "bg-gray-100"
                }`}
              >
                {step.status === "sent" ? (
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                ) : step.status === "active" ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                ) : null}
              </div>
              <span className={`w-12 shrink-0 font-medium ${step.status === "pending" ? "text-gray-300" : "text-gray-500"}`}>
                {step.day}
              </span>
              <span className={`flex-1 ${step.status === "pending" ? "text-gray-300" : "text-gray-700"}`}>
                {step.label}
              </span>
              <span
                className={`text-[10px] font-semibold ${
                  step.status === "sent"
                    ? "text-emerald-600"
                    : step.status === "active"
                    ? "text-gray-900"
                    : "text-gray-300"
                }`}
              >
                {step.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "Reputation Director",
    description:
      "Sends a review request SMS 2 hours after job complete. Google reviews directly impact both your local Google ranking and your AI citation count. Monitors Google and Yelp, drafts responses in your voice, and alerts you immediately when a negative review hits.",
    realExample:
      "Reynolds went from 47 Google reviews (3.8★) to 89 reviews (4.7★) in 60 days. Their Google Maps ranking improved from position 7 to position 2 in their area.",
    ui: (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Review Inbox</span>
          <span className="text-xs text-gray-400">2 new</span>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="p-5">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-900">David Chen</p>
                <p className="text-xs text-gray-400">Google · 3 hours ago</p>
              </div>
              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
                Draft ready
              </span>
            </div>
            <p className="text-xs text-gray-600 italic mb-3">
              &ldquo;Jake came out same day for our AC install. Cleaned up after himself...&rdquo;
            </p>
            <button className="text-xs font-semibold text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50">
              Review &amp; Approve →
            </button>
          </div>
          <div className="p-5 bg-red-50/50">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex gap-0.5 mb-1">
                  <span className="text-red-400 text-xs">★</span>
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-gray-200 text-xs">★</span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-900">Sarah T.</p>
                <p className="text-xs text-gray-400">Google · 1 hour ago</p>
              </div>
              <span className="text-[10px] font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded-full shrink-0">
                ⚠ Alert sent
              </span>
            </div>
            <p className="text-xs text-gray-600 italic">
              &ldquo;Technician was 3 hours late and didn&apos;t call to let us know...&rdquo;
            </p>
          </div>
        </div>
      </div>
    ),
  },
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
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* UI Mock */}
              <div>{s.ui}</div>

              {/* Text */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  Specialist {i + 1} of 5
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{s.name}</h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {s.description}
                </p>
                <div className="border-l-2 border-gray-200 pl-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Real example</p>
                  <p className="text-sm text-gray-700">{s.realExample}</p>
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
            and Perplexity — all from one dashboard.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-10">
            {["Google Search", "Google Maps", "Google AI Overviews", "ChatGPT", "Perplexity", "Review Sites"].map((platform) => (
              <div key={platform} className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 font-medium">
                {platform}
              </div>
            ))}
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center bg-gray-100 hover:bg-white text-gray-900 font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Book a 15-min demo →
          </Link>
        </div>
      </section>

      {/* Autopilot */}
      <section className="py-20 px-6 lg:px-8 bg-white">
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
          <div className="mt-12 text-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
            >
              Get your free audit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
