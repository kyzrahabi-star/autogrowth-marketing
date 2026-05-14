import type { Metadata } from "next";
import PricingClient from "./PricingClient";

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
  return <PricingClient />;
}
