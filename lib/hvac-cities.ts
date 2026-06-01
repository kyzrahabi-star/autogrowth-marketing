// HVAC city landing pages (hub-and-spoke SEO).
// Hub: /hvac. Spokes: /hvac/[slug].
//
// To add a city: append an entry to HVAC_CITY_PAGES. Slug must be
// kebab-case (alpha + hyphens only). The dynamic route auto-generates
// static params from this list and rebuilds the sitemap at deploy time.
//
// bodyContent is rendered as Markdown via next-mdx-remote. Supports
// headings, lists, bold, italic, links, code blocks. No JSX components.
//
// faqJson renders as both an on-page FAQ accordion AND a JSON-LD
// FAQPage schema for Google's rich-results.

export interface HvacCityPage {
  slug: string;                  // "houston"  -> /hvac/houston
  city: string;                  // "Houston"
  state: string;                 // "TX"
  h1: string;                    // "HVAC AI Receptionist in Houston, TX"
  metaTitle: string;             // <title> + og:title
  metaDescription: string;       // <meta name="description"> + og:description
  blufBlock: string;             // 40-80 word direct answer paragraph at top
  bodyContent: string;           // Markdown body (rendered via MDXRemote)
  faqJson: Array<{ q: string; a: string }>;
}

export const HVAC_CITY_PAGES: HvacCityPage[] = [
  {
    slug: "houston",
    city: "Houston",
    state: "TX",
    h1: "HVAC AI Receptionist in Houston, TX",
    metaTitle: "HVAC AI Receptionist in Houston, TX | AutoGrowth AI",
    metaDescription:
      "Houston HVAC contractors lose calls to voicemail every summer. AutoGrowth AI answers every Houston HVAC call 24/7 — books service jobs, captures leads, never sleeps.",
    blufBlock:
      "Houston HVAC contractors miss an estimated 30–40% of service calls during the summer cooling season. AutoGrowth AI is an always-on AI receptionist that answers every call by your business name, books appointments into your calendar, and SMS-alerts you on every emergency — so you don't lose a $400 AC service call to voicemail.",
    bodyContent: `## Why Houston HVAC needs 24/7 call coverage

When the heat index hits 105°F in July, every Houston homeowner with a failing AC dials the first three HVAC companies that come up on Google. The one who picks up wins the job. The two who go to voicemail lose it forever.

Most Houston HVAC contractors run lean office teams that close at 5pm. After hours — including 60% of the weekend volume in cooling season — calls roll to voicemail. By Monday morning the customer already paid someone else.

## What AutoGrowth AI does for Houston HVAC contractors

- **Answers every call 24/7** — Hurricane season, holiday weekends, 3am refrigerant leaks. Sarah picks up by your business name.
- **Books service appointments** into your existing Google Calendar or ServiceTitan
- **Captures lead info** — name, address, AC make/model, urgency, callback number
- **SMS-alerts the owner instantly** on every emergency — gas smell, no cooling in heat advisory, water leak from the air handler
- **Texts back missed calls** in under 30 seconds if your team is on a job

## The Houston math

Average Houston HVAC service call: $400. Average emergency repair: $800–$1,800. Average system replacement: $7,000–$15,000.

Miss 3 calls per week × $400 average × 52 weeks = **$62,400/year in lost revenue**. That's before counting the bigger replacement jobs you'd capture by answering when other companies couldn't.

## Other AutoGrowth features for Houston HVAC

- **Estimate Recovery Engine** — chase the 60% of Houston HVAC quotes that never close
- **Reputation Growth System** — turn every install into a 5-star Google review
- **Competitive Intelligence** — see which Houston HVAC companies ChatGPT recommends instead of you`,
    faqJson: [
      {
        q: "Does AutoGrowth AI work for Houston HVAC contractors?",
        a: "Yes. AutoGrowth AI is configured per-business and supports any service area. Houston HVAC contractors get the same 24/7 call coverage, estimate follow-up, and review automation as our Columbus and national customers. Setup includes Houston-specific service catalog, pricing tiers, and emergency definitions.",
      },
      {
        q: "How much does it cost for a Houston HVAC business?",
        a: "Pricing starts at $497/month for the AI Receptionist plan. The AI Employee plan at $997/month includes the full front office — receptionist, follow-ups, review management, and reporting. See autogrowthai.co/pricing for the full breakdown.",
      },
      {
        q: "Can it handle Houston's hurricane season call volume?",
        a: "Yes. The AI receptionist scales to unlimited simultaneous calls — there's no busy signal, no hold queue, no missed call when a tropical storm knocks out power across Harris County. Every caller gets answered immediately.",
      },
      {
        q: "Does the AI know my pricing and service area?",
        a: "Yes. During setup we configure your Houston service area (which neighborhoods you serve, which you don't), your diagnostic fee, common job ranges, and what counts as an emergency for your business. The AI answers questions accurately or escalates to you when it doesn't know.",
      },
    ],
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "OH",
    h1: "HVAC AI Receptionist in Columbus, OH",
    metaTitle: "HVAC AI Receptionist in Columbus, OH | AutoGrowth AI",
    metaDescription:
      "Columbus HVAC contractors miss 30-40% of after-hours calls during polar-vortex winters. AutoGrowth AI answers every call 24/7 — books service jobs, never sleeps.",
    blufBlock:
      "Columbus HVAC contractors lose an estimated 30–40% of after-hours calls during polar-vortex winters and humid summers. AutoGrowth AI is an always-on AI receptionist that answers every call by your business name, books appointments, and SMS-alerts you on every no-heat emergency — so you never lose a $400 furnace call to voicemail.",
    bodyContent: `## Why Columbus HVAC needs 24/7 call coverage

When a polar vortex drops Columbus temperatures to -10°F overnight, every homeowner with a failing furnace dials the first three HVAC companies that come up on Google. The one who picks up wins the job. The two who go to voicemail lose it forever.

Most Columbus HVAC contractors run lean office teams that close at 5pm and don't run a real weekend desk. After hours — including the worst-weather calls when emergencies actually happen — calls roll to voicemail.

## What AutoGrowth AI does for Columbus HVAC contractors

- **Answers every call 24/7** — polar vortex weekends, holidays, 2am no-heat emergencies. Sarah picks up by your business name.
- **Books service appointments** into your existing Google Calendar or scheduling tool
- **Captures lead info** — name, address, furnace make/model, urgency, callback number
- **SMS-alerts the owner instantly** on every emergency — no heat below 32°F, gas smell, CO detector going off
- **Texts back missed calls** in under 30 seconds if your team is mid-install

## The Columbus math

Average Columbus HVAC service call: $400. Emergency winter furnace repair: $600–$1,500. Full system replacement: $7,000–$15,000.

Miss 3 calls per week × $400 average × 52 weeks = **$62,400/year in lost revenue**. Cold-weather emergencies are worth more — a Columbus contractor who picks up Saturday morning at 6am during a polar vortex captures jobs other companies will never see.

## Other AutoGrowth features for Columbus HVAC

- **Estimate Recovery Engine** — chase the 60% of Columbus HVAC quotes that never close
- **Reputation Growth System** — turn every install into a 5-star Google review
- **Competitive Intelligence** — see which Columbus HVAC companies ChatGPT recommends instead of you`,
    faqJson: [
      {
        q: "Does AutoGrowth AI work for Columbus HVAC contractors?",
        a: "Yes. AutoGrowth AI is configured per-business and supports any service area. Columbus HVAC contractors get the same 24/7 call coverage, estimate follow-up, and review automation as our Houston and national customers. Setup includes Columbus-specific service catalog (heat pumps, furnace replacements common in central Ohio), pricing tiers, and emergency definitions.",
      },
      {
        q: "How much does it cost for a Columbus HVAC business?",
        a: "Pricing starts at $497/month for the AI Receptionist plan. The AI Employee plan at $997/month includes the full front office — receptionist, follow-ups, review management, and reporting. See autogrowthai.co/pricing for the full breakdown.",
      },
      {
        q: "Can it handle Columbus winter emergency call spikes?",
        a: "Yes. The AI receptionist scales to unlimited simultaneous calls — there's no busy signal when a polar vortex hits Franklin County and 200 homeowners call at once. Every caller gets answered immediately and high-priority no-heat emergencies route directly to your cell phone.",
      },
      {
        q: "Does the AI know my pricing and service area?",
        a: "Yes. During setup we configure your Columbus service area (Franklin County, Delaware County, parts of Licking, etc.), your diagnostic fee, common job ranges, and what counts as an emergency. The AI answers questions accurately or escalates to you when it doesn't know.",
      },
    ],
  },
  {
    slug: "dallas",
    city: "Dallas",
    state: "TX",
    h1: "HVAC AI Receptionist in Dallas, TX",
    metaTitle: "HVAC AI Receptionist in Dallas, TX | AutoGrowth AI",
    metaDescription:
      "Dallas HVAC contractors lose calls to voicemail every Texas summer. AutoGrowth AI answers every call 24/7 — books service jobs, captures leads, never sleeps.",
    blufBlock:
      "Dallas HVAC contractors miss an estimated 30–40% of service calls during the punishing Texas summer. AutoGrowth AI is an always-on AI receptionist that answers every call by your business name, books appointments, and SMS-alerts you on every cooling emergency — so you don't lose a $400 AC service call to voicemail.",
    bodyContent: `## Why Dallas HVAC needs 24/7 call coverage

When North Texas hits 110°F in August, every Dallas homeowner with a failing AC dials the first three HVAC companies that come up on Google. The one who picks up wins the job. The two who go to voicemail lose it forever.

Most Dallas-Fort Worth HVAC contractors run lean office teams that can't handle the summer call spike. After hours — and during peak afternoon volume — calls roll to voicemail. The customer calls the next company on the list and you never see them again.

## What AutoGrowth AI does for Dallas HVAC contractors

- **Answers every call 24/7** — 110°F afternoons, severe storm callbacks, weekend service requests. Sarah picks up by your business name.
- **Books service appointments** into your existing Google Calendar or scheduling tool
- **Captures lead info** — name, address, AC make/model, urgency, callback number
- **SMS-alerts the owner instantly** on every emergency — no cooling in heat advisory, gas smell, frozen evaporator coil
- **Texts back missed calls** in under 30 seconds if your team is on the roof

## The Dallas math

Average Dallas HVAC service call: $400. Emergency summer AC repair: $700–$1,500. Average system replacement: $7,000–$15,000.

Miss 3 calls per week × $400 average × 52 weeks = **$62,400/year in lost revenue**. And that's the average — Dallas summer emergency volumes are heavier than the year-round mean, so the real number for May–September contractors is higher.

## Other AutoGrowth features for Dallas HVAC

- **Estimate Recovery Engine** — chase the 60% of Dallas HVAC quotes that never close
- **Reputation Growth System** — turn every install into a 5-star Google review
- **Competitive Intelligence** — see which Dallas HVAC companies ChatGPT recommends instead of you`,
    faqJson: [
      {
        q: "Does AutoGrowth AI work for Dallas HVAC contractors?",
        a: "Yes. AutoGrowth AI is configured per-business and supports any service area. Dallas HVAC contractors get the same 24/7 call coverage, estimate follow-up, and review automation as our Houston and Columbus customers. Setup includes Dallas-specific service catalog, pricing tiers, and emergency definitions for North Texas climate.",
      },
      {
        q: "How much does it cost for a Dallas HVAC business?",
        a: "Pricing starts at $497/month for the AI Receptionist plan. The AI Employee plan at $997/month includes the full front office — receptionist, follow-ups, review management, and reporting.",
      },
      {
        q: "Can it handle Dallas summer call volume?",
        a: "Yes. The AI receptionist scales to unlimited simultaneous calls — there's no busy signal during an August heat wave when 300 Dallas homeowners call at once. Every caller gets answered immediately and emergencies route directly to your phone.",
      },
      {
        q: "Does the AI know my pricing and service area?",
        a: "Yes. During setup we configure your Dallas-Fort Worth service area, your diagnostic fee, common job ranges (R-410A top-off, capacitor replacement, full system swap), and emergency definitions. The AI answers questions accurately or escalates to you when it doesn't know.",
      },
    ],
  },
];

// Helper: get a city page by slug. Returns null if not found.
export function getCityPage(slug: string): HvacCityPage | null {
  return HVAC_CITY_PAGES.find((p) => p.slug === slug) ?? null;
}

// Helper: pick N other cities for spoke links (next N alphabetical, wraps).
export function getSpokeLinks(currentSlug: string, count = 3): HvacCityPage[] {
  const sorted = [...HVAC_CITY_PAGES].sort((a, b) =>
    a.slug.localeCompare(b.slug),
  );
  const currentIndex = sorted.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return sorted.slice(0, count);
  const out: HvacCityPage[] = [];
  for (let i = 1; i <= count; i++) {
    out.push(sorted[(currentIndex + i) % sorted.length]);
  }
  return out;
}
