import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Report Submitted — AutoGrowth AI",
  description:
    "Your AI Visibility Report is on the way. Check your email in 2-3 minutes.",
};

export default function AiVisibilityCheckerThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-emerald-500" strokeWidth={2.5} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Your AI Visibility Report is on the way!
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Check your email in the next 2&ndash;3 minutes. The report shows
          exactly where ChatGPT, Perplexity, and Google AI Overviews cite your
          business &mdash; and where your competitors are winning.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-left">
          <p className="text-sm font-semibold text-gray-500 mb-4">
            While you wait:
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/audit"
                className="text-base text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                → Run the full Free Business Audit
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="text-base text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                → See how AutoGrowth works
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
