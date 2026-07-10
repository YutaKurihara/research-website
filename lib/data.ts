export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "preprint";
  doi: string;
  abstract: string;
  abstractEn?: string;
  keywords: string[];
  details: string;
  detailsEn?: string;
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
    id: "climate-landuse-flood-exposure",
    title:
      "Climate and Land-Use Drivers of Future Flood Exposure and Damage in the Cagayan River Basin, Philippines",
    authors: "Kurihara, Y., Miyamoto, M., Kyuzaki, R.",
    venue: "Journal of Hydrology: Regional Studies",
    year: 2026,
    type: "journal",
    doi: "10.1016/j.ejrh.2026.103690",
    abstract:
      "フィリピン・カガヤン川流域における将来の洪水曝露と被害を、気候変動と土地利用変化の2つの駆動要因から分析した研究。気候シナリオと土地利用シナリオを組み合わせ、将来の洪水リスクの変化を定量的に評価する。",
    abstractEn:
      "Analyzes future flood exposure and damage in the Cagayan River Basin, Philippines, driven by climate change and land-use change. Combines climate and land-use scenarios to quantitatively assess future flood risk changes.",
    keywords: [
      "Climate Change",
      "Land Use Change",
      "Flood Exposure",
      "Cagayan River Basin",
      "Damage Assessment",
    ],
    details: `## 概要

フィリピン・カガヤン川流域を対象に、気候変動と土地利用変化が将来の洪水曝露と被害に与える影響を定量的に分析した研究。複数の気候シナリオと土地利用シナリオを組み合わせ、洪水リスクの将来変化を評価するフレームワークを構築した。

## 手法

- 複数の気候シナリオに基づく将来降雨の予測
- 土地利用変化シナリオの構築と洪水モデルへの反映
- 洪水曝露（人口・建物・農地）の将来変化推定
- 被害関数を用いた洪水直接被害の将来予測`,
    detailsEn: `## Overview

Quantitatively analyzes the impacts of climate change and land-use change on future flood exposure and damage in the Cagayan River Basin, Philippines. Constructs a framework combining multiple climate and land-use scenarios to assess future changes in flood risk.

## Methods

- Future rainfall projections based on multiple climate scenarios
- Land-use change scenario development and integration into flood models
- Estimation of future changes in flood exposure (population, buildings, agricultural areas)
- Future flood direct damage projection using depth-damage functions`,
  },
  {
    id: "bayesian-climate-change",
    title:
      "Quantifying Uncertainty in Climate Change Impacts: A Bayesian Approach for the Cagayan River Basin",
    authors: "Kurihara, Y. et al.",
    venue: "International Journal of Disaster Risk Reduction",
    year: 2026,
    type: "journal",
    doi: "10.1016/j.ijdrr.2026.106178",
    abstract:
      "カガヤン川流域における将来の気候変動影響の不確実性を、ベイズアプローチを用いて定量化した研究。気候モデルの不確実性を確率的に評価し、洪水リスクへの影響を分析する。",
    abstractEn:
      "A study quantifying uncertainty in future climate change impacts on the Cagayan River Basin using a Bayesian approach. Probabilistically evaluates climate model uncertainty and analyzes implications for flood risk.",
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
    detailsEn: `## Overview

Climate change impacts on flood risk involve significant uncertainty. This study proposes a framework to quantify that uncertainty using a Bayesian approach, probabilistically evaluating future climate change impacts in the Cagayan River Basin, Philippines.

## Methods

- Uncertainty analysis of climate projections using multiple GCM outputs
- Probabilistic impact assessment through Bayesian statistics
- Application to the Cagayan River Basin and estimation of future flood risk changes`,
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
    abstractEn:
      "Post-disaster recovery budget allocation is a major challenge, with some municipalities over-funded while others remain under-funded, delaying reconstruction. This study developed a rapid flood direct damage assessment method using Google Earth Engine (GEE) and Sentinel-1 SAR imagery. Applied to Typhoon Ulysses (2020) in the Cagayan Valley, Philippines, the method can replace field surveys that previously took over one month with satellite-based results available in just two days.",
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
    detailsEn: `## Overview

Developed a method for rapid flood direct damage assessment using Google Earth Engine (GEE) and Sentinel-1 SAR satellite imagery. Applied to Typhoon Ulysses (2020) damage assessment in the Cagayan River Basin (Region II), Philippines.

## Methods

- Automated flood extent detection using Sentinel-1 SAR and NDFI (10 m resolution)
- DEM-based flood depth estimation with FwDET-GEE
- Land use/land cover classification with Random Forest (500 trees, 93% accuracy)
- Damage estimation using depth-damage curves (GMMA-RAP, Shrestha, Tariq) for residential and agricultural assets

## Key Results

- Inundated area: 2,033 km² (approx. 8% of the region)
- Satellite-based assessment available within 2 days post-disaster (vs. 1+ month for field surveys)`,
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
    abstractEn:
      "Developed a method for monitoring river morphology around river structures by combining satellite-derived elevation estimates with observed river water levels.",
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
    detailsEn: `## Overview

River morphology changes around hydraulic structures are a critical concern for flood management. This study proposes a method for efficiently monitoring river morphological changes by integrating satellite-derived elevation data with observed river water levels.

## Methods

- Elevation estimation from satellite imagery
- Integration with observed river water level data
- Detection of morphological changes around river structures
- Development of time-series monitoring methodology`,
  },
];
