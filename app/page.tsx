import Link from "next/link";
import { Search, PenTool, Zap, MessageSquare, Star, Check, type LucideIcon } from "lucide-react";
import { ORGANIZATION_SCHEMA, buildFaqSchema } from "@/lib/seo-data";

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

  const pricingTiers = [
    {
      name: "Free Audit",
      price: "$0",
      priceNote: "/one-time",
      features: [
        "Full visibility audit across Google + all AI engines",
        "Competitor comparison report",
        "Visibility score (0–100)",
        "Results in under 3 minutes",
      ],
      cta: "Get Your Free Audit",
      href: "/audit",
      popular: false,
    },
    {
      name: "AI Employee",
      price: "$997",
      priceNote: "/month",
      features: [
        "AI Receptionist — answers every call 24/7",
        "Missed call SMS in 30 seconds",
        "AI email responder (22 sec reply)",
        "Appointment booking + Google review automation",
        "Live dashboard + owner alerts",
      ],
      cta: "Get Started",
      href: "/contact",
      popular: true,
    },
    {
      name: "Growth",
      price: "$1,997",
      priceNote: "/month",
      features: [
        "Everything in AI Employee, plus:",
        "Lead scoring + 60-second SMS alerts",
        "6-step 14-day automated follow-up",
        "AI search visibility reports",
        "Weekly SEO content creation",
      ],
      cta: "Get More Jobs",
      href: "/contact",
      popular: false,
    },
  ];

  const comparisonRows = [
    { feature: "Done-for-you setup",           ag: true,  ghl: false,    scorp: true,  diy: false },
    { feature: "AI Receptionist (24/7)",        ag: true,  ghl: false,    scorp: false, diy: false },
    { feature: "AI search visibility",          ag: true,  ghl: false,    scorp: false, diy: false },
    { feature: "Lead scoring + instant alerts", ag: true,  ghl: "Add-on", scorp: false, diy: false },
    { feature: "Automated follow-up",           ag: true,  ghl: true,     scorp: false, diy: false },
    { feature: "Google review automation",      ag: true,  ghl: true,     scorp: false, diy: false },
  ];

  const faqs = [
    {
      q: "How fast will I see results?",
      a: "Your visibility audit is ready in under 3 minutes. AI receptionist answers calls on Day 1. Most contractors see new citations and leads within 30 days.",
    },
    {
      q: "What exactly does the AI Employee do?",
      a: "It handles 8 jobs: answers every call 24/7, texts back missed callers in 30 seconds, replies to emails in 22 seconds, chats with web visitors, books appointments, requests reviews after every job, updates your dashboard, and alerts you on every lead.",
    },
    {
      q: "Do I need any technical experience?",
      a: "None. We handle the entire setup in 48 hours. You hand us your business details and we build everything. You just get the calls.",
    },
    {
      q: "Can I cancel?",
      a: "Yes. Month-to-month, no contracts. Cancel anytime.",
    },
    {
      q: "Is this just SEO?",
      a: "No. SEO targets Google. We also target ChatGPT, Perplexity, and Google AI Overviews — plus we handle your calls, leads, follow-up, and reviews.",
    },
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AutoGrowth AI",
    applicationCategory: "BusinessApplication",
    description: "AI growth platform for local service businesses",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "497",
      highPrice: "4997",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: "AutoGrowth AI",
      url: "https://www.autogrowthai.co",
    },
  };

  const faqSchema = buildFaqSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO ── */}
      <section className="bg-white pt-20 pb-10 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-emerald-200">
            Powered by The AutoGrowth Engine™
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            We Help HVAC Companies Book More Jobs Without{" "}
            <span className="text-gradient">Hiring More Office Staff</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            AutoGrowth AI recovers your missed calls, follows up on unsold
            estimates, generates 5-star Google reviews, and covers your phones
            24/7 &mdash; so you make more money without adding headcount.
          </p>

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
          <p className="text-sm text-gray-500">⚡ Free audit. No credit card. Results in under 3 minutes.</p>
        </div>
      </section>

      {/* Revenue-first tagline band */}
      <section className="bg-gray-50 border-y border-gray-200 py-6 px-6 lg:px-8">
        <p className="max-w-3xl mx-auto text-center text-base sm:text-lg text-gray-700">
          Every AutoGrowth AI feature answers one question:{" "}
          <span className="font-semibold text-gray-900">
            How does this make you more money?
          </span>
        </p>
      </section>

      {/* Dashboard mockup */}
      <section className="relative overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 65%, #d1fae5 0%, #ecfdf5 38%, #ffffff 68%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[900px] mx-auto">
          <div className="shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]">
            <div className="bg-gray-900 rounded-t-2xl pt-6 sm:pt-8 px-2 sm:px-4 pb-2 sm:pb-4 relative">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-600 mx-auto mb-3" />

              <div className="rounded-xl bg-white overflow-hidden min-h-[480px] flex">
                {/* Sidebar — hidden on mobile to save horizontal space */}
                <div className="hidden sm:flex w-[200px] shrink-0 bg-gray-50 border-r border-gray-200 flex-col">
                  <div className="px-4 pt-4 pb-3 border-b border-gray-200">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-sm font-bold text-gray-900 tracking-tight">AUTOGROWTH</span>
                    </div>
                  </div>
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

                {/* Main content */}
                <div className="flex-1 p-3 sm:p-5 overflow-hidden min-w-0">
                  <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                    <span className="text-sm sm:text-lg font-semibold text-gray-900 truncate">Good morning, James</span>
                    <span className="hidden sm:inline text-sm text-gray-400 shrink-0">Tuesday, May 6, 2026</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
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
                        className="bg-white border border-gray-100 rounded-xl p-2.5 sm:p-3 shadow-sm min-w-0"
                      >
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-wide text-gray-400 mb-1 truncate">
                          {card.label}
                        </p>
                        <p className={`text-2xl sm:text-3xl font-bold leading-none mb-1 ${card.valueCls}`}>
                          {card.value}
                          {card.suffix && (
                            <span className={card.suffixCls}>{card.suffix}</span>
                          )}
                        </p>
                        <p className={`text-[10px] ${card.subCls} truncate`}>{card.sub}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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
                            <span className="text-gray-800 font-medium min-w-0 truncate flex-1">
                              {lead.name}
                            </span>
                            <span className="hidden sm:inline text-gray-400 min-w-0 truncate flex-1">{lead.service}</span>
                            <span className="hidden sm:inline text-gray-500 shrink-0 text-right">
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

            <div className="bg-gradient-to-b from-gray-300 to-gray-400 h-5 rounded-b-2xl mx-6 sm:mx-16 flex items-center justify-center">
              <div className="w-12 sm:w-16 h-2.5 bg-black/10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THE PROBLEM ── */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-4">
            The $50,000 problem most HVAC contractors don&apos;t see
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Three scenarios happening in your business right now.
          </p>

          {/* 3 narrative pain points */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: "📞",
                title: "Missed AC call at 9pm",
                body: "Your phone rings at 9pm when a homeowner's AC dies. Nobody answers. They call your competitor.",
              },
              {
                icon: "📋",
                title: "$112,000 in unsold estimates",
                body: "You sent 47 estimates last month. 28 never responded. That's $112,000 sitting on the table.",
              },
              {
                icon: "⭐",
                title: "Zero reviews on a $2,400 install",
                body: "Your technician finished a $2,400 install. No one asked for a Google review. Your competitor with 200 reviews just took the next call.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <p className="font-bold text-gray-900 mb-2">{title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Google search, Google Maps, Google AI Overviews, ChatGPT,
                Perplexity — there are now 5+ places homeowners look before
                they call someone for HVAC. Most HVAC contractors show up in
                maybe one. Your competitors are showing up in all of them.
              </p>
              <p className="text-gray-900 font-semibold text-lg">
                You don&apos;t know which calls you&apos;re missing because you
                can&apos;t see where you&apos;re invisible.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
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

      {/* ── 3. THE SOLUTION ── */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            The Solution
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            The AutoGrowth Engine™
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            AutoGrowth AI uses AI to answer your calls, capture every lead, follow
            up automatically, and make you visible where your customers are
            searching — including ChatGPT and Perplexity.
          </p>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ── */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              The AutoGrowth Engine™ — How It Works
            </h2>
          </div>
          <div className="space-y-10">
            {[
              {
                title: "Free Audit",
                desc: "We analyze your visibility across Google, ChatGPT, Perplexity, and Google AI. You see exactly where you stand — and where you're losing jobs to competitors.",
              },
              {
                title: "AI Setup",
                desc: "We build your AI employee in 48 hours. Your phone gets answered, leads get followed up, reviews get requested — all automatically from day one.",
              },
              {
                title: "Growth",
                desc: "Your AI captures leads, books jobs, and improves nightly. Monthly reports show your calls captured, citations gained, and revenue tracked.",
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 text-white font-bold text-lg">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
                    Step {i + 1}
                  </p>
                  <p className="text-xl font-bold text-gray-900 mb-2">{title}</p>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
            >
              Start with a free audit →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. FEATURES ── */}
      <section className="py-20 px-6 lg:px-8 bg-white">
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

      {/* ── 6. PRICING ── */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
              Simple, transparent pricing
            </h2>
            <p className="text-emerald-700 font-bold text-lg">
              Every plan is powered by The AutoGrowth Engine™
            </p>
            <p className="text-gray-500 mt-2">No contracts. Cancel any time.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                  tier.popular
                    ? "border-2 border-emerald-500 shadow-lg"
                    : "border border-gray-200 shadow-sm"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    BEST VALUE
                  </span>
                )}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-lg font-normal text-gray-400">{tier.priceNote}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f, j) => {
                    const isInherited = f.startsWith("Everything in");
                    if (isInherited) {
                      return (
                        <li key={j} className="text-gray-400 text-xs font-medium mb-1 mt-2">
                          {f}
                        </li>
                      );
                    }
                    return (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                        {f}
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href={tier.href}
                  className={`inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-colors ${
                    tier.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-emerald-500 hover:bg-emerald-600 text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
              See all plans including Complete ($4,997/mo) →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. RESULTS / CASE STUDIES ── */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
              Real Results from Real Businesses
            </h2>
            <p className="text-gray-600 text-lg">
              <strong className="text-emerald-700">The AutoGrowth Engine™</strong> in action.
            </p>
          </div>

          {/* Placeholder case study card */}
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              {/* Photo placeholder */}
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-2xl shrink-0">
                🏗️
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-300 text-sm">Business Name</p>
                <p className="text-sm text-gray-300">Industry · Location</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded-full shrink-0">
                COMING SOON
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🏗️ COMING SOON — First Case Study
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Our first client is live right now. In 7 days, you&apos;ll see their
              real numbers here:
            </p>

            {/* 4 metric boxes */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: "Calls Captured / Week", value: "[coming]" },
                { label: "Appointments Booked", value: "[coming]" },
                { label: "Est. Revenue Captured", value: "[coming]" },
                { label: "AI Quality Score", value: "[coming]" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-gray-300 mb-1">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            {/* Quote placeholder */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-300 italic">
                &ldquo;Quote from client will appear here...&rdquo;
              </p>
            </div>

            <p className="text-sm text-gray-500 mb-5">
              Want to be our next case study? First 5 clients get featured on our
              website with a link to their business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Get Started →
            </Link>
          </div>

          {/* 3 aggregate metric placeholders */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "Calls Captured", prefix: "", suffix: "+ Calls Captured", placeholder: "—" },
              { label: "Appointments Booked", prefix: "", suffix: "+ Appointments Booked", placeholder: "—" },
              { label: "Revenue Generated", prefix: "$", suffix: " Revenue Generated", placeholder: "—" },
            ].map(({ label, placeholder }) => (
              <div
                key={label}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center"
              >
                <p className="text-5xl font-black text-gray-200 mb-3">{placeholder}</p>
                <p className="text-sm font-medium text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. COMPARISON ── */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
              Why AutoGrowth AI vs Competitors
            </h2>
            <p className="text-gray-600">
              Full-stack AI marketing platform. Not a DIY tool. Not a $10k agency.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-emerald-700 uppercase tracking-wide">
                    AutoGrowth AI
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    GoHighLevel
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Scorpion
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    DIY
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-gray-50/40" : "bg-white"}>
                    <td className="px-6 py-3.5 text-gray-700 border-b border-gray-100">
                      {row.feature}
                    </td>
                    {[row.ag, row.ghl, row.scorp, row.diy].map((val, j) => (
                      <td
                        key={j}
                        className={`px-6 py-3.5 text-center border-b border-gray-100 ${j === 0 ? "bg-emerald-50/40" : ""}`}
                      >
                        {typeof val === "boolean" ? (
                          val ? (
                            <span className="text-emerald-600 font-bold text-base">✓</span>
                          ) : (
                            <span className="text-gray-300 text-base">✗</span>
                          )
                        ) : (
                          <span className="text-xs text-gray-500">{val as string}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-white border-t-2 border-gray-200">
                  <td className="px-6 py-4 text-gray-700 font-semibold">Price</td>
                  <td className="px-6 py-4 text-center bg-emerald-50/40">
                    <span className="text-sm font-bold text-emerald-700">$497–$4,997/mo</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs text-gray-500">$594+/mo DIY</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs text-gray-500">$10k+/mo</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs text-gray-500">Your time</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 9. FREE AUDIT CTA ── */}
      <section className="bg-zinc-900 py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white font-bold text-4xl tracking-tight mb-4">
            Find out what you&apos;re missing
          </h2>
          <p className="text-zinc-400 text-xl mb-10">
            Get your free visibility audit. See where you rank on Google AND AI search — vs. your top competitors. Results in under 3 minutes.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Get Your Free Audit →
          </Link>
        </div>
      </section>

      {/* ── 10. FAQ ── */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-10">
            Common questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="w-full px-6 py-4 flex items-center justify-between text-gray-900 font-semibold text-sm cursor-pointer list-none hover:text-gray-700 transition-colors">
                  {faq.q}
                  <span className="text-gray-400 ml-4 shrink-0 transition-transform group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
