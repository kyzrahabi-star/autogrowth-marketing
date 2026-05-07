import type { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Demo — AutoGrowth AI",
  description:
    "15 minutes. No pitch. We'll run a live audit on your business and show you exactly what AI search is saying about you.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            See AutoGrowth in action
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            15 minutes. No pitch. We&apos;ll run a live AI audit on your
            business and show you exactly where your competitors are being
            recommended — and you&apos;re not.
          </p>
          <ul className="space-y-2 text-left max-w-sm mx-auto">
            {[
              "Live audit on your actual business",
              "See competitor citations in real time",
              "Walk away with a concrete action plan",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Cal embed */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src="https://cal.com/evan-ringsonce-demo/ringsonce-demo?embed=true&theme=light"
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a demo"
          />
        </div>
      </div>
    </div>
  );
}
