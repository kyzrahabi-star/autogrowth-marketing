// Build lib/hvac-service-comparison.ts from a CSV export of the HVAC service
// pillar + comparison pages Google Sheet. Run when the Sheet changes.
//
// Usage:
//   1. Export Sheet as CSV (File -> Download -> Comma Separated Values)
//   2. Drop it at tmp/hvac-service-comparison.csv (tmp/ is gitignored)
//   3. From repo root: node scripts/build-hvac-service-comparison.mjs
//   4. lib/hvac-service-comparison.ts is regenerated; commit + push
//
// Expected columns: type, slug, h1, meta_title, meta_description,
// bluf_block, body_content, faq_json, status.
// type is "service" (rendered at /hvac/[slug]) or "comparison"
// (rendered at /compare/[slug]).

import fs from "node:fs";

const CSV_PATH = "tmp/hvac-service-comparison.csv";
const OUT_PATH = "lib/hvac-service-comparison.ts";

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

const csv = fs.readFileSync(CSV_PATH, "utf8");
const rows = parseCSV(csv);
const header = rows[0];

const colIdx = (name) => {
  const i = header.indexOf(name);
  if (i === -1) throw new Error(`Missing column: ${name}`);
  return i;
};

const cols = {
  type: colIdx("type"),
  slug: colIdx("slug"),
  h1: colIdx("h1"),
  metaTitle: colIdx("meta_title"),
  metaDescription: colIdx("meta_description"),
  blufBlock: colIdx("bluf_block"),
  bodyContent: colIdx("body_content"),
  faqJson: colIdx("faq_json"),
  status: colIdx("status"),
};

const faqErrors = [];
const dataRows = rows
  .slice(1)
  .filter((r) => r.length > 1 && (r[cols.slug] || "").trim() !== "");

const pages = dataRows.map((r, idx) => {
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
      faqErrors.push({ row: idx + 2, slug: r[cols.slug], error: e.message });
    }
  }

  return {
    type: r[cols.type].trim(),
    slug: r[cols.slug].trim(),
    h1: r[cols.h1].trim(),
    metaTitle: r[cols.metaTitle].trim(),
    metaDescription: r[cols.metaDescription].trim(),
    blufBlock: r[cols.blufBlock].trim(),
    bodyContent: r[cols.bodyContent], // preserve newlines
    faqJson,
  };
});

const servicePages = pages.filter((p) => p.type === "service");
const comparisonPages = pages.filter((p) => p.type === "comparison");

console.log(`Parsed ${pages.length} pages`);
console.log(`  service:    ${servicePages.length}`);
console.log(`  comparison: ${comparisonPages.length}`);
if (faqErrors.length) {
  console.log(`\nFAQ parse errors (${faqErrors.length}):`);
  faqErrors.forEach((e) => console.log(`  row ${e.row} (${e.slug}): ${e.error}`));
}

// Validate
const warnings = [];
if (servicePages.length !== 10)
  warnings.push(`expected 10 service pages, got ${servicePages.length}`);
if (comparisonPages.length !== 10)
  warnings.push(`expected 10 comparison pages, got ${comparisonPages.length}`);
const unknownTypes = pages.filter(
  (p) => p.type !== "service" && p.type !== "comparison",
);
if (unknownTypes.length)
  warnings.push(`unknown type(s): ${unknownTypes.map((p) => `${p.slug}=${p.type}`).join(", ")}`);

// Duplicate slug check (slugs must be unique across both sets — they share
// no route, but a clash would be a content error worth surfacing).
const slugCounts = new Map();
for (const p of pages) slugCounts.set(p.slug, (slugCounts.get(p.slug) ?? 0) + 1);
for (const [slug, count] of slugCounts)
  if (count > 1) warnings.push(`duplicate slug: ${slug} (${count}x)`);

if (warnings.length) {
  console.log(`\n⚠ Warnings:`);
  warnings.forEach((w) => console.log(`  - ${w}`));
}

// Serialize string as TS literal. Use template literal for multi-line.
function tsStr(s) {
  if (s == null) return '""';
  if (s.includes("\n") || s.length > 200) {
    return (
      "`" +
      s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") +
      "`"
    );
  }
  return JSON.stringify(s);
}

function serializePage(p) {
  return `  {
    slug: ${tsStr(p.slug)},
    type: ${tsStr(p.type)},
    h1: ${tsStr(p.h1)},
    metaTitle: ${tsStr(p.metaTitle)},
    metaDescription: ${tsStr(p.metaDescription)},
    blufBlock: ${tsStr(p.blufBlock)},
    bodyContent: ${tsStr(p.bodyContent)},
    faqJson: ${JSON.stringify(p.faqJson, null, 2)
      .split("\n")
      .map((line, i) => (i === 0 ? line : "    " + line))
      .join("\n")},
  },`;
}

const out = `// HVAC service pillar + comparison landing pages.
// Auto-generated from tmp/hvac-service-comparison.csv by
// scripts/build-hvac-service-comparison.mjs. Do not edit by hand.
//
// ${servicePages.length} service pages (/hvac/[slug]) +
// ${comparisonPages.length} comparison pages (/compare/[slug]).

export type ContentPageType = "service" | "comparison";

export interface ServiceComparisonPage {
  slug: string;
  type: ContentPageType;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  blufBlock: string;
  bodyContent: string;
  faqJson: Array<{ q: string; a: string }>;
}

export const SERVICE_PAGES: ServiceComparisonPage[] = [
${servicePages.map(serializePage).join("\n")}
];

export const COMPARISON_PAGES: ServiceComparisonPage[] = [
${comparisonPages.map(serializePage).join("\n")}
];

export function getServicePage(slug: string): ServiceComparisonPage | null {
  return SERVICE_PAGES.find((p) => p.slug === slug) ?? null;
}

export function getComparisonPage(slug: string): ServiceComparisonPage | null {
  return COMPARISON_PAGES.find((p) => p.slug === slug) ?? null;
}
`;

fs.writeFileSync(OUT_PATH, out, "utf8");
console.log(`\nWrote ${OUT_PATH} (${out.length} chars, ${out.split("\n").length} lines)`);
