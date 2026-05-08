import { Suspense } from "react";
import { AuditResults } from "./AuditResults";

function Fallback() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-md text-center">
        <div className="w-12 h-12 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Generating your audit...
        </h1>
        <p className="text-gray-500">
          We&apos;re scanning Google, ChatGPT, Perplexity, and Google AI for
          your business. Results are usually ready in under 3 minutes.
        </p>
      </div>
    </div>
  );
}

export default function AuditResultsPage() {
  return (
    <>
      <noscript>
        <div
          style={{
            padding: "40px 24px",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
            Audit submitted successfully
          </h1>
          <p style={{ color: "#6b7280" }}>
            Your full audit report will be ready in under 3 minutes.
          </p>
        </div>
      </noscript>
      <Suspense fallback={<Fallback />}>
        <AuditResults />
      </Suspense>
    </>
  );
}
