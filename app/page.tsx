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
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full border border-emerald-200 mb-6">
            ● AI Search Visibility
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

      {/* Hero — green gradient + iPhone mockup */}
      <section className="relative overflow-hidden">
        {/* Gradient fill */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-emerald-100" />
        {/* Bottom wave fade back to white */}
        <svg
          className="absolute bottom-0 left-0 w-full z-10"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 80C360 20 1080 20 1440 80V80H0Z" fill="white" />
        </svg>

        {/* iPhone frame */}
        <div className="relative z-20 flex justify-center pt-10 pb-20">
          <div
            className="relative bg-gray-900 rounded-[3rem] max-w-[300px] w-full mx-6"
            style={{ padding: "12px", boxShadow: "0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.08) inset" }}
          >
            {/* Physical buttons */}
            <div className="absolute left-[-3px] top-[76px] w-[3px] h-7 bg-gray-700 rounded-l-sm" />
            <div className="absolute left-[-3px] top-[116px] w-[3px] h-9 bg-gray-700 rounded-l-sm" />
            <div className="absolute left-[-3px] top-[156px] w-[3px] h-9 bg-gray-700 rounded-l-sm" />
            <div className="absolute right-[-3px] top-[116px] w-[3px] h-14 bg-gray-700 rounded-r-sm" />

            {/* Screen */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden">
              {/* Dynamic Island */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-[112px] h-7 bg-black rounded-full" />
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-5 pb-2">
                <span className="text-[10px] font-bold text-gray-900 tabular-nums">9:41</span>
                <div className="flex items-center gap-1.5">
                  {/* Signal bars */}
                  <div className="flex items-end gap-[2px]">
                    {[3, 5, 7, 9].map((h, i) => (
                      <div
                        key={i}
                        className={`w-[3px] rounded-sm ${i < 3 ? "bg-gray-900" : "bg-gray-300"}`}
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                  {/* WiFi */}
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                    <path d="M6.5 7.2a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" fill="#111827" />
                    <path d="M3.2 4.8a4.7 4.7 0 016.6 0" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M1 2.5a7.5 7.5 0 0111 0" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {/* Battery */}
                  <div className="relative flex items-center">
                    <div className="w-[22px] h-[11px] border border-gray-900 rounded-[2px] relative">
                      <div className="absolute inset-[1.5px] right-[2px] bg-gray-900 rounded-[1px]" />
                    </div>
                    <div className="w-[2px] h-[5px] bg-gray-900 rounded-r-sm ml-[1px]" />
                  </div>
                </div>
              </div>

              {/* App content */}
              <div className="px-4 pb-6 pt-1">
                {/* App bar */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-gray-900">AutoGrowth</span>
                  <span className="text-[9px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-semibold">
                    Action needed
                  </span>
                </div>

                {/* Score block */}
                <div className="bg-gray-50 rounded-2xl p-3 mb-3">
                  <p className="text-[10px] text-gray-500 font-medium mb-2">Your AI Visibility Report</p>
                  <div className="flex items-end gap-1 mb-1.5">
                    <span className="text-5xl font-bold text-red-500 leading-none">0</span>
                    <span className="text-sm text-gray-400 pb-1">/100</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    <span className="text-[11px] text-red-600 font-medium">You&apos;re invisible to AI</span>
                  </div>
                </div>

                {/* Competitor bars */}
                <div className="mb-3">
                  <p className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Competitors getting your calls:
                  </p>
                  {[
                    { name: "Columbus Worthington Air", count: 7, pct: "100%" },
                    { name: "Custom Air", count: 6, pct: "86%" },
                    { name: "Hetter Heating", count: 5, pct: "71%" },
                  ].map((c) => (
                    <div key={c.name} className="mb-2">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] text-gray-700 truncate pr-2">{c.name}</span>
                        <span className="text-[10px] text-emerald-600 font-semibold shrink-0">
                          Cited {c.count}×
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: c.pct }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Warnings */}
                <div className="bg-red-50 rounded-xl p-2.5 mb-3">
                  <p className="text-[10px] font-semibold text-red-700 mb-1.5">
                    ⚠ 3 services with zero AI presence
                  </p>
                  <div className="space-y-0.5">
                    {["AC repair", "Furnace installation", "Emergency AC"].map((s) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <span className="text-red-400 text-[10px] leading-none">✕</span>
                        <span className="text-[10px] text-red-600">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-emerald-500 text-white text-[11px] font-bold py-2.5 rounded-xl">
                  Fix Your Visibility
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-gray-50 border-y border-gray-200 py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-6">
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
            <p className="text-emerald-600 text-sm font-semibold uppercase tracking-wide mb-3">
              Your AI-Powered Team
            </p>
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
                <div className="bg-emerald-50 rounded-xl p-2.5 w-fit mb-4">
                  <s.Icon className="w-10 h-10 text-emerald-600" strokeWidth={1.5} />
                </div>
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
                  <div className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 bg-emerald-500">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-600 mb-1">
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
                    <Star key={k} className="w-4 h-4 text-emerald-500 fill-emerald-500" strokeWidth={0} />
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
