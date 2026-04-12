export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "preprint";
  doi: string;
  abstract: string;
  keywords: string[];
  details: string;
}

export const profile = {
  name: "Kurihara Yuta",
  nameJa: "栗原 悠太",
  affiliation: "Oriental Consultants Global",
  tagline: "Ph.D. Disaster Management Program, GRIPS / ICHARM",
  links: {
    github: "https://github.com/YutaKurihara",
    orcid: "https://orcid.org/0009-0001-8899-3400",
    note: "https://note.com/hemingway_",
  },
};

export const publications: Publication[] = [
  {
    id: "bayesian-climate-change",
    title:
      "Quantifying Uncertainty in Future Climate Change Impacts in the Cagayan River Basin Using a Bayesian Approach",
    authors: "Kurihara, Y. et al.",
    venue: "SSRN (Preprint)",
    year: 2026,
    type: "preprint",
    doi: "10.2139/ssrn.6312935",
    abstract:
      "カガヤン川流域における将来の気候変動影響の不確実性を、ベイズアプローチを用いて定量化した研究。気候モデルの不確実性を確率的に評価し、洪水リスクへの影響を分析する。",
    keywords: [
      "Climate Change",
      "Bayesian Approach",
      "Uncertainty Quantification",
      "Cagayan River Basin",
      "Flood Risk",
    ],
    details: `## 概要

気候変動が洪水リスクに与える影響には大きな不確実性が伴う。本研究では、ベイズアプローチを用いてその不確実性を定量化し、フィリピン・カガヤン川流域における将来の気候変動影響を確率的に評価するフレームワークを提案した。

## 手法

- 複数のGCM出力を用いた気候予測の不確実性分析
- ベイズ統計による確率的影響評価
- カガヤン川流域への適用と洪水リスクの将来変化推定`,
  },
  {
    id: "flood-direct-damage",
    title:
      "Flood Direct Damage Assessment due to Typhoon Ulysses by Satellite Images",
    authors: "Kurihara, Y., Miyamoto, M., Sunakawa, R.",
    venue: "International Journal of Disaster Risk Reduction",
    year: 2025,
    type: "journal",
    doi: "10.1016/j.ijdrr.2024.105067",
    abstract:
      "災害後の復興予算の配分は大きな課題です。一部の自治体に過剰な資金が配分される一方、不足する自治体もあり、復興の遅れにつながります。本研究では、Google Earth Engine（GEE）とSentinel-1衛星画像を用いて、洪水による直接被害を迅速に評価する手法を開発しました。2020年にフィリピンを襲った台風Ulyssesによるカガヤン・バレー地域の被害評価に適用し、従来1か月以上かかっていた現地調査を、衛星観測からわずか2日で代替できることを示しました。",
    keywords: [
      "Remote Sensing",
      "Google Earth Engine",
      "Random Forest",
      "SAR",
      "Flood Damage",
      "Build Back Better",
    ],
    details: `## 概要

Google Earth Engine（GEE）とSentinel-1 SAR衛星画像を用いて、洪水による直接被害を迅速に評価する手法を開発。フィリピン・カガヤン川流域（Region II）を対象に、台風Ulysses（2020年）の被害評価に適用した。

## 手法

- Sentinel-1 SAR画像とNDFIによる浸水域の自動検出（解像度10m）
- FwDET-GEEによるDEMベースの浸水深推定
- Random Forest（500決定木）によるLULC分類（精度93%）
- 被害曲線（GMMA-RAP, Shrestha, Tariq）による住宅・農作物の被害額算定

## 主な結果

- 浸水面積: 2,033 km²（地域の約8%）
- 衛星解析は災害後2日で結果取得可能（従来の現地調査は1か月以上）`,
  },
  {
    id: "river-morphology-monitoring",
    title:
      "Monitoring Method of River Morphology Around River Structure Using Estimated Elevation with Satellite Images and Observed River Water Level",
    authors: "Kurihara, Y. et al.",
    venue: "Japanese Journal of JSCE",
    year: 2024,
    type: "journal",
    doi: "10.2208/jscejj.23-16067",
    abstract:
      "衛星画像から推定した標高と観測河川水位を用いて、河川構造物周辺の河川地形をモニタリングする手法を開発した。",
    keywords: [
      "River Morphology",
      "Satellite Images",
      "River Structure",
      "Water Level",
      "Monitoring",
    ],
    details: `## 概要

河川構造物周辺の河川地形変化は、治水上の重要な管理対象である。本研究では、衛星画像から推定した標高データと観測河川水位を組み合わせることで、河川地形の変化を効率的にモニタリングする手法を提案した。

## 手法

- 衛星画像からの標高推定
- 観測河川水位データとの統合
- 河川構造物周辺の地形変化検出
- 時系列モニタリング手法の構築`,
  },
];
