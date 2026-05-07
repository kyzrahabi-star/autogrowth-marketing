"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

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
    <div className="min-h-screen bg-white py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 text-center mb-4">
          How Much Revenue Are You Losing to Google AND AI?
        </h1>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          Homeowners now search Google, ChatGPT, and Perplexity before they call
          anyone. Missing from any of them means lost revenue. See what it&apos;s
          costing you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-8">
            <h2 className="text-lg font-semibold text-gray-900">Your numbers</h2>

            {/* Monthly calls */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-700 font-medium">
                  Monthly inbound calls
                </label>
                <span className="text-sm font-bold text-gray-900">{calls}</span>
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
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            {/* Job value */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-700 font-medium">
                  Average job value
                </label>
                <span className="text-sm font-bold text-gray-900">
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
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$100</span>
                <span>$5,000</span>
              </div>
            </div>

            {/* Close rate */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-700 font-medium">Close rate</label>
                <span className="text-sm font-bold text-gray-900">
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
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10%</span>
                <span>90%</span>
              </div>
            </div>

            {/* Current visibility */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-700 font-medium">
                  Current online visibility score
                </label>
                <span className="text-sm font-bold text-red-500">0 / 100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full w-0" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                You&apos;re missing across Google and AI search
              </p>
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-4">
            {/* Currently */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-sm text-gray-500 mb-2">Currently</p>
              <p className="text-3xl font-bold text-gray-900">$0</p>
              <p className="text-sm text-gray-500 mt-1">
                0 calls from Google + AI search — $0 revenue
              </p>
            </div>

            {/* 50% visibility */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <p className="text-sm text-emerald-700 mb-2">At 50% Online Visibility</p>
              <p className="text-3xl font-bold text-emerald-700">
                {fmt(results.revenue50)}
                <span className="text-lg text-gray-500 font-normal">
                  /month
                </span>
              </p>
              <p className="text-sm text-emerald-600 mt-1">
                +{results.calls50} additional calls/month from Google + AI
              </p>
            </div>

            {/* 80% visibility */}
            <div className="bg-emerald-500 rounded-xl p-6">
              <p className="text-sm text-white mb-2 font-medium">
                At 80% Online Visibility
              </p>
              <p className="text-3xl font-bold text-white">
                {fmt(results.revenue80)}
                <span className="text-lg text-emerald-100 font-normal">
                  /month
                </span>
              </p>
              <p className="text-sm text-emerald-100 mt-1">
                +{results.calls80} additional calls/month from Google + AI
              </p>
            </div>

            {/* Annual lift */}
            <div className="bg-gray-900 text-white rounded-xl p-6">
              <p className="text-sm text-gray-400 mb-2">Annual revenue lift</p>
              <p className="text-3xl font-bold text-gradient">
                {fmt(results.annualLow)} — {fmt(results.annualHigh)}
              </p>
              <p className="text-xs text-gray-400 mt-1">based on Google + AI visibility improving from 0 to 50–80%</p>
            </div>
          </div>
        </div>

        {/* How we calculate */}
        <div className="mt-8 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <button
            className="w-full px-6 py-4 text-left text-sm text-gray-500 flex items-center justify-between hover:text-gray-900 transition-colors"
            onClick={() => setShowMath(!showMath)}
          >
            <span>How we calculate this</span>
            <span className="text-gray-400">
              {showMath ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </button>
          {showMath && (
            <div className="px-6 pb-6 text-sm text-gray-500 space-y-2">
              <p>
                <strong className="text-gray-900">Google + AI share:</strong> 15%
                of inbound calls now come from AI tools (ChatGPT, Perplexity,
                Google AI Overviews), on top of existing Google search traffic.
              </p>
              <p>
                <strong className="text-gray-900">Capture rate:</strong> At 50%
                AI visibility, you capture 50% of those AI searches. At 80%, you
                capture 80%.
              </p>
              <p>
                <strong className="text-gray-900">Formula:</strong> Additional
                calls = Monthly calls × 15% × visibility %. Revenue = Additional
                calls × job value × close rate.
              </p>
              <p className="text-gray-400 text-xs">
                These are estimates based on industry benchmarks. Actual results
                vary by market, seasonality, and business type.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            See your real visibility score across Google and AI — free.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Get your real score — free
          </Link>
        </div>
      </div>
    </div>
  );
}
