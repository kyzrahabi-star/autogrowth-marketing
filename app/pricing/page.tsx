"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, ChevronUp, ChevronDown } from "lucide-react";

const tiers = [
  {
    id: "free",
    name: "Free Audit",
    price: "$0",
    priceNote: "/one-time",
    tagline: null,
    popular: false,
    features: [
      "Full visibility audit across Google Search, Google Maps, ChatGPT, Perplexity, and Google AI Overviews",
      "Competitor comparison report",
      "Visibility score (0–100)",
      "Delivered to your email within 24 hours",
    ],
    cta: "Get Your Free Audit",
    ctaHref: "/audit",
    ctaVariant: "outline-emerald",
  },
  {
    id: "starter",
    name: "Starter",
    price: "$1,497",
    priceNote: "/month",
    tagline: "Less than the cost of one job per month",
    popular: false,
    features: [
      "AI Search Analyst — daily visibility scans across Google + all AI engines",
      "Content Director — weekly SEO blog post + 4 short-form video scripts",
      "Google Sheets dashboard with daily updates",
      "Email reports + Telegram alerts",
      "Dedicated content calendar",
    ],
    cta: "Start Growing",
    ctaHref: "/audit",
    ctaVariant: "outline-gray",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$1,997",
    priceNote: "/month",
    tagline: "One extra job per month pays for the entire system",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Lead Specialist — real-time lead scoring (0–100) with instant SMS + email alerts",
      "Customer Pursuit Manager — automated 6-step follow-up drip over 14 days",
      "AI Email Responder — replies to every form submission within 22 seconds",
      "Hot lead SMS alerts to your phone in under 60 seconds",
      "Full AutoGrowth dashboard",
    ],
    cta: "Get More Jobs",
    ctaHref: "/audit",
    ctaVariant: "green",
  },
  {
    id: "complete",
    name: "Complete",
    price: "$4,997",
    priceNote: "/month",
    tagline: "Your entire front office — for less than one employee",
    popular: false,
    features: [
      "Everything in Growth, plus:",
      "AI Receptionist — answers every call 24/7 by your business name",
      "AI SMS Responder — texts back missed callers within 30 seconds",
      "Website Chatbot — captures visitors 24/7 and books appointments",
      "Appointment Setter — books directly on your calendar",
      "Reputation Director — review requests, monitoring, AI-drafted responses",
      "Multi-location support (up to 3 locations)",
      "Dedicated account manager + monthly strategy call",
    ],
    cta: "Dominate Your Market",
    ctaHref: "/audit",
    ctaVariant: "outline-gray",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceNote: "pricing",
    tagline: null,
    popular: false,
    features: [
      "Everything in Complete, plus:",
      "Unlimited locations",
      "Custom integrations",
      "White-label options",
      "Priority engineering support",
    ],
    cta: "Talk to Us",
    ctaHref: "/demo",
    ctaVariant: "outline-gray",
  },
];

const comparisonFeatures = [
  { label: "AI + Google visibility scans",   free: true,  starter: true,  growth: true,  complete: true  },
  { label: "Weekly content (blog + video)",   free: false, starter: true,  growth: true,  complete: true  },
  { label: "Lead scoring + instant alerts",   free: false, starter: false, growth: true,  complete: true  },
  { label: "Automated 6-step follow-up",      free: false, starter: false, growth: true,  complete: true  },
  { label: "AI email auto-reply",             free: false, starter: false, growth: true,  complete: true  },
  { label: "AI Receptionist (24/7 calls)",    free: false, starter: false, growth: false, complete: true  },
  { label: "Missed call SMS (30 sec)",        free: false, starter: false, growth: false, complete: true  },
  { label: "Website chatbot",                 free: false, starter: false, growth: false, complete: true  },
  { label: "Appointment booking",             free: false, starter: false, growth: false, complete: true  },
  { label: "Review management",               free: false, starter: false, growth: false, complete: true  },
  { label: "Multi-location support",          free: false, starter: false, growth: false, complete: true  },
  { label: "Dedicated account manager",       free: false, starter: false, growth: false, complete: true  },
  { label: "Monthly strategy call",           free: false, starter: false, growth: false, complete: true  },
];

