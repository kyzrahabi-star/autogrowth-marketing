import type { Metadata } from "next";
import Link from "next/link";
import { Star, Check, Bell, MessageSquare, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Review Management — AutoGrowth AI",
  description:
    "AutoGrowth's Reputation Agent sends review requests after every job, monitors Google and Yelp nightly, and drafts AI responses to every review for your approval.",
};

const stats = [
  { stat: "92%", label: "of consumers read reviews before hiring a service contractor" },
  { stat: "4.5+", label: "star average needed to win the AI citation slot" },
  { stat: "15 min", label: "after job close, review request SMS fires automatically" },
  { stat: "24 hr", label: "alert to owner for any 1-2 star review" },
];

export default function ReviewManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Star className="w-3.5 h-3.5 fill-yellow-500" />
            Reputation Agent
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            More 5-star reviews without asking for them yourself
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            The Reputation Agent sends review requests after every job,
            monitors Google and Yelp nightly, and drafts thoughtful AI
            responses to every review — for your approval before they post.
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
              <div className="text-gray-400 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why reviews matter for AI search */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Reviews now determine who AI recommends
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            When someone asks ChatGPT or Google AI &ldquo;best HVAC company near
            me&rdquo; — the businesses with the most recent, highest-rated
            reviews get cited. A 4.9-star profile with 200 reviews beats a
            4.2-star profile with 30, every time.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <div className="text-sm font-semibold text-red-700 mb-2">Without AutoGrowth</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✕ Ask customers for reviews manually (awkward)</li>
                <li>✕ Check Google manually for new reviews</li>
                <li>✕ Write responses from scratch — or never respond</li>
                <li>✕ Miss a 1-star review for days</li>
                <li>✕ 2.3 reviews/month average</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
              <div className="text-sm font-semibold text-emerald-700 mb-2">With AutoGrowth</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} /> Automated SMS after every job close</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} /> Nightly Google + Yelp monitoring</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} /> AI-drafted responses, you approve</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} /> 24hr alert on any 1-2 star review</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} /> 8-12 reviews/month average</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            How it works
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: MessageSquare,
                title: "Review request SMS fires after job close",
                body: "15 minutes after a booking is marked complete, the Reputation Agent sends a personalized SMS asking for a review. One-tap link to Google or Yelp.",
              },
              {
                icon: Bell,
                title: "Nightly monitoring across Google + Yelp",
                body: "Every night, the agent checks for new reviews. You get a summary of new reviews in your dashboard each morning.",
              },
              {
                icon: Star,
                title: "AI drafts a response to every review",
                body: "Claude Sonnet reads the review context and drafts a natural, on-brand response. You approve or edit — then it posts. No more staring at a blank box.",
              },
              {
                icon: TrendingUp,
                title: "1-2 star alert within 24 hours",
                body: "Negative review detected? You get an immediate SMS. The agent drafts a recovery response — empathetic, professional, de-escalating.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-5 bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-yellow-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Everything included
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Automated SMS review request after every job",
              "Nightly Google Business Profile monitoring",
              "Nightly Yelp monitoring",
              "AI-drafted review responses (Claude Sonnet 4.6)",
              "One-tap approve/edit workflow",
              "1-2 star review alert within 24 hours",
              "Review velocity trend in your dashboard",
              "Per-platform star rating tracking",
              "Monthly review report",
              "TCPA-compliant opt-out handling",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
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
            The Reputation Agent runs on every AutoGrowth account from day one.
            No setup fee. No extra charge.
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
