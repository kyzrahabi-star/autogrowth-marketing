"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Clock, ArrowRight, Check } from "lucide-react";

type Severity = "critical" | "important" | "quickwin";

interface Issue {
  id: string;
  severity: Severity;
  title: string;
  problem: string;
  impact: string;
  fix: string;
  time: string;
}

const ISSUES: Issue[] = [
  {
    id: "schema",
    severity: "critical",
    title: "Missing Schema Markup",
    problem:
      "Search engines can't understand your business type, services, or service area",
    impact: "You're invisible to Google's rich results and AI search engines",
    fix: "Our AI adds LocalBusiness, HVAC service, and FAQ schema to every page",
    time: "Automated — applied within 24 hours of signup",
  },
  {
    id: "service-pages",
    severity: "critical",
    title: "No Individual Service Pages",
    problem:
      "You have one generic 'Services' page instead of dedicated pages for AC repair, furnace installation, etc.",
    impact: "You can't rank for specific service searches like 'AC repair [city]'",
    fix: "Content Director creates SEO-optimized service pages written like a real technician",
    time: "First pages delivered within 7 days",
  },
  {
    id: "ai-search",
    severity: "critical",
    title: "Not Showing Up in AI Search",
    problem:
      "When someone asks ChatGPT or Perplexity for HVAC help, your competitors get recommended — not you",
    impact: "AI search now handles 40% of 'who should I call' queries and growing",
    fix: "AI Search Analyst monitors daily. Content Director creates content that gets you cited.",
    time: "First citations within 30 days",
  },
  {
    id: "booking",
    severity: "important",
    title: "No Online Booking",
    problem: "Customers can't book appointments from your website",
    impact:
      "You lose leads who want instant scheduling — they go to competitors who offer it",
    fix: "We add AI-powered scheduling that books directly on your calendar",
    time: "Live within 48 hours of signup",
  },
  {
    id: "chat",
    severity: "important",
    title: "No Chat Widget",
    problem:
      "Website visitors leave without engaging because there's no way to ask questions",
    impact:
      "50% of website visitors who would convert leave because they can't get an instant answer",
    fix: "AI chatbot captures visitors 24/7 and books appointments automatically",
    time: "Live within 48 hours of signup",
  },
  {
    id: "speed",
    severity: "important",
    title: "Slow Mobile Load Time",
    problem: "Your site takes too long to load on phones",
    impact: "53% of mobile users leave sites that take more than 3 seconds to load",
    fix: "We optimize images, scripts, and caching for sub-2-second load times",
    time: "Optimized within 7 days",
  },
  {
    id: "reviews",
    severity: "quickwin",
    title: "No Google Review Display",
    problem: "Your website doesn't show your Google reviews",
    impact: "Social proof on your site increases conversions by 34%",
    fix: "We embed your live Google reviews on your homepage and service pages",
    time: "Added within 48 hours",
  },
  {
    id: "meta",
    severity: "quickwin",
    title: "Missing Meta Descriptions",
    problem:
      "Your pages don't have meta descriptions — Google shows random text in search results",
    impact: "Well-written meta descriptions increase click-through rates by 5-10%",
    fix: "AI writes unique, keyword-rich meta descriptions for every page",
    time: "Automated within 24 hours",
  },
];

const SEVERITY_STYLES: Record<Severity, { badge: string; label: string; dot: string }> = {
  critical: {
    badge: "bg-red-100 text-red-700",
    label: "Critical",
    dot: "bg-red-500",
  },
  important: {
    badge: "bg-yellow-100 text-yellow-700",
    label: "Important",
    dot: "bg-yellow-400",
  },
  quickwin: {
    badge: "bg-emerald-100 text-emerald-700",
    label: "Quick Win",
    dot: "bg-emerald-500",
  },
};

export default function FixPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const counts = {
    critical: ISSUES.filter((i) => i.severity === "critical").length,
    important: ISSUES.filter((i) => i.severity === "important").length,
    quickwin: ISSUES.filter((i) => i.severity === "quickwin").length,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Website Analysis
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Let&apos;s Fix Your Online Presence
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Based on your audit, here are the issues we found and exactly how
            AutoGrowth fixes each one.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm flex-wrap">
            {(["critical", "important", "quickwin"] as Severity[]).map((s) => (
              <span key={s} className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${SEVERITY_STYLES[s].dot}`}
                />
                <span className="text-gray-600">
                  <span className="font-semibold text-gray-900">{counts[s]}</span>{" "}
                  {SEVERITY_STYLES[s].label.toLowerCase()}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Issue cards */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-3">
          {ISSUES.map((issue) => {
            const isOpen = expandedId === issue.id;
            const { badge, label } = SEVERITY_STYLES[issue.severity];

            return (
              <div
                key={issue.id}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedId(isOpen ? null : issue.id)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${badge}`}
                  >
                    {label}
                  </span>
                  <span className="flex-1 font-semibold text-gray-900">
                    {issue.title}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="grid sm:grid-cols-3 gap-3 pt-5">
                      <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">
                          What&apos;s wrong
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {issue.problem}
                        </p>
                      </div>
                      <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
                        <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-2">
                          Why it matters
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {issue.impact}
                        </p>
                      </div>
                      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                          How AutoGrowth fixes it
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {issue.fix}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                        <span>{issue.time}</span>
                      </div>
                      <a
                        href="#fix-all"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                      >
                        Fix This <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Fix All CTA */}
      <section id="fix-all" className="pb-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900 rounded-3xl p-8 sm:p-10">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">
                  Fix everything at once
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {ISSUES.length} issues. Fixed automatically.
                </h2>
              </div>
              <div className="shrink-0 bg-red-500/20 border border-red-500/30 rounded-xl px-4 py-2.5 text-center">
                <span className="text-2xl font-black text-white">{ISSUES.length}</span>
                <p className="text-xs text-red-300 mt-0.5">issues found</p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              With AutoGrowth, all of these are fixed automatically. No
              developers. No agencies. No waiting.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { time: "24 hrs", label: "Schema + meta" },
                { time: "48 hrs", label: "Booking + chat" },
                { time: "30 days", label: "AI citations" },
              ].map(({ time, label }) => (
                <div key={label} className="bg-zinc-800 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-white">{time}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <ul className="grid sm:grid-cols-2 gap-2 mb-8">
              {[
                "Schema markup on every page",
                "Dedicated service pages for every offering",
                "AI chatbot live 24/7",
                "Online booking in 48 hours",
                "Google reviews embedded on site",
                "Monitored daily for AI citations",
                "Optimized for mobile speed",
                "AI-written meta descriptions",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-zinc-300"
                >
                  <Check
                    className="w-3.5 h-3.5 text-emerald-400 shrink-0"
                    strokeWidth={3}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/audit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-4 rounded-full text-center transition-colors"
              >
                Start Fixing — $1,497/month
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
