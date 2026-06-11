import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "The Ultimate Guide to HVAC AI Receptionists & Lead Recovery Systems",
  description:
    "Everything HVAC contractors need to know about AI receptionists and lead recovery systems — how they answer every call 24/7, recover missed calls, book jobs, and stop revenue from walking out the door.",
  alternates: { canonical: "/hvac-ai-receptionist-guide" },
  openGraph: {
    title:
      "The Ultimate Guide to HVAC AI Receptionists & Lead Recovery Systems",
    description:
      "Everything HVAC contractors need to know about AI receptionists and lead recovery systems — how they answer every call 24/7, recover missed calls, book jobs, and stop revenue from walking out the door.",
    type: "article",
  },
};

/**
 * Pillar page. Each entry renders as an H2 question with a bold lead answer
 * and supporting detail. The same `q`/`answer` pairs build the FAQPage JSON-LD,
 * so the structured data always matches the visible content.
 */
const faqs: Array<{
  id: string;
  q: string;
  answer: string;
  detail: React.ReactNode;
}> = [
  {
    id: "what-is-an-hvac-ai-receptionist",
    q: "What is an HVAC AI receptionist?",
    answer:
      "An HVAC AI receptionist is software that answers your phone 24/7 with a natural voice, qualifies the caller, captures the job details, and books the appointment — without a human on your payroll. It is built around the way HVAC customers actually talk when their system fails.",
    detail: (
      <>
        <p>
          Unlike a generic auto-attendant or a &ldquo;press 1 for service&rdquo;
          phone tree, a modern AI receptionist holds a real conversation. It
          greets callers by your business name, understands the difference
          between a no-heat emergency and a routine tune-up request, and routes
          or books the call based on your actual availability. The goal is not
          to replace your team — it is to make sure no call ever hits voicemail.
        </p>
        <p>
          The reason this matters for HVAC specifically is timing. Leads do not
          arrive on a schedule. A homeowner&apos;s AC dies at 9pm in July, and
          they call whoever picks up first. If that is your voicemail, the job
          is already gone. An AI receptionist answers on the first ring, every
          time, at the same quality at 2am as it does at 10am.
        </p>
        <p>
          For a deeper walkthrough of what to look for, see our guide to the{" "}
          <Link href="/blog/best-ai-receptionist-hvac-companies">
            best AI receptionist for HVAC companies
          </Link>{" "}
          or the{" "}
          <Link href="/hvac/hvac-ai-receptionist">HVAC AI receptionist</Link>{" "}
          service overview.
        </p>
      </>
    ),
  },
  {
    id: "after-hours-and-emergency-calls",
    q: "How does an AI receptionist handle after-hours and emergency HVAC calls?",
    answer:
      "It answers every after-hours call instantly, identifies urgency from the conversation, and either books the job or escalates a true emergency to your on-call tech with an instant SMS alert. There is no hold music and no voicemail.",
    detail: (
      <>
        <p>
          If your office hours end at 5pm and your phones roll to voicemail at
          5:01, you are effectively closing your business for 15+ hours a day —
          exactly the window when emergency HVAC calls spike. An AI receptionist
          never clocks out and never charges overtime. It gathers the address,
          system type, and symptoms, flags the call as an emergency, and sends
          the details straight to your team.
        </p>
        <p>
          The escalation path is configurable: a refrigerant leak, gas smell,
          no-heat call in a cold snap, or no-cooling call during a heat advisory
          can trigger an immediate alert to the owner or on-call tech, while a
          maintenance request gets booked into the next open slot. Your tech
          shows up knowing what they are walking into instead of diagnosing
          blind.
        </p>
        <p>
          We cover the emergency-triage playbook in detail in our post on{" "}
          <Link href="/blog/after-hours-answering-service-hvac-emergency-calls">
            after-hours answering for HVAC emergency calls
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "cost-of-missed-calls",
    q: "How much do missed calls actually cost an HVAC company?",
    answer:
      "The average contractor misses 30–40% of incoming calls, and at a $400 average ticket, missing just three calls a week adds up to more than $62,000 a year in lost revenue. During peak season the number is usually larger than owners expect.",
    detail: (
      <>
        <p>
          The math is uncomfortable but simple. Take your average job value,
          multiply it by the calls you miss each week, and apply a conservative
          conversion rate. A shop missing three callable jobs a week at $400,
          converting even half, is leaving tens of thousands of dollars on the
          table over a year — and emergency calls often run $500–$700 or more
          once after-hours rates apply.
        </p>
        <p>
          What makes missed calls so dangerous is that they are invisible. There
          is no voicemail, no callback, no record. The customer simply dials the
          next contractor on Google and you never know the job existed. That is
          why most owners have never actually counted the leak.
        </p>
        <p>
          Run your own numbers with our{" "}
          <Link href="/blog/how-much-do-missed-calls-cost-hvac-companies">
            missed-call cost calculator and booking guide
          </Link>
          , or see exactly{" "}
          <Link href="/blog/how-hvac-companies-lose-revenue-missed-calls">
            how HVAC companies lose revenue from missed calls
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "what-is-a-lead-recovery-system",
    q: "What is a lead recovery system, and how does it work?",
    answer:
      "A lead recovery system automatically follows up with every lead that doesn't book on the first touch — missed callers, unsold estimates, and web inquiries — so revenue you already earned doesn't slip away. It works through instant text-back and multi-step follow-up sequences.",
    detail: (
      <>
        <p>
          Most HVAC companies lose jobs not because the customer wasn&apos;t
          interested, but because nobody followed up fast enough. A lead
          recovery system closes that gap. The moment a call is missed, an
          automated text goes out within seconds. When an estimate goes unsold,
          a structured sequence keeps the conversation alive over the following
          days instead of letting it die in a spreadsheet.
        </p>
        <p>
          The key is speed and consistency. Immediate text-back response rates
          dramatically outperform callbacks made hours later, because you catch
          the customer while they are still on their phone and still in decision
          mode. And unlike manual follow-up — which depends on someone
          remembering — automated sequences fire every time, whether you booked
          5 jobs this week or 50.
        </p>
        <p>
          See the dedicated{" "}
          <Link href="/hvac/hvac-missed-call-recovery">
            HVAC missed-call recovery
          </Link>{" "}
          and{" "}
          <Link href="/hvac/hvac-lead-follow-up">lead follow-up</Link> services
          for how each piece fits together.
        </p>
      </>
    ),
  },
  {
    id: "ai-vs-answering-service",
    q: "AI receptionist vs. a traditional answering service — which is better for HVAC?",
    answer:
      "An AI receptionist is available instantly 24/7 at a consistent, flat cost and can be trained on your services, pricing, and service area; a traditional answering service uses shared human agents who take messages but rarely know HVAC. For most contractors, AI captures more jobs at a lower cost.",
    detail: (
      <>
        <p>
          Live answering services are better than voicemail, but they come with
          real limitations: variable agent quality, per-minute or per-call
          pricing that climbs fast during a summer surge, and reps who can take a
          name and number but can&apos;t qualify the call or book directly into
          your schedule. The customer ends up waiting for a callback that may
          come too late.
        </p>
        <p>
          An AI receptionist sends you a job-ready lead instead of a vague
          message. It asks the right qualifying questions, books appointments,
          and hands your dispatcher structured notes. It doesn&apos;t have a bad
          day, doesn&apos;t put callers on hold, and doesn&apos;t hand off to a
          different agent each time.
        </p>
        <p>
          We break the decision down dollar-for-dollar in{" "}
          <Link href="/blog/ai-vs-answering-service-for-hvac">
            AI vs. answering service for HVAC
          </Link>{" "}
          and rank the major tools in our{" "}
          <Link href="/blog/hvac-ai-receptionist-comparison-smith-goodcall-rosie-answerforce">
            AI answering service comparison
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "ai-vs-human-receptionist",
    q: "AI receptionist vs. hiring a human receptionist — what's the real cost difference?",
    answer:
      "A full-time receptionist costs $40,000–$60,000 a year all-in and still leaves you dark after 5pm, on weekends, and during sick days. An AI receptionist covers every hour for a fraction of that — and it never takes a vacation during your busy season.",
    detail: (
      <>
        <p>
          A great office manager is hard to find and worth keeping. But if you
          are about to hire someone primarily to answer the phone and book
          appointments, the math is worth running. Salary, benefits, training,
          and turnover add up — and a human can only cover roughly 40 hours of a
          168-hour week.
        </p>
        <p>
          AI handles the high-volume, repeatable work — intake, scheduling,
          reminders, follow-ups — so your people can focus on the conversations
          that actually need a human, like complex complaints and relationship
          repair. Many shops run both: AI for coverage and overflow, humans for
          judgment.
        </p>
        <p>
          Compare the two head-to-head on our{" "}
          <Link href="/hvac/ai-receptionist-vs-human-receptionist">
            AI receptionist vs. human receptionist
          </Link>{" "}
          and{" "}
          <Link href="/hvac/ai-receptionist-vs-call-center">
            AI receptionist vs. call center
          </Link>{" "}
          pages.
        </p>
      </>
    ),
  },
  {
    id: "scheduling-software-integration",
    q: "Will an AI receptionist integrate with my scheduling software?",
    answer:
      "Yes — a good AI receptionist books directly into the field service tools HVAC contractors already use, including ServiceTitan, Housecall Pro, and Jobber, so leads move from call to calendar without a manual step. Always confirm the integration before you commit.",
    detail: (
      <>
        <p>
          Capturing a lead is only half the job. The real value comes when the
          AI completes the loop — collecting name, address, service type,
          preferred window, and system details, then writing a clean,
          ready-to-confirm job ticket into your scheduler. That difference turns
          10 minutes of phone tag into a 2-minute confirmation for your CSR.
        </p>
        <p>
          Before choosing any platform, confirm it connects to whatever you
          already run. The last thing you want is a tool that captures leads but
          creates a separate manual step to actually book them. AutoGrowth AI is
          built for HVAC operations and syncs with your scheduling workflow.
        </p>
        <p>
          See how we stack up against the platforms you may already use, like{" "}
          <Link href="/hvac/autogrowth-ai-vs-servicetitan">ServiceTitan</Link>,{" "}
          <Link href="/hvac/autogrowth-ai-vs-housecall-pro">
            Housecall Pro
          </Link>
          , and <Link href="/hvac/autogrowth-ai-vs-jobber">Jobber</Link>.
        </p>
      </>
    ),
  },
  {
    id: "missed-call-text-back",
    q: "How does missed-call text-back recovery convert lost calls into booked jobs?",
    answer:
      "When a call goes unanswered, an automated text fires within seconds — conversational, not robotic — inviting the caller to reply by text. Because you reach them while they are still holding their phone, response rates dramatically beat callbacks made hours later.",
    detail: (
      <>
        <p>
          Even with the best AI answering inbound calls, some get missed — a
          line drops, a caller hangs up early, or a blocked number leaves no
          info. Missed-call recovery is about what happens next, and how fast. A
          text such as &ldquo;Hey, we just missed your call — we&apos;d hate to
          leave you without AC. What&apos;s going on with your system?&rdquo;
          goes out in seconds, not hours.
        </p>
        <p>
          That immediacy is the whole game. The standard contractor experience —
          a missed call sitting in the log until a CSR calls back two or three
          hours later — almost always loses to the competitor who answered or
          texted first. Recovering even half of your missed calls during peak
          season can meaningfully change your booked-job volume.
        </p>
        <p>
          See the full workflow on our{" "}
          <Link href="/hvac/hvac-missed-call-recovery">
            HVAC missed-call recovery
          </Link>{" "}
          page and in the{" "}
          <Link href="/blog/hvac-missed-call-solution">
            HVAC missed-call solution
          </Link>{" "}
          breakdown.
        </p>
      </>
    ),
  },
  {
    id: "setup-time-and-cost",
    q: "How fast can I set up an AI receptionist, and what does it cost?",
    answer:
      "AutoGrowth AI plans start at $497/mo for the AI Receptionist, with the full front-office AI Employee plan at $997/mo. A done-for-you setup is typically live within a few days — most contractors are up and answering every call inside 48 hours.",
    detail: (
      <>
        <p>
          You don&apos;t need any technical experience. You hand over your
          business details — service area, common job types, rough pricing, and
          how you want emergencies handled — and the system is configured around
          your operation. The more accurately you map your most common call
          types up front, the better the customer experience from day one.
        </p>
        <p>
          Pricing is flat and predictable rather than per-minute, which matters
          when call volume spikes during the first heat wave of the summer. For
          most small-to-mid HVAC shops, the monthly cost is a fraction of what a
          single missed week of peak-season calls would cost.
        </p>
        <p>
          See full plans on the{" "}
          <Link href="/pricing">pricing page</Link>, or{" "}
          <Link href="/demo">book a 15-minute demo</Link> to see it running on
          your actual business.
        </p>
      </>
    ),
  },
  {
    id: "how-to-choose",
    q: "How do I choose the best AI receptionist and lead recovery system for my HVAC business?",
    answer:
      "Pick a system built for the trades — one that understands HVAC urgency, runs 24/7, integrates with your scheduler, and includes lead recovery, not just call answering. The best fit captures the job, books it, and follows up automatically.",
    detail: (
      <>
        <p>
          Use a short checklist. Does it understand HVAC language and urgency,
          or is it a repurposed general-purpose call tool? Is it truly available
          around the clock at consistent quality? Does it book into your
          scheduling software? Does it recover missed calls and follow up on
          unsold estimates, or does it stop at answering? And does it have a
          clear escalation path to a human when a situation needs one?
        </p>
        <p>
          Generic AI receptionists will technically answer the phone — but they
          won&apos;t know the difference between a warranty callback and a new
          install lead, and they won&apos;t push that lead toward a booked
          appointment. The system that wins is the one purpose-built to stop
          revenue from walking out the door.
        </p>
        <p>
          Start with our roundup of the{" "}
          <Link href="/hvac/best-hvac-call-answering-service">
            best HVAC call answering service
          </Link>{" "}
          options, then run a free audit to see exactly where your call coverage
          has gaps.
        </p>
      </>
    ),
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HvacAiReceptionistGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="pt-20 pb-10 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border border-emerald-200">
              Pillar Guide
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              The Ultimate Guide to HVAC AI Receptionists &amp; Lead Recovery
              Systems
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every missed call is a missed job. This guide answers the 10
              questions HVAC contractors ask most about AI receptionists and lead
              recovery systems — how they answer every call 24/7, recover the
              calls you miss, book jobs, and stop revenue from walking out the
              door.
            </p>
          </div>
        </section>

        {/* On-page nav */}
        <section className="px-6 lg:px-8 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                In this guide
              </p>
              <ol className="space-y-2 list-decimal list-inside">
                {faqs.map((item) => (
                  <li key={item.id} className="text-gray-700">
                    <Link
                      href={`#${item.id}`}
                      className="text-emerald-600 hover:text-emerald-700 hover:underline"
                    >
                      {item.q}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Q&A sections */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-3xl mx-auto space-y-14">
            {faqs.map((item) => (
              <div key={item.id} id={item.id} className="scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
                  {item.q}
                </h2>
                <p className="text-lg font-semibold text-gray-900 leading-relaxed mb-5">
                  {item.answer}
                </p>
                <div className="text-gray-600 leading-relaxed space-y-4 [&_a]:text-emerald-600 [&_a:hover]:text-emerald-700 [&_a]:underline">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 via-white to-white border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
                See what missed calls are costing your HVAC business
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Free audit. We scan your Google presence, reviews, website, and
                AI search visibility, then show you exactly how many calls
                you&apos;re missing and what they&apos;re worth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:8449102116"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-4 rounded-full text-base transition-colors shadow-sm"
                >
                  Call 844-910-2116 — Hear Your AI Employee
                </a>
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 font-semibold px-7 py-4 rounded-full text-base transition-colors border border-gray-300"
                >
                  Get Your Free Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
