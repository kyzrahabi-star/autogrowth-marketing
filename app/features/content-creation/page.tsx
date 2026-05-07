import type { Metadata } from "next";
import Link from "next/link";
import { PenTool, Check, Brain, MapPin, ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Content Creation — AutoGrowth AI",
  description:
    "AutoGrowth's Content Agent publishes one AEO-structured HVAC blog post per week — locally relevant, quality-gated, and built to rank on Google and get cited by AI search engines.",
};

const contentFeatures = [
  "One HVAC blog post per week, automatically",
  "Local context: climate, landmarks, seasonal demand",
  "AEO-structured answer blocks for AI search citations",
  "HVACBusiness + Article schema on every post",
  "Author byline with real E-E-A-T credentials",
  "40%+ unique content gate — no keyword spam",
  "600+ word minimum per post",
  "Internal links to your service + city pages",
  "Sitemap updated on every publish",
  "Lighthouse 90+ before going live",
];

const sampleTopics = [
  "Why Columbus HVAC Systems Work Harder in July (And What to Do About It)",
  "Emergency AC Repair vs. Replacement: What Columbus Homeowners Should Know",
  "How ChatGPT Recommends HVAC Contractors — And How to Be the One It Mentions",
  "Heat Pump vs. Central AC in Ohio: The 2026 Homeowner's Guide",
  "What Happens If You Skip Your Annual HVAC Tune-Up in Houston",
  "5 Signs Your Furnace Won't Last Another Columbus Winter",
];

export default function ContentCreationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 lg:px-8 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <PenTool className="w-3.5 h-3.5" />
            Content Agent
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Fresh HVAC content, every week, on autopilot
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Your Content Agent publishes one locally-relevant, AEO-structured
            HVAC blog post per week — built to rank on Google and get cited by
            ChatGPT, Perplexity, and Google AI Overviews.
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

      {/* Problem */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The content problem every contractor has
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            You know you should be posting blog content. You never have time.
            And when you do, it ends up a thin 300-word post that Google ignores
            and AI engines never cite.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { label: "Time", before: "3-4 hours per post", after: "0 — fully automated" },
              { label: "Quality gate", before: "None — hope it ranks", after: "Lighthouse 90+, uniqueness ≥40%" },
              { label: "AI citations", before: "Never structured for AI", after: "Answer blocks + schema built in" },
            ].map(({ label, before, after }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">{label}</div>
                <div className="text-sm text-red-500 line-through mb-1">{before}</div>
                <div className="text-sm text-emerald-600 font-medium">{after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes content different */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-semibold mb-3">
              <Brain className="w-4 h-4" />
              AEO-native by design
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Content built to win on every platform
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: MapPin,
                title: "Real local context",
                body: "City climate data, seasonal demand patterns, local landmarks — not generic 'HVAC tips' that could be published anywhere.",
              },
              {
                icon: Brain,
                title: "Answer-first structure",
                body: "Every post opens with a 40-80 word direct answer — the exact format AI engines pull into Overviews and citations.",
              },
              {
                icon: Check,
                title: "Quality gate before publish",
                body: "Uniqueness ≥40%, word count ≥600, valid schema, Lighthouse ≥90. Fails the gate? Stays in qa_pending. No exceptions.",
              },
              {
                icon: TrendingUp,
                title: "Schema + E-E-A-T attribution",
                body: "Article schema, HVACBusiness schema, and a real author byline with credentials on every post. Google and AI engines need this.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center mb-3">
                  <Icon className="w-4.5 h-4.5 text-emerald-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample topics */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Sample post topics
          </h2>
          <div className="space-y-3">
            {sampleTopics.map((topic) => (
              <div
                key={topic}
                className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100"
              >
                <PenTool className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            Topics are generated from your service area, services, and seasonal context — unique to your market.
          </p>
        </div>
      </section>

      {/* Feature checklist */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What&apos;s included
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {contentFeatures.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100"
              >
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            52 quality posts per year, automatically
          </h2>
          <p className="text-gray-400 mb-8">
            Every AutoGrowth tier includes the Content Agent. One post every
            week, every year, while you run jobs.
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
