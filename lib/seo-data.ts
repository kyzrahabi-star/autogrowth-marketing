// Shared structured-data inputs used by JSON-LD across pages.
// Update FAQ copy here and both homepage + /how-it-works inherit.

export const FAQ_ITEMS: Array<{ q: string; a: string }> = [
  {
    q: "What is an AI receptionist for contractors?",
    a: "An AI receptionist answers every phone call to your business 24/7 — nights, weekends, holidays. It greets callers by your business name, captures their info, books appointments, and sends you instant alerts. No missed calls, no voicemail.",
  },
  {
    q: "How much does an AI answering service cost?",
    a: "AutoGrowth AI plans start at $497/mo for the AI Receptionist. Our AI Employee plan at $997/mo includes the full front office — receptionist, follow-ups, review management, and reporting.",
  },
  {
    q: "Does my business show up on ChatGPT?",
    a: "Most local businesses don't. When customers ask ChatGPT or Perplexity for recommendations, your competitors show up and you don't. Our free AI Visibility Checker tests this in 2 minutes.",
  },
  {
    q: "How many calls does a contractor miss after hours?",
    a: "The average contractor misses 30-40% of incoming calls. At $400 per job, missing just 3 calls a week costs over $62,000 a year in lost revenue.",
  },
  {
    q: "What is an AI business audit?",
    a: "A free analysis of your Google presence, website, reviews, and AI search visibility. We score you 0-100 and show exactly how much revenue you're losing to competitors who are more visible online.",
  },
];

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "AutoGrowth AI",
  url: "https://www.autogrowthai.co",
  telephone: "+18449102116",
  email: "support@autogrowthai.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: "United States",
  description:
    "AI-powered growth platform for local service businesses. Free business audits, 24/7 AI receptionist, and AI search visibility monitoring.",
  priceRange: "$0 - $4997/mo",
  sameAs: [] as string[],
};

// Pricing tiers — single source of truth for Product/Offer JSON-LD.
// Keep names/prices in sync with app/pricing/PricingClient.tsx.
export const PRICING_TIERS_SEO: Array<{
  name: string;
  description: string;
  price: string;
  url: string;
}> = [
  {
    name: "AutoGrowth AI — Free Audit",
    description:
      "Free visibility audit across Google Search, Google Maps, ChatGPT, Perplexity, and Google AI Overviews. Visibility score, competitor comparison, and action plan.",
    price: "0",
    url: "https://www.autogrowthai.co/audit",
  },
  {
    name: "AutoGrowth AI — AI Receptionist",
    description:
      "Answers every call 24/7 by your business name. Missed call SMS, transcripts, owner alerts.",
    price: "497",
    url: "https://buy.stripe.com/28E8wOfAk9aF8hDgT46Zy0a",
  },
  {
    name: "AutoGrowth AI — AI Employee",
    description:
      "Your entire front office automated. AI Receptionist + SMS responder + email responder + chatbot + appointment setter + review automation + live dashboard + owner alerts.",
    price: "997",
    url: "https://buy.stripe.com/fZu3cu73OeuZ41n8my6Zy0c",
  },
  {
    name: "AutoGrowth AI — Starter",
    description:
      "Everything in AI Employee plus AI Search Analyst (daily visibility scans) and Content Director (weekly SEO blog + 4 video scripts).",
    price: "1497",
    url: "https://buy.stripe.com/cNi28q73OeuZ2Xj6eq6Zy08",
  },
  {
    name: "AutoGrowth AI — Growth",
    description:
      "Everything in Starter plus Lead Specialist (real-time lead scoring 0-100) and Customer Pursuit Manager (6-step 14-day automated follow-up).",
    price: "1997",
    url: "https://buy.stripe.com/6oUcN4ewg3QleG1gT46Zy0b",
  },
  {
    name: "AutoGrowth AI — Complete",
    description:
      "Everything in Growth plus multi-location support (up to 3 locations) and dedicated account manager with monthly strategy call.",
    price: "4997",
    url: "https://buy.stripe.com/8x2aEW2NydqVeG1cCO6Zy06",
  },
];
