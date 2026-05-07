import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, ArrowRight, X } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Receptionist — AutoGrowth AI",
  description:
    "Your AI receptionist answers every call 24/7, greets callers by your business name, books appointments, and texts back missed calls in 30 seconds.",
};

const conversationSteps = [
  { label: "Call comes in", detail: "Any time of day or night — your AI answers in under 3 rings." },
  { label: "AI greets in your business name", detail: "\"Thanks for calling Reynolds Heating and Cooling, how can I help you today?\"" },
  { label: "Natural conversation", detail: "Asks about the problem, urgency, address, and availability. No scripts. No robot-speak." },
  { label: "Captures lead info", detail: "Name, address, service type, urgency, and best callback number — all logged to your dashboard." },
  { label: "Books or alerts", detail: "Books directly into your calendar if connected, or fires an instant SMS alert to your phone for high-urgency calls." },
  { label: "Texts back if missed", detail: "If the call isn't answered, an automatic text goes out in 30 seconds: \"Hi, sorry we missed your call — how can we help?\"" },
];

export default function AiReceptionistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Phone className="w-3.5 h-3.5" />
            AI Receptionist
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-5">
            Never Miss a Call Again
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Your AI receptionist answers every call 24/7. Greets callers by
            your business name. Books appointments. Texts back missed calls in
            30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              See It In Action — Book a Demo
            </Link>
            <Link
              href="/audit"
              className="text-gray-700 hover:text-gray-900 font-medium text-base underline underline-offset-4"
            >
              Get a free audit first
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zinc-900 py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { stat: "24/7", label: "availability, including holidays" },
            { stat: "30s", label: "missed call text back time" },
            { stat: "$4,100", label: "monthly receptionist salary replaced" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How it works
          </h2>
          <div className="space-y-0">
            {conversationSteps.map(({ label, detail }, i) => (
              <div key={label} className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  {i < conversationSteps.length - 1 && (
                    <div className="w-px bg-gray-200 flex-1 min-h-[2.5rem]" />
                  )}
                </div>
                <div className="pt-1.5 pb-8">
                  <h3 className="font-semibold text-gray-900 mb-1">{label}</h3>
                  <p className="text-sm text-gray-600 italic">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat transcript */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              What callers actually hear
            </h2>
            <p className="text-gray-500 text-sm">
              Real conversation, not a script. The AI adapts to each caller.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-900 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-gray-400 text-xs">Reynolds Heating & Cooling — Inbound Call</span>
            </div>
            <div className="p-5 space-y-4">
              {[
                {
                  speaker: "caller",
                  text: "Hi, my AC stopped working and it's 95 degrees in my house right now. I have a baby at home.",
                },
                {
                  speaker: "ai",
                  text: "Hi, thanks for calling Reynolds Heating and Cooling. I'm so sorry to hear that — let's get someone out to you today. Can I get your name and address?",
                },
                {
                  speaker: "caller",
                  text: "Sarah Mitchell. 1847 Elm Street, Columbus.",
                },
                {
                  speaker: "ai",
                  text: "Got it, Sarah. And is this a central AC unit or a heat pump? And do you know roughly how old it is?",
                },
                {
                  speaker: "caller",
                  text: "Central AC, maybe 8 years old. It just stopped blowing cold air.",
                },
                {
                  speaker: "ai",
                  text: "Understood. I'm flagging this as urgent and alerting our team right now. We have availability this afternoon between 2–4 or 4–6 PM. Which works better?",
                },
                {
                  speaker: "caller",
                  text: "2 to 4 please.",
                },
                {
                  speaker: "ai",
                  text: "Perfect — you're booked for 2–4 PM today. You'll get a confirmation text with the technician's name. Is there anything else I can help with?",
                },
              ].map(({ speaker, text }, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${speaker === "caller" ? "justify-end" : "justify-start"}`}
                >
                  {speaker === "ai" && (
                    <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      speaker === "caller"
                        ? "bg-gray-100 text-gray-700 rounded-tr-sm"
                        : "bg-emerald-500 text-white rounded-tl-sm"
                    }`}
                  >
                    {text}
                  </div>
                </div>
              ))}
              <div className="text-center">
                <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100">
                  ✓ Lead logged · Score: 91 (HOT) · Owner alerted in 58s
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            The difference it makes
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
                Without AI Receptionist
              </div>
              <ul className="space-y-3">
                {[
                  "40% of calls go to voicemail",
                  "No response for 2–4 hours while you're on a job",
                  "Lead goes cold — calls your competitor next",
                  "No record of what the caller said",
                  "After-hours calls always missed",
                  "Evenings and weekends = zero coverage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-emerald-200">
              <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-4">
                With AI Receptionist
              </div>
              <ul className="space-y-3">
                {[
                  "Every call answered in under 3 rings",
                  "Lead captured, scored, and logged instantly",
                  "Missed call gets a text back in 30 seconds",
                  "Full conversation saved to your dashboard",
                  "24/7 — holidays, nights, and weekends",
                  "Emergency calls escalated immediately",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Included in every plan
          </h2>
          <p className="text-gray-400 mb-8">
            Every AutoGrowth tier gets the AI Receptionist from day one. No
            add-ons, no upgrades, no feature gating.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              See It In Action — Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-xl text-base transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
