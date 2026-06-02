import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { HVAC_CITY_PAGES } from "@/lib/hvac-cities";
import {
  SERVICE_PAGES,
  COMPARISON_PAGES,
} from "@/lib/hvac-service-comparison";

const BASE = "https://www.autogrowthai.co";

type Freq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type StaticEntry = {
  path: string;
  changeFrequency: Freq;
  priority: number;
};

const STATIC_PAGES: StaticEntry[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/tools", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tools/ai-visibility-checker", changeFrequency: "monthly", priority: 0.7 },
  { path: "/audit", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/demo", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/compare", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  // Industry pages
  { path: "/hvac", changeFrequency: "monthly", priority: 0.8 },
  { path: "/plumbing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/electrical", changeFrequency: "monthly", priority: 0.7 },
  { path: "/roofing", changeFrequency: "monthly", priority: 0.7 },
  // Feature pages
  { path: "/features/ai-receptionist", changeFrequency: "monthly", priority: 0.7 },
  { path: "/features/lead-scoring", changeFrequency: "monthly", priority: 0.7 },
  { path: "/features/content-creation", changeFrequency: "monthly", priority: 0.7 },
  { path: "/features/review-management", changeFrequency: "monthly", priority: 0.7 },
  { path: "/features/website-optimization", changeFrequency: "monthly", priority: 0.7 },
];

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
      const { data } = matter(raw);
      const lastModified = data.date ? new Date(data.date as string) : new Date();
      return {
        url: `${BASE}/blog/${slug}`,
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.6,
      };
    });
}

function getHvacCityPages() {
  const now = new Date();
  return HVAC_CITY_PAGES.map((p) => ({
    url: `${BASE}/hvac/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}

function getServicePages() {
  const now = new Date();
  return SERVICE_PAGES.map((p) => ({
    url: `${BASE}/hvac/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
}

function getComparisonPages() {
  const now = new Date();
  return COMPARISON_PAGES.map((p) => ({
    url: `${BASE}/compare/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = STATIC_PAGES.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
  return [
    ...staticEntries,
    ...getHvacCityPages(),
    ...getServicePages(),
    ...getComparisonPages(),
    ...getBlogPosts(),
  ];
}
