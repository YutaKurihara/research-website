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
            2026-04-12
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Large-Scale Flood Risk Assessment in Central Asia — Application to Data-Scarce Regions"
              : "中央アジアにおける大規模洪水リスク評価 — データ不足地域への適用"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            Ceresa, P. et al. (2025). Large-scale flood risk assessment in data-scarce areas: an application to Central Asia.
            <em> Natural Hazards and Earth System Sciences</em>, 25, 403-428.
          </p>
          <a href="https://doi.org/10.5194/nhess-25-403-2025" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.5194/nhess-25-403-2025
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
                Flood risk assessment in developing and emerging countries is fundamentally bottlenecked by a lack of observational data.
                This paper is groundbreaking in demonstrating, across five Central Asian countries,{" "}
                <strong className="text-foreground">how global datasets and local information can be combined
                to achieve reliable risk assessment even in data-scarce regions</strong>.
                The methodology is highly transferable to regions with similar data constraints, such as the Philippines and Southeast Asia,
                and serves as a valuable methodological reference for disaster risk consultants and researchers.
              </>
            ) : (
              <>
                途上国や新興国での洪水リスク評価は、観測データの不足が最大のボトルネックです。
                本論文は、<strong className="text-foreground">グローバルデータセットとローカル情報を
                どのように組み合わせればデータ不足地域でも信頼性のあるリスク評価が可能か</strong>を、
                中央アジア5カ国を対象に実証した点で画期的です。
                フィリピンや東南アジアなど、同様のデータ制約を持つ地域への展開可能性が高く、
                防災コンサルタントや研究者にとって方法論的な参考になります。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Background and Challenges" : "背景と課題"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                River flooding in the five Central Asian countries (Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, and Uzbekistan)
                is primarily driven by <strong className="text-foreground">spring-to-summer snowmelt</strong>.
                Between 1988 and 2007, floods ranked second among natural disasters in terms of fatalities and accounted for 19% of the affected population.
              </>
            ) : (
              <>
                中央アジア5カ国（カザフスタン、キルギス、タジキスタン、トルクメニスタン、ウズベキスタン）の
                河川洪水は主に<strong className="text-foreground">春〜夏の融雪</strong>に起因し、
                1988〜2007年の間に自然災害による死者数で第2位、被災人口の19%を占めました。
              </>
            )}
          </p>
          <p className="mt-3 text-muted">
            {en
              ? "However, this region faces several unique challenges:"
              : "しかし、この地域にはいくつかの固有の困難があります。"}
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-2 text-muted">
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Extremely limited streamflow monitoring networks</strong>
                  {" "}&mdash; following the collapse of the Soviet Union, many gauging stations were closed or deteriorated, making long-term continuous data difficult to obtain.
                </>
              ) : (
                <>
                  <strong className="text-foreground">流量観測ネットワークが極めて限定的</strong>
                  {" "}&mdash; 旧ソ連崩壊後、多くの観測所が閉鎖・劣化し、長期の連続データが得にくい。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Institutional support required for accessing hydrometeorological data</strong>
                  {" "}&mdash; data is not publicly available and cannot be obtained without direct cooperation with local agencies.
                </>
              ) : (
                <>
                  <strong className="text-foreground">気象・水文データの取得に制度的支援が必須</strong>
                  {" "}&mdash; データが公開されておらず、現地機関との直接協力なしには入手困難。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Transboundary nature of rivers</strong>
                  {" "}&mdash; upstream reaches of Kazakhstan{"'"}s rivers lie in Kyrgyzstan and Tajikistan,
                  making country-level assessments insufficient for capturing the full picture.
                </>
              ) : (
                <>
                  <strong className="text-foreground">河川が国境を越えて流れる越境性</strong>
                  {" "}&mdash; カザフスタンの河川上流がキルギスやタジキスタンにあるなど、
                  国単位の評価では全体像を把握できない。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Lack of damage records</strong>
                  {" "}&mdash; historical flood damage data is scarce, making model validation difficult.
                </>
              ) : (
                <>
                  <strong className="text-foreground">被害記録の欠如</strong>
                  {" "}&mdash; 過去の洪水被害額の記録がほとんど残っておらず、モデル検証が難しい。
                </>
              )}
            </li>
          </ul>
          <p className="mt-3 text-muted">
            {en ? (
              <>
                Due to these constraints,{" "}
                <strong className="text-foreground">this study is the first</strong> to conduct a quantitative probabilistic risk assessment in this region.
              </>
            ) : (
              <>
                これらの制約のため、この地域で定量的な確率論的リスク評価が行われたのは
                <strong className="text-foreground">本研究が初めて</strong>です。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Methodological Highlights" : "手法のポイント"}
          </h2>

          <h3 className="mb-2 font-medium text-foreground">
            {en
              ? "1. Hybrid Global-Local Data Strategy"
              : "1. グローバル×ローカルのハイブリッドデータ戦略"}
          </h3>
          <p className="mb-2 text-muted">
            {en ? (
              <>
                The core contribution of this study is its clarification of{" "}
                <strong className="text-foreground">where global data can serve as a substitute
                and where local data is indispensable</strong>.
              </>
            ) : (
              <>
                本研究の核心は、<strong className="text-foreground">どこまでグローバルデータで代替でき、
                どこにローカルデータが不可欠か</strong>を明確にした点です。
              </>
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Data Type" : "データ種別"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Global" : "グローバル"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Local" : "ローカル"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Meteorology" : "気象"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "ERA5-Land (1 km, hourly, 1981–2020)" : "ERA5-Land（1km、1時間、1981-2020）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">&mdash;</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Topography" : "地形"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">MERIT Hydro DEM</td>
                  <td className="border border-border px-3 py-2 text-muted">&mdash;</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Discharge" : "流量"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">GRDC</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Observed data from national hydrological agencies" : "各国水文機関の観測データ"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Buildings" : "建物"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "WorldPop population density" : "WorldPop人口密度"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Building archetypes, construction unit costs (local expert interviews)"
                      : "建物アーキタイプ、建設単価（現地技術者への聞き取り）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Flood Protection Infrastructure" : "防災インフラ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">&mdash;</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Protection levels for major cities (provided by local stakeholders)"
                      : "主要都市の防御レベル（現地ステークホルダー提供）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en ? (
              <>
                A particularly important finding is that{" "}
                <strong className="text-foreground">local data is indispensable for vulnerability assessment (building damage functions)</strong>.
                Building structure, materials, and costs vary significantly by country and cannot be substituted with global data.
              </>
            ) : (
              <>
                特に重要なのは、<strong className="text-foreground">脆弱性評価（建物の被害関数）には
                ローカルデータが不可欠</strong>という知見です。建物構造・材料・コストは国ごとに大きく異なるため、
                グローバルデータでは代替できません。
              </>
            )}
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">
            {en
              ? "2. 10,000-Year Synthetic Flood Catalogue"
              : "2. 10,000年合成洪水カタログ"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                Conventional flood risk assessments create hazard maps for each river reach at individual return periods
                (5-year, 10-year, ..., 1,000-year) and compute damages separately for each. However, this approach cannot account for{" "}
                <strong className="text-foreground">spatial correlation where multiple rivers flood simultaneously</strong>.
              </>
            ) : (
              <>
                従来の洪水リスク評価では、各河川区間のハザードマップ（5年、10年、...、1,000年再現期間）を
                個別に作成し、それぞれに被害を計算していました。しかし、この方法では
                <strong className="text-foreground">複数の河川が同時に氾濫する空間相関</strong>を考慮できません。
              </>
            )}
          </p>
          <p className="mt-3 text-muted">
            {en ? (
              <>
                This study modeled flood occurrence probabilities and spatial correlations across 78,000 river reaches to generate{" "}
                <strong className="text-foreground">10,000 years of realistic synthetic flood scenarios</strong>.
                Specifically:
              </>
            ) : (
              <>
                本研究では、78,000の河川区間の洪水発生確率と空間相関をモデル化し、
                <strong className="text-foreground">10,000年分のリアルな合成洪水シナリオ</strong>を生成しました。
                具体的には：
              </>
            )}
          </p>
          <ul className="mt-2 ml-4 list-decimal space-y-1 text-muted">
            <li>{en ? "Clustering correlated river reaches" : "相関のある河川区間をクラスタリング"}</li>
            <li>{en ? "Determining activation probability per cluster" : "クラスタごとの活性化確率を決定"}</li>
            <li>{en ? "Probabilistically generating combinations of flooded river reaches for each event" : "各イベントで氾濫する河川区間の組み合わせを確率的に生成"}</li>
          </ul>
          <p className="mt-3 text-muted">
            {en ? (
              <>
                This enables evaluation of the full range of risk, including extreme scenarios where
                {" "}&ldquo;1-in-100-year floods occur simultaneously on multiple rivers.&rdquo;
                The approach directly generates{" "}
                <strong className="text-foreground">loss exceedance probability curves</strong> applicable
                to insurance and risk finance design.
              </>
            ) : (
              <>
                これにより、「100年に1度の洪水が同時に複数の河川で発生する」ような
                極端シナリオも含めたリスクの全範囲を評価できます。
                この手法は<strong className="text-foreground">保険やリスクファイナンスの設計</strong>に
                直接利用可能な損失超過確率曲線を生成します。
              </>
            )}
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">
            {en
              ? "3. Estimation of Flood Protection Infrastructure"
              : "3. 防災インフラの推定手法"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                Detailed data on flood protection infrastructure (levees, etc.) is scarce in Central Asia.
                This study assumed a{" "}
                <strong className="text-foreground">correlation between urban population density and protection level</strong>,
                building a model where river reaches flowing through more populated cities have higher protection levels.
                For major cities such as Almaty and Astana, specific data was obtained from local stakeholders.
              </>
            ) : (
              <>
                中央アジアでは防災インフラ（堤防等）の詳細データがほとんど存在しません。
                本研究では、<strong className="text-foreground">都市人口密度と防御レベルの相関</strong>を仮定し、
                「人口が多い都市を流れる河川区間ほど高い防御レベルを持つ」というモデルを構築しました。
                アルマトイやアスタナなど主要都市については、現地ステークホルダーから具体的なデータを取得しています。
              </>
            )}
          </p>
          <p className="mt-3 text-muted">
            {en
              ? "Comparing scenarios with and without protection showed that flood protection infrastructure is particularly effective in Kazakhstan, Turkmenistan, and Uzbekistan."
              : "防御ありと防御なしのシナリオ比較では、カザフスタン、トルクメニスタン、ウズベキスタンで防御インフラの効果が特に大きいことが示されました。"}
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">
            {en
              ? "4. Climate Change Impact Assessment"
              : "4. 気候変動の影響評価"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                Risk projections for 2080 were made using the RegCM4.3.5 regional climate model (driven by MPI-ESM-MR, RCP4.5).
                Bias correction employed the{" "}
                <strong className="text-foreground">PDF matching method</strong> (correcting the entire probability density function),
                adjusting not only the mean and standard deviation but the full shape of the distribution.
              </>
            ) : (
              <>
                RegCM4.3.5地域気候モデル（MPI-ESM-MR駆動、RCP4.5）を用いて2080年のリスクを予測。
                バイアス補正には<strong className="text-foreground">PDF matching法</strong>（確率密度関数全体を補正）を採用し、
                平均値や標準偏差だけでなく分布の形状全体を補正しています。
              </>
            )}
          </p>
          <p className="mt-3 text-muted">
            {en ? (
              <>
                Results varied substantially by region, showing a{" "}
                <strong className="text-foreground">heterogeneous pattern</strong> where risk increases in some areas and decreases in others.
                This is due to the complex interplay of changes in snowmelt timing driven by rising temperatures,
                shifting precipitation patterns, and local topographic effects.
                These findings suggest that climate change adaptation measures{" "}
                &ldquo;require region-specific responses rather than a one-size-fits-all approach.&rdquo;
              </>
            ) : (
              <>
                結果は地域によって大きく異なり、
                一部ではリスクが増加、一部では減少するという<strong className="text-foreground">不均一なパターン</strong>を示しました。
                これは、気温上昇による融雪タイミングの変化、降水パターンの変化、
                局所的な地形効果が複雑に絡み合っているためです。
                この結果は、気候変動適応策が「一律ではなく地域ごとに異なる対応が必要」であることを示唆しています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Key Numerical Results" : "主な数値結果"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Country" : "国"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Absolute Risk" : "絶対リスク"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Relative Risk (‰)" : "相対リスク（‰）"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Most Vulnerable Sector" : "最脆弱セクター"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Kazakhstan" : "カザフスタン"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Highest" : "最大"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">&gt; 6</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Transport, Agriculture" : "交通・農業"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Tajikistan" : "タジキスタン"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Medium" : "中"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">&gt; 6</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Transport, Agriculture" : "交通・農業"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Uzbekistan" : "ウズベキスタン"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Large" : "大"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">&gt; 2</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Transport, Agriculture" : "交通・農業"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Kyrgyzstan" : "キルギス"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Small" : "小"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">&gt; 2</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Transport" : "交通"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Turkmenistan" : "トルクメニスタン"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Small" : "小"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">&gt; 2</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Agriculture" : "農業"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "Relative risk = average annual loss / total exposed assets (‰). Kazakhstan and Tajikistan differ in absolute scale but share similarly high relative damage rates against their exposed assets."
              : "相対リスク = 年平均損失 / 曝露資産総額（‰）。カザフスタンとタジキスタンは絶対規模では異なるが、曝露資産に対する相対的な被害率では同程度に高い。"}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Limitations" : "限界"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              {en
                ? "Validation limited to a single event in Tajikistan (due to lack of damage records)"
                : "検証がタジキスタンの1イベントに限定（被害記録の欠如が原因）"}
            </li>
            <li>
              {en
                ? "Climate change analysis uses only a single GCM × RCP scenario (potentially underestimating the range of uncertainty)"
                : "気候変動は単一のGCM×RCPシナリオのみ（不確実性の幅を過小評価する可能性）"}
            </li>
            <li>
              {en
                ? "Flood protection estimation relies on population density correlation rather than engineering specifications"
                : "防災インフラの推定が人口密度相関に依存し、工学的仕様に基づかない"}
            </li>
            <li>
              {en
                ? "Dam and reservoir operation rules are simplified"
                : "ダム・貯水池の操作ルールが簡略化されている"}
            </li>
            <li>
              {en
                ? "Climate change risk covers only the residential sector (integration with future economic development scenarios not yet implemented)"
                : "気候変動下のリスクは住宅セクターのみ（将来の経済発展シナリオとの統合が未実施）"}
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
              Ceresa, P. et al. (2025).
              Large-scale flood risk assessment in data-scarce areas: an application to Central Asia.
              <em>Natural Hazards and Earth System Sciences</em>, 25, 403-428.
              DOI: 10.5194/nhess-25-403-2025
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted">
            <a href="https://nhess.copernicus.org/articles/25/403/2025/" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">
              {en ? "Full paper (open access)" : "論文全文（オープンアクセス）"}
            </a>
          </p>
        </section>

      </article>
    </div>
  );
}
