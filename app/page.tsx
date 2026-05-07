import Link from "next/link";
import { Search, PenTool, Zap, MessageSquare, Star, type LucideIcon } from "lucide-react";

export default function HomePage() {
  const specialists: Array<{ Icon: LucideIcon; name: string; description: string }> = [
    {
      Icon: Search,
      name: "AI Search Analyst",
      description:
        "Monitors your visibility across Google, Google Maps, ChatGPT, Perplexity, and Google AI Overviews. Daily reports show exactly where you rank — and where your competitors are beating you.",
    },
    {
      Icon: PenTool,
      name: "Content Director",
      description:
        "Creates SEO-optimized content that ranks on Google AND gets cited by AI engines. Blog posts, video scripts, all written like a real technician — not a marketing bot.",
    },
    {
      Icon: Zap,
      name: "Lead Specialist",
      description:
        "Scores every inbound lead 0–100 in under 60 seconds. Hot leads trigger an instant SMS to your phone. Cold leads get filed automatically.",
    },
    {
      Icon: MessageSquare,
      name: "Customer Pursuit Manager",
      description:
        "Follows up with every lead automatically. 6-touch sequence over 14 days. No lead falls through the cracks — even the ones who ghost you.",
    },
    {
      Icon: Star,
      name: "Reputation Director",
      description:
        "Manages your Google reviews — which boost both your Google ranking and your AI citations. Requests reviews after every job, drafts responses, and alerts you the moment a negative hits.",
    },
  ];

  const timeline = [
    {
      day: "Day 1",
      text: "Full visibility audit across Google, AI engines, and review sites. You see exactly where you stand.",
    },
    {
      day: "Day 7",
      text: "First content published — optimized for both Google ranking and AI citations.",
    },
    {
      day: "Day 14",
      text: "Google rankings start improving. First AI citations begin appearing.",
    },
    {
      day: "Day 30",
      text: "Dashboard shows your visibility climbing across all platforms. Calls, citations, reviews — tracked.",
    },
  ];

  const testimonials = [
    {
      quote:
        "We were getting maybe 2-3 calls a week from people who found us online. Six weeks in and that's up to 8-10. The morning report tells me exactly where we stand.",
      name: "Mike R., Owner",
      business: "Reynolds Heating & Cooling, Columbus OH",
    },
    {
      quote:
        "I didn't believe the AI search thing until they showed me my competitor being recommended and me not showing up at all. That changed fast.",
      name: "Dave S., Owner",
      business: "Buckeye Air Systems, Columbus OH",
    },
    {
      quote:
        "The lead scoring alone is worth it. Used to miss half my leads because I was on a job. Now I get a text the second a hot lead comes in.",
      name: "Tony M., Owner",
      business: "Comfort Pro HVAC, Dublin OH",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AutoGrowth AI",
    applicationCategory: "BusinessApplication",
    description: "AI search domination platform for trades businesses",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "297",
      highPrice: "997",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: "AutoGrowth AI",
      url: "https://autogrowthai.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — text + search bar */}
      <section className="bg-white pt-20 pb-10 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full mb-6">
            AI Search Visibility
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            Your Competitors Are Getting{" "}
            <span className="text-gradient">All the Calls</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            When homeowners search Google, ask ChatGPT, or check Perplexity for
            who to call — your competitors show up. You don&apos;t. We fix that
            across every platform.
          </p>

          {/* Pill search bar */}
          <form
            action="/audit"
            method="GET"
            className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 p-2 max-w-lg mx-auto mb-4"
          >
            <input
              type="text"
              name="q"
              placeholder="Find your business name"
              className="flex-1 min-w-0 px-4 py-2 bg-transparent outline-none text-gray-900 text-sm placeholder-gray-400"
            />
            <button
              type="submit"
              className="shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors flex items-center gap-2"
            >
              See Where You&apos;re Missing
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
          <p className="text-sm text-gray-500">⚡ Free audit. No credit card. Results in 24 hours.</p>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-gray-50 border-y border-gray-200 py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-5">
            Trusted by contractors across Ohio
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {["Logo", "Logo", "Logo"].map((label, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg px-6 py-3 text-sm text-gray-400"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero — MacBook dashboard mockup */}
      <section className="relative overflow-hidden bg-white py-16 px-6 lg:px-8">
        {/* Radial emerald glow behind laptop */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 65%, #d1fae5 0%, #ecfdf5 38%, #ffffff 68%)",
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto">
          {/* Laptop wrapper */}
          <div className="shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]">

            {/* Screen bezel */}
            <div className="bg-gray-900 rounded-t-2xl pt-8 px-4 pb-4 relative">
              {/* Camera dot */}
              <div className="w-2.5 h-2.5 rounded-full bg-gray-600 mx-auto mb-3" />

              {/* Screen surface */}
              <div className="rounded-xl bg-white overflow-hidden min-h-[480px] flex">

                {/* ── Sidebar ── */}
                <div className="w-[200px] shrink-0 bg-gray-50 border-r border-gray-200 flex flex-col">
                  {/* Logo */}
                  <div className="px-4 pt-4 pb-3 border-b border-gray-200">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-sm font-bold text-gray-900 tracking-tight">AUTOGROWTH</span>
                    </div>
                  </div>

                  {/* Nav */}
                  <nav className="flex-1 px-2 py-3">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 px-3 pb-2 pt-1">
                      Overview
                    </p>
                    {[
                      { label: "Dashboard", active: true },
                      { label: "Rankings", active: false },
                      { label: "Content", active: false },
                      { label: "Leads", active: false },
                      { label: "Reviews", active: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`text-xs font-medium py-2 px-3 cursor-default mb-0.5 ${
                          item.active
                            ? "bg-emerald-50 text-emerald-700 border-l-2 border-emerald-500 rounded-r-lg"
                            : "text-gray-600 rounded-lg hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </div>
                    ))}
                  </nav>

                  {/* Bottom */}
                  <div className="px-2 pb-4 mt-auto">
                    <div className="text-xs font-medium py-2 px-3 text-gray-400 cursor-default rounded-lg hover:bg-gray-100 mb-1">
                      Settings
                    </div>
                    <div className="px-3 pt-2 border-t border-gray-200">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="text-xs font-medium text-gray-700">Reynolds Heating</span>
                      </div>
                      <span className="text-[10px] text-gray-400 pl-3">Columbus, OH</span>
                    </div>
                  </div>
                </div>

                {/* ── Main content ── */}
                <div className="flex-1 p-5 overflow-hidden">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Good morning, James</span>
                    <span className="text-sm text-gray-400">Tuesday, May 6, 2026</span>
                  </div>

                  {/* 4 stat cards */}
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {[
                      {
                        label: "AI Visibility",
                        value: "12",
                        suffix: "/100",
                        suffixCls: "text-sm font-normal text-gray-300",
                        valueCls: "text-emerald-500",
                        sub: "↑ 12 pts this week",
                        subCls: "text-emerald-500",
                      },
                      {
                        label: "Google Ranking",
                        value: "#14",
                        suffix: "",
                        suffixCls: "",
                        valueCls: "text-gray-900",
                        sub: "↑ 3 spots",
                        subCls: "text-emerald-500",
                      },
                      {
                        label: "Leads This Week",
                        value: "8",
                        suffix: "",
                        suffixCls: "",
                        valueCls: "text-gray-900",
                        sub: "3 hot · 4 warm · 1 cool",
                        subCls: "text-gray-500",
                      },
                      {
                        label: "Review Score",
                        value: "4.6",
                        suffix: " ★",
                        suffixCls: "text-sm font-normal text-yellow-400",
                        valueCls: "text-gray-900",
                        sub: "↑ 0.3 this month",
                        subCls: "text-emerald-500",
                      },
                    ].map((card) => (
                      <div
                        key={card.label}
                        className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm"
                      >
                        <p className="text-[10px] uppercase tracking-wide text-gray-400 mb-1">
                          {card.label}
                        </p>
                        <p className={`text-3xl font-bold leading-none mb-1 ${card.valueCls}`}>
                          {card.value}
                          {card.suffix && (
                            <span className={card.suffixCls}>{card.suffix}</span>
                          )}
                        </p>
                        <p className={`text-[10px] ${card.subCls}`}>{card.sub}</p>
                      </div>
                    ))}
                  </div>

                  {/* Two-column cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Competitor Visibility */}
                    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                      <p className="text-sm font-semibold text-gray-900 mb-3">Competitor Visibility</p>
                      <div className="space-y-2.5">
                        {[
                          { name: "Columbus Worthington Air", pct: 72, barCls: "bg-emerald-500", highlight: false },
                          { name: "Custom Air",               pct: 58, barCls: "bg-emerald-500", highlight: false },
                          { name: "Hetter Heating",           pct: 45, barCls: "bg-emerald-400", highlight: false },
                          { name: "Logan Services",           pct: 38, barCls: "bg-emerald-400", highlight: false },
                          { name: "You (Reynolds)",           pct: 12, barCls: "bg-orange-500",  highlight: true  },
                        ].map((row) => (
                          <div
                            key={row.name}
                            className={
                              row.highlight
                                ? "bg-orange-50 border border-dashed border-orange-300 rounded-lg px-2 py-1 -mx-1"
                                : ""
                            }
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span
                                className={`text-[10px] font-medium truncate ${
                                  row.highlight ? "text-orange-700" : "text-gray-600"
                                }`}
                              >
                                {row.name}
                              </span>
                              <span
                                className={`text-[10px] font-semibold ml-2 shrink-0 ${
                                  row.highlight ? "text-orange-600" : "text-gray-500"
                                }`}
                              >
                                {row.pct}%
                              </span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${row.barCls}`}
                                style={{ width: `${row.pct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Leads */}
                    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                      <p className="text-sm font-semibold text-gray-900 mb-3">Recent Leads</p>
                      <div>
                        {[
                          { dot: "bg-red-500",    name: "Sarah Mitchell", service: "AC repair",      score: 83, badge: "HOT",  badgeCls: "bg-red-100 text-red-600 font-bold" },
                          { dot: "bg-yellow-400", name: "Mike Torres",    service: "Furnace install", score: 61, badge: "WARM", badgeCls: "bg-yellow-50 text-yellow-700" },
                          { dot: "bg-blue-400",   name: "Linda Chen",     service: "Maintenance",     score: 34, badge: "COOL", badgeCls: "bg-blue-50 text-blue-600" },
                          { dot: "bg-red-500",    name: "James Wright",   service: "Emergency AC",    score: 91, badge: "HOT",  badgeCls: "bg-red-100 text-red-600 font-bold" },
                        ].map((lead, i) => (
                          <div
                            key={lead.name}
                            className={`flex items-center gap-2 py-2 text-xs ${
                              i < 3 ? "border-b border-gray-50" : ""
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${lead.dot}`} />
                            <span className="text-gray-800 font-medium w-24 truncate shrink-0">
                              {lead.name}
                            </span>
                            <span className="text-gray-400 flex-1 truncate">{lead.service}</span>
                            <span className="text-gray-500 w-16 shrink-0 text-right">
                              Score: {lead.score}
                            </span>
                            <span
                              className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ${lead.badgeCls}`}
                            >
                              {lead.badge}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Base / keyboard bar */}
            <div className="bg-gradient-to-b from-gray-300 to-gray-400 h-5 rounded-b-2xl mx-16 flex items-center justify-center">
              <div className="w-16 h-2.5 bg-black/10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-12">
            The $50,000 question nobody&apos;s asking
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Google search, Google Maps, Google AI Overviews, ChatGPT,
                Perplexity — there are now 5+ places homeowners look before they
                call someone. Most contractors show up in maybe one. Your
                competitors are showing up in all of them.
              </p>
              <p className="text-gray-900 font-semibold text-lg">
                You don&apos;t know which calls you&apos;re missing because you
                can&apos;t see where you&apos;re invisible.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <p className="text-sm text-gray-500 mb-6">
                We scanned 5 HVAC contractors across Google, ChatGPT, and Perplexity.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 text-sm mb-1">
                    Columbus Worthington Air
                  </p>
                  <p className="text-4xl font-bold text-gray-900">
                    7{" "}
                    <span className="text-lg text-gray-500 font-normal">
                      citations
                    </span>
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-700 text-sm mb-1">
                    Average HVAC contractor
                  </p>
                  <p className="text-4xl font-bold text-red-500">
                    0{" "}
                    <span className="text-lg text-gray-500 font-normal">
                      citations
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution — Specialists */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              5 Specialists. Zero employees.
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Your team that never sleeps. Covers Google, AI engines, reviews, and
              follow-up — on autopilot from day one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <s.Icon className="w-5 h-5 text-gray-400 mb-4" strokeWidth={1.5} />
                <h3 className="text-gray-900 font-semibold text-lg mb-2">
                  {s.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
            {/* 6th cell — CTA */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-center items-start">
              <p className="text-gray-900 font-semibold mb-2 text-lg">
                See them in action
              </p>
              <p className="text-gray-600 text-sm mb-4">
                15-minute live audit on your actual business.
              </p>
              <Link
                href="/demo"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Book a demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results — Timeline */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-14">
            What happens in your first 30 days
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-emerald-200" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start pl-14 relative">
                  <div className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 bg-gray-900">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">
                      {item.day}
                    </p>
                    <p className="text-gray-900 text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
            >
              Start your free audit →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-14">
            What contractors are saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 text-yellow-400 fill-yellow-400" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="bg-zinc-900 py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white font-bold text-4xl tracking-tight mb-4">
            Ready to show up everywhere your customers are looking?
          </h2>
          <p className="text-zinc-400 text-xl mb-10">
            Get your free visibility audit. See where you rank on Google AND AI search — vs. your top competitors. Results in 24 hours.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Get your free audit →
          </Link>
        </div>
      </section>
    </>
  );
}
