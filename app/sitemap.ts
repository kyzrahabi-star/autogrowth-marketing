import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://autogrowthai.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/roi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/audit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/demo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/results`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/hvac`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/features/ai-receptionist`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/features/lead-scoring`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/features/content-creation`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/features/review-management`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${base}/blog/hvac-invisible-chatgpt`,
      lastModified: new Date("2026-05-06"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
