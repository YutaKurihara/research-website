"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

const baseUrl = "https://yutakurihara.github.io/MyProject";

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
            2026-05-27 &middot; {en ? "Updated 2026-11-09" : "更新 2026-11-09"}
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "MyProject — Open-Source Toolkit for Disaster Risk Reduction in Developing Countries"
              : "MyProject — 途上国の防災・減災を支援するオープンツール集"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "An introduction to the open-source disaster risk assessment tools developed by Oriental Consultants Global, Project Planning Division. These tools support flood risk assessment, damage estimation, and climate change impact analysis in developing countries — from SAR satellite-based disaster extent mapping to long-term macroeconomic impact evaluation using DSGE models."
              : "オリエンタルコンサルタンツグローバル企画事業部が開発した、途上国の洪水リスク評価・被害推定・気候変動影響分析を支援するオープンツール群の紹介です。SAR衛星画像による災害範囲の可視化から、マクロ経済モデルによる長期影響評価まで、実務で活用できるツールを公開しています。"}
          </p>
          <a
            href={baseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-highlight hover:underline"
          >
            {en ? "Visit MyProject site →" : "MyProject サイトへ →"}
          </a>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* -- Overview -- */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "What is MyProject" : "MyProjectとは"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                MyProject is a collection of{" "}
                <strong className="text-foreground">
                  open-source disaster risk assessment tools
                </strong>{" "}
                developed through disaster risk reduction projects in developing
                countries. The tools are designed to enable flood damage
                identification, prediction, and economic impact assessment even
                in areas where field surveys are difficult, by leveraging
                satellite data and global datasets.
              </>
            ) : (
              <>
                MyProjectは、途上国での防災プロジェクト経験を通じて開発した
                <strong className="text-foreground">
                  オープンな災害リスク評価ツール群
                </strong>
                です。
                現地調査が困難な地域でも、衛星データやグローバルデータセットを活用して
                洪水被害の把握・予測・経済影響評価を行えるよう設計されています。
              </>
            )}
          </p>
          <p className="mt-2 text-muted">
            {en
              ? "Built on Google Earth Engine, Python, and open data, the tools come with step-by-step guides so that practitioners without specialized technical expertise can use them effectively."
              : "Google Earth Engine、Python、公開データを基盤とし、専門的な知識がなくても利用できるようステップバイステップのガイドを提供しています。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* -- Tool cards -- */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Tools" : "ツール一覧"}
          </h2>

          {/* SAR-DAT */}
          <div className="mb-6 rounded border border-border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {en
                    ? "SAR-DAT — Disaster Damage Area Visualization Tool"
                    : "SAR-DAT — 災害被害範囲可視化ツール"}
                </p>
                <p className="mt-1 text-[10px] text-muted">
                  {en ? "Phase 9 (2022)" : "第9期（2022年）"}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] text-green-500">
                {en ? "Available" : "利用可能"}
              </span>
            </div>
            <p className="mt-3 text-muted">
              {en ? (
                <>
                  A Google Earth Engine tool that uses Sentinel-1 SAR satellite
                  imagery to{" "}
                  <strong className="text-foreground">
                    visualize past flood extents, landslides, and building damage
                  </strong>
                  . Simply specify a target area and date range, and the tool
                  automatically retrieves pre- and post-disaster SAR images and
                  extracts damage extents through change detection. It has been
                  applied to Typhoon Ulysses in the Philippines (2020) and the
                  Turkey floods (2023), among other events.
                </>
              ) : (
                <>
                  Google Earth Engine上でSentinel-1 SAR衛星画像を用いて、
                  <strong className="text-foreground">
                    過去の洪水・土砂崩れ・建物被害を可視化
                  </strong>
                  するツールです。
                  対象地域と日付を指定するだけで、洪水前後のSAR画像を自動取得し、
                  変化検出によって被害範囲を抽出します。
                  フィリピン台風Ulysses（2020年）やトルコ洪水（2023年）での
                  適用実績があります。
                </>
              )}
            </p>
            <a
              href={`${baseUrl}/sar-dat`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs text-highlight hover:underline"
            >
              {en ? "Learn more →" : "詳細を見る →"}
            </a>
          </div>

          {/* Flood Direct Damage */}
          <div className="mb-6 rounded border border-border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {en
                    ? "Flood Direct Damage Estimation Tool"
                    : "Flood Direct Damage Estimation — 洪水直接被害計算ツール"}
                </p>
                <p className="mt-1 text-[10px] text-muted">
                  {en ? "Phase 10 (2023)" : "第10期（2023年）"}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] text-green-500">
                {en ? "Available" : "利用可能"}
              </span>
            </div>
            <p className="mt-3 text-muted">
              {en ? (
                <>
                  A tool that performs{" "}
                  <strong className="text-foreground">
                    flood depth estimation and damage cost calculation
                  </strong>{" "}
                  end-to-end for SAR-derived inundation areas. It estimates flood
                  depth from DEM and inundation extent using the FwDET method,
                  then combines building and land-use data with depth-damage
                  functions to compute direct economic losses. It has been
                  applied to the Cagayan River basin in the Philippines.
                </>
              ) : (
                <>
                  SAR画像から推定した浸水域に対して、
                  <strong className="text-foreground">
                    浸水深の推定と被害額の算定
                  </strong>
                  を一貫して行うツールです。
                  DEMと浸水範囲から浸水深を推定し（FwDET手法）、
                  建物・土地利用データと被害関数を組み合わせて直接被害額を算出します。
                  フィリピン・カガヤン川流域での適用事例があります。
                </>
              )}
            </p>
            <a
              href={`${baseUrl}/flood-damage`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs text-highlight hover:underline"
            >
              {en ? "Learn more →" : "詳細を見る →"}
            </a>
          </div>

          {/* Climate Change */}
          <div className="mb-6 rounded border border-border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {en
                    ? "Climate Change Impact Assessment — GCM Downscaling Tool"
                    : "Climate Change Impact Assessment — GCMダウンスケーリングツール"}
                </p>
                <p className="mt-1 text-[10px] text-muted">
                  {en ? "Phase 11 (2024)" : "第11期（2024年）"}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] text-green-500">
                {en ? "Available" : "利用可能"}
              </span>
            </div>
            <p className="mt-3 text-muted">
              {en ? (
                <>
                  A set of six Python notebooks for{" "}
                  <strong className="text-foreground">
                    bias-correcting and downscaling
                  </strong>{" "}
                  NASA NEX-GDDP-CMIP6 climate model outputs — from GCM skill
                  evaluation and data retrieval to quantile-based bias
                  correction against GSMaP or gauge data and the estimation of
                  basin-mean design rainfall. It is used to prepare input data
                  for climate change impact assessments in developing countries
                  (updated October 2026).
                </>
              ) : (
                <>
                  NASA NEX-GDDP-CMIP6の気候モデル出力を
                  <strong className="text-foreground">
                    バイアス補正・ダウンスケーリング
                  </strong>
                  する6つのPythonノートブックです。
                  GCMの精度評価とデータ取得から、GSMaPまたは地上観測による順序統計量補正、
                  流域平均雨量の確率雨量算定までを一貫して行えます。
                  途上国で気候変動影響評価を行う際の入力データ作成に利用されています（2026年10月更新）。
                </>
              )}
            </p>
            <a
              href={`${baseUrl}/gcm-downscaling`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs text-highlight hover:underline"
            >
              {en ? "Learn more →" : "詳細を見る →"}
            </a>
          </div>

          {/* Daily Flood Monitor */}
          <div className="mb-6 rounded border border-border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {en
                    ? "Daily Flood Damage and Economic Impact Monitor"
                    : "洪水被害・経済影響 日次モニター"}
                </p>
                <p className="mt-1 text-[10px] text-muted">
                  {en ? "Phase 13 (2025) — released October 2026" : "第13期（2025年）— 2026年10月公開"}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] text-green-500">
                {en ? "Available" : "利用可能"}
              </span>
            </div>
            <p className="mt-3 text-muted">
              {en ? (
                <>
                  An automated pipeline that runs once a day for the Cagayan
                  River Basin (Region II, Philippines): satellite rainfall
                  (GSMaP) drives the{" "}
                  <strong className="text-foreground">
                    RRI inundation model, direct damage estimation, and a
                    regional DSGE model (IMF DIGNAD)
                  </strong>{" "}
                  in sequence. The page shows the latest rainfall and
                  inundation maps, the estimated direct damage of the current
                  event, and annual direct damage with the resulting GRDP loss
                  for 2020 onwards.
                </>
              ) : (
                <>
                  フィリピン・カガヤン川流域（Region II）を対象に、衛星降水量（GSMaP）を入力として
                  <strong className="text-foreground">
                    RRI モデルによる浸水解析、直接被害額の算定、地域 DSGE モデル（IMF DIGNAD）による経済影響評価
                  </strong>
                  を 1 日 1 回自動で実行するパイプラインです。最新の雨量・浸水地図、
                  進行中の洪水の直接被害額、2020 年以降の年間直接被害額と GRDP 毀損率を掲載しています。
                </>
              )}
            </p>
            <a
              href={`${baseUrl}/flood-monitor`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs text-highlight hover:underline"
            >
              {en ? "Open the monitor →" : "モニターを見る →"}
            </a>
          </div>
        </section>

        <hr className="border-border" />

        {/* -- Technology Stack -- */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Technology Stack" : "技術スタック"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Tool" : "ツール"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Platform" : "プラットフォーム"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Data" : "主要データ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    SAR-DAT
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Google Earth Engine
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Sentinel-1 SAR
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    Flood Damage
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Google Earth Engine
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Sentinel-1, DEM, OpenStreetMap
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    GCM Downscaling
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Python / Jupyter Notebook
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    NASA NEX-GDDP-CMIP6
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    Flood Monitor
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Python / RRI / DIGNAD (Dynare)
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "GSMaP, DEM, land use, IMF WEO" : "GSMaP, DEM, 土地利用, IMF WEO"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* -- Related Blog Posts -- */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Related Blog Posts" : "関連ブログ記事"}
          </h2>
          <p className="mb-3 text-muted">
            {en
              ? "The following posts provide in-depth explanations of the scientific foundations behind the techniques used in MyProject."
              : "MyProjectで使われている技術の学術的背景については、以下の記事で詳しく解説しています。"}
          </p>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <Link
                href="/blog/sar-flood-mapping"
                className="text-highlight hover:underline"
              >
                {en
                  ? "SAR Satellite Flood Mapping Techniques"
                  : "SAR衛星画像による洪水範囲の抽出手法"}
              </Link>
              {en
                ? " — The NDFI method underlying SAR-DAT"
                : " — SAR-DATの基礎となるNDFI手法"}
            </li>
            <li>
              <Link
                href="/blog/fwdet"
                className="text-highlight hover:underline"
              >
                {en
                  ? "FwDET — Estimating Flood Depth from Satellite Imagery"
                  : "FwDET — 衛星画像から浸水深を推定するツールの解説"}
              </Link>
              {en
                ? " — The flood depth estimation algorithm in Flood Damage"
                : " — Flood Damageの浸水深推定アルゴリズム"}
            </li>
            <li>
              <Link
                href="/blog/flood-direct-damage"
                className="text-highlight hover:underline"
              >
                {en
                  ? "Satellite-Based Flood Direct Damage Assessment Methods"
                  : "衛星画像を用いた洪水直接被害評価手法の解説"}
              </Link>
              {en
                ? " — The damage cost estimation methodology in Flood Damage"
                : " — Flood Damageの被害額算定手法"}
            </li>
            <li>
              <Link
                href="/blog/dsge-disaster-macroeconomics"
                className="text-highlight hover:underline"
              >
                {en
                  ? "Assessing the Macroeconomic Impact of Disasters with DSGE Models"
                  : "災害のマクロ経済影響を DSGE モデルで評価する"}
              </Link>
              {en
                ? " — The DIGNAD framework behind the economic indicators of the Flood Monitor"
                : " — 日次モニターの経済指標の背後にある DIGNAD モデル"}
            </li>
            <li>
              <Link
                href="/blog/extreme-precipitation-climate-change"
                className="text-highlight hover:underline"
              >
                {en
                  ? "Climate Change and Increasing Extreme Precipitation"
                  : "気候変動と極端降水の増大"}
              </Link>
              {en
                ? " — Climate change projections behind GCM Downscaling"
                : " — GCM Downscalingの背景にある気候変動予測"}
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
