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
              ? "Impact of Culvert Blockage on Flood Dynamics — Quantitative Assessment Using 2D Hydraulic Modeling and Infrastructure Prioritization"
              : "カルバート閉塞が洪水動態に与える影響 — 2D水理モデルによる定量評価とインフラ優先度の特定"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            De Vos, L. F., Mahajan, K., Caviedes-Voullième, D., &amp; Rüther, N. (2026).
            Culvert blockages in 2D-hydrodynamic flash flood modeling: quantifying the impact on flood dynamics and mitigation strategies.
            <em> Natural Hazards and Earth System Sciences</em>, 26, 2319–2352.
          </p>
          <a href="https://doi.org/10.5194/nhess-26-2319-2026" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.5194/nhess-26-2319-2026
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
            {en ? (
              <>
                In flood modeling of small to medium rivers, it has been empirically known that culvert blockage can
                dramatically worsen local inundation, yet very few studies have quantitatively assessed its impact.
                This study implements a <strong className="text-foreground">dynamic culvert blockage module in TELEMAC-2D</strong> and,
                through scenario analysis combining blockage ratio (BR) and blockage trigger water level (TR),
                presents a framework for identifying <strong className="text-foreground">which culverts cause the greatest damage increase when blocked</strong>.
                The finding that peak discharge varies by 5–9% solely due to gaps in administrative culvert registries
                reaffirms the importance of foundational data in flood risk assessment for small catchments.
              </>
            ) : (
              <>
                中小河川の洪水モデリングでは、カルバート（暗渠・横断管）の閉塞が局所的な浸水を劇的に悪化させうることが
                経験的に知られていますが、その影響を定量的に評価した研究はほとんどありませんでした。
                本研究は、<strong className="text-foreground">TELEMAC-2Dにカルバート閉塞の動的モジュールを実装</strong>し、
                閉塞率（BR）と閉塞トリガー水位（TR）を組み合わせたシナリオ解析により、
                <strong className="text-foreground">どのカルバートが閉塞時に最も被害を拡大させるか</strong>を特定する
                フレームワークを提示しています。
                行政のカルバート台帳に欠落があるだけで流出ピークが5〜9%変わるという結果は、
                小流域の洪水リスク評価における基盤データの重要性を改めて示しています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Study Basin and Background" : "対象流域と背景"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The study targets the <strong className="text-foreground">Reichenberger Bach catchment (~33 km²)</strong> in
                northwestern Bavaria, central Germany. It is an ungauged catchment with a minimum elevation of 191 m a.s.l.
                and a maximum of 374 m a.s.l.
              </>
            ) : (
              <>
                ドイツ中部バイエルン州北西部の<strong className="text-foreground">Reichenberger Bach流域（約33 km²）</strong>を
                対象としています。無観測流域であり、流域最低点は191 m a.s.l.、最高点は374 m a.s.l.です。
              </>
            )}
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "River" : "河川"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Length" : "延長"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Mean gradient" : "平均勾配"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Characteristics" : "特徴"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Reichenberger Bach</td>
                  <td className="border border-border px-3 py-2 text-muted">~7.7 km</td>
                  <td className="border border-border px-3 py-2 text-muted">1.3%</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Flows south to north through farmland; fully culverted in urban areas"
                      : "農地を南→北に流下、市街地で全区間暗渠化"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Guttenberger Bach</td>
                  <td className="border border-border px-3 py-2 text-muted">~5.3 km</td>
                  <td className="border border-border px-3 py-2 text-muted">2.5%</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Flows through forested areas" : "森林地を流下"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                Four flood events were recorded between 2021 and 2024, all accompanied by emergency calls to
                the fire department (road and basement flooding). Administrative data listed{" "}
                <strong className="text-foreground">22 culverts</strong>, but field surveys identified{" "}
                <strong className="text-foreground">7 additional culverts</strong>, bringing the total to 29 incorporated into the model.
              </>
            ) : (
              <>
                2021〜2024年に4回の洪水イベントが記録されており、いずれも消防への通報（道路・地下室の浸水）を伴っています。
                行政データには<strong className="text-foreground">22基のカルバート</strong>が登録されていましたが、
                現地踏査で<strong className="text-foreground">追加7基</strong>を発見し、
                計29基をモデルに組み込んでいます。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Methods" : "手法"}
          </h2>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "1. Hydraulic Model (TELEMAC-2D)" : "1. 水理モデル（TELEMAC-2D）"}
          </h3>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The open-source 2D shallow water equation model <strong className="text-foreground">TELEMAC-2D</strong> is used.
                It employs a semi-implicit finite element method with a time step of 0.5 seconds. The initial condition
                is a completely dry state. The SCS-CN method is applied for rainfall-runoff transformation.
              </>
            ) : (
              <>
                オープンソースの2D浅水方程式モデル<strong className="text-foreground">TELEMAC-2D</strong>を使用。
                半陰的有限要素法、時間刻み0.5秒。初期条件は完全乾燥状態。
                降雨流出にはSCS-CN法を適用しています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Mesh element" : "メッシュ要素"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Resolution" : "解像度"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Along channels (Strahler ≤7)" : "河道沿い（Strahler ≤7）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">0.5–0.7 m</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Buildings near channels" : "河道近傍の建物"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">1–2 m</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Other areas" : "その他の領域"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Up to 15 m" : "最大15 m"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Total nodes / Total elements" : "総節点数 / 総要素数"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">1,168,050 / 2,318,072</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                Terrain data integrates LiDAR DEM (1 m resolution) with channel survey cross-sections from
                existing flood models. Roughness coefficients and runoff CN values are derived from land use data.
              </>
            ) : (
              <>
                地形データはLiDAR DEM（1 m解像度）と既存洪水モデルの河道測量断面を統合。
                粗度係数と流出CN値は土地利用データから設定しています。
              </>
            )}
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">
            {en ? "2. Culvert Modeling" : "2. カルバートモデリング"}
          </h3>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Culverts are represented as 1D sink-and-source links, and the through-flow discharge is computed
                based on the six flow regimes of Bodhaine (1968). This study adds the following improvements
                to the standard TELEMAC-2D:
              </>
            ) : (
              <>
                カルバートは1D sink-and-sourceリンクとして表現され、Bodhaine (1968) の6種の流況に基づいて
                通過流量を計算します。本研究では標準のTELEMAC-2Dに以下の改良を加えています。
              </>
            )}
          </p>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Reduction of maximum intake coefficient k</strong> (0.9 → 0.5):
                  Limits the volume that can be withdrawn from upstream nodes in a single time step,
                  improving consistency with the 2D mesh
                </>
              ) : (
                <>
                  <strong className="text-foreground">最大取水制限係数kの低減</strong>（0.9→0.5）: 上流節点から1タイムステップで取水できる体積を制限し、2Dメッシュとの整合性を向上
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Distribution of residual discharge</strong>:
                  When the theoretical discharge exceeds the capacity of the upstream node,
                  water is progressively withdrawn from adjacent nodes and transported to the downstream node
                </>
              ) : (
                <>
                  <strong className="text-foreground">残余流量の分配</strong>: 理論流量が上流節点の許容量を超える場合、隣接節点から段階的に取水して下流節点に輸送
                </>
              )}
            </li>
          </ul>

          <h3 className="mt-6 mb-2 font-medium text-foreground">
            {en ? "3. Culvert Blockage Model" : "3. カルバート閉塞モデル"}
          </h3>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The blockage mechanism assumes <strong className="text-foreground">log jams from woody debris and branches</strong>.
                Actual large-scale blockages were confirmed through field surveys and fire department photographs.
                The model adopts the <strong className="text-foreground">Energy Loss Method (ELM)</strong>.
              </>
            ) : (
              <>
                閉塞メカニズムとして<strong className="text-foreground">流木・枝葉によるログジャム</strong>を想定。
                現地踏査と消防写真で実際の大規模閉塞を確認しています。
                モデルには<strong className="text-foreground">Energy Loss Method（ELM）</strong>を採用。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Parameter" : "パラメータ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Definition" : "定義"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Values" : "設定値"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Blockage ratio BR" : "閉塞率 BR"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Blocked area / Total cross-sectional area" : "閉塞面積 / 全断面積"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">0.2, 0.5, 0.8</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Trigger ratio TR" : "トリガー比 TR"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Upstream water depth / Culvert height" : "上流水深 / カルバート高さ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">0, 0.8, 1.0, 1.2, 1.5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                In the ELM, the inlet loss coefficient k<sub>e</sub>&apos; is increased according to the blockage ratio BR.
                Against an initial value of k<sub>e</sub>=0.5 (rectangular concrete pipe),
                BR=0.2 yields k<sub>e</sub>&apos;=1.3, BR=0.5 yields 5.8, and{" "}
                <strong className="text-foreground">BR=0.8 yields 56.8</strong>,
                increasing nonlinearly. Once blockage occurs, it is assumed to be permanent (persistent blockage).
              </>
            ) : (
              <>
                ELMでは閉塞率BRに応じて入口損失係数k<sub>e</sub>&apos;を増大させます。
                初期値k<sub>e</sub>=0.5（角形コンクリート管）に対し、
                BR=0.2でk<sub>e</sub>&apos;=1.3、BR=0.5で5.8、<strong className="text-foreground">BR=0.8で56.8</strong>と
                非線形に増加します。一度閉塞が発生すると解除されない（永続閉塞）仮定です。
              </>
            )}
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">
            {en ? "4. Rainfall Scenarios" : "4. 降雨シナリオ"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                Six-hour design rainfall (Euler Type II distribution) is used, with six scenarios from return
                periods HN5 to HN100. Rainfall data are from the RADKLIM/RADOLAN radar (1 km², 1 hour),
                and design rainfall depths are derived from the German standard KOSTRA 2020 dataset (5 km² resolution).
              </>
            ) : (
              <>
                6時間確率降雨（Euler II型分布）を用い、再現期間HN5〜HN100の6シナリオを設定。
                降雨データはRADKLIM/RADOLANレーダー（1 km²、1時間）、
                確率降雨量はドイツ標準のKOSTRA 2020データセット（5 km²解像度）から算定しています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Model Validation" : "モデル検証"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                As this is an ungauged catchment, a{" "}
                <strong className="text-foreground">plausibility assessment</strong> was conducted using
                photographic records and GPS-mapped water surface extents from the July 15, 2021 flood event.
                Antecedent moisture conditions from rainfall six days prior (July 9, 60 mm/13h) were accounted for
                by setting the SCS-CN to wet conditions. Spatially distributed RADKLIM-YW data
                (5-minute temporal resolution) were used as rainfall input.
              </>
            ) : (
              <>
                無観測流域のため、2021年7月15日洪水イベントの写真記録とGPS水面範囲を用いた
                <strong className="text-foreground">妥当性確認（plausibility assessment）</strong>を実施。
                6日前の降雨（7/9, 60 mm/13h）による先行湿潤条件を考慮し、SCS-CNを湿潤条件に設定。
                降雨入力にはRADKLIM-YW（5分時間分解能）の空間分布データを使用しています。
              </>
            )}
          </p>
          <p className="mt-2 text-muted">
            {en
              ? "Good agreement of inundation extents was confirmed at multiple locations in the Reichenberg urban area. This accuracy was achieved without local calibration of roughness or runoff coefficients."
              : "Reichenberg市街地の複数地点で浸水範囲の良好な一致を確認。粗度・流出係数のローカル調整なしでこの精度が得られています。"}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Key Numerical Results" : "主な数値結果"}
          </h2>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "Impact of Incomplete Culvert Registry" : "カルバート台帳欠落の影響"}
          </h3>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                Comparing the 22 culverts from administrative data with the 29 after field surveys,{" "}
                <strong className="text-foreground">peak discharge increased by 5–9%</strong>.
                This demonstrates that incompleteness of official registries alone can significantly affect model accuracy.
              </>
            ) : (
              <>
                行政データの22基と現地踏査後の29基を比較した結果、
                <strong className="text-foreground">流出ピークが5〜9%増加</strong>。
                公式台帳の不完全さだけでモデル精度に有意な影響を与えることを示しています。
              </>
            )}
          </p>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "Impact at Basin Outlet" : "流域出口への影響"}
          </h3>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                The change in peak discharge at the basin outlet due to culvert blockage (BR=0.8) was{" "}
                <strong className="text-foreground">less than 2% for HN10–HN100</strong>.
                Upstream ponding and dispersion across the floodplain attenuate the flow, so the impact is limited at the catchment scale.
              </>
            ) : (
              <>
                カルバート閉塞（BR=0.8）による流域出口のピーク流量変化は
                <strong className="text-foreground">HN10〜HN100で2%未満</strong>。
                上流での湛水・氾濫原への分散が流量を減衰させるため、流域スケールでは影響が限定的です。
              </>
            )}
          </p>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "Local-Scale Impact (Cross-Section Analysis)" : "局所スケールの影響（断面解析）"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Return period" : "再現期間"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Blockage scenario" : "閉塞シナリオ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Impact at urban cross-sections" : "市街地断面での影響"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">HN5</td>
                  <td className="border border-border px-3 py-2 text-muted">BR=0.8, TR=0〜1.2</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Rapid discharge increase (t≈4–5h); at TR=1.5, similar to baseline"
                      : "急激な流量増加（t≈4〜5h）、TR=1.5では基準と同程度"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">HN10</td>
                  <td className="border border-border px-3 py-2 text-muted">BR=0.8, TR=0〜1.2</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Peak discharge approximately doubles compared to baseline"
                      : "ピーク流量が基準の約2倍に増加"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">HN20〜HN100</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "All scenarios" : "全シナリオ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Hydrographs nearly converge (culvert capacity exceeded regardless of blockage)"
                      : "ハイドログラフがほぼ収束（閉塞有無に関わらずカルバート能力超過）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Impact on Inundation Area (by Blockage Ratio BR)" : "浸水面積への影響（閉塞率BR別）"}
          </h3>
          <p className="mb-3 text-muted">
            {en
              ? "Relative increase in inundation area with water depth ≥30 cm (TR=0.8 fixed):"
              : "水深30 cm以上の浸水面積の相対増加率（TR=0.8固定）:"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Blockage ratio" : "閉塞率"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Roads (HN5–HN20)" : "道路（HN5–HN20）"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Residential/industrial (HN20–HN30)" : "住宅・工業地（HN20–HN30）"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Total area" : "全域"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">BR=0.8</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? ">10% increase" : ">10%増"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? ">10% increase" : ">10%増"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "1–3% increase" : "1–3%増"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">BR=0.5</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "<1.2% increase" : "<1.2%増"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Slight increase" : "微増"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "<1.2% increase" : "<1.2%増"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">BR=0.2</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Negligible" : "無視可能"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Negligible" : "無視可能"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">&lt;1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Impact on Inundation Area (by Trigger Ratio TR)" : "浸水面積への影響（トリガー比TR別）"}
          </h3>
          <p className="mb-3 text-muted">
            {en
              ? "Relative increase in road inundation area with BR=0.8 fixed:"
              : "BR=0.8固定での道路浸水面積の相対増加率:"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">TR</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "HN5 (roads)" : "HN5（道路）"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "HN10 (roads)" : "HN10（道路）"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Trend" : "傾向"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "TR=0 (instant blockage)" : "TR=0（即時閉塞）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "~20% increase" : "~20%増"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "~13% increase" : "~13%増"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Greater impact at lower return periods" : "低再現期間ほど影響大"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">TR=0.8〜1.2</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Moderate" : "中程度"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Moderate" : "中程度"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Depends on blockage timing" : "閉塞タイミングに依存"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">TR=1.5</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "1.4% increase" : "1.4%増"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Slight increase" : "微増"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Critical culverts do not get blocked" : "重要カルバートが閉塞しない"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Spatial Consistency (CSI)" : "空間的整合性（CSI）"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                At a flood depth threshold of 3 cm, <strong className="text-foreground">CSI &gt; 0.97</strong> (nearly identical
                inundation extent with and without blockage). However, at the 30 cm threshold, CSI decreases and
                differences between scenarios become pronounced. This means that blockage affects flood{" "}
                &quot;depth&quot; more strongly than flood &quot;extent.&quot;
              </>
            ) : (
              <>
                浸水深3 cm以上の閾値で<strong className="text-foreground">CSI &gt; 0.97</strong>（閉塞有無でほぼ同じ浸水域）。
                一方、30 cm以上ではCSIが低下し、シナリオ間の差異が顕著になります。
                これは閉塞が浸水「範囲」より「深さ」に強く影響することを意味しています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Identifying Critical Culverts and Mitigation Measures" : "重要カルバートの特定と緩和策"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Through differential inundation analysis between scenarios,{" "}
                <strong className="text-foreground">two culverts (cc1, cc2)</strong> in the Reichenberg urban area
                were identified as dominating local inundation. Mitigation effectiveness was verified
                in scenarios where blockage of these culverts is prevented (TR=∞, i.e., ensuring continuous flow at all times).
              </>
            ) : (
              <>
                シナリオ間の浸水差分解析から、Reichenberg市街地の
                <strong className="text-foreground">2基のカルバート（cc1, cc2）</strong>が
                局所浸水を支配していることを特定。これらの閉塞を防止（TR=∞、つまり常時通水を確保）
                するシナリオで緩和効果を検証しています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Scenario" : "シナリオ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "HN5 road inundation increase" : "HN5 道路浸水増"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "HN10 road inundation increase" : "HN10 道路浸水増"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "HN20+ effect" : "HN20+ 効果"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Full blockage (no mitigation)" : "全閉塞（対策なし）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">18.49%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">13.22%</td>
                  <td className="border border-border px-3 py-2 text-muted">—</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "cc1 only maintained" : "cc1のみ保全"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">1.40%</td>
                  <td className="border border-border px-3 py-2 text-muted">8.77%</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Minor" : "軽微"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "cc2 only maintained" : "cc2のみ保全"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "~18% (no change)" : "~18%（変化なし）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">13.48%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Significant reduction" : "大幅減少"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "cc1+cc2 maintained" : "cc1+cc2保全"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">—</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">1.76%</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Synergistic effect" : "相乗効果あり"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                A key finding is that <strong className="text-foreground">the criticality of culverts changes with
                return period</strong>. cc1 is dominant at HN5, but at HN20 and above, cc2 becomes the primary
                influence factor. This means that judging infrastructure priority based on a single return period
                is risky, and evaluation across multiple scenarios is essential.
              </>
            ) : (
              <>
                重要な知見として、<strong className="text-foreground">カルバートの重要度は再現期間によって変化</strong>します。
                cc1はHN5で支配的ですが、HN20以上ではcc2が主要な影響因子に切り替わります。
                つまり、単一の再現期間だけでインフラ優先度を判断することは危険であり、
                複数シナリオでの評価が不可欠です。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Limitations" : "限界"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Ungauged catchment</strong>:
                  Outlet hydrograph validation is not possible; verification is limited to plausibility assessment using photographic records
                </>
              ) : (
                <>
                  <strong className="text-foreground">無観測流域</strong>:
                  出口ハイドログラフの検証ができず、写真記録による妥当性確認にとどまる
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Instantaneous blockage assumption</strong>:
                  In reality, woody debris accumulation is gradual, but the model triggers blockage immediately upon threshold exceedance
                </>
              ) : (
                <>
                  <strong className="text-foreground">瞬時閉塞の仮定</strong>:
                  実際の流木蓄積は漸進的だが、モデルでは閾値超過時に即座に閉塞が発生する
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">1D culvert representation</strong>:
                  Travel time within pipes, cross-sectional changes, and bifurcations cannot be reproduced (coupling with a 1D sewer model is a future task)
                </>
              ) : (
                <>
                  <strong className="text-foreground">1Dカルバート表現</strong>:
                  管路内の通過時間、断面変化、分岐は再現できない（1D排水管モデルとの結合が将来課題）
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Flow regime Type 1 not implemented</strong>:
                  TELEMAC-2D does not implement flow regime Type 1 (steep slope, low downstream depth), but the impact during flood peaks is assessed as limited
                </>
              ) : (
                <>
                  <strong className="text-foreground">流況タイプ1の未実装</strong>:
                  TELEMAC-2Dでは急勾配・低下流水深の流況タイプ1が実装されていないが、洪水ピーク時の影響は限定的と評価
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Limitations of HN100</strong>:
                  The HN100 in this study (peak 45 mm/h) is smaller than extreme design rainfall (100 mm/h), and results may differ for larger events
                </>
              ) : (
                <>
                  <strong className="text-foreground">HN100の限界</strong>:
                  本研究のHN100（ピーク45 mm/h）は極端設計降雨（100 mm/h）より小さく、より大きなイベントでは結果が異なる可能性がある
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Catchment specificity</strong>:
                  Results depend on topography, land use, and infrastructure layout, making direct quantitative generalization to other catchments difficult
                </>
              ) : (
                <>
                  <strong className="text-foreground">流域固有性</strong>:
                  地形・土地利用・インフラ配置に依存するため、他流域への直接的な定量的一般化は困難
                </>
              )}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Practical Implications" : "実務への示唆"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Completeness of culvert registries is critical</strong>:
                  Peak discharge varies by 5–9% due to gaps in administrative data alone, making field survey data supplementation essential
                </>
              ) : (
                <>
                  <strong className="text-foreground">カルバート台帳の完全性が重要</strong>:
                  行政データの欠落だけで流出ピークが5〜9%変化するため、現地踏査によるデータ補完が不可欠
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Local-scale sensitivity analysis is necessary</strong>:
                  While the basin outlet response is muted, peak discharge at specific urban cross-sections can double
                </>
              ) : (
                <>
                  <strong className="text-foreground">局所スケールの感度分析が必要</strong>:
                  流域出口の応答は鈍いが、市街地の特定断面ではピーク流量が2倍になりうる
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Field response coordinated with early warning</strong>:
                  Preventing blockage of critical culverts (debris removal by fire departments) can significantly reduce flood damage at low to moderate return periods
                </>
              ) : (
                <>
                  <strong className="text-foreground">早期警戒と連動した現場対応</strong>:
                  重要カルバートの閉塞防止（消防による流木除去）が、低〜中再現期間の洪水被害を大幅に軽減
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Evaluation across multiple return periods</strong>:
                  Infrastructure criticality changes with return period, so prioritization based on a single scenario is insufficient
                </>
              ) : (
                <>
                  <strong className="text-foreground">複数再現期間での評価</strong>:
                  インフラの重要度は再現期間により変わるため、単一シナリオでの優先度付けは不十分
                </>
              )}
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
              De Vos, L. F., Mahajan, K., Caviedes-Voullième, D., &amp; Rüther, N. (2026).
              Culvert blockages in 2D-hydrodynamic flash flood modeling: quantifying the impact on flood dynamics and mitigation strategies.
              <em> Natural Hazards and Earth System Sciences</em>, 26, 2319–2352.
              DOI: 10.5194/nhess-26-2319-2026
            </li>
            <li>
              Bodhaine, G. L. (1968). Measurement of peak discharge at culverts by indirect methods.
              <em> USGS Techniques of Water-Resources Investigations</em>, Book 3, Chapter A3.
            </li>
            <li>
              Smolders, S., Plancke, Y., Li, H., Neumann, L. E., &amp; Peeters, P. (2016).
              Culvert modelling in TELEMAC-2D and TELEMAC-3D.
              <em> Proceedings of the 23rd TELEMAC-MASCARET User Conference</em>.
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
