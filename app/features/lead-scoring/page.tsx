import type { Metadata } from "next";
import Link from "next/link";
import { Target, ArrowRight, Zap, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Estimate Recovery Engine for HVAC Companies",
  description:
    "Chase the 60% of HVAC quotes that never close. Lead scoring 0-100 in under 60 seconds, 14-day automated follow-up sequences, instant SMS alerts on hot leads.",
  openGraph: {
    title: "Estimate Recovery Engine for HVAC Companies — AutoGrowth AI",
    description:
      "Chase the 60% of HVAC quotes that never close. Lead scoring 0-100 in under 60 seconds, 14-day automated follow-up sequences, instant SMS alerts on hot leads.",
  },
};

const rubric = [
  { label: "Urgency", max: 30, example: 28, color: "bg-red-400", detail: "Emergency signals, safety concerns, time pressure" },
  { label: "Service Value", max: 25, example: 22, color: "bg-orange-400", detail: "Replacement/install > repair > maintenance" },
  { label: "Location", max: 20, example: 20, color: "bg-blue-400", detail: "In service area, distance from base, drive time" },
  { label: "Intent", max: 15, example: 13, color: "bg-violet-400", detail: "Specific problem vs. general inquiry" },
  { label: "Completeness", max: 10, example: 0, color: "bg-gray-400", detail: "Name, address, phone all provided" },
];

const classes = [
  {
    label: "HOT",
    range: "80–100",
    color: "bg-red-100 text-red-700 border-red-200",
    dot: "bg-red-500",
    actions: ["Instant SMS to owner", "Email alert", "Telegram ping"],
    description: "Emergency. Call back within 5 minutes.",
  },
  {
    label: "WARM",
    range: "50–79",
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    dot: "bg-yellow-500",
    actions: ["Email alert", "Telegram ping"],
    description: "High value. Follow up within the hour.",
  },
  {
    label: "COOL",
    range: "20–49",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
    actions: ["Email notification"],
    description: "Standard lead. Return call same day.",
  },
  {
    label: "COLD",
    range: "0–19",
    color: "bg-gray-100 text-gray-600 border-gray-200",
    dot: "bg-gray-400",
    actions: ["Logged only"],
    description: "Low intent. Add to nurture sequence.",
  },
];

export default function LeadScoringPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Target className="w-3.5 h-3.5" />
            Lead Agent
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-5">
            Estimate Recovery Engine
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Chase the 60% of HVAC quotes that never close. Every lead scored
            0–100 in under 60 seconds, with a 14-day follow-up sequence on
            unsold estimates that stops the moment they book.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              Get Your Free Audit →
            </Link>
            <Link
              href="/demo"
              className="text-gray-700 hover:text-gray-900 font-medium text-base underline underline-offset-4"
            >
              See a live demo
            </Link>
          </div>
        </div>
      </section>

      {/* Scoring rubric */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              The 100-point scoring rubric
            </h2>
            <p className="text-gray-500 text-sm">
              Five dimensions evaluated on every lead — in under 60 seconds.
            </p>
          </div>
          <div className="space-y-5">
            {rubric.map(({ label, max, example, color, detail }) => (
              <div key={label}>
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm mr-2">{label}</span>
                    <span className="text-gray-400 text-xs">{detail}</span>
                  </div>
                  <span className="text-sm font-mono text-gray-600">
                    {example}/{max}
                  </span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${color} rounded-full transition-all`}
                    style={{ width: `${(example / max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <span className="font-bold text-gray-900">Total Score</span>
              <span className="font-bold text-gray-900 text-lg font-mono">
                {rubric.reduce((s, r) => s + r.example, 0)}/100
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Classification */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              What happens after scoring
            </h2>
            <p className="text-gray-500 text-sm">
              Classification determines the alert chain. Every lead gets an
              appropriate response — automatically.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {classes.map(({ label, range, color, dot, actions, description }) => (
              <div
                key={label}
                className={`rounded-2xl p-6 border ${color}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${dot}`} />
                  <span className="font-bold text-base">{label}</span>
                  <span className="font-mono text-sm opacity-70">({range})</span>
                </div>
                <p className="text-sm mb-3 opacity-80">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {actions.map((a) => (
                    <div key={a} className="flex items-center gap-1 text-xs bg-white/60 px-2.5 py-1 rounded-full">
                      {a.includes("SMS") && <MessageSquare className="w-3 h-3" />}
                      {a.includes("Email") && <Mail className="w-3 h-3" />}
                      {a.includes("Telegram") && <Zap className="w-3 h-3" />}
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real example */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Real example
            </h2>
            <p className="text-gray-500 text-sm">
              Here&apos;s what a scored lead looks like in the dashboard.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-900 px-5 py-3 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-gray-400 text-xs font-mono">
                AutoGrowth AI Lead Agent — #2847
              </span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3">
              {[
                { key: "Lead", value: "Sarah Mitchell — AC not cooling, grinding noise, baby at home" },
                { key: "Service", value: "Emergency AC Repair" },
                { key: "Location", value: "1847 Elm St, Columbus OH — 4.2 mi from base" },
              ].map(({ key, value }) => (
                <div key={key} className="flex items-start gap-3">
                  <span className="text-gray-400 w-24 shrink-0">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <span className="text-gray-400 w-24 shrink-0">Score</span>
                <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-xs border border-red-200">
                  <Zap className="w-3 h-3" />
                  83 — HOT
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 w-24 shrink-0 pt-0.5">Breakdown</span>
                <span className="text-gray-600 text-xs">
                  Urgency 28/30 · Service Value 22/25 · Location 20/20 · Intent 13/15 · Completeness 0/10
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 w-24 shrink-0 pt-0.5">Rationale</span>
                <span className="text-gray-700 text-xs">
                  Emergency AC failure + baby at home in summer heat. Estimated job value $400–$1,200. Possible refrigerant or compressor issue. Respond within 5 minutes.
                </span>
              </div>
              <div className="flex items-center gap-3 border-t border-gray-200 pt-3">
                <span className="text-gray-400 w-24 shrink-0">Action</span>
                <span className="text-emerald-600 font-semibold text-xs">
                  SMS + email sent to owner · 47 seconds elapsed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow-up teaser */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-semibold mb-3">
            <Zap className="w-4 h-4" />
            What happens after scoring
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Scoring triggers automatic follow-up
          </h2>
          <p className="text-gray-600 mb-6">
            After a lead is scored, the Follow-Up Agent runs a 6-step drip over
            14 days — texts and emails timed to the lead&apos;s classification.
            HOT leads get immediate follow-up. WARM leads get next-day. COOL
            leads go into a standard nurture. All of it runs without you
            touching anything.
          </p>
          <Link
            href="/features/ai-receptionist"
            className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold underline underline-offset-4"
          >
            See the AI Receptionist + Follow-Up flow →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Included in every plan
          </h2>
          <p className="text-gray-400 mb-8">
            Lead scoring is baked into every AutoGrowth AI tier. No add-ons, no
            upgrades.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Get Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
