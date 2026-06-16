import type { Metadata } from "next";
import { BlogList, type BlogPost } from "@/components/BlogList";

export const metadata: Metadata = { title: "Blog" };

const posts: BlogPost[] = [
  {
    slug: "early-warning-global",
    title: "世界の早期警報システムの普及率と課題 — EW4Allの進捗と残されたギャップ",
    titleEn: "Global early warning system coverage and gaps — EW4All progress and remaining challenges",
    date: "2026-06-14",
    description:
      "EW4Allイニシアティブの進捗、早期警報の4本柱、地域別普及率、GBON観測インフラの欠陥、ラストマイル問題、資金ギャップ、仙台防災枠組との連携を体系的に分析。",
    descriptionEn:
      "Systematic analysis of the EW4All initiative progress, four pillars of EWS, regional coverage statistics, GBON observation gaps, last-mile challenges, funding gaps, and Sendai Framework linkage.",
    keywords: ["早期警報", "防災", "EW4All", "GBON", "レビュー"],
    keywordsEn: ["Early Warning", "DRR", "EW4All", "GBON", "Review"],
  },
  {
    slug: "early-warning-oceania",
    title: "大洋州・オセアニアにおける早期警報の現状と課題 — 太平洋島嶼国の脆弱性と地域協力",
    titleEn: "Early warning in Oceania — Pacific Island vulnerability and regional cooperation",
    date: "2026-06-14",
    description:
      "太平洋島嶼国14カ国の災害リスクプロファイル、気象観測ネットワークの現状、NMHS体制、地域協力枠組（PMC/SPREP/SPC）、国際支援プロジェクト、ラストマイル課題、気候変動と将来リスクを詳細に分析。",
    descriptionEn:
      "Detailed analysis of 14 Pacific Island Countries' disaster risk profiles, meteorological observation networks, NMHS capacity, regional cooperation frameworks (PMC/SPREP/SPC), international support, last-mile challenges, and climate change risks.",
    keywords: ["早期警報", "防災", "太平洋島嶼国", "気候変動", "途上国"],
    keywordsEn: ["Early Warning", "DRR", "Pacific Islands", "Climate Change", "Developing Countries"],
  },
  {
    slug: "wmo-region5-early-warning",
    title: "WMO第5地域（南西太平洋）の早期警報プロジェクトと課題分析",
    titleEn: "WMO Region V (South-West Pacific) early warning projects and gap analysis",
    date: "2026-06-14",
    description:
      "WMO RA Vの23加盟国概要、SWFDP太平洋、CREWS太平洋SIDS、熱帯低気圧・津波・洪水警報体制、気候サービス（PICOF/COSPPac）、観測ネットワーク強化、能力開発の課題と今後の展望を包括的に整理。",
    descriptionEn:
      "Comprehensive overview of WMO RA V: 23 member states, SWFDP-Pacific, CREWS Pacific SIDS, tropical cyclone/tsunami/flood warning systems, climate services (PICOF/COSPPac), observation network enhancement, capacity development, and future outlook.",
    keywords: ["早期警報", "WMO", "防災", "太平洋島嶼国", "SWFDP"],
    keywordsEn: ["Early Warning", "WMO", "DRR", "Pacific Islands", "SWFDP"],
  },
  {
    slug: "scenariomip-cmip7",
    title: "ScenarioMIP-CMIP7 — 次期気候モデル比較の7シナリオ設計と排出駆動型への転換",
    titleEn: "ScenarioMIP-CMIP7 — Seven new scenarios and the shift to emission-driven climate modeling",
    date: "2026-06-12",
    description:
      "CMIP7のシナリオ設計を解説。SSP5-8.5の廃止、7つの新シナリオ（H/HL/M/ML/L/VL/LN）、CO₂排出駆動型への転換、2500年延長シミュレーション、洪水リスク評価への影響を整理。GMD掲載。",
    descriptionEn:
      "Overview of CMIP7 scenario design: retirement of SSP5-8.5, seven new pathways (H/HL/M/ML/L/VL/LN), shift to emission-driven CO₂, extended simulations to 2500 AD, and implications for flood risk assessment. Published in GMD.",
    keywords: ["気候変動", "CMIP", "シナリオ分析", "統計解析", "レビュー"],
    keywordsEn: ["Climate Change", "CMIP", "Scenario Analysis", "Statistics", "Review"],
  },
  {
    slug: "myproject-tools",
    title: "MyProject — 途上国の防災・減災を支援するオープンツール集",
    titleEn: "MyProject — Open tools for disaster risk reduction in developing countries",
    date: "2026-05-27",
    description:
      "SAR衛星画像による災害範囲可視化（SAR-DAT）、洪水直接被害計算、GCMダウンスケーリング、マクロ経済影響評価（DSGE）— 途上国での防災プロジェクトから生まれたオープンツール群の紹介。",
    descriptionEn:
      "Open tool suite for DRR: SAR-DAT for disaster mapping, flood direct damage estimation, GCM downscaling, and DSGE macroeconomic impact modeling — developed through DRR projects in developing countries.",
    keywords: ["SAR", "被害評価", "気候変動", "Google Earth Engine", "途上国"],
    keywordsEn: ["SAR", "Damage Assessment", "Climate Change", "Google Earth Engine", "Developing Countries"],
  },
  {
    slug: "solving-shallow-water-equations",
    title: "浅水方程式の解き方 — 各項の離散化手法と代表的な解法の比較",
    titleEn: "Solving the shallow water equations — Discretization methods for each term",
    date: "2026-05-27",
    description:
      "浅水方程式の運動方程式を構成する4つの項（局所加速度・移流・水面勾配・摩擦）について、それぞれの離散化手法をリストアップし代表的な解法を数式で解説。FDM/FVM/FEMの違い、CFL条件、乾湿境界の扱いも整理。",
    descriptionEn:
      "Term-by-term guide to numerically solving the SWE momentum equation: local acceleration, advection, pressure gradient, friction. Compares FDM/FVM/FEM, CFL condition, and wetting-drying treatment with equations.",
    keywords: ["浅水方程式", "数値解析", "水理モデル", "有限差分法", "GPU"],
    keywordsEn: ["Shallow Water Eq.", "Numerical Methods", "Hydraulic Model", "FDM", "GPU"],
  },
  {
    slug: "hydraulic-model-equations",
    title: "水理モデルの支配方程式を比較する — 完全SWE・局所慣性・拡散波の違い",
    titleEn: "Comparing hydraulic model equations — Full SWE vs. local inertia vs. diffusion wave",
    date: "2026-05-24",
    description:
      "LISFLOOD-FP、HEC-RAS、TELEMAC-2D、RRI、RIM2D — 洪水シミュレーションの代表モデルが採用する浅水方程式の近似レベル（完全SWE・局所慣性・拡散波）を、運動方程式の各項の物理的意味とともに数式で比較・解説。",
    descriptionEn:
      "Compares SWE approximation levels (full SWE, local inertia, diffusion wave) across LISFLOOD-FP, HEC-RAS, TELEMAC-2D, RRI, and RIM2D. Each momentum term explained with equations.",
    keywords: ["水理モデル", "浅水方程式", "数値解析", "洪水予測", "GPU"],
    keywordsEn: ["Hydraulic Model", "Shallow Water Eq.", "Numerical Methods", "Flood Forecasting", "GPU"],
  },
  {
    slug: "gpu-urban-flood-modeling",
    title: "マルチGPUで都市洪水をリアルタイム予測 — ベルリン全域891km²を2m解像度で5.5時間",
    titleEn: "Real-time urban flood forecasting with multi-GPU — Berlin 891 km² at 2 m resolution in 5.5 hours",
    date: "2026-05-24",
    description:
      "RIM2Dの局所慣性近似SWEをマルチGPU並列化し、ベルリン全域891km²を2m解像度でリアルタイム以上の速度で計算。8GPU構成で5m解像度なら実時間の100倍速。連続方程式・運動方程式のLaTeX数式と性能ベンチマークを詳解。NHESS掲載。",
    descriptionEn:
      "Multi-GPU parallelization of RIM2D local-inertia SWE for Berlin (891 km², 2 m, 419M cells). 8-GPU achieves 347× real-time at 10 m. Equations and benchmarks detailed. Published in NHESS.",
    keywords: ["水理モデル", "GPU", "都市洪水", "早期警報", "浅水方程式"],
    keywordsEn: ["Hydraulic Model", "GPU", "Urban Flooding", "Early Warning", "Shallow Water Eq."],
  },
  {
    slug: "sar-flood-assimilation",
    title: "SAR浸水マップの準リアルタイム同化による洪水予測の改善",
    titleEn: "Improving flood forecasts through near-real-time assimilation of SAR flood maps",
    date: "2026-05-23",
    description:
      "SAR浸水確率マップをパーティクルフィルタで水文・水理モデルに逐次同化するフレームワーク。セヴァーン川4イベントで予測誤差を最大50%削減、改善は24〜48時間持続。局所重みの数式と同化ワークフローを詳解。WRR掲載。",
    descriptionEn:
      "Framework for sequential assimilation of SAR flood probability maps into hydrologic-hydraulic models via particle filter. Up to 50% error reduction on River Severn. Published in WRR.",
    keywords: ["SAR", "データ同化", "水理モデル", "パーティクルフィルタ", "洪水予測"],
    keywordsEn: ["SAR", "Data Assimilation", "Hydraulic Model", "Particle Filter", "Flood Forecasting"],
  },
  {
    slug: "culvert-blockage-flood-modeling",
    title: "カルバート閉塞が洪水動態に与える影響 — 2D水理モデルによる定量評価とインフラ優先度の特定",
    titleEn: "Impact of culvert blockage on flood dynamics — Quantitative assessment with 2D hydraulic modeling",
    date: "2026-05-23",
    description:
      "TELEMAC-2Dにカルバート閉塞の動的モジュールを実装し、閉塞率・トリガー水位・再現期間の組合せシナリオで局所浸水への影響を定量評価。重要カルバートの特定手法と緩和策の効果を検証。NHESS掲載。",
    descriptionEn:
      "Dynamic culvert blockage module in TELEMAC-2D for scenario-based assessment of local flooding. Identifies critical culverts and quantifies mitigation effects. Published in NHESS.",
    keywords: ["水理モデル", "都市洪水", "インフラ", "シナリオ分析", "防災"],
    keywordsEn: ["Hydraulic Model", "Urban Flooding", "Infrastructure", "Scenario Analysis", "DRR"],
  },
  {
    slug: "flexth-flood-depth-estimation",
    title: "FLEXTH — 衛星浸水マップから浸水深を推定し、欠測域を補完するフレームワーク",
    titleEn: "FLEXTH — Estimating flood depth from satellite maps and filling gaps in urban/vegetated areas",
    date: "2026-05-23",
    description:
      "衛星SAR浸水マップとDTMから浸水深を推定し、都市部・植生下の欠測域に浸水を伝播させるFLEXTHフレームワーク。2022年パキスタン洪水（243万km²）を1.5時間で処理。FwDETより高精度・高速。NHESS掲載。",
    descriptionEn:
      "FLEXTH framework estimates flood depth from SAR maps + DTM and propagates inundation into data-gap areas. Processed 2022 Pakistan flood (2.43M km²) in 1.5 hours. Outperforms FwDET. Published in NHESS.",
    keywords: ["SAR", "浸水深推定", "DEM", "リモートセンシング", "被害評価"],
    keywordsEn: ["SAR", "Flood Depth", "DEM", "Remote Sensing", "Damage Assessment"],
  },
  {
    slug: "sar-hydraulic-model-integration",
    title: "SAR衛星×水理モデル — リモートセンシングで洪水予測を高精度化するアプローチの体系的整理",
    titleEn: "SAR × hydraulic models — A systematic review of remote sensing approaches for flood prediction",
    date: "2026-04-20",
    description:
      "SAR画像から抽出した浸水範囲・水位を水理モデルのキャリブレーション・データ同化に活用する手法を体系的にレビュー。GEEで実行可能な処理とLISFLOOD-FP等の外部モデルとの統合ワークフローも整理。",
    descriptionEn:
      "Systematic review of using SAR-derived flood extent and water levels for hydraulic model calibration and data assimilation. Covers GEE workflows and integration with LISFLOOD-FP.",
    keywords: ["SAR", "水理モデル", "データ同化", "Google Earth Engine", "レビュー"],
    keywordsEn: ["SAR", "Hydraulic Model", "Data Assimilation", "Google Earth Engine", "Review"],
  },
  {
    slug: "compound-flooding",
    title: "複合災害としての洪水 — 複数ハザードの同時発生リスクをどう評価するか",
    titleEn: "Compound flooding — Assessing the risk of co-occurring hazards",
    date: "2026-04-17",
    description:
      "高潮+河川洪水、連続台風、土壌飽和+豪雨など複合イベントの4類型を定義し、Copulaや大規模アンサンブルによる評価手法と気候変動下でのリスク変化を体系的にレビュー。Nature Reviews掲載。",
    descriptionEn:
      "Defines four types of compound flood events (storm surge + fluvial, sequential storms, etc.) and reviews Copula and large-ensemble methods for risk assessment under climate change. Published in Nature Reviews.",
    keywords: ["複合災害", "気候変動", "統計解析", "リスク評価", "レビュー"],
    keywordsEn: ["Compound Flooding", "Climate Change", "Statistics", "Risk Assessment", "Review"],
  },
  {
    slug: "deep-learning-flood-mapping",
    title: "深層学習による洪水マッピング手法の体系的レビュー",
    titleEn: "Systematic review of deep learning methods for flood mapping",
    date: "2026-04-17",
    description:
      "感受性マッピング・急速浸水モデリング・衛星画像抽出の3フェーズにわたる187本のDL論文を分析。U-Netの標準化、ベンチマーク不在、汎化性能未検証など構造的課題を指摘。HESS掲載。",
    descriptionEn:
      "Analysis of 187 DL papers across susceptibility mapping, rapid inundation modeling, and satellite extraction. Highlights U-Net dominance, lack of benchmarks, and untested generalization. Published in HESS.",
    keywords: ["深層学習", "リモートセンシング", "浸水マッピング", "U-Net", "レビュー"],
    keywordsEn: ["Deep Learning", "Remote Sensing", "Flood Mapping", "U-Net", "Review"],
  },
  {
    slug: "s2s-disaster-preparedness",
    title: "S2S予測の防災活用 — サブシーズナル予測はどこまで意思決定に使えるか",
    titleEn: "S2S forecasts for disaster preparedness — How far can sub-seasonal prediction support decisions?",
    date: "2026-04-16",
    description:
      "S2Sプロジェクトのマルチモデルデータベースを核に、Forecast-based FinancingやAnticipatory Actionなど防災分野での確率的予測の活用事例を体系的にレビュー。BAMS掲載。",
    descriptionEn:
      "Reviews the S2S multi-model database and its application in DRR: Forecast-based Financing, Anticipatory Action, and probabilistic decision-making. Published in BAMS.",
    keywords: ["洪水予測", "防災", "早期警報", "気候変動", "レビュー"],
    keywordsEn: ["Flood Forecasting", "DRR", "Early Warning", "Climate Change", "Review"],
  },
  {
    slug: "extreme-precipitation-climate-change",
    title: "気候変動と極端降水の増大 — 水資源量が多い地域ほどリスクが高まる",
    titleEn: "Climate change and extreme precipitation — Wetter regions face greater risk increase",
    date: "2026-04-16",
    description:
      "CMIP5全球解析から、年間降水量が多い湿潤地域ほど極端降水と洪水流量の気候変動による増加率が大きいことを定量的に示した研究。Scientific Reports掲載。",
    descriptionEn:
      "CMIP5 global analysis showing that wetter regions experience larger climate-driven increases in extreme precipitation and flood discharge. Published in Scientific Reports.",
    keywords: ["気候変動", "極端降水", "CMIP", "洪水予測", "統計解析"],
    keywordsEn: ["Climate Change", "Extreme Precipitation", "CMIP", "Flood Forecasting", "Statistics"],
  },
  {
    slug: "global-flood-mapping-sar",
    title: "10年分のSARデータで世界の洪水を地図化する — 深層学習による全球洪水データセット",
    titleEn: "Mapping global floods with 10 years of SAR data — A deep learning dataset",
    date: "2026-04-13",
    description:
      "Microsoft AI for Good Labが10年分のSentinel-1 SARアーカイブに深層学習を適用し、既存データセットより71%多い洪水域を検出した全球洪水データセットを構築。Nature Communications掲載。",
    descriptionEn:
      "Microsoft AI for Good Lab applied DL to 10 years of Sentinel-1 SAR, detecting 71% more flood events than existing datasets. Published in Nature Communications.",
    keywords: ["SAR", "深層学習", "浸水マッピング", "Sentinel-1", "グローバル"],
    keywordsEn: ["SAR", "Deep Learning", "Flood Mapping", "Sentinel-1", "Global"],
  },
  {
    slug: "flood-risk-central-asia",
    title: "中央アジアにおける大規模洪水リスク評価 — データ不足地域への適用",
    titleEn: "Large-scale flood risk assessment in Central Asia — Application to data-scarce regions",
    date: "2026-04-12",
    description:
      "中央アジア5カ国を対象とした初の広域確率論的洪水リスク評価。グローバルデータとローカルデータの統合、10,000年合成洪水カタログ、気候変動影響の地域差を解説。",
    descriptionEn:
      "First large-scale probabilistic flood risk assessment for five Central Asian countries. Integrates global and local data with a 10,000-year synthetic flood catalog.",
    keywords: ["リスク評価", "気候変動", "統計解析", "途上国", "水理モデル"],
    keywordsEn: ["Risk Assessment", "Climate Change", "Statistics", "Developing Countries", "Hydraulic Model"],
  },
  {
    slug: "sar-flood-mapping",
    title: "SAR衛星画像による洪水範囲の抽出手法",
    titleEn: "Flood extent extraction from SAR satellite imagery",
    date: "2026-04-12",
    description:
      "Sentinel-1 SAR画像とNDFI（正規化差分洪水指数）を用いた洪水範囲の自動検出手法を、Cian et al. (2018) の論文をもとに解説。",
    descriptionEn:
      "Automated flood detection using Sentinel-1 SAR and NDFI (Normalized Difference Flood Index), based on Cian et al. (2018).",
    keywords: ["SAR", "Sentinel-1", "浸水マッピング", "リモートセンシング", "NDFI"],
    keywordsEn: ["SAR", "Sentinel-1", "Flood Mapping", "Remote Sensing", "NDFI"],
  },
  {
    slug: "fwdet",
    title: "FwDET — 衛星画像から浸水深を推定するツールの解説",
    titleEn: "FwDET — Floodwater Depth Estimation Tool explained",
    date: "2026-04-12",
    description:
      "浸水範囲マップとDEMから浸水深を推定するFwDET（Floodwater Depth Estimation Tool）のアルゴリズム・検証結果・限界を、原著論文をもとに整理。",
    descriptionEn:
      "Algorithm, validation, and limitations of FwDET (Floodwater Depth Estimation Tool) for estimating flood depth from inundation maps and DEMs.",
    keywords: ["浸水深推定", "DEM", "Google Earth Engine", "リモートセンシング", "被害評価"],
    keywordsEn: ["Flood Depth", "DEM", "Google Earth Engine", "Remote Sensing", "Damage Assessment"],
  },
  {
    slug: "flood-direct-damage",
    title: "衛星画像を用いた洪水直接被害評価手法の解説",
    titleEn: "Satellite-based flood direct damage assessment methodology",
    date: "2026-02-01",
    description:
      "Google Earth EngineとSentinel-1 SAR衛星画像を用いて、台風Ulyssesによるフィリピン・カガヤン川流域の洪水被害を迅速に評価した研究の詳細解説。",
    descriptionEn:
      "Rapid flood damage assessment for Typhoon Ulysses in the Cagayan River Basin, Philippines, using Google Earth Engine and Sentinel-1 SAR imagery.",
    keywords: ["SAR", "被害評価", "Google Earth Engine", "Sentinel-1", "途上国"],
    keywordsEn: ["SAR", "Damage Assessment", "Google Earth Engine", "Sentinel-1", "Developing Countries"],
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="mx-auto max-w-2xl pb-8 pt-20">
        <h1 className="text-4xl font-light tracking-tight">Blog</h1>
      </section>

      <BlogList posts={posts} />
    </div>
  );
}
