import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  HVAC_CITY_PAGES,
  getCityPage,
  getSpokeLinks,
} from "@/lib/hvac-cities";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return HVAC_CITY_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getCityPage(params.slug);
  if (!page) return { title: "Page Not Found" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "website",
    },
  };
}

export default function HvacCityPage({ params }: Props) {
  const page = getCityPage(params.slug);
  if (!page) notFound();

  const spokes = getSpokeLinks(page.slug, 3);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AutoGrowth AI",
    url: `https://www.autogrowthai.co/hvac/${page.slug}`,
    telephone: "+18449102116",
    email: "support@autogrowthai.co",
    description: page.metaDescription,
    areaServed: {
      "@type": "City",
      name: page.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: page.state,
      },
    },
    priceRange: "$497 - $4997/mo",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqJson.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="pt-24 pb-12 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/hvac"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-6"
            >
              ← All HVAC city pages
            </Link>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <MapPin className="w-3 h-3" />
              {page.city}, {page.state}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              {page.h1}
            </h1>
          </div>
        </section>

        {/* BLUF block (40-80 word direct answer) */}
        <section className="px-6 lg:px-8 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl p-6 sm:p-8">
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-2">
                The Short Answer
              </p>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                {page.blufBlock}
              </p>
            </div>
          </div>
        </section>

        {/* Body content (Markdown) */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-3xl mx-auto">
            <article className="mdx-content text-gray-700 leading-relaxed space-y-4">
              <MDXRemote source={page.bodyContent} />
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 lg:px-8 pb-16 bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {page.faqJson.map((item) => (
                <details
                  key={item.q}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 [&_summary]:cursor-pointer"
                >
                  <summary className="font-semibold text-gray-900 flex items-center justify-between gap-4 list-none">
                    <span>{item.q}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl leading-none shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 via-white to-white border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
                See how much revenue you&apos;re leaving on the table in{" "}
                {page.city}
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Free audit. We scan your Google presence, reviews, website, and
                AI search visibility, then show you exactly how many calls
                you&apos;re missing and what they&apos;re worth.
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

        {/* Spoke links */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Also serving
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {spokes.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hvac/${s.slug}`}
                  className="group bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-md rounded-xl px-5 py-4 transition-all"
                >
                  <p className="text-xs text-gray-500 mb-0.5">
                    HVAC AI Receptionist
                  </p>
                  <p className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {s.city}, {s.state}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
