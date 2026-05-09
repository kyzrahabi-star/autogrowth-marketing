"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";

// ─── Constants ───────────────────────────────────────────────────────────────

const INDUSTRIES = [
  "HVAC", "Plumbing", "Electrical", "Roofing", "Auto Repair",
  "Dental", "Legal", "Real Estate", "Beauty & Wellness", "Pet Services",
  "Restaurants", "Fitness", "Cleaning", "Other",
] as const;

const AFTER_HOURS_OPTIONS = [
  { value: "message",           label: "Take a message and we'll call back next business day" },
  { value: "route_emergencies", label: "Route emergencies to my cell immediately" },
  { value: "24_7",              label: "We offer 24/7 emergency service" },
];

const SLOT_LENGTHS = ["30 minutes", "1 hour", "2 hours", "4 hours", "Half day", "Full day"];

const CALENDAR_OPTIONS = [
  { value: "yes",   label: "Yes — I use Google Calendar" },
  { value: "no",    label: "No" },
  { value: "other", label: "I use another calendar (specify below)" },
];

const REFERRAL_OPTIONS = [
  "Google Search", "Social Media", "Referral", "Cold Email", "Free Audit", "Other",
];

const DAYS = [
  { key: "mon", label: "Monday" },
  { key: "tue", label: "Tuesday" },
  { key: "wed", label: "Wednesday" },
  { key: "thu", label: "Thursday" },
  { key: "fri", label: "Friday" },
  { key: "sat", label: "Saturday" },
  { key: "sun", label: "Sunday" },
] as const;

type DayKey = (typeof DAYS)[number]["key"];

function buildTimeSlots() {
  const slots: { value: string; label: string }[] = [];
  for (let h = 6; h <= 22; h++) {
    for (const m of h === 22 ? [0] : [0, 30]) {
      const value = `${h}:${m === 0 ? "00" : "30"}`;
      const period = h < 12 ? "AM" : "PM";
      const h12 = h > 12 ? h - 12 : h;
      slots.push({ value, label: `${h12}:${m === 0 ? "00" : "30"} ${period}` });
    }
  }
  return slots;
}

const TIME_SLOTS = buildTimeSlots();

// ─── Types ────────────────────────────────────────────────────────────────────

type DayHours = { open: string; close: string; closed: boolean };
type BusinessHours = Record<DayKey, DayHours>;

type FormData = {
  business_name: string;
  owner_name: string;
  owner_phone: string;
  owner_email: string;
  website_url: string;
  industry: string;
  industry_other: string;
  service_area: string;
  business_hours: BusinessHours;
  after_hours_handling: string;
  services_offered: string;
  appointment_slot_length: string;
  emergency_definition: string;
  pricing_policy: string;
  promotions: string;
  uses_google_calendar: string;
  calendar_other: string;
  existing_phone: string;
  special_instructions: string;
  referral_source: string;
};

const defaultHours: BusinessHours = {
  mon: { open: "8:00", close: "18:00", closed: false },
  tue: { open: "8:00", close: "18:00", closed: false },
  wed: { open: "8:00", close: "18:00", closed: false },
  thu: { open: "8:00", close: "18:00", closed: false },
  fri: { open: "8:00", close: "18:00", closed: false },
  sat: { open: "8:00", close: "18:00", closed: true },
  sun: { open: "8:00", close: "18:00", closed: true },
};

