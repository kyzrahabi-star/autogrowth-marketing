import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SeoContentPage } from "@/components/SeoContentPage";
import { COMPARISON_PAGES, getComparisonPage } from "@/lib/hvac-service-comparison";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return COMPARISON_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getComparisonPage(params.slug);
  if (!page) return { title: "Page Not Found" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/compare/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "article",
    },
  };
}

export default function ComparisonPage({ params }: Props) {
  const page = getComparisonPage(params.slug);
  if (!page) notFound();

  const others = COMPARISON_PAGES.filter((p) => p.slug !== page.slug).slice(0, 6);

  return (
    <SeoContentPage
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Compare", href: "/compare" },
        { name: page.h1 },
      ]}
      badge="Comparison"
      h1={page.h1}
      blufBlock={page.blufBlock}
      bodyContent={page.bodyContent}
      faqJson={page.faqJson}
      ctaHeading="See how AutoGrowth AI stacks up for your HVAC business"
      ctaBody="Free audit. We scan your Google presence, reviews, website, and AI search visibility, then show you exactly how many calls you're missing and what they're worth."
      related={
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            More comparisons
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/compare/${p.slug}`}
                className="group bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-md rounded-xl px-5 py-4 transition-all"
              >
                <p className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {p.h1}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center pt-8">
            <Link
              href="/compare"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Compare all options
            </Link>
          </div>
        </div>
      }
    />
  );
}
