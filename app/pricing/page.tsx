"use client";

import { useState } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Free Audit",
    price: "$0",
    priceNote: "One-time",
    popular: false,
    features: [
      "AI visibility score across 3 engines",
      "Competitor comparison (3 businesses)",
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
      "AI Search Analyst (daily scans)",
      "Weekly content: 1 blog post + 4 video scripts",
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
      "Telegram alerts",
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
      "Reputation Director (review management)",
      "Full AutoGrowth dashboard",
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
    a: "No. Traditional SEO targets Google's blue links. We target AI search — ChatGPT, Perplexity, Google AI Overviews. Different algorithms, different content strategy, different results.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Business name, city, primary service, and your website URL. The audit takes it from there.",
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
  const base =
    "inline-flex items-center justify-center w-full py-3 rounded-lg text-sm font-semibold transition-colors";
  if (style === "green")
    return (
      <Link
        href={href}
        className={base + " text-white"}
        style={{ backgroundColor: "#10B981" }}
      >
        {children}
      </Link>
    );
  if (style === "blue")
    return (
      <Link
        href={href}
        className={base + " text-white"}
        style={{ backgroundColor: "#3B82F6" }}
      >
        {children}
      </Link>
    );
  return (
    <Link
      href={href}
      className={base + " text-zinc-300 border border-zinc-700 hover:border-zinc-500"}
    >
      {children}
    </Link>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Clear pricing. No contracts. Cancel any time.
          </h1>
          <p className="text-zinc-400 text-lg">
            Start with a free audit. Upgrade when you&apos;re ready.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mb-20">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative bg-zinc-900 rounded-2xl p-8 flex flex-col ${
                tier.popular
                  ? "border-2 border-blue-500"
                  : "border border-zinc-800"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: "#10B981" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-base font-semibold text-white mb-2">
                  {tier.name}
                </h2>
                <div className="text-3xl font-bold text-white">
                  {tier.price}
                </div>
                {tier.priceNote && (
                  <p className="text-xs text-zinc-500 mt-1">{tier.priceNote}</p>
                )}
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-emerald-400 shrink-0">✓</span>
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

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Common questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white font-medium hover:text-zinc-200"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm">{faq.q}</span>
                  <span className="text-zinc-500 text-xs ml-4 shrink-0">
                    {openFaq === i ? "▲" : "▼"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-zinc-400">{faq.a}</p>
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
