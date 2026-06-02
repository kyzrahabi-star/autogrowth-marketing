import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

const BASE = "https://www.autogrowthai.co";

/**
 * The Sheet authors body_content as trusted HTML (comparison tables, headings,
 * links) and bluf_block as light Markdown. Convert the BLUF's bold/link
 * Markdown to HTML so both render through dangerouslySetInnerHTML.
 */
function blufToHtml(md: string): string {
  return md
    .trim()
    .split(/\n{2,}/)
    .map((block) => {
      const html = block
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        .replace(/\n/g, "<br/>");
      return `<p>${html}</p>`;
    })
    .join("");
}

export interface Crumb {
  name: string;
  href?: string;
}

interface Props {
  crumbs: Crumb[];
  badge?: string;
  h1: string;
  /** Markdown — rendered through MDX so **bold** in the BLUF resolves. */
  blufBlock: string;
  /** Markdown — the long-form body. */
  bodyContent: string;
  faqJson: Array<{ q: string; a: string }>;
  ctaHeading: string;
  ctaBody: string;
  ctaHref?: string;
  ctaLabel?: string;
  /** Optional related-links block rendered above the footer. */
  related?: React.ReactNode;
}

/**
 * Shared layout for the HVAC service pillar pages (/hvac/[slug]) and the
 * competitor comparison pages (/compare/[slug]). Emits BreadcrumbList + FAQPage
 * JSON-LD. Canonical tags are set per-route via generateMetadata.
 */
export function SeoContentPage({
  crumbs,
  badge,
  h1,
  blufBlock,
  bodyContent,
  faqJson,
  ctaHeading,
  ctaBody,
  ctaHref = "/audit",
  ctaLabel = "Get Your Free HVAC Business Audit",
  related,
}: Props) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${BASE}${c.href}` } : {}),
    })),
  };

  const faqSchema =
    faqJson.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqJson.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="pt-6 px-6 lg:px-8 max-w-3xl mx-auto"
        >
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {c.name}
                  </Link>
                ) : (
                  <span
                    className="text-gray-700 font-medium"
                    aria-current="page"
                  >
                    {c.name}
                  </span>
                )}
                {i < crumbs.length - 1 && <span aria-hidden="true">›</span>}
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero */}
        <section className="pt-8 pb-12 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {badge && (
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <Tag className="w-3 h-3" />
                {badge}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              {h1}
            </h1>
          </div>
        </section>

        {/* BLUF block (markdown) */}
        <section className="px-6 lg:px-8 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl p-6 sm:p-8">
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-2">
                The Short Answer
              </p>
              <div
                className="mdx-content bluf-content text-base sm:text-lg text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blufToHtml(blufBlock) }}
              />
            </div>
          </div>
        </section>

        {/* Body content (markdown) */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-3xl mx-auto">
            <article
              className="mdx-content text-gray-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: bodyContent }}
            />
          </div>
        </section>

        {/* FAQ */}
        {faqJson.length > 0 && (
          <section className="px-6 lg:px-8 pb-16 bg-gray-50 py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {faqJson.map((item, i) => (
                  <details
                    key={i}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 [&_summary]:cursor-pointer"
                  >
                    <summary className="font-semibold text-gray-900 flex items-center justify-between gap-4 list-none">
                      <span>{item.q}</span>
                      <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl leading-none shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 via-white to-white border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
                {ctaHeading}
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">{ctaBody}</p>
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors shadow-sm"
              >
                {ctaLabel}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        {related && (
          <section className="px-6 lg:px-8 pb-24">
            <div className="max-w-3xl mx-auto space-y-10">{related}</div>
          </section>
        )}
      </div>
    </>
  );
}
