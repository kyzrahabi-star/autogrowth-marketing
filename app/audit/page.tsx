"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

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
    <div className="min-h-screen bg-white py-20 px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">Get Your Free Visibility Audit</h1>
          <p className="text-gray-700 mb-6">
            We&apos;ll scan Google, Google Maps, ChatGPT, Perplexity, and Google
            AI Overviews for your business. See exactly where you show up — and
            where you&apos;re invisible.
          </p>
          <ul className="space-y-2">
            {[
              "No credit card",
              "Results in 24 hours",
              "Google + AI competitor comparison",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1">
                Business name <span className="text-red-400">*</span>
              </label>
              <input
                name="businessName"
                type="text"
                required
                value={form.businessName}
                onChange={handleChange}
                placeholder="Reynolds Heating and Cooling"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">
                  City <span className="text-red-400">*</span>
                </label>
                <input
                  name="city"
                  type="text"
                  required
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Columbus"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm uppercase"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1">
                Primary service <span className="text-red-400">*</span>
              </label>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm bg-white"
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
              <label className="block text-sm text-gray-700 font-medium mb-1">
                Best phone to reach you <span className="text-red-400">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="(614) 555-0100"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@yourbusiness.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl text-lg font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors disabled:opacity-60 flex items-center justify-center gap-3"
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

        <p className="text-center text-gray-400 text-sm mt-4">
          🔒 Your info is private. No spam.
        </p>
      </div>
    </div>
  );
}
