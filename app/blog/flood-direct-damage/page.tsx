import type { Metadata } from "next";
import Link from "next/link";
import FloodDirectDamageContent from "@/lib/flood-direct-damage-content";

export const metadata: Metadata = {
  title: "衛星画像を用いた洪水直接被害評価手法の解説",
};

export default function FloodDamageBlogPost() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <section className="pb-8 pt-20">
        <Link
          href="/blog"
          className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          &larr; Blog
        </Link>

        <div className="mt-8">
          <span className="text-[10px] uppercase tracking-widest text-muted">
            2025-02-01
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            衛星画像を用いた洪水直接被害評価手法の解説
          </h1>
          <p className="mt-3 text-xs text-muted">
            Kurihara, Y., Miyamoto, M., Sunakawa, R. &middot;
            International Journal of Disaster Risk Reduction
          </p>
          <a href="https://doi.org/10.1016/j.ijdrr.2024.105067" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.1016/j.ijdrr.2024.105067
          </a>
        </div>
      </section>

      <hr className="border-border" />

      <section className="py-8">
        <FloodDirectDamageContent />
      </section>
    </div>
  );
}
