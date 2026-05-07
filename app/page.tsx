import Link from "next/link";

export default function HomePage() {
  const specialists = [
    {
      icon: "🔍",
      name: "AI Search Analyst",
      description:
        "Scans ChatGPT, Perplexity, and Google AI daily. Knows exactly where you rank — and where you don't. You get a morning report every day.",
    },
    {
      icon: "✏️",
      name: "Content Director",
      description:
        "Writes blog posts and video scripts that get you cited by AI. Sounds like a real technician, not a marketing bot. One new piece every week, automatically.",
    },
    {
      icon: "⚡",
      name: "Lead Specialist",
      description:
        "Scores every inbound lead 0–100 in under 60 seconds. Hot leads trigger an instant SMS to your phone. Cold leads get filed automatically.",
    },
    {
      icon: "🎯",
      name: "Customer Pursuit Manager",
      description:
        "Follows up with every lead automatically. 6-touch sequence over 14 days. No lead falls through the cracks — even the ones who ghost you.",
    },
    {
      icon: "⭐",
      name: "Reputation Director",
      description:
        "Requests reviews after every job. Monitors Google and Yelp nightly. Drafts responses in your voice. Alerts you the moment a bad review hits.",
    },
  ];

  const timeline = [
    {
      day: "Day 1",
      text: "Audit complete. You see your AI visibility score vs. competitors.",
    },
    {
      day: "Day 7",
      text: "First content published. Your AI Search Analyst starts building citations.",
    },
    {
      day: "Day 14",
      text: "First citations appear in AI search results. Lead Specialist goes live.",
    },
    {
      day: "Day 30",
      text: "Full dashboard with real data. Calls, citations, reviews — all tracked.",
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

      {/* Hero */}
      <section className="bg-white py-24 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div>
              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full border border-emerald-200 mb-6">
                ● AI Search Visibility
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                Is Your Business{" "}
                <span className="text-gradient">Invisible</span> to AI?
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                When homeowners ask ChatGPT, Perplexity, or Google AI who to call —
                your competitors get recommended. You don&apos;t. We fix that.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  See If You&apos;re Invisible →
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Watch the 2-min demo →
                </Link>
              </div>
              <p className="text-sm text-gray-500">
                ⚡ Free audit. No credit card. Results in 24 hours.
              </p>
            </div>

            {/* Right column — Dashboard mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 w-full max-w-md">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-gray-900">AI Visibility Dashboard</span>
                  <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Live</span>
                </div>
                {/* Score card */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">Your AI Visibility Score</div>
                  <div className="text-4xl font-bold text-gray-900">
                    67<span className="text-lg text-gray-400">/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "67%" }}></div>
                  </div>
                </div>
                {/* Competitor comparison */}
                <div className="space-y-2 mb-4">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Competitors</div>
                  {[
                    { name: "Worthington Air", score: 84, color: "text-red-500", bg: "bg-red-500" },
                    { name: "Columbus HVAC Pro", score: 71, color: "text-amber-500", bg: "bg-amber-500" },
                    { name: "Your Business", score: 67, color: "text-emerald-500", bg: "bg-emerald-500" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <span className="text-xs text-gray-600 w-32 truncate">{c.name}</span>
                      <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${c.bg}`}
                          style={{ width: `${c.score}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs font-semibold ${c.color}`}>{c.score}</span>
                    </div>
                  ))}
                </div>
                {/* Lead alert */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <div className="text-xs font-semibold text-emerald-700">🔥 Hot Lead Alert</div>
                  <div className="text-xs text-emerald-600 mt-1">Sarah M. — AC Repair — Score: 94/100</div>
                </div>
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
                Every day, thousands of homeowners type &quot;best HVAC company
                near me&quot; into ChatGPT, Perplexity, and Google AI. Those AI
                systems recommend specific businesses. If you&apos;re not in
                those answers, you don&apos;t get the call.
              </p>
              <p className="text-gray-900 font-semibold text-lg">
                Your competitor is getting calls you don&apos;t know you&apos;re
                missing.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <p className="text-sm text-gray-500 mb-6">
                We scanned 5 HVAC contractors across 3 AI search engines.
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
              Your team that never sleeps. No hiring, no managing, no benefits. They
              run on autopilot from day one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="bg-emerald-50 rounded-xl p-3 w-fit mb-4">
                  <span className="text-2xl">{s.icon}</span>
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
                <div className="text-emerald-500 text-lg mb-4">★★★★★</div>
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
            Ready to stop being invisible?
          </h2>
          <p className="text-zinc-400 text-xl mb-10">
            Get your free AI visibility audit. See exactly where you stand vs. your competitors — in 24 hours.
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
