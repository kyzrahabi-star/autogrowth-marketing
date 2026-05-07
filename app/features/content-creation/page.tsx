import type { Metadata } from "next";
import Link from "next/link";
import { PenTool, Check, Brain, MapPin, ArrowRight, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Content Creation — AutoGrowth AI",
  description:
    "Weekly blog posts and video scripts written like a real technician, not a marketing bot. Optimized for Google SEO and AI search citations.",
};

const qualityGate = [
  "Word count ≥800 words",
  "Unique content ≥40% (no keyword spam)",
  "2+ local references (city, neighborhood, landmark)",
  "Technical accuracy (real trade terminology)",
  "Answer block present (40-80 word direct answer at top)",
  "Schema markup valid (Article + LocalBusiness)",
  "Author attribution with credentials included",
  "Internal links to service + city pages",
  "Lighthouse score ≥90",
  "No AI-sounding filler or generic phrases",
];

export default function ContentCreationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <PenTool className="w-3.5 h-3.5" />
            Content Agent
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-5">
            Content That Gets You Found —{" "}
            <span className="text-violet-500">By Google AND AI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Weekly blog posts and video scripts written like a real technician,
            not a marketing bot. Optimized for Google SEO and AI search
            citations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              See Sample Content — Book a Demo
            </Link>
            <Link
              href="/audit"
              className="text-gray-700 hover:text-gray-900 font-medium text-base underline underline-offset-4"
            >
              Get a free audit first
            </Link>
          </div>
        </div>
      </section>

      {/* Weekly deliverables */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              What you get every week
            </h2>
            <p className="text-gray-500 text-sm">
              Published automatically. Quality-gated. No draft reviews required from you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-violet-600" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">1 Blog Post</div>
                  <div className="text-xs text-gray-500">800–1,200 words</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Local context: climate, landmarks, seasonal demand",
                  "AEO-structured answer block at the top",
                  "HVACBusiness + Article schema on every post",
                  "Real author byline with E-E-A-T credentials",
                  "Internal links to your service + city pages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Video className="w-5 h-5 text-violet-600" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">4 Video Scripts</div>
                  <div className="text-xs text-gray-500">TikTok, Reels & Shorts format</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "30–60 second hook-first scripts",
                  "Real trade jargon, not marketing speak",
                  "Service spotlight, tip, FAQ, and seasonal format",
                  "On-screen text cues included",
                  "Optimized for contractor-specific audiences",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality gate */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-semibold mb-3">
              <Check className="w-4 h-4" strokeWidth={2.5} />
              10-point quality gate
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Every piece passes this before it publishes
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Fails the gate? It stays in review. No exceptions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {qualityGate.map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-gray-200"
              >
                <span className="text-emerald-500 font-bold text-xs shrink-0 mt-0.5 w-4">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How topics are chosen */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-semibold mb-3">
              <Brain className="w-4 h-4" />
              AI Search Analyst
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              How topics are chosen
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              We don&apos;t guess. Our AI Search Analyst scans 200+ queries every
              week to find the gaps in your citations. Content targets those gaps
              first.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Scan your citation footprint",
                body: "Which services are you being cited for on ChatGPT, Perplexity, and Google AI? Which ones are missing?",
              },
              {
                step: "2",
                title: "Identify the citation gaps",
                body: "\"Heat pump service\" shows up 0 times for your market. \"Furnace repair\" shows up 3 times. Heat pump content goes first.",
              },
              {
                step: "3",
                title: "Match to local seasonal context",
                body: "Late June content focuses on AC. Late October pushes furnace tune-ups. March pushes heat pump prep. Seasonal relevance signals freshness.",
              },
              {
                step: "4",
                title: "Generate, gate, publish",
                body: "Content passes the 10-point gate or stays in review. Published posts get sitemap entries and immediate schema validation.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-5 bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="w-7 h-7 rounded-full bg-violet-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {step}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{title}</div>
                  <div className="text-xs text-gray-600">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example post */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-violet-600 text-sm font-semibold mb-3">
              <MapPin className="w-4 h-4" />
              Example — Reynolds Heating & Cooling, Columbus OH
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              See what the content actually looks like
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 bg-gray-50">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Published Jun 12, 2026</div>
              <h3 className="font-bold text-gray-900 text-lg">
                Your AC Stopped Cooling in Columbus: What It Actually Means
              </h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-[10px]">
                  MR
                </div>
                Mark Reynolds, NATE-Certified · Reynolds Heating & Cooling
              </div>
            </div>
            <div className="px-6 py-5 space-y-4 text-sm text-gray-700 leading-relaxed">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wide">Answer Block</div>
                <p>
                  If your AC is running but not cooling your Columbus home, the most
                  common causes are a dirty air filter, low refrigerant from a slow leak,
                  or a failing compressor. In central Ohio&apos;s summer heat (often 90°F+),
                  these problems escalate fast — especially in older systems. A diagnostic
                  visit typically runs $89–$150 and identifies the issue the same day.
                </p>
              </div>
              <p>
                It&apos;s July in Columbus. Your thermostat is set to 72°F but it&apos;s
                84° inside. The AC is running constantly — but it isn&apos;t cooling. You
                have three possible culprits, and which one it is determines whether
                you&apos;re looking at a $40 fix or a $4,000 decision...
              </p>
              <div className="text-gray-400 text-xs italic text-center py-2">
                — Article continues (847 words) —
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            52 quality pieces per year, automatically
          </h2>
          <p className="text-gray-400 mb-8">
            One blog post and four video scripts every week, every year — while
            you run jobs. Included in every AutoGrowth tier.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-white text-gray-900 font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              See Sample Content — Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-xl text-base transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