const INITIAL: FormData = {
  business_name: "", owner_name: "", owner_phone: "", owner_email: "",
  website_url: "", industry: "", industry_other: "",
  service_area: "", business_hours: defaultHours,
  after_hours_handling: "", services_offered: "", appointment_slot_length: "",
  emergency_definition: "", pricing_policy: "", promotions: "",
  uses_google_calendar: "", calendar_other: "",
  existing_phone: "", special_instructions: "", referral_source: "",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function serializeHours(hours: BusinessHours): Record<string, string> {
  return Object.fromEntries(
    DAYS.map(({ key }) => {
      const d = hours[key];
      return [key, d.closed ? "closed" : `${d.open}-${d.close}`];
    }),
  );
}

const isPhone = (v: string) => /^[\d\s\-()+]{7,}$/.test(v.trim());
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

function validateStep1(f: FormData) {
  const e: Record<string, string> = {};
  if (!f.business_name.trim())       e.business_name = "Business name is required";
  if (!f.owner_name.trim())          e.owner_name = "Owner name is required";
  if (!f.owner_phone.trim())         e.owner_phone = "Phone number is required";
  else if (!isPhone(f.owner_phone))  e.owner_phone = "Enter a valid phone number";
  if (!f.owner_email.trim())         e.owner_email = "Email is required";
  else if (!isEmail(f.owner_email))  e.owner_email = "Enter a valid email address";
  if (!f.industry)                   e.industry = "Please select an industry";
  if (f.industry === "Other" && !f.industry_other.trim())
    e.industry_other = "Please describe your business";
  return e;
}

function validateStep2(f: FormData) {
  const e: Record<string, string> = {};
  if (!f.service_area.trim())           e.service_area = "Service area is required";
  if (!f.after_hours_handling)          e.after_hours_handling = "Please select an option";
  if (!f.services_offered.trim())       e.services_offered = "Services offered is required";
  if (!f.appointment_slot_length)       e.appointment_slot_length = "Please select a slot length";
  return e;
}

function validateStep3(f: FormData) {
  const e: Record<string, string> = {};
  if (!f.emergency_definition.trim())   e.emergency_definition = "Please define what counts as an emergency";
  if (!f.pricing_policy.trim())         e.pricing_policy = "Please describe your pricing policy";
  if (!f.uses_google_calendar)          e.uses_google_calendar = "Please select a calendar option";
  return e;
}

// ─── Shared UI atoms ──────────────────────────────────────────────────────────

const inputCls =
  "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm transition-colors";
const selectCls = `${inputCls} bg-white`;
const textareaCls = `${inputCls} resize-none`;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-red-600 text-xs mt-1.5">{msg}</p>;
}

function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {children}
      {required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
  );
}

// ─── Progress bar ─────────────────────────────────────────────────────────────

