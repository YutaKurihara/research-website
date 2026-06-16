"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

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
            2026-05-23
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "FLEXTH — A Framework for Estimating Flood Depth from Satellite Inundation Maps and Filling Observation Gaps"
              : "FLEXTH — 衛星浸水マップから浸水深を推定し、欠測域を補完するフレームワーク"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            Betterle, A. &amp; Salamon, P. (2024).
            Water depth estimate and flood extent enhancement for satellite-based inundation maps.
            <em> Natural Hazards and Earth System Sciences</em>, 24, 2817–2836.
          </p>
          <a href="https://doi.org/10.5194/nhess-24-2817-2024" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.5194/nhess-24-2817-2024
          </a>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">

        {/* ── Why Read This Paper ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Why Read This Paper" : "この論文を読むべき理由"}
          </h2>
          <p className="text-muted">
            {en
              ? <>
                  Even when satellite SAR detects the extent of flooding, that alone does not reveal <strong className="text-foreground">flood depth</strong>.
                  Flood depth is the most critical input for damage estimation, and existing tools such as FwDET are designed for small-scale catchments.
                  The <strong className="text-foreground">FLEXTH</strong> framework proposed in this study estimates water levels from DTM elevations at inundation boundaries, and further propagates flooding into SAR-unobservable areas (urban zones, beneath vegetation).
                  It is applicable to <strong className="text-foreground">regions spanning hundreds of thousands of km²</strong> and is characterised by computational efficiency that can process the 2022 Pakistan floods (2.43 million km²) in just 1.5 hours.
                  The Python code is released as open source.
                </>
              : <>
                  衛星SARで浸水範囲を検出しても、それだけでは<strong className="text-foreground">浸水深</strong>は分かりません。
                  浸水深は被害額推定の最も重要な入力であり、FwDETのような既存ツールは
                  小規模流域向けに設計されています。
                  本研究が提案する<strong className="text-foreground">FLEXTH</strong>は、
                  浸水境界のDTM標高から水位を推定し、さらにSARの欠測域（都市部・植生下）に
                  浸水を伝播させる機能を持つフレームワークです。
                  <strong className="text-foreground">数十万km²規模の広域</strong>に適用可能で、
                  2022年パキスタン洪水（243万km²）を1.5時間で処理できる計算効率が特徴です。
                  Pythonコードがオープンソースで公開されています。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Background and Challenges ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Background and Challenges" : "背景と課題"}
          </h2>
          <p className="text-muted">
            {en
              ? "SAR-based flood mapping has structural limitations."
              : "SARによる洪水マッピングには構造的な限界があります。"}
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Missing data under urban areas and vegetation" : "都市域・植生下の欠測"}
              </strong>
              {en
                ? " — SAR cannot detect water surfaces beneath buildings or dense vegetation, leaving gaps precisely where damage tends to concentrate"
                : " — SARは建物や密生植生の下の水面を検出できず、被害が集中する地域が欠測になる"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Lack of flood depth information" : "浸水深の欠如"}
              </strong>
              {en
                ? " — Satellite images only provide binary (flooded/not flooded) information, and cannot directly estimate flood depth, which is essential for damage assessment"
                : " — 衛星画像からは浸水の有無（二値）しか得られず、被害評価に不可欠な浸水深を直接推定できない"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Computational cost of existing methods" : "既存手法の計算コスト"}
              </strong>
              {en
                ? " — Existing tools such as FwDET require extensive processing time when applied over large areas (hours on GEE)"
                : " — FwDET等の既存ツールは広域適用時に処理時間が膨大（GEE版で数時間〜）"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Discontinuities from spatiotemporal image compositing" : "時空間的な画像合成の不連続"}
              </strong>
              {en
                ? " — Compositing SAR images from multiple orbits and acquisition times introduces artificial edges at inundation boundaries"
                : " — 複数軌道・複数時刻のSAR画像を合成すると、浸水域境界に不自然なエッジが生じる"}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── Method: Three Phases of FLEXTH ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Method: Three Phases of FLEXTH" : "手法：FLEXTHの3フェーズ"}
          </h2>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "Input Data" : "入力データ"}
          </h3>
          <div className="mb-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Input" : "入力"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Required" : "必須"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Description" : "説明"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Binary inundation map" : "浸水域バイナリマップ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Required" : "必須"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Flooded/non-flooded raster derived from SAR or similar" : "SAR等から導出された浸水/非浸水のラスター"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">DTM</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Required" : "必須"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Digital terrain model (FABDEM used in the Pakistan case)" : "地形モデル（パキスタン事例ではFABDEM使用）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Missing data mask" : "欠測域マスク"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Optional" : "任意"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "SAR-unobservable areas such as urban zones and vegetation" : "都市部・植生等のSAR欠測領域"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Permanent water body map" : "恒常的水域マップ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Optional" : "任意"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Permanent water surfaces of lakes and rivers" : "湖沼・河川の常時水面"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "Phase 1: Identifying Flood Boundaries" : "フェーズ1: 浸水境界の特定"}
          </h3>
          <p className="mb-4 text-muted">
            {en
              ? <>
                  A 3x3 cross-kernel morphological closing (applied twice) smooths the inundation outline and fills small gaps. Boundary pixels between flooded and non-flooded areas are then extracted via XOR of erosion and dilation. Boundaries adjacent to missing-data zones or permanent water bodies are excluded, and <strong className="text-foreground">pixels where the slope exceeds S<sub>max</sub> are also removed</strong> (because DTM elevations on steep terrain do not represent the actual flood water level).
                </>
              : <>
                  3×3クロスカーネルによるモルフォロジカルクロージング（2回）で浸水輪郭を整形し、
                  小さなギャップを埋めます。その後、侵食と膨張のXOR演算で浸水/非浸水の境界ピクセルを抽出。
                  欠測域や恒常的水域に隣接する境界は除外し、
                  <strong className="text-foreground">勾配がS<sub>max</sub>を超えるピクセルも除外</strong>します
                  （急傾斜地ではDTMの標高が浸水水位を代表しないため）。
                </>}
          </p>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "Phase 2: Estimating Water Level and Flood Depth" : "フェーズ2: 水位・浸水深の推定"}
          </h3>
          <p className="mb-3 text-muted">
            {en
              ? "Connected-component analysis identifies independent inundation zones, and the water level for each zone is estimated from DTM elevations of its boundary pixels. Two estimation methods are available."
              : "連結成分分析で独立した浸水域を識別し、各域ごとに境界ピクセルのDTM標高から水位を推定します。2種類の推定手法が用意されています。"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Method" : "手法"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Calculation" : "計算方法"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Characteristics" : "特徴"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Method A</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? <>Distance-weighted average of nearest N<sub>max</sub> points (w = 1/d<sup>α</sup>)</>
                      : <>最近傍N<sub>max</sub>点の距離加重平均（w = 1/d<sup>α</sup>）</>}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Stable and smooth" : "安定・滑らか"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Method B</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Percentile P of distance-weighted distribution"
                      : "距離加重分布のパーセンタイルP"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Flexibility for bias correction" : "バイアス補正の柔軟性"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>
                  For small inundation areas with fewer than N<sub>min</sub> boundary pixels, the P<sub>in</sub> percentile of within-zone DTM values is assigned as the water level. When the estimated water level falls below the ground elevation, a virtual flood depth WD* is added to maintain consistency.
                </>
              : <>
                  境界ピクセルがN<sub>min</sub>未満の小面積浸水域には、
                  域内DTM値のP<sub>in</sub>パーセンタイルを水位として割り当てます。
                  推定水位が地盤高より低い場合は仮想浸水深WD*を加算して整合性を保ちます。
                </>}
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">
            {en ? "Phase 3: Flood Propagation into Missing Data Areas" : "フェーズ3: 欠測域への浸水伝播"}
          </h3>
          <p className="mb-3 text-muted">
            {en
              ? <>
                  For pixels within missing-data masks, water levels are propagated from adjacent inundated areas using a <strong className="text-foreground">forward explicit scheme</strong>. The propagation distance is limited by a maximum distance d<sub>max</sub>(A) that depends on the inundation area A.
                </>
              : <>
                  欠測マスク内のピクセルに対し、隣接する浸水域から水位を
                  <strong className="text-foreground">前進陽的スキーム</strong>で伝播します。
                  伝播距離は浸水面積Aに依存する最大距離d<sub>max</sub>(A)で制限されます。
                </>}
          </p>
          <p className="mb-3 text-muted">
            {en
              ? "Propagation requires four conditions: (1) the target pixel is within a missing-data zone, (2) its DTM elevation is lower than the source water level, (3) the estimated water level is lower than the source (water flows only downward), and (4) the pixel is unprocessed. Finally, a 5×5 circular filter (20 iterations) ensures a smooth water surface."
              : "伝播の条件は4つ: (1) 対象ピクセルが欠測域内、(2) DTMが伝播元の水位より低い、(3) 推定水位が伝播元より低い（水は下がる方向のみ）、(4) 未処理のピクセル。最後に5×5円形フィルタ（20回反復）で水面の滑らかさを確保します。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Validation 1: 2022 Pakistan Floods ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Validation 1: 2022 Pakistan Floods" : "検証1: 2022年パキスタン洪水"}
          </h2>

          <p className="mb-3 text-muted">
            {en
              ? <>
                  The study targets the 2022 Indus River mega-floods (July–September; over 1,700 deaths, approximately 33 million people affected, direct damages of around EUR 20 billion). The analysis covers 2.43 million km², processing <strong className="text-foreground">approximately 100 million pixels (20 m resolution)</strong>.
                </>
              : <>
                  2022年7〜9月のインダス川大洪水（死者1,700人以上、被災者約3,300万人、
                  直接被害約200億ユーロ）を対象。対象面積243万km²、
                  <strong className="text-foreground">約1億ピクセル（20m解像度）</strong>を処理しています。
                </>}
          </p>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "Effect of Inundation Extent Enhancement" : "浸水域拡張の効果"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Item" : "項目"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "GFM original data" : "GFM元データ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "After FLEXTH enhancement" : "FLEXTH拡張後"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Inundation area" : "浸水面積"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">39,333 km²</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "61,331 km² (+56%)" : "61,331 km²（+56%）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>
                  Compared against optical reference data from the Copernicus Emergency Mapping Service (CEMS) (SPOT 6/7, 3 AOIs, 3,000 km²), the enhancement <strong className="text-foreground">reduced False Negatives and improved CSI</strong>.
                </>
              : <>
                  Copernicus緊急マッピングサービス（CEMS）の光学画像基準データ（SPOT 6/7、3 AOI、3,000 km²）と
                  比較し、拡張により<strong className="text-foreground">False Negativeが減少、CSIが向上</strong>しています。
                </>}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Flood Depth Validation (ICESat-2)" : "浸水深の検証（ICESat-2）"}
          </h3>
          <p className="text-muted">
            {en
              ? <>
                  A 500 km track of ICESat-2 laser altimetry (sampling interval ~1 m/point) was compared between a flood-time acquisition (3 September 2022) and a dry-time acquisition (6 June 2021). Adding the FLEXTH-estimated flood depth <strong className="text-foreground">correctly shifts the mode of the elevation difference distribution to near zero</strong>. However, a tendency toward underestimation of flood depth remains, attributable to underestimation of the SAR-derived inundation extent itself and the fact that the ICESat-2 acquisition was close to the flood peak.
                </>
              : <>
                  ICESat-2レーザー高度計（サンプリング間隔~1m/点）の洪水時（2022年9月3日）と
                  乾燥時（2021年6月6日）の500 kmトラックを比較。
                  FLEXTH推定浸水深を加算すると、乾燥時との標高差分布のモードが
                  <strong className="text-foreground">正しくゼロ付近に補正</strong>されます。
                  ただし浸水深の過小評価傾向が残り、これはSARの浸水範囲自体の過小評価と、
                  ICESat-2取得が洪水ピークに近いタイミングだったことに起因しています。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Validation 2: Comparison with Hydraulic Simulations ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Validation 2: Comparison with Hydraulic Simulations" : "検証2: 水理シミュレーションとの比較"}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Test case" : "テストケース"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Brazos River (USA)" : "Brazos川（米国）"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Tera–Órbigo–Esla confluence (Spain)" : "Tera–Órbigo–Esla合流点（スペイン）"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Reference model" : "参照モデル"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">BASEMENT 4.0.2（2D-SWE）</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "InfoWorks RS (steady-state 2D-SWE)" : "InfoWorks RS（定常2D-SWE）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Mesh elements" : "メッシュ要素数"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "4.5 million (~50 m²/element)" : "450万（~50 m²/要素）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">&mdash;</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Inundation area" : "浸水面積"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">103 km²</td>
                  <td className="border border-border px-3 py-2 text-muted">256 km²</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Mean flood depth" : "平均浸水深"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "1.34 m (SD: 2.41 m)" : "1.34 m（SD: 2.41 m）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "1.29 m (SD: 1.46 m)" : "1.29 m（SD: 1.46 m）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "FLEXTH processing time" : "FLEXTH処理時間"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "30 seconds" : "30秒"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "45 minutes" : "45分"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "FwDET processing time" : "FwDET処理時間"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "9 min (GEE)" : "9分（GEE）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "7.6 hours (GEE)" : "7.6時間（GEE）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            {en
              ? <>
                  In both cases, FLEXTH showed <strong className="text-foreground">lower RMSE and less bias</strong> than FwDET. Whereas FwDET is sensitive to local DTM features (bridges, etc.) and produces unrealistic depth discontinuities, FLEXTH&apos;s water level estimates maintain a <strong className="text-foreground">smooth and realistic spatial pattern</strong>.
                </>
              : <>
                  両ケースとも、FLEXTHはFwDETより<strong className="text-foreground">低いRMSEと少ないバイアス</strong>を示しました。
                  FwDETがDTMの局所的特徴（橋梁等）に敏感で非現実的な水深の不連続を生じるのに対し、
                  FLEXTHの水位推定は<strong className="text-foreground">滑らかで現実的な空間パターン</strong>を維持しています。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Robustness of Missing Data Interpolation ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Robustness of Missing Data Interpolation" : "欠測域補完の頑健性"}
          </h2>
          <p className="text-muted">
            {en
              ? "The performance of the flood propagation component was evaluated by progressively applying artificial missing-data masks to the Brazos River simulation results."
              : "Brazos川のシミュレーション結果に対し、人工的な欠測マスクを段階的に適用して浸水伝播コンポーネントの性能を評価しています。"}
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "At 70% masking" : "70%マスク時"}
              </strong>
              {en
                ? ": the original inundation extent was recovered to within 10% accuracy"
                : ": 元の浸水域を10%精度で復元"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "At 50% masking" : "50%マスク時"}
              </strong>
              {en
                ? ": the mean absolute error of flood depth was only 20 cm"
                : ": 浸水深の平均絶対誤差わずか20 cm"}
            </li>
          </ul>
          <p className="mt-2 text-muted">
            {en
              ? "This demonstrates that terrain-based propagation can reasonably reconstruct both flood extent and depth even under extremely widespread data gaps."
              : "極めて広範な欠測域でも、地形データに基づく伝播が浸水範囲と深さの両方を合理的に再構築できることを示しています。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Key Parameters and Their Sensitivity ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Key Parameters and Their Sensitivity" : "主要パラメータとその感度"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Parameter" : "パラメータ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Role" : "役割"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Sensitivity" : "感度"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">S<sub>max</sub></td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Maximum slope threshold at boundary" : "境界の最大勾配閾値"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "High (critical on steep terrain)" : "高（急傾斜地で重要）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">N<sub>max</sub></td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Maximum reference points for water level estimation" : "水位推定に使う最大参照点数"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Medium (50–500, resolution-dependent)" : "中（50–500、解像度に依存）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">&alpha;</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Distance weighting decay exponent" : "距離加重の減衰指数"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Medium (1–3, lower values yield smoother results)" : "中（1–3、低値で滑らか）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">D<sub>max</sub></td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Maximum propagation distance" : "最大伝播距離"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Medium (controls large-scale gradient)" : "中（広域勾配を制御）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Filter kernel shape" : "フィルタカーネル形状"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Morphological operation window" : "モルフォロジー演算の窓"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Low (negligible impact on results)" : "低（結果にほぼ影響なし）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Limitations ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Limitations" : "限界"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Dependent on input inundation map accuracy" : "入力浸水マップの精度に依存"}
              </strong>
              {en
                ? ": errors in inundation boundaries directly affect depth estimates, with particularly large impact on steep terrain"
                : ": 浸水境界の誤りは水深推定に直結し、特に急傾斜地で影響が大きい"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Impact of DTM resolution" : "DTM解像度の影響"}
              </strong>
              {en
                ? ": coarse DTMs introduce elevation errors on steep terrain that substantially distort water level estimates"
                : ": 粗いDTMでは急傾斜域の標高誤差が水位推定を大きく歪める"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Tendency to underestimate flood depth" : "浸水深の過小評価傾向"}
              </strong>
              {en
                ? ": in the Pakistan case study, underestimation remained compared to ICESat-2, caused by underestimation of the SAR inundation extent itself and the timing offset of satellite acquisition"
                : ": パキスタン事例ではICESat-2との比較で過小評価が残存。SAR浸水範囲の過小評価と衛星取得タイミングのずれが原因"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Artefacts from spatiotemporal compositing" : "時空間合成のアーティファクト"}
              </strong>
              {en
                ? ": compositing SAR images from multiple orbits produces sharp edges that affect water level estimation"
                : ": 複数軌道のSAR画像を合成する際にシャープなエッジが生じ、水位推定に影響"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Boundaries with permanent water bodies" : "恒常的水域との境界"}
              </strong>
              {en
                ? ": a tendency to underestimate water levels at interfaces with extensive water bodies"
                : ": 広大な水域インターフェースで水位を過小評価する傾向がある"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Uncertainty in flat terrain" : "平坦地の不確実性"}
              </strong>
              {en
                ? ": while tolerant of boundary errors, small water level differences translate into large variations in inundation extent"
                : ": 浸水境界の誤差に寛容だが、微小な水位差が大きな浸水範囲変動に変換される"}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── Comparison with FwDET ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Comparison with FwDET" : "FwDETとの比較"}
          </h2>
          <p className="text-muted">
            {en
              ? "FLEXTH demonstrates the following advantages over the existing FwDET (GEE version)."
              : "FLEXTHは既存のFwDET（GEE版）に対して以下の優位性を示しています。"}
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Accuracy" : "精度"}
              </strong>
              {en
                ? ": outperforms FwDET in both RMSE and bias across both test cases"
                : ": 両テストケースでRMSE・バイアスともにFwDETを上回る"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Computational speed" : "計算速度"}
              </strong>
              {en
                ? ": 30 seconds vs 9 minutes for Brazos River; 45 minutes vs 7.6 hours for the Spain case"
                : ": Brazos川で30秒 vs 9分、スペイン事例で45分 vs 7.6時間"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Spatial consistency" : "空間的整合性"}
              </strong>
              {en
                ? ": while FwDET produces unrealistic discontinuities from local DTM features (bridges, etc.), FLEXTH generates smooth water surfaces"
                : ": FwDETがDTMの局所特徴（橋梁等）で非現実的な不連続を生じるのに対し、FLEXTHは滑らかな水面を生成"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Missing data handling" : "欠測域対応"}
              </strong>
              {en
                ? ": the flood propagation capability, absent in FwDET, enables interpolation under urban areas and vegetation"
                : ": FwDETにはない浸水伝播機能により、都市部・植生下の補完が可能"}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── Practical Implications ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Practical Implications" : "実務への示唆"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Faster large-scale damage assessment" : "広域被害評価の高速化"}
              </strong>
              {en
                ? ": by combining satellite inundation maps such as GFM with FABDEM, flood depth maps spanning hundreds of thousands of km² can be generated in just a few hours"
                : ": GFM等の衛星浸水マップにFABDEMを組み合わせるだけで、数十万km²の浸水深マップを数時間で生成可能"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Urban area gap-filling" : "都市域の補完"}
              </strong>
              {en
                ? ": terrain-based propagation compensates for the structural weakness of SAR in urban areas, reducing information gaps in damage-concentrated zones"
                : ": SARの構造的弱点である都市部の欠測を地形ベースで補完し、被害集中域の情報欠落を軽減"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Applicable to riverine, coastal, and pluvial flooding" : "河川・沿岸・内水氾濫に適用可能"}
              </strong>
              {en
                ? ": coastal flooding in particular offers favourable conditions due to gentle terrain gradients and limited water level variation"
                : ": 特に沿岸洪水では地形勾配が小さく水位変動も限定的なため、好条件で適用できる"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Integration with Copernicus GFM" : "Copernicus GFMとの統合"}
              </strong>
              {en
                ? ": planned for incorporation as post-processing within JRC’s Global Flood Monitoring product"
                : ": JRCのGlobal Flood Monitoringプロダクトの後処理として組み込みが計画されている"}
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
              Betterle, A. &amp; Salamon, P. (2024).
              Water depth estimate and flood extent enhancement for satellite-based inundation maps.
              <em> Natural Hazards and Earth System Sciences</em>, 24, 2817–2836.
              DOI: 10.5194/nhess-24-2817-2024
            </li>
            <li>
              Cohen, S. et al. (2018). Estimating floodwater depths from flood inundation maps and topography.
              <em> Journal of the American Water Resources Association</em>, 54(4), 847–858.
            </li>
            <li>
              Peter, B. G. et al. (2022). Google Earth Engine implementation of the Floodwater Depth Estimation Tool (FwDET-GEE).
              <em> Water</em>, 14, 1272.
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted">
            <a href="https://code.europa.eu/floods/floods-river/flexth" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">
              {en ? "GitLab (Python code)" : "GitLab（Pythonコード）"}
            </a>
          </p>
        </section>

      </article>
    </div>
  );
}
