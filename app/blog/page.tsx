import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips and insights for local service businesses on AI search visibility, Google reviews, call capture, and growing revenue with automation.",
  openGraph: {
    title: "Blog — AutoGrowth AI",
    description:
      "Tips and insights for local service businesses on AI search visibility, Google reviews, call capture, and growing revenue with automation.",
  },
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
    <div className="min-h-screen bg-white py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            The AutoGrowth AI Blog
          </h1>
          <p className="text-gray-600 text-lg">
            Tactics, data, and real examples — no theory.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden p-8"
              >
                <p className="text-xs text-gray-400 mb-3">{post.date}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="text-sm text-emerald-600 group-hover:text-emerald-700 font-medium">
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
