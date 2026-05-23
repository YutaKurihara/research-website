import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Blog" };

const posts = [
  {
    slug: "sar-flood-assimilation",
    title: "SAR浸水マップの準リアルタイム同化による洪水予測の改善",
    date: "2026-05-23",
    description:
      "SAR浸水確率マップをパーティクルフィルタで水文・水理モデルに逐次同化するフレームワーク。セヴァーン川4イベントで予測誤差を最大50%削減、改善は24〜48時間持続。局所重みの数式と同化ワークフローを詳解。WRR掲載。",
  },
  {
    slug: "culvert-blockage-flood-modeling",
    title: "カルバート閉塞が洪水動態に与える影響 — 2D水理モデルによる定量評価とインフラ優先度の特定",
    date: "2026-05-23",
    description:
      "TELEMAC-2Dにカルバート閉塞の動的モジュールを実装し、閉塞率・トリガー水位・再現期間の組合せシナリオで局所浸水への影響を定量評価。重要カルバートの特定手法と緩和策の効果を検証。NHESS掲載。",
  },
  {
    slug: "flexth-flood-depth-estimation",
    title: "FLEXTH — 衛星浸水マップから浸水深を推定し、欠測域を補完するフレームワーク",
    date: "2026-05-23",
    description:
      "衛星SAR浸水マップとDTMから浸水深を推定し、都市部・植生下の欠測域に浸水を伝播させるFLEXTHフレームワーク。2022年パキスタン洪水（243万km²）を1.5時間で処理。FwDETより高精度・高速。NHESS掲載。",
  },
  {
    slug: "sar-hydraulic-model-integration",
    title: "SAR衛星×水理モデル — リモートセンシングで洪水予測を高精度化するアプローチの体系的整理",
    date: "2026-04-20",
    description:
      "SAR画像から抽出した浸水範囲・水位を水理モデルのキャリブレーション・データ同化に活用する手法を体系的にレビュー。GEEで実行可能な処理とLISFLOOD-FP等の外部モデルとの統合ワークフローも整理。",
  },
  {
    slug: "compound-flooding",
    title: "複合災害としての洪水 — 複数ハザードの同時発生リスクをどう評価するか",
    date: "2026-04-17",
    description:
      "高潮+河川洪水、連続台風、土壌飽和+豪雨など複合イベントの4類型を定義し、Copulaや大規模アンサンブルによる評価手法と気候変動下でのリスク変化を体系的にレビュー。Nature Reviews掲載。",
  },
  {
    slug: "deep-learning-flood-mapping",
    title: "深層学習による洪水マッピング手法の体系的レビュー",
    date: "2026-04-17",
    description:
      "感受性マッピング・急速浸水モデリング・衛星画像抽出の3フェーズにわたる187本のDL論文を分析。U-Netの標準化、ベンチマーク不在、汎化性能未検証など構造的課題を指摘。HESS掲載。",
  },
  {
    slug: "s2s-disaster-preparedness",
    title: "S2S予測の防災活用 — サブシーズナル予測はどこまで意思決定に使えるか",
    date: "2026-04-16",
    description:
      "S2Sプロジェクトのマルチモデルデータベースを核に、Forecast-based FinancingやAnticipatory Actionなど防災分野での確率的予測の活用事例を体系的にレビュー。BAMS掲載。",
  },
  {
    slug: "extreme-precipitation-climate-change",
    title: "気候変動と極端降水の増大 — 水資源量が多い地域ほどリスクが高まる",
    date: "2026-04-16",
    description:
      "CMIP5全球解析から、年間降水量が多い湿潤地域ほど極端降水と洪水流量の気候変動による増加率が大きいことを定量的に示した研究。Scientific Reports掲載。",
  },
  {
    slug: "global-flood-mapping-sar",
    title: "10年分のSARデータで世界の洪水を地図化する — 深層学習による全球洪水データセット",
    date: "2026-04-13",
    description:
      "Microsoft AI for Good Labが10年分のSentinel-1 SARアーカイブに深層学習を適用し、既存データセットより71%多い洪水域を検出した全球洪水データセットを構築。Nature Communications掲載。",
  },
  {
    slug: "flood-risk-central-asia",
    title: "中央アジアにおける大規模洪水リスク評価 — データ不足地域への適用",
    date: "2026-04-12",
    description:
      "中央アジア5カ国を対象とした初の広域確率論的洪水リスク評価。グローバルデータとローカルデータの統合、10,000年合成洪水カタログ、気候変動影響の地域差を解説。",
  },
  {
    slug: "sar-flood-mapping",
    title: "SAR衛星画像による洪水範囲の抽出手法",
    date: "2026-04-12",
    description:
      "Sentinel-1 SAR画像とNDFI（正規化差分洪水指数）を用いた洪水範囲の自動検出手法を、Cian et al. (2018) の論文をもとに解説。",
  },
  {
    slug: "fwdet",
    title: "FwDET — 衛星画像から浸水深を推定するツールの解説",
    date: "2026-04-12",
    description:
      "浸水範囲マップとDEMから浸水深を推定するFwDET（Floodwater Depth Estimation Tool）のアルゴリズム・検証結果・限界を、原著論文をもとに整理。",
  },
  {
    slug: "flood-direct-damage",
    title: "衛星画像を用いた洪水直接被害評価手法の解説",
    date: "2026-02-01",
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
