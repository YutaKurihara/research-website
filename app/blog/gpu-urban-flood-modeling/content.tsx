"use client";

import Link from "next/link";
import { MathBlock, Math } from "@/components/Math";
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
            2026-05-24
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Real-Time Urban Flood Prediction with Multi-GPU — 891 km² of Berlin at 2 m Resolution in 5.5 Hours"
              : "マルチGPUで都市洪水をリアルタイム予測 — ベルリン全域891 km²を2 m解像度で5.5時間"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            Khosh Bin Ghomash, S., Deng, S., &amp; Apel, H. (2026).
            Enabling real-time high-resolution flood forecasting for the entire state of Berlin
            through multi-GPU accelerated physics-based modeling.
            <em> Natural Hazards and Earth System Sciences</em>, 26, 85–101.
          </p>
          <a href="https://doi.org/10.5194/nhess-26-85-2026" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.5194/nhess-26-85-2026
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
                Real-time prediction of urban pluvial flooding requires high-resolution 2D hydraulic simulation,
                but the enormous computational cost has made it impractical to secure adequate lead time.
                This study demonstrates that <strong className="text-foreground">RIM2D</strong>,
                a GPU-accelerated 2D shallow water equation solver implemented in CUDA Fortran,
                running on multiple GPUs (up to 8 NVIDIA A100s), can{" "}
                <strong className="text-foreground">
                  simulate all 891.8 km&#178; of Berlin at 2 m resolution (419 million cells) in 5.5 hours
                </strong>.
                At 10 m resolution it completes{" "}
                <strong className="text-foreground">347 times faster than real time</strong>,
                demonstrating that integration into early warning systems is practically feasible.
              </>
            ) : (
              <>
                都市域の内水氾濫をリアルタイムで予測するには、高解像度の2D水理シミュレーションが必要ですが、
                計算コストが膨大で実用的なリードタイムを確保できませんでした。
                本研究は、CUDA Fortranで実装したGPU加速型2D浅水方程式ソルバー
                <strong className="text-foreground">RIM2D</strong>を
                マルチGPU（最大8基のNVIDIA A100）で並列実行し、
                <strong className="text-foreground">ベルリン全域891.8 km&#178;を2 m解像度（4.19億セル）で
                5.5時間で計算</strong>できることを実証しました。
                10 m解像度なら実時間の<strong className="text-foreground">347倍速</strong>で完了し、
                早期警報システムへの統合が現実的であることを示しています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Study Area and Flood Event" : "対象都市と洪水イベント"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Item" : "項目"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Value" : "値"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Study area" : "対象都市"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Entire state of Berlin (891.8 km², population approx. 3.89 million)"
                      : "ベルリン州全域（891.8 km²、人口約389万人）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Terrain" : "地形"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Relatively flat, mean elevation 34 m a.s.l., along the Spree River"
                      : "比較的平坦、平均標高34 m a.s.l.、シュプレー川沿い"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Climate" : "気候"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Temperate continental (Köppen Cfb), mean annual precipitation ~570 mm"
                      : "温帯大陸性（Köppen Cfb）、年平均降水量~570 mm"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Target event" : "対象イベント"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "June 29–30, 2017 (max 196.9 mm in 24 hours)"
                      : "2017年6月29–30日（24時間で最大196.9 mm）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Governing Equations: Local Inertia Approximation of Shallow Water Equations"
              : "支配方程式: 局所慣性近似の浅水方程式"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                RIM2D solves the{" "}
                <strong className="text-foreground">local inertia form of the shallow water equations</strong>{" "}
                on a raster grid. This formulation omits the advection term and computes velocity from the balance
                of inertia and friction terms. It was proposed by Bates et al. (2010) and has been widely applied
                to urban pluvial flooding.
              </>
            ) : (
              <>
                RIM2Dは<strong className="text-foreground">浅水方程式の局所慣性近似（Local Inertia Form）</strong>を
                ラスターベースで解きます。移流項を省略し、慣性項と摩擦項のバランスで流速を計算する
                この定式化は、Bates et al. (2010) が提案し、都市域の内水氾濫に広く適用されています。
              </>
            )}
          </p>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "Continuity Equation" : "連続の式"}
          </h3>
          <MathBlock tex="\frac{\partial h}{\partial t} + \frac{\partial q_x}{\partial x} + \frac{\partial q_y}{\partial y} = R - I - D" />
          <p className="mt-2 text-muted">
            {en ? (
              <>
                <Math tex="h" /> is the water depth, <Math tex="q_x, q_y" /> are the unit-width discharges,{" "}
                <Math tex="R" /> is the rainfall intensity, <Math tex="I" /> is the infiltration rate, and{" "}
                <Math tex="D" /> is the sewer drainage rate.
              </>
            ) : (
              <>
                <Math tex="h" /> は水深、<Math tex="q_x, q_y" /> は単位幅あたり流量、
                <Math tex="R" /> は降雨強度、<Math tex="I" /> は浸透量、<Math tex="D" /> は下水排水量です。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Momentum Equation (Local Inertia Approximation)" : "運動量方程式（局所慣性近似）"}
          </h3>
          <MathBlock tex="\frac{\partial q}{\partial t} + g h \frac{\partial (h + z)}{\partial x} + \frac{g n^2 q |q|}{h^{7/3}} = 0" />
          <p className="mt-2 text-muted">
            {en ? (
              <>
                <Math tex="g" /> is gravitational acceleration, <Math tex="z" /> is the bed elevation, and{" "}
                <Math tex="n" /> is Manning&apos;s roughness coefficient.
                The second term represents the driving force due to the water surface gradient,
                and the third term represents the frictional resistance based on Manning&apos;s equation.
                By omitting the advection term (<Math tex="\partial(q^2/h)/\partial x" />),
                this formulation achieves high computational efficiency suited for mild-slope flood flows.
              </>
            ) : (
              <>
                <Math tex="g" /> は重力加速度、<Math tex="z" /> は地盤高、<Math tex="n" /> はManningの粗度係数です。
                第2項が水面勾配による駆動力、第3項がManning式に基づく摩擦抵抗を表します。
                移流項（<Math tex="\partial(q^2/h)/\partial x" />）を省略しているため、
                緩勾配の氾濫流に適した計算効率の高い定式化になっています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Inter-Cell Flux Discretization" : "セル間フラックスの離散化"}
          </h3>
          <p className="mb-3 text-muted">
            {en
              ? "The flux between adjacent cells is updated explicitly from the previous time-step flux and the water surface gradient:"
              : "隣接セル間のフラックスは、前タイムステップのフラックスと水面勾配から陽的に更新されます："}
          </p>
          <MathBlock tex="q^{n+1} = \frac{q^n - g h_f \Delta t \, \frac{\partial (h + z)}{\partial x}}{1 + g \Delta t \, \frac{n^2 |q^n|}{h_f^{7/3}}}" />
          <p className="mt-2 text-muted">
            {en ? (
              <>
                <Math tex="h_f" /> is the water depth at the cell interface (upstream-side depth), and{" "}
                <Math tex="\Delta t" /> is the time step.
                The friction term in the denominator is treated implicitly, improving numerical stability.
              </>
            ) : (
              <>
                <Math tex="h_f" /> はセル界面の水深（上流側の水深）、<Math tex="\Delta t" /> は時間刻みです。
                分母の摩擦項が陰的に処理されているため、数値安定性が向上しています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Model Setup and Data" : "モデル構成とデータ"}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Resolution" : "解像度"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Cell count" : "セル数"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Application" : "用途"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">2 m</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "419 million" : "4.19億"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "High-precision hazard mapping" : "高精度ハザードマップ"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">5 m</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "67 million" : "6,700万"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Operational forecasting (balance of accuracy and speed)" : "運用予測（精度と速度のバランス）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">10 m</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "16.7 million" : "1,670万"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Ensemble forecasting / rapid screening" : "アンサンブル予報・高速スクリーニング"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Input Data" : "入力データ"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Data" : "データ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Source" : "出典"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Resolution" : "解像度"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">DEM</td>
                  <td className="border border-border px-3 py-2 text-muted">DGM1（Geoportal Berlin）</td>
                  <td className="border border-border px-3 py-2 text-muted">1 m</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Buildings" : "建物"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">OpenStreetMap</td>
                  <td className="border border-border px-3 py-2 text-muted">—</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Land cover" : "土地被覆"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Sentinel-2 based classification (2020)" : "Sentinel-2ベース分類（2020年）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">10 m</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Rainfall" : "降雨"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">RADOLAN（DWD）</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "1 km, 1 hour" : "1 km, 1時間"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Population" : "人口"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">WorldPop 2020</td>
                  <td className="border border-border px-3 py-2 text-muted">100 m</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Manning’s Roughness Coefficient" : "Manning粗度係数"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Land cover" : "土地被覆"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    <Math tex="n" /> (m⁻¹/³s)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Urban" : "市街地"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">0.025</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Vegetation" : "植生"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">0.04</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Forest" : "森林"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">0.1</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Water surface" : "水面"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">0.03</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-muted">
            {en
              ? <>Sewer drainage capacity was estimated at <strong className="text-foreground">21 mm/h</strong> from the 2-year return period 15-minute rainfall (KOSTRA: 12.5 mm) and applied uniformly.</>
              : <>下水排水能力は2年確率15分降雨（KOSTRA: 12.5 mm）から<strong className="text-foreground">21 mm/h</strong>と推定し、均一に適用しています。</>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Multi-GPU Parallelization" : "マルチGPU並列化"}
          </h2>
          <p className="mb-3 text-muted">
            {en
              ? "RIM2D is implemented in CUDA Fortran and partitions the computational domain along the long axis in a 1D decomposition, assigning each partition to a GPU. Consistency is maintained through ghost-zone exchange at partition boundaries."
              : "RIM2DはCUDA Fortranで実装されており、計算領域を長軸方向に1D分割し、各GPUに割り当てます。境界セルのゴーストゾーン交換で計算の整合性を確保します。"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Resolution" : "解像度"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">1 GPU</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">4 GPU</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">8 GPU</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Real-time speedup ratio" : "対実時間比"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">10 m</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "16 min" : "16分"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">—</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "8 min" : "8分"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">347×</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">5 m</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "116 min" : "116分"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "39 min" : "39分"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "34 min" : "34分"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">84×</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">2 m</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "N/A (out of memory)" : "不可（メモリ不足）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "579 min" : "579分"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "330 min (5.5 h)" : "330分（5.5h）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">8.7×</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? "At 5–10 m resolution, improvement beyond 4 GPUs is limited due to communication overhead. At 2 m resolution, 6 or more GPUs are required, and a single GPU cannot run the simulation due to memory constraints."
              : "5〜10 m解像度では4 GPUを超えると改善が限定的（通信オーバーヘッド）。2 m解像度では6 GPU以上が必要で、単一GPUではメモリ不足で実行できません。"}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Validation Results" : "検証結果"}
          </h2>

          <h3 className="mb-2 font-medium text-foreground">
            {en
              ? "Validation Using VGI (Volunteered Geographic Information)"
              : "VGI（市民からの情報）による検証"}
          </h3>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Flood information from 19 locations was collected from social media posts during the 2017 event,
                and water depths were estimated from reference objects in photos.
                Quantitative depth comparisons were performed at 16 locations.
                RIM2D showed a{" "}
                <strong className="text-foreground">slight underestimation tendency</strong>,
                but the differences were generally within acceptable ranges.
              </>
            ) : (
              <>
                2017年洪水のSNS投稿から19地点の浸水情報を収集し、写真中の参照物から水深を推定。
                16地点で定量的な水深比較を実施しました。
                RIM2Dは<strong className="text-foreground">わずかな過小評価傾向</strong>を示しましたが、
                差は概ね許容範囲内です。
              </>
            )}
          </p>

          <h3 className="mb-2 font-medium text-foreground">
            {en
              ? "Comparison with Official Hazard Maps (HQ100 Scenario)"
              : "公式ハザードマップとの比較（HQ100シナリオ）"}
          </h3>
          <p className="mb-3 text-muted">
            {en
              ? "The model was compared against official flood inundation maps for three catchments, evaluated using the following metric:"
              : "3つの集水域で公式浸水想定と比較し、以下の指標で評価しています："}
          </p>
          <MathBlock tex="\text{CSI} = \frac{TP}{TP + FP + FN}" />
          <p className="mt-2 text-muted">
            {en ? (
              <>
                CSI (Critical Success Index) indicates the spatial agreement of inundated areas.{" "}
                <Math tex="TP" /> is the area both identify as flooded,{" "}
                <Math tex="FP" /> is flooded only in the model, and{" "}
                <Math tex="FN" /> is flooded only in the official map.
                High CSI values were achieved at all resolutions, with{" "}
                <strong className="text-foreground">finer resolution yielding better accuracy</strong>.
              </>
            ) : (
              <>
                CSI（Critical Success Index）は浸水域の空間的一致度を示します。
                <Math tex="TP" />は両者が浸水と判定した領域、
                <Math tex="FP" />はモデルのみ浸水、<Math tex="FN" />は公式のみ浸水です。
                全解像度で高いCSIを達成しており、<strong className="text-foreground">解像度が細かいほど精度が向上</strong>しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Sewer Capacity Sensitivity Analysis" : "下水容量の感度分析"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Sewer capacity" : "下水容量"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Inundated area change" : "浸水面積変化"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Mean depth change" : "平均水深変化"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "50% reduction" : "50%低下"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">+8%</td>
                  <td className="border border-border px-3 py-2 text-muted">+17%</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Complete blockage" : "完全閉塞"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+13%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+23%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Limitations" : "限界"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "No calibration performed" : "キャリブレーション未実施"}
              </strong>:
              {en
                ? " Intentionally run without calibration due to insufficient validation data. Calibration is recommended for operational use"
                : " 検証データの不足から意図的に無校正で実行。運用時には校正が推奨される"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Simplified sewer network" : "下水管網の簡略化"}
              </strong>:
              {en
                ? " Uniform drainage capacity (21 mm/h) assumed. Actual network data and antecedent filling conditions are not considered"
                : " 均一な排水容量（21 mm/h）を仮定。実際の管網データ・先行充水状態は考慮されていない"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Underground structures not considered" : "地下構造物の未考慮"}
              </strong>:
              {en
                ? " Detailed data for underpasses, bridges, and tunnels are not incorporated"
                : " 地下道・橋梁・トンネル等の詳細データは組み込まれていない"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Coarse rainfall input" : "降雨入力の粗さ"}
              </strong>:
              {en
                ? " RADOLAN’s 1 km resolution cannot fully capture sub-kilometer variability of convective rainfall"
                : " RADOLANの1 km解像度は対流性降雨のサブキロメートル変動を捉えきれない"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Limitations of VGI validation" : "VGI検証の限界"}
              </strong>:
              {en
                ? " Only 19 social media photos. No systematic water level or discharge observation data exist"
                : " 19地点のSNS写真のみ。体系的な水位・流量観測データは存在しない"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Parameter uncertainty" : "パラメータ不確実性"}
              </strong>:
              {en
                ? " Within realistic parameter ranges, inundated area varies by ±10–20% and depth by ±15–25%"
                : " 現実的なパラメータ範囲で浸水面積±10–20%、水深±15–25%の不確実性"}
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
              <strong className="text-foreground">
                {en ? "Integration into early warning systems" : "早期警報システムへの統合"}
              </strong>:
              {en
                ? " At 10 m resolution, a 48-hour forecast completes in 8 minutes. Real-time inundation prediction combined with rainfall forecasts is technically feasible"
                : " 10 m解像度なら48時間予測を8分で完了。降雨予報と組み合わせたリアルタイム浸水予測が技術的に可能"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Ensemble forecasting" : "アンサンブル予報"}
              </strong>:
              {en
                ? " Leveraging the computational speed, probabilistic inundation prediction (ensemble runs) considering rainfall uncertainty becomes practical"
                : " 高速性を活かし、降雨不確実性を考慮した確率的浸水予測（アンサンブル実行）が現実的"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Impact-based forecasting and warning" : "影響ベースの予警報"}
              </strong>:
              {en
                ? " Instead of “heavy rain warning,” the next generation of urban flood warnings can present maps showing “where and how deep flooding will occur”"
                : " 「大雨警報」ではなく「どこが何cm浸水するか」をマップで提示する次世代の都市洪水警報が可能に"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Use of cloud GPUs" : "クラウドGPUの活用"}
              </strong>:
              {en
                ? " Cost-effective operation is possible using GPU instances from cloud HPC providers rather than dedicated clusters"
                : " 専用クラスタでなくクラウドHPCプロバイダのGPUインスタンスで費用対効果の高い運用が可能"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Applicability to cities in developing countries" : "途上国都市への応用可能性"}
              </strong>:
              {en
                ? " Since the model can be built with OpenStreetMap building data and open DEMs, it is applicable to cities without detailed sewer network data"
                : " OpenStreetMap建物データとオープンDEMで構築可能なため、詳細な下水管網データがない都市でも適用できる"}
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
              Khosh Bin Ghomash, S., Deng, S., &amp; Apel, H. (2026).
              Enabling real-time high-resolution flood forecasting for the entire state of Berlin
              through multi-GPU accelerated physics-based modeling.
              <em> Natural Hazards and Earth System Sciences</em>, 26, 85–101.
              DOI: 10.5194/nhess-26-85-2026
            </li>
            <li>
              Bates, P. D., Horritt, M. S., &amp; Fewtrell, T. J. (2010).
              A simple inertial formulation of the shallow water equations for efficient
              two-dimensional flood inundation modelling.
              <em> Journal of Hydrology</em>, 387(1–2), 33–45.
            </li>
            <li>
              de Almeida, G. A. M., Bates, P., Freer, J. E., &amp; Souvignet, M. (2012).
              Improving the stability of a simple formulation of the shallow water equations for 2-D flood modeling.
              <em> Water Resources Research</em>, 48(5), W05528.
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
