import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — AutoGrowth AI",
  description:
    "15 minutes. No pitch. We'll run a live audit on your business and show you exactly what AI search is saying about you.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            See AutoGrowth in action
          </h1>
          <p className="text-zinc-400 text-lg mb-8">
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
              <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                <span className="text-emerald-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Cal embed */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <iframe
            src="https://cal.com/evan-ringsonce-demo/ringsonce-demo?embed=true&theme=dark"
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
