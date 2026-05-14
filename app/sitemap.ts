import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://autogrowthai.co";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/roi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/audit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/demo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/results`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/hvac`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/plumbing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/electrical`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/roofing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/features/ai-receptionist`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/features/lead-scoring`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/features/content-creation`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/features/review-management`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${base}/blog/your-hvac-company-lost-3-calls-last-night`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/i-asked-chatgpt-to-recommend-a-plumber`,
      lastModified: new Date("2026-05-11"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/why-your-google-reviews-are-losing-you-money`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/hvac-invisible-chatgpt`,
      lastModified: new Date("2026-05-06"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/the-1497-phone-system-that-replaced-our-receptionist`,
      lastModified: new Date("2026-05-04"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/we-audited-50-contractors-in-columbus`,
      lastModified: new Date("2026-05-02"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
