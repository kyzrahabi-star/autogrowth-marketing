import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About AutoGrowth AI — Built for HVAC Companies",
  description:
    "AutoGrowth AI helps HVAC contractors get found on Google and AI search, answer every call 24/7, and book more service jobs. Based in Houston, TX.",
  openGraph: {
    title: "About AutoGrowth AI — Built for HVAC Companies",
    description:
      "AutoGrowth AI helps HVAC contractors get found on Google and AI search, answer every call 24/7, and book more service jobs. Based in Houston, TX.",
  },
};

type Capability = {
  emoji: string;
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    emoji: "📞",
    title: "Missed Call Revenue Recovery",
    body: "Never lose a $400 service call to voicemail again. AI receptionist Sarah answers every HVAC call 24/7 — nights, weekends, holidays — books service appointments, and SMS-alerts you on every emergency.",
  },
  {
    emoji: "🛡️",
    title: "After-Hours Coverage",
    body: "AC emergencies don't wait for business hours. Neither does Sarah. Every 9pm no-cooling call, every Sunday morning furnace failure, every holiday weekend gets answered live.",
  },
  {
    emoji: "💬",
    title: "Estimate Recovery Engine",
    body: "Chase the 60% of HVAC quotes that never close. Personalized text + email follow-ups for every estimate, with a 14-day sequence that stops the moment they book.",
  },
  {
    emoji: "⭐",
    title: "Reputation Growth System",
    body: "Turn every completed install or service call into a 5-star Google review. Automated requests 2 hours after the job, AI-drafted responses in your voice, instant alerts on anything below 4 stars.",
  },
  {
    emoji: "🔍",
    title: "Competitive Intelligence",
    body: "See which HVAC competitors ChatGPT, Perplexity, and Google AI Overviews recommend instead of you. We check daily, show you where you're invisible, and fix it.",
  },
  {
    emoji: "📈",
    title: "Revenue Dashboard",
    body: "See exactly how many jobs AutoGrowth AI booked you this month. Calls captured, appointments booked, revenue generated. Clear numbers, no guesswork.",
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
            We Help HVAC Companies Get Found, Get Calls, and Get Booked.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            AutoGrowth AI is an all-in-one growth platform built for HVAC
            contractors. Plumbing, electrical, and roofing on the roadmap.
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
            <p className="text-sm font-semibold text-gray-500 mb-2">
              Based in Houston, Texas
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Serving HVAC companies nationwide.
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
