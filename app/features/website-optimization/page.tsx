import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Zap, Search, FileText, MousePointer, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Optimization — AutoGrowth AI",
  description:
    "AutoGrowth's AI fixes your HVAC website in days — schema markup, service pages, chatbot, booking, speed, and AI search citations. Included in every plan.",
};

const BEFORE_ITEMS = [
  "Generic one-page site",
  "No schema markup",
  "No service pages",
  "4.2 second load time",
  "No chat, no booking",
  "No reviews displayed",
  "Invisible to AI search",
];

const AFTER_ITEMS = [
  "Individual pages for AC repair, furnace, maintenance, emergency",
  "Full schema markup (LocalBusiness + FAQ + Service)",
  "1.8 second load time",
  "AI chat widget capturing leads 24/7",
  "Online booking integrated",
  "Google reviews embedded",
  "AI search citations appearing",
];

const FIX_CATEGORIES = [
  {
    icon: Search,
    title: "Search Visibility",
    items: [
      "Schema markup injection (LocalBusiness, Service, FAQ, Review)",
      "Meta title and description optimization for every page",
      "Service-specific landing pages with local SEO",
      "Google Business Profile optimization recommendations",
    ],
  },
  {
    icon: FileText,
    title: "Content",
    items: [
      "Weekly blog posts targeting AI citation gaps",
      "4 short-form video scripts per week",
      "Service page content written like a real technician",
      "FAQ sections with schema markup for AI Overviews",
    ],
  },
  {
    icon: MousePointer,
    title: "Conversion",
    items: [
      "AI chatbot installation and configuration",
      "Online booking widget integration",
      "Click-to-call optimization",
      "Google review widget embedding",
      "Lead capture forms on every service page",
    ],
  },
  {
    icon: Gauge,
    title: "Speed & Technical",
    items: [
      "Image optimization and compression",
      "Script optimization and lazy loading",
      "Mobile responsiveness audit and fixes",
      "Core Web Vitals improvement plan",
    ],
  },
];

const TIMELINE = [
  { day: "Day 1",      label: "Full website audit",                   detail: "Automated scan of schema, speed, content, and AI search presence." },
  { day: "Day 2–3",    label: "Schema markup + meta tags applied",     detail: "LocalBusiness, Service, FAQ, and Review schema added to every page." },
  { day: "Day 3–5",    label: "AI chatbot + booking widget installed", detail: "Chat captures visitors 24/7. Booking syncs to your calendar." },
  { day: "Day 5–7",    label: "First service pages published",         detail: "AC repair, furnace install, emergency HVAC — each with full SEO." },
  { day: "Week 2",     label: "Review widget + lead forms added",      detail: "Google reviews embedded. Lead forms on every service page." },
  { day: "Week 3",     label: "Speed optimizations applied",           detail: "Images compressed, scripts deferred, load time cut to under 2 seconds." },
  { day: "Week 4",     label: "Full re-audit showing improvements",    detail: "Side-by-side comparison of before and after scores." },
  { day: "Ongoing",    label: "Weekly content + monthly tech review",  detail: "Blog posts, citation monitoring, and technical health checks." },
];

const PLANS = [
  {
    name: "Starter",
    price: "$1,497",
    period: "/mo",
    items: ["Content optimization", "SEO optimization", "Schema markup", "Meta descriptions"],
  },
  {
    name: "Growth",
    price: "$1,997",
    period: "/mo",
    featured: true,
    items: ["Everything in Starter", "Lead capture tools", "Online booking integration", "Google review widget"],
  },
  {
    name: "Complete",
    price: "$4,997",
    period: "/mo",
    items: [
      "Everything in Growth",
      "AI receptionist + chat",
      "Full managed optimization",
      "Dedicated success manager",
    ],
  },
];

const RESULTS = [
  { stat: "3x", label: "more service pages" },
  { stat: "40%", label: "faster load time" },
  { stat: "100%", label: "schema markup coverage" },
  { stat: "24/7", label: "AI chat capturing leads" },
];

