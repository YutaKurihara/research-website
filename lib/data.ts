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
    details: `## この研究が解決する課題

災害が発生すると、政府や国際機関は被害状況を把握し、復興予算を各自治体に配分する必要があります。しかし、従来の被害調査（PDNA/DaLA）は現地でのインタビューに基づくため、**完了まで6週間〜3か月**かかります。この遅れが復興の開始を遅らせ、予算配分の不均衡を生みます。

本研究では、**衛星画像とクラウド処理を組み合わせることで、災害発生からわずか2日で広域の被害額を推定**できる手法を提案しました。

## 対象地域と災害

フィリピン北部ルソン島の**カガヤン・バレー地域**（Region II）が対象です。カガヤン川はフィリピン最長（505km）・最大流域面積（25,649 km²）の河川で、モンスーン期に頻繁に洪水が発生します。

**台風Ulysses**（国際名Vamco）は2020年11月にこの地域を襲い、農業被害73億ペソ、インフラ被害129億ペソという甚大な被害をもたらしました。

## 手法の全体像

本手法は大きく**2つのステップ**で構成されます。

### Step 1: 浸水マップの作成

**浸水範囲の検出**にはSentinel-1衛星のSAR（合成開口レーダー）画像を使用します。SARは雲を透過して地表を観測できるため、台風通過後の曇天でも浸水域を検出できます。

- 洪水前（2020年10月8日）と洪水後（11月13日）の2枚の画像を比較
- NDFI（正規化差分洪水指数）で浸水域を自動判定
- 解像度10mの浸水マップを生成

**浸水深の推定**にはFwDET-GEE（Floodwater Depth Estimation Tool）を使用。浸水域の端を水深0mの基準とし、DEMデータから各セルの浸水深を計算します。

結果：浸水面積は**2,033 km²**（地域全体の約8%）。43%が水深0.5m以上で、作物やインフラに重大な被害をもたらすレベルでした。

### Step 2: 被害額の算定

被害額は「**浸水深 × 被害曲線 × 単価**」で計算します。

**土地利用マップの作成**

フィリピンには高解像度の農作物マップが存在しないため、**Random Forest（機械学習）**でオリジナルの土地利用マップを作成しました。

- Sentinel-1（SAR）とLandsat-8（光学）の衛星データを入力
- NDVI、NDWI等の植生・水域指標を算出
- Google Street Viewで収集した教師データ（各カテゴリ80サンプル）で学習
- 6分類（水田・トウモロコシ畑・森林・裸地・都市・水域）
- **精度93%**、カッパ係数0.92

**被害対象と被害曲線**

| 対象 | データソース | 被害曲線 |
|------|------------|---------|
| 住宅 | Open Buildings V3 | GMMA-RAP (2014) シグモイド関数 |
| 水田 | 作成したLULCマップ | Shrestha et al. (2016) |
| トウモロコシ | 作成したLULCマップ | Tariq et al. (2021) |
| 道路 | DPWH + OpenStreetMap | 現地報告から独自に作成 |
| 病院・学校 | OpenStreetMap | 現地報告から独自に作成 |

## 主な結果

被害推定の結果：

- **住宅**: 26.9億ペソ
- **水田**: 8.4億ペソ
- **トウモロコシ**: 11.6億ペソ
- **道路**: 16.0億ペソ
- **病院・学校**: 7.5億ペソ

最も被害が大きかったのはAlcala（7.25億ペソ）、次いでIlagan市（5.39億ペソ）、Tuguegarao市（5.33億ペソ）でした。

## 従来手法との比較

現地調査（SitRep）の結果と比較した結果：

- **水田**：衛星解析844百万ペソ vs 現地報告981百万ペソ（妥当な範囲）
- **病院**：衛星解析21.7百万ペソ vs 現地報告26.2百万ペソ（良好な一致）
- **トウモロコシ**：過大評価の傾向（被害曲線の精度向上が課題）
- **Quirino州の道路**：過小評価（山岳地帯の土砂災害が含まれないため）

## この手法の最大の利点

| | 従来手法（PDNA/DaLA） | 本手法 |
|---|---|---|
| 所要時間 | 6週間〜3か月 | **2日** |
| カバー範囲 | インタビュー対象のみ | **地域全体** |
| 必要スキル | 多セクターの専門家 | GEEの基本操作 |
| コスト | 高い（人件費・移動費） | **低い（クラウド処理）** |

衛星画像を選択するだけで広域の被害額を推定でき、**政府の予算配分の意思決定を1か月以上前倒し**できます。

## 今後の課題

- トウモロコシの被害曲線の精度向上
- 山岳地帯の土砂災害被害の統合
- 他の災害イベントへの適用と検証`,
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
