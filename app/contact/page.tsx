import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact AutoGrowth AI",
  description:
    "Get in touch with the AutoGrowth AI team. Email support@autogrowthai.co or call (844) 910-2116.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Get in touch
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Questions about pricing, the audit, or whether AutoGrowth fits your
              business? We&apos;re a real team, not a chatbot, and we reply
              within one business day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:support@autogrowthai.co"
              className="group bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all rounded-2xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                <Mail className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Email
                </p>
                <p className="text-base font-semibold text-gray-900">
                  support@autogrowthai.co
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Best for detailed questions or proposals.
                </p>
              </div>
            </a>

            <a
              href="tel:+18449102116"
              className="group bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all rounded-2xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                <Phone className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Phone
                </p>
                <p className="text-base font-semibold text-gray-900">
                  (844) 910-2116
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Mon&ndash;Fri, 9am&ndash;6pm ET.
                </p>
              </div>
            </a>
          </div>

          <p className="text-center text-sm text-gray-400 mt-12">
            Ready to see your visibility score?{" "}
            <a
              href="/audit"
              className="text-emerald-600 font-semibold hover:text-emerald-700"
            >
              Run a free audit →
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
