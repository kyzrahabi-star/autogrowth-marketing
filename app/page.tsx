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
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(9,9,11,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(9,9,11,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundColor: "#09090b",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Is Your Business{" "}
            <span className="text-gradient">Invisible</span> to AI?
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10">
            When homeowners ask ChatGPT, Perplexity, or Google AI who to call —
            your competitors get recommended. You don&apos;t. We fix that.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#10B981" }}
            >
              See If You&apos;re Invisible →
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white border border-zinc-700 hover:border-zinc-500 transition-colors"
            >
              Watch the 2-min demo →
            </Link>
          </div>
          <p className="text-sm text-zinc-400">
            ⚡ Free audit. No credit card. Results in 24 hours.
          </p>
        </div>

        {/* Social proof bar */}
        <div className="w-full max-w-4xl mx-auto mt-16">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5">
            <p className="text-center text-sm text-zinc-400 mb-4">
              Trusted by contractors in Columbus, OH
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {["Logo", "Logo", "Logo"].map((label, i) => (
                <div
                  key={i}
                  className="bg-zinc-800 rounded-lg w-24 h-10 flex items-center justify-center"
                >
                  <span className="text-xs text-zinc-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            The $50,000 question nobody&apos;s asking
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Every day, thousands of homeowners type &quot;best HVAC company
                near me&quot; into ChatGPT, Perplexity, and Google AI. Those AI
                systems recommend specific businesses. If you&apos;re not in
                those answers, you don&apos;t get the call.
              </p>
              <p className="text-white font-semibold text-lg">
                Your competitor is getting calls you don&apos;t know you&apos;re
                missing.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8">
              <p className="text-sm text-zinc-400 mb-6">
                We scanned 5 HVAC contractors across 3 AI search engines.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-300 text-sm mb-1">
                    Columbus Worthington Air
                  </p>
                  <p className="text-4xl font-bold text-white">
                    7{" "}
                    <span className="text-lg text-zinc-400 font-normal">
                      citations
                    </span>
                  </p>
                </div>
                <div className="border-t border-zinc-700 pt-4">
                  <p className="text-zinc-300 text-sm mb-1">
                    Average HVAC contractor
                  </p>
                  <p className="text-4xl font-bold text-red-400">
                    0{" "}
                    <span className="text-lg text-zinc-400 font-normal">
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
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            5 Specialists. Zero employees.
          </h2>
          <p className="text-center text-zinc-400 mb-14 max-w-xl mx-auto">
            Your team that never sleeps. No hiring, no managing, no benefits. They
            run on autopilot from day one.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((s, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {s.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
            {/* 6th cell — CTA */}
            <div className="bg-gradient-to-br from-blue-900/30 to-emerald-900/30 border border-zinc-800 rounded-xl p-6 flex flex-col justify-center items-start">
              <p className="text-white font-semibold mb-2 text-lg">
                See them in action
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                15-minute live audit on your actual business.
              </p>
              <Link
                href="/demo"
                className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Book a demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results — Timeline */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            What happens in your first 30 days
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-700" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start pl-14 relative">
                  <div
                    className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ backgroundColor: "#10B981" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-400 mb-1">
                      {item.day}
                    </p>
                    <p className="text-white text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#10B981" }}
            >
              Start your free audit →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