function ProgressBar({ step }: { step: number }) {
  const LABELS = ["Business Basics", "Operations", "AI Customization"];
  return (
    <div className="mb-8">
      <p className="sm:hidden text-sm font-medium text-gray-500 mb-3 text-center">
        Step {step} of 3
      </p>
      <div className="hidden sm:flex items-center justify-between mb-3">
        {LABELS.map((label, i) => {
          const s = i + 1;
          const done = s < step;
          const active = s === step;
          return (
            <div key={label} className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-colors shrink-0 ${
                  done ? "bg-emerald-500 text-white" : active ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-400"
                }`}
              >
                {done ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : s}
              </span>
              <span
                className={`text-xs font-medium ${
                  active ? "text-gray-900" : done ? "text-emerald-600" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>
    </div>
  );
}

// ─── Hours row ────────────────────────────────────────────────────────────────

function HoursRow({
  label,
  hours,
  onChange,
}: {
  label: string;
  hours: DayHours;
  onChange: (field: keyof DayHours, value: string | boolean) => void;
}) {
  const disabledCls = "border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed";
  const activeCls = "border-gray-300 text-gray-900 bg-white";
  return (
    <div className="flex items-center gap-2 py-2.5 px-4 border-b border-gray-100 last:border-0">
      <span className="w-24 text-sm font-medium text-gray-700 shrink-0">{label}</span>
      <select
        value={hours.open}
        disabled={hours.closed}
        onChange={(e) => onChange("open", e.target.value)}
        className={`flex-1 border rounded-lg px-2 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
          hours.closed ? disabledCls : activeCls
        }`}
      >
        {TIME_SLOTS.map((s) => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>
      <span className="text-xs text-gray-400 shrink-0">to</span>
      <select
        value={hours.close}
        disabled={hours.closed}
        onChange={(e) => onChange("close", e.target.value)}
        className={`flex-1 border rounded-lg px-2 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
          hours.closed ? disabledCls : activeCls
        }`}
      >
        {TIME_SLOTS.map((s) => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>
      <label className="flex items-center gap-1.5 shrink-0 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={hours.closed}
          onChange={(e) => onChange("closed", e.target.checked)}
          className="w-4 h-4 accent-emerald-500"
        />
        <span className="text-xs text-gray-500">Closed</span>
      </label>
    </div>
  );
}

// ─── Step 1 — Business Basics ─────────────────────────────────────────────────

function StepOne({
  form,
  errors,
  set,
}: {
  form: FormData;
  errors: Record<string, string>;
  set: (f: keyof FormData, v: string) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <FieldLabel required>Business name</FieldLabel>
        <input type="text" value={form.business_name} onChange={(e) => set("business_name", e.target.value)}
          placeholder="Reynolds Heating and Cooling" className={inputCls} />
        <FieldError msg={errors.business_name} />
      </div>

      <div>
        <FieldLabel required>Owner full name</FieldLabel>
        <input type="text" value={form.owner_name} onChange={(e) => set("owner_name", e.target.value)}
          placeholder="Mark Reynolds" className={inputCls} />
        <FieldError msg={errors.owner_name} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel required>Owner phone</FieldLabel>
          <input type="tel" value={form.owner_phone} onChange={(e) => set("owner_phone", e.target.value)}
            placeholder="(614) 555-0100" className={inputCls} />
          <FieldError msg={errors.owner_phone} />
        </div>
        <div>
          <FieldLabel required>Owner email</FieldLabel>
          <input type="email" value={form.owner_email} onChange={(e) => set("owner_email", e.target.value)}
            placeholder="mark@reynoldshvac.com" className={inputCls} />
          <FieldError msg={errors.owner_email} />
        </div>
      </div>

      <div>
        <FieldLabel>Business website URL</FieldLabel>
        <input type="url" value={form.website_url} onChange={(e) => set("website_url", e.target.value)}
          placeholder="https://reynoldshvac.com" className={inputCls} />
      </div>

      <div>
        <FieldLabel required>Industry</FieldLabel>
        <select value={form.industry} onChange={(e) => set("industry", e.target.value)} className={selectCls}>
          <option value="" disabled>Select your industry</option>
          {INDUSTRIES.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
        </select>
        <FieldError msg={errors.industry} />
      </div>

      {form.industry === "Other" && (
        <div>
          <FieldLabel required>Describe your business</FieldLabel>
          <input type="text" value={form.industry_other} onChange={(e) => set("industry_other", e.target.value)}
            placeholder="e.g. Pool and spa maintenance" className={inputCls} />
          <FieldError msg={errors.industry_other} />
        </div>
      )}
    </div>
  );
}

// ─── Step 2 — Operations ──────────────────────────────────────────────────────

function StepTwo({
  form,
  errors,
  set,
  setHours,
}: {
  form: FormData;
  errors: Record<string, string>;
  set: (f: keyof FormData, v: string) => void;
  setHours: (day: DayKey, field: keyof DayHours, value: string | boolean) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <FieldLabel required>Service area</FieldLabel>
        <textarea value={form.service_area} onChange={(e) => set("service_area", e.target.value)}
          rows={3} placeholder="Columbus, Dublin, Westerville, Upper Arlington — list all cities/zips you serve"
          className={textareaCls} />
        <FieldError msg={errors.service_area} />
      </div>

      <div>
        <FieldLabel required>Business hours</FieldLabel>
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
          {DAYS.map(({ key, label }) => (
            <HoursRow key={key} label={label} hours={form.business_hours[key]}
              onChange={(field, value) => setHours(key, field, value)} />
          ))}
        </div>
      </div>

      <div>
        <FieldLabel required>After-hours call handling</FieldLabel>
        <select value={form.after_hours_handling} onChange={(e) => set("after_hours_handling", e.target.value)}
          className={selectCls}>
          <option value="" disabled>Select how after-hours calls should be handled</option>
          {AFTER_HOURS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <FieldError msg={errors.after_hours_handling} />
      </div>

      <div>
        <FieldLabel required>Services offered</FieldLabel>
        <textarea value={form.services_offered} onChange={(e) => set("services_offered", e.target.value)}
          rows={3} placeholder="List all services you provide, e.g. Furnace repair, AC install, tune-ups, duct cleaning"
          className={textareaCls} />
        <FieldError msg={errors.services_offered} />
      </div>

      <div>
        <FieldLabel required>Typical appointment length</FieldLabel>
        <select value={form.appointment_slot_length} onChange={(e) => set("appointment_slot_length", e.target.value)}
          className={selectCls}>
          <option value="" disabled>Select typical appointment length</option>
          {SLOT_LENGTHS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <FieldError msg={errors.appointment_slot_length} />
      </div>
    </div>
  );
}

// ─── Step 3 — AI Customization ────────────────────────────────────────────────

function StepThree({
  form,
  errors,
  set,
}: {
  form: FormData;
  errors: Record<string, string>;
  set: (f: keyof FormData, v: string) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <FieldLabel required>What counts as an emergency for your business?</FieldLabel>
        <textarea value={form.emergency_definition} onChange={(e) => set("emergency_definition", e.target.value)}
          rows={3} placeholder="e.g. Gas smell, no heat below 32°F, flooding, electrical sparking, burst pipe"
          className={textareaCls} />
        <FieldError msg={errors.emergency_definition} />
      </div>

      <div>
        <FieldLabel required>Pricing policy — what should the AI say when asked about prices?</FieldLabel>
        <textarea value={form.pricing_policy} onChange={(e) => set("pricing_policy", e.target.value)}
          rows={3} placeholder="e.g. Pricing depends on what our tech finds on site — we always give a full quote before any work starts. Diagnostic fee is $89."
          className={textareaCls} />
        <FieldError msg={errors.pricing_policy} />
      </div>

      <div>
        <FieldLabel>Current promotions or discounts</FieldLabel>
        <textarea value={form.promotions} onChange={(e) => set("promotions", e.target.value)}
          rows={2} placeholder="e.g. $25 off first-time customers, 10% senior discount"
          className={textareaCls} />
      </div>

      <div>
        <FieldLabel required>Do you use Google Calendar for scheduling?</FieldLabel>
        <select value={form.uses_google_calendar} onChange={(e) => set("uses_google_calendar", e.target.value)}
          className={selectCls}>
          <option value="" disabled>Select</option>
          {CALENDAR_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <FieldError msg={errors.uses_google_calendar} />
      </div>

      {form.uses_google_calendar === "other" && (
        <div>
          <FieldLabel>Which calendar do you use?</FieldLabel>
          <input type="text" value={form.calendar_other} onChange={(e) => set("calendar_other", e.target.value)}
            placeholder="e.g. ServiceTitan, Jobber, Outlook" className={inputCls} />
        </div>
      )}

      <div>
        <FieldLabel>Existing business phone number</FieldLabel>
        <input type="tel" value={form.existing_phone} onChange={(e) => set("existing_phone", e.target.value)}
          placeholder="The number you currently give to customers — we can forward it to your new AI line"
          className={inputCls} />
      </div>

      <div>
        <FieldLabel>Special instructions for your AI employee</FieldLabel>
        <textarea value={form.special_instructions} onChange={(e) => set("special_instructions", e.target.value)}
          rows={3} placeholder="e.g. Always mention we're family-owned since 1985, never schedule on holidays"
          className={textareaCls} />
      </div>

      <div>
        <FieldLabel>How did you hear about AutoGrowth?</FieldLabel>
        <select value={form.referral_source} onChange={(e) => set("referral_source", e.target.value)}
          className={selectCls}>
          <option value="">Select (optional)</option>
          {REFERRAL_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
    </div>
  );
}

// ─── Confirmation screen ──────────────────────────────────────────────────────

function ConfirmationScreen({ businessName }: { businessName: string }) {
  return (
    <div className="text-center py-4">
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-8 h-8 text-emerald-500" strokeWidth={2.5} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        We&apos;ve got everything we need!
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Your AI employee is being built right now for{" "}
        <span className="font-semibold text-gray-900">{businessName}</span>.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left mb-8 max-w-md mx-auto">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
          What happens next
        </p>
        <ul className="space-y-3">
          {[
            { time: "Within 24 hours", detail: `Your AI is configured for ${businessName}` },
            { time: "Within 48 hours", detail: "Your dedicated phone number is live" },
            { time: "This week",       detail: "You'll receive a personalized walkthrough video" },
            { time: "Scheduled",       detail: "We'll set up a 20-minute kickoff call with you" },
          ].map(({ time, detail }) => (
            <li key={time} className="flex items-start gap-3 text-sm">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
              <span>
                <span className="font-semibold text-gray-900">{time}:</span>{" "}
                <span className="text-gray-600">{detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Questions?{" "}
        <a href="mailto:support@autogrowth.ai" className="text-emerald-600 hover:text-emerald-700 font-medium">
          support@autogrowth.ai
        </a>
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to AutoGrowth
      </Link>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const WORKERS = "https://autogrowth-platform.kyzrahabi.workers.dev";

const STEP_TITLES = [
  { title: "Business Basics",      subtitle: "Tell us who you are" },
  { title: "Your Operations",      subtitle: "How your business runs day to day" },
  { title: "AI Customization",     subtitle: "Teach your AI employee how to represent you" },
];

export function OnboardingForm() {
  const [step, setStep]       = useState(1);
  const [form, setForm]       = useState<FormData>(INITIAL);
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted]     = useState(false);

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field as string];
      return next;
    });
  }

  function setHours(day: DayKey, field: keyof DayHours, value: string | boolean) {
    setForm((prev) => ({
      ...prev,
      business_hours: {
        ...prev.business_hours,
        [day]: { ...prev.business_hours[day], [field]: value },
      },
    }));
  }

  function advance() {
    const validate = [validateStep1, validateStep2, validateStep3][step - 1];
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      setTimeout(() => {
        document.querySelector("[data-error]")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setErrors({});
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submit() {
    const errs = validateStep3(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    const gcal =
      form.uses_google_calendar === "other" && form.calendar_other.trim()
        ? `other: ${form.calendar_other.trim()}`
        : form.uses_google_calendar;

    const payload = {
      source: "onboarding_form",
      business_name: form.business_name.trim(),
      owner_name: form.owner_name.trim(),
      owner_phone: form.owner_phone.trim(),
      owner_email: form.owner_email.trim(),
      website_url: form.website_url.trim() || undefined,
      industry: form.industry,
      industry_other: form.industry_other.trim() || undefined,
      service_area: form.service_area.trim(),
      business_hours_json: serializeHours(form.business_hours),
      after_hours_handling: form.after_hours_handling,
      services_offered: form.services_offered.trim(),
      appointment_slot_length: form.appointment_slot_length,
      emergency_definition: form.emergency_definition.trim(),
      pricing_policy: form.pricing_policy.trim(),
      promotions: form.promotions.trim() || undefined,
      uses_google_calendar: gcal,
      existing_phone: form.existing_phone.trim() || undefined,
      special_instructions: form.special_instructions.trim() || undefined,
      referral_source: form.referral_source || undefined,
    };

    try {
      const res = await fetch(`${WORKERS}/api/onboarding`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Submission failed. Please try again.");
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again or email support@autogrowth.ai.");
    } finally {
      setSubmitting(false);
    }
  }

  const { title, subtitle } = STEP_TITLES[step - 1];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="inline-block mb-10">
          <span className="text-xl font-bold text-gray-900">
            AutoGrowth<span className="text-emerald-500">.</span>
          </span>
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10">
          {submitted ? (
            <ConfirmationScreen businessName={form.business_name} />
          ) : (
            <>
              <ProgressBar step={step} />

              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">{title}</h1>
                <p className="text-gray-500 text-sm">{subtitle}</p>
              </div>

              {step === 1 && <StepOne form={form} errors={errors} set={set} />}
              {step === 2 && <StepTwo form={form} errors={errors} set={set} setHours={setHours} />}
              {step === 3 && <StepThree form={form} errors={errors} set={set} />}

              {submitError && (
                <div className="mt-5 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <p className="text-sm text-red-700">{submitError}</p>
                </div>
              )}

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={back}
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors py-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={advance}
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    disabled={submitting}
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <Check className="w-4 h-4" strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Need help?{" "}
          <a href="mailto:support@autogrowth.ai" className="underline underline-offset-2 hover:text-gray-600">
            support@autogrowth.ai
          </a>
        </p>
      </div>
    </div>
  );
}
