"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

interface FormState {
  // Step 1
  businessName: string;
  firstName: string;
  cityState: string;
  phone: string;
  email: string;
  website: string;
  googleProfileUrl: string;
  // Step 2
  industry: string;
  services: string[];
  avgJobValue: string;
  excludedServices: string;
  // Step 3
  leadSources: string[];
  runningAds: string;
  leadsPerMonth: string;
  phoneAnsweredBy: string;
  googleRating: string;
  respondsToReviews: string;
  // Step 4
  primaryGoal: string;
  additionalJobsGoal: string;
  planInterest: string;
  hearAbout: string;
  additionalInfo: string;
}

const INITIAL: FormState = {
  businessName: "", firstName: "", cityState: "", phone: "", email: "",
  website: "", googleProfileUrl: "",
  industry: "", services: [], avgJobValue: "", excludedServices: "",
  leadSources: [], runningAds: "", leadsPerMonth: "", phoneAnsweredBy: "",
  googleRating: "", respondsToReviews: "",
  primaryGoal: "", additionalJobsGoal: "", planInterest: "",
  hearAbout: "", additionalInfo: "",
};

const SERVICES_BY_INDUSTRY: Record<string, string[]> = {
  HVAC: [
    "AC repair", "AC installation", "Furnace repair", "Furnace installation",
    "HVAC maintenance", "Duct cleaning", "Heat pump", "Emergency service",
    "Commercial HVAC", "Other",
  ],
  Plumbing: [
    "Drain cleaning", "Pipe repair", "Water heater", "Leak detection",
    "Sewer line", "Bathroom remodel", "Emergency plumbing", "Commercial plumbing", "Other",
  ],
  Electrical: [
    "Panel upgrade", "Wiring", "EV charging", "Lighting",
    "Generator", "Emergency electrical", "Commercial electrical", "Other",
  ],
  Roofing: [
    "Roof replacement", "Roof repair", "Gutters", "Siding",
    "Emergency repairs", "Commercial roofing", "Other",
  ],
  Other: ["Other"],
};

const STEP_TITLES = ["Your Business", "Your Services", "Your Current Situation", "Your Goals"];
const TOTAL_STEPS = 4;

function inputCls(extra = "") {
  return `w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white ${extra}`;
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {children}
      {required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
  );
}

