import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: { slug: string };
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    excerpt: (data.excerpt as string) ?? "",
    author: (data.author as string) ?? "AutoGrowth AI",
    content,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AutoGrowth AI",
      url: "https://www.autogrowthai.co",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.autogrowthai.co/blog/${params.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-white py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8 inline-block"
          >
            ← Back to blog
          </Link>

          <div className="mb-8">
            <p className="text-xs text-gray-400 mb-3">
              {post.date} · By {post.author}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>

          <div className="mdx-content text-gray-700 leading-relaxed space-y-4">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </div>
    </>
  );
}
