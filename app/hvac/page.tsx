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
  PenTool,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC Marketing & AI Visibility — AutoGrowth AI",
  description:
    "AutoGrowth gets your HVAC business recommended by Google AND AI search — so homeowners call you first, not your competitors. Full schedules, no matter the season.",
};

const features = [
  {
    icon: MapPin,
    title: "Rank on Google + Maps",
    body: "City × service pages (AC repair Columbus, furnace install Hilliard) built with verified local data — not keyword filler. Ranks and stays ranked.",
  },
  {
    icon: Brain,
    title: "AI search citations",
    body: "Answer blocks, HVACBusiness schema, and citation signals get your business named when homeowners ask ChatGPT or Google AI for HVAC help.",
  },
  {
    icon: Phone,
    title: "Lead scoring + 60-second alert",
    body: "Emergency AC call in 95° heat? You get an SMS in 60 seconds with the score, service type, and a one-tap callback link.",
  },
  {
    icon: Zap,
    title: "Missed call follow-up",
    body: "Every missed call gets an automatic text in 15 minutes. Follow-up drip runs at 1 hour, 1 day, and 3 days. Stops when they book.",
  },
  {
    icon: Star,
    title: "Review engine on autopilot",
    body: "After every furnace install or AC repair, a review request fires automatically. Google + Yelp monitored nightly. AI drafts every response.",
  },
  {
    icon: PenTool,
    title: "Weekly HVAC content",
    body: "One locally-relevant blog post per week: heat pump guides, Columbus climate tips, emergency repair checklists. Quality-gated before publishing.",
  },
];

export default function HvacPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Flame className="w-3.5 h-3.5" />
            Built for HVAC contractors
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-5 leading-tight">
            Full Schedules.
            <br />
            No Matter the Season.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            AutoGrowth gets your HVAC business recommended by Google AND AI
            search — so homeowners call you first, not your competitors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
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

      {/* Problem — AI search screenshot */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              31 HVAC contractors in Columbus are getting recommended by AI.
              <br />
              <span className="text-red-500">You&apos;re not one of them.</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI Search Analyst scans 200+ queries every week. Here&apos;s
              what homeowners see right now when they ask for help:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* ChatGPT mock */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">AI</span>
                </div>
                <span className="text-gray-300 text-xs">
                  ChatGPT — &quot;best HVAC company Columbus&quot;
                </span>
              </div>
              <div className="p-5 bg-white text-sm">
                <p className="text-gray-500 text-xs mb-3">
                  Here are some highly recommended HVAC companies in Columbus, OH:
                </p>
                <div className="space-y-2.5">
                  {[
                    { name: "Apex Heating & Cooling", stars: "4.9 ★", reviews: "312" },
                    { name: "Columbus Climate Control", stars: "4.8 ★", reviews: "287" },
                    { name: "ProComfort HVAC", stars: "4.7 ★", reviews: "205" },
                  ].map(({ name, stars, reviews }) => (
                    <div key={name} className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{name}</span>
                      <span className="text-gray-400 text-xs">
                        {stars} ({reviews})
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-red-500 font-medium flex items-center gap-1.5">
                  <span>⚠</span> Your business is not in this answer
                </div>
              </div>
            </div>

            {/* Google AI Overview mock */}
            <div className="rounded-2xl border border-blue-100 overflow-hidden shadow-sm">
              <div className="bg-blue-600 px-4 py-3 flex items-center gap-2">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">G</span>
                </div>
                <span className="text-blue-100 text-xs">
                  Google AI Overview — &quot;AC repair Columbus OH&quot;
                </span>
              </div>
              <div className="p-5 bg-white text-sm">
                <p className="text-gray-500 text-xs mb-3">
                  Based on reviews and local reputation, these Columbus HVAC
                  contractors are highly rated:
                </p>
                <div className="space-y-2.5">
                  {[
                    "Reliable Air Columbus",
                    "Comfort Systems Ohio",
                    "HomeStar HVAC Services",
                  ].map((name) => (
                    <div key={name} className="flex items-center gap-2">
                      <span className="text-blue-500 text-xs">▶</span>
                      <span className="font-medium text-gray-900">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-red-500 font-medium flex items-center gap-1.5">
                  <span>⚠</span> Your business is not in this answer
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            AutoGrowth rebuilds your online presence so you get into these
            answers — and stay there.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-zinc-900 py-14 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { stat: "15×", label: "projected avg. ROI for HVAC contractors" },
            { stat: "$0", label: "in extra ad spend required" },
            { stat: "24/7", label: "AI follow-up on every missed call" },
            { stat: "60s", label: "hot lead alert to your phone" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat}
              </div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-xs mt-6">
          ROI figure is projected based on average HVAC job values and lead conversion lift. Results vary.
        </p>
      </section>

      {/* Features */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              One platform. Every growth channel.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Site, SEO, AI search, leads, follow-up, reviews, and weekly
              content — running automatically so you can focus on running jobs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-4">
                  <Icon
                    className="w-5 h-5 text-emerald-500"
                    strokeWidth={1.5}
                  />
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
                body: "Service area, services offered, license info, and brand. That's it — we handle the rest.",
              },
              {
                step: "2",
                title: "We build your ranking presence",
                body: "City × service pages, answer blocks, schema markup, author profiles — all QA'd and published to your custom domain.",
              },
              {
                step: "3",
                title: "Agents go live",
                body: "Lead scoring, missed-call follow-up, review requests, and weekly content all activate on your account.",
              },
              {
                step: "4",
                title: "You watch the calls come in",
                body: "Your dashboard shows visibility scores, lead volume, review velocity, and content published. We run everything. You run jobs.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
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

      {/* Testimonial */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-orange-50 rounded-3xl p-10 border border-orange-100 text-center">
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-orange-400 fill-orange-400"
                />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
              &ldquo;Since we started with AutoGrowth, our phones ring
              differently. Before, we&apos;d miss calls and lose jobs to whoever
              answered first. Now our leads come pre-scored, our reviews are
              climbing toward 4.9 stars, and ChatGPT actually mentions us when
              people ask about HVAC in Columbus.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-sm">
                MR
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">
                  Mark Reynolds
                </div>
                <div className="text-gray-500 text-xs">
                  Reynolds Heating & Cooling — Columbus, OH
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing tease */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Starts at $1,497/mo
          </h2>
          <p className="text-gray-600 mb-6">
            One install job covers the whole month. Every tier includes every
            agent — no feature gating.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Link
              href="/audit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors"
            >
              Get your free audit first →
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm px-7 py-3.5 rounded-xl border border-gray-200 transition-colors"
            >
              See full pricing
            </Link>
          </div>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-500">
            {[
              "No long-term contracts",
              "No credit card to start",
              "Setup in 2 weeks",
            ].map((item) => (
              <li key={item} className="flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-zinc-900 py-20 px-6 lg:px-8">
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
            Get Your Free HVAC Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
