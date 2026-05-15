import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import { PRICING_TIERS_SEO } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for AI-powered growth. From free audits to 24/7 AI receptionists. See which plan fits your business.",
  openGraph: {
    title: "Pricing — AutoGrowth AI",
    description:
      "Transparent pricing for AI-powered growth. From free audits to 24/7 AI receptionists. See which plan fits your business.",
  },
};

export default function PricingPage() {
  const productSchemas = PRICING_TIERS_SEO.map((tier) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: tier.name,
    description: tier.description,
    brand: {
      "@type": "Brand",
      name: "AutoGrowth AI",
    },
    offers: {
      "@type": "Offer",
      price: tier.price,
      priceCurrency: "USD",
      url: tier.url,
      availability: "https://schema.org/InStock",
    },
  }));

  return (
    <>
      {productSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PricingClient />
    </>
  );
}
