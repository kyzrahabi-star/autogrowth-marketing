import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import { PRICING_TIERS_SEO } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Pricing for HVAC Companies",
  description:
    "Transparent pricing for HVAC companies. From free audits to 24/7 AI receptionists. Plans recover $3K-$15K/mo in missed calls, estimates, and reviews.",
  openGraph: {
    title: "Pricing for HVAC Companies — AutoGrowth AI",
    description:
      "Transparent pricing for HVAC companies. From free audits to 24/7 AI receptionists. Plans recover $3K-$15K/mo in missed calls, estimates, and reviews.",
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
