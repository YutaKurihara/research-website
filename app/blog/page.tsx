import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Blog" };

const posts = [
  {
    slug: "global-flood-mapping-sar",
    title: "10年分のSARデータで世界の洪水を地図化する — 深層学習による全球洪水データセット",
    date: "2025-04-13",
    description:
      "Microsoft AI for Good Labが10年分のSentinel-1 SARアーカイブに深層学習を適用し、既存データセットより71%多い洪水域を検出した全球洪水データセットを構築。Nature Communications掲載。",
  },
  {
    slug: "flood-risk-central-asia",
    title: "中央アジアにおける大規模洪水リスク評価 — データ不足地域への適用",
    date: "2025-04-12",
    description:
      "中央アジア5カ国を対象とした初の広域確率論的洪水リスク評価。グローバルデータとローカルデータの統合、10,000年合成洪水カタログ、気候変動影響の地域差を解説。",
  },
  {
    slug: "sar-flood-mapping",
    title: "SAR衛星画像による洪水範囲の抽出手法",
    date: "2025-04-12",
    description:
      "Sentinel-1 SAR画像とNDFI（正規化差分洪水指数）を用いた洪水範囲の自動検出手法を、Cian et al. (2018) の論文をもとに解説。",
  },
  {
    slug: "fwdet",
    title: "FwDET — 衛星画像から浸水深を推定するツールの解説",
    date: "2025-04-12",
    description:
      "浸水範囲マップとDEMから浸水深を推定するFwDET（Floodwater Depth Estimation Tool）のアルゴリズム・検証結果・限界を、原著論文をもとに整理。",
  },
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
