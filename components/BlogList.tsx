"use client";

import { useState } from "react";
import Link from "next/link";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  keywords: string[];
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  const allKeywords = Array.from(
    new Set(posts.flatMap((p) => p.keywords))
  ).sort();

  const filtered = selected
    ? posts.filter((p) => p.keywords.includes(selected))
    : posts;

  return (
    <>
      <div className="flex flex-wrap gap-2 pb-6">
        <button
          onClick={() => setSelected(null)}
          className={`rounded-full border px-3 py-1 text-[11px] transition-colors ${
            selected === null
              ? "border-highlight bg-highlight/10 text-highlight"
              : "border-border text-muted hover:border-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        {allKeywords.map((kw) => (
          <button
            key={kw}
            onClick={() => setSelected(selected === kw ? null : kw)}
            className={`rounded-full border px-3 py-1 text-[11px] transition-colors ${
              selected === kw
                ? "border-highlight bg-highlight/10 text-highlight"
                : "border-border text-muted hover:border-foreground hover:text-foreground"
            }`}
          >
            {kw}
          </button>
        ))}
      </div>

      <hr className="border-border" />

      {filtered.map((post) => (
        <section key={post.slug} className="py-8">
          <Link href={`/blog/${post.slug}`} className="group block">
            <span className="text-[10px] uppercase tracking-widest text-muted">
              {post.date}
            </span>
            <p className="mt-1 text-sm font-medium leading-snug transition-colors group-hover:text-highlight">
              {post.title}
            </p>
            <p className="mt-2 text-xs text-muted">{post.description}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted"
                >
                  {kw}
                </span>
              ))}
            </div>
          </Link>
          <hr className="mt-8 border-border" />
        </section>
      ))}

      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-muted">
          該当する記事がありません
        </p>
      )}
    </>
  );
}
