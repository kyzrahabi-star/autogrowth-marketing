import type { Metadata } from "next";
import Link from "next/link";
import { Home, Check, Phone, Star, Zap, MapPin, Brain, PenTool, ArrowRight } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Roofing Marketing & AI Visibility — AutoGrowth AI",
  description:
    "Storm season or slow season — AutoGrowth keeps your roofing business visible across Google and every AI search engine. Launching soon — join the waitlist.",
};

const features = [
  {
    icon: MapPin,
    title: "Rank on Google + Maps",
    body: "City × service pages (roof replacement Columbus, storm damage repair Dublin) built with verified local data — ranked and maintained.",
  },
  {
    icon: Brain,
    title: "AI search citations",
    body: "Answer blocks, RoofingContractor schema, and citation signals get your business named when homeowners ask ChatGPT or Google AI after a storm.",
  },
  {
    icon: Phone,
    title: "Lead scoring + instant alert",
    body: "Post-storm emergency call gets a HOT score and fires an SMS in 60 seconds. Insurance estimate request gets a WARM score with same-day follow-up.",
  },
  {
    icon: Zap,
    title: "Missed call follow-up",
    body: "Every missed call gets an automatic text in 15 minutes. Follow-up drip runs at 1 hour, 1 day, and 3 days. Storm season volume handled automatically.",
  },
  {
    icon: Star,
    title: "Review engine on autopilot",
    body: "After every roof replacement or inspection, a review request fires automatically. Google + Yelp monitored nightly. AI drafts every response.",
  },
  {
    icon: PenTool,
    title: "Weekly roofing content",
    body: "One locally-relevant blog post per week: storm damage guides, insurance claim tips, roof lifespan advice. Quality-gated before publishing.",
  },
];

export default function RoofingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Coming Soon Banner */}
      <div className="bg-purple-600 px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="bg-white text-purple-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
            Coming Soon
          </span>
          <span className="text-purple-100">
            Roofing is launching soon — be first to know when we go live.
          </span>
          <a
            href="#waitlist"
            className="text-white font-semibold underline underline-offset-4 whitespace-nowrap hover:text-purple-100"
          >
            Join the waitlist →
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white pt-16 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 mt-8">
            <Home className="w-3.5 h-3.5" />
            Built for roofing contractors
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-5 leading-tight">
            More Roofs.
            <br />
            <span className="text-purple-500">Maximum Revenue.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Storm season or slow season — AutoGrowth keeps your roofing business
            visible across Google and every AI search engine.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Join the Roofing Waitlist
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-zinc-900 py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { stat: "24/7", label: "AI answers every inbound call" },
            { stat: "60s", label: "storm lead alert to your phone" },
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
              Site, SEO, AI search, lead scoring, follow-up, reviews, and weekly
              content — running automatically while you run jobs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-purple-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing-specific examples */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Built for roofing jobs — especially storm season
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                service: "Emergency storm damage (leak, missing shingles)",
                example: "Score: 92 (HOT) — SMS to owner in 51 seconds",
              },
              {
                service: "Full roof replacement",
                example: "Score: 81 (HOT) — SMS + email, follow-up at 1hr",
              },
              {
                service: "Insurance claim inspection",
                example: "Score: 63 (WARM) — Email notification sent",
              },
              {
                service: "Annual roof inspection",
                example: "Score: 29 (COOL) — Logged, added to nurture",
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
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Home className="w-3.5 h-3.5" />
            Roofing — Launching Soon
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Be first when we launch
          </h2>
          <p className="text-gray-600 mb-8">
            Roofing is in active development. Join the waitlist and get early
            access — plus a free AI visibility audit when we go live.
          </p>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <WaitlistForm vertical="roofing" />
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
            HVAC is live now. Roofing is next.
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            While you wait, see the full AutoGrowth platform and what it does
            for service contractors.
          </p>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-white border border-white/20 hover:border-white/40 font-medium px-6 py-3 rounded-xl text-sm transition-colors"
          >
            See how AutoGrowth works
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
