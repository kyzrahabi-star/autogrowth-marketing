import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About AutoGrowth AI",
  description:
    "AutoGrowth AI is an all-in-one growth platform for local service businesses. AI visibility monitoring, audits, AI receptionist, automated follow-ups, weekly ROI reports.",
};

type Capability = {
  emoji: string;
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    emoji: "🔍",
    title: "AI Visibility Monitoring",
    body: "We check if your business shows up when customers ask ChatGPT, Perplexity, and Google for help. If your competitors are showing up and you're not, we fix that.",
  },
  {
    emoji: "📊",
    title: "Free Business Audit",
    body: "We analyze your Google presence, website, reviews, and AI visibility, then show you exactly what you're missing and how much revenue it's costing you.",
  },
  {
    emoji: "📞",
    title: "AI Receptionist (Sarah)",
    body: "A 24/7 AI-powered phone system that answers every call, books appointments, captures lead info, handles emergencies, and sends instant notifications — so you never miss a customer again.",
  },
  {
    emoji: "💬",
    title: "Automated Follow-Ups",
    body: "Every caller gets a personalized text and email. Appointments get confirmed. Emergencies get escalated to the owner instantly.",
  },
  {
    emoji: "📈",
    title: "Weekly ROI Reports",
    body: "See exactly how many calls Sarah captured, appointments booked, and revenue generated. Clear numbers, no guesswork.",
  },
  {
    emoji: "🛡️",
    title: "After-Hours Coverage",
    body: "Nights, weekends, holidays — Sarah never sleeps. Every call gets answered, every lead gets captured, even when you're off the clock.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">
            About AutoGrowth AI
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            We Help Local Businesses Get Found, Get Calls, and Get Booked.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            AutoGrowth AI is an all-in-one growth platform built for local
            service businesses &mdash; HVAC, plumbing, electrical, dental,
            legal, roofing, and more.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            What we do
          </h2>
          <div className="space-y-4">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl shrink-0 leading-none mt-0.5">
                    {cap.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {cap.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + CTA */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 via-white to-white border border-emerald-200 rounded-3xl p-8 sm:p-10 text-center">
            <p className="text-lg text-gray-700 mb-8">
              Serving local service businesses nationwide.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors shadow-sm"
            >
              Get Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
