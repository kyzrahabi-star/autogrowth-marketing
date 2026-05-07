import type { Metadata } from "next";
import Link from "next/link";
import { Target, Check, Brain, Zap, ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Lead Scoring — AutoGrowth AI",
  description:
    "AutoGrowth's Lead Agent uses Claude AI to score every inbound lead for urgency and value — so you call back the emergency AC repair before the tune-up inquiry.",
};

const scoringSignals = [
  { signal: "Service type", detail: "Emergency repair scores higher than maintenance check" },
  { signal: "Urgency language", detail: "'No AC in 95° heat' vs. 'just curious about pricing'" },
  { signal: "Job value", detail: "Replacement/install opportunities flagged as high-value" },
  { signal: "Time of submission", detail: "After-hours emergency leads get priority routing" },
  { signal: "Lead source", detail: "Organic search vs. referral vs. direct" },
  { signal: "Message sentiment", detail: "Frustrated language = higher urgency score" },
];

export default function LeadScoringPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Target className="w-3.5 h-3.5" />
            Lead Agent
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Know which leads to call back first
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            AutoGrowth&apos;s Lead Agent reads every inbound lead with Claude
            AI and scores it — so you always call the emergency repair before
            the routine tune-up inquiry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              Get a Free Audit →
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

      {/* Score example */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            What a scored lead looks like
          </h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-900 px-5 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-gray-400 text-xs font-mono">AutoGrowth Lead Agent</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 w-28 shrink-0">Lead</span>
                <span className="text-gray-900">Sarah M. — AC not working, 3 kids in house</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 w-28 shrink-0">Service</span>
                <span className="text-gray-900">Emergency AC Repair</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 w-28 shrink-0">Score</span>
                <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 font-semibold px-3 py-1 rounded-full text-xs">
                  <Zap className="w-3 h-3" />
                  HIGH — call now
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 w-28 shrink-0 pt-0.5">Rationale</span>
                <span className="text-gray-700">Emergency service type + family safety concern + summer peak. Estimated job value $300–$800. Respond within 5 minutes.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 w-28 shrink-0">Action</span>
                <span className="text-emerald-600 font-semibold">SMS sent to owner · 60s elapsed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signals */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-semibold mb-3">
              <Brain className="w-4 h-4" />
              Powered by Claude AI
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              6 signals evaluated on every lead
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {scoringSignals.map(({ signal, detail }) => (
              <div
                key={signal}
                className="bg-white rounded-xl p-5 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} />
                  <span className="font-semibold text-gray-900 text-sm">{signal}</span>
                </div>
                <p className="text-xs text-gray-500 ml-6">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp className="w-8 h-8 text-emerald-500 mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            One installation job per month covers the cost
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            If lead scoring helps you capture one extra $5,000–$8,000 HVAC
            installation by responding in under 5 minutes instead of hours,
            AutoGrowth pays for itself in the first week.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">78%</div>
              <div className="text-xs text-gray-500 mt-1">conversion lift with sub-5-min response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">60s</div>
              <div className="text-xs text-gray-500 mt-1">avg alert to owner on high-intent lead</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-xs text-gray-500 mt-1">of leads scored and logged — no exceptions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Included in every plan
          </h2>
          <p className="text-gray-400 mb-8">
            Lead scoring is baked into every AutoGrowth tier. No add-ons, no upgrades.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            See Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
