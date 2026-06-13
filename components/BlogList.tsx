"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export interface BlogPost {
  slug: string;
  title: string;
  titleEn?: string;
  date: string;
  description: string;
  descriptionEn?: string;
  keywords: string[];
  keywordsEn?: string[];
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const { locale } = useLocale();
  const isEn = locale === "en";

  const keywordCounts = new Map<string, number>();
  for (const p of posts) {
    const kws = isEn && p.keywordsEn ? p.keywordsEn : p.keywords;
    for (const kw of kws) {
      keywordCounts.set(kw, (keywordCounts.get(kw) || 0) + 1);
    }
  }
  const allKeywords = Array.from(keywordCounts.keys()).sort();

  const filtered = selected
    ? posts.filter((p) => {
        const kws = isEn && p.keywordsEn ? p.keywordsEn : p.keywords;
        return kws.includes(selected);
      })
    : posts;

  return (
    <div className="relative flex justify-center gap-10">
      <div className="w-full max-w-2xl">
        <hr className="border-border" />
        {filtered.map((post) => {
          const title = isEn && post.titleEn ? post.titleEn : post.title;
          const desc = isEn && post.descriptionEn ? post.descriptionEn : post.description;
          const kws = isEn && post.keywordsEn ? post.keywordsEn : post.keywords;
          return (
            <section key={post.slug} className="py-8">
              <Link href={`/blog/${post.slug}`} className="group block">
                <span className="text-[10px] uppercase tracking-widest text-muted">
                  {post.date}
                </span>
                <p className="mt-1 text-sm font-medium leading-snug transition-colors group-hover:text-highlight">
                  {title}
                </p>
                <p className="mt-2 text-xs text-muted">{desc}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {kws.map((kw) => (
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
          );
        })}
        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-muted">
            {isEn ? "No matching articles found" : "該当する記事がありません"}
          </p>
        )}
      </div>

      <aside className="hidden shrink-0 lg:block lg:w-40">
        <div className="sticky top-20">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Keywords
          </p>
          <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-1">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setSelected(null)}
                className={`rounded px-2 py-1 text-left text-[11px] transition-colors ${
                  selected === null
                    ? "bg-highlight/10 font-medium text-highlight"
                    : "text-muted hover:text-foreground"
                }`}
              >
                All ({posts.length})
              </button>
              {allKeywords.map((kw) => (
                <button
                  key={kw}
                  onClick={() => setSelected(selected === kw ? null : kw)}
                  className={`rounded px-2 py-1 text-left text-[11px] transition-colors ${
                    selected === kw
                      ? "bg-highlight/10 font-medium text-highlight"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {kw}
                  <span className="ml-1 text-[10px] opacity-50">
                    {keywordCounts.get(kw)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
