"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

const IMG = process.env.__NEXT_ROUTER_BASEPATH || "";
const basePath = `${IMG}/images/flood-direct-damage`;

export default function Content() {
  const { locale } = useLocale();
  const en = locale === "en";

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
            2026-02-01
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Satellite-Based Flood Direct Damage Assessment Methodology"
              : "衛星画像を用いた洪水直接被害評価手法の解説"}
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
        <article className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="mb-3 text-lg font-bold">
              {en ? "The Problem This Research Solves" : "この研究が解決する課題"}
            </h2>
            <p className="mb-3 text-muted">
              {en ? (
                <>
                  When a disaster strikes, governments and international organizations need to assess the damage
                  and allocate recovery budgets to local authorities. However, conventional damage assessments
                  (PDNA/DaLA) rely on field interviews and{" "}
                  <strong className="text-foreground">take 6 weeks to 3 months to complete</strong>.
                  This delay slows down the start of recovery and creates imbalances in budget allocation.
                </>
              ) : (
                <>
                  災害が発生すると、政府や国際機関は被害状況を把握し、復興予算を各自治体に配分する必要があります。
                  しかし、従来の被害調査（PDNA/DaLA）は現地でのインタビューに基づくため、
                  <strong className="text-foreground">完了まで6週間〜3か月</strong>かかります。
                  この遅れが復興の開始を遅らせ、予算配分の不均衡を生みます。
                </>
              )}
            </p>
            <p className="text-muted">
              {en ? (
                <>
                  This study proposes a methodology that{" "}
                  <strong className="text-foreground">
                    combines satellite imagery with cloud processing (Google Earth Engine) to estimate
                    regional damage costs within just 2 days of a disaster
                  </strong>.
                </>
              ) : (
                <>
                  本研究では、<strong className="text-foreground">
                  衛星画像とクラウド処理（Google Earth Engine）を組み合わせることで、
                  災害発生からわずか2日で広域の被害額を推定</strong>できる手法を提案しました。
                </>
              )}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold">
              {en ? "Overall Workflow" : "全体の流れ"}
            </h2>
            <p className="mb-4 text-muted">
              {en ? (
                <>
                  This methodology consists of two major steps. The left side, &ldquo;Flood Mapping,&rdquo;
                  creates the flood extent and depth maps, while the right side, &ldquo;Damage Analysis,&rdquo;
                  calculates the damage costs for each sector.
                </>
              ) : (
                <>
                  本手法は大きく2つのステップで構成されます。左側の「Flood Mapping」で浸水域と浸水深を作成し、
                  右側の「Damage Analysis」で各セクターの被害額を算定します。
                </>
              )}
            </p>
            <figure className="my-4">
              <Image
                src={`${basePath}/Fig.1_Diagram.jpg`}
                alt={en ? "Overall workflow diagram of the methodology" : "研究手法の全体フロー図"}
                width={1200}
                height={400}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="mt-2 text-xs text-muted">
                {en
                  ? "Fig. 1: Overall workflow of the flood direct damage assessment. Left: flood mapping, Right: damage analysis."
                  : "Fig. 1: 洪水直接被害評価の全体フロー。左：浸水マッピング、右：被害分析。"}
              </figcaption>
            </figure>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold">
              {en ? "Study Area and Disaster" : "対象地域と災害"}
            </h2>
            <p className="mb-4 text-muted">
              {en ? (
                <>
                  The study area is the{" "}
                  <strong className="text-foreground">Cagayan Valley region</strong> (Region II)
                  in northern Luzon, Philippines. The Cagayan River is the longest (505 km) and has the
                  largest drainage basin (25,649 km&sup2;) in the Philippines, with frequent flooding
                  during the monsoon season (July&ndash;December).
                </>
              ) : (
                <>
                  フィリピン北部ルソン島の<strong className="text-foreground">カガヤン・バレー地域</strong>（Region II）が対象です。
                  カガヤン川はフィリピン最長（505 km）・最大流域面積（25,649 km&sup2;）の河川で、
                  モンスーン期（7月〜12月）に頻繁に洪水が発生します。
                </>
              )}
            </p>
            <figure className="my-4">
              <Image
                src={`${basePath}/Fig.2_StudyArea.jpg`}
                alt={en ? "Map of the study area" : "対象地域の地図"}
                width={800}
                height={800}
                className="mx-auto max-w-md rounded-lg border border-border"
              />
              <figcaption className="mt-2 text-xs text-muted">
                {en
                  ? "Fig. 2: Location map of the Cagayan Valley region, the study area."
                  : "Fig. 2: 対象地域であるカガヤン・バレー地域の位置図。"}
              </figcaption>
            </figure>
            <p className="text-muted">
              {en ? (
                <>
                  <strong className="text-foreground">Typhoon Ulysses</strong> (international name Vamco)
                  struck this region in November 2020, causing massive damage of 7.3 billion PhP in
                  agriculture and 12.9 billion PhP in infrastructure.
                </>
              ) : (
                <>
                  <strong className="text-foreground">台風Ulysses</strong>（国際名Vamco）は2020年11月にこの地域を襲い、
                  農業被害73億ペソ、インフラ被害129億ペソという甚大な被害をもたらしました。
                </>
              )}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold">
              {en ? "Step 1: Creating the Flood Map" : "Step 1: 浸水マップの作成"}
            </h2>

            <h3 className="mb-2 mt-5 font-semibold">
              {en ? "Flood Extent Detection Using SAR Imagery" : "SAR画像による浸水域の検出"}
            </h3>
            <p className="mb-3 text-muted">
              {en ? (
                <>
                  <strong className="text-foreground">Sentinel-1 SAR (Synthetic Aperture Radar)</strong>{" "}
                  imagery is used for flood extent detection. SAR is a sensor that emits microwaves toward
                  the ground and receives their reflections. Since it can penetrate clouds to observe the
                  surface, it can detect flooded areas even under overcast skies after a typhoon.
                </>
              ) : (
                <>
                  浸水範囲の検出には<strong className="text-foreground">Sentinel-1衛星のSAR（合成開口レーダー）</strong>画像を使用します。
                  SARはマイクロ波を地表に照射してその反射を受信するセンサーで、
                  雲を透過して地表を観測できるため、台風通過後の曇天でも浸水域を検出できます。
                </>
              )}
            </p>
            <p className="mb-3 text-muted">
              {en ? (
                <>
                  Two SAR images, pre-flood (October 8, 2020) and post-flood (November 13), are compared,
                  and the{" "}
                  <strong className="text-foreground">NDFI (Normalized Difference Flood Index)</strong>{" "}
                  is used to automatically identify flooded areas. This exploits the property that water
                  surfaces cause specular reflection of SAR signals, resulting in low backscatter.
                </>
              ) : (
                <>
                  洪水前（2020年10月8日）と洪水後（11月13日）の2枚のSAR画像を比較し、
                  <strong className="text-foreground">NDFI（正規化差分洪水指数）</strong>で浸水域を自動判定します。
                  水面はSAR信号を鏡面反射するため後方散乱が弱くなるという性質を利用しています。
                </>
              )}
            </p>
            <ul className="mb-4 ml-4 list-disc space-y-1 text-muted">
              <li>
                {en
                  ? "Speckle noise removal using a 50m kernel mean filter"
                  : "50mカーネルの平均フィルタでスペックルノイズを除去"}
              </li>
              <li>
                {en
                  ? "Quantification of pre/post-flood SAR signal changes using NDFI"
                  : "NDFIにより洪水前後のSAR信号変化を定量化"}
              </li>
              <li>
                {en
                  ? "Only connected regions of 4 or more pixels are classified as flooded"
                  : "4ピクセル以上の連結領域のみを浸水域として認定"}
              </li>
              <li>
                {en
                  ? "Areas with slope greater than 5 degrees are excluded (to prevent false detections in mountainous terrain)"
                  : "傾斜5度以上の地域を除外（山地の誤検出を防止）"}
              </li>
              <li>
                {en ? (
                  <>
                    Final flood map generated at{" "}
                    <strong className="text-foreground">10m</strong> resolution
                  </>
                ) : (
                  <>
                    最終的に解像度<strong className="text-foreground">10m</strong>の浸水マップを生成
                  </>
                )}
              </li>
            </ul>

            <h3 className="mb-2 mt-5 font-semibold">
              {en ? "Flood Depth Estimation Using FwDET-GEE" : "FwDET-GEEによる浸水深の推定"}
            </h3>
            <p className="mb-3 text-muted">
              {en ? (
                <>
                  The flood map derived from SAR imagery shows &ldquo;where flooding occurred&rdquo; but
                  not &ldquo;how deep the flooding was.&rdquo; Since flood depth is essential for damage
                  cost estimation, <strong className="text-foreground">FwDET-GEE</strong> is used to
                  estimate it.
                </>
              ) : (
                <>
                  SAR画像から得られる浸水マップは「どこが浸水したか」を示しますが、「どれだけ深く浸水したか」は分かりません。
                  浸水深は被害額の算定に不可欠なため、<strong className="text-foreground">FwDET-GEE</strong>を使用して推定します。
                </>
              )}
            </p>

            <div className="my-4 rounded-lg border border-border bg-card-bg p-5">
              <h4 className="mb-2 text-sm font-semibold">
                {en ? "What is FwDET-GEE?" : "FwDET-GEEとは？"}
              </h4>
              <p className="mb-3 text-muted">
                {en ? (
                  <>
                    FwDET-GEE (Floodwater Depth Estimation Tool) is a Google Earth Engine tool that{" "}
                    <strong className="text-foreground">
                      combines the flood extent detected from SAR imagery with terrain data (DEM) to
                      automatically estimate flood depth at each point
                    </strong>.
                    This study uses the Copernicus DEM GLO-30 (relative vertical accuracy &lt; 2m).
                  </>
                ) : (
                  <>
                    FwDET-GEE（Floodwater Depth Estimation Tool）は、
                    SAR画像から検出した<strong className="text-foreground">浸水範囲と地形データ（DEM）を組み合わせて、
                    各地点の浸水深を自動推定する</strong>Google Earth Engine上のツールです。
                    本研究では、Copernicus DEM GLO-30（相対垂直精度 &lt; 2m）を使用しています。
                  </>
                )}
              </p>
              <p className="mb-2 font-semibold text-foreground">
                {en ? "Calculation workflow:" : "計算の流れ："}
              </p>
              <ol className="ml-4 list-decimal space-y-1 text-muted">
                <li>
                  {en ? (
                    <>
                      Set the{" "}
                      <strong className="text-foreground">flood extent boundary as the zero-depth baseline</strong>
                    </>
                  ) : (
                    <>
                      <strong className="text-foreground">浸水域の境界を水深ゼロ</strong>の基準線として設定する
                    </>
                  )}
                </li>
                <li>
                  {en ? (
                    <>
                      Reference the DEM elevation data and{" "}
                      <strong className="text-foreground">
                        calculate depth pixel by pixel from the boundary inward
                      </strong>
                    </>
                  ) : (
                    <>
                      DEMの標高データを参照し、境界から内側に向かって<strong className="text-foreground">1ピクセルずつ水深を計算</strong>する
                    </>
                  )}
                </li>
                <li>
                  {en
                    ? "For each pixel, the depth is determined by referencing the lowest depth among the 8 neighboring pixels"
                    : "各ピクセルでは、周囲8方向の隣接ピクセルのうち最も低い水深を参照して決定する"}
                </li>
                <li>
                  {en
                    ? "A 3x3 pixel low-pass filter smooths outliers to generate the final flood depth map"
                    : "3×3ピクセルのローパスフィルタで異常値を平滑化し、最終的な浸水深マップを生成する"}
                </li>
              </ol>
            </div>

            <h3 className="mb-2 mt-5 font-semibold">
              {en ? "Flood Mapping Results" : "浸水マッピングの結果"}
            </h3>
            <figure className="my-4">
              <Image
                src={`${basePath}/Fig.3_FloodMap.jpg`}
                alt={en ? "Flood depth map" : "浸水深マップ"}
                width={1200}
                height={600}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="mt-2 text-xs text-muted">
                {en
                  ? "Fig. 3: Flood depth map as of November 13, 2020. (b) This method (satellite imagery), (c) RRI model simulation results."
                  : "Fig. 3: 2020年11月13日時点の浸水深マップ。(b) 本手法（衛星画像）、(c) RRIモデルによるシミュレーション結果。"}
              </figcaption>
            </figure>

            <p className="mb-3 text-muted">
              {en ? (
                <>
                  The flooded area was <strong className="text-foreground">2,033 km&sup2;</strong>{" "}
                  (approximately 8% of the entire region). Of this, 43% had water depths of 0.5m or more,
                  a level causing significant damage to crops and infrastructure.
                </>
              ) : (
                <>
                  浸水面積は<strong className="text-foreground">2,033 km&sup2;</strong>（地域全体の約8%）。
                  そのうち43%が水深0.5m以上で、作物やインフラに重大な被害をもたらすレベルでした。
                </>
              )}
            </p>

            <figure className="my-4">
              <Image
                src={`${basePath}/Fig.4_FloodDepth.jpg`}
                alt={en ? "Flooded area distribution by depth" : "浸水深別の面積分布"}
                width={600}
                height={400}
                className="mx-auto max-w-sm rounded-lg border border-border"
              />
              <figcaption className="mt-2 text-xs text-muted">
                {en
                  ? "Fig. 4: Flooded area distribution by depth. The red line indicates the mean flood depth of 1.126m."
                  : "Fig. 4: 浸水深別の面積分布。赤線は平均浸水深1.126mを示す。"}
              </figcaption>
            </figure>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold">
              {en ? "Step 2: Damage Cost Estimation" : "Step 2: 被害額の算定"}
            </h2>

            <h3 className="mb-2 mt-5 font-semibold">
              {en
                ? "Land Use Map Creation Using Random Forest"
                : "Random Forestによる土地利用マップの作成"}
            </h3>
            <p className="mb-3 text-muted">
              {en ? (
                <>
                  Since no high-resolution crop maps exist for the Philippines, a custom land use map was
                  created using machine learning. The algorithm used was{" "}
                  <strong className="text-foreground">Random Forest</strong>.
                </>
              ) : (
                <>
                  フィリピンには高解像度の農作物マップが存在しないため、機械学習で独自の土地利用マップを作成しました。
                  使用したアルゴリズムは<strong className="text-foreground">Random Forest（ランダムフォレスト）</strong>です。
                </>
              )}
            </p>

            <div className="my-4 rounded-lg border border-border bg-card-bg p-5">
              <h4 className="mb-2 text-sm font-semibold">
                {en ? "What is Random Forest?" : "Random Forestとは？"}
              </h4>
              <p className="mb-3 text-muted">
                {en ? (
                  <>
                    Random Forest is a supervised machine learning algorithm that{" "}
                    <strong className="text-foreground">
                      combines many decision trees and classifies by majority vote
                    </strong>.
                    In this study, it was used to classify each satellite image pixel into 6 land use
                    categories (paddy fields, cornfields, forests, bare land, urban areas, and water bodies).
                  </>
                ) : (
                  <>
                    Random Forest（ランダムフォレスト）は、<strong className="text-foreground">
                    多数の決定木（Decision Tree）を組み合わせ、多数決で分類を行う</strong>教師あり機械学習アルゴリズムです。
                    本研究では、衛星画像の各ピクセルを6つの土地利用カテゴリ（水田・トウモロコシ畑・森林・裸地・都市・水域）に分類するために使用しました。
                  </>
                )}
              </p>
              <p className="mb-2 font-semibold text-foreground">
                {en ? "Configuration in this study:" : "本研究での構成："}
              </p>
              <ul className="ml-4 list-disc space-y-1 text-muted">
                <li>
                  {en ? (
                    <>
                      <strong className="text-foreground">500 decision trees</strong> used
                      (ee.Classifier.smileRandomForest)
                    </>
                  ) : (
                    <>
                      <strong className="text-foreground">500本の決定木</strong>を使用（ee.Classifier.smileRandomForest）
                    </>
                  )}
                </li>
                <li>
                  {en ? (
                    <>
                      Each tree learns from a random subset of data, thereby{" "}
                      <strong className="text-foreground">preventing overfitting</strong>
                    </>
                  ) : (
                    <>
                      各決定木がデータのランダムなサブセットで学習するため、<strong className="text-foreground">過学習を抑制</strong>
                    </>
                  )}
                </li>
                <li>
                  {en
                    ? "Input features: Sentinel-1 (VV/VH), Landsat-8 (B1-B11, NDVI, EVI, NDWI, MNDWI), MERIT Hydro (elevation, slope, catchment area), NAMRIA land cover map"
                    : "入力特徴量: Sentinel-1（VV/VH）、Landsat-8（B1〜B11, NDVI, EVI, NDWI, MNDWI）、MERIT Hydro（標高・傾斜・集水面積）、NAMRIA土地被覆マップ"}
                </li>
                <li>
                  {en ? (
                    <>
                      Trained on ground truth data collected from Google Street View (80 samples per
                      category), achieving{" "}
                      <strong className="text-foreground">93% overall accuracy</strong> and a Kappa
                      coefficient of 0.92
                    </>
                  ) : (
                    <>
                      Google Street Viewで収集した教師データ（各カテゴリ80サンプル）で学習し、<strong className="text-foreground">全体精度93%</strong>、カッパ係数0.92を達成
                    </>
                  )}
                </li>
              </ul>
            </div>

            <p className="mb-3 text-muted">
              {en ? (
                <>
                  As <strong className="text-foreground">input features</strong>, Sentinel-1 SAR data
                  (VV/VH polarization), Landsat-8 optical bands (B1&ndash;B11), and vegetation/water
                  indices (NDVI, EVI, NDWI, MNDWI) were used. Additionally, MERIT Hydro terrain data
                  (elevation, slope, catchment area) and the NAMRIA official land cover map were included
                  as inputs.
                </>
              ) : (
                <>
                  <strong className="text-foreground">入力データ（特徴量）</strong>として、
                  Sentinel-1のSARデータ（VV/VH偏波）、Landsat-8の光学バンド（B1〜B11）、
                  および植生・水域指標（NDVI, EVI, NDWI, MNDWI）を使用しました。
                  さらに、MERIT Hydroの地形データ（標高・傾斜・集水面積）と
                  NAMRIAの公式土地被覆マップも入力に加えています。
                </>
              )}
            </p>

            <p className="mb-3 text-muted">
              {en ? (
                <>
                  <strong className="text-foreground">Training data</strong> was collected by identifying
                  locations for each land use category using Google Street View, with 80 samples per
                  category (50 for training + 30 for validation).
                </>
              ) : (
                <>
                  <strong className="text-foreground">教師データ</strong>は、
                  Google Street Viewで各土地利用カテゴリの位置を確認し、
                  カテゴリごとに80サンプル（学習用50 + 検証用30）を収集しました。
                </>
              )}
            </p>

            <figure className="my-4">
              <Image
                src={`${basePath}/Fig.5_Samples.jpg`}
                alt={en ? "Examples of training data collection" : "教師データの収集例"}
                width={1200}
                height={600}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="mt-2 text-xs text-muted">
                {en
                  ? "Fig. 5: (A)(B) Examples of paddy fields and cornfields confirmed via Google Street View. (C)(D)(E) Bare land, forest, and urban areas confirmed from satellite imagery. (F) Distribution of training and validation samples."
                  : "Fig. 5: (A)(B) Google Street Viewで確認した水田・トウモロコシ畑の例。(C)(D)(E) 衛星画像で確認した裸地・森林・都市域。(F) 学習・検証サンプルの分布。"}
              </figcaption>
            </figure>

            <p className="mb-3 text-muted">
              {en ? (
                <>
                  A 6-class LULC map (paddy fields, cornfields, forests, bare land, urban areas, water
                  bodies) was created at 30m resolution, achieving{" "}
                  <strong className="text-foreground">93% overall accuracy</strong> and a Kappa coefficient
                  of 0.92.
                </>
              ) : (
                <>
                  6分類（水田・トウモロコシ畑・森林・裸地・都市・水域）のLULCマップを解像度30mで作成。
                  <strong className="text-foreground">全体精度93%</strong>、
                  カッパ係数0.92という高い精度を達成しました。
                </>
              )}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <figure>
                <Image
                  src={`${basePath}/Fig.6_LULCMap.jpg`}
                  alt={en ? "Land use map" : "土地利用マップ"}
                  width={400}
                  height={600}
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="mt-2 text-xs text-muted">
                  {en
                    ? "Fig. 6: LULC map created with Random Forest."
                    : "Fig. 6: Random Forestで作成したLULCマップ。"}
                </figcaption>
              </figure>
              <figure>
                <Image
                  src={`${basePath}/Fig.7_LULCerror.jpg`}
                  alt={en ? "Classification accuracy assessment" : "分類精度評価"}
                  width={400}
                  height={600}
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="mt-2 text-xs text-muted">
                  {en
                    ? "Fig. 7: Classification accuracy for each land use type."
                    : "Fig. 7: 各土地利用タイプの分類精度。"}
                </figcaption>
              </figure>
            </div>

            <h3 className="mb-2 mt-6 font-semibold">
              {en
                ? "Damage Cost Estimation Using Damage Curves"
                : "被害曲線（Damage Curve）による被害額の算定"}
            </h3>
            <p className="mb-3 text-muted">
              {en ? (
                <>
                  The flood depth map and land use map are overlaid to calculate damage costs for each
                  sector using &ldquo;<strong className="text-foreground">flood depth x damage curve x
                  unit cost</strong>.&rdquo; Damage curves are empirical functions representing the damage
                  ratio relative to flood depth, and they differ for each sector.
                </>
              ) : (
                <>
                  浸水深マップと土地利用マップを重ね合わせ、各セクターの被害額を
                  「<strong className="text-foreground">浸水深 × 被害曲線（Damage Curve） × 単価</strong>」で計算します。
                  被害曲線は浸水深に対する被害率を表す経験的な関数で、セクターごとに異なります。
                </>
              )}
            </p>

            <div className="my-4 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr>
                    <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">
                      {en ? "Target" : "対象"}
                    </th>
                    <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">
                      {en ? "Data Source" : "データソース"}
                    </th>
                    <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">
                      {en ? "Damage Curve" : "被害曲線"}
                    </th>
                    <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">
                      {en ? "Unit Cost" : "単価"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Residential" : "住宅"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">Open Buildings V3</td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "GMMA-RAP (2014), Sigmoid function" : "GMMA-RAP (2014), シグモイド関数"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">10,300 PhP/m&sup2;</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Paddy fields" : "水田"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Created LULC map" : "作成したLULCマップ"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">Shrestha et al. (2016)</td>
                    <td className="border border-border px-3 py-2 text-muted">69.6 PhP/ha</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Corn" : "トウモロコシ"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Created LULC map" : "作成したLULCマップ"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">Tariq et al. (2021)</td>
                    <td className="border border-border px-3 py-2 text-muted">45.9 PhP/ha</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Roads" : "道路"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">DPWH + OpenStreetMap</td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en
                        ? "Custom (water volume vs. damage regression)"
                        : "独自作成（水量vs被害の回帰）"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">-</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Hospitals / Schools" : "病院・学校"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">OpenStreetMap</td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en
                        ? "Custom (water volume vs. damage regression)"
                        : "独自作成（水量vs被害の回帰）"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-2 mt-6 font-semibold">
              {en ? "Damage Curves for Each Sector" : "各セクターの被害曲線"}
            </h3>
            <p className="mb-4 text-muted">
              {en ? (
                <>
                  Below are the damage curves for the main sectors used in this study. All are approximated
                  by sigmoid functions, with the damage ratio increasing nonlinearly as flood depth increases.
                </>
              ) : (
                <>
                  以下は本研究で使用した主要セクターの被害曲線です。
                  いずれもシグモイド関数で近似されており、浸水深が増すにつれ被害率が非線形に上昇します。
                </>
              )}
            </p>

            <figure className="my-4">
              <Image
                src={`${basePath}/PrivateSector_DamageCurve.png`}
                alt={en ? "Damage curves for residential, paddy, and corn sectors" : "住宅・水田・トウモロコシの被害曲線"}
                width={1200}
                height={500}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="mt-2 text-xs text-muted">
                {en
                  ? "Damage curves for the private sector. Relationship between flood depth and damage ratio for residential (GMMA-RAP, 2014), paddy fields (Shrestha et al., 2016), and corn (Tariq et al., 2021)."
                  : "民間セクターの被害曲線。住宅（GMMA-RAP, 2014）、水田（Shrestha et al., 2016）、トウモロコシ（Tariq et al., 2021）の浸水深と被害率の関係。"}
              </figcaption>
            </figure>

            <figure className="my-4">
              <Image
                src={`${basePath}/Fig.8_RoadsDamageCurve.jpg`}
                alt={en ? "Road damage curves" : "道路の被害曲線"}
                width={1200}
                height={500}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="mt-2 text-xs text-muted">
                {en
                  ? "Fig. 8: (A) Relationship between national road damage costs and water volume, (B) Relationship between municipal road damage costs and water volume. Damage functions created via linear regression."
                  : "Fig. 8: (A) 国道の被害額と水量の関係、(B) 市町村道の被害額と水量の関係。線形回帰により被害関数を作成。"}
              </figcaption>
            </figure>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold">
              {en ? "Key Results" : "主な結果"}
            </h2>
            <figure className="my-4">
              <Image
                src={`${basePath}/Fig.10_FloodDamageResults.jpg`}
                alt={en ? "Damage assessment results" : "被害評価結果"}
                width={1200}
                height={600}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="mt-2 text-xs text-muted">
                {en
                  ? "Fig. 10: (a) Flooded area by land use type (circle size represents flooded area). (b) Damage cost by sector (circle size represents damage cost)."
                  : "Fig. 10: (a) 土地利用タイプ別の浸水面積（円の大きさは浸水面積を表す）。(b) 各セクターの被害額（円の大きさは被害額を表す）。"}
              </figcaption>
            </figure>

            <div className="my-4 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr>
                    <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">
                      {en ? "Sector" : "セクター"}
                    </th>
                    <th className="border border-border bg-accent-light px-3 py-2 text-right font-semibold">
                      {en ? "Satellite Analysis (M PhP)" : "衛星解析（百万PhP）"}
                    </th>
                    <th className="border border-border bg-accent-light px-3 py-2 text-right font-semibold">
                      {en ? "Field Report (M PhP)" : "現地報告（百万PhP）"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Residential" : "住宅"}
                    </td>
                    <td className="border border-border px-3 py-2 text-right text-muted">2,694</td>
                    <td className="border border-border px-3 py-2 text-right text-muted">-</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Paddy fields" : "水田"}
                    </td>
                    <td className="border border-border px-3 py-2 text-right text-muted">844</td>
                    <td className="border border-border px-3 py-2 text-right text-muted">981</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Corn" : "トウモロコシ"}
                    </td>
                    <td className="border border-border px-3 py-2 text-right text-muted">1,160</td>
                    <td className="border border-border px-3 py-2 text-right text-muted">289</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Roads" : "道路"}
                    </td>
                    <td className="border border-border px-3 py-2 text-right text-muted">1,598</td>
                    <td className="border border-border px-3 py-2 text-right text-muted">2,464</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Hospitals" : "病院"}
                    </td>
                    <td className="border border-border px-3 py-2 text-right text-muted">21.7</td>
                    <td className="border border-border px-3 py-2 text-right text-muted">26.2</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Schools" : "学校"}
                    </td>
                    <td className="border border-border px-3 py-2 text-right text-muted">725</td>
                    <td className="border border-border px-3 py-2 text-right text-muted">644</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted">
              {en ? (
                <>
                  Good agreement was observed for paddy fields and hospitals. Corn tended to be
                  overestimated, and improving the accuracy of the damage curve is a future challenge.
                  Road damage in Quirino province was underestimated because landslide damage in
                  mountainous areas cannot be captured by this method.
                </>
              ) : (
                <>
                  水田・病院については良好な一致が見られました。トウモロコシは過大評価の傾向があり、
                  被害曲線の精度向上が今後の課題です。Quirino州の道路被害は過小評価されましたが、
                  これは山岳地帯の土砂災害による被害が本手法では捕捉できないためです。
                </>
              )}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold">
              {en ? "Rapid Analysis with GEE" : "GEEによる迅速な分析"}
            </h2>
            <figure className="my-4">
              <Image
                src={`${basePath}/Fig.11_GEEInterface.jpg`}
                alt={en ? "Google Earth Engine interface" : "Google Earth Engineのインターフェース"}
                width={1200}
                height={600}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="mt-2 text-xs text-muted">
                {en
                  ? "Fig. 11: Google Earth Engine interface. The left graph shows flooded area by land use, and the pie chart shows damage costs by sector."
                  : "Fig. 11: Google Earth Engineのインターフェース。左のグラフは土地利用別の浸水面積、円グラフは各セクターの被害額を示す。"}
              </figcaption>
            </figure>

            <p className="mb-3 text-muted">
              {en ? (
                <>
                  Sentinel-1 captured the entire Cagayan province on November 13, 2020, and the data became
                  available on GEE just 2 days later on November 15. In contrast, the conventional field
                  survey (SitRep) took one month to compile results.
                </>
              ) : (
                <>
                  Sentinel-1衛星はカガヤン州全域を2020年11月13日に撮影し、わずか2日後の11月15日には
                  GEE上で利用可能になりました。一方、従来の現地調査（SitRep）は結果の取りまとめまでに1か月を要しました。
                </>
              )}
            </p>

            <figure className="my-4">
              <Image
                src={`${basePath}/Report_timeline.png`}
                alt={en ? "Timeline comparison between conventional and proposed methods" : "従来手法と本手法のタイムライン比較"}
                width={1200}
                height={400}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="mt-2 text-xs text-muted">
                {en
                  ? "Timeline comparison of damage reporting. This method enables analysis within 2 days of satellite image acquisition. Conventional field surveys (SitRep) require approximately 1 month."
                  : "被害報告のタイムライン比較。本手法は衛星画像の取得から2日で分析可能。従来の現地調査（SitRep）は約1か月を要する。"}
              </figcaption>
            </figure>

            <div className="my-4 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr>
                    <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold"></th>
                    <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">
                      {en ? "Conventional (PDNA/DaLA)" : "従来手法（PDNA/DaLA）"}
                    </th>
                    <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">
                      {en ? "Proposed Method" : "本手法"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-3 py-2 font-medium">
                      {en ? "Time required" : "所要時間"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "6 weeks to 3 months" : "6週間〜3か月"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      <strong className="text-foreground">
                        {en ? "2 days" : "2日"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 font-medium">
                      {en ? "Coverage" : "カバー範囲"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Interview targets only" : "インタビュー対象のみ"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      <strong className="text-foreground">
                        {en ? "Entire region" : "地域全体"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 font-medium">
                      {en ? "Required skills" : "必要スキル"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Multi-sector experts" : "多セクターの専門家"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Basic GEE operation" : "GEEの基本操作"}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 font-medium">
                      {en ? "Cost" : "コスト"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "High (labor and travel)" : "高い（人件費・移動費）"}
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      <strong className="text-foreground">
                        {en ? "Low (cloud processing)" : "低い（クラウド処理）"}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold">
              {en ? "Conclusions and Future Work" : "結論と今後の課題"}
            </h2>
            <p className="mb-3 text-muted">
              {en ? (
                <>
                  This method achieved rapid and efficient flood damage assessment using Google Earth Engine
                  and Sentinel-1 satellite imagery. When applied to the damage assessment of the Cagayan
                  Valley region caused by Typhoon Ulysses, it demonstrated that rapid and reasonable damage
                  estimation across multiple sectors is feasible.
                </>
              ) : (
                <>
                  本手法は、Google Earth EngineとSentinel-1衛星画像を用いて、迅速かつ効率的な洪水被害評価を実現しました。
                  台風Ulyssesによるカガヤン・バレー地域の被害評価に適用した結果、
                  複数のセクターにわたる迅速かつ合理的な被害推定が可能であることが示されました。
                </>
              )}
            </p>
            <p className="text-muted">
              {en ? (
                <>
                  Future challenges include improving the accuracy of damage curves (especially for corn),
                  integrating landslide damage in mountainous areas, and applying and validating the method
                  for other disaster events.
                </>
              ) : (
                <>
                  今後の課題として、被害曲線の精度向上（特にトウモロコシ）、
                  山岳地帯の土砂災害被害の統合、および他の災害イベントへの適用と検証が挙げられます。
                </>
              )}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold">References</h2>
            <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
              <li>Cian, F., Marconcini, M., &amp; Ceccato, P. (2018). Normalized Difference Flood Index for rapid flood mapping. <em>Remote Sensing of Environment</em>, 209, 712-730.</li>
              <li>Cohen, S. et al. (2018). Estimating Floodwater Depths from Flood Inundation Maps and Topography. <em>JAWRA</em>, 54(4), 847-858.</li>
              <li>Cohen, S. et al. (2019). The Floodwater Depth Estimation Tool (FwDET v2.0). <em>Natural Hazards and Earth System Sciences</em>, 19, 2053-2065.</li>
              <li>Peter, B.G. et al. (2022). Google Earth Engine Implementation of FwDET-GEE. <em>IEEE Geoscience and Remote Sensing Letters</em>, 19.</li>
              <li>Hamidi, E. et al. (2023). Fast Flood Extent Monitoring with SAR Change Detection Using Google Earth Engine. <em>IEEE Trans. on Geoscience and Remote Sensing</em>.</li>
              <li>Gorelick, N. et al. (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone. <em>Remote Sensing of Environment</em>.</li>
              <li>Breiman, L. (2001). Random Forests. <em>Machine Learning</em>, 45, 5-32.</li>
              <li>Sirko, W. et al. (2021). Continental-Scale Building Detection from High Resolution Satellite Imagery. <em>arXiv:2107.12283</em>.</li>
              <li>Pacheco, B.M. et al. (2014). Development of Vulnerability Curves of Key Building Types in the Greater Metro Manila Area. UPD-ICE.</li>
              <li>Shrestha, B.B. et al. (2016). Improvement in flood disaster damage assessment using highly accurate IfSAR DEM. <em>Journal of Disaster Research</em>, 11(6), 1137-1149.</li>
              <li>Shrestha, B.B. et al. (2018). Methodology for Agricultural Flood Damage Assessment. In <em>Recent Advances in Flood Risk Management</em>. IntechOpen.</li>
              <li>Tariq, M.A.U.R. et al. (2021). An Evaluation of Risk-Based Agricultural Land-Use Adjustments. <em>Hydrology</em>, 8(1), 53.</li>
              <li>Yamazaki, D. et al. (2017). A high-accuracy map of global terrain elevations. <em>Geophysical Research Letters</em>, 44(11), 5844-5853.</li>
              <li>Sayama, T. et al. (2015). Hydrologic sensitivity of flood runoff and inundation. <em>Natural Hazards and Earth System Sciences</em>, 15, 1617-1630.</li>
              <li>Ohara, M. et al. (2016). Study on Basic Flood Risk Assessment in Asian Flood Prone Area. <em>Journal of Disaster Research</em>, 11(6), 1150-1160.</li>
              <li>NDRRMC. (2021). Situational Report No. 29 re Typhoon &ldquo;ULYSSES&rdquo; (I.N. VAMCO).</li>
              <li>World Bank. (2018). Methodology Note on the Global RApid post-disaster Damage Estimation (GRADE) approach.</li>
              <li>EU, WB &amp; UNDG. (2013). Post-Disaster Needs Assessments Guidelines Volume A.</li>
              <li>Copernicus &amp; ESA. (2022). Copernicus DEM Product Handbook.</li>
              <li>PSA. (2022). Production Costs and Returns of Palay and Corn 2019-2021.</li>
              <li>PSA. (2020). Construction Statistics from Approved Building Permits.</li>
              <li>UN-SPIDER. Recommended Practice: Flood Mapping Using Sentinel-1 SAR in GEE.</li>
            </ol>
          </section>
        </article>
      </section>
    </div>
  );
}
