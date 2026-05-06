import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AutoGrowth AI",
  description: "AutoGrowth AI privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-zinc-400">
          This page is being updated. Contact us at{" "}
          <a
            href="mailto:hello@autogrowthai.com"
            className="text-blue-400 hover:text-blue-300"
          >
            hello@autogrowthai.com
          </a>{" "}
          for questions.
        </p>
      </div>
    </div>
  );
}
