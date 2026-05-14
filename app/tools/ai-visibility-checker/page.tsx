"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";

const US_STATES: Array<{ value: string; label: string }> = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District of Columbia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

const INDUSTRIES = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Dental",
  "Legal",
  "Auto Repair",
  "Restaurant",
  "Real Estate",
  "Other",
];

export default function AiVisibilityCheckerPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    businessName: "",
    city: "",
    state: "",
    industry: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-visibility-checker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_name: form.businessName,
          city: form.city,
          state: form.state,
          industry: form.industry,
          email: form.email,
          phone: form.phone,
          consent: form.consent,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      router.push("/tools/ai-visibility-checker/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white py-20 px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">
            Free Tool
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
            AI Visibility Checker
          </h1>
          <p className="text-gray-700 mb-6">
            See how often ChatGPT, Perplexity, and Google AI Overviews cite your
            business for the queries that matter in your service area. Your
            full report lands in your inbox in 2&ndash;3 minutes.
          </p>
          <ul className="space-y-2">
            {[
              "AI citation count across ChatGPT, Perplexity, and Google AI",
              "Top queries where competitors are winning",
              "Free — no credit card required",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <Check
                  className="w-4 h-4 text-emerald-500 shrink-0"
                  strokeWidth={2.5}
                />
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
                <select
                  name="state"
                  required
                  value={form.state}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm bg-white"
                >
                  <option value="" disabled>
                    Select state
                  </option>
                  {US_STATES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1">
                Industry <span className="text-red-400">*</span>
              </label>
              <select
                name="industry"
                required
                value={form.industry}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm bg-white"
              >
                <option value="" disabled>
                  Select an industry
                </option>
                {INDUSTRIES.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
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

            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1">
                Phone <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="(614) 555-0100"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm"
              />
            </div>

            <label className="flex items-start gap-3 text-xs text-gray-600 leading-relaxed cursor-pointer select-none">
              <input
                type="checkbox"
                name="consent"
                required
                checked={form.consent}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, consent: e.target.checked }))
                }
                className="mt-0.5 w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 cursor-pointer shrink-0"
              />
              <span>
                I agree to AutoGrowth&apos;s{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Privacy Policy
                </Link>
                , and consent to receive transactional and marketing calls,
                SMS, and emails at the contact info provided. Msg &amp; data
                rates may apply. Reply STOP to opt out of SMS. Consent is not
                a condition of purchase.
              </span>
            </label>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !form.consent}
              className="w-full py-4 rounded-xl text-lg font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                "Check My AI Visibility →"
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
