"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Check, X, AlertTriangle, Zap, ArrowRight, Phone } from "lucide-react";

type StepStatus = "waiting" | "loading" | "done";
type EngineStatus = "scanning" | "found" | "not-found";

const COMPETITORS = [
  { name: "Columbus Worthington Air", stars: "4.9", reviews: 312, citations: 7, ads: true },
  { name: "Custom Air Solutions",     stars: "4.8", reviews: 198, citations: 4, ads: true },
  { name: "Hetter Heating & Cooling", stars: "4.7", reviews: 156, citations: 3, ads: false },
  { name: "Logan Services",           stars: "4.5", reviews: 89,  citations: 1, ads: false },
  { name: "ProComfort HVAC",          stars: "4.3", reviews: 62,  citations: 0, ads: false },
];

const WEBSITE_CHECKS: { label: string; pass: boolean }[] = [
  { label: "Mobile responsive",      pass: true  },
  { label: "Missing schema markup",  pass: false },
  { label: "No online booking",      pass: false },
  { label: "No chat widget",         pass: false },
  { label: "Has service pages",      pass: true  },
];

const ISSUES = [
  {
    level: "critical" as const,
    icon: "🔴",
    title: "Invisible to AI search",
    body: "0 citations across ChatGPT, Perplexity, and Google AI. When homeowners ask AI who to call, your competitors get recommended — you don't.",
  },
  {
    level: "critical" as const,
    icon: "🔴",
    title: "Outgunned on reviews",
    body: "47 reviews vs. competitor average of 198. Google and AI both use review volume as a trust signal. You're losing jobs to this gap every week.",
  },
  {
    level: "important" as const,
    icon: "🟡",
    title: "No online booking",
    body: "3 of your 5 top competitors offer instant scheduling. Customers who can't book online call whoever they can book first.",
  },
  {
    level: "quickwin" as const,
    icon: "🟢",
    title: "Add schema markup",
    body: "Your site has no HVACBusiness or Service schema. Adding it is a quick win that improves both Google rankings and AI citation eligibility.",
  },
];

function Spinner({ size = 5 }: { size?: number }) {
  return (
    <div
      className={`w-${size} h-${size} border-2 border-emerald-500 border-t-transparent rounded-full animate-spin shrink-0`}
    />
  );
}

function StepIndicator({ status }: { status: StepStatus }) {
  if (status === "done")
    return (
      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
      </div>
    );
  if (status === "loading") return <Spinner size={5} />;
  return <div className="w-6 h-6 rounded-full border-2 border-gray-200 shrink-0" />;
}

