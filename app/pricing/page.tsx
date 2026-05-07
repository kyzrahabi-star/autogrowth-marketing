"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronUp, ChevronDown } from "lucide-react";

const tiers = [
  {
    name: "Free Audit",
    price: "$0",
    priceNote: "One-time",
    popular: false,
    features: [
      "Visibility score across Google, ChatGPT, and Perplexity",
      "Competitor comparison across Google + AI (3 businesses)",
      "Recommended actions report",
      "Delivered by email in 24 hours",
    ],
    cta: "Get Your Free Audit",
    ctaHref: "/audit",
    ctaStyle: "ghost",
  },
  {
    name: "Starter",
    price: "$297",
    priceNote: "per month, billed monthly",
    popular: false,
    features: [
      "AI Search Analyst — daily Google + AI visibility scans",
      "Weekly content: 1 SEO blog post + 4 video scripts",
      "Google Sheets dashboard",
      "Weekly email reports",
      "Up to 1 location",
    ],
    cta: "Start Growing",
    ctaHref: "/audit",
    ctaStyle: "blue",
  },
  {
    name: "Growth",
    price: "$597",
    priceNote: "per month, billed monthly",
    popular: true,
    features: [
      "Everything in Starter",
      "Lead Specialist (real-time scoring)",
      "SMS + email alerts on hot leads",
      "Customer Pursuit Manager (6-touch drip)",
      "SEO + AI-optimized content",
      "Up to 1 location",
    ],
    cta: "Get More Jobs",
    ctaHref: "/audit",
    ctaStyle: "green",
  },
  {
    name: "Complete",
    price: "$997",
    priceNote: "per month, billed monthly",
    popular: false,
    features: [
      "Everything in Growth",
      "Reputation Director (Google reviews + AI boost)",
      "Full Google + AI + review dashboard",
      "Review response drafting",
      "Priority support (4hr response)",
      "Up to 2 locations",
    ],
    cta: "Dominate Your Market",
    ctaHref: "/audit",
    ctaStyle: "blue",
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    priceNote: "",
    popular: false,
    features: [
      "Everything in Complete",
      "Multi-location support (unlimited)",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options available",
    ],
    cta: "Talk to Us",
    ctaHref: "/demo",
    ctaStyle: "ghost",
  },
];

const faqs = [
  {
    q: "Do I need to do anything?",
    a: "Answer the phone. We handle everything else. You'll get a morning briefing email — 90 seconds to read. That's it.",
  },
  {
    q: "How long until I see results?",
    a: "Your AI visibility report arrives Day 1. Content starts Week 1. Most contractors see new citations in AI search within 30 days.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Month-to-month. No contracts. Cancel before your next billing date and you won't be charged again.",
  },
  {
    q: "What industries do you serve?",
    a: "Any service business. HVAC, plumbing, electrical, roofing, auto repair, dental, legal, real estate, and more. We started with HVAC — it's what we know best.",
  },
  {
    q: "Is this just SEO?",
    a: "It's SEO plus AI search optimization. Traditional SEO gets you ranked on Google. We also get you recommended by ChatGPT, Perplexity, and Google AI Overviews. Most agencies only do one. We do both.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Business name, city, primary service, and your website URL. The audit takes it from there.",
  },
  {
    q: "How is this different from my current marketing?",
    a: "Your current marketing probably covers Google Ads or basic SEO. It doesn't cover AI search engines, which now answer 40% of 'who should I call' questions. We cover everything — Google, AI, reviews, and content — in one system.",
  },
];

function CtaButton({
  style,
  href,
  children,
}: {
  style: string;
  href: string;
  children: React.ReactNode;
}) {
  if (style === "green")
    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-colors text-white bg-emerald-500 hover:bg-emerald-600"
      >
        {children}
      </Link>
    );
  if (style === "blue")
    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-colors text-gray-700 border border-gray-300 hover:border-gray-900 hover:text-gray-900"
      >
        {children}
      </Link>
    );
  // ghost — used for Free Audit and Enterprise
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-colors text-emerald-600 border border-emerald-500 hover:bg-emerald-500 hover:text-white"
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
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                tier.popular
                  ? "border-2 border-emerald-500 shadow-lg"
                  : "border border-gray-200 shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-semibold text-white bg-emerald-500">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{tier.name}</p>
                <div className="text-4xl font-bold text-gray-900 mt-1">
                  {tier.price}
                </div>
                {tier.priceNote && (
                  <p className="text-gray-400 text-lg font-normal mt-1">{tier.priceNote}</p>
                )}
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <CtaButton style={tier.ctaStyle} href={tier.ctaHref}>
                {tier.cta}
              </CtaButton>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-24 px-6 lg:px-8">
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
                    {openFaq === i
                      ? <ChevronUp className="w-4 h-4" />
                      : <ChevronDown className="w-4 h-4" />}
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
