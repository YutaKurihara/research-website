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
              ? "S2S Forecasting for Disaster Preparedness — How Far Can Subseasonal Predictions Support Decision-Making?"
              : "S2S予測の防災活用 — サブシーズナル予測はどこまで意思決定に使えるか"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            White, C.J. et al. (2022). Advances in the application and utility of subseasonal-to-seasonal predictions.
            <em> Bulletin of the American Meteorological Society</em>, 103(6), E1448-E1472.
          </p>
          <a href="https://doi.org/10.1175/BAMS-D-20-0224.1" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.1175/BAMS-D-20-0224.1
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
              ? <>The timescale known as <strong className="text-foreground">subseasonal (2 weeks to 2 months)</strong>, which lies between weather forecasts (1{"–10"} days) and seasonal forecasts (3{"–6"} months), is the most practically useful yet the most challenging in terms of forecast skill for planning anticipatory responses to floods, droughts, and heat waves. This review, centered on the S2S Project database, systematically organizes applications across seven sectors including water resources, agriculture, health, and energy. It is a large-scale review co-authored by over 70 researchers that comprehensively discusses the forecast skill of multi-model ensembles from 11 institutions, statistical post-processing methods, and implementation challenges for decision-making.</>
              : <>{"天気予報（1〜10日）と季節予報（3〜6ヶ月）の間にある"}<strong className="text-foreground">{"サブシーズナル（2週間〜2ヶ月）"}</strong>{"というタイムスケールは、洪水・干ばつ・熱波への事前対応を計画するうえで最も実用的でありながら、予測スキルの面で最も困難な領域です。本レビューは、S2Sプロジェクトのデータベースを中核に、水資源・農業・健康・エネルギーなど7分野での活用事例を体系的に整理し、11機関のマルチモデルアンサンブルの予測スキル、統計的後処理手法、そして意思決定への実装上の課題を包括的に論じた70名超の共著による大型レビューです。"}</>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Background — Why Is S2S So Difficult?" : "背景 — なぜS2Sが難しいのか"}
          </h2>
          <p className="text-muted">
            {en
              ? "Medium-range forecasts (∼10 days) depend heavily on atmospheric initial conditions, while seasonal forecasts are supported by boundary conditions such as sea surface temperature (SST). The S2S timescale lies in this transitional zone, facing a dual challenge: the memory of initial conditions fades while the signal from boundary conditions remains weak."
              : "中期予報（〜10日）は大気の初期値に強く依存し、季節予報は海面水温（SST）などの境界条件に支えられます。S2Sタイムスケールはこの遷移領域にあたり、初期値の記憶が薄れる一方で境界条件のシグナルはまだ弱いという二重の困難を抱えています。"}
          </p>
          <p className="mt-3 text-muted">
            {en
              ? <>However, in recent years the following <strong className="text-foreground">Sources of Predictability</strong> have been identified and improvements in forecast skill have been reported:</>
              : <>{"しかし近年、以下の"}<strong className="text-foreground">{"予測可能性の源泉（Sources of Predictability）"}</strong>{"が明確化され、予測スキルの向上が報告されています："}</>}
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Source of Predictability" : "予測可能性の源泉"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Mechanism" : "メカニズム"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Effective Lead Time" : "有効リード"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "MJO (Madden–Julian Oscillation)" : "MJO（マッデン・ジュリアン振動）"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "30–60 day cycle of tropical convective activity causes teleconnections to mid-high latitudes" : "30〜60日周期の熱帯対流活動が中高緯度にテレコネクション"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "3–4 weeks" : "3〜4週間"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Sudden Stratospheric Warming (SSW)" : "成層圏突然昇温（SSW）"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Collapse of the stratospheric polar vortex induces tropospheric blocking" : "成層圏極渦の崩壊が対流圏のブロッキングを誘発"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "2–6 weeks" : "2〜6週間"}</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Soil Moisture" : "土壌水分"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Positive feedback on precipitation through land surface evaporation" : "陸面蒸発量を介した降水の正フィードバック"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "1–2 weeks" : "1〜2週間"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Sea Ice" : "海氷"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Arctic sea ice variability influences mid-latitude atmospheric circulation" : "北極海氷の変動が中緯度の大気循環に影響"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "2–4 weeks" : "2〜4週間"}</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">ENSO</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Seasonal prediction of tropical Pacific SST governs precipitation fields" : "熱帯太平洋SSTの季節予測が降水場を規定"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "1–6 months" : "1〜6ヶ月"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>In the tropics especially, MJO-driven precipitation patterns have been confirmed across multiple models to exhibit <strong className="text-foreground">significant skill up to 3{"–4"} weeks ahead</strong>, directly benefiting precipitation forecasts in Southeast Asia.</>
              : <>{"特に熱帯域では、MJOに駆動された降水パターンが"}<strong className="text-foreground">{"３〜４週間先まで有意なスキル"}</strong>{"を持つことが複数のモデルで確認されており、東南アジアの降水予測に直接的な恩恵をもたらしています。"}</>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Structure of the S2S Database" : "S2Sデータベースの構成"}
          </h2>
          <p className="text-muted">
            {en
              ? <>The <strong className="text-foreground">S2S Prediction Project Database</strong>, operated by the WMO/WWRP S2S Project, archives subseasonal forecasts from the following 11 institutions:</>
              : <>WMO/WWRP{"のS2Sプロジェクトが運用する"}<strong className="text-foreground">S2S Prediction Project Database</strong>{"は、以下の11機関のサブシーズナル予報をアーカイブしています："}</>}
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Institution" : "機関"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Model" : "モデル"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Ensemble Size" : "アンサンブル数"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Forecast Range" : "予報期間"}</th>
                </tr>
              </thead>
              <tbody>
                {([
                  ["ECMWF", "IFS", "51", en ? "46 days" : "46日"],
                  ["NCEP (CPC)", "CFSv2", en ? "16 (4× daily)" : "16 (日4回)", en ? "44 days" : "44日"],
                  ["UKMO (Met Office)", "GloSea6", "28", en ? "60 days" : "60日"],
                  [en ? "BOM (Bureau of Meteorology, Australia)" : "BOM (豪気象局)", "ACCESS-S2", "33", en ? "62 days" : "62日"],
                  [en ? "ECCC (Environment and Climate Change Canada)" : "ECCC (カナダ)", "GEM-NEMO", "21", en ? "32 days" : "32日"],
                  [en ? "CMA (China Meteorological Administration)" : "CMA (中国)", "BCC-CSM2", "4", en ? "60 days" : "60日"],
                  [en ? "JMA (Japan Meteorological Agency)" : "JMA (日本)", "JMA/MRI-CPS3", "5", en ? "34 days" : "34日"],
                  [en ? "HMCR (Hydrometeorological Centre of Russia)" : "HMCR (ロシア)", "SL-AV", "20", en ? "61 days" : "61日"],
                  [en ? "KMA (Korea Meteorological Administration)" : "KMA (韓国)", "GloSea5-GC2", "4", en ? "60 days" : "60日"],
                  ["ISAC-CNR", "GLOBO", "5", en ? "32 days" : "32日"],
                  ["Météo-France", "CNRM", "15", en ? "61 days" : "61日"],
                ] as string[][]).map(([org, model, ens, lead], i) => (
                  <tr key={org} className={i % 2 !== 0 ? "bg-accent-light/50" : ""}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{org}</td>
                    <td className="border border-border px-3 py-2 text-muted">{model}</td>
                    <td className="border border-border px-3 py-2 text-muted">{ens}</td>
                    <td className="border border-border px-3 py-2 text-muted">{lead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>Each model provides <strong className="text-foreground">over 20 years of hindcasts (reforecasts)</strong> in addition to real-time forecasts, serving as the foundation for calibration and verification. Data are publicly available from two archive centers at ECMWF and CMA.</>
              : <>{"各モデルはリアルタイム予報に加えて"}<strong className="text-foreground">{"２０年以上のヒンドキャスト（再予報）"}</strong>{"を提供しており、これがキャリブレーションと検証の基盤となります。データはECMWFとCMAの２つのアーカイブセンターで公開されています。"}</>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Statistical Post-Processing — How to Correct Raw Ensembles" : "統計的後処理 — 生のアンサンブルをどう補正するか"}
          </h2>
          <p className="text-muted">
            {en
              ? <>What this review emphasizes is that <strong className="text-foreground">raw S2S ensemble output is insufficiently calibrated</strong>. Specifically:</>
              : <>{"本レビューが強調するのは、"}<strong className="text-foreground">{"生のS2Sアンサンブル出力はキャリブレーション不足である"}</strong>{"という点です。具体的には："}</>}
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">{en ? "Systematic bias" : "系統的バイアス"}</strong>
              {en
                ? " — The model climatology deviates from observations (wet bias or dry bias)"
                : " — モデルの気候値が観測と乖離（湿潤バイアスまたは乾燥バイアス）"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Under-dispersion" : "過小分散（Under-dispersion）"}</strong>
              {en
                ? " — Ensemble spread underestimates actual forecast uncertainty, resulting in prediction intervals that are too narrow"
                : " — アンサンブルスプレッドが実際の予測不確実性を過小評価し、予測区間が狭すぎる"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Unreliable tail probabilities" : "テール確率の信頼性不足"}</strong>
              {en
                ? " — The occurrence probabilities of extreme events are inaccurate, making them unusable for decision-making"
                : " — 極端事象の発生確率が不正確で、意思決定に使えない"}
            </li>
          </ul>
          <p className="mt-3 text-muted">
            {en
              ? "The following post-processing methods have been reported as effective:"
              : "これに対し、以下の後処理手法が有効であることが報告されています："}
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Method" : "手法"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Overview" : "概要"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Characteristics" : "特徴"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">BMA</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Fits a kernel distribution to each member and generates a predictive PDF through weighted mixture" : "各メンバーにカーネル分布を当てはめ、重み付き混合で予測PDF生成"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Suitable for multi-model integration. Exceedance probabilities for arbitrary thresholds can be computed from the predictive PDF" : "マルチモデル統合に適する。予測PDFから任意閾値の超過確率を算出可能"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">EMOS (NGR)</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Estimates normal distribution parameters through regression from ensemble mean and variance" : "アンサンブル平均・分散から正規分布パラメータを回帰推定"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Computationally lightweight. Suitable for single-model use" : "計算が軽量。単一モデルに適する"}</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Quantile Mapping</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Correction that matches the cumulative distribution functions of the model and observations" : "モデルと観測の累積分布関数を一致させる補正"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Improves marginal distributions but risks compressing ensemble spread" : "マージナル分布は改善するがスプレッドを圧縮するリスク"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">ML/DL</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Neural networks learn nonlinear forecast–observation relationships" : "ニューラルネットワークで非線形な予測-観測関係を学習"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "High expressiveness but risk of overfitting. Caution needed for S2S where hindcast periods are short" : "高表現力だが過学習リスク。ヒンドキャスト期間が短いS2Sでは注意"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>The review notes that systematic comparisons of these methods at the S2S scale are still lacking, and in particular, the application of multi-model BMA to precipitation is positioned as <strong className="text-foreground">an important area for future research</strong>.</>
              : <>{"レビューでは、S2Sスケールでのこれら手法の体系的比較がまだ不足しており、特にマルチモデルBMAの降水量への適用は"}<strong className="text-foreground">{"今後の重要な研究課題"}</strong>{"として位置づけられています。"}</>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Applications in Disaster Preparedness" : "防災分野での適用事例"}
          </h2>
          <p className="text-muted">
            {en
              ? <>What this review particularly focuses on is the implementation of S2S forecasts for <strong className="text-foreground">Anticipatory Action</strong>:</>
              : <>{"本レビューが特に力を入れているのが、"}<strong className="text-foreground">{"予兆的行動（Anticipatory Action）"}</strong>{"へのS2S予測の実装事例です："}</>}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">Forecast-based Financing (FbF)</h3>
          <p className="text-muted">
            {en
              ? <>A <strong className="text-foreground">forecast-triggered funding mechanism</strong> promoted by the Red Cross / Red Crescent. Based on pre-agreed exceedance probability thresholds, funds are automatically released before a disaster occurs to open shelters, pre-position supplies, and distribute cash. In Bangladesh, FbF has been activated multiple times for monsoon flooding since 2017.</>
              : <>{"赤十字・赤新月社が推進する"}<strong className="text-foreground">{"予測連動型資金拠出メカニズム"}</strong>{"。事前に合意された閾値超過確率に基づいて、災害発生前に自動的に資金を放出し、避難所開設・物資事前配置・現金給付を実行します。バングラデシュでは2017年以降、モンスーン洪水に対してFbFが複数回発動されています。"}</>}
          </p>
          <p className="mt-3 text-muted">
            {en
              ? <>FbF decision-making typically adopts a <strong className="text-foreground">two-stage trigger structure</strong>:</>
              : <>FbF{"の意思決定は通常"}<strong className="text-foreground">{"２段階トリガー構造"}</strong>{"を採用しています："}</>}
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-muted">
            <li>
              <strong className="text-foreground">{en ? "Readiness trigger" : "準備段階（Readiness trigger）"}</strong>
              {en
                ? " — Exceedance probability ~20%: logistics planning, volunteer mobilization"
                : " — 超過確率 ~20%: ロジスティクス計画、ボランティア動員"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Action trigger" : "行動段階（Action trigger）"}</strong>
              {en
                ? " — Exceedance probability ~40%: supply release, shelter opening, cash distribution"
                : " — 超過確率 ~40%: 物資放出、避難所開設、現金給付"}
            </li>
          </ul>

          <h3 className="mt-5 mb-2 font-medium text-foreground">{en ? "Water Resources Management and Dam Operations" : "水資源管理・ダム操作"}</h3>
          <p className="text-muted">
            {en
              ? <>The US Bureau of Reclamation (BOR) and Australia{"'"}s Murray{"–"}Darling Basin Authority (MDBA) utilize S2S forecasts for <strong className="text-foreground">pre-release decisions for reservoirs</strong>. For multipurpose dams in particular, where there is a trade-off between flood control and water supply, precipitation forecasts 2{"–4"} weeks ahead are directly linked to optimizing release schedules.</>
              : <>{"米国BOR（開拓局）やオーストラリアMDB（マレー・ダーリング流域局）は、S2S予測を"}<strong className="text-foreground">{"貯水池の事前放流判断"}</strong>{"に活用しています。特に多目的ダムでは、洪水制御と水供給のトレードオフがあるため、2〜4週間先の降水予測が放流スケジュールの最適化に直結します。"}</>}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">{en ? "Agriculture and Food Security" : "農業・食料安全保障"}</h3>
          <p className="text-muted">
            {en
              ? "WFP (World Food Programme) and FEWS NET (Famine Early Warning Systems Network) use S2S precipitation forecasts for early warning of drought risk. If precipitation forecasts for the planting season are available 3–4 weeks in advance, adjustments to seed variety selection and irrigation schedules become possible."
              : "WFP（世界食糧計画）とFEWS NET（飢饉早期警報ネットワーク）は、S2S降水予測を干ばつリスクの早期警報に使用しています。作付け期の降水予測が３〜４週間前に得られれば、種子の品種選択や灌漑スケジュールの調整が可能になります。"}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Quantitative Findings on Forecast Skill" : "予測スキルの定量的知見"}
          </h2>
          <p className="text-muted">
            {en
              ? "The following is a summary of precipitation forecast skill (Anomaly Correlation Coefficient: ACC) by lead time as reported in this review:"
              : "本レビューで報告されている降水予測のスキル（異常相関係数: ACC）のリードタイム別の概要は以下の通りです："}
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Lead Time" : "リードタイム"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Tropics ACC" : "熱帯域ACC"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Mid-latitude ACC" : "中緯度ACC"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Primary Source of Predictability" : "主な予測可能性の源泉"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Week 1</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "0.6–0.8" : "0.6〜0.8"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "0.5–0.7" : "0.5〜0.7"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Initial conditions" : "初期値"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Week 2</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "0.3–0.5" : "0.3〜0.5"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "0.1–0.3" : "0.1〜0.3"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "MJO + residual initial conditions" : "MJO + 初期値残余"}</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Week 3-4</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "0.1–0.3" : "0.1〜0.3"}</td>
                  <td className="border border-border px-3 py-2 text-muted">~0.1</td>
                  <td className="border border-border px-3 py-2 text-muted">MJO + ENSO</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Week 5+</td>
                  <td className="border border-border px-3 py-2 text-muted">&lt;0.1</td>
                  <td className="border border-border px-3 py-2 text-muted">&lt;0.05</td>
                  <td className="border border-border px-3 py-2 text-muted">ENSO + SST</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? <>Multi-model ensembles (MME) show <strong className="text-foreground">up to 20{"–30"}% skill improvement from Week 2 onward</strong> compared to single models. Multiple studies report that the combination of ECMWF + UKMO + NCEP in particular demonstrates consistent improvement in precipitation forecasting.</>
              : <>{"マルチモデルアンサンブル（MME）は単一モデルに対して"}<strong className="text-foreground">{"Week 2以降で最大２０〜３０%のスキル向上"}</strong>{"を示しており、特にECMWF + UKMO + NCEPの３モデル組み合わせが降水予測で安定した改善を示すことが複数の研究で報告されています。"}</>}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Challenges and Future Directions" : "課題と今後の方向性"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">{en ? "Insufficient co-design with users" : "ユーザーとの共同設計の不足"}</strong>
              {en
                ? " — Forecast products are designed from the meteorologist's perspective, creating a large gap with the information that decision-makers actually need (exceedance probabilities, impact forecasts)"
                : " — 予測プロダクトが気象学者の視点で設計されており、意思決定者が本当に必要とする情報（閾値超過確率、インパクト予測）との乖離が大きい"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Short hindcast periods" : "ヒンドキャスト期間の短さ"}</strong>
              {en
                ? " — Typically around 20 years, which is insufficient for statistical verification of extreme events. There is a risk of overfitting, particularly in BMA and EMOS parameter estimation"
                : " — 典型的には20年程度で、極端事象の統計的検証には不十分。特にBMAやEMOSのパラメータ推定においてオーバーフィッティングのリスクがある"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Communication of probabilistic information" : "確率情報のコミュニケーション"}</strong>
              {en
                ? ' — How non-specialist decision-makers interpret and act on a message like "30% probability of heavy rain" is an interdisciplinary challenge involving cognitive psychology and behavioral economics'
                : " — 「30%の確率で大雨」というメッセージを非専門家の意思決定者がどう解釈し行動に移すかは、認知心理学・行動経済学を含む学際的な課題"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Non-stationarity of teleconnections" : "テレコネクションの非定常性"}</strong>
              {en
                ? " — The relationship between MJO/ENSO and regional precipitation may be altered by climate change, making the long-term reliability of hindcast-based calibration uncertain"
                : " — MJOやENSOと地域降水の関係が気候変動で変質する可能性があり、ヒンドキャストベースのキャリブレーションの長期的信頼性が不透明"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Higher resolution" : "高解像度化"}</strong>
              {en
                ? " — Current S2S models use 1–1.5° grids (approximately 100–150 km), making statistical downscaling essential for catchment-scale flood prediction"
                : " — 現在のS2Sモデルは1〜1.5°格子（約100〜150km）であり、流域スケールの洪水予測には統計的ダウンスケーリングが不可欠"}
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
              White, C.J. et al. (2022). Advances in the application and utility of
              subseasonal-to-seasonal predictions.
              <em> Bull. Amer. Meteor. Soc.</em>, 103(6), E1448-E1472.
              DOI: 10.1175/BAMS-D-20-0224.1
            </li>
            <li>
              Vitart, F. et al. (2017). The Subseasonal to Seasonal (S2S) Prediction Project Database.
              <em> Bull. Amer. Meteor. Soc.</em>, 98, 163-173.
              DOI: 10.1175/BAMS-D-16-0017.1
            </li>
            <li>
              Coughlan de Perez, E. et al. (2015). Forecast-based financing: an approach for catalyzing
              humanitarian action based on extreme weather and climate forecasts.
              <em> Nat. Hazards Earth Syst. Sci.</em>, 15, 895-904.
              DOI: 10.5194/nhess-15-895-2015
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
