import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "AutoGrowth AI Terms of Service. Terms and conditions for using our platform and services.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service — AutoGrowth AI",
    description:
      "AutoGrowth AI Terms of Service. Terms and conditions for using our platform and services.",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-20 prose prose-zinc prose-headings:scroll-mt-24 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-gray-700 prose-li:text-gray-700">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3 not-prose">
          Legal
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-12 not-prose">
          Last updated: May 13, 2026
        </p>

        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
          and use of AutoGrowth AI (&ldquo;AutoGrowth AI,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) services,
          including our website at autogrowthai.co, free audit tools, and paid
          subscription products (collectively, the &ldquo;Services&rdquo;).
        </p>
        <p>
          By accessing or using our Services, you agree to be bound by these
          Terms. If you do not agree, do not use the Services.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You must be at least 18 years old and authorized to act on behalf of
          the business you represent. The Services are intended for business
          use only and not for personal, family, or household purposes.
        </p>

        <h2>2. The Services</h2>
        <p>AutoGrowth AI provides AI-powered growth tools for local service businesses, including:</p>
        <ul>
          <li>
            <strong>Free tools</strong>: Business Audit and AI Visibility
            Checker (no account required).
          </li>
          <li>
            <strong>Paid subscription plans</strong>: hosted websites, lead
            scoring, follow-up automation, content generation, reputation
            management, and related services, subject to pricing displayed at{" "}
            <a
              href="/pricing"
              className="text-emerald-600 hover:text-emerald-700"
            >
              autogrowthai.co/pricing
            </a>
            .
          </li>
        </ul>
        <p>
          Service features may change over time. We will provide reasonable
          notice of material changes that adversely affect paid subscribers.
        </p>

        <h2>3. Account registration</h2>
        <p>
          To use paid services, you must create an account and provide
          accurate, current information. You are responsible for maintaining
          the confidentiality of your credentials and for all activity that
          occurs under your account.
        </p>

        <h2>4. Free audit tools</h2>
        <p>By submitting a free audit request, you grant AutoGrowth AI permission to:</p>
        <ul>
          <li>
            Generate an audit report using publicly available information
            about your business
          </li>
          <li>
            Send the report and follow-up communications to the email and
            phone number you provided
          </li>
          <li>Contact you about our paid services</li>
        </ul>
        <p>
          You can opt out of marketing communications at any time. See our{" "}
          <a
            href="/privacy"
            className="text-emerald-600 hover:text-emerald-700"
          >
            Privacy Policy
          </a>{" "}
          for details.
        </p>

        <h2>5. Subscriptions, billing, and renewal</h2>
        <p>Paid subscriptions are billed in advance on a monthly or annual basis. By starting a subscription:</p>
        <ul>
          <li>
            You authorize AutoGrowth AI to charge your payment method on each
            renewal
          </li>
          <li>
            Subscriptions automatically renew unless cancelled at least 24
            hours before the renewal date
          </li>
          <li>Setup fees, where applicable, are non-refundable</li>
          <li>
            Monthly subscription fees are non-refundable except as required by
            law
          </li>
        </ul>
        <p>
          You can cancel your subscription anytime by contacting{" "}
          <a
            href="mailto:support@autogrowthai.co"
            className="text-emerald-600 hover:text-emerald-700"
          >
            support@autogrowthai.co
          </a>{" "}
          or via your account dashboard. Cancellation takes effect at the end
          of your current billing period. We may change pricing with at least
          30 days&apos; notice for existing subscribers.
        </p>

        <h2>6. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Services for any unlawful purpose or to violate any laws</li>
          <li>
            Reverse engineer, decompile, or attempt to extract source code
            from the Services
          </li>
          <li>
            Resell, sublicense, or commercialize the Services without our
            written consent
          </li>
          <li>Submit false, misleading, or harmful content</li>
          <li>
            Interfere with the operation of the Services, including by
            introducing malware or attempting unauthorized access
          </li>
          <li>
            Use automated tools (bots, scrapers) to access the Services except
            as expressly permitted
          </li>
          <li>Impersonate any person or business</li>
        </ul>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these Terms.
        </p>

        <h2>7. Content and intellectual property</h2>
        <p>
          <strong>Our content.</strong> AutoGrowth AI owns all rights to the
          Services, including the platform, software, content, designs,
          trademarks, and AI models. We grant you a limited, non-exclusive,
          non-transferable license to use the Services during your
          subscription.
        </p>
        <p>
          <strong>Your content.</strong> You retain ownership of content you
          submit (business information, logos, photos, etc.). By submitting
          content, you grant AutoGrowth AI a worldwide, royalty-free license to
          use it solely to provide the Services. You represent that you have
          the rights to all content you submit.
        </p>
        <p>
          <strong>Generated content.</strong> AutoGrowth AI may generate websites,
          articles, audits, and other materials on your behalf. Subject to
          payment of all fees, you own the generated content delivered to you.
          AutoGrowth AI retains the right to use anonymized, aggregated data to
          improve the Services.
        </p>

        <h2>8. AI-generated content disclaimer</h2>
        <p>
          Our Services use artificial intelligence to generate audit reports,
          marketing content, and other materials. AI-generated content may
          contain inaccuracies, omissions, or errors. We recommend reviewing
          all AI-generated content before publishing or relying on it.
          AutoGrowth AI makes no warranty as to the accuracy or completeness of
          AI-generated outputs.
        </p>

        <h2>9. No guarantee of results</h2>
        <p>
          We provide tools and services, not guaranteed outcomes. Search
          engine rankings, AI citations, lead volume, and business growth
          depend on many factors outside our control, including competitive
          landscape, algorithm changes by third parties (Google, OpenAI,
          Perplexity, and others), and your own implementation of our
          recommendations. AutoGrowth AI does not guarantee specific rankings,
          traffic, lead counts, or revenue results.
        </p>

        <h2>10. Disclaimer of warranties</h2>
        <p className="uppercase text-sm">
          The Services are provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, express or implied,
          including warranties of merchantability, fitness for a particular
          purpose, and non-infringement. AutoGrowth AI does not warrant that the
          Services will be uninterrupted, error-free, or secure.
        </p>

        <h2>11. Limitation of liability</h2>
        <p className="uppercase text-sm">
          To the maximum extent permitted by law, AutoGrowth AI shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, including lost profits, lost revenue, or lost
          data, arising from your use of the Services.
        </p>
        <p className="uppercase text-sm">
          Our total liability for any claim arising from or related to these
          Terms or the Services is limited to the amount you paid us in the 12
          months preceding the claim, or $100, whichever is greater.
        </p>
        <p>
          Some jurisdictions do not allow these limitations, so they may not
          apply to you.
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless AutoGrowth AI and its officers,
          employees, and agents from any claims, damages, losses, or expenses
          (including reasonable attorneys&apos; fees) arising from: (a) your
          use of the Services, (b) your violation of these Terms, (c) your
          violation of any third-party rights, or (d) content you submit or
          generate.
        </p>

        <h2>13. Termination</h2>
        <p>
          We may suspend or terminate your access to the Services if you
          violate these Terms, fail to pay fees, or for any other reason with
          reasonable notice. You may terminate your account at any time.
          Sections 7, 10, 11, 12, 13, and 15 survive termination.
        </p>

        <h2>14. Communications and consent</h2>
        <p>
          By providing your phone number, you consent to receive automated
          calls and SMS from AutoGrowth AI and its service providers for
          business-related communications including audit results, account
          updates, and marketing. Message and data rates may apply. Reply STOP
          to opt out of SMS. Consent to marketing is not a condition of
          purchase.
        </p>
        <p>
          By providing your email address, you consent to receive transactional
          emails (audit results, account updates, billing) and may receive
          marketing emails. You can unsubscribe from marketing at any time.
        </p>

        <h2>15. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of the State of Ohio, without
          regard to conflict-of-law principles. Any dispute arising from these
          Terms or the Services shall be resolved exclusively in the state or
          federal courts located in Franklin County, Ohio, and you consent to
          personal jurisdiction there. You and AutoGrowth AI waive any right to a
          jury trial.
        </p>

        <h2>16. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. The &ldquo;Last
          updated&rdquo; date at the top reflects the most recent revision.
          Material changes will be communicated via email or a prominent notice
          on our website. Continued use of the Services after changes take
          effect constitutes acceptance.
        </p>

        <h2>17. Miscellaneous</h2>
        <ul>
          <li>
            <strong>Entire agreement</strong> — these Terms, together with the
            Privacy Policy and any subscription-specific agreement, constitute
            the entire agreement between you and AutoGrowth AI.
          </li>
          <li>
            <strong>Severability</strong> — if any provision is found
            unenforceable, the remaining provisions remain in effect.
          </li>
          <li>
            <strong>No waiver</strong> — our failure to enforce any provision
            is not a waiver of our right to do so later.
          </li>
          <li>
            <strong>Assignment</strong> — you may not assign your rights under
            these Terms without our consent. We may assign these Terms in
            connection with a merger, acquisition, or asset sale.
          </li>
        </ul>

        <h2>18. Contact us</h2>
        <p>For questions about these Terms or our Services:</p>
        <p>
          <strong>AutoGrowth AI</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:support@autogrowthai.co"
            className="text-emerald-600 hover:text-emerald-700"
          >
            support@autogrowthai.co
          </a>
          <br />
          Phone:{" "}
          <a
            href="tel:+18449102116"
            className="text-emerald-600 hover:text-emerald-700"
          >
            (844) 910-2116
          </a>
        </p>
      </article>
    </div>
  );
}