const faqs = [
  {
    q: "How fast will I see results?",
    a: "Your first visibility report arrives Day 1. AI receptionist answers calls immediately. Content starts Week 1. Most contractors see new citations within 30 days.",
  },
  {
    q: "$1,497/month sounds expensive.",
    a: "The average HVAC job is $350. If we bring you 5 extra jobs, that's $1,750 — the system pays for itself. Most see 8–15 extra jobs within 90 days.",
  },
  {
    q: "$4,997/month — why?",
    a: "You're replacing a receptionist ($4,100/mo), marketing person ($4,000/mo), follow-up coordinator ($3,000/mo), and review manager ($1,500/mo). That's $12,600/month. AutoGrowth does it all for $4,997.",
  },
  {
    q: "What's the AI Receptionist?",
    a: "A real AI voice that answers your phone 24/7, greets callers by name, has natural conversations, and books appointments. Missed calls get a text back in 30 seconds.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. Month-to-month. No contracts.",
  },
  {
    q: "What industries?",
    a: "We specialize in HVAC and home services. Plumbing, electrical, and roofing are coming soon.",
  },
  {
    q: "Is this just SEO?",
    a: "No. SEO targets Google. We also target ChatGPT, Perplexity, and Google AI Overviews — plus we handle your calls, leads, follow-up, and reviews.",
  },
];

function TierCTA({
  variant,
  href,
  children,
}: {
  variant: string;
  href: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-colors";
  if (variant === "green")
    return (
      <Link href={href} className={`${base} bg-emerald-500 hover:bg-emerald-600 text-white`}>
        {children}
      </Link>
    );
  if (variant === "outline-emerald")
    return (
      <Link
        href={href}
        className={`${base} border border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white`}
      >
        {children}
      </Link>
    );
  return (
    <Link
      href={href}
      className={`${base} border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900`}
    >
      {children}
    </Link>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-24 pb-14">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Clear pricing. No contracts. Cancel any time.
          </h1>
          <p className="text-gray-600 text-lg">
            Start with a free audit. Upgrade when you&apos;re ready.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                tier.popular
                  ? "border-2 border-emerald-500 shadow-lg"
                  : "border border-gray-200 shadow-sm"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.priceNote && (
                    <span className="text-lg font-normal text-gray-400">{tier.priceNote}</span>
                  )}
                </div>
                {tier.tagline && (
                  <p className="text-xs text-gray-400 mt-1 italic">{tier.tagline}</p>
                )}
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {tier.features.map((f, j) => {
                  const isInherited = f.startsWith("Everything in");
                  if (isInherited) {
                    return (
                      <li key={j} className="text-gray-400 text-xs font-medium mb-1 mt-2">
                        {f}
                      </li>
                    );
                  }
                  return (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                      {f}
                    </li>
                  );
                })}
              </ul>
              <TierCTA variant={tier.ctaVariant} href={tier.ctaHref}>
                {tier.cta}
              </TierCTA>
            </div>
          ))}
        </div>
      </div>

      {/* Feature comparison table */}
      <div className="bg-gray-50 py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Everything you get, compared
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide py-3 px-4">
                    Feature
                  </th>
                  <th className="text-xs font-semibold text-gray-500 uppercase tracking-wide py-3 px-4 text-center">
                    Free
                  </th>
                  <th className="text-xs font-semibold text-gray-500 uppercase tracking-wide py-3 px-4 text-center">
                    Starter
                  </th>
                  <th className="text-xs font-semibold text-gray-500 uppercase tracking-wide py-3 px-4 text-center">
                    Growth
                  </th>
                  <th className="text-xs font-semibold text-gray-500 uppercase tracking-wide py-3 px-4 text-center">
                    Complete
                  </th>
                  <th className="text-xs font-semibold text-gray-500 uppercase tracking-wide py-3 px-4 text-center">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : "bg-white"}>
                    <td className="text-left text-sm text-gray-700 py-3 px-4 border-b border-gray-50">
                      {row.label}
                    </td>
                    <td className="py-3 px-4 text-center border-b border-gray-50">
                      {row.free ? (
                        <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                      ) : (
                        <Minus className="w-4 h-4 text-gray-200 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center border-b border-gray-50">
                      {row.starter ? (
                        <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                      ) : (
                        <Minus className="w-4 h-4 text-gray-200 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center border-b border-gray-50">
                      {row.growth ? (
                        <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                      ) : (
                        <Minus className="w-4 h-4 text-gray-200 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center border-b border-gray-50">
                      {row.complete ? (
                        <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                      ) : (
                        <Minus className="w-4 h-4 text-gray-200 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center border-b border-gray-50">
                      {/* Enterprise gets everything */}
                      <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-8">
            Common questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-gray-900 font-semibold hover:text-gray-700 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm">{faq.q}</span>
                  <span className="text-gray-400 ml-4 shrink-0">
                    {openFaq === i ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
