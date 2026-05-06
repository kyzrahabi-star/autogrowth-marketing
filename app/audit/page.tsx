"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const services = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Auto Repair",
  "Dental",
  "Legal",
  "Real Estate",
  "Other",
];

export default function AuditPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    businessName: "",
    city: "",
    state: "",
    service: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Something went wrong");
      }
      router.push("/audit/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3">See Where You Stand</h1>
          <p className="text-zinc-400 mb-6">
            Enter your business below. We&apos;ll scan 3 AI search engines,
            compare you to your top 3 competitors, and send you a full report —
            free.
          </p>
          <ul className="space-y-2">
            {[
              "No credit card",
              "Results in 24 hours",
              "Competitor data included",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                <span className="text-emerald-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-zinc-300 mb-1.5">
              Business name <span className="text-red-400">*</span>
            </label>
            <input
              name="businessName"
              type="text"
              required
              value={form.businessName}
              onChange={handleChange}
              placeholder="Reynolds Heating and Cooling"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1.5">
                City <span className="text-red-400">*</span>
              </label>
              <input
                name="city"
                type="text"
                required
                value={form.city}
                onChange={handleChange}
                placeholder="Columbus"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1.5">
                State <span className="text-red-400">*</span>
              </label>
              <input
                name="state"
                type="text"
                required
                maxLength={2}
                value={form.state}
                onChange={handleChange}
                placeholder="OH"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors uppercase"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1.5">
              Primary service <span className="text-red-400">*</span>
            </label>
            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1.5">
              Best phone to reach you <span className="text-red-400">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="(614) 555-0100"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1.5">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@yourbusiness.com"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400 bg-red-900/20 border border-red-800 rounded-lg px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-3"
            style={{ backgroundColor: "#10B981" }}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Scanning AI search engines...
              </>
            ) : (
              "Generate My Audit →"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
