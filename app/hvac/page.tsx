import type { Metadata } from "next";
import Link from "next/link";
import {
  Flame,
  Check,
  TrendingUp,
  Phone,
  Star,
  Zap,
  MapPin,
  Brain,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AutoGrowth AI for HVAC Contractors — Dominate Google + AI Search",
  description:
    "AutoGrowth AI builds and runs your entire online presence — ranking your HVAC business on Google, Google Maps, ChatGPT, and Perplexity so every searcher finds you first.",
};

const painPoints = [
  "Homeowners ask ChatGPT 'best HVAC company near me' and you're not in the answer",
  "Google AI Overviews show your competitor's name — not yours",
  "You're spending $3-5k/month on leads that go nowhere",
  "Your website was last updated in 2019",
  "You miss 40% of inbound calls — and those leads go to whoever answers next",
];

const results = [
  { stat: "3–5×", label: "more inbound leads vs. before" },
  { stat: "$0", label: "in extra ad spend required" },
  { stat: "24/7", label: "AI follow-up on every missed call" },
  { stat: "60s", label: "to respond to a new hot lead" },
];

const features = [
  {
    icon: MapPin,
    title: "Citywide ranking machine",
    body: "We build city + service pages (AC repair Columbus, furnace installation Dublin) that rank on Google Maps and organic search — verified local data, not keyword spam.",
  },
  {
    icon: Brain,
    title: "AI search domination",
    body: "Structured answer blocks, HVACBusiness schema, and third-party citation building get your business cited by ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    icon: Phone,
    title: "Lead Agent + instant SMS",
    body: "Every form fill and call is scored for urgency and value. High-intent leads hit your phone within 60 seconds. No lead sits unanswered.",
  },
  {
    icon: Zap,
    title: "Missed call? Automatic follow-up",
    body: "Your Follow-Up Agent sends a text within 15 minutes of a missed call, then follows up at 1 hour, 1 day, and 3 days. Stops when they book.",
  },
  {
    icon: Star,
    title: "Review engine on autopilot",
    body: "After each job, your Reputation Agent sends a review request. It monitors Google and Yelp nightly and drafts AI responses to every review for your approval.",
  },
  {
    icon: TrendingUp,
    title: "Weekly HVAC content",
    body: "Your Content Agent publishes one new, locally-relevant blog post per week — AEO-structured, author-attributed, and quality-gated before publishing.",
  },
];

export default function HvacPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Flame className="w-3.5 h-3.5" />
            Built exclusively for HVAC contractors
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Every homeowner who searches{" "}
            <span className="text-orange-500">should find you first</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            AutoGrowth AI ranks your HVAC business on Google, Google Maps,
            ChatGPT, and Perplexity — then works every lead automatically so
            your phone keeps ringing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              Get Your Free HVAC Audit →
            </Link>
            <Link
              href="/demo"
              className="text-gray-700 hover:text-gray-900 font-medium text-base underline underline-offset-4 transition-colors"
            >
              See a live demo
            </Link>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Sound familiar?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            These are the problems every HVAC owner we talk to has.
          </p>
          <ul className="space-y-4">
            {painPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-5 py-4"
              >
                <span className="text-red-400 mt-0.5 text-lg leading-none shrink-0">✕</span>
                <span className="text-gray-700 text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Results bar */}
      <section className="bg-gray-900 py-14 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {results.map(({ stat, label }) => (
            <div key={label}>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              One platform. Every growth channel.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We handle the entire marketing operation — site, SEO, AI search,
              leads, follow-up, reviews, and content — so you can focus on
              running jobs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Up and running in 2 weeks
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Onboarding call (30 min)",
                body: "We gather your service area, services, license info, and brand. That's it.",
              },
              {
                step: "2",
                title: "Platform builds your presence",
                body: "We generate, QA, and publish your ranking site — city pages, service pages, answer blocks, schema markup, and author profiles.",
              },
              {
                step: "3",
                title: "Agents go live",
                body: "Lead scoring, follow-up drips, review requests, and weekly content all start running on your account.",
              },
              {
                step: "4",
                title: "You watch the calls come in",
                body: "Your dashboard shows visibility scores, lead volume, review velocity, and content published. We run everything. You run the jobs.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tease */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 text-center border border-emerald-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Starts at $1,497/mo
          </h2>
          <p className="text-gray-600 mb-6">
            One install job pays for the whole month. Every tier includes every
            agent — no feature gating.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Link
              href="/audit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors"
            >
              Get your free audit first →
            </Link>
            <Link
              href="/pricing"
              className="text-emerald-700 hover:text-emerald-800 font-medium text-sm px-7 py-3.5 rounded-xl border border-emerald-200 transition-colors"
            >
              See full pricing
            </Link>
          </div>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-500">
            {["No long-term contracts", "No credit card to start", "Setup in 2 weeks"].map(
              (item) => (
                <li key={item} className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-500" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to stop being invisible?
          </h2>
          <p className="text-gray-400 mb-8">
            Get a free audit of your current Google + AI visibility in 24 hours.
            No pitch. No credit card.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get My Free HVAC Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
