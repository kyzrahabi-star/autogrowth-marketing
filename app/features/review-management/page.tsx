import type { Metadata } from "next";
import Link from "next/link";
import { Star, Check, Bell, MessageSquare, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Review Management — AutoGrowth AI",
  description:
    "Automated review requests after every job. Google review monitoring. AI-drafted responses in your voice. Negative review alerts in real time.",
};

export default function ReviewManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Star className="w-3.5 h-3.5 fill-gray-500" />
            Reputation Agent
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-5">
            Build Your Reputation on Autopilot
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Automated review requests after every job. Google review monitoring.
            AI-drafted responses in your voice. Negative review alerts in real
            time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              Start Building Your Reputation →
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
      <section className="bg-zinc-900 py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { stat: "92%", label: "of consumers read reviews before hiring" },
            { stat: "4.5+", label: "star avg. needed to win AI citation" },
            { stat: "67%", label: "industry avg. review response rate" },
            { stat: "24hr", label: "negative review alert to owner" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-white mb-1">{stat}</div>
              <div className="text-gray-400 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            How it works
          </h2>
          <div className="space-y-0">
            {[
              {
                icon: Check,
                title: "Job marked complete",
                body: "A booking is closed in your system. The Reputation Agent watches for this trigger.",
              },
              {
                icon: MessageSquare,
                title: "24-hour wait, then review request SMS",
                body: "The next day, a personalized SMS fires: \"Hi Sarah! Jake just finished your AC install. If you have a minute, we'd love a review — it helps a lot: [one-tap Google link]\"",
              },
              {
                icon: Bell,
                title: "Nightly Google + Yelp monitoring",
                body: "Every night, the agent checks both platforms for new reviews. New reviews appear in your dashboard by morning.",
              },
              {
                icon: Star,
                title: "AI drafts a response in your voice",
                body: "Claude Sonnet reads the review and drafts a natural, on-brand response. You review and approve — then it posts. Takes 10 seconds.",
              },
              {
                icon: Shield,
                title: "Negative review? Alert in real time.",
                body: "1–3 star review detected → immediate SMS to owner → AI drafts a recovery response — empathetic, professional, de-escalating — held for your approval.",
              },
            ].map(({ icon: Icon, title, body }, i, arr) => (
              <div key={title} className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-yellow-600" strokeWidth={1.5} />
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px bg-gray-200 flex-1 min-h-[2rem]" />
                  )}
                </div>
                <div className="pt-1.5 pb-8">
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed italic">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response examples */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              AI-drafted responses — in your voice
            </h2>
            <p className="text-gray-500 text-sm">
              You review and approve. Nothing posts without you.
            </p>
          </div>
          <div className="space-y-5">
            {/* 5-star */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-emerald-50 px-5 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-700">David Chen — Google Review</span>
                </div>
                <span className="text-xs text-emerald-600 font-semibold bg-emerald-100 px-2 py-0.5 rounded-full">
                  Draft ready · Pending approval
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="text-sm text-gray-600 bg-gray-50 rounded-lg px-4 py-3 italic">
                  &ldquo;Jake came out same day for our AC install. Cleaned up after himself, explained everything, and the price was exactly what they quoted. 5 stars.&rdquo;
                </div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">AI-Drafted Response</div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  Thank you so much, David! We&apos;re thrilled the AC installation went
                  smoothly — Jake really does go the extra mile to make sure
                  everything&apos;s clean and explained properly. We appreciate you taking
                  the time to share your experience, and we look forward to being your
                  go-to HVAC team for years to come! — The Reynolds Team
                </div>
              </div>
            </div>

            {/* 1-star */}
            <div className="bg-white rounded-2xl border border-red-200 overflow-hidden">
              <div className="bg-red-50 px-5 py-3 border-b border-red-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    <Star className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-gray-200 fill-gray-200" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-700">Sarah T. — Google Review</span>
                </div>
                <span className="text-xs text-red-600 font-semibold bg-red-100 px-2 py-0.5 rounded-full">
                  ⚠ Held for approval — NOT auto-published
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="text-sm text-gray-600 bg-gray-50 rounded-lg px-4 py-3 italic">
                  &ldquo;Technician was 3 hours late and didn&apos;t call to let us know. Frustrating experience.&rdquo;
                </div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">AI-Drafted Response</div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  Hi Sarah, I&apos;m really sorry about this — a 3-hour delay without a
                  heads-up is completely unacceptable, and I understand your frustration.
                  That&apos;s not the experience we want anyone to have with us. I&apos;d
                  like to make this right. Please call us at [phone] or reply here and
                  I&apos;ll personally look into what happened. — Mark Reynolds, Owner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety callout */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900 rounded-2xl px-8 py-7 flex items-start gap-5">
            <Shield className="w-8 h-8 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <div className="text-white font-bold mb-2">
                1–3 star responses are NEVER auto-published.
              </div>
              <div className="text-gray-400 text-sm leading-relaxed">
                Every negative review response is drafted by AI and held in your
                dashboard for your approval before anything posts. You always have
                the final word. Positive reviews (4–5 stars) can be set to
                auto-publish if you prefer — that&apos;s your choice.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Everything included
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Automated SMS review request after every job",
              "Nightly Google Business Profile monitoring",
              "Nightly Yelp monitoring",
              "AI-drafted responses (Claude Sonnet 4.6)",
              "One-tap approve / edit workflow",
              "1–3 star review held for approval (never auto-published)",
              "Negative review alert within 24 hours",
              "Review velocity trend in your dashboard",
              "Per-platform star rating tracking",
              "TCPA-compliant opt-out handling",
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
      <section className="bg-zinc-900 py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Included in every plan
          </h2>
          <p className="text-gray-400 mb-8">
            The Reputation Agent runs on every AutoGrowth account from day one.
            No setup fee. No extra charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              Start Building Your Reputation
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