function FieldHint({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-gray-400 mt-1">{children}</p>;
}

function CheckboxGroup({
  options,
  selected,
  onChange,
}: {
  options: string[];
  selected: string[];
  onChange: (val: string[]) => void;
}) {
  function toggle(opt: string) {
    onChange(
      selected.includes(opt)
        ? selected.filter((s) => s !== opt)
        : [...selected, opt]
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {options.map((opt) => {
        const checked = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm text-left transition-colors ${
              checked
                ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                checked ? "bg-emerald-500 border-emerald-500" : "border-gray-300"
              }`}
            >
              {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
            </div>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function RadioGroup({
  options,
  value,
  onChange,
  cols = 1,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  cols?: number;
}) {
  return (
    <div className={`grid gap-2 ${cols === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {options.map((opt) => {
        const checked = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm text-left transition-colors ${
              checked
                ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                checked ? "border-emerald-500" : "border-gray-300"
              }`}
            >
              {checked && (
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              )}
            </div>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default function GetStartedPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function set<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    set(e.target.name as keyof FormState, e.target.value as never);
  }

  function validateStep(): string {
    if (step === 1) {
      if (!form.businessName.trim()) return "Business name is required";
      if (!form.firstName.trim()) return "Your first name is required";
      if (!form.cityState.trim()) return "City & state is required";
      if (!form.phone.trim()) return "Phone number is required";
      if (!form.email.trim()) return "Email is required";
    }
    if (step === 2) {
      if (!form.industry) return "Please select your industry";
    }
    return "";
  }

  function next() {
    const err = validateStep();
    if (err) { setError(err); return; }
    setError("");
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setError("");
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json() as { error?: string };
        throw new Error(data.error ?? "Something went wrong");
      }
      router.push("/get-started/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const progressPct = ((step - 1) / TOTAL_STEPS) * 100;
  const serviceOptions = SERVICES_BY_INDUSTRY[form.industry] ?? [];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-gray-200">
        <div
          className="h-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 lg:px-8 pt-14">
        {/* Hero */}
        <div className="text-center py-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Step {step} of {TOTAL_STEPS} — {STEP_TITLES[step - 1]}
          </p>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Let&apos;s Get You Set Up
          </h1>
          <p className="text-gray-500 text-sm">
            Answer a few questions so we can configure your AI team. Takes about 2 minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step card — key forces remount + fade-in animation */}
          <div key={step} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-5 animate-fade-in">

            {/* ── STEP 1: Your Business ── */}
            {step === 1 && (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label required>Business name</Label>
                    <input name="businessName" type="text" required value={form.businessName}
                      onChange={handleTextChange} placeholder="Reynolds Heating and Cooling"
                      className={inputCls()} />
                  </div>
                  <div>
                    <Label required>Your first name</Label>
                    <input name="firstName" type="text" required value={form.firstName}
                      onChange={handleTextChange} placeholder="Kevin"
                      className={inputCls()} />
                  </div>
                </div>

                <div>
                  <Label required>City, State</Label>
                  <input name="cityState" type="text" required value={form.cityState}
                    onChange={handleTextChange} placeholder="Columbus, OH"
                    className={inputCls()} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label required>Phone number</Label>
                    <input name="phone" type="tel" required value={form.phone}
                      onChange={handleTextChange} placeholder="(614) 555-0100"
                      className={inputCls()} />
                  </div>
                  <div>
                    <Label required>Email</Label>
                    <input name="email" type="email" required value={form.email}
                      onChange={handleTextChange} placeholder="you@yourbusiness.com"
                      className={inputCls()} />
                  </div>
                </div>

                <div>
                  <Label>Website URL</Label>
                  <input name="website" type="url" value={form.website}
                    onChange={handleTextChange} placeholder="https://yourbusiness.com"
                    className={inputCls()} />
                </div>

                <div>
                  <Label>Google Business Profile link</Label>
                  <input name="googleProfileUrl" type="url" value={form.googleProfileUrl}
                    onChange={handleTextChange} placeholder="https://maps.google.com/..."
                    className={inputCls()} />
                  <FieldHint>Search your business on Google Maps and copy the URL</FieldHint>
                </div>
              </>
            )}

            {/* ── STEP 2: Your Services ── */}
            {step === 2 && (
              <>
                <div>
                  <Label required>What industry?</Label>
                  <select name="industry" required value={form.industry}
                    onChange={(e) => {
                      set("industry", e.target.value);
                      set("services", []);
                    }}
                    className={inputCls()}>
                    <option value="" disabled>Select your industry</option>
                    {Object.keys(SERVICES_BY_INDUSTRY).map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>

                {form.industry && (
                  <div>
                    <Label>What services do you offer?</Label>
                    <CheckboxGroup
                      options={serviceOptions}
                      selected={form.services}
                      onChange={(v) => set("services", v)}
                    />
                  </div>
                )}

                <div>
                  <Label>Average job value</Label>
                  <select name="avgJobValue" value={form.avgJobValue}
                    onChange={handleTextChange} className={inputCls()}>
                    <option value="">Select a range</option>
                    {["Under $200", "$200–$500", "$500–$1,000", "$1,000–$5,000", "$5,000+"].map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label>Any services you DON&apos;T want leads for?</Label>
                  <input name="excludedServices" type="text" value={form.excludedServices}
                    onChange={handleTextChange} placeholder="e.g. Commercial only, no warranty calls"
                    className={inputCls()} />
                </div>
              </>
            )}

            {/* ── STEP 3: Current Situation ── */}
            {step === 3 && (
              <>
                <div>
                  <Label>How do you currently get most of your leads?</Label>
                  <CheckboxGroup
                    options={["Google Search", "Word of mouth", "HomeAdvisor/Angi", "Facebook", "Google Ads", "Yard signs/trucks", "Other"]}
                    selected={form.leadSources}
                    onChange={(v) => set("leadSources", v)}
                  />
                </div>

                <div>
                  <Label>Are you currently running any paid ads?</Label>
                  <RadioGroup
                    options={["Yes", "No", "I don't know"]}
                    value={form.runningAds}
                    onChange={(v) => set("runningAds", v)}
                    cols={2}
                  />
                </div>

                <div>
                  <Label>How many calls/leads do you get per month?</Label>
                  <select name="leadsPerMonth" value={form.leadsPerMonth}
                    onChange={handleTextChange} className={inputCls()}>
                    <option value="">Select a range</option>
                    {["Under 20", "20–50", "50–100", "100+", "I don't know"].map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label>Who answers your phone right now?</Label>
                  <select name="phoneAnsweredBy" value={form.phoneAnsweredBy}
                    onChange={handleTextChange} className={inputCls()}>
                    <option value="">Select one</option>
                    {["Me", "Office manager", "Answering service", "Voicemail", "It goes unanswered sometimes"].map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Current Google rating?</Label>
                    <select name="googleRating" value={form.googleRating}
                      onChange={handleTextChange} className={inputCls()}>
                      <option value="">Select one</option>
                      {["5 stars", "4–4.9", "3–3.9", "Under 3", "I don't know", "No reviews yet"].map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label>Do you respond to Google reviews?</Label>
                    <RadioGroup
                      options={["Always", "Sometimes", "Rarely", "Never"]}
                      value={form.respondsToReviews}
                      onChange={(v) => set("respondsToReviews", v)}
                    />
                  </div>
                </div>
              </>
            )}

            {/* ── STEP 4: Your Goals ── */}
            {step === 4 && (
              <>
                <div>
                  <Label>What&apos;s your #1 goal?</Label>
                  <RadioGroup
                    options={[
                      "Get more calls",
                      "Improve online visibility",
                      "Stop losing leads to competitors",
                      "Better reviews",
                      "All of the above",
                    ]}
                    value={form.primaryGoal}
                    onChange={(v) => set("primaryGoal", v)}
                  />
                </div>

                <div>
                  <Label>How many additional jobs per month would make this worth it?</Label>
                  <select name="additionalJobsGoal" value={form.additionalJobsGoal}
                    onChange={handleTextChange} className={inputCls()}>
                    <option value="">Select a range</option>
                    {["3–5", "5–10", "10–20", "20+"].map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label>Which plan interests you?</Label>
                  <RadioGroup
                    options={[
                      "Starter — $1,497/month",
                      "Growth — $1,997/month",
                      "Complete — $4,997/month",
                      "Enterprise — Custom pricing",
                      "Not sure yet",
                    ]}
                    value={form.planInterest}
                    onChange={(v) => set("planInterest", v)}
                  />
                </div>

                <div>
                  <Label>How did you hear about us?</Label>
                  <select name="hearAbout" value={form.hearAbout}
                    onChange={handleTextChange} className={inputCls()}>
                    <option value="">Select one</option>
                    {[
                      "Google Search", "ChatGPT/AI Search", "Social Media",
                      "Referral from another contractor", "Facebook Ad",
                      "Google Ad", "Podcast", "Other",
                    ].map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label>Anything else we should know?</Label>
                  <textarea name="additionalInfo" value={form.additionalInfo}
                    onChange={handleTextChange}
                    rows={3}
                    placeholder="Special circumstances, questions, or anything helpful..."
                    className={inputCls("resize-none")} />
                </div>
              </>
            )}
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mt-4">
              {error}
            </p>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div>
              {step > 1 && (
                <button
                  type="button"
                  onClick={back}
                  className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-2 transition-colors"
                >
                  ← Back
                </button>
              )}
            </div>

            <div>
              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={next}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors disabled:opacity-60 flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit →"
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Step dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i + 1 === step
                    ? "w-6 bg-emerald-500"
                    : i + 1 < step
                    ? "w-1.5 bg-emerald-300"
                    : "w-1.5 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6 pb-8">
          🔒 Your info is private and never shared.
        </p>
      </div>
    </div>
  );
}
