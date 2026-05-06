import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Blog — AutoGrowth AI",
  description:
    "Tactics, data, and real examples for trades businesses trying to get found by AI search.",
};

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

function getPosts(): PostMeta[] {
  const blogDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: (data.title as string) ?? slug,
        date: (data.date as string) ?? "",
        excerpt: (data.excerpt as string) ?? "",
        author: (data.author as string) ?? "AutoGrowth AI",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            The AutoGrowth Blog
          </h1>
          <p className="text-zinc-400 text-lg">
            Tactics, data, and real examples — no theory.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-zinc-500">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-colors"
              >
                <p className="text-xs text-zinc-500 mb-3">{post.date}</p>
                <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="text-sm text-blue-400 group-hover:text-blue-300">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
