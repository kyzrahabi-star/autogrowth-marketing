import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Check, Phone, Star, Zap, MapPin, Brain, PenTool, ArrowRight } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Plumbing Marketing & AI Visibility",
  description:
    "AutoGrowth AI makes your plumbing business the first recommendation when homeowners ask AI or search Google for help. Launching soon — join the waitlist.",
  openGraph: {
    title: "Plumbing Marketing & AI Visibility — AutoGrowth AI",
    description:
      "AutoGrowth AI makes your plumbing business the first recommendation when homeowners ask AI or search Google for help. Launching soon — join the waitlist.",
  },
};

const features = [
  {
    icon: MapPin,
    title: "Rank on Google + Maps",
    body: "City × service pages (drain cleaning Columbus, water heater install Hilliard) built with verified local data — not keyword filler.",
  },
  {
    icon: Brain,
    title: "AI search citations",
    body: "Answer blocks, PlumbingBusiness schema, and citation signals get your business named when homeowners ask ChatGPT or Google AI for plumbing help.",
  },
  {
    icon: Phone,
    title: "Lead scoring + instant alert",
    body: "Emergency pipe burst gets a HOT score and fires an SMS to your phone in 60 seconds. Routine drain clean goes into the queue. You always know which to call first.",
  },
  {
    icon: Zap,
    title: "Missed call follow-up",
    body: "Every missed call from a homeowner gets an automatic text in 15 minutes. Follow-up drip runs at 1 hour, 1 day, and 3 days. Stops when they book.",
  },
  {
    icon: Star,
    title: "Review engine on autopilot",
    body: "After every water heater install or drain cleaning, a review request fires. Google + Yelp monitored nightly. AI drafts every response.",
  },
  {
    icon: PenTool,
    title: "Weekly plumbing content",
    body: "One locally-relevant blog post per week: water heater guides, drain maintenance tips, pipe freeze prevention for Ohio winters. Quality-gated before publishing.",
  },
];

export default function PlumbingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Coming Soon Banner */}
      <div className="bg-blue-600 px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="bg-white text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
            Coming Soon
          </span>
          <span className="text-blue-100">
            Plumbing is launching soon — be first to know when we go live.
          </span>
          <a
            href="#waitlist"
            className="text-white font-semibold underline underline-offset-4 whitespace-nowrap hover:text-blue-100"
          >
            Join the waitlist →
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 mt-8">
            <Wrench className="w-3.5 h-3.5" />
            Built for plumbing contractors
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-5 leading-tight">
            The Jobs You Want.
            <br />
            <span className="text-blue-500">The Calls That Matter.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            AutoGrowth AI makes your plumbing business the first recommendation
            when homeowners ask AI or search Google for help.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Join the Plumbing Waitlist
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-zinc-900 py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { stat: "24/7", label: "AI answers every inbound call" },
            { stat: "60s", label: "hot lead alert to your phone" },
            { stat: "8–12", label: "new Google reviews per month" },
            { stat: "1", label: "blog post published per week" },
          ].map(({ stat, label }) => (
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
              Everything you need to stay fully booked
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Site, SEO, AI search, lead scoring, follow-up, reviews, and
              weekly content — running automatically while you run jobs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plumbing-specific examples */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Built for plumbing jobs — not generic marketing
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                service: "Emergency pipe burst",
                example: "Score: 97 (HOT) — SMS to owner in 42 seconds",
              },
              {
                service: "Water heater install",
                example: "Score: 79 (WARM) — Email alert, follow-up at 1hr",
              },
              {
                service: "Drain cleaning",
                example: "Score: 52 (WARM) — Email notification sent",
              },
              {
                service: "Routine inspection",
                example: "Score: 23 (COOL) — Logged, added to nurture",
              },
            ].map(({ service, example }) => (
              <div
                key={service}
                className="bg-white rounded-xl p-5 border border-gray-200"
              >
                <div className="font-semibold text-gray-900 text-sm mb-1">{service}</div>
                <div className="text-xs text-emerald-600">{example}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Wrench className="w-3.5 h-3.5" />
            Plumbing — Launching Soon
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Be first when we launch
          </h2>
          <p className="text-gray-600 mb-8">
            Plumbing is in active development. Join the waitlist and get early
            access — plus a free AI visibility audit when we go live.
          </p>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <WaitlistForm vertical="plumbing" />
          </div>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-500 mt-4">
            {["No commitment", "Free audit at launch", "Cancel anytime"].map((item) => (
              <li key={item} className="flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-zinc-900 py-16 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            HVAC is live now. Plumbing is next.
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            While you wait, see the full AutoGrowth AI platform and what it does
            for service contractors.
          </p>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-white border border-white/20 hover:border-white/40 font-medium px-6 py-3 rounded-xl text-sm transition-colors"
          >
            See how AutoGrowth AI works
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
