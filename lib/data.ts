export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  /** Volume / article number, e.g. "141, 106178" */
  volume?: string;
  year: number;
  type: "journal" | "preprint";
  doi: string;
  openAccess?: boolean;
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
  tagline: "Ph.D. in Disaster Management (GRIPS / ICHARM)",
  links: {
    github: "https://github.com/YutaKurihara",
    orcid: "https://orcid.org/0009-0001-8899-3400",
    note: "https://note.com/hemingway_",
  },
};

export interface Tool {
  name: string;
  nameJa: string;
  url: string;
  description: string;
  descriptionEn: string;
}

export const tools: Tool[] = [
  {
    name: "MyProject — Open tools for disaster risk reduction",
    nameJa: "MyProject — 途上国防災のオープンツール集",
    url: "https://yutakurihara.github.io/MyProject/",
    description:
      "SAR 衛星画像による被害範囲可視化（SAR-DAT）、洪水直接被害計算、GCM ダウンスケーリング、カガヤン川流域（Region II）の洪水被害・経済影響日次モニターの 4 ツール。",
    descriptionEn:
      "Four tools: SAR-based damage extent mapping (SAR-DAT), flood direct damage estimation, GCM downscaling, and a daily flood damage and economic impact monitor for the Cagayan River Basin (Region II).",
  },
  {
    name: "Disaster Damage Assessment Tool",
    nameJa: "Disaster Damage Assessment Tool（インドネシア）",
    url: "https://yutakurihara.github.io/dda-tool-site/",
    description:
      "Google Earth Engine 上で洪水・土砂災害・地震・森林火災の被害範囲と推定直接被害を算出する、インドネシア防災庁（BNPB）向けツールの手法解説とマニュアル。",
    descriptionEn:
      "Method documentation and user manual for a Google Earth Engine tool that maps flood, landslide, earthquake and forest fire damage and estimates direct losses, built for BNPB, Indonesia.",
  },
];

