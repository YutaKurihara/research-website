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
            2026-04-20
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "SAR Satellite x Hydraulic Models — A Systematic Review of Remote Sensing Approaches to Improve Flood Prediction"
              : "SAR衛星×水理モデル — リモートセンシングで洪水予測を高精度化するアプローチの体系的整理"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            Grimaldi, S., Li, Y., Pauwels, V.R.N., &amp; Walker, J.P. (2016).
            Remote Sensing-Derived Water Extent and Level to Constrain Hydraulic Flood
            Forecasting Models: Opportunities and Challenges.
            <em> Surveys in Geophysics</em>, 37, 977-1034.
          </p>
          <a href="https://doi.org/10.1007/s10712-016-9378-y" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.1007/s10712-016-9378-y
          </a>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Why Read This Paper" : "この論文を読むべき理由"}
          </h2>
          <p className="text-muted">
            {en
              ? <>
                  SAR-based flood extent extraction and 2D hydraulic flood simulation are each widely used individually.
                  This review systematically examines <strong className="text-foreground">how combining these two approaches
                  can fundamentally improve the accuracy and reliability of flood prediction</strong>.
                  It discusses how two types of observational information extractable from SAR imagery
                  &mdash; &ldquo;flood extent&rdquo; and &ldquo;water level&rdquo; &mdash; can be utilized at three stages:
                  <strong className="text-foreground"> calibration</strong>,
                  <strong className="text-foreground"> validation</strong>, and
                  <strong className="text-foreground"> data assimilation (real-time updating)</strong>,
                  along with specific methods, accuracies, and limitations.
                </>
              : <>
                  SAR衛星で洪水範囲を抽出する技術と、2D水理モデルで浸水域を計算するシミュレーション。
                  この2つは個別には広く使われていますが、
                  <strong className="text-foreground">両者をどう組み合わせれば洪水予測の精度と信頼性を
                  本質的に向上させられるのか</strong>を体系的に整理したレビューが本論文です。
                  SAR画像から抽出できる「浸水範囲」と「水位」の2種類の観測情報が、
                  水理モデルの<strong className="text-foreground">キャリブレーション（較正）</strong>・
                  <strong className="text-foreground">バリデーション（検証）</strong>・
                  <strong className="text-foreground">データ同化（リアルタイム更新）</strong>
                  という3つの段階でそれぞれどのように活用できるかを、
                  具体的な手法・精度・限界とともに論じています。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Background — Why Integrate SAR with Hydraulic Models" : "背景 — なぜSARと水理モデルを統合するのか"}
          </h2>
          <p className="text-muted">
            {en
              ? "Mitigating flood damage requires spatially predicting inundation extent, arrival time, water depth, and flow velocity. However, hydraulic models alone face the following challenges:"
              : "洪水被害の軽減には、浸水域の到達時間・水深・流速を空間的に予測する必要があります。しかし、水理モデル単独での予測には以下の課題があります："}
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Insufficient terrain data" : "地形データの不足"}
              </strong>
              {en
                ? " — Floodplain micro-topography (levees, channels, structures) cannot be represented at typical DEM resolutions. Even SRTM (90 m) or Copernicus GLO-30 fail to capture embankment fills"
                : " — 氾濫原の微地形（堤防・水路・構造物）がDEMの解像度では表現できない。SRTM（90m）やCopernicus GLO-30でも堤防の盛土を捕らえきれない"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Uncertainty in friction coefficients (Manning’s n)" : "摩擦係数（Manning’s n）の不確実性"}
              </strong>
              {en
                ? " — Roughness varies with seasonal changes in land use and vegetation, yet literature values are often uniformly applied"
                : " — 土地利用や植生の季節変化により粗度が変動するが、多くの場合は文献値を一律に適用している"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Boundary condition errors" : "境界条件の誤差"}
              </strong>
              {en
                ? " — Errors in upstream flow hydrographs and rainfall-runoff model outputs propagate into the hydraulic model"
                : " — 上流の流量ハイドログラフや降雨-流出モデルの出力に含まれる誤差が水理モデルに伝播する"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Spatial constraints of validation data" : "検証データの空間的制約"}
              </strong>
              {en
                ? " — Water level gauges provide point observations, which are insufficient for validating 2D model areal outputs (inundation extent and depth distribution)"
                : " — 水位計は点観測であり、2Dモデルの面的な出力（浸水範囲・浸水深分布）の検証には不十分"}
            </li>
          </ul>
          <p className="mt-3 text-muted">
            {en
              ? <>
                  SAR satellites can provide <strong className="text-foreground">areal, all-weather, and repeated observational information</strong> to address these challenges.
                  In particular, Sentinel-1&apos;s 6&ndash;12 day revisit cycle enables multiple observations during a flood event,
                  making not only static validation but also dynamic model updating (data assimilation) practically feasible.
                </>
              : <>
                  SAR衛星は、これらの課題に対して
                  <strong className="text-foreground">面的・全天候・反復的な観測情報</strong>
                  を提供できます。特にSentinel-1の6〜12日再訪周期により、
                  洪水イベント中に複数回の観測が期待できるようになり、
                  静的な検証だけでなく動的なモデル更新（データ同化）が現実的になりました。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Two Types of Flood Information Extractable from SAR" : "SARから抽出できる2種類の洪水情報"}
          </h2>
          <p className="text-muted">
            {en
              ? <>
                  This review classifies SAR-derived information usable in hydraulic models into two categories:
                  <strong className="text-foreground"> flood extent</strong> and
                  <strong className="text-foreground"> water level (stage)</strong>.
                </>
              : <>
                  本レビューでは、SAR画像から水理モデルに投入可能な情報を
                  <strong className="text-foreground">浸水範囲（Flood Extent）</strong>と
                  <strong className="text-foreground">水位（Water Level / Stage）</strong>
                  の2カテゴリに分類しています。
                </>}
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Information" : "情報"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Extraction Method" : "抽出手法"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Accuracy" : "精度"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Use in Hydraulic Models" : "水理モデルでの用途"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Flood extent" : "浸水範囲"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Thresholding, change detection, ML classification (Random Forest, CNN, etc.)"
                      : "閾値法、変化検出、機械学習分類（Random Forest, CNN等）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "F1 = 0.7–0.9 (land cover dependent)"
                      : "F1 = 0.7〜0.9（土地被覆に依存）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Calibration, validation, data assimilation"
                      : "キャリブレーション、バリデーション、データ同化"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Water level" : "水位"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Estimated from intersection of flood boundary and DEM (water-land boundary method)"
                      : "浸水境界線とDEMの交差から推定（水陸境界法）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "RMSE = 0.5–1.5 m (DEM accuracy dependent)"
                      : "RMSE = 0.5〜1.5m（DEM精度に依存）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Calibration, data assimilation (spatial complement to gauges)"
                      : "キャリブレーション、データ同化（水位計の空間補完）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>
                  The accuracy of water level estimation strongly depends on the vertical accuracy of the DEM used.
                  Hostache et al. (2009) demonstrated that combining SAR-derived flood boundaries with LiDAR DEM
                  can <strong className="text-foreground">estimate water levels with a mean accuracy of &plusmn;54 cm</strong>.
                  However, errors of 1&ndash;2 m remain when using coarser DEMs such as SRTM.
                </>
              : <>
                  水位推定の精度は、使用するDEMの鉛直精度に強く依存します。
                  Hostache et al. (2009) は、SAR画像から抽出した浸水境界線と
                  LiDAR DEMを組み合わせることで、
                  <strong className="text-foreground">平均±54cmの精度で水位を推定</strong>
                  できることを示しました。ただし、SRTM等の粗いDEMでは
                  1〜2m程度の誤差が生じます。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Three Stages of Integration — Calibration, Validation, and Data Assimilation"
              : "統合の3段階 — キャリブレーション・バリデーション・データ同化"}
          </h2>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "1. Calibration" : "1. キャリブレーション（モデル較正）"}
          </h3>
          <p className="text-muted">
            {en
              ? <>
                  This approach uses SAR-derived flood extents as &ldquo;ground truth&rdquo; to optimize
                  <strong className="text-foreground"> Manning&apos;s n (roughness coefficient)</strong> and
                  <strong className="text-foreground"> channel cross-section geometry</strong> in the hydraulic model.
                </>
              : <>
                  SAR由来の浸水範囲を「正解データ」として、水理モデルの
                  <strong className="text-foreground">Manning&apos;s n（粗度係数）</strong>や
                  <strong className="text-foreground">河道断面形状</strong>を最適化する手法です。
                </>}
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Method" : "手法"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Overview" : "概要"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Comparison Metric" : "比較指標"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Binary pattern comparison" : "バイナリパターン比較"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Search for parameters that maximize pixel-wise agreement between modeled and SAR-derived flood extents"
                      : "モデル浸水域とSAR浸水域のピクセル一致率を最大化するようにパラメータを探索"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "F statistic = A∩B / (A∪B), Critical Success Index"
                      : "F統計量 = A∩B / (A∪B)、Critical Success Index"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Stage-based calibration" : "水位ベース較正"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Minimize RMSE between SAR+DEM-estimated water levels and model water level outputs"
                      : "SAR＋DEMから推定した水位と、モデルの水位出力のRMSEを最小化"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "RMSE (water level), Nash-Sutcliffe Efficiency"
                      : "RMSE（水位）、Nash-Sutcliffe効率"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">GLUE + SAR</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Use SAR flood extent as rejection criterion in Generalized Likelihood Uncertainty Estimation (GLUE)"
                      : "一般化尤度不確実性推定（GLUE）のリジェクション基準にSAR浸水範囲を使用"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Posterior parameter distribution (uncertainty quantification)"
                      : "パラメータの事後分布（不確実性の定量化）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>
                  Di Baldassarre et al. (2009) demonstrated that calibration using SAR flood extents
                  <strong className="text-foreground"> reduced the uncertainty range of Manning&apos;s n
                  by approximately 50%, from 0.01&ndash;0.10 to 0.03&ndash;0.06</strong>.
                </>
              : <>
                  Di Baldassarre et al. (2009) は、SAR浸水範囲による較正で
                  <strong className="text-foreground">Manning&apos;s nの不確実性幅を
                  従来の0.01〜0.10から0.03〜0.06に約50%縮小</strong>
                  できることを示しました。
                </>}
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">
            {en ? "2. Validation (Independent Verification)" : "2. バリデーション（独立検証）"}
          </h3>
          <p className="text-muted">
            {en
              ? <>
                  Model prediction performance is independently verified using SAR images from events not used for calibration.
                  A major advantage of SAR over conventional gauge-based point verification is the ability to evaluate
                  <strong className="text-foreground"> areal agreement of flood extents</strong>.
                  Multi-source verification from multiple SAR sensors (Sentinel-1, ALOS-2 PALSAR, RADARSAT, etc.)
                  also enables assessment of sensor-specific biases.
                </>
              : <>
                  較正に使用していない別イベントのSAR画像で、モデルの予測性能を
                  独立に検証します。従来の水位計による点検証に加えて、
                  <strong className="text-foreground">浸水域の面的な一致度</strong>を評価できる点がSARの大きな利点です。
                  複数のSARセンサー（Sentinel-1, ALOS-2 PALSAR, RADARSAT等）からの
                  マルチソース検証により、センサー固有のバイアスも評価可能です。
                </>}
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">
            {en ? "3. Data Assimilation (Real-Time Updating)" : "3. データ同化（リアルタイム更新）"}
          </h3>
          <p className="text-muted">
            {en
              ? <>
                  The most advanced approach is data assimilation, which
                  <strong className="text-foreground"> sequentially assimilates SAR observations into the hydraulic model</strong> to
                  update predictions in real time.
                </>
              : <>
                  最も先進的なアプローチが、
                  <strong className="text-foreground">SAR観測を水理モデルに逐次同化</strong>して
                  予測をリアルタイムに更新するデータ同化です。
                </>}
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Assimilation Method" : "同化手法"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Overview" : "概要"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Application Example" : "適用事例"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">EnKF</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Ensemble Kalman Filter. Updates model state variables (water level, discharge) using SAR observations"
                      : "アンサンブルカルマンフィルタ。モデルの状態変数（水位・流量）をSAR観測で更新"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Hostache et al. (2018): 30% improvement in water level RMSE on the Alzette River"
                      : "Hostache et al. (2018): Alzette川で水位RMSE 30%改善"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Particle filter" : "粒子フィルタ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Nonlinear/non-Gaussian state estimation. Uses SAR-derived flood probability maps as likelihood"
                      : "非線形・非ガウスの状態推定。SAR由来の浸水確率マップを尤度として使用"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Hostache et al. (2021): LISFLOOD-FP + Sentinel-1 probability maps"
                      : "Hostache et al. (2021): LISFLOOD-FP + Sentinel-1確率マップ"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Digital Twin</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Continuously running a hydraulic model twin, synchronizing with SAR observations"
                      : "水理モデルの双子を常時稼働させ、SAR観測で継続的に同期"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Proof of concept in the 2025 Alzette flood"
                      : "2025年のAlzette洪水での概念実証（proof of concept）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>
                  Hostache et al. (2018) built a framework for sequentially assimilating Sentinel-1 SAR imagery into a
                  cascade of a conceptual hydrological model and LISFLOOD-FP hydraulic model, demonstrating that
                  <strong className="text-foreground"> water level prediction RMSE could be improved by up to 30%</strong> compared to no assimilation.
                  A follow-up study in 2021 extended the approach to assimilating
                  <strong className="text-foreground"> probabilistic flood maps</strong> rather than binary wet/dry maps from SAR imagery.
                </>
              : <>
                  Hostache et al. (2018) は、概念的水文モデル + LISFLOOD-FP水理モデルの
                  カスケードにSentinel-1 SAR画像を逐次同化するフレームワークを構築し、
                  <strong className="text-foreground">同化なしに比べて水位予測の
                  RMSEを最大30%改善</strong>できることを実証しました。
                  2021年の後続研究では、SAR画像から「浸水/非浸水」の二値マップではなく
                  <strong className="text-foreground">確率的浸水マップ</strong>を同化する手法に
                  拡張されています。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Representative Hydraulic Models and SAR Integration Compatibility"
              : "代表的な水理モデルとSAR統合の適合性"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Model" : "モデル"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Dimension" : "次元"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Governing Equations" : "支配方程式"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "SAR Integration Track Record" : "SAR統合の実績"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">LISFLOOD-FP</td>
                  <td className="border border-border px-3 py-2 text-muted">1D/2D</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Simplified inertial equation" : "簡略化慣性方程式"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Most extensive. Rich track record with EnKF and particle filter assimilation" : "最多。EnKF・粒子フィルタ同化の実績豊富"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">HEC-RAS</td>
                  <td className="border border-border px-3 py-2 text-muted">1D/2D</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Full Saint-Venant / diffusion wave" : "完全Saint-Venant / 拡散波"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Numerous calibration and validation cases using SAR flood extents" : "SAR浸水範囲での較正・検証事例多数"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">TELEMAC-2D</td>
                  <td className="border border-border px-3 py-2 text-muted">2D</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Full shallow water equations (FEM)" : "完全浅水方程式（FEM）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Applications on large rivers" : "大規模河川での適用事例"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">RRI</td>
                  <td className="border border-border px-3 py-2 text-muted">2D</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Diffusion wave (integrated rainfall-runoff)" : "拡散波（降雨-流出一体型）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Suitable for validation using SAR flood extents" : "SAR浸水範囲での検証に適する"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">FwDET</td>
                  <td className="border border-border px-3 py-2 text-muted">&mdash;</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Cost-distance method (simplified estimation)" : "コスト距離法（簡易推定）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Direct flood depth estimation from SAR flood extent + DEM" : "SAR浸水範囲 + DEMから浸水深を直接推定"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>
                  LISFLOOD-FP adopts a simplified inertial equation, resulting in low computational cost that makes
                  <strong className="text-foreground"> hundreds to thousands of ensemble runs</strong> required for data assimilation
                  feasible within realistic timeframes. This is why it is the most frequently used model in SAR assimilation research.
                </>
              : <>
                  LISFLOOD-FPは簡略化慣性方程式を採用しているため計算コストが低く、
                  データ同化に必要な<strong className="text-foreground">数百〜数千回の
                  アンサンブルラン</strong>が現実的な時間内で可能です。
                  これがSAR同化研究で最も多く使用されている理由です。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "What Can Be Done on Google Earth Engine" : "Google Earth Engineで何ができるか"}
          </h2>
          <p className="text-muted">
            {en
              ? <>
                  GEE does not include a 2D hydraulic solver (e.g., Saint-Venant solver), so
                  <strong className="text-foreground"> full hydraulic simulations are not possible with GEE alone</strong>.
                  However, much of the <strong className="text-foreground">pre-processing, post-processing, and simplified estimation</strong> in
                  the SAR x hydraulic model integration workflow can be executed on GEE.
                </>
              : <>
                  GEEは2D水理モデルの求解器（Saint-Venantソルバー等）を内蔵していないため、
                  <strong className="text-foreground">本格的な水理シミュレーションはGEE単体では不可能</strong>
                  です。しかし、SAR×水理モデル統合ワークフローの
                  <strong className="text-foreground">前処理・後処理・簡易推定</strong>
                  の多くはGEE上で実行できます。
                </>}
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Process" : "処理"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Possible on GEE?" : "GEEで可能か"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Available Tools / Data" : "利用可能なツール・データ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "SAR flood extent extraction" : "SAR浸水範囲抽出"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Yes" : "可能"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Sentinel-1 GRD + thresholding / change detection. UN-SPIDER recommended methods available"
                      : "Sentinel-1 GRD + 閾値法/変化検出。UN-SPIDERの推奨手法あり"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Deep learning flood classification" : "深層学習による浸水分類"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Yes" : "可能"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "DeepSAR Flood Mapper (MLP + Sentinel-1 + HAND). Public app available"
                      : "DeepSAR Flood Mapper（MLP + Sentinel-1 + HAND）。公開アプリあり"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Simplified flood depth estimation" : "浸水深の簡易推定"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Yes" : "可能"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "FwDET (cost-distance method). SAR flood extent + Copernicus DEM"
                      : "FwDET（コスト距離法）。SAR浸水範囲 + Copernicus DEM"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Water level estimation (water-land boundary method)" : "水位推定（水陸境界法）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Yes" : "可能"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Flood boundary polygon + DEM → ee.Image.reduceRegion for median elevation"
                      : "浸水境界ポリゴン + DEM → ee.Image.reduceRegion で標高中央値を取得"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "HAND (Height Above Nearest Drainage)" : "HAND（最近接水系との比高）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Yes" : "可能"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "MERIT Hydro HAND available in the GEE catalog"
                      : "MERIT Hydro HAND がGEEカタログに収録済み"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Manning’s n map generation" : "Manning’s n マップ作成"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Yes" : "可能"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "ESA WorldCover / Dynamic World → land cover classification → assign roughness coefficients"
                      : "ESA WorldCover / Dynamic World → 土地被覆分類 → 粗度係数を割当"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "2D hydraulic simulation" : "2D水理シミュレーション"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "No" : "不可"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "LISFLOOD-FP / HEC-RAS / RRI run locally or on HPC"
                      : "LISFLOOD-FP / HEC-RAS / RRI はローカルまたはHPC上で実行"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Data assimilation (EnKF, etc.)" : "データ同化（EnKF等）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "No" : "不可"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Requires external implementation in Python (filterpy, DART, etc.)"
                      : "Python（filterpy, DART等）で外部実装が必要"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Notable GEE Tool: DeepSAR Flood Mapper" : "GEE上の注目ツール: DeepSAR Flood Mapper"}
          </h3>
          <p className="text-muted">
            {en
              ? <>
                  Published in 2025, DeepSAR Flood Mapper is an open-source application that
                  <strong className="text-foreground"> fully automatically executes an MLP model on GEE</strong> using
                  Sentinel-1 VV/VH polarization and MERIT Hydro HAND data as inputs.
                  It employs an &ldquo;Offline Training / Online Prediction&rdquo; strategy, implementing pre-trained model weights
                  in GEE&apos;s ee.Classifier, allowing users to generate flood maps by simply specifying an AOI and date range.
                  Improved accuracy over Otsu thresholding and SVM has been reported.
                </>
              : <>
                  2025年に発表されたDeepSAR Flood Mapperは、
                  Sentinel-1のVV/VH偏波とMERIT Hydro HANDデータを入力とする
                  <strong className="text-foreground">MLPモデルをGEE上で完全自動実行</strong>する
                  オープンソースアプリケーションです。
                  学習済みモデルの重みをGEEのee.Classifierに実装する
                  「Offline Training / Online Prediction」戦略を採用しており、
                  ユーザーはAOIと日付を指定するだけで浸水マップを生成できます。
                  Otsu閾値法やSVMに対して精度が向上することが報告されています。
                </>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Practical Integration Workflow" : "実用的な統合ワークフロー"}
          </h2>
          <p className="text-muted">
            {en
              ? "Based on the findings of this review and current GEE capabilities, SAR x hydraulic model integration can be realized through the following workflow:"
              : "本レビューの知見と現在のGEE機能を踏まえると、SAR×水理モデルの統合は以下のワークフローで実現できます："}
          </p>
          <ol className="mt-3 ml-4 list-decimal space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Extract SAR flood extent on GEE" : "GEE上でSAR浸水範囲を抽出"}
              </strong>
              {en
                ? " — Sentinel-1 + change detection or DeepSAR. Apply masking (slope, permanent water bodies, land cover)"
                : " — Sentinel-1 + 変化検出法 or DeepSAR。マスク処理（傾斜、恒常水域、土地被覆）を適用"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Estimate water levels on GEE" : "GEE上で水位を推定"}
              </strong>
              {en
                ? " — Flood boundary x Copernicus DEM. Construct water level profiles at multiple cross-sections"
                : " — 浸水境界線 × Copernicus DEM。複数の断面で水位プロファイルを構築"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Generate Manning’s n map on GEE" : "GEE上でManning’s nマップを生成"}
              </strong>
              {en
                ? " — Assign roughness coefficients via lookup table to ESA WorldCover classification results"
                : " — ESA WorldCover分類結果にルックアップテーブルで粗度係数を割当"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Run hydraulic model locally" : "ローカルで水理モデルを実行"}
              </strong>
              {en
                ? " — Input terrain, roughness, and boundary conditions into LISFLOOD-FP or HEC-RAS for simulation"
                : " — LISFLOOD-FP or HEC-RASに地形・粗度・境界条件を入力してシミュレーション"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Calibrate using SAR flood extent" : "SAR浸水範囲でキャリブレーション"}
              </strong>
              {en
                ? " — Search for Manning’s n combinations that maximize the F statistic"
                : " — F統計量を最大化するManning’s nの組合せを探索"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "(Advanced) Data assimilation" : "（発展）データ同化"}
              </strong>
              {en
                ? " — Update hydraulic model state via EnKF when new SAR images are acquired"
                : " — 新しいSAR画像の取得時にEnKFで水理モデルの状態を更新"}
            </li>
          </ol>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Limitations" : "限界"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              {en
                ? <>
                    SAR flood extraction accuracy degrades in <strong className="text-foreground">vegetated and urban areas</strong>.
                    C-band (Sentinel-1) cannot penetrate dense vegetation, and double-bounce from buildings in urban areas
                    is confused with flood signals
                  </>
                : <>
                    SAR浸水抽出は<strong className="text-foreground">植生下・都市域</strong>で精度が低下する。
                    Cバンド（Sentinel-1）は密生植生を透過できず、都市部では建物のダブルバウンスが
                    浸水シグナルと混同される
                  </>}
            </li>
            <li>
              {en
                ? <>
                    Water level estimation accuracy is directly tied to DEM vertical accuracy.
                    With LiDAR DEM, approximately &plusmn;50 cm is achievable, but errors of 1&ndash;2 m remain with SRTM/GLO-30
                  </>
                : <>
                    水位推定はDEMの鉛直精度に直結する。
                    LiDAR DEMがあれば±50cm程度だが、SRTM/GLO-30では1〜2mの誤差が残る
                  </>}
            </li>
            <li>
              {en
                ? <>
                    With Sentinel-1&apos;s revisit period (6&ndash;12 days),
                    capturing <strong className="text-foreground">flash floods</strong> is difficult.
                    There is a high probability that the flood peak and satellite overpass timing do not coincide
                  </>
                : <>
                    Sentinel-1の再訪周期（6〜12日）では、
                    <strong className="text-foreground">フラッシュフラッド</strong>の捕捉が困難。
                    洪水のピークと衛星通過のタイミングが一致しない可能性が高い
                  </>}
            </li>
            <li>
              {en
                ? "Data assimilation requires ensemble runs, incurring high computational costs. Even with LISFLOOD-FP’s simplified equations, hundreds to thousands of runs x event duration are required"
                : "データ同化にはアンサンブルランが必要であり、計算コストが高い。LISFLOOD-FPの簡略化方程式でも数百〜数千ラン × イベント期間の計算が必要"}
            </li>
            <li>
              {en
                ? "The quality of SAR image geometric and radiometric corrections directly affects the accuracy of model integration, but quality assurance in automated processing pipelines is still immature"
                : "SAR画像の幾何補正・放射補正の品質がモデル連携の精度に直接影響するが、自動処理パイプラインでの品質保証は未成熟"}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Grimaldi, S., Li, Y., Pauwels, V.R.N., &amp; Walker, J.P. (2016).
              Remote Sensing-Derived Water Extent and Level to Constrain Hydraulic
              Flood Forecasting Models. <em>Surv. Geophys.</em>, 37, 977-1034.
              DOI: 10.1007/s10712-016-9378-y
            </li>
            <li>
              Schumann, G., Bates, P.D., Horritt, M.S., Matgen, P., &amp; Pappenberger, F. (2009).
              Progress in integration of remote sensing-derived flood extent and stage data
              and hydraulic models. <em>Rev. Geophys.</em>, 47, RG4001.
              DOI: 10.1029/2008RG000274
            </li>
            <li>
              Hostache, R. et al. (2018). Near-Real-Time Assimilation of SAR-Derived Flood Maps
              for Improving Flood Forecasts. <em>Water Resour. Res.</em>, 54, 5516-5535.
              DOI: 10.1029/2017WR022205
            </li>
            <li>
              Hostache, R. et al. (2021). Assimilation of probabilistic flood maps from SAR data
              into a coupled hydrologic-hydraulic forecasting model.
              <em> Hydrol. Earth Syst. Sci.</em>, 25, 4081-4097.
              DOI: 10.5194/hess-25-4081-2021
            </li>
            <li>
              Hostache, R., Matgen, P., &amp; Wagner, W. (2009). Water Level Estimation and Reduction
              of Hydraulic Model Calibration Uncertainties Using Satellite SAR Images of Floods.
              <em> IEEE Trans. Geosci. Remote Sens.</em>, 47, 431-441.
              DOI: 10.1109/TGRS.2008.2008718
            </li>
            <li>
              Di Baldassarre, G., Schumann, G., &amp; Bates, P.D. (2009). A technique for the calibration
              of hydraulic models using uncertain satellite observations of flood extent.
              <em> J. Hydrol.</em>, 367, 276-282.
              DOI: 10.1016/j.jhydrol.2009.01.020
            </li>
            <li>
              Dan, T. et al. (2025). DeepSAR Flood Mapper: global flood mapping on Google Earth Engine
              cloud platform using MLP deep learning model with Sentinel-1 SAR imagery and HAND
              topographic data. <em>GISci. Remote Sens.</em>, 63(1).
              DOI: 10.1080/15481603.2025.2612306
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
