import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPARISON_PAGES } from "@/lib/hvac-service-comparison";

export const metadata: Metadata = {
  title: "Compare AutoGrowth AI — HVAC Software & Answering Comparisons",
  description:
    "How AutoGrowth AI stacks up against ServiceTitan, Housecall Pro, Jobber, Podium, call centers, and human receptionists for HVAC companies.",
  alternates: { canonical: "/compare" },
  openGraph: {
    title: "Compare AutoGrowth AI for HVAC Companies",
    description:
      "Head-to-head comparisons against the tools and services HVAC companies actually evaluate.",
    type: "website",
  },
};

export default function CompareHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.autogrowthai.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compare",
        item: "https://www.autogrowthai.co/compare",
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: COMPARISON_PAGES.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.h1,
      url: `https://www.autogrowthai.co/compare/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="pt-20 pb-10 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              How AutoGrowth AI compares
            </h1>
            <p className="text-lg sm:text-xl font-bold text-gray-900 leading-relaxed mt-6">
              Most HVAC owners evaluate AutoGrowth AI against a field-service
              platform, a generic answering service, or hiring another front-desk
              person. These head-to-head breakdowns show where each option wins
              and where it leaves money on the table — so you can pick what
              actually books more jobs.
            </p>
          </div>
        </section>

        {/* Comparison grid */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
            {COMPARISON_PAGES.map((p) => (
              <Link
                key={p.slug}
                href={`/compare/${p.slug}`}
                className="group bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-md rounded-xl px-5 py-5 transition-all flex items-center justify-between gap-4"
              >
                <p className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {p.h1}
                </p>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 via-white to-white border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
                Not sure which option fits your shop?
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Start with a free audit. We&apos;ll show you exactly how many
                calls you&apos;re missing and what they&apos;re worth.
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors shadow-sm"
              >
                Get Your Free HVAC Business Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
