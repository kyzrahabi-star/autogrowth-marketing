import type { Metadata } from "next";
import Link from "next/link";
import { Search, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Tools — AutoGrowth AI",
  description:
    "Free tools for local service businesses. Run a visibility audit across Google and AI search engines, or check your AI visibility.",
};

type Tool = {
  name: string;
  description: string;
  icon: typeof Search;
  href: string | null;
  cta: string;
  comingSoon: boolean;
};

const tools: Tool[] = [
  {
    name: "Free Business Audit",
    description:
      "Scan your business across Google Search, Google Maps, ChatGPT, Perplexity, and Google AI Overviews. Get a visibility score, competitor comparison, and a prioritized action plan in under 3 minutes.",
    icon: Search,
    href: "/audit",
    cta: "Run the audit",
    comingSoon: false,
  },
  {
    name: "AI Visibility Checker",
    description:
      "Check how often AI search engines like ChatGPT and Perplexity cite your business for the queries that matter in your service area.",
    icon: Sparkles,
    href: null,
    cta: "Coming soon",
    comingSoon: true,
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">
              Free Tools
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Free tools for local businesses
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Honest data about where you stand. No credit card, no email gate
              required to see results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const content = (
                <>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    {tool.comingSoon && (
                      <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {tool.name}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {tool.description}
                  </p>
                  <span
                    className={`inline-flex items-center gap-2 font-semibold text-sm ${
                      tool.comingSoon
                        ? "text-gray-400"
                        : "text-emerald-600 group-hover:text-emerald-700"
                    }`}
                  >
                    {tool.cta}
                    {!tool.comingSoon && (
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </span>
                </>
              );

              const baseClasses =
                "bg-white border rounded-2xl p-8 transition-all";
              const interactiveClasses = tool.comingSoon
                ? "border-gray-200 opacity-75"
                : "group border-gray-200 hover:border-emerald-300 hover:shadow-md cursor-pointer";

              if (tool.comingSoon || !tool.href) {
                return (
                  <div
                    key={tool.name}
                    className={`${baseClasses} ${interactiveClasses}`}
                  >
                    {content}
                  </div>
                );
              }

              return (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className={`${baseClasses} ${interactiveClasses}`}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
