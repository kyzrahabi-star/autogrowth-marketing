import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Audit Submitted — AutoGrowth AI",
  description: "Your AI visibility audit is running. Check your email in 24 hours.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-20">
      <div className="max-w-lg mx-auto text-center">
        {/* Checkmark */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl"
          style={{ backgroundColor: "#10B981" }}
        >
          ✓
        </div>

        <h1 className="text-4xl font-bold mb-4">Your audit is running.</h1>
        <p className="text-zinc-400 text-lg mb-10">
          We&apos;re scanning ChatGPT, Perplexity, and Google AI for your
          business right now. Check your email in the next 24 hours — you&apos;ll
          get a full report with your AI visibility score, your top 3
          competitors&apos; scores, and a prioritized list of actions.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-left">
          <p className="text-sm font-semibold text-zinc-400 mb-4">
            While you wait:
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/how-it-works"
                className="text-base text-blue-400 hover:text-blue-300 transition-colors"
              >
                → See how it works
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-base text-blue-400 hover:text-blue-300 transition-colors"
              >
                → View pricing
              </Link>
            </li>
            <li>
              <Link
                href="/demo"
                className="text-base text-blue-400 hover:text-blue-300 transition-colors"
              >
                → Book a demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
