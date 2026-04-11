export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "conference" | "working";
  abstract: string;
  keywords: string[];
  details: string;
}

export const profile = {
  name: "Kurihara",
  affiliation: "GRIPS",
  tagline: "Disaster Risk Reduction / Probabilistic Forecasting",
  links: {
    github: "https://github.com/YutaKurihara",
    orcid: "https://orcid.org/0009-0001-8899-3400",
    note: "https://note.com/hemingway_",
  },
};

export const publications: Publication[] = [
  {
    id: "bma-rainfall-forecast",
    title:
      "Multi-Model Bayesian Model Averaging for Sub-Seasonal Probabilistic Rainfall Forecasting: Day-Specific Uncertainty from Individual Ensemble Members Applied to Typhoon Early Warning in the Cagayan River Basin, Philippines",
    authors: "Kurihara et al.",
    venue: "In preparation",
    year: 2026,
    type: "working",
    abstract:
      "3機関（ECMWF, NCEP, UKMO）のS2Sアンサンブル予報の個別メンバーを入力として、Bayesian Model Averaging (BMA) により日別・7日積算の確率的降水予測分布を生成するフレームワークを開発した。従来のアンサンブル平均ベースの手法と異なり、各日ごとにアンサンブルメンバーの一致度が予測不確実性の幅に直接反映される。フィリピン・カガヤン川流域を対象に、2016-2025年の10年間のリアルタイム予報で訓練・検証し、台風Ulysses (2020) と Ragasa (2025) の2事例で評価した。",
    keywords: [
      "BMA",
      "S2S",
      "Ensemble Forecasting",
      "Typhoon",
      "Zero-Inflated Gamma",
      "Philippines",
    ],
    details: `## 背景

フィリピン・カガヤン川流域（北ルソン、約27,000 km²）は台風シーズンに深刻な洪水リスクを抱えており、1〜2週間先の確率的降水予測が防災意思決定（anticipatory action）に不可欠である。

## 手法

### Bayesian Model Averaging (BMA)

各lead day d、各issue date t に対して、観測値の予測分布を以下のように定式化：

- C = 3機関 (ECMWF: 51メンバー, NCEP: 16メンバー, UKMO: 4メンバー)
- 各メンバーの予報値を直接入力（アンサンブル平均は使用しない）
- ゼロ膨張ガンマ分布をカーネルとして採用
- MAP推定（L-BFGS-B）によりパラメータを最適化

### 不確実性表現の特徴

- メンバーが一致 → カーネルが重なる → 狭い信頼区間
- メンバーが発散 → カーネルが散らばる → 広い信頼区間
- BMAの構造から自然に発生し、追加パラメータ不要

## データ

- 観測: GSMaP-Gauge corrected衛星降水量 (0.1°)
- 予報: S2Sデータベース (2016-2025, リアルタイム)
- 検証: Leave-One-Out Cross-Validation

## ケーススタディ

- **Typhoon Ulysses** (Vamco, 2020年11月) — 7日積算ピーク: 194.9 mm
- **Typhoon Ragasa** (Butchoy, 2025年7月) — 7日積算ピーク: 179.0 mm`,
  },
  {
    id: "flood-direct-damage",
    title:
      "Flood Direct Damage Assessment due to Typhoon Ulysses by Satellite Images",
    authors: "Kurihara et al.",
    venue: "International Journal of Disaster Risk Reduction",
    year: 2024,
    type: "journal",
    abstract:
      "台風Ulysses（Vamco、2020年）によるカガヤン川流域の洪水直接被害を、衛星リモートセンシングとGISを用いて評価。浸水マッピングと土地利用分類・建物インベントリデータを組み合わせた被害推定手法を開発した。",
    keywords: [
      "Flood Damage",
      "Satellite Imagery",
      "GIS",
      "Remote Sensing",
      "Typhoon Ulysses",
    ],
    details: `## 概要

台風Ulysses（国際名Vamco）は2020年11月にフィリピン北ルソンのカガヤン川流域に甚大な洪水被害をもたらした。本研究では、衛星画像から浸水範囲を抽出し、土地利用分類と建物データを組み合わせて直接被害額を推定する手法を開発した。

## 手法

- 衛星画像（Sentinel-1 SAR等）による浸水域マッピング
- QGISを用いた土地利用分類と被害対象の特定
- 建物インベントリとの空間結合による被害推定
- 被害関数（depth-damage function）の適用

## 対象地域

カガヤン川流域（北ルソン、約27,000 km²）。Magat Damの下流域を中心に分析。`,
  },
  {
    id: "future-land-use",
    title: "Future Land Use Change Modeling in the Cagayan River Basin",
    authors: "Kurihara et al.",
    venue: "Working Paper",
    year: 2024,
    type: "working",
    abstract:
      "カガヤン川流域における将来の土地利用変化シナリオをLand Change Modeler（LCM）を用いてモデリングし、都市化と土地被覆の変化が洪水脆弱性に与える影響を評価した。",
    keywords: [
      "Land Use Change",
      "LCM",
      "Urbanization",
      "Flood Vulnerability",
    ],
    details: `## 概要

カガヤン川流域では急速な都市化が進行しており、土地利用変化が洪水リスクに影響を与えている。本研究では、Land Change Modeler（LCM）を用いて過去の土地利用変化トレンドを分析し、将来の複数シナリオ下での土地利用を予測した。

## 手法

- 衛星画像の時系列解析による土地利用変化の把握
- Land Change Modeler（LCM）による遷移確率の推定
- 異なる開発シナリオ（BAU、持続可能開発等）下の予測
- 洪水脆弱性指標との関連分析`,
  },
  {
    id: "rri-flood-model",
    title:
      "Rainfall-Runoff-Inundation (RRI) Flood Modeling for the Cagayan River Basin",
    authors: "Kurihara et al.",
    venue: "Working Paper",
    year: 2024,
    type: "working",
    abstract:
      "降雨流出氾濫（RRI）モデルをカガヤン川流域の洪水シミュレーションに適用。過去の台風イベントについて、観測河川流量と衛星由来の浸水範囲データを用いてモデルの較正・検証を実施した。",
    keywords: ["RRI Model", "Flood Simulation", "Hydrological Modeling"],
    details: `## 概要

カガヤン川流域の洪水予測精度を向上させるため、降雨流出氾濫（RRI）モデルを構築した。RRIモデルは降雨から河川流出、氾濫までを一体的にシミュレーションするモデルである。

## 手法

- RRIモデルの流域への適用とパラメータ設定
- GSMaP降水データの入力
- 観測河川流量データを用いた較正
- 衛星由来の浸水範囲データによる検証
- 複数の台風イベントでの再現性評価`,
  },
  {
    id: "climate-change-impact",
    title: "Climate Change Impact on Flood Risk in the Cagayan River Basin",
    authors: "Kurihara et al.",
    venue: "Working Paper",
    year: 2024,
    type: "working",
    abstract:
      "ダウンスケールされた気候予測を用いて、カガヤン川流域の洪水リスクに対する気候変動の影響を評価。将来気候シナリオ下での極端降雨パターンの変化と洪水頻度・規模への影響を分析した。",
    keywords: [
      "Climate Change",
      "Flood Risk",
      "Extreme Rainfall",
      "Downscaling",
    ],
    details: `## 概要

気候変動は極端降雨の頻度と強度を変化させ、洪水リスクに直接影響する。本研究では、GCMのダウンスケーリング結果を用いて、カガヤン川流域における将来の洪水リスクの変化を評価した。

## 手法

- CMIP6気候モデル出力のダウンスケーリング
- 極端降雨指標の将来変化分析
- RRIモデルとの連携による洪水シミュレーション
- 現在と将来の洪水リスク比較`,
  },
  {
    id: "bayesian-estimation",
    title: "Bayesian Probabilistic Rainfall Distribution Estimation",
    authors: "Kurihara et al.",
    venue: "Working Paper",
    year: 2024,
    type: "working",
    abstract:
      "ガンマ分布やゼロ膨張分布を含む確率的降水分布フィッティングのためのベイズ推定手法を開発。有効サンプルサイズ補正やアンサンブル予報の後処理のための各種較正手法を検討した。",
    keywords: [
      "Bayesian Estimation",
      "Gamma Distribution",
      "Calibration",
      "Post-Processing",
    ],
    details: `## 概要

アンサンブル予報の確率的後処理において、降水量の統計的分布をどのようにフィッティングするかは重要な課題である。本研究では、ベイズ推定のフレームワークを用いて、ガンマ分布およびゼロ膨張分布のパラメータ推定手法を開発した。

## 手法

- ガンマ分布・ゼロ膨張ガンマ分布のベイズ推定
- 有効サンプルサイズ（ESS）補正の検討
- Grid searchとMAP推定の比較
- OLS・QMとの比較評価`,
  },
  {
    id: "macro-economics",
    title: "Macroeconomic Impact Assessment of Flood Disasters in the Philippines",
    authors: "Kurihara et al.",
    venue: "Working Paper",
    year: 2023,
    type: "working",
    abstract:
      "自然災害のマクロ経済的影響を分析。フィリピンにおける大規模洪水後のGDP損失推定と経済回復軌道に焦点を当てた。",
    keywords: [
      "Macroeconomics",
      "Disaster Impact",
      "GDP Loss",
      "Economic Recovery",
    ],
    details: `## 概要

自然災害は直接的な物的被害だけでなく、マクロ経済全体に波及的な影響を与える。本研究では、フィリピンにおける大規模洪水イベント後の経済影響を定量的に分析した。

## 手法

- 災害前後のGDP成長率の比較分析
- 産業別の被害・回復パターンの分析
- 災害の経済的影響の持続期間の推定`,
  },
];
