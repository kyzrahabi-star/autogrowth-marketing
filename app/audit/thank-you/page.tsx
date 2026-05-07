import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Audit Submitted — AutoGrowth AI",
  description: "Your AI visibility audit is running. Check your email in 24 hours.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-lg mx-auto text-center">
        {/* Checkmark */}
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-emerald-500 text-4xl">✓</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your audit is running.</h1>
        <p className="text-gray-600 text-lg mb-10">
          We&apos;re scanning ChatGPT, Perplexity, and Google AI for your
          business right now. Check your email in the next 24 hours — you&apos;ll
          get a full report with your AI visibility score, your top 3
          competitors&apos; scores, and a prioritized list of actions.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-left">
          <p className="text-sm font-semibold text-gray-500 mb-4">
            While you wait:
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/how-it-works"
                className="text-base text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                → See how it works
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-base text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                → View pricing
              </Link>
            </li>
            <li>
              <Link
                href="/demo"
                className="text-base text-emerald-600 hover:text-emerald-700 transition-colors"
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