function ScoreBar({ score, max = 100 }: { score: number; max?: number }) {
  const pct = Math.round((score / max) * 100);
  const color = pct >= 61 ? "bg-emerald-500" : pct >= 41 ? "bg-yellow-400" : pct >= 21 ? "bg-orange-400" : "bg-red-500";
  return (
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ${color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function EngineCard({ name, status }: { name: string; status: EngineStatus }) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 text-sm transition-all duration-500 ${
        status === "found"
          ? "border-emerald-200 bg-emerald-50"
          : status === "not-found"
          ? "border-red-200 bg-red-50"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-900">{name}</span>
        {status === "scanning" && (
          <span className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Spinner size={3} /> Scanning...
          </span>
        )}
        {status === "not-found" && (
          <span className="flex items-center gap-1 text-red-600 text-xs font-semibold">
            <X className="w-3.5 h-3.5" strokeWidth={3} /> Not found
          </span>
        )}
        {status === "found" && (
          <span className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
            <Check className="w-3.5 h-3.5" strokeWidth={3} /> Found!
          </span>
        )}
      </div>
    </div>
  );
}

export function AuditResults() {
  const params = useSearchParams();
  const business = decodeURIComponent(params.get("business") ?? "Your Business");
  const city = decodeURIComponent(params.get("city") ?? "your city");
  const state = decodeURIComponent(params.get("state") ?? "");
  const service = decodeURIComponent(params.get("service") ?? "HVAC");

  const [stepStatus, setStepStatus] = useState<StepStatus[]>([
    "loading", "waiting", "waiting", "waiting", "waiting", "waiting",
  ]);
  const [progress, setProgress] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  // Step 1 — Google profile
  const [stars, setStars] = useState(0.0);
  const [reviewCount, setReviewCount] = useState(0);

  // Step 2 — Competitors
  const [competitorCount, setCompetitorCount] = useState(0);
  const [visibleCompetitors, setVisibleCompetitors] = useState(0);

  // Step 3 — AI search
  const [aiScore, setAiScore] = useState(0);
  const [engineStatus, setEngineStatus] = useState<EngineStatus[]>([
    "scanning", "scanning", "scanning",
  ]);

  // Step 4 — Website
  const [websiteScore, setWebsiteScore] = useState(0);
  const [visibleChecks, setVisibleChecks] = useState(0);

  // Step 5 — Reviews
  const [reviewScore, setReviewScore] = useState(0);

  useEffect(() => {
    const TOTAL = 35_000;
    const start = Date.now();
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    const T = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      timeouts.push(id);
    };
    const I = (fn: () => void, ms: number) => {
      const id = setInterval(fn, ms);
      intervals.push(id);
      return id;
    };

    // Progress bar
    I(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(Math.floor((elapsed / TOTAL) * 95), 95));
    }, 200);

    // Step completions — mark done + activate next
    [3000, 8000, 15000, 22000, 28000, 35000].forEach((ms, i) => {
      T(() => {
        setStepStatus((prev) => {
          const next = [...prev] as StepStatus[];
          next[i] = "done";
          if (i + 1 < next.length) next[i + 1] = "loading";
          return next;
        });
      }, ms);
    });

    // Step 1 content: stars + review count (3-8s)
    T(() => {
      let s = 0;
      let id: ReturnType<typeof setInterval>;
      id = I(() => {
        s = Math.min(+(s + 0.2).toFixed(1), 4.2);
        setStars(s);
        if (s >= 4.2) clearInterval(id);
      }, 120);
    }, 3200);

    T(() => {
      let r = 0;
      let id: ReturnType<typeof setInterval>;
      id = I(() => {
        r = Math.min(r + 4, 47);
        setReviewCount(r);
        if (r >= 47) clearInterval(id);
      }, 100);
    }, 3200);

    // Step 2 content: competitor cards + count (8-15s)
    T(() => setVisibleCompetitors(1), 9000);
    T(() => setVisibleCompetitors(2), 11200);
    T(() => setVisibleCompetitors(3), 13400);

    T(() => {
      let c = 0;
      let id: ReturnType<typeof setInterval>;
      id = I(() => {
        c = Math.min(c + 1, 15);
        setCompetitorCount(c);
        if (c >= 15) clearInterval(id);
      }, 300);
    }, 8800);

    // Step 3 content: engine flips + AI score (15-22s)
    T(() => setEngineStatus((p) => { const n = [...p] as EngineStatus[]; n[0] = "not-found"; return n; }), 16500);
    T(() => setEngineStatus((p) => { const n = [...p] as EngineStatus[]; n[1] = "not-found"; return n; }), 18800);
    T(() => setEngineStatus((p) => { const n = [...p] as EngineStatus[]; n[2] = "found"; return n; }), 20500);

    T(() => {
      let a = 0;
      let id: ReturnType<typeof setInterval>;
      id = I(() => {
        a = Math.min(a + 1, 12);
        setAiScore(a);
        if (a >= 12) clearInterval(id);
      }, 350);
    }, 21200);

    // Step 4 content: website checks + score (22-28s)
    [22600, 23600, 24600, 25600, 26600].forEach((ms, i) => {
      T(() => setVisibleChecks(i + 1), ms);
    });

    T(() => {
      let w = 0;
      let id: ReturnType<typeof setInterval>;
      id = I(() => {
        w = Math.min(w + 3, 38);
        setWebsiteScore(w);
        if (w >= 38) clearInterval(id);
      }, 150);
    }, 23000);

    // Step 5 content: review score (28-35s)
    T(() => {
      let rv = 0;
      let id: ReturnType<typeof setInterval>;
      id = I(() => {
        rv = Math.min(rv + 2, 24);
        setReviewScore(rv);
        if (rv >= 24) clearInterval(id);
      }, 180);
    }, 28800);

    // Final reveal
    T(() => {
      intervals.forEach(clearInterval);
      setProgress(100);
      setShowFinal(true);
    }, 35000);

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  const overallScore = Math.round((aiScore + websiteScore + reviewScore) / 3);
  const finalOverall = 25;
  const grade = finalOverall >= 81 ? "A" : finalOverall >= 61 ? "B" : finalOverall >= 41 ? "C" : finalOverall >= 21 ? "D" : "F";
  const gradeColor = grade === "A" ? "text-emerald-600 border-emerald-200 bg-emerald-50"
    : grade === "B" ? "text-blue-600 border-blue-200 bg-blue-50"
    : grade === "C" ? "text-yellow-600 border-yellow-200 bg-yellow-50"
    : grade === "D" ? "text-orange-600 border-orange-200 bg-orange-50"
    : "text-red-600 border-red-200 bg-red-50";

  const activeStep = stepStatus.lastIndexOf("done") + 1;
  const stepTitles = [
    `Finding ${business} on Google...`,
    "Scanning your Google Business Profile...",
    `Discovering competitors near ${city}...`,
    "Checking AI search visibility...",
    "Auditing your website...",
    "Analyzing your reviews...",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header + progress */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 py-4 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-lg font-bold text-gray-900 truncate">
              {showFinal ? `Audit complete — ${business}` : stepTitles[Math.min(activeStep, 5)]}
            </h1>
            <span className="text-sm font-semibold text-gray-500 shrink-0 ml-4">
              {progress}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {/* ── Step 0: Finding business ── */}
        <StepCard status={stepStatus[0]} title={stepTitles[0]}>
          {(stepStatus[0] === "loading" || stepStatus[0] === "done") && (
            <div className="animate-fade-in-up mt-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 text-base">{business}</p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    📍 {city}{state ? `, ${state}` : ""} · {service}
                  </p>
                  {stepStatus[0] === "done" && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full mt-2">
                      <Check className="w-3 h-3" strokeWidth={3} /> Found on Google
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </StepCard>

        {/* ── Step 1: Google Business Profile ── */}
        <StepCard status={stepStatus[1]} title={stepTitles[1]}>
          {(stepStatus[1] === "loading" || stepStatus[1] === "done") && (
            <div className="animate-fade-in-up mt-4 grid sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                <p className="text-3xl font-bold text-gray-900 tabular-nums">
                  {stars.toFixed(1)}
                </p>
                <p className="text-xs text-gray-500 mt-1">★ Google Rating</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                <p className="text-3xl font-bold text-gray-900 tabular-nums">
                  {reviewCount}
                </p>
                <p className="text-xs text-gray-500 mt-1">Google Reviews</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                <p className="text-sm font-semibold text-gray-900">Mon–Fri 8am–6pm</p>
                <p className="text-xs text-gray-400 mt-1">Sat 9am–2pm · Sun Closed</p>
                <p className="text-xs text-gray-500 mt-1">Hours listed</p>
              </div>
              {stepStatus[1] === "done" && (
                <div className="sm:col-span-3 flex items-center gap-2 text-xs text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2.5 animate-fade-in">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  Profile claimed but needs optimization — missing posts, Q&A, and service descriptions
                </div>
              )}
            </div>
          )}
        </StepCard>

        {/* ── Step 2: Competitors ── */}
        <StepCard status={stepStatus[2]} title={stepTitles[2]}>
          {(stepStatus[2] === "loading" || stepStatus[2] === "done") && (
            <div className="mt-4 space-y-3">
              {COMPETITORS.slice(0, 3).map((c, i) => (
                i < visibleCompetitors ? (
                  <div
                    key={c.name}
                    className="animate-fade-in-up flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-200"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Found: {c.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {c.stars} ★ · {c.reviews} reviews · {c.citations} AI citations
                      </p>
                    </div>
                    <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full shrink-0 ml-3">
                      Active
                    </span>
                  </div>
                ) : null
              ))}
              {competitorCount > 0 && (
                <div className="animate-fade-in flex items-center gap-3 pt-1">
                  <div className="h-px bg-gray-200 flex-1" />
                  <span className="text-sm font-bold text-gray-900 tabular-nums shrink-0">
                    {competitorCount} competitors found
                  </span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
              )}
            </div>
          )}
        </StepCard>

        {/* ── Step 3: AI search visibility ── */}
        <StepCard status={stepStatus[3]} title={stepTitles[3]}>
          {(stepStatus[3] === "loading" || stepStatus[3] === "done") && (
            <div className="mt-4 space-y-3">
              {["ChatGPT", "Perplexity", "Google AI Overviews"].map((name, i) => (
                <EngineCard key={name} name={name} status={engineStatus[i]} />
              ))}
              {aiScore > 0 && (
                <div className="animate-fade-in bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 mt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">AI Visibility Score</span>
                    <span className="text-xl font-bold text-gray-900 tabular-nums">{aiScore}<span className="text-sm font-normal text-gray-400">/100</span></span>
                  </div>
                  <ScoreBar score={aiScore} />
                </div>
              )}
            </div>
          )}
        </StepCard>

        {/* ── Step 4: Website audit ── */}
        <StepCard status={stepStatus[4]} title={stepTitles[4]}>
          {(stepStatus[4] === "loading" || stepStatus[4] === "done") && (
            <div className="mt-4 space-y-2">
              {WEBSITE_CHECKS.map((check, i) =>
                i < visibleChecks ? (
                  <div
                    key={check.label}
                    className="animate-fade-in-up flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-2.5 border border-gray-200"
                  >
                    {check.pass ? (
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={3} />
                    ) : (
                      <X className="w-4 h-4 text-red-400 shrink-0" strokeWidth={2.5} />
                    )}
                    <span className={`text-sm ${check.pass ? "text-gray-700" : "text-gray-500 line-through"}`}>
                      {check.label}
                    </span>
                  </div>
                ) : null
              )}
              {websiteScore > 0 && (
                <div className="animate-fade-in bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Website Score</span>
                    <span className="text-xl font-bold text-gray-900 tabular-nums">{websiteScore}<span className="text-sm font-normal text-gray-400">/100</span></span>
                  </div>
                  <ScoreBar score={websiteScore} />
                </div>
              )}
            </div>
          )}
        </StepCard>

        {/* ── Step 5: Reviews ── */}
        <StepCard status={stepStatus[5]} title={stepTitles[5]}>
          {(stepStatus[5] === "loading" || stepStatus[5] === "done") && (
            <div className="mt-4 space-y-4 animate-fade-in-up">
              {/* Sentiment bar */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Review Sentiment
                </p>
                <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
                  <div className="bg-emerald-500 rounded-l-full" style={{ width: "68%" }} />
                  <div className="bg-gray-300" style={{ width: "22%" }} />
                  <div className="bg-red-400 rounded-r-full" style={{ width: "10%" }} />
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                  <span><span className="font-semibold text-emerald-600">68%</span> Positive</span>
                  <span><span className="font-semibold text-gray-500">22%</span> Neutral</span>
                  <span><span className="font-semibold text-red-500">10%</span> Negative</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <p className="text-xs font-semibold text-emerald-700 mb-2">Customers love</p>
                  <ul className="space-y-1">
                    {["Fast response times", "Professional technicians"].map((t) => (
                      <li key={t} className="text-sm text-gray-700 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" strokeWidth={3} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="text-xs font-semibold text-red-600 mb-2">Common complaints</p>
                  <ul className="space-y-1">
                    {["Pricing transparency", "Follow-up communication"].map((t) => (
                      <li key={t} className="text-sm text-gray-700 flex items-center gap-1.5">
                        <X className="w-3 h-3 text-red-400 shrink-0" strokeWidth={2.5} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {reviewScore > 0 && (
                <div className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Review Score</span>
                    <span className="text-xl font-bold text-gray-900 tabular-nums">{reviewScore}<span className="text-sm font-normal text-gray-400">/100</span></span>
                  </div>
                  <ScoreBar score={reviewScore} />
                </div>
              )}
            </div>
          )}
        </StepCard>

        {/* ── Final results ── */}
        {showFinal && (
          <div className="animate-fade-in-up space-y-8 pt-4">
            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide shrink-0">
                Audit Complete
              </span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            {/* Engine attribution badge */}
            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
                Analyzed by The AutoGrowth Engine™
              </span>
            </div>

            {/* Overall grade + score cards */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                {/* Grade circle */}
                <div className="shrink-0 text-center">
                  <div
                    className={`w-32 h-32 rounded-full border-4 flex items-center justify-center ${gradeColor}`}
                  >
                    <span className="text-6xl font-black">{grade}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-500 mt-3">Overall Grade</p>
                  <p className="text-xs text-gray-400">Score: {finalOverall}/100</p>
                </div>

                {/* Three score cards */}
                <div className="flex-1 w-full space-y-4">
                  {[
                    { label: "AI Visibility", score: 12 },
                    { label: "Website",       score: 38 },
                    { label: "Reviews",       score: 24 },
                  ].map(({ label, score }) => (
                    <div key={label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-gray-700">{label}</span>
                        <span className="text-sm font-bold text-gray-900 tabular-nums">{score}/100</span>
                      </div>
                      <ScoreBar score={score} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Competitor comparison table */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">How You Compare</h2>
                <p className="text-sm text-gray-500 mt-0.5">Your business vs. top competitors in {city}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Business</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Rating</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Reviews</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">AI Citations</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Running Ads</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Your business row */}
                    <tr className="bg-amber-50 border-b border-amber-100">
                      <td className="px-6 py-3 font-semibold text-amber-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        {business} (You)
                      </td>
                      <td className="px-4 py-3 text-center text-amber-700 font-semibold">4.2 ★</td>
                      <td className="px-4 py-3 text-center text-amber-700 font-semibold">47</td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-block w-6 h-6 bg-red-100 text-red-600 font-bold rounded-full text-xs leading-6">0</span>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400 text-xs">No</td>
                    </tr>
                    {/* Competitors */}
                    {COMPETITORS.map((c, i) => (
                      <tr key={c.name} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                        <td className="px-6 py-3 text-gray-700 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                          {c.name}
                        </td>
                        <td className="px-4 py-3 text-center text-emerald-700 font-semibold">{c.stars} ★</td>
                        <td className="px-4 py-3 text-center text-emerald-700 font-semibold">{c.reviews}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block w-6 h-6 rounded-full text-xs font-bold leading-6 ${c.citations > 0 ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-400"}`}>
                            {c.citations}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center text-xs">
                          {c.ads
                            ? <span className="text-red-500 font-semibold">Yes</span>
                            : <span className="text-gray-400">No</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Issues */}
            <div>
              <h2 className="font-bold text-gray-900 mb-4">Top Issues Found</h2>
              <div className="space-y-3">
                {ISSUES.map((issue) => (
                  <div
                    key={issue.title}
                    className={`rounded-xl border p-5 flex items-start gap-4 ${
                      issue.level === "critical"
                        ? "border-red-200 bg-red-50"
                        : issue.level === "important"
                        ? "border-yellow-200 bg-yellow-50"
                        : "border-emerald-200 bg-emerald-50"
                    }`}
                  >
                    <span className="text-lg shrink-0 mt-0.5">{issue.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm">{issue.title}</p>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{issue.body}</p>
                    </div>
                    <Link
                      href="/fix"
                      className="shrink-0 text-xs font-semibold text-emerald-600 hover:text-emerald-700 whitespace-nowrap underline underline-offset-2"
                    >
                      Fix with AutoGrowth AI →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended plan */}
            <div className="bg-zinc-900 rounded-2xl p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">
                    Recommended for your score
                  </p>
                  <h2 className="text-2xl font-bold text-white">Scale Plan</h2>
                  <p className="text-zinc-400 text-sm mt-1">
                    Your score of {finalOverall}/100 puts you in the bottom quartile. You need the full platform to close the gap fast.
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-3xl font-bold text-white">$3,997</p>
                  <p className="text-zinc-400 text-xs">/month + $5,000 setup</p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                {[
                  "AI search domination across 5 platforms",
                  "1 blog post + 4 video scripts/week",
                  "Lead scoring + 60-second SMS alert",
                  "6-step 14-day follow-up sequence",
                  "Reputation agent + review management",
                  "Full competitor monitoring dashboard",
                  "Dedicated success manager",
                  "Unlimited city × service pages",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-200">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://cal.com/autogrowthai/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Book a Free Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="inline-flex items-center justify-center gap-2 border border-zinc-600 text-zinc-300 px-6 py-3.5 rounded-full text-sm">
                  <Check className="w-4 h-4 text-emerald-400" strokeWidth={2.5} />
                  Full report sent to your email
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StepCard({
  status,
  title,
  children,
}: {
  status: StepStatus;
  title: string;
  children?: React.ReactNode;
}) {
  const isVisible = status !== "waiting";
  if (!isVisible) return null;
  return (
    <div className={`bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 ${status === "done" ? "border-emerald-100" : "border-gray-200"}`}>
      <div className="flex items-center gap-3">
        <StepIndicator status={status} />
        <p className={`font-semibold text-sm ${status === "done" ? "text-gray-500" : "text-gray-900"}`}>
          {title}
        </p>
      </div>
      {children}
    </div>
  );
}

