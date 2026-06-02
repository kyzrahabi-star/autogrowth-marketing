// Build lib/hvac-cities.ts from a CSV export of the HVAC SEO Landing Pages
// Google Sheet. Run when the Sheet changes.
//
// Usage:
//   1. Export Sheet as CSV (File -> Download -> Comma Separated Values)
//   2. Drop it at tmp/hvac-cities.csv (tmp/ is gitignored)
//   3. From repo root: node scripts/build-hvac-cities.mjs
//   4. lib/hvac-cities.ts is regenerated; commit + push
//
// Expected columns: City, State, Service, Slug, H1, Meta Title,
// Meta Description, BLUF Block, Body Content, FAQ JSON, Status.

import fs from "node:fs";

const CSV_PATH = "tmp/hvac-cities.csv";
const OUT_PATH = "lib/hvac-cities.ts";

// RFC 4180-ish CSV parser. Handles quoted fields with commas, newlines,
// and escaped double-quotes.
function parseCSV(text) {
  const rows = [];
  let field = "";
  let row = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else {
      if (c === '"') {
        inQuotes = true;
      } else if (c === ",") {
        row.push(field);
        field = "";
      } else if (c === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else if (c === "\r") {
        // skip
      } else {
        field += c;
      }
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function toServiceSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

function titleCaseService(name) {
  // "AI receptionist" -> "AI Receptionist"
  // "missed call recovery" -> "Missed Call Recovery"
  return name
    .split(/\s+/)
    .map((w) => {
      if (w.toUpperCase() === "AI") return "AI";
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(" ");
}

const csv = fs.readFileSync(CSV_PATH, "utf8");
const rows = parseCSV(csv);
const header = rows[0];

const colIdx = (name) => {
  const i = header.indexOf(name);
  if (i === -1) throw new Error(`Missing column: ${name}`);
  return i;
};

const cols = {
  city: colIdx("City"),
  state: colIdx("State"),
  service: colIdx("Service"),
  slug: colIdx("Slug"),
  h1: colIdx("H1"),
  metaTitle: colIdx("Meta Title"),
  metaDescription: colIdx("Meta Description"),
  blufBlock: colIdx("BLUF Block"),
  bodyContent: colIdx("Body Content"),
  faqJson: colIdx("FAQ JSON"),
  status: colIdx("Status"),
};

const dataRows = rows
  .slice(1)
  .filter((r) => r.length > 1 && (r[cols.slug] || "").trim() !== "");

const services = new Map(); // slug -> display
const cities = new Set();
const faqErrors = [];
const pages = dataRows.map((r, idx) => {
  const rawService = r[cols.service].trim();
  const serviceDisplay = titleCaseService(rawService);
  const serviceSlug = toServiceSlug(rawService);
  const city = r[cols.city].trim();
  services.set(serviceSlug, serviceDisplay);
  cities.add(city);

  let faqJson = [];
  const faqRaw = (r[cols.faqJson] || "").trim();
  if (faqRaw) {
    try {
      const parsed = JSON.parse(faqRaw);
      if (Array.isArray(parsed)) {
        faqJson = parsed.map((item) => ({
          q: String(item.q ?? item.question ?? "").trim(),
          a: String(item.a ?? item.answer ?? "").trim(),
        }));
      }
    } catch (e) {
      faqErrors.push({
        row: idx + 2,
        slug: r[cols.slug],
        error: e.message,
      });
    }
  }

  return {
    slug: r[cols.slug].trim(),
    service: serviceSlug,
    serviceDisplay,
    city,
    state: r[cols.state].trim(),
    h1: r[cols.h1].trim(),
    metaTitle: r[cols.metaTitle].trim(),
    metaDescription: r[cols.metaDescription].trim(),
    blufBlock: r[cols.blufBlock].trim(),
    bodyContent: r[cols.bodyContent], // preserve newlines
    faqJson,
  };
});

console.log(`Parsed ${pages.length} pages`);
console.log(`Services (${services.size}):`, [...services.values()].sort());
console.log(`Cities (${cities.size}):`, [...cities].sort());
if (faqErrors.length) {
  console.log(`\nFAQ parse errors (${faqErrors.length}):`);
  faqErrors.forEach((e) => console.log(`  row ${e.row} (${e.slug}): ${e.error}`));
}

// Validate
const warnings = [];
if (pages.length !== 120) warnings.push(`expected 120 pages, got ${pages.length}`);
if (services.size !== 6) warnings.push(`expected 6 services, got ${services.size}`);
if (cities.size !== 20) warnings.push(`expected 20 cities, got ${cities.size}`);

// Duplicate slug check
const slugCounts = new Map();
for (const p of pages) {
  slugCounts.set(p.slug, (slugCounts.get(p.slug) ?? 0) + 1);
}
for (const [slug, count] of slugCounts) {
  if (count > 1) warnings.push(`duplicate slug: ${slug} (${count}x)`);
}

if (warnings.length) {
  console.log(`\n⚠ Warnings:`);
  warnings.forEach((w) => console.log(`  - ${w}`));
}

// Serialize string as TS literal. Use template literal for multi-line.
function tsStr(s) {
  if (s == null) return '""';
  if (s.includes("\n") || s.length > 200) {
    // Template literal: escape backticks and ${
    return "`" + s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";
  }
  return JSON.stringify(s);
}

const serviceSlugList = [...services.keys()].sort();

const out = `// HVAC city × service landing pages (hub-and-spoke SEO).
// Auto-generated from tmp/hvac-cities.csv by tmp/build-cities.mjs.
// To regenerate: drop the latest Sheet export at tmp/hvac-cities.csv,
// run \`node tmp/build-cities.mjs\`, then delete tmp/.
//
// 6 services × 20 cities = ${pages.length} pages.

export const SERVICE_SLUGS = [
${serviceSlugList.map((s) => `  ${JSON.stringify(s)},`).join("\n")}
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export interface HvacCityPage {
  slug: string;
  service: ServiceSlug;
  serviceDisplay: string;
  city: string;
  state: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  blufBlock: string;
  bodyContent: string;
  faqJson: Array<{ q: string; a: string }>;
}

export const HVAC_CITY_PAGES: HvacCityPage[] = [
${pages
  .map(
    (p) => `  {
    slug: ${tsStr(p.slug)},
    service: ${tsStr(p.service)},
    serviceDisplay: ${tsStr(p.serviceDisplay)},
    city: ${tsStr(p.city)},
    state: ${tsStr(p.state)},
    h1: ${tsStr(p.h1)},
    metaTitle: ${tsStr(p.metaTitle)},
    metaDescription: ${tsStr(p.metaDescription)},
    blufBlock: ${tsStr(p.blufBlock)},
    bodyContent: ${tsStr(p.bodyContent)},
    faqJson: ${JSON.stringify(p.faqJson, null, 2)
      .split("\n")
      .map((line, i) => (i === 0 ? line : "    " + line))
      .join("\n")},
  },`
  )
  .join("\n")}
];

export function getCityPage(slug: string): HvacCityPage | null {
  return HVAC_CITY_PAGES.find((p) => p.slug === slug) ?? null;
}

export function getCityPagesByService(service: ServiceSlug): HvacCityPage[] {
  return HVAC_CITY_PAGES.filter((p) => p.service === service).sort((a, b) =>
    a.city.localeCompare(b.city),
  );
}

export function getSpokeLinks(currentSlug: string): {
  sameService: HvacCityPage[];
  sameCity: HvacCityPage[];
} {
  const current = getCityPage(currentSlug);
  if (!current) return { sameService: [], sameCity: [] };
  const sameService = HVAC_CITY_PAGES.filter(
    (p) => p.service === current.service && p.slug !== current.slug,
  ).slice(0, 3);
  const sameCity = HVAC_CITY_PAGES.filter(
    (p) => p.city === current.city && p.slug !== current.slug,
  ).slice(0, 3);
  return { sameService, sameCity };
}

export function getPagesGroupedByService(): Array<{
  service: ServiceSlug;
  serviceDisplay: string;
  pages: HvacCityPage[];
}> {
  const groups: Array<{
    service: ServiceSlug;
    serviceDisplay: string;
    pages: HvacCityPage[];
  }> = [];
  for (const p of HVAC_CITY_PAGES) {
    let g = groups.find((x) => x.service === p.service);
    if (!g) {
      g = { service: p.service, serviceDisplay: p.serviceDisplay, pages: [] };
      groups.push(g);
    }
    g.pages.push(p);
  }
  return groups
    .map((g) => ({
      service: g.service,
      serviceDisplay: g.serviceDisplay,
      pages: g.pages
        .slice()
        .sort((a, b) => a.city.localeCompare(b.city)),
    }))
    .sort((a, b) => a.serviceDisplay.localeCompare(b.serviceDisplay));
}
`;

fs.writeFileSync(OUT_PATH, out, "utf8");
console.log(`\nWrote ${OUT_PATH} (${out.length} chars, ${out.split("\n").length} lines)`);
