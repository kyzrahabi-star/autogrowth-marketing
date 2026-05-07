import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, Clock, MessageSquare, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Receptionist — AutoGrowth AI",
  description:
    "Never lose a lead to a missed call again. AutoGrowth's AI Receptionist scores every inbound lead, fires an instant SMS alert, and auto-follows up until they book.",
};

const stats = [
  { stat: "15 min", label: "First follow-up after missed call" },
  { stat: "60 sec", label: "Hot lead alert to your phone" },
  { stat: "78%", label: "Of leads convert if followed up within 5 min" },
  { stat: "0", label: "Leads fall through the cracks" },
];

const steps = [
  {
    icon: Phone,
    title: "Call or form comes in",
    body: "A homeowner calls your number or submits a form. AutoGrowth captures every lead — calls, web forms, and chat.",
  },
  {
    icon: Zap,
    title: "Lead scored in seconds",
    body: "Claude AI reads the lead details — service type, urgency signals, message tone — and scores it high/medium/low with a one-line rationale.",
  },
  {
    icon: MessageSquare,
    title: "You get a 60-second SMS",
    body: "High-intent leads trigger an instant text to your phone: business name, service needed, score, and a one-tap call link.",
  },
  {
    icon: Clock,
    title: "Follow-up runs automatically",
    body: "If you miss the call, the Follow-Up Agent texts the homeowner at 15 min, 1 hour, 1 day, and 3 days. Stops the moment they respond or book.",
  },
];

export default function AiReceptionistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Phone className="w-3.5 h-3.5" />
            Lead Agent + Follow-Up Agent
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Stop losing leads to missed calls
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            The AI Receptionist scores every inbound lead, alerts you in 60
            seconds, and automatically follows up with missed contacts — so
            every lead gets a response even when you&apos;re on a job.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              Get a Free Audit →
            </Link>
            <Link
              href="/demo"
              className="text-gray-700 hover:text-gray-900 font-medium text-base underline underline-offset-4"
            >
              See it live
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gray-900 py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map(({ stat, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-white mb-1">{stat}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How it works
          </h2>
          <div className="space-y-8">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 mt-2 min-h-[2rem]" />
                  )}
                </div>
                <div className="pt-1.5 pb-8">
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Everything included
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Inbound call capture + lead log",
              "Form submission capture from any source",
              "Claude AI lead scoring (urgency, value, service type)",
              "Instant SMS alert to owner phone (high-intent only)",
              "Missed call → text within 15 minutes",
              "Drip follow-up: 1hr, 1 day, 3 day",
              "STOP keyword handling (compliant)",
              "Auto-stop when lead responds or books",
              "Full lead history in your dashboard",
              "Per-lead score + rationale stored forever",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100"
              >
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Included in every plan
          </h2>
          <p className="text-gray-400 mb-8">
            Every AutoGrowth tier gets the full Lead Agent and Follow-Up Agent.
            No feature gating.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            See Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
