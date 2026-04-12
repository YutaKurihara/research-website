import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Blog" };

const posts = [
  {
    slug: "flood-direct-damage",
    title: "衛星画像を用いた洪水直接被害評価手法の解説",
    date: "2025-02-01",
    description:
      "Google Earth EngineとSentinel-1 SAR衛星画像を用いて、台風Ulyssesによるフィリピン・カガヤン川流域の洪水被害を迅速に評価した研究の詳細解説。",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <section className="pb-8 pt-20">
        <h1 className="text-4xl font-light tracking-tight">Blog</h1>
      </section>

      <hr className="border-border" />

      {posts.map((post) => (
        <section key={post.slug} className="py-8">
          <Link href={`/blog/${post.slug}`} className="group block">
            <span className="text-[10px] uppercase tracking-widest text-muted">
              {post.date}
            </span>
            <p className="mt-1 text-sm font-medium leading-snug transition-colors group-hover:text-highlight">
              {post.title}
            </p>
            <p className="mt-2 text-xs text-muted">{post.description}</p>
          </Link>
          <hr className="mt-8 border-border" />
        </section>
      ))}
    </div>
  );
}