export const publications: Publication[] = [
  {
    id: "stochastic-climate-projection-bayesian",
    title:
      "Stochastic Climate Change Projections by Bayesian Estimation for Uncertainty Assessment of Potential Flood Damage",
    authors: "Kurihara, Y., Miyamoto, M.",
    venue: "Digital Water",
    volume: "4(1)",
    year: 2026,
    type: "journal",
    doi: "10.1080/28375807.2026.2725888",
    openAccess: true,
    abstract:
      "気候変動下のフィリピン・カガヤン・バレー地域を対象に、ベイズ推定によって将来の確率降雨を定量化し、その不確実性を洪水リスクまで伝播させた研究。ダウンスケーリング・バイアス補正済みの CMIP6 降水量に対し、一般化極値（GEV）分布のパラメータを MCMC 法で推定して確率降雨を求め、事後分布と 95% 信用区間で再現期間ごとの不確実性を表現した。信用区間は再現期間が長いほど、また高排出シナリオほど広がる。得られた確率降雨を降雨・流出・氾濫（RRI）モデルに入力して確率的な洪水シミュレーションを行い、河川水位と市街地・農地の洪水リスクを、決定論的な一つの値ではなく確率密度関数と信用区間の形で評価した。",
    abstractEn:
      "Applies Bayesian estimation to quantify future probabilistic rainfall and propagate its uncertainty to future flood risk in the Cagayan Valley Region, Philippines, under climate change. Downscaled and bias-corrected CMIP6 precipitation is analysed with Bayesian inference; the parameters of the generalised extreme value (GEV) distribution are estimated by MCMC to obtain probable extreme rainfall, and posterior densities and 95% credible intervals depict how return-level uncertainty widens with longer return periods and higher-emission scenarios. The probabilistic rainfall is propagated through the Rainfall–Runoff–Inundation (RRI) model to produce stochastic flood simulations, so that river water levels and flood risk in urban and agricultural areas are expressed as probability distributions and credible intervals rather than deterministic outcomes.",
    keywords: [
      "Climate Change",
      "Bayesian Estimation",
      "GEV Distribution",
      "MCMC",
      "RRI Model",
      "Cagayan River Basin",
    ],
    details: `## 概要

将来の洪水リスク評価では、気候モデルの違い・排出シナリオ・極値統計の推定誤差が重なり、単一の確率降雨やハザード図では不確実性を伝えきれない。本研究は、確率降雨の推定から氾濫計算までをベイズ的に扱い、フィリピン・カガヤン・バレー地域（Region II）の将来洪水ハザードを確率分布として提示するフレームワークを示した。

## 手法

- ダウンスケーリング・バイアス補正済み CMIP6 降水量を入力とした年最大降雨の抽出
- 一般化極値（GEV）分布のパラメータを MCMC 法でベイズ推定し、再現期間ごとの確率降雨の事後分布と 95% 信用区間を算出
- 事後分布からサンプリングした確率降雨を降雨・流出・氾濫（RRI）モデルに与える確率的洪水シミュレーション
- 河川水位、市街地・農地の浸水を確率密度関数と信用区間で評価

## 主な結果

- 信用区間は再現期間が長いほど広がり、特に高排出シナリオで顕著
- 高排出シナリオ（SSP2-4.5・SSP3-7.0・SSP5-8.5）では極端降雨強度が有意に増加
- 洪水ハザードを「一つの値」ではなく「分布」として示すことで、根拠に基づく気候変動適応とリスク情報に基づく治水計画に透明な判断材料を提供

## 位置づけ

International Journal of Disaster Risk Reduction 掲載の「Quantifying uncertainty in climate change impacts」（被害額までの不確実性伝播）と対をなす論文で、本論文は降雨の確率推定と氾濫計算への伝播に焦点を置く。オープンアクセス（CC BY 4.0）。`,
    detailsEn: `## Overview

In future flood risk assessment, differences among climate models, emission scenarios and extreme-value estimation errors compound, so a single design rainfall or hazard map cannot convey the uncertainty. This study treats the chain from probable rainfall estimation to inundation modelling in a Bayesian manner and presents future flood hazard in the Cagayan Valley Region (Region II), Philippines, as probability distributions.

## Methods

- Annual maximum rainfall extracted from downscaled and bias-corrected CMIP6 precipitation
- Bayesian estimation of generalised extreme value (GEV) parameters by MCMC, giving posterior distributions and 95% credible intervals of return levels
- Stochastic flood simulations driving the Rainfall–Runoff–Inundation (RRI) model with rainfall sampled from the posterior
- River water levels and inundation of urban and agricultural areas evaluated as probability density functions and credible intervals

## Key Results

- Credible intervals widen as the return period increases, most markedly under higher-emission scenarios
- Higher-emission scenarios (SSP2-4.5, SSP3-7.0 and SSP5-8.5) show significant increases in extreme rainfall intensity
- Representing flood hazard as a distribution rather than a single value provides a transparent, policy-relevant basis for evidence-based adaptation and risk-informed flood management

## Context

A companion to "Quantifying uncertainty in climate change impacts" (International Journal of Disaster Risk Reduction), which propagates uncertainty through to monetary losses; this paper focuses on probabilistic rainfall estimation and its propagation into inundation modelling. Open access (CC BY 4.0).`,
  },
  {
    id: "climate-landuse-flood-exposure",
    title:
      "Climate and Land-Use Drivers of Future Flood Exposure and Damage in the Cagayan River Basin, Philippines",
    authors: "Kurihara, Y., Miyamoto, M., Kyuzaki, R.",
    venue: "Journal of Hydrology: Regional Studies",
    volume: "66, 103690",
    year: 2026,
    type: "journal",
    doi: "10.1016/j.ejrh.2026.103690",
    openAccess: true,
    abstract:
      "フィリピン北部ルソン島のカガヤン・バレー地域（Region II）を対象に、気候・土地利用・人口の将来シナリオを共通の時間枠で統合し、将来の洪水ハザード・曝露・民間部門被害を評価した研究。CMIP6 の 3 つの GCM（ACCESS-CM2・CanESM5・EC-Earth3-Veg-LR）と 4 つの SSP シナリオによるバイアス補正済み降雨で RRI モデルを駆動し、Land Change Modeler と人口・作付面積の需要制約を組み合わせて将来土地利用を予測した。全シナリオでピーク流量が増加し、高強制力シナリオでは 100 年確率の浸水面積が 31% 以上拡大、曝露人口は現在の約 100 万人から 2070 年には約 200 万人へ倍増する。気候変動は頻発洪水の曝露を、土地利用の拡大は稀な大洪水の曝露と被害を主に増やし、リスク情報に基づく土地利用規制により住宅被害を年間最大 1.54 億ペソ削減できる。",
    abstractEn:
      "Assesses future flood hazard, exposure and private-sector damage in the Cagayan Valley Region (Region II), northern Luzon, Philippines, by integrating climate, land-use and population scenarios within a common time frame. Bias-corrected rainfall from three CMIP6 GCMs (ACCESS-CM2, CanESM5, EC-Earth3-Veg-LR) under four SSPs drives the RRI model, while future land use is projected by combining Land Change Modeler susceptibility with population- and crop-area demand constraints. Peak discharge increases in all scenarios, the 100-year inundated area grows by more than 31% under higher forcing, and exposed population roughly doubles from about 1 million today to 2 million by 2070. Climate change mainly raises frequent-flood exposure, whereas land-use expansion amplifies rare-flood exposure and damage; risk-informed land-use regulation reduces future housing losses by up to 154 million PHP per year.",
    keywords: [
      "Climate Change",
      "Land Use Change",
      "Flood Exposure",
      "Population Projection",
      "Cagayan River Basin",
      "Damage Assessment",
    ],
    details: `## 概要

カガヤン川はフィリピン最長の河川で、流域は主要な稲・トウモロコシの産地であると同時に、台風とモンスーンによる洪水がほぼ毎年発生する。本研究は、気候・土地利用・人口という 3 つの駆動要因を同じ時間枠で統合し、将来の洪水ハザード・曝露・民間部門被害の変化を定量化するとともに、気候要因と土地利用要因の寄与を分離し、土地利用規制の効果を評価した。

## 手法

- CMIP6 の 3 GCM（ACCESS-CM2・CanESM5・EC-Earth3-Veg-LR）× 4 SSP のバイアス補正済み降雨で RRI モデルを駆動
- Land Change Modeler の感受性スコアに人口・作付面積の需要制約を加えた将来土地利用予測
- 政府の人口推計と空間共変量による将来人口分布の推定
- 浸水・土地利用・人口の重ね合わせによる作物別曝露の算定と、気候要因・土地利用要因の寄与分離
- リスク情報に基づく土地利用規制シナリオの評価

## 主な結果

- 全ての SSP シナリオで模擬ピーク流量が増加（短時間強度の増大と時間的ピークの鋭化が原因）
- 高強制力シナリオで 100 年確率浸水面積が 31% 以上拡大
- 中位人口シナリオで曝露人口は約 100 万人（現在）から約 200 万人（2070 年）へ
- 気候変動は頻発洪水の曝露を、土地利用の拡大は稀な大洪水の曝露と被害を主に増加
- リスク情報に基づく土地利用規制で住宅被害を年間最大 1.54 億ペソ削減`,
    detailsEn: `## Overview

The Cagayan River is the longest river system in the Philippines, and its basin is a major rice- and corn-producing area that suffers tropical-cyclone and monsoon floods almost every year. This study integrates three drivers — climate, land use and population — within a common time frame to quantify future changes in flood hazard, exposure and private-sector damage, separates the climate- and land-use-driven contributions, and evaluates land-use regulation.

## Methods

- RRI model driven by bias-corrected rainfall from three CMIP6 GCMs (ACCESS-CM2, CanESM5, EC-Earth3-Veg-LR) under four SSPs
- Future land use projected from Land Change Modeler susceptibility scores with population- and crop-area demand constraints
- Future population distribution estimated from government projections and spatial covariates
- Crop-specific exposure from overlaying inundation, land use and population, with attribution to climate and land-use drivers
- Evaluation of risk-informed land-use regulation scenarios

## Key Results

- Simulated peak discharge increases under all SSP scenarios, driven by higher short-duration intensity and sharper temporal peaks
- The 100-year inundated area increases by more than 31% under higher-forcing scenarios
- Under the medium population scenario, exposed population grows from about 1 million today to about 2 million by 2070
- Climate change mainly increases frequent-flood exposure, whereas land-use expansion amplifies rare-flood exposure and damage
- Risk-informed land-use regulation reduces future housing losses by up to 154 million PHP per year`,
  },
  {
    id: "bayesian-climate-change",
    title:
      "Quantifying Uncertainty in Climate Change Impacts: A Bayesian Approach for the Cagayan River Basin",
    authors: "Kurihara, Y., Miyamoto, M.",
    venue: "International Journal of Disaster Risk Reduction",
    volume: "141, 106178",
    year: 2026,
    type: "journal",
    doi: "10.1016/j.ijdrr.2026.106178",
    abstract:
      "気候変動は数日規模の極端降雨を強め、河川洪水の被害を増大させうるが、稀な降雨の推定は不確実性が大きく、浸水と損失へ非線形に伝わる。本研究は、ベイズ極値推論と「降雨→洪水→被害」の連鎖に沿った不確実性伝播を結び付け、カガヤン川流域の確率的な洪水影響評価を行った。流域平均の 1 日・7 日年最大降雨をベイズ GEV でモデル化し、SSP1-2.6・SSP3-7.0 の将来 100 年確率降雨を CRPS に基づくベイズモデル平均化で 3 つの CMIP6 GCM から推定。RRI モデル（Ondoy–Pepeng 型の降雨テンプレート）から降雨–ピーク水位関係と住宅・稲・トウモロコシの降雨–損失関数を導き、モンテカルロ法で事後分布を得た。SSP3-7.0 では 100 年確率降雨が上方にシフトして分布が広がり、95% 範囲の幅は住宅被害で 19.4 億→38.2 億ペソとほぼ倍増、稲でも 13.4 億→24.9 億ペソに拡大した。",
    abstractEn:
      "Climate change can intensify multi-day extreme rainfall and increase damaging riverine floods, but rare-event precipitation is highly uncertain and propagates nonlinearly to inundation and losses. This study links Bayesian extreme-value inference with uncertainty propagation along the rainfall–flood–damage chain for the Cagayan River Basin. Basin-mean 1-day and 7-day annual maxima are modelled with Bayesian GEV inference; future 100-year design rainfall under SSP1-2.6 and SSP3-7.0 is estimated by combining three CMIP6 GCMs with CRPS-based Bayesian model averaging. RRI simulations with a fixed storm template (Ondoy–Pepeng) yield a rainfall–peak-stage relationship at Tuguegarao and quadratic rainfall–loss functions for buildings, rice and corn, through which Monte Carlo samples of RL100 rainfall are propagated. SSP3-7.0 shifts RL100 upward and widens the distribution: the 95% range width nearly doubles for building damage (1,944 to 3,817 million PHP) and increases for rice (1,336 to 2,494 million PHP), showing that deterministic RL100-based estimates can understate tail risk.",
    keywords: [
      "Climate Change",
      "Bayesian Approach",
      "Uncertainty Propagation",
      "Bayesian Model Averaging",
      "Cagayan River Basin",
      "Flood Damage",
    ],
    details: `## 概要

気候変動が洪水リスクに与える影響には大きな不確実性が伴う。本研究は、ベイズ極値推論と不確実性伝播を組み合わせ、フィリピン・カガヤン川流域（北部ルソン）における将来の洪水被害を、点推定ではなく事後分布と信用区間の形で評価するフレームワークを提案した。

## 手法

- 流域平均の 1 日・7 日年最大降雨に対するベイズ GEV 推論
- SSP1-2.6・SSP3-7.0 下の将来 100 年確率降雨（RL100）を、CRPS に基づくベイズモデル平均化で 3 つの CMIP6 GCM から統合
- 固定の降雨テンプレート（Ondoy–Pepeng 型）を降雨総量でスケーリングした RRI シミュレーション
- Tuguegarao 地点の降雨–ピーク水位関係と、住宅・稲・トウモロコシの 2 次の降雨–損失関数の導出
- RL100 降雨のモンテカルロ・サンプルを伝播させ、ピーク水位と事象損失の事後分布を取得（中央・裾を含む信用範囲幅で要約）

## 主な結果

- SSP1-2.6 は現在気候に近く不確実性も比較的小さい一方、SSP3-7.0 では RL100 が上方にシフトし分布が広がる
- 不確実性はピーク水位・損失へ写すとさらに拡大し、住宅被害の 95% 範囲幅は 19.4 億→38.2 億ペソとほぼ倍増、稲は 13.4 億→24.9 億ペソ
- 決定論的な RL100 に基づく推定は、強い強制力の下では裾（テール）リスクを過小評価しうる。適応計画には確率的な報告が不可欠`,
    detailsEn: `## Overview

Climate change impacts on flood risk involve significant uncertainty. This study combines Bayesian extreme-value inference with uncertainty propagation to evaluate future flood losses in the Cagayan River Basin (northern Luzon, Philippines) as posterior distributions and credible ranges rather than point estimates.

## Methods

- Bayesian GEV inference for basin-mean 1-day and 7-day annual maxima
- Future 100-year design rainfall (RL100) under SSP1-2.6 and SSP3-7.0 from three CMIP6 GCMs combined by CRPS-based Bayesian model averaging
- RRI simulations driven by a fixed storm template (Ondoy–Pepeng) scaled across rainfall totals
- Rainfall–peak-stage relationship at Tuguegarao and quadratic rainfall–loss functions for buildings, rice and corn
- Monte Carlo propagation of RL100 rainfall to posterior distributions of peak stage and event losses, summarised by central and tail-inclusive credible-range widths

## Key Results

- SSP1-2.6 stays close to the present-climate reference with relatively narrow uncertainty, whereas SSP3-7.0 shifts RL100 upward and widens the distribution
- Uncertainty expands further when mapped to peak stage and losses: the 95% range width nearly doubles for building damage (1,944 to 3,817 million PHP) and increases for rice (1,336 to 2,494 million PHP)
- Deterministic RL100-based estimates can understate tail risk under stronger forcing; probabilistic reporting is essential for robust adaptation planning`,
  },
  {
    id: "flood-direct-damage",
    title:
      "Flood Direct Damage Assessment due to Typhoon Ulysses by Satellite Images",
    authors: "Kurihara, Y., Miyamoto, M., Sunakawa, R.",
    venue: "International Journal of Disaster Risk Reduction",
    volume: "118, 105067",
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
    authors: "Tsuda, M., Kurihara, Y.",
    venue: "Japanese Journal of JSCE (土木学会論文集)",
    volume: "80(16), 23-16067",
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