export default function WebsiteOptimizationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5" />
            Website Optimization
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-5">
            Your Website. Fixed by AI.{" "}
            <span className="text-gradient">In Days, Not Months.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Most agencies take 3–6 months and charge $10,000+ to fix your
            website. AutoGrowth&apos;s AI does it in days for a fraction of the
            cost.
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
              Book a demo first
            </Link>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Before and after AutoGrowth
          </h2>
          <p className="text-gray-500 text-center text-sm mb-12">
            Same business. Same owner. Completely different results.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                  Before
                </p>
                <p className="font-bold text-gray-900">Bob&apos;s HVAC — Columbus, OH</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5 mb-6">
                  {BEFORE_ITEMS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <X
                        className="w-4 h-4 text-red-400 shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-gray-600">
                      Google visibility
                    </span>
                    <span className="text-sm font-bold text-red-600">12/100</span>
                  </div>
                  <div className="h-2 bg-red-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 rounded-full" style={{ width: "12%" }} />
                  </div>
                  <p className="text-xs text-red-600 font-medium mt-3">
                    Losing an estimated 15 calls per month
                  </p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-white rounded-2xl border border-emerald-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-emerald-100 bg-emerald-50">
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
                  After AutoGrowth
                </p>
                <p className="font-bold text-gray-900">Bob&apos;s HVAC — Columbus, OH</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5 mb-6">
                  {AFTER_ITEMS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Check
                        className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-gray-600">
                      Google visibility
                    </span>
                    <span className="text-sm font-bold text-emerald-600">68/100</span>
                  </div>
                  <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "68%" }} />
                  </div>
                  <p className="text-xs text-emerald-700 font-medium mt-3">
                    Gaining an estimated 22 additional calls per month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we fix */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            What we fix
          </h2>
          <p className="text-gray-500 text-center text-sm mb-12">
            Every issue handled automatically — no project manager required.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {FIX_CATEGORIES.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Check
                        className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            How it works
          </h2>
          <p className="text-gray-500 text-center text-sm mb-14">
            From audit to results in under 30 days.
          </p>
          <div className="space-y-0">
            {TIMELINE.map(({ day, label, detail }, i) => (
              <div key={label} className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center shrink-0 whitespace-nowrap px-2 text-center leading-tight">
                    {i + 1}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="w-px bg-gray-200 flex-1 min-h-[2.5rem]" />
                  )}
                </div>
                <div className="pt-1.5 pb-8">
                  <span className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-0.5 mb-1.5">
                    {day}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-0.5">{label}</h3>
                  <p className="text-sm text-gray-500">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Website optimization is included in every AutoGrowth plan
          </h2>
          <p className="text-gray-500 text-center text-sm mb-12">
            No add-ons. No agency retainers. Pick a plan and we handle the rest.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {PLANS.map(({ name, price, period, items, featured }) => (
              <div
                key={name}
                className={`rounded-2xl border p-6 ${
                  featured
                    ? "border-emerald-300 bg-white ring-2 ring-emerald-500/20"
                    : "border-gray-200 bg-white"
                }`}
              >
                {featured && (
                  <p className="text-xs font-semibold text-emerald-600 mb-2">
                    Most popular
                  </p>
                )}
                <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
                <div className="flex items-baseline gap-0.5 mb-5">
                  <span className="text-3xl font-black text-gray-900">{price}</span>
                  <span className="text-sm text-gray-500">{period}</span>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Check
                        className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            What our clients see after 30 days
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            Measured across all active AutoGrowth websites.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {RESULTS.map(({ stat, label }) => (
              <div key={label} className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <div className="text-4xl font-black text-gray-900 mb-1">{stat}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-zinc-900 py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop losing calls to a bad website.
          </h2>
          <p className="text-gray-400 mb-8">
            Your competitors are getting the calls you should be getting. We fix
            that in days.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-xl text-base transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
