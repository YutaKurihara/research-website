"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { MathBlock, Math } from "@/components/Math";

const th =
  "border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted";
const td = "border border-border px-3 py-2 text-muted";
const tdHead = "border border-border px-3 py-2 font-medium text-foreground";

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
            2026-11-09
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Combining Multi-Centre Ensemble Rainfall Forecasts — Bayesian Model Averaging and Impact-Based Warning"
              : "複数センターのアンサンブル降雨予測を統合する — ベイズモデル平均化と影響予測型警報"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "Ensemble forecasts from ECMWF, NCEP, UKMO and other centres are freely available for lead times of weeks, yet reading their member spread as a probability is a mistake. This post explains why, how Bayesian model averaging (BMA) and related post-processing methods turn ensembles into calibrated predictive distributions, how to verify them, and how calibrated rainfall probabilities can be converted into impact-based flood warnings for municipalities."
              : "ECMWF・NCEP・UKMO など各センターのアンサンブル予測は数週間先まで無償で入手できますが、メンバーの広がりをそのまま確率として読むのは誤りです。本稿ではその理由、ベイズモデル平均化（BMA）などの統計的後処理がアンサンブルを較正された予測分布に変える仕組み、その検証方法、そして較正済みの降雨確率を自治体向けの影響予測型洪水警報に変換する方法を解説します。"}
          </p>
          <p className="mt-1 text-xs text-muted">
            Raftery et al. (2005). <em>Monthly Weather Review</em>;
            Sloughter et al. (2007). <em>Monthly Weather Review</em>;
            WMO (2015). <em>Guidelines on Multi-hazard Impact-based Forecast and Warning Services</em>.
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* 1 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "1. Why ensemble spread is not yet a probability"
              : "1. アンサンブルの広がりは、まだ「確率」ではない"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                An ensemble prediction system runs the same model many times from
                slightly perturbed initial conditions and, often, with perturbed
                physics. The idea is that the spread of the members represents the
                uncertainty of the forecast. In practice, operational ensembles are{" "}
                <strong className="text-foreground">underdispersive</strong>{" "}
                — the observation falls outside the member range far more often
                than it should — and{" "}
                <strong className="text-foreground">biased</strong>, because
                model errors shared by all members are not sampled by the
                perturbations. For precipitation the problem is worse: the
                variable is bounded at zero, heavily skewed, and the model&rsquo;s
                grid-scale rainfall is not the same quantity as a gauge or a
                basin average.
              </>
            ) : (
              <>
                アンサンブル予測システムは、初期値をわずかに摂動させ、しばしば物理過程も摂動させて、同じモデルを何度も走らせます。
                メンバーの広がりが予測の不確実性を表す、という考え方です。しかし実際の現業アンサンブルは
                <strong className="text-foreground">過小分散</strong>
                （観測値がメンバーの範囲外に出る頻度が本来よりはるかに高い）で、かつ
                <strong className="text-foreground">バイアス</strong>
                を持ちます。全メンバーに共通するモデル誤差は摂動では標本化されないからです。降水では問題がさらに深刻です。
                値は 0 で下限を持ち、強く歪んでおり、モデルの格子スケール降水は雨量計や流域平均と同じ量ではありません。
              </>
            )}
          </p>
          <p className="text-muted">
            {en ? (
              <>
                The standard diagnostic is the rank histogram (Hamill, 2001): for
                each forecast, record where the observation ranks among the sorted
                members. A reliable ensemble gives a flat histogram; a U-shape
                reveals underdispersion, a slope reveals bias. Nearly every raw
                precipitation ensemble shows a U-shape at the lead times relevant
                for flood preparedness. The remedy is{" "}
                <strong className="text-foreground">statistical post-processing</strong>
                : learn, from past forecast-observation pairs, how to map the raw
                ensemble into a predictive distribution that is both sharp and
                reliable.
              </>
            ) : (
              <>
                標準的な診断はランクヒストグラム（Hamill, 2001）です。各予測について、観測値が並べ替えたメンバーの中で何番目に
                入るかを記録します。信頼できるアンサンブルなら平らなヒストグラムになり、U 字型なら過小分散、傾きがあればバイアスを
                示します。洪水の備えに関係するリードタイムでは、ほとんどの生の降水アンサンブルが U 字型を示します。対策が
                <strong className="text-foreground">統計的後処理</strong>
                です。過去の予測と観測の組から、生のアンサンブルを「鋭く、かつ信頼できる」予測分布に写す方法を学習します。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* 2 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "2. Multi-centre ensembles: TIGGE and the S2S database" : "2. 複数センターのアンサンブル — TIGGE と S2S データベース"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                Combining ensembles from different centres attacks the shared-error
                problem directly: ECMWF, NCEP and UKMO use different dynamical
                cores, parameterisations and data assimilation systems, so their
                errors are only partly correlated. Hagedorn, Doblas-Reyes and
                Palmer (2005) showed that a multi-model ensemble is more skilful
                than its best single member not because of error cancellation
                alone, but because the combination is more reliable. Two archives
                make this practical. The THORPEX Interactive Grand Global Ensemble
                (TIGGE; Bougeault et al., 2010; Swinbank et al., 2016) collects
                medium-range ensembles (up to about 15 days) from ten centres. The
                WWRP/WCRP Sub-seasonal to Seasonal (S2S) database (Vitart et al.,
                2017) collects extended-range ensembles (up to about 60 days) with
                multi-year reforecasts, which are essential for training any
                post-processing method.
              </>
            ) : (
              <>
                異なるセンターのアンサンブルを組み合わせることは、共通誤差の問題への直接の対策です。ECMWF・NCEP・UKMO は
                力学コア、パラメタリゼーション、データ同化システムが異なるため、誤差は部分的にしか相関しません。Hagedorn,
                Doblas-Reyes and Palmer（2005）は、マルチモデルアンサンブルが最良の単一モデルより優れるのは誤差の相殺だけでなく、
                組合せの方が信頼性が高いからであることを示しました。これを実用にする 2 つのアーカイブがあります。THORPEX
                Interactive Grand Global Ensemble（TIGGE; Bougeault et al., 2010; Swinbank et al., 2016）は 10 センターの
                中期（約 15 日まで）アンサンブルを収集しています。WWRP/WCRP の Sub-seasonal to Seasonal（S2S）データベース
                （Vitart et al., 2017）は約 60 日までの延長予報アンサンブルを、複数年の再予報（リフォーキャスト）とともに
                収集しており、この再予報があらゆる後処理手法の学習に不可欠です。
              </>
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={th}>{en ? "Archive" : "アーカイブ"}</th>
                  <th className={th}>{en ? "Lead time" : "リードタイム"}</th>
                  <th className={th}>{en ? "Centres" : "センター"}</th>
                  <th className={th}>{en ? "Reforecasts" : "再予報"}</th>
                  <th className={th}>{en ? "Typical use" : "主な用途"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdHead}>TIGGE</td>
                  <td className={td}>{en ? "Up to ~15 days" : "〜約 15 日"}</td>
                  <td className={td}>{en ? "10 (ECMWF, NCEP, UKMO, JMA, CMA, KMA, ...)" : "10（ECMWF・NCEP・UKMO・JMA・CMA・KMA ほか）"}</td>
                  <td className={td}>{en ? "No (archive since 2006)" : "なし（2006 年以降のアーカイブ）"}</td>
                  <td className={td}>{en ? "Medium-range flood forecasting, warning verification" : "中期洪水予測、警報の検証"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>S2S</td>
                  <td className={td}>{en ? "Up to ~60 days" : "〜約 60 日"}</td>
                  <td className={td}>{en ? "11 (ECMWF, NCEP, UKMO, JMA, BoM, CMA, ...)" : "11（ECMWF・NCEP・UKMO・JMA・BoM・CMA ほか）"}</td>
                  <td className={td}>{en ? "Yes, multi-year (fixed or on-the-fly)" : "あり、複数年（固定または随時）"}</td>
                  <td className={td}>{en ? "Sub-seasonal preparedness, calibration training" : "数週間先の備え、較正の学習"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "Both archives are distributed through the ECMWF data portal with a delay of a few days after the forecast; real-time access requires the centres' own services. See also the earlier post on S2S forecasts for disaster preparedness."
              : "いずれも ECMWF のデータポータルから予測の数日後に配信され、リアルタイム取得には各センターのサービスが必要。S2S 予測と防災の備えについては過去記事も参照。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* 3 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "3. Bayesian model averaging for precipitation" : "3. 降水のためのベイズモデル平均化"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Raftery et al. (2005) introduced BMA as a post-processing method
                for ensembles. Each member (or each centre&rsquo;s ensemble mean)
                is treated as a candidate model; the predictive distribution of the
                observed quantity <Math tex="y" /> is a weighted mixture of
                component distributions centred on bias-corrected member
                forecasts <Math tex="f_k" />:
              </>
            ) : (
              <>
                Raftery et al.（2005）はアンサンブルの後処理手法として BMA を導入しました。各メンバー（または各センターの
                アンサンブル平均）を候補モデルとみなし、観測量 <Math tex="y" /> の予測分布を、バイアス補正したメンバー予測{" "}
                <Math tex="f_k" /> を中心とする成分分布の重み付き混合として表します。
              </>
            )}
          </p>
          <MathBlock tex={String.raw`p(y \mid f_1, \dots, f_K) = \sum_{k=1}^{K} w_k \, g_k(y \mid f_k), \qquad \sum_k w_k = 1`} />
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The weights <Math tex="w_k" /> reflect how well each member has
                performed over a training window and are estimated by maximising
                the log-likelihood with the EM algorithm. For temperature the
                components are Gaussian. For precipitation Sloughter et al.
                (2007) proposed a two-part component: a point mass at zero whose
                probability follows a logistic regression on the member forecast,
                and a gamma distribution for positive amounts whose mean is linear
                in the cube root of the forecast and whose variance grows with
                the forecast:
              </>
            ) : (
              <>
                重み <Math tex="w_k" /> は学習期間での各メンバーの成績を反映し、EM アルゴリズムで対数尤度を最大化して推定します。
                気温では成分は正規分布です。降水に対して Sloughter et al.（2007）は 2 部構成の成分を提案しました。
                0 における点質量（その確率はメンバー予測に対するロジスティック回帰で決める）と、正の降水量に対するガンマ分布
                （平均は予測値の 3 乗根に線形、分散は予測値とともに増加）です。
              </>
            )}
          </p>
          <MathBlock
            tex={String.raw`g_k(y \mid f_k) = P(y=0 \mid f_k)\,\mathbb{1}[y=0] \;+\; P(y>0 \mid f_k)\,\gamma_k(y \mid f_k)\,\mathbb{1}[y>0]`}
          />
          <MathBlock
            tex={String.raw`\operatorname{logit} P(y=0 \mid f_k) = a_{0k} + a_{1k} f_k^{1/3} + a_{2k}\,\delta_k, \qquad \mu_k = b_{0k} + b_{1k} f_k^{1/3}, \qquad \sigma_k^2 = c_0 + c_1 f_k`}
          />
          <p className="mb-3 text-muted">
            {en ? (
              <>
                where <Math tex="\delta_k" /> is an indicator that the member
                forecast itself is zero. The result is a full predictive
                distribution for daily rainfall from which any quantile or
                exceedance probability can be read. Fraley, Raftery and Gneiting
                (2010) extended the method to{" "}
                <strong className="text-foreground">exchangeable members</strong>{" "}
                — members of the same centre that are statistically
                indistinguishable share parameters — which is exactly the
                structure of a multi-centre ensemble: one set of parameters per
                centre, one weight per centre.
              </>
            ) : (
              <>
                ここで <Math tex="\delta_k" /> はメンバー予測自体が 0 であることを示す指標です。結果として日降水量の完全な予測分布が
                得られ、任意の分位点や超過確率を読み取れます。Fraley, Raftery and Gneiting（2010）はこの手法を
                <strong className="text-foreground">交換可能なメンバー</strong>
                （同一センターのメンバーは統計的に区別できないためパラメータを共有する）に拡張しました。これはまさに複数センター
                アンサンブルの構造で、センターごとに 1 組のパラメータと 1 つの重みを持ちます。
              </>
            )}
          </p>
          <p className="text-muted">
            {en ? (
              <>
                The main alternative is ensemble model output statistics (EMOS;
                Gneiting et al., 2005), which fits a single parametric
                distribution whose location and scale are linear in the ensemble
                mean and spread. For precipitation, Scheuerer (2014) and Scheuerer
                and Hamill (2015) use a censored, shifted gamma distribution. EMOS
                has fewer parameters and is more robust with short training
                periods; BMA retains multimodality and gives interpretable
                per-centre weights. In practice the two perform similarly and the
                choice is driven by data availability and the need to attribute
                skill to individual centres.
              </>
            ) : (
              <>
                主な代替手法はアンサンブル・モデル出力統計（EMOS; Gneiting et al., 2005）で、位置と尺度がアンサンブル平均と
                広がりに線形な単一のパラメトリック分布を当てはめます。降水では Scheuerer（2014）と Scheuerer and Hamill
                （2015）が打ち切り・シフト付きガンマ分布を用いています。EMOS はパラメータが少なく短い学習期間でも頑健で、
                BMA は多峯性を保ち、センターごとの解釈可能な重みを与えます。実務上の性能は似ており、選択はデータの入手可能性と
                「どのセンターにスキルがあるか」を帰属させる必要性で決まります。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* 4 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "4. Verifying a probabilistic forecast" : "4. 確率予測を検証する"}
          </h2>
          <p className="mb-4 text-muted">
            {en
              ? "A probabilistic forecast must be judged on two properties at once: reliability (when it says 30%, the event happens 30% of the time) and sharpness (the distributions are as narrow as reliability allows). Proper scoring rules (Gneiting & Raftery, 2007) reward both simultaneously and cannot be gamed by hedging."
              : "確率予測は 2 つの性質を同時に評価しなければなりません。信頼性（30% と言ったときに事象が 30% の頻度で起こる）と鋭さ（信頼性が許す範囲で分布ができるだけ狭い）です。適切スコアリング・ルール（Gneiting & Raftery, 2007）は両者を同時に報い、ヘッジでごまかすことができません。"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={th}>{en ? "Measure" : "指標"}</th>
                  <th className={th}>{en ? "What it evaluates" : "何を評価するか"}</th>
                  <th className={th}>{en ? "Definition / reading" : "定義・読み方"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdHead}>CRPS</td>
                  <td className={td}>{en ? "Whole predictive distribution against a scalar observation" : "予測分布全体とスカラー観測の一致"}</td>
                  <td className={td}>
                    <Math tex={String.raw`\mathrm{CRPS} = \int_{-\infty}^{\infty} \left[F(x) - \mathbb{1}(x \ge y)\right]^2 dx`} />
                    {en ? " ; reduces to absolute error for a deterministic forecast; Hersbach (2000) decomposes it into reliability and resolution" : " 。決定論的予測では絶対誤差に帰着。Hersbach（2000）は信頼性と分離度に分解"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>Brier score / BSS</td>
                  <td className={td}>{en ? "Probability of exceeding a threshold (e.g. 100 mm in 7 days)" : "閾値超過（例：7 日で 100 mm）の確率"}</td>
                  <td className={td}>
                    <Math tex={String.raw`\mathrm{BS} = \frac{1}{N}\sum_i (p_i - o_i)^2`} />
                    {en ? " ; the skill score BSS = 1 − BS/BS_ref compares with climatology; BSS > 0 means better than climatology" : " 。スキルスコア BSS = 1 − BS/BS_ref は気候値と比較し、BSS > 0 なら気候値より良い"}
                  </td>
                </tr>
                <tr>
                  <td className={tdHead}>{en ? "Reliability diagram" : "信頼度図"}</td>
                  <td className={td}>{en ? "Calibration of exceedance probabilities" : "超過確率の較正"}</td>
                  <td className={td}>{en ? "Observed frequency plotted against forecast probability bins; the diagonal is perfect reliability" : "予測確率の階級ごとに観測頻度をプロット。対角線が完全な信頼性"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "Rank / PIT histogram" : "ランク／PIT ヒストグラム"}</td>
                  <td className={td}>{en ? "Dispersion of the ensemble or predictive distribution" : "アンサンブルまたは予測分布の分散の適否"}</td>
                  <td className={td}>{en ? "Flat = calibrated; U-shaped = underdispersive; hump-shaped = overdispersive" : "平ら＝較正済み、U 字＝過小分散、山型＝過大分散"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-muted">
            {en ? (
              <>
                Two practical rules follow. First, verification must be{" "}
                <strong className="text-foreground">out of sample</strong>:
                with multi-year reforecasts, leave-one-year-out cross-validation
                is the natural design, because fitting and scoring on the same
                years flatters any method. Second, scores should be reported as a
                function of lead time and against a meaningful baseline — monthly
                climatology rather than annual climatology in monsoon climates —
                so that &ldquo;skill&rdquo; is not inherited from the seasonal
                cycle.
              </>
            ) : (
              <>
                実務上の規則が 2 つ導かれます。第一に、検証は
                <strong className="text-foreground">標本外</strong>
                で行うこと。複数年の再予報があれば、1 年を抜いて残りで学習する交差検証が自然な設計です。同じ年で学習と
                評価を行うと、どんな手法も見かけ上良くなります。第二に、スコアはリードタイムの関数として、意味のある基準——
                モンスーン気候では年気候値ではなく月別気候値——に対して報告すること。そうしないと「スキル」が季節サイクルから
                借り物になります。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* 5 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "5. From daily to multi-day rainfall" : "5. 日降水から数日累積へ"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Floods in large basins respond to rainfall accumulated over
                several days, not to a single day&rsquo;s total. A seven-day
                accumulation is therefore the natural warning variable for a
                basin such as the Cagayan, where a typhoon followed by monsoon
                rain can keep the river above flood stage for a week. Post-processed
                daily distributions cannot simply be summed: the sum of
                independent samples from seven marginal distributions understates
                the variance when wet days cluster, and overstates it when they do
                not. Two approaches are used. One draws daily samples jointly so
                that the temporal dependence of the raw ensemble is preserved
                (each member&rsquo;s trajectory stays together), then accumulates.
                The other post-processes the accumulated quantity directly, at the
                cost of discarding information about the within-week timing.
              </>
            ) : (
              <>
                大流域の洪水は 1 日の総量ではなく数日にわたる累積雨量に応答します。したがって、台風の後にモンスーンの雨が続いて
                1 週間も河川が氾濫水位を超えうるカガヤン川のような流域では、7 日累積が自然な警報変数です。後処理した日別分布は
                単純に足し合わせることができません。7 つの周辺分布からの独立な標本の和は、雨の日が集中するときには分散を
                過小評価し、集中しないときには過大評価します。手法は 2 つあります。一つは、生のアンサンブルの時間的依存を
                保つように日別標本を同時に抽出し（各メンバーの軌跡をまとめて扱う）、それから累積する方法。もう一つは累積量を
                直接後処理する方法で、週内のタイミングの情報を捨てる代わりに単純です。
              </>
            )}
          </p>
          <p className="text-muted">
            {en ? (
              <>
                Even after BMA, exceedance probabilities for the accumulated
                variable are often not perfectly reliable, because the daily
                components were calibrated on daily thresholds. A second,
                lightweight{" "}
                <strong className="text-foreground">recalibration</strong> step
                — mapping forecast probabilities of exceeding each warning
                threshold to observed frequencies via a reliability curve fitted
                on the reforecasts — typically repairs this. Kurihara and
                Miyamoto (2026) apply this chain to the Cagayan River Basin with
                ECMWF, NCEP and UKMO S2S ensembles: daily gamma-kernel BMA,
                joint accumulation to seven days and threshold-based
                recalibration raise the Brier skill score at 100 mm per seven
                days from slightly negative to positive relative to monthly
                climatology, with useful daily information retained to about lead
                days 5&ndash;6.
              </>
            ) : (
              <>
                BMA の後でも、累積量の超過確率はしばしば完全には信頼できません。日別成分は日別の閾値で較正されているからです。
                そこで、再予報に当てはめた信頼度曲線を通じて各警報閾値の予測超過確率を観測頻度へ写す、軽量な
                <strong className="text-foreground">再較正</strong>
                の段階を加えると、通常この問題は解消します。Kurihara and Miyamoto（2026）はこの連鎖をカガヤン川流域に
                ECMWF・NCEP・UKMO の S2S アンサンブルで適用しました。日別のガンマ核 BMA、7 日への同時累積、閾値に基づく再較正に
                よって、7 日 100 mm の Brier スキルスコアは月別気候値に対してわずかに負から正へ改善し、有用な日別情報は
                リードタイム 5〜6 日程度まで保たれました。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* 6 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "6. From rainfall probabilities to impact-based warnings" : "6. 降雨確率から影響予測型警報へ"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The WMO guidelines on impact-based forecast and warning services
                (WMO-No. 1150, 2015) make the point that a warning should say{" "}
                <em>what the weather will do</em>, not only{" "}
                <em>what the weather will be</em>. A 150 mm forecast means
                different things for a mountain municipality and for a floodplain
                town with 20,000 people in rice-growing barangays. Impact-based
                forecasting (IBF) closes that gap by combining hazard probability
                with exposure and vulnerability (Merz et al., 2020).
              </>
            ) : (
              <>
                WMO の影響予測型予報・警報サービスのガイドライン（WMO-No. 1150, 2015）が強調するのは、警報は
                <em>天気がどうなるか</em>だけでなく<em>天気が何をもたらすか</em>を伝えるべきだという点です。150 mm という
                予測は、山間部の自治体と、稲作バランガイに 2 万人が住む氾濫原の町とでは意味が異なります。影響予測型予報（IBF）は、
                ハザードの確率に曝露と脆弱性を組み合わせることでこの隔たりを埋めます（Merz et al., 2020）。
              </>
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={th}>{en ? "Step" : "段階"}</th>
                  <th className={th}>{en ? "Input" : "入力"}</th>
                  <th className={th}>{en ? "Output" : "出力"}</th>
                  <th className={th}>{en ? "Main source of uncertainty" : "主な不確実性の源"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdHead}>{en ? "1. Calibrated rainfall" : "1. 較正済み降雨"}</td>
                  <td className={td}>{en ? "Multi-centre ensemble, reforecasts, gauge or satellite rainfall" : "複数センターのアンサンブル、再予報、雨量計または衛星雨量"}</td>
                  <td className={td}>{en ? "Predictive distribution of 7-day basin rainfall per lead time" : "リードタイム別の 7 日流域雨量の予測分布"}</td>
                  <td className={td}>{en ? "Lead-time skill, representativeness of basin mean" : "リードタイムのスキル、流域平均の代表性"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "2. Rainfall–impact functions" : "2. 降雨–影響関数"}</td>
                  <td className={td}>{en ? "Historical events: rainfall vs. affected population, damaged houses, crop losses by municipality" : "過去事象の雨量と自治体別の被災人口・住家被害・作物被害"}</td>
                  <td className={td}>{en ? "Impact as a function of rainfall, with residual spread" : "雨量の関数としての影響と、その残差の広がり"}</td>
                  <td className={td}>{en ? "Few events, reporting inconsistency, changing exposure" : "事象数の少なさ、報告のばらつき、曝露の変化"}</td>
                </tr>
                <tr>
                  <td className={tdHead}>{en ? "3. Probabilistic impact" : "3. 確率的影響"}</td>
                  <td className={td}>{en ? "Samples from (1) passed through (2)" : "(1) の標本を (2) に通す"}</td>
                  <td className={td}>{en ? "Interval of expected impact per municipality; probability of exceeding action thresholds" : "自治体別の予想影響の区間と、行動閾値の超過確率"}</td>
                  <td className={td}>{en ? "Upper tail of rainfall beyond observed range" : "観測範囲を超える雨量の上側の裾"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "4. Staged action" : "4. 段階的な行動"}</td>
                  <td className={td}>{en ? "Impact probabilities and pre-agreed triggers" : "影響確率と事前合意したトリガー"}</td>
                  <td className={td}>{en ? "Advisory → preparation → pre-positioning → evacuation" : "注意喚起→準備→物資の事前配置→避難"}</td>
                  <td className={td}>{en ? "False alarms vs. missed events; cost of acting early" : "空振りと見逃し、早期行動のコスト"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-muted">
            {en ? (
              <>
                The staged structure is what makes probabilistic information
                usable. Nobody evacuates a town on a 20% chance, but a 20% chance
                six days out is enough to check pumps, brief barangay captains
                and move relief goods closer; at 60% two days out, evacuation
                of the most exposed barangays can begin. This is the logic of
                forecast-based financing (Coughlan de Perez et al., 2015), where
                funds are released automatically when a forecast crosses a
                pre-agreed trigger, and the cost of acting in vain is accepted in
                exchange for acting early when it matters.
              </>
            ) : (
              <>
                段階的な構造があるからこそ確率情報が使えます。20% の確率で町を避難させる人はいませんが、6 日前の 20% は
                ポンプの点検、バランガイ長への説明、救援物資を近くへ移す判断には十分です。2 日前に 60% なら、最も曝露の
                高いバランガイの避難を始められます。これが予測に基づく資金供与（Forecast-based Financing; Coughlan de Perez
                et al., 2015）の論理で、予測が事前合意したトリガーを超えると資金が自動で放出され、空振りのコストを受け入れる
                代わりに、重要なときに早く動けるようにします。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* 7 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "7. Limitations to keep in view" : "7. 念頭に置くべき限界"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Lead time.</strong> Useful
                  daily rainfall skill in the tropics rarely extends beyond a
                  week; beyond that, the information is about weekly totals and
                  regimes, not about events. Warnings at longer leads should be
                  framed accordingly.
                </>
              ) : (
                <>
                  <strong className="text-foreground">リードタイム。</strong>
                  熱帯での有用な日降水スキルは 1 週間を超えることがまれで、それ以降の情報は事象ではなく週積算量やレジームに
                  関するものです。長いリードタイムの警報はそれにふさわしい形で伝えるべきです。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Basin-mean rainfall.</strong>{" "}
                  A single basin average hides where the rain falls; tributary
                  floods driven by localised rainfall are not captured.
                </>
              ) : (
                <>
                  <strong className="text-foreground">流域平均雨量。</strong>
                  単一の流域平均は雨がどこに降るかを隠します。局地的な雨による支川の洪水は捉えられません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">The upper tail.</strong>{" "}
                  Post-processing is trained on past rainfall; record-breaking
                  events lie where the training data are thinnest, and the
                  gamma tail may be too light. Reporting intervals rather than
                  point estimates makes this limitation visible rather than
                  hiding it.
                </>
              ) : (
                <>
                  <strong className="text-foreground">上側の裾。</strong>
                  後処理は過去の雨で学習されます。記録的な事象は学習データが最も薄いところにあり、ガンマ分布の裾は軽すぎる
                  可能性があります。点推定ではなく区間で報告することで、この限界を隠さず可視化できます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Impact functions.</strong>{" "}
                  Rainfall–damage relationships fitted to a handful of reported
                  events inherit every inconsistency of the reports. They should
                  be revalidated as new events occur, ideally against independent
                  satellite-based damage estimates.
                </>
              ) : (
                <>
                  <strong className="text-foreground">影響関数。</strong>
                  少数の報告事象に当てはめた降雨–被害関係は、報告のあらゆる不整合を引き継ぎます。新しい事象が起こるごとに、
                  理想的には独立した衛星ベースの被害推定に対して再検証すべきです。
                </>
              )}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* References */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Bougeault, P., et al. (2010). The THORPEX Interactive Grand Global Ensemble.{" "}
              <em>Bulletin of the American Meteorological Society</em>, 91(8), 1059&ndash;1072.
            </li>
            <li>
              Brier, G. W. (1950). Verification of forecasts expressed in terms of probability.{" "}
              <em>Monthly Weather Review</em>, 78(1), 1&ndash;3.
            </li>
            <li>
              Coughlan de Perez, E., et al. (2015). Forecast-based financing: an approach for catalyzing humanitarian action based on extreme weather and climate forecasts.{" "}
              <em>Natural Hazards and Earth System Sciences</em>, 15(4), 895&ndash;904.
            </li>
            <li>
              Fraley, C., Raftery, A. E., &amp; Gneiting, T. (2010). Calibrating multimodel forecast ensembles with exchangeable and missing members using Bayesian model averaging.{" "}
              <em>Monthly Weather Review</em>, 138(1), 190&ndash;202.
            </li>
            <li>
              Gneiting, T., &amp; Raftery, A. E. (2007). Strictly proper scoring rules, prediction, and estimation.{" "}
              <em>Journal of the American Statistical Association</em>, 102(477), 359&ndash;378.
            </li>
            <li>
              Gneiting, T., Raftery, A. E., Westveld, A. H., &amp; Goldman, T. (2005). Calibrated probabilistic forecasting using ensemble model output statistics and minimum CRPS estimation.{" "}
              <em>Monthly Weather Review</em>, 133(5), 1098&ndash;1118.
            </li>
            <li>
              Hagedorn, R., Doblas-Reyes, F. J., &amp; Palmer, T. N. (2005). The rationale behind the success of multi-model ensembles in seasonal forecasting &mdash; I. Basic concept.{" "}
              <em>Tellus A</em>, 57(3), 219&ndash;233.
            </li>
            <li>
              Hamill, T. M. (2001). Interpretation of rank histograms for verifying ensemble forecasts.{" "}
              <em>Monthly Weather Review</em>, 129(3), 550&ndash;560.
            </li>
            <li>
              Hersbach, H. (2000). Decomposition of the continuous ranked probability score for ensemble prediction systems.{" "}
              <em>Weather and Forecasting</em>, 15(5), 559&ndash;570.
            </li>
            <li>
              Kurihara, Y., &amp; Miyamoto, M. (2026). Uncertainty of rainfall forecasts for impact-based flood warning in the Cagayan River Basin, Philippines.{" "}
              <em>EGUsphere</em> [preprint], egusphere-2026-3482 (in review for <em>Natural Hazards and Earth System Sciences</em>).
            </li>
            <li>
              Merz, B., et al. (2020). Impact forecasting to support emergency management of natural hazards.{" "}
              <em>Reviews of Geophysics</em>, 58(4), e2020RG000704.
            </li>
            <li>
              Raftery, A. E., Gneiting, T., Balabdaoui, F., &amp; Polakowski, M. (2005). Using Bayesian model averaging to calibrate forecast ensembles.{" "}
              <em>Monthly Weather Review</em>, 133(5), 1155&ndash;1174.
            </li>
            <li>
              Scheuerer, M. (2014). Probabilistic quantitative precipitation forecasting using ensemble model output statistics.{" "}
              <em>Quarterly Journal of the Royal Meteorological Society</em>, 140(680), 1086&ndash;1096.
            </li>
            <li>
              Scheuerer, M., &amp; Hamill, T. M. (2015). Statistical postprocessing of ensemble precipitation forecasts by fitting censored, shifted gamma distributions.{" "}
              <em>Monthly Weather Review</em>, 143(11), 4578&ndash;4596.
            </li>
            <li>
              Sloughter, J. M., Raftery, A. E., Gneiting, T., &amp; Fraley, C. (2007). Probabilistic quantitative precipitation forecasting using Bayesian model averaging.{" "}
              <em>Monthly Weather Review</em>, 135(9), 3209&ndash;3220.
            </li>
            <li>
              Swinbank, R., et al. (2016). The TIGGE project and its achievements.{" "}
              <em>Bulletin of the American Meteorological Society</em>, 97(1), 49&ndash;67.
            </li>
            <li>
              Vitart, F., et al. (2017). The Subseasonal to Seasonal (S2S) Prediction Project database.{" "}
              <em>Bulletin of the American Meteorological Society</em>, 98(1), 163&ndash;173.
            </li>
            <li>
              WMO (2015). <em>WMO Guidelines on Multi-hazard Impact-based Forecast and Warning Services</em>. WMO-No. 1150. Geneva: World Meteorological Organization.
            </li>
            <li>
              Wilks, D. S. (2011). <em>Statistical Methods in the Atmospheric Sciences</em> (3rd ed.). Academic Press.
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
