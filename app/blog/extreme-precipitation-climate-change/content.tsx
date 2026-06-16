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
            2026-04-16
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Climate Change and Increasing Extreme Precipitation — Higher Risk in Water-Rich Regions"
              : "気候変動と極端降水の増大 — 水資源量が多い地域ほどリスクが高まる"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            Tabari, H. (2020). Climate change impact on flood and extreme precipitation increases with water availability.
            <em> Scientific Reports</em>, 10, 13768.
          </p>
          <a href="https://doi.org/10.1038/s41598-020-70816-2" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.1038/s41598-020-70816-2
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
              ? <>It is widely known that extreme precipitation increases under climate change, but this study quantitatively demonstrates at a global scale that <strong className="text-foreground">the rate of increase is positively correlated with a region{"'"}s existing water availability</strong>. In other words, humid regions with higher annual precipitation and runoff experience greater climate-driven increases in extreme precipitation and flood discharge. Tropical humid regions such as the Philippines and Southeast Asia fall into the highest-risk category under this pattern, providing important evidence for reassessing future flood risk and infrastructure design.</>
              : <>気候変動で極端降水が増加することは広く知られていますが、<strong className="text-foreground">その増加率が地域の既存の水資源量と正の相関を示す</strong>ことを全球スケールで定量的に示した研究です。つまり、年間降水量や流出量が多い湿潤地域ほど、極端降水と洪水流量の気候変動による増加率が大きくなります。フィリピンや東南アジアのような熱帯湿潤地域は、このパターンにおいて最もリスクが増大するカテゴリに属しており、将来の洪水リスク評価やインフラ設計の見直しに重要な根拠を提供します。</>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Background — The Clausius-Clapeyron Relation and Its Limitations"
              : "背景 — クラウジウス・クラペイロンの法則とその限界"}
          </h2>
          <p className="text-muted">
            {en
              ? <>As temperature rises, the saturation vapor pressure of the atmosphere increases at a rate of <strong className="text-foreground">approximately 7%/°C</strong> following the Clausius-Clapeyron (C-C) relation. This is the fundamental thermodynamic mechanism driving the increase in extreme precipitation.</>
              : <>気温が上昇すると、大気の飽和水蒸気量はクラウジウス・クラペイロン（C-C）の関係に従い<strong className="text-foreground">約7%/℃</strong>の割合で増加します。これが極端降水の増大を駆動する基本的な熱力学的メカニズムです。</>}
          </p>
          <p className="mt-3 text-muted">
            {en
              ? "However, actual precipitation changes are known to deviate substantially from the uniform C-C prediction. The main reasons are:"
              : "しかし、実際の降水変化はC-Cの一様な予測からは大きく外れることが知られています。その主な理由は："}
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Regional differences in moisture supply" : "水蒸気供給の地域差"}
              </strong>
              {en
                ? " — Even if saturation vapor pressure increases, the actual moisture supply depends on the regional water cycle. Arid regions end up in a state where \"capacity increases but content is insufficient\""
                : " — 飽和水蒸気量が増えても、実際に供給される水蒸気量は地域の水循環に依存する。乾燥地域では「容量は増えるが中身が足りない」状態になる"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Changes in atmospheric dynamics" : "大気力学の変化"}
              </strong>
              {en
                ? " — Climate change alters atmospheric circulation patterns (storm tracks, monsoon intensity), reorganizing the spatial distribution of precipitation"
                : " — 気候変動により大気循環パターン（ストームトラック、モンスーン強度）が変化し、降水の空間分布が再編される"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Nonlinearity of convection" : "対流の非線形性"}
              </strong>
              {en
                ? " — Particularly for short-duration precipitation, \"super C-C\" scaling exceeding 7%/°C (up to 14%/°C) has been observed, with differing responses between convective and stratiform precipitation"
                : " — 特に短時間降水では、C-Cの7%/℃を超える「スーパーC-C」スケーリング（最大14%/℃）が観測されており、対流性降水と層状性降水で応答が異なる"}
            </li>
          </ul>
          <p className="mt-3 text-muted">
            {en
              ? "The originality of this paper lies in its unified interpretation of these complex factors through a single explanatory variable: \"water availability.\""
              : "本論文の独自性は、これらの複雑な要因を「水の利用可能性」という単一の説明変数で統一的に解釈した点にあります。"}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Data and Methods" : "データと手法"}
          </h2>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "Data Used" : "使用データ"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Data" : "データ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Source" : "ソース"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Resolution" : "解像度"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "GCM output (precipitation & temperature)" : "GCM出力（降水・気温）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "CMIP5 multi-model ensemble" : "CMIP5 マルチモデルアンサンブル"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Model-dependent (1°–2.5°)" : "モデル依存（1°〜2.5°）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Streamflow data" : "流量データ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "ISIMIP2b global hydrological models (4 models)" : "ISIMIP2bグローバル水文モデル（4モデル）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">0.5°</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Observed annual precipitation" : "観測年降水量"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">CRU TS / GPCC</td>
                  <td className="border border-border px-3 py-2 text-muted">0.5°</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Analytical Methods" : "解析手法"}
          </h3>
          <ol className="ml-4 list-decimal space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Computation of extreme precipitation indices" : "極端降水指標の算出"}
              </strong>
              {en
                ? " — For each grid cell, annual maximum 1-day precipitation (Rx1day), annual maximum 5-day precipitation (Rx5day), and daily precipitation exceeding the 99th percentile (R99p) were computed"
                : " — 各グリッドセルで年最大日降水量（Rx1day）、年最大5日降水量（Rx5day）、99パーセンタイル超過日降水量（R99p）を計算"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Calculation of future change rates" : "将来変化率の算出"}
              </strong>
              {en
                ? " — Percentage changes in each index were calculated for the near future (2021–2050) and end-of-century (2071–2100) relative to the baseline period (1976–2005), by RCP scenario"
                : " — 基準期間（1976-2005）に対する近未来（2021-2050）および世紀末（2071-2100）の各指標の変化率（%）をRCPシナリオ別に計算"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Regression analysis with water availability" : "水資源量との回帰分析"}
              </strong>
              {en
                ? " — Spatial regression was performed using annual precipitation (or annual runoff) at each grid cell as the explanatory variable and the rate of change in extreme precipitation as the response variable"
                : " — 各グリッドの年間降水量（または年間流出量）を説明変数、極端降水の変化率を応答変数とした空間回帰を実施"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Changes in flood discharge" : "洪水流量の変化"}
              </strong>
              {en
                ? " — Using four ISIMIP2b global hydrological models (H08, LPJmL, MPI-HM, WaterGAP2), 100-year return period flood discharges were fitted with the Generalized Extreme Value (GEV) distribution to calculate change rates"
                : " — ISIMIP2bの4つのグローバル水文モデル（H08, LPJmL, MPI-HM, WaterGAP2）で100年確率洪水流量を一般化極値分布（GEV）でフィッティングし、変化率を算出"}
            </li>
          </ol>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Key Quantitative Findings" : "主な定量的知見"}
          </h2>

          <h3 className="mb-2 font-medium text-foreground">
            {en ? "Rate of Change in Extreme Precipitation" : "極端降水の変化率"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Index" : "指標"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Period" : "期間"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Arid Regions" : "乾燥地域"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Humid Regions" : "湿潤地域"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Scenario" : "シナリオ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Rx1day</td>
                  <td className="border border-border px-3 py-2 text-muted">2071-2100</td>
                  <td className="border border-border px-3 py-2 text-muted">+5〜10%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+20〜35%</td>
                  <td className="border border-border px-3 py-2 text-muted">RCP8.5</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Rx5day</td>
                  <td className="border border-border px-3 py-2 text-muted">2071-2100</td>
                  <td className="border border-border px-3 py-2 text-muted">+3〜8%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+15〜30%</td>
                  <td className="border border-border px-3 py-2 text-muted">RCP8.5</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">R99p</td>
                  <td className="border border-border px-3 py-2 text-muted">2071-2100</td>
                  <td className="border border-border px-3 py-2 text-muted">+10〜20%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+30〜50%</td>
                  <td className="border border-border px-3 py-2 text-muted">RCP8.5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Changes in 100-Year Return Period Flood Discharge" : "100年確率洪水流量の変化"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Annual Runoff Range" : "年間流出量帯"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Change in 100-Year Flood" : "100年洪水の変化率"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Current 100-Year Becomes" : "現在の100年が将来何年に"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Low (<200 mm/yr)" : "低（<200 mm/年）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">+5〜15%</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "~70–80 yr" : "〜70〜80年"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Medium (200–600 mm/yr)" : "中（200〜600 mm/年）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">+10〜25%</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "~40–60 yr" : "〜40〜60年"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "High (>600 mm/yr)" : "高（>600 mm/年）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+20〜40%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "~20–50 yr" : "〜20〜50年"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>These results show that <strong className="text-foreground">rivers with greater annual runoff exhibit larger increases in 100-year return period flood discharge</strong>. By the end of the century, the current 100-year flood is projected to become a 20–50-year event in some humid regions.</>
              : <>この結果は、<strong className="text-foreground">年間流出量が大きい河川ほど100年確率洪水流量の増加率が大きい</strong>ことを示しています。現在の100年確率洪水が、世紀末には一部の湿潤地域で20〜50年確率のイベントに頻度が上がる計算です。</>}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Regression Analysis Results" : "回帰分析の結果"}
          </h3>
          <p className="text-muted">
            {en
              ? <>Spatial regression of extreme precipitation change rates against annual precipitation confirmed <strong className="text-foreground">positive regression coefficients</strong> across all scenarios and time periods. This relationship is robust from RCP2.6 (low emissions) to RCP8.5 (high emissions), with steeper regression slopes under more severe emission scenarios. This is consistent with the <strong className="text-foreground">{"“"}wet-get-wetter{"”"}</strong> pattern, where the gap between humid and arid regions widens as warming progresses.</>
              : <>極端降水の変化率と年間降水量の空間回帰では、<strong className="text-foreground">正の回帰係数</strong>が全シナリオ・全期間で確認されました。この関係はRCP2.6（低排出）からRCP8.5（高排出）まで堅牢であり、排出シナリオが厳しいほど回帰の傾きが急になります。これは、温暖化が進むほど湿潤/乾燥間の格差が拡大する「<strong className="text-foreground">wet-get-wetter</strong>」パターンと整合しています。</>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Implications for Infrastructure Design" : "インフラ設計への含意"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Reassessment of design loads" : "設計外力の見直し"}
              </strong>
              {en
                ? " — Dam, levee, and drainage designs based on the current 100-year precipitation may only withstand approximately 50-year events in the future. This discrepancy is particularly large in humid regions"
                : " — 現在の100年確率降水量に基づくダム・堤防・排水路の設計が、将来的には50年確率程度のイベントにしか対応できなくなる可能性がある。特に湿潤地域ではこの乖離が大きい"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Need for GCM downscaling" : "GCMダウンスケーリングの必要性"}
              </strong>
              {en
                ? " — The coarse spatial resolution of GCMs cannot fully capture orographic precipitation amplification over island topography. Statistical downscaling (e.g., Quantile Mapping) to local scales is essential"
                : " — GCMの粗い空間解像度では、島嶼地形での地形性降水の増幅を捉えきれない。統計的ダウンスケーリング（Quantile Mapping等）によるローカルスケールへの変換が不可欠"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Prioritization of adaptation investments" : "適応投資の優先順位"}
              </strong>
              {en
                ? " — Since risk increases more in water-rich regions, this provides an objective basis for identifying areas where flood adaptation investments offer the highest cost-effectiveness"
                : " — 水資源が豊かな地域ほどリスク増大が大きいため、洪水適応投資の費用対効果が最も高い地域を客観的に特定する根拠となる"}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Limitations" : "限界"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              {en
                ? "CMIP5 models were used; some CMIP6 models estimate higher climate sensitivity. However, the structural pattern of \"positive correlation between water availability and change rate\" is expected to persist in CMIP6 as it is based on physical mechanisms"
                : "CMIP5モデルを使用しており、CMIP6では一部モデルの気候感度が高く推定されている。ただし「水資源量と変化率の正の相関」という構造的パターンは物理メカニズムに基づくため、CMIP6でも維持される"}
            </li>
            <li>
              {en
                ? "This is a global-scale analysis and does not account for local topographic effects, land-use change, or urbanization"
                : "グローバルスケールの分析であり、局所的な地形効果・土地利用変化・都市化の影響は考慮されていない"}
            </li>
            <li>
              {en
                ? "In regions where GCM precipitation bias is large (especially mountainous and island areas), change rate estimates may contain systematic errors"
                : "GCMの降水バイアスが大きい地域（特に山岳域・島嶼域）では、変化率の推定に系統的な誤差が含まれる可能性がある"}
            </li>
            <li>
              {en
                ? "Structural uncertainty across hydrological models (spread among 4 models) affecting flood discharge change estimates has been quantified but not fully resolved"
                : "水文モデルの構造的不確実性（4モデル間のばらつき）が洪水流量の変化推定に与える影響は定量化されているが、完全には解消されていない"}
            </li>
            <li>
              {en
                ? "Note that the \"wet-get-wetter\" pattern does not necessarily hold for mean precipitation; this study is limited to extreme precipitation and peak discharge"
                : "「wet-get-wetter」パターンは平均降水量では必ずしも成立しないが、本研究は極端降水とピーク流量に限定した分析であることに注意"}
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
              Tabari, H. (2020). Climate change impact on flood and extreme precipitation increases
              with water availability. <em>Sci. Rep.</em>, 10, 13768.
              DOI: 10.1038/s41598-020-70816-2
            </li>
            <li>
              Held, I.M. &amp; Soden, B.J. (2006). Robust responses of the hydrological cycle to
              global warming. <em>J. Climate</em>, 19, 5686-5699.
              DOI: 10.1175/JCLI3990.1
            </li>
            <li>
              Westra, S. et al. (2014). Future changes to the intensity and frequency of
              short-duration extreme rainfall. <em>Rev. Geophys.</em>, 52, 522-555.
              DOI: 10.1002/2014RG000464
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
