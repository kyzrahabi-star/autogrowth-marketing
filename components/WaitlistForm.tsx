"use client";

import { useState } from "react";
import { Check, ArrowRight, Loader2 } from "lucide-react";

type Vertical = "plumbing" | "electrical" | "roofing";

const LABELS: Record<Vertical, string> = {
  plumbing: "Plumbing",
  electrical: "Electrical",
  roofing: "Roofing",
};

export function WaitlistForm({ vertical }: { vertical: Vertical }) {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, businessName, vertical }),
      });
      if (!res.ok) {
        const d = (await res.json()) as { error?: string };
        throw new Error(d.error ?? "Something went wrong");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-emerald-500" strokeWidth={2.5} />
        </div>
        <p className="font-semibold text-gray-900 text-lg mb-1">
          You&apos;re on the list!
        </p>
        <p className="text-gray-500 text-sm">
          We&apos;ll reach out as soon as {LABELS[vertical]} launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Business name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
      />
      <input
        type="email"
        required
        placeholder="Work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            Join the {LABELS[vertical]} Waitlist
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
