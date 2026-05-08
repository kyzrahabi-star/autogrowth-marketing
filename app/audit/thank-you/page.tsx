import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Audit Submitted — AutoGrowth AI",
  description: "Your AI visibility audit is running. Results ready in under 3 minutes.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-lg mx-auto text-center">
        {/* Checkmark */}
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-emerald-500" strokeWidth={2.5} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your visibility audit is running.</h1>
        <p className="text-gray-600 text-lg mb-10">
          We&apos;re scanning Google, Google Maps, ChatGPT, Perplexity, and
          Google AI Overviews for your business right now. Results are usually
          ready in under 3 minutes — you&apos;ll get a full report with your
          visibility score across all platforms, your top 3 competitors&apos;
          scores, and a prioritized list of actions.
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
          </ul>
        </div>
      </div>
    </div>
  );
}
