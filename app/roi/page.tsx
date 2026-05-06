"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function ROIPage() {
  const [calls, setCalls] = useState(50);
  const [jobValue, setJobValue] = useState(350);
  const [closeRate, setCloseRate] = useState(40);
  const [showMath, setShowMath] = useState(false);

  const results = useMemo(() => {
    const aiSearchShare = 0.15;
    const currentRevenue = 0;

    const calls50 = calls * aiSearchShare * 0.5;
    const revenue50 = calls50 * jobValue * (closeRate / 100);

    const calls80 = calls * aiSearchShare * 0.8;
    const revenue80 = calls80 * jobValue * (closeRate / 100);

    const annualLow = revenue50 * 12;
    const annualHigh = revenue80 * 12;

    return {
      currentRevenue,
      calls50: Math.round(calls50 * 10) / 10,
      revenue50: Math.round(revenue50),
      calls80: Math.round(calls80 * 10) / 10,
      revenue80: Math.round(revenue80),
      annualLow: Math.round(annualLow),
      annualHigh: Math.round(annualHigh),
    };
  }, [calls, jobValue, closeRate]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          ROI Calculator
        </h1>
        <p className="text-zinc-400 text-center mb-14 max-w-xl mx-auto">
          How much revenue could AI search visibility add to your business?
          Adjust the sliders and find out.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-8">
            <h2 className="text-lg font-semibold text-white">Your numbers</h2>

            {/* Monthly calls */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-zinc-300">
                  Monthly inbound calls
                </label>
                <span className="text-sm font-bold text-white">{calls}</span>
              </div>
              <input
                type="range"
                min={10}
                max={500}
                step={5}
                value={calls}
                onChange={(e) => setCalls(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-zinc-500 mt-1">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            {/* Job value */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-zinc-300">
                  Average job value
                </label>
                <span className="text-sm font-bold text-white">
                  {fmt(jobValue)}
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-zinc-500 mt-1">
                <span>$100</span>
                <span>$5,000</span>
              </div>
            </div>

            {/* Close rate */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-zinc-300">Close rate</label>
                <span className="text-sm font-bold text-white">
                  {closeRate}%
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={90}
                step={5}
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-zinc-500 mt-1">
                <span>10%</span>
                <span>90%</span>
              </div>
            </div>

            {/* Current visibility */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-zinc-300">
                  Current AI visibility
                </label>
                <span className="text-sm font-bold text-red-400">0 / 100</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full w-0" />
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                You&apos;re currently invisible
              </p>
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-4">
            {/* Currently */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-sm text-zinc-400 mb-2">Currently</p>
              <p className="text-3xl font-bold text-red-400">$0</p>
              <p className="text-sm text-zinc-500 mt-1">
                0 AI-referred calls/month — $0 revenue from AI
              </p>
            </div>

            {/* 50% visibility */}
            <div className="bg-zinc-900 border border-blue-500/50 rounded-2xl p-6">
              <p className="text-sm text-blue-400 mb-2">At 50% AI Visibility</p>
              <p className="text-3xl font-bold text-white">
                {fmt(results.revenue50)}
                <span className="text-lg text-zinc-400 font-normal">
                  /month
                </span>
              </p>
              <p className="text-sm text-zinc-400 mt-1">
                +{results.calls50} additional calls/month
              </p>
            </div>

            {/* 80% visibility */}
            <div
              className="rounded-2xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(16,185,129,0.15) 100%)",
                border: "1px solid rgba(16,185,129,0.4)",
              }}
            >
              <p className="text-sm text-emerald-400 mb-2">
                At 80% AI Visibility
              </p>
              <p className="text-3xl font-bold text-white">
                {fmt(results.revenue80)}
                <span className="text-lg text-zinc-400 font-normal">
                  /month
                </span>
              </p>
              <p className="text-sm text-zinc-400 mt-1">
                +{results.calls80} additional calls/month
              </p>
            </div>

            {/* Annual lift */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
              <p className="text-sm text-zinc-400 mb-2">Annual revenue lift</p>
              <p className="text-3xl font-bold text-gradient">
                {fmt(results.annualLow)} — {fmt(results.annualHigh)}
              </p>
              <p className="text-xs text-zinc-500 mt-1">50% to 80% scenarios</p>
            </div>
          </div>
        </div>

        {/* How we calculate */}
        <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <button
            className="w-full px-6 py-4 text-left text-sm text-zinc-400 flex items-center justify-between hover:text-white transition-colors"
            onClick={() => setShowMath(!showMath)}
          >
            <span>How we calculate this</span>
            <span>{showMath ? "▲" : "▼"}</span>
          </button>
          {showMath && (
            <div className="px-6 pb-6 text-sm text-zinc-400 space-y-2">
              <p>
                <strong className="text-zinc-200">AI search share:</strong> 15%
                of all inbound searches now originate from AI tools (ChatGPT,
                Perplexity, Google AI Overviews).
              </p>
              <p>
                <strong className="text-zinc-200">Capture rate:</strong> At 50%
                AI visibility, you capture 50% of those AI searches. At 80%, you
                capture 80%.
              </p>
              <p>
                <strong className="text-zinc-200">Formula:</strong> Additional
                calls = Monthly calls × 15% × visibility %. Revenue = Additional
                calls × job value × close rate.
              </p>
              <p className="text-zinc-500 text-xs">
                These are estimates based on industry benchmarks. Actual results
                vary by market, seasonality, and business type.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-400 mb-4">
            See your real score — not an estimate.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#10B981" }}
          >
            Get your real score — free
          </Link>
        </div>
      </div>
    </div>
  );
}
