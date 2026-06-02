"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, TrendingDown } from "lucide-react";

const PLATFORM_COST = 497;
const WEEKS_PER_MONTH = 4.33;

// Smoothly ease an animated number toward a target value over `durationMs`.
// Re-runs whenever target changes; cubic ease-out feels natural for big jumps.
function useAnimatedNumber(target: number, durationMs = 350) {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    fromRef.current = display;
    startTimeRef.current = null;
    let rafId: number;

    const tick = (now: number) => {
      if (startTimeRef.current === null) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(fromRef.current + (target - fromRef.current) * eased);
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, durationMs]);

  return display;
}

function formatCurrency(n: number) {
  return `$${Math.round(n).toLocaleString()}`;
}

export function RevenueCalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState(30);
  const [avgJobValue, setAvgJobValue] = useState(400);
  const [missPercent, setMissPercent] = useState(30);

  const monthlyLoss =
    callsPerWeek * (missPercent / 100) * avgJobValue * WEEKS_PER_MONTH;
  const annualLoss = monthlyLoss * 12;
  const roi = monthlyLoss / PLATFORM_COST;

  const animMonthly = useAnimatedNumber(monthlyLoss);
  const animAnnual = useAnimatedNumber(annualLoss);
  const animRoi = useAnimatedNumber(roi);

  return (
    <section className="bg-gray-50 border-y border-gray-200 py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-3">
            Run your math
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            How Much Are Missed Calls Costing Your HVAC Business?
          </h2>
          <p className="text-gray-500">
            Adjust the inputs. Watch the math change.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
          {/* Inputs */}
          <div className="p-6 sm:p-10 border-b border-gray-100">
            <div className="grid sm:grid-cols-3 gap-8">
              {/* Calls per week */}
              <div>
                <label
                  htmlFor="calc-calls"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Calls per week
                </label>
                <p
                  className="text-3xl font-bold text-gray-900 mb-3 tabular-nums"
                  aria-live="off"
                >
                  {callsPerWeek}
                </p>
                <input
                  id="calc-calls"
                  type="range"
                  min={1}
                  max={150}
                  value={callsPerWeek}
                  onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>1</span>
                  <span>150</span>
                </div>
              </div>

              {/* Average job value */}
              <div>
                <label
                  htmlFor="calc-value"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Avg. job value
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 pointer-events-none">
                    $
                  </span>
                  <input
                    id="calc-value"
                    type="number"
                    inputMode="numeric"
                    value={avgJobValue}
                    onChange={(e) =>
                      setAvgJobValue(Math.max(1, Number(e.target.value) || 1))
                    }
                    className="w-full pl-10 pr-4 py-2.5 text-2xl font-bold text-gray-900 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none tabular-nums"
                    min={1}
                    step={50}
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-1.5">
                  Service call, repair, or install average
                </p>
              </div>

              {/* Miss percent */}
              <div>
                <label
                  htmlFor="calc-miss"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  % of calls missed
                </label>
                <p className="mb-3">
                  <span className="text-3xl font-bold text-gray-900 tabular-nums">
                    {missPercent}
                  </span>
                  <span className="text-xl text-gray-500">%</span>
                </p>
                <input
                  id="calc-miss"
                  type="range"
                  min={0}
                  max={100}
                  value={missPercent}
                  onChange={(e) => setMissPercent(Number(e.target.value))}
                  className="w-full accent-red-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Loss output (red band) */}
          <div className="bg-red-50 p-6 sm:p-10 border-b border-red-100 text-center">
            <p className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
              <TrendingDown className="w-4 h-4" aria-hidden="true" />
              You&apos;re losing approximately
            </p>
            <p className="text-5xl sm:text-6xl font-black text-red-500 mb-2 tabular-nums leading-none">
              {formatCurrency(animMonthly)}
              <span className="text-2xl sm:text-3xl text-red-400 font-bold">
                /mo
              </span>
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              That&apos;s{" "}
              <span className="font-bold text-red-600 tabular-nums">
                {formatCurrency(animAnnual)}/year
              </span>{" "}
              walking to your competitors
            </p>
          </div>

          {/* Recovery / ROI (emerald band) */}
          <div className="bg-emerald-50 p-6 sm:p-10 text-center">
            <p className="text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-3">
              The recovery math
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              AutoGrowth AI recovers these calls for{" "}
              <span className="font-bold text-gray-900">$497/month</span>
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              ROI: for every <span className="font-bold text-gray-900">$1</span>{" "}
              you spend, you get back{" "}
              <span className="text-4xl sm:text-5xl font-black text-emerald-600 tabular-nums align-middle ml-1">
                ${animRoi.toFixed(roi >= 10 ? 0 : 1)}
              </span>
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors shadow-sm"
            >
              Get Your Free HVAC Business Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Calculation: calls/week × miss % × avg job value × 4.33 weeks/month.
          Industry average miss rate for HVAC: 30–40%.
        </p>
      </div>
    </section>
  );
}
