import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AutoGrowth AI",
  description:
    "How AutoGrowth AI collects, uses, shares, and protects personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-20 prose prose-zinc prose-headings:scroll-mt-24 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-gray-700 prose-li:text-gray-700">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3 not-prose">
          Legal
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12 not-prose">
          Last updated: May 13, 2026
        </p>

        <p>
          AutoGrowth AI (&ldquo;AutoGrowth,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
          Privacy Policy explains how we collect, use, share, and protect
          personal information when you visit autogrowthai.co or use our
          services.
        </p>
        <p>By using our services, you agree to the practices described here.</p>

        <h2>1. Information we collect</h2>
        <p>We collect information you provide directly to us, including:</p>
        <ul>
          <li>
            <strong>Audit forms</strong>: business name, city, state, industry,
            email address, and phone number when you request a free Business
            Audit or AI Visibility Check.
          </li>
          <li>
            <strong>Account information</strong>: name, email, business details,
            and billing information when you create a paid account.
          </li>
          <li>
            <strong>Communications</strong>: messages you send us via email,
            phone, or contact forms.
          </li>
        </ul>
        <p>
          We also collect information automatically when you use our website,
          including pages visited, referring URLs, IP address, browser type, and
          device information. We use privacy-respecting analytics that do not
          track individual users across sites.
        </p>
        <p>
          We do not collect sensitive information such as Social Security
          numbers, government IDs, or precise geolocation.
        </p>

        <h2>2. How we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Generate and deliver audit reports you request</li>
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>
            Contact you about our services, including marketing communications
            (you can opt out at any time)
          </li>
          <li>
            Send service-related notifications such as billing, account updates,
            and security alerts
          </li>
          <li>
            Detect, prevent, and address technical issues, fraud, or abuse
          </li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          <strong>We do not sell your personal information.</strong>
        </p>

        <h2>3. How we share information</h2>
        <p>We share information only in the following circumstances:</p>
        <ul>
          <li>
            <strong>Service providers</strong> — we work with third-party
            providers who help us operate the business, including hosting,
            email delivery, SMS, authentication, database, AI processing, and
            analytics. These providers may access information needed to perform
            their services and are contractually obligated to protect it.
          </li>
          <li>
            <strong>Legal compliance</strong> — we may disclose information if
            required by law, subpoena, or to protect our rights, property, or
            safety, or that of others.
          </li>
          <li>
            <strong>Business transfers</strong> — if AutoGrowth is acquired,
            merged, or sold, your information may be transferred as part of
            that transaction.
          </li>
        </ul>
        <p>
          We do not share your information with advertisers or data brokers.
        </p>

        <h2>4. Data retention</h2>
        <p>
          We retain personal information for as long as necessary to provide
          the services you&apos;ve requested, comply with legal obligations, or
          resolve disputes. Audit form submissions are retained for up to 24
          months unless you request earlier deletion. Account data is retained
          for the duration of your subscription plus 90 days after termination.
        </p>

        <h2>5. Your rights</h2>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <ul>
          <li>
            <strong>Access</strong> — request a copy of the personal
            information we hold about you
          </li>
          <li>
            <strong>Correction</strong> — ask us to correct inaccurate
            information
          </li>
          <li>
            <strong>Deletion</strong> — request that we delete your personal
            information
          </li>
          <li>
            <strong>Opt-out</strong> — unsubscribe from marketing
            communications at any time
          </li>
          <li>
            <strong>Data portability</strong> — request a machine-readable
            export of your data
          </li>
        </ul>
        <p>
          <strong>California residents:</strong> under the CCPA and CPRA, you
          have additional rights, including the right to know what categories of
          personal information we collect and to opt out of any &ldquo;sale&rdquo;
          or &ldquo;sharing&rdquo; of personal information. We do not sell or
          share your personal information for cross-context behavioral
          advertising.
        </p>
        <p>
          To exercise any of these rights, email{" "}
          <a
            href="mailto:support@autogrowthai.co"
            className="text-emerald-600 hover:text-emerald-700"
          >
            support@autogrowthai.co
          </a>
          . We will respond within 30 days.
        </p>

        <h2>6. Security</h2>
        <p>
          We use industry-standard security measures including TLS encryption
          in transit, encrypted storage at rest, role-based access controls,
          and regular security reviews. No method of transmission over the
          Internet is 100% secure, but we work to protect your information.
        </p>

        <h2>7. Children&apos;s privacy</h2>
        <p>
          Our services are for businesses and are not directed to children
          under 13. We do not knowingly collect personal information from
          children. If you believe a child has provided us with information,
          contact us and we will delete it.
        </p>

        <h2>8. Communications preferences</h2>
        <p>
          When you submit an audit form or sign up for our services, you
          consent to receive communications from us about your audit results
          and our services. You can unsubscribe from marketing emails at any
          time by clicking the unsubscribe link in any email or emailing{" "}
          <a
            href="mailto:support@autogrowthai.co"
            className="text-emerald-600 hover:text-emerald-700"
          >
            support@autogrowthai.co
          </a>
          .
        </p>
        <p>
          For SMS communications, message and data rates may apply. Reply STOP
          to opt out of SMS at any time.
        </p>

        <h2>9. Third-party links</h2>
        <p>
          Our website may contain links to third-party sites. We are not
          responsible for the privacy practices of those sites and encourage
          you to review their privacy policies before providing any
          information.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The &ldquo;Last
          updated&rdquo; date at the top reflects the most recent revision.
          Material changes will be communicated via email or a prominent
          notice on our website.
        </p>

        <h2>11. Contact us</h2>
        <p>
          If you have questions about this Privacy Policy or our privacy
          practices:
        </p>
        <p>
          <strong>AutoGrowth AI</strong>
          <br />
          Columbus, OH
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
