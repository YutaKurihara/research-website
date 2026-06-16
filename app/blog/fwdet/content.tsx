"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

const IMG = process.env.__NEXT_ROUTER_BASEPATH || "";
const img = (name: string) => `${IMG}/images/blog-fwdet/${name}`;

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
            2026-04-12
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "FwDET — A Tool for Estimating Flood Depth from Satellite Imagery"
              : "FwDET — 衛星画像から浸水深を推定するツールの解説"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "Based on Cohen, S. et al. (2018, 2019) / Peter, B.G. et al. (2022)"
              : "Cohen, S. et al. (2018, 2019) / Peter, B.G. et al. (2022) の論文をもとに整理"}
          </p>
          <a href="https://doi.org/10.5194/nhess-19-2053-2019" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.5194/nhess-19-2053-2019
          </a>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">

        {/* ── What is FwDET ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "What is FwDET" : "FwDETとは"}
          </h2>
          <p className="text-muted">
            {en
              ? <>
                  FwDET (Floodwater Depth Estimation Tool) estimates the water depth at each point within a flooded area
                  by combining a <strong className="text-foreground">flood extent map</strong> derived from satellite imagery
                  with a <strong className="text-foreground">Digital Elevation Model (DEM)</strong>.
                  The initial version (v1.0) was developed in 2018 by Prof. Sagy Cohen and colleagues at the University of Alabama,
                  followed by v2.0 in 2019 and a Google Earth Engine version (FwDET-GEE) in 2022.
                </>
              : <>
                  FwDET（Floodwater Depth Estimation Tool）は、衛星画像等から得られた
                  <strong className="text-foreground">浸水範囲マップ</strong>と
                  <strong className="text-foreground">数値標高モデル（DEM）</strong>を組み合わせて、
                  浸水域内の各地点の水深を推定するツールです。
                  アラバマ大学のSagy Cohen教授らが2018年に初版（v1.0）を開発し、
                  2019年にv2.0、2022年にはGoogle Earth Engine版（FwDET-GEE）が公開されました。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Why Flood Depth is Needed ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Why Flood Depth is Needed" : "なぜ浸水深が必要なのか"}
          </h2>
          <p className="text-muted">
            {en
              ? <>
                  Technologies for detecting flood extent from satellite imagery (especially SAR) are well established,
                  but they only reveal &ldquo;where&rdquo; flooding occurred.
                  Damage estimation and evacuation planning require information on &ldquo;how deep&rdquo; the flooding was.
                  However, detailed hydraulic model simulations (e.g. HEC-RAS) require extensive input data and computation time,
                  making them impractical for rapid post-disaster response.
                </>
              : <>
                  衛星画像（特にSAR画像）から浸水範囲を検出する技術は確立されていますが、
                  それだけでは「どこが浸水したか」しかわかりません。
                  被害額の算定や避難計画には「どれだけ深く浸水したか」の情報が不可欠です。
                  しかし、詳細な水理モデル（HEC-RAS等）による浸水深シミュレーションには
                  膨大な入力データと計算時間が必要で、災害直後の迅速な対応には間に合いません。
                </>}
          </p>
          <p className="mt-3 text-muted">
            {en
              ? <>
                  FwDET can <strong className="text-foreground">estimate flood depth in minutes</strong> given only a flood extent map and a DEM,
                  positioning it as a first-order tool for emergency response.
                </>
              : <>
                  FwDETは、浸水範囲マップとDEMさえあれば
                  <strong className="text-foreground">数分で浸水深を推定</strong>できるため、
                  緊急対応のファーストオーダーツールとして位置づけられています。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Algorithm (v2.0) ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Algorithm (v2.0)" : "アルゴリズム（v2.0）"}
          </h2>
          <p className="mb-4 text-muted">
            {en
              ? "The fundamental principle of FwDET is to calculate water depth from the difference between the water surface elevation at the flood boundary and the ground elevation at each pixel within the flooded area."
              : "FwDETの基本原理は、浸水域の境界における水面標高を基準として、浸水域内の各ピクセルの地盤標高との差分から水深を計算することです。"}
          </p>

          <figure className="my-6">
            <Image src={img("fwdet_concept.jpg")} alt="FwDETの概念図: 浸水域の境界を水深ゼロとし、DEMとの差分で水深を算出" width={1200} height={540} className="w-full rounded-lg border border-border" />
            <figcaption className="mt-2 text-xs text-muted">
              {en
                ? "FwDET concept: the flood boundary (red dots) serves as the zero-depth reference, and water depth at each point is calculated from the difference between the estimated water surface (blue dashed line) and ground elevation (DEM)."
                : "FwDETの概念: 浸水域の境界（赤点）を水深ゼロの基準とし、推定水面（青破線）と地盤（DEM）の差分から各地点の水深を算出する。"}
            </figcaption>
          </figure>

          <div className="space-y-4">
            <Step num={1} title={en ? "Identify Flood Boundary" : "浸水域の境界を特定"}>
              {en
                ? "The flood extent polygon is converted to lines and rasterised to the DEM grid. These boundary pixels serve as the reference points for depth calculation."
                : "浸水範囲ポリゴンをラインに変換し、DEMのグリッドに合わせてラスタ化します。この境界ピクセルが水深計算の基準点となります。"}
            </Step>

            <Step num={2} title={en ? "Extract Boundary Elevation" : "境界の標高を取得"}>
              {en
                ? "The DEM elevation value at each boundary pixel is extracted. This elevation represents the water surface height at that location."
                : "各境界ピクセルのDEM標高値を抽出します。この標高値が、その地点での水面の高さを表します。"}
            </Step>

            <Step num={3} title={en ? "Assign Nearest Boundary Elevation to All Flooded Pixels" : "最寄りの境界標高を浸水域全体に割り当て"}>
              {en
                ? <>
                    Each pixel within the flooded area is assigned the elevation of the nearest boundary pixel.
                    In v2.0, ArcGIS Cost Allocation (reduceNeighborhood in GEE) is used, achieving a <strong className="text-foreground">15x speedup</strong> compared to the iterative Focal Statistics approach in v1.0.
                  </>
                : <>
                    浸水域内の各ピクセルに対して、最も近い境界ピクセルの標高値を割り当てます。
                    v2.0ではArcGISのCost Allocationツール（GEE版ではreduceNeighborhood）を使用し、
                    v1.0のFocal Statistics反復処理と比べて<strong className="text-foreground">15倍の高速化</strong>を達成しました。
                  </>}
            </Step>

            <Step num={4} title={en ? "Cost Raster Control" : "コストラスタによる制御"}>
              {en
                ? "To prevent elevation values from propagating across permanent water bodies (rivers, lakes), high cost values (1000) are assigned to water pixels and low cost values (1) to land pixels. This prevents erroneous depth calculations across rivers."
                : "恒常的な水域（河川・湖沼）を横切って標高値が伝播しないよう、水域ピクセルに高いコスト値（1000）を、陸地ピクセルに低いコスト値（1）を設定します。これにより、川を挟んだ誤った水深計算を防止します。"}
            </Step>

            <Step num={5} title={en ? "Coastal Correction (Added in v2.0)" : "沿岸域の補正（v2.0で追加）"}>
              {en
                ? "In coastal areas, boundary pixels with elevation at or below zero (sea level) are excluded. In v1.0, the coastline served as the reference, leading to underestimation of flood depth; v2.0 resolves this issue."
                : "沿岸部では、標高がゼロ以下の境界ピクセル（海面）を除外します。v1.0では海岸線が基準となり浸水深が過小評価される問題がありましたが、v2.0ではこれを解決しました。"}
            </Step>

            <Step num={6} title={en ? "Calculate Water Depth" : "水深の計算"}>
              {en
                ? "The water depth at each flooded pixel is calculated using the following formula."
                : "各浸水ピクセルの水深を以下の式で計算します。"}
            </Step>
          </div>

          <figure className="my-6">
            <Image src={img("fwdet_steps.jpg")} alt="FwDETアルゴリズムの3ステップ: 境界検出、Cost Allocation、水深計算" width={1200} height={400} className="w-full rounded-lg border border-border" />
            <figcaption className="mt-2 text-xs text-muted">
              {en
                ? "FwDET algorithm workflow: (left) identify boundary cells of the flooded area, (centre) assign nearest boundary elevation to each interior cell, (right) calculate water depth."
                : "FwDETアルゴリズムの流れ: (左) 浸水域の境界セルを特定、(中) 各内部セルに最寄り境界の標高を割り当て、(右) 水深を計算。"}
            </figcaption>
          </figure>

          <div className="mt-4 rounded-md border border-border bg-accent-light p-4">
            <p className="font-mono text-xs text-muted">
              {en
                ? "Depth = Assigned water surface elevation − Ground elevation (DEM value)"
                : "水深 = 割り当てられた水面標高 − 地盤標高（DEM値）"}
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Validation Results ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Validation Results" : "検証結果"}
          </h2>
          <p className="mb-4 text-muted">
            {en
              ? "FwDET v2.0 has been validated by comparison with hydraulic model simulation results."
              : "FwDET v2.0は、水理モデルのシミュレーション結果との比較で検証されています。"}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Case" : "ケース"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Type" : "タイプ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "DEM Resolution" : "DEM解像度"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Mean Error" : "平均誤差"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Portsmouth-Norfolk (Hurricane Irene, 2011)" : "Portsmouth-Norfolk（ハリケーンIrene, 2011）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Coastal" : "沿岸"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">1m LiDAR</td>
                  <td className="border border-border px-3 py-2 text-muted">0.18m</td>
                </tr>
                <tr className="bg-accent-light">
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Brazos River (Texas floods, 2016)" : "Brazos River（テキサス洪水, 2016）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Riverine" : "河川"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">10m NED</td>
                  <td className="border border-border px-3 py-2 text-muted">0.31m</td>
                </tr>
              </tbody>
            </table>
          </div>

          <figure className="my-6">
            <Image src={img("fwdet_validation.jpg")} alt="FwDET v2.0の検証結果: 沿岸0.18m、河川0.31mの平均誤差" width={840} height={480} className="mx-auto max-w-lg w-full rounded-lg border border-border" />
            <figcaption className="mt-2 text-xs text-muted">
              {en
                ? "Comparison of FwDET v2.0 with hydraulic models. Mean absolute error of 0.18m for coastal (Portsmouth-Norfolk) and 0.31m for riverine (Brazos River) flooding."
                : "FwDET v2.0と水理モデルの比較。沿岸（Portsmouth-Norfolk）で平均絶対誤差0.18m、河川（Brazos River）で0.31m。"}
            </figcaption>
          </figure>

          <p className="mt-3 text-muted">
            {en
              ? "Mean errors of 0.18m for coastal flooding and 0.31m for riverine flooding represent sufficient accuracy for initial assessment during emergency response."
              : "沿岸洪水で平均誤差0.18m、河川洪水で0.31mという結果は、緊急対応の初期評価としては十分な精度です。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Real Disaster Applications ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Real Disaster Applications" : "実際の災害への適用事例"}
          </h2>
          <div className="space-y-3 text-muted">
            <p>
              <strong className="text-foreground">
                {en ? "Hurricane Irene (2011, US Mid-Atlantic Coast)" : "ハリケーンIrene（2011年、米国中部大西洋岸）"}
              </strong>
              {en
                ? " — Landsat 5 imagery (30m resolution) was used. An average flood depth of 0.64m was estimated from an image acquired 5 days after landfall."
                : " — Landsat 5画像（30m解像度）を使用。上陸5日後の画像から平均浸水深0.64mを推定。"}
            </p>
            <p>
              <strong className="text-foreground">
                {en ? "Hurricane Florence (2018, Carolinas)" : "ハリケーンFlorence（2018年、カロライナ）"}
              </strong>
              {en
                ? " — AMSR2/GMI microwave satellite data (90m resolution) was used. Average flood depth was 0.92m. Deep flooding was detected in major river floodplains, with shallow to moderate flooding across wider areas."
                : " — AMSR2/GMIマイクロ波衛星データ（90m解像度）を使用。平均浸水深0.92m。主要河川の氾濫原で深い浸水、広域では浅〜中程度の浸水を検出。"}
            </p>
            <p>
              <strong className="text-foreground">
                {en ? "Sri Lanka Floods (May 2018)" : "スリランカ洪水（2018年5月）"}
              </strong>
              {en
                ? " — Sentinel-1b SAR imagery (10m resolution) was used. A case study applying FwDET to fragmented flood extents. Three DEMs were compared: ALOS (30m), HydroSHEDS (90m), and MERIT (90m)."
                : " — Sentinel-1b SAR画像（10m解像度）を使用。断片的な浸水域への適用事例。ALOS（30m）、HydroSHEDS（90m）、MERIT（90m）の3種のDEMを比較検証。"}
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── GEE Version (FwDET-GEE) ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "GEE Version (FwDET-GEE)" : "GEE版（FwDET-GEE）"}
          </h2>
          <p className="text-muted">
            {en
              ? "Peter et al. (2022) implemented FwDET on Google Earth Engine. Cloud-hosted DEM data (e.g. Copernicus GLO-30) can be used directly, eliminating the need for local data downloads or GIS software. Since flood depth estimation can be completed in the same GEE environment immediately after detecting flood extent from satellite imagery, disaster response time is significantly reduced."
              : "Peter et al. (2022) により、FwDETがGoogle Earth Engine上に実装されました。クラウド上のDEMデータ（Copernicus GLO-30等）を直接利用でき、ローカル環境でのデータダウンロードやGISソフトウェアが不要になりました。衛星画像から浸水範囲を検出した直後に、同じGEE環境で浸水深推定まで完結できるため、災害対応の時間を大幅に短縮できます。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Limitations and Caveats ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Limitations and Caveats" : "限界と注意点"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Euclidean Distance-Based" : "ユークリッド距離ベース"}
              </strong>
              {en
                ? " — The nearest boundary pixel is determined by straight-line distance, which can introduce errors in the presence of backwater effects or complex flow paths."
                : " — 最寄りの境界ピクセルを直線距離で決定するため、背水効果や複雑な流路がある場合に誤差が生じる。"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Urban Area Challenges" : "都市部の課題"}
              </strong>
              {en
                ? " — In high-resolution DEMs, building rooftops are treated as ground surface, creating non-flooded pixels within the flood extent and leading to boundary misidentification."
                : " — 高解像度DEMでは建物の屋根が地表面として扱われ、浸水域内に非浸水ピクセルが生じ、境界の誤認識につながる。"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Dependence on DEM Resolution" : "DEM解像度への依存"}
              </strong>
              {en
                ? " — Accuracy is particularly sensitive to DEM resolution in coastal areas where terrain gradients are small."
                : " — 特に沿岸部では地形勾配が小さいため、高解像度DEMが精度に大きく影響する。"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Acquisition Timing" : "撮影タイミング"}
              </strong>
              {en
                ? " — If the satellite image is temporally offset from the flood peak, the maximum flood depth cannot be captured."
                : " — 衛星画像が洪水ピークから時間的にずれると、最大浸水深を捕捉できない。"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Permanent Water Bodies" : "恒常的水域"}
              </strong>
              {en
                ? " — DEMs record the water surface elevation of rivers and lakes, not the riverbed elevation. Therefore, water depth tends to be overestimated in these areas."
                : " — DEMは河川・湖沼の水面標高を記録しており、河床標高ではないため、これらの領域では水深を過大評価する傾向がある。"}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Cohen, S., Brakenridge, G.R., Kettner, A. et al. (2018).
              Estimating Floodwater Depths from Flood Inundation Maps and Topography.
              <em>JAWRA</em>, 54(4), 847-858.
              DOI: 10.1111/1752-1688.12609
            </li>
            <li>
              Cohen, S., Raney, A., Munasinghe, D. et al. (2019).
              The Floodwater Depth Estimation Tool (FwDET v2.0) for improved remote sensing analysis of coastal flooding.
              <em>Natural Hazards and Earth System Sciences</em>, 19, 2053-2065.
              DOI: 10.5194/nhess-19-2053-2019
            </li>
            <li>
              Peter, B.G., Cohen, S., Lucey, R. et al. (2022).
              Google Earth Engine Implementation of the Floodwater Depth Estimation Tool (FwDET-GEE).
              <em>IEEE Geoscience and Remote Sensing Letters</em>, 19.
              DOI: 10.1109/LGRS.2020.3031190
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}

function Step({ num, title, children }: { num: number; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs text-background">
        {num}
      </span>
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="mt-1 text-muted">{children}</p>
      </div>
    </div>
  );
}
