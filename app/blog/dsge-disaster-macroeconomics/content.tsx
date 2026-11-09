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
              ? "Assessing the Macroeconomic Impact of Disasters with DSGE Models — The IMF DIGNAD Framework"
              : "災害のマクロ経済影響を DSGE モデルで評価する — IMF DIGNAD を中心に"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "Direct damage tells us what was destroyed; it does not tell us what the economy loses afterwards. This post reviews the empirical debate on the growth effects of disasters, explains how disasters enter dynamic stochastic general equilibrium (DSGE) models, and walks through the structure of the IMF's DIGNAD model, which is increasingly used in debt sustainability and adaptation analysis."
              : "直接被害額は「何が壊れたか」を教えてくれますが、「その後に経済が何を失うか」は教えてくれません。本稿では、災害の成長効果をめぐる実証研究の論点を整理し、災害を動学的確率的一般均衡（DSGE）モデルに組み込む方法を説明したうえで、債務持続性や適応投資の分析に使われる IMF の DIGNAD モデルの構造を解説します。"}
          </p>
          <p className="mt-1 text-xs text-muted">
            Marto, Papageorgiou &amp; Klyuev (2018). <em>Journal of Development Economics</em>;
            Aligishiev, Melina &amp; Zanna (2023). <em>IMF Technical Notes and Manuals</em>;
            Botzen, Deschenes &amp; Sanders (2019). <em>Review of Environmental Economics and Policy</em>.
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* 1 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "1. Why direct damage is not the whole story"
              : "1. 直接被害額だけでは足りない理由"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Post-disaster needs assessments report{" "}
                <strong className="text-foreground">direct damage</strong>: the
                replacement value of houses, roads, crops and machinery destroyed
                by the hazard. This is a stock measure taken at one point in time.
                The economy, however, is measured in flows — output, income,
                tax revenue — and the loss of a capital stock changes those flows
                for years. Hallegatte and Przyluski (2010) distinguish direct
                losses from{" "}
                <strong className="text-foreground">indirect losses</strong>{" "}
                (business interruption, supply-chain disruption, lost harvests in
                later seasons) and from{" "}
                <strong className="text-foreground">macroeconomic effects</strong>{" "}
                that arise when reconstruction competes with other investment,
                when governments borrow to rebuild, and when the destroyed
                capital is never fully replaced.
              </>
            ) : (
              <>
                災害後のニーズ評価が報告するのは
                <strong className="text-foreground">直接被害額</strong>
                、すなわち住宅・道路・作物・設備など破壊された資産の再調達価額です。これはある時点で測った
                「ストック」の指標です。一方、経済は生産・所得・税収といった「フロー」で測られ、
                資本ストックの喪失はそれらのフローを何年にもわたって変化させます。Hallegatte and Przyluski（2010）は、
                直接損失と、
                <strong className="text-foreground">間接損失</strong>
                （営業中断、サプライチェーンの寸断、翌シーズン以降の収穫減）、さらに
                <strong className="text-foreground">マクロ経済効果</strong>
                （復興投資が他の投資と競合する、政府が復興のために借り入れる、壊れた資本が結局は元通りにならない）
                を区別しています。
              </>
            )}
          </p>
          <p className="text-muted">
            {en
              ? "Three questions follow. Does GDP recover to its pre-disaster trend, and how quickly? What happens to public debt when a government finances reconstruction? And does investing in resilience before the disaster pay off in macroeconomic terms? Answering them requires a model of the whole economy over time, which is where DSGE models come in."
              : "ここから 3 つの問いが生まれます。GDP は災害前のトレンドに戻るのか、戻るならどれくらいの速さか。政府が復興を借金で賄うと公的債務はどうなるのか。災害前にレジリエンスへ投資することはマクロ経済的に見合うのか。これらに答えるには、経済全体を時間軸で記述するモデルが必要であり、そこで DSGE モデルが登場します。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* 2 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "2. What the empirical literature says: creative destruction or persistent loss?"
              : "2. 実証研究が示してきたこと — 創造的破壊か、持続的損失か"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                Cross-country panel studies reach strikingly different
                conclusions. Noy (2009) finds that disasters lower output growth in
                the year of the event, with larger effects in developing
                countries and in countries with weaker institutions and shallower
                financial markets. Cavallo et al. (2013), using a synthetic control
                approach, find no significant long-run effect except for the very
                largest catastrophes that were followed by political upheaval.
                Hsiang and Jina (2014), tracking tropical cyclones with physical
                wind-field reconstructions, find that national income falls and
                does not recover for at least two decades. Felbermayr and Gröschl
                (2014) use geophysical intensity rather than reported damage and
                find robustly negative growth effects. Botzen et al. (2019) review
                this literature and conclude that the balance of evidence points
                to{" "}
                <strong className="text-foreground">
                  negative short-run effects and, for large events in vulnerable
                  economies, persistent losses
                </strong>
                , while the &ldquo;creative destruction&rdquo; hypothesis finds
                little support outside a few high-income cases.
              </>
            ) : (
              <>
                国際パネルデータを用いた実証研究の結論は、驚くほど割れています。Noy（2009）は、災害が発生年の産出成長率を
                押し下げ、その効果は途上国、制度の弱い国、金融市場の浅い国で大きいことを示しました。Cavallo et al.（2013）は
                合成コントロール法を用い、政治的混乱を伴った最大級の大災害を除けば長期的に有意な影響はないと結論しています。
                Hsiang and Jina（2014）は物理的に再現した風速場で熱帯低気圧を追跡し、国民所得は低下したまま少なくとも
                20 年は回復しないことを示しました。Felbermayr and Gröschl（2014）は報告被害額ではなく地球物理的な強度を
                用い、頑健に負の成長効果を見出しています。Botzen et al.（2019）はこれらをレビューし、証拠の重心は
                <strong className="text-foreground">
                  短期的には負の効果、脆弱な経済での大災害については持続的な損失
                </strong>
                にあり、「創造的破壊」仮説は一部の高所得国の事例を除いてほとんど支持されない、とまとめています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={th}>{en ? "Hypothesis" : "仮説"}</th>
                  <th className={th}>{en ? "Long-run GDP path" : "長期の GDP 経路"}</th>
                  <th className={th}>{en ? "Mechanism" : "メカニズム"}</th>
                  <th className={th}>{en ? "Representative evidence" : "代表的な証拠"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdHead}>{en ? "Creative destruction" : "創造的破壊"}</td>
                  <td className={td}>{en ? "Above the pre-disaster trend" : "災害前トレンドを上回る"}</td>
                  <td className={td}>{en ? "Old capital replaced by newer, more productive vintages" : "旧い資本がより生産的な新しい資本に置き換わる"}</td>
                  <td className={td}>{en ? "Skidmore & Toya (2002), some high-income cases" : "Skidmore & Toya（2002）、一部の高所得国"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "Build back better" : "ビルド・バック・ベター"}</td>
                  <td className={td}>{en ? "Dip, then catch-up above trend" : "落ち込み後にトレンド以上へ追い付く"}</td>
                  <td className={td}>{en ? "Reconstruction investment raises the capital stock and resilience" : "復興投資が資本ストックとレジリエンスを高める"}</td>
                  <td className={td}>{en ? "Case studies; rarely found in panels" : "事例研究。パネルではほとんど検出されない"}</td>
                </tr>
                <tr>
                  <td className={tdHead}>{en ? "Recovery to trend" : "トレンドへの回復"}</td>
                  <td className={td}>{en ? "Dip, then return to the old trend" : "落ち込み後、元のトレンドに戻る"}</td>
                  <td className={td}>{en ? "Capital is rebuilt; no permanent productivity loss" : "資本は再建され、恒久的な生産性損失はない"}</td>
                  <td className={td}>{en ? "Cavallo et al. (2013) for most events" : "Cavallo et al.（2013）、大半の事象"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "No recovery" : "回復なし"}</td>
                  <td className={td}>{en ? "Permanently lower level" : "水準が恒久的に低下"}</td>
                  <td className={td}>{en ? "Lost capital never fully replaced; human capital and institutions damaged" : "失われた資本が元に戻らず、人的資本や制度も損なわれる"}</td>
                  <td className={td}>{en ? "Hsiang & Jina (2014); Noy (2009) for developing countries" : "Hsiang & Jina（2014）、Noy（2009）の途上国"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "The four hypotheses follow the taxonomy used by Hsiang and Jina (2014)."
              : "4 つの仮説の分類は Hsiang and Jina（2014）に従う。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* 3 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "3. What a DSGE model is, in brief" : "3. DSGE モデルとは何か（簡潔に）"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                A dynamic stochastic general equilibrium model describes an economy
                as the outcome of optimising decisions by households (how much to
                consume, save and work), firms (how much to produce and invest)
                and a government (taxes, spending, borrowing), linked through
                markets that clear every period. &ldquo;Dynamic&rdquo; means
                agents look forward and today&rsquo;s choices depend on expected
                future conditions; &ldquo;stochastic&rdquo; means the economy is
                hit by random shocks; &ldquo;general equilibrium&rdquo; means
                prices, wages and interest rates adjust so that all markets are
                consistent with each other. The workhorse medium-scale model of
                Smets and Wouters (2007) is the common reference point in
                monetary policy; disaster models are typically smaller
                real-business-cycle-style models with a richer public sector.
              </>
            ) : (
              <>
                動学的確率的一般均衡モデルは、家計（どれだけ消費し、貯蓄し、働くか）、企業（どれだけ生産し、投資するか）、
                政府（課税・支出・借入）の最適化行動の結果として経済を記述し、それらを毎期清算される市場で結び付けます。
                「動学的」とは、主体が将来を見通し、今日の選択が将来の予想に依存すること。「確率的」とは、経済がランダムな
                ショックに見舞われること。「一般均衡」とは、価格・賃金・利子率が調整されてすべての市場が整合することです。
                金融政策分析では Smets and Wouters（2007）の中規模モデルが共通の参照点ですが、災害モデルは一般に、
                公共部門を厚くした小規模の実物的景気循環（RBC）型モデルです。
              </>
            )}
          </p>
          <p className="mb-2 text-muted">
            {en
              ? "Two equations carry most of the intuition. Output is produced from capital and labour with a productivity term, and capital accumulates from investment net of depreciation:"
              : "直観の大半は 2 本の式に集約されます。産出は資本と労働から生産性項を介して生産され、資本は減耗を差し引いた投資によって蓄積されます。"}
          </p>
          <MathBlock tex={String.raw`Y_t = A_t\, K_t^{\alpha} L_t^{1-\alpha}, \qquad K_{t+1} = (1-\delta)\,K_t + I_t`} />
          <p className="text-muted">
            {en ? (
              <>
                Households choose consumption <Math tex="C_t" /> and investment{" "}
                <Math tex="I_t" /> to maximise expected lifetime utility subject
                to the budget constraint, which yields the Euler equation linking
                today&rsquo;s and tomorrow&rsquo;s consumption through the return
                on capital. The strength of this structure is that it is{" "}
                <strong className="text-foreground">structural</strong>: because
                behaviour is derived from preferences and technology rather than
                fitted to past correlations, the model can be used for
                counterfactuals — &ldquo;what if the disaster had not
                happened?&rdquo;, &ldquo;what if reconstruction had been
                grant-financed instead of debt-financed?&rdquo; — which
                regression-based studies cannot answer directly.
              </>
            ) : (
              <>
                家計は予算制約のもとで生涯期待効用を最大化するように消費 <Math tex="C_t" /> と投資{" "}
                <Math tex="I_t" /> を選び、そこから今日と明日の消費を資本収益率で結ぶオイラー方程式が導かれます。
                この構造の強みは
                <strong className="text-foreground">構造的</strong>
                であること、すなわち行動が過去の相関への当てはめではなく選好と技術から導かれている点にあります。
                そのため「災害が起きなかったら」「復興を借入ではなく無償資金で賄っていたら」といった反実仮想の分析が可能で、
                回帰分析に基づく研究では直接答えられない問いに答えられます。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* 4 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "4. How disasters enter the model" : "4. 災害をモデルに入れる方法"}
          </h2>
          <p className="mb-3 text-muted">
            {en
              ? "A disaster is introduced as one or more shocks that hit the state variables of the economy. The most common is a capital destruction shock: a fraction of the capital stock disappears between two periods."
              : "災害は、経済の状態変数を直撃する 1 つ以上のショックとしてモデルに導入されます。最も一般的なのは資本毀損ショックで、2 期の間に資本ストックの一定割合が消失します。"}
          </p>
          <MathBlock tex={String.raw`K_{t+1} = (1-\delta)\,(1-d_t)\,K_t + I_t, \qquad d_t \in [0,1)`} />
          <p className="mb-4 text-muted">
            {en ? (
              <>
                Here <Math tex="d_t" /> is the share of capital destroyed, which
                can be calibrated directly from a direct damage estimate divided
                by the capital stock. Other channels are a temporary fall in total
                factor productivity <Math tex="A_t" /> (disrupted logistics,
                power outages, absenteeism), a loss of public capital that lowers
                private productivity, and a fall in labour supply. Keen and Pakko
                (2011) study monetary policy responses to such shocks in a
                New-Keynesian setting; Cantelmo, Melina and Papageorgiou (2023)
                show that in disaster-prone countries the mere{" "}
                <strong className="text-foreground">risk</strong> of future
                disasters lowers investment and welfare even in years without an
                event, because agents hold precautionary savings and demand a
                risk premium.
              </>
            ) : (
              <>
                ここで <Math tex="d_t" /> は毀損した資本の割合で、直接被害額を資本ストックで割れば直接較正できます。
                ほかの経路としては、全要素生産性 <Math tex="A_t" /> の一時的低下（物流の寸断、停電、欠勤）、民間の生産性を
                下げる公共資本の喪失、労働供給の減少があります。Keen and Pakko（2011）はニューケインジアン型モデルで
                こうしたショックへの金融政策対応を分析しました。Cantelmo, Melina and Papageorgiou（2023）は、災害多発国では
                将来の災害の
                <strong className="text-foreground">リスク</strong>
                そのものが、災害のない年でも予防的貯蓄とリスクプレミアムを通じて投資と厚生を押し下げることを示しています。
              </>
            )}
          </p>
          <p className="text-muted">
            {en
              ? "The choice of shock matters for the shape of the recovery. A pure capital shock produces a dip followed by convergence back to the steady state, because the lower capital stock raises the return on investment and triggers rebuilding. A persistent productivity shock or a debt overhang produces slower recovery. Recurrent shocks — the realistic case for flood-prone basins — shift the stochastic steady state itself: the economy settles at a lower average capital stock and output than it would without disasters."
              : "どのショックを選ぶかは回復の形を左右します。純粋な資本ショックは、資本が減って投資収益率が上がり再建が進むため、落ち込みのあと定常状態へ収束します。持続的な生産性ショックや債務の重荷は回復を遅らせます。繰り返し発生するショック——洪水常襲流域では現実的な想定——は確率的定常状態そのものを動かし、経済は災害がない場合よりも低い平均資本ストックと産出に落ち着きます。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* 5 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "5. The IMF DIGNAD model" : "5. IMF の DIGNAD モデル"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                DIGNAD (Debt-Investment-Growth and Natural Disasters) was
                developed at the IMF by Marto, Papageorgiou and Klyuev (2018) as
                an extension of the Debt-Investment-Growth (DIG) model of Buffie
                et al. (2012), originally built to analyse public investment
                surges in low-income countries. The 2023 toolkit (Aligishiev,
                Melina and Zanna) packages it as a Dynare-based application with
                an Excel interface, and it has since been used in IMF Article IV
                consultations and Climate Macroeconomic Assessment Programs for
                small island and disaster-prone states.
              </>
            ) : (
              <>
                DIGNAD（Debt-Investment-Growth and Natural Disasters）は、低所得国の公共投資拡大を分析するために
                作られた Buffie et al.（2012）の DIG（Debt-Investment-Growth）モデルを拡張して、Marto, Papageorgiou and
                Klyuev（2018）が IMF で開発しました。2023 年のツールキット（Aligishiev, Melina and Zanna）は、Dynare 上の
                アプリケーションと Excel インターフェースとしてこれをパッケージ化しており、以降、小島嶼国や災害多発国の
                IMF 4 条協議や気候マクロ経済評価プログラム（CMAP）で用いられています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={th}>{en ? "Block" : "ブロック"}</th>
                  <th className={th}>{en ? "Content" : "内容"}</th>
                  <th className={th}>{en ? "Role in disaster analysis" : "災害分析での役割"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdHead}>{en ? "Production" : "生産"}</td>
                  <td className={td}>{en ? "Tradable and non-tradable sectors; private capital, labour and public capital as inputs" : "貿易財・非貿易財の 2 部門。民間資本・労働・公共資本を投入"}</td>
                  <td className={td}>{en ? "Public capital losses lower private productivity in both sectors" : "公共資本の喪失が両部門の民間生産性を下げる"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "Public capital" : "公共資本"}</td>
                  <td className={td}>{en ? "Standard infrastructure and adaptation infrastructure, with investment efficiency below one" : "通常インフラと適応インフラの 2 種類。投資効率は 1 未満"}</td>
                  <td className={td}>{en ? "Adaptation capital reduces the damage share d when a disaster strikes" : "適応資本が災害時の毀損率 d を引き下げる"}</td>
                </tr>
                <tr>
                  <td className={tdHead}>{en ? "Households" : "家計"}</td>
                  <td className={td}>{en ? "Savers with access to assets and hand-to-mouth households without" : "資産にアクセスできる貯蓄者と、できないその日暮らし家計"}</td>
                  <td className={td}>{en ? "Captures the consumption collapse of liquidity-constrained households after a shock" : "ショック後に流動性制約下の家計の消費が崩れる様子を捉える"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "Government" : "政府"}</td>
                  <td className={td}>{en ? "Consumption tax, transfers, public investment; financing by domestic debt, external concessional and commercial debt, grants" : "消費税・移転・公共投資。国内債務、対外譲許的・商業的債務、無償資金で資金調達"}</td>
                  <td className={td}>{en ? "Reconstruction and its financing mix drive the debt-to-GDP path" : "復興とその資金調達の組合せが債務残高 GDP 比の経路を決める"}</td>
                </tr>
                <tr>
                  <td className={tdHead}>{en ? "Disaster shock" : "災害ショック"}</td>
                  <td className={td}>{en ? "Destruction of private capital, public capital and a temporary TFP loss, in one or several years" : "民間資本・公共資本の毀損と一時的な TFP 低下。単年または複数年"}</td>
                  <td className={td}>{en ? "Calibrated from damage-to-GDP ratios of historical events" : "過去の事象の被害額対 GDP 比から較正"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "External sector" : "対外部門"}</td>
                  <td className={td}>{en ? "Small open economy; real exchange rate; interest premium rising with external debt" : "小国開放経済。実質為替レート。対外債務とともに上昇する金利プレミアム"}</td>
                  <td className={td}>{en ? "Debt-financed reconstruction raises borrowing costs and crowds out private investment" : "借入による復興が借入コストを上げ、民間投資をクラウドアウト"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            {en ? (
              <>
                The defining feature is the pair of public capital stocks. Standard
                infrastructure raises productivity; adaptation infrastructure
                (elevated roads, flood defences, resilient schools) raises it too,
                but in addition lowers the share of capital destroyed when a
                disaster hits. This lets the model answer the question policymakers
                actually ask: is it better to spend a scarce fiscal envelope on
                adaptation before the disaster, or on reconstruction after it?
                Marto et al. (2018) show for a stylised small state that ex-ante
                adaptation investment, even though it is more expensive per unit,
                yields higher output and lower debt over the medium term than
                repeated ex-post reconstruction, and that the gains are larger
                when financed by grants rather than commercial borrowing.
              </>
            ) : (
              <>
                最大の特徴は 2 種類の公共資本ストックです。通常インフラは生産性を高めます。適応インフラ（嵩上げした道路、
                治水施設、強靱な学校）も生産性を高めますが、加えて災害時に毀損する資本の割合を引き下げます。これにより、
                政策担当者が実際に抱く問い——限られた財政枠を災害前の適応に使うべきか、災害後の復興に使うべきか——に
                答えられます。Marto et al.（2018）は、様式化された小国について、事前の適応投資は単価が高くても、
                繰り返される事後の復興よりも中期的に高い産出と低い債務をもたらし、その利得は商業借入ではなく無償資金で
                賄う場合に大きくなることを示しました。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* 6 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "6. From national to regional: using DIGNAD for a river basin" : "6. 国から地域へ — 流域に DIGNAD を使う"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                DIGNAD was built for national economies, but the questions it
                answers are just as relevant at the level of a flood-prone region.
                Applying it there requires three adjustments. First, the economy
                is re-calibrated to regional accounts: gross regional domestic
                product, the sectoral split between tradables (export crops,
                manufacturing) and non-tradables (services, construction), and a
                regional capital stock estimated from investment series or
                capital-output ratios. Second, the disaster shock is calibrated
                not from a single historical event but from a{" "}
                <strong className="text-foreground">
                  sequence of annual damage estimates
                </strong>
                , so that the model experiences recurrent floods rather than a
                single catastrophe. Third, the fiscal block has to reflect that a
                region does not borrow on its own account: reconstruction is
                financed by national transfers, which enter as external grants
                from the region&rsquo;s point of view.
              </>
            ) : (
              <>
                DIGNAD は国民経済のために作られましたが、それが答える問いは洪水常襲地域のレベルでも同じく重要です。
                地域に適用するには 3 つの調整が要ります。第一に、経済を地域勘定——域内総生産（GRDP）、貿易財（輸出作物・
                製造業）と非貿易財（サービス・建設）の部門構成、投資系列や資本産出比率から推定した地域資本ストック——で
                再較正すること。第二に、災害ショックを単一の歴史的事象ではなく
                <strong className="text-foreground">年ごとの被害額推定の系列</strong>
                から較正し、モデルが一度の大災害ではなく繰り返す洪水を経験するようにすること。第三に、地域は自ら借入を
                しないため、復興は国からの移転で賄われ、それは地域の視点では対外無償資金として入ってくるという財政ブロックの
                修正です。
              </>
            )}
          </p>
          <p className="text-muted">
            {en ? (
              <>
                With these changes the model becomes a tool for translating
                satellite-based damage estimates into economic indicators. The{" "}
                <a
                  href="https://yutakurihara.github.io/MyProject/flood-monitor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover:underline"
                >
                  daily flood monitor for the Cagayan River Basin
                </a>{" "}
                introduced in the{" "}
                <Link href="/blog/myproject-tools" className="text-highlight hover:underline">
                  MyProject post
                </Link>{" "}
                follows exactly this chain: satellite rainfall drives a
                rainfall-runoff-inundation model, inundation depth and land use
                give direct damage, and the annual damage series feeds a
                regionally calibrated DIGNAD model that reports the GRDP loss
                relative to a no-flood baseline. The output is a flow measure —
                how much regional output is lost each year because floods keep
                destroying capital — which complements the stock measure that
                damage assessments provide.
              </>
            ) : (
              <>
                こうした変更を施すと、モデルは衛星ベースの被害額推定を経済指標に翻訳する道具になります。
                <Link href="/blog/myproject-tools" className="text-highlight hover:underline">
                  MyProject の記事
                </Link>
                で紹介した
                <a
                  href="https://yutakurihara.github.io/MyProject/flood-monitor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover:underline"
                >
                  カガヤン川流域の日次洪水モニター
                </a>
                はまさにこの連鎖をたどっています。衛星降水量が降雨・流出・氾濫モデルを駆動し、浸水深と土地利用から直接被害額を
                求め、年間被害額の系列を地域較正した DIGNAD に入力して、洪水のないベースラインに対する GRDP の毀損を報告します。
                出力は「洪水が資本を壊し続けることで地域の産出が毎年どれだけ失われるか」というフローの指標であり、被害評価が
                提供するストックの指標を補完します。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* 7 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "7. What disaster DSGE models can and cannot answer" : "7. 災害 DSGE が答えられること・答えられないこと"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={th}>{en ? "Well suited" : "向いている問い"}</th>
                  <th className={th}>{en ? "Poorly suited" : "向いていない問い"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>{en ? "Medium- to long-run output and debt paths under alternative financing of reconstruction" : "復興の資金調達方法ごとの中長期の産出・債務経路"}</td>
                  <td className={td}>{en ? "Who within the region bears the loss (distributional effects beyond the two household types)" : "地域内で誰が損失を負うか（2 種類の家計を超える分配効果）"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={td}>{en ? "Ex-ante adaptation versus ex-post reconstruction trade-offs" : "事前の適応投資と事後の復興のトレードオフ"}</td>
                  <td className={td}>{en ? "Spatial detail: which municipality, which road, which supply chain" : "空間的な詳細——どの自治体、どの道路、どのサプライチェーンか"}</td>
                </tr>
                <tr>
                  <td className={td}>{en ? "Consistency checks: is a claimed damage figure plausible given the capital stock and observed output?" : "整合性の確認——主張される被害額は資本ストックと観測された産出に照らして妥当か"}</td>
                  <td className={td}>{en ? "Very large shocks: perturbation solutions around a steady state lose accuracy when d is large" : "極端に大きなショック——定常状態周りの摂動解は d が大きいと精度を失う"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={td}>{en ? "Effects of recurrent hazards on the long-run level of regional output" : "繰り返す災害が地域産出の長期水準に与える影響"}</td>
                  <td className={td}>{en ? "Informal economies and subsistence agriculture that are poorly captured in national accounts" : "国民経済計算に十分捉えられていないインフォーマル経済や自給農業"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-muted">
            {en ? (
              <>
                Where spatial or sectoral detail is the question, input-output and
                adaptive regional input-output models (Hallegatte, 2008) or
                computable general equilibrium models (Rose, 2004) are the better
                instruments; they trace how a destroyed factory or a cut highway
                propagates through intermediate demand, at the cost of weaker
                dynamics and behavioural foundations. The two families are
                complementary: IO/CGE for the first months, DSGE for the years
                that follow. In every case the result is only as good as the
                direct damage estimate that enters it, which is why rapid,
                reproducible damage assessment from satellite data remains the
                foundation of the whole chain.
              </>
            ) : (
              <>
                空間的・部門的な詳細が問いの中心なら、産業連関（IO）モデルや適応型地域産業連関モデル（Hallegatte, 2008）、
                応用一般均衡（CGE）モデル（Rose, 2004）の方が適した道具です。これらは壊れた工場や寸断された幹線道路が中間需要を
                通じてどう波及するかを追えますが、動学と行動の基礎づけは弱くなります。両者は補完的で、最初の数か月は IO/CGE、
                その後の数年は DSGE が担います。いずれの場合も結果の質は入力する直接被害額の質で決まり、だからこそ衛星データに
                よる迅速で再現可能な被害評価が連鎖全体の土台であり続けます。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* References */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Aligishiev, Z., Melina, G., &amp; Zanna, L.-F. (2023). DIGNAD Toolkit.{" "}
              <em>IMF Technical Notes and Manuals</em>, 2023/003. Washington, DC: International Monetary Fund.
            </li>
            <li>
              Botzen, W. J. W., Deschenes, O., &amp; Sanders, M. (2019). The economic impacts of natural disasters: A review of models and empirical studies.{" "}
              <em>Review of Environmental Economics and Policy</em>, 13(2), 167&ndash;188.
            </li>
            <li>
              Buffie, E. F., Berg, A., Pattillo, C., Portillo, R., &amp; Zanna, L.-F. (2012). Public investment, growth, and debt sustainability: Putting together the pieces.{" "}
              <em>IMF Working Paper</em>, 12/144.
            </li>
            <li>
              Cantelmo, A., Melina, G., &amp; Papageorgiou, C. (2023). Macroeconomic outcomes in disaster-prone countries.{" "}
              <em>Journal of Development Economics</em>, 161, 103037.
            </li>
            <li>
              Cavallo, E., Galiani, S., Noy, I., &amp; Pantano, J. (2013). Catastrophic natural disasters and economic growth.{" "}
              <em>Review of Economics and Statistics</em>, 95(5), 1549&ndash;1561.
            </li>
            <li>
              Felbermayr, G., &amp; Gröschl, J. (2014). Naturally negative: The growth effects of natural disasters.{" "}
              <em>Journal of Development Economics</em>, 111, 92&ndash;106.
            </li>
            <li>
              Hallegatte, S. (2008). An adaptive regional input-output model and its application to the assessment of the economic cost of Katrina.{" "}
              <em>Risk Analysis</em>, 28(3), 779&ndash;799.
            </li>
            <li>
              Hallegatte, S., &amp; Przyluski, V. (2010). The economics of natural disasters: Concepts and methods.{" "}
              <em>World Bank Policy Research Working Paper</em>, 5507.
            </li>
            <li>
              Hsiang, S. M., &amp; Jina, A. S. (2014). The causal effect of environmental catastrophe on long-run economic growth: Evidence from 6,700 cyclones.{" "}
              <em>NBER Working Paper</em>, 20352.
            </li>
            <li>
              Keen, B. D., &amp; Pakko, M. R. (2011). Monetary policy and natural disasters in a DSGE model.{" "}
              <em>Southern Economic Journal</em>, 77(4), 973&ndash;990.
            </li>
            <li>
              Marto, R., Papageorgiou, C., &amp; Klyuev, V. (2018). Building resilience to natural disasters: An application to small developing states.{" "}
              <em>Journal of Development Economics</em>, 135, 574&ndash;586.
            </li>
            <li>
              Noy, I. (2009). The macroeconomic consequences of disasters.{" "}
              <em>Journal of Development Economics</em>, 88(2), 221&ndash;231.
            </li>
            <li>
              Rose, A. (2004). Economic principles, issues, and research priorities in hazard loss estimation. In Y. Okuyama &amp; S. E. Chang (Eds.),{" "}
              <em>Modeling Spatial and Economic Impacts of Disasters</em> (pp. 13&ndash;36). Berlin: Springer.
            </li>
            <li>
              Skidmore, M., &amp; Toya, H. (2002). Do natural disasters promote long-run growth?{" "}
              <em>Economic Inquiry</em>, 40(4), 664&ndash;687.
            </li>
            <li>
              Smets, F., &amp; Wouters, R. (2007). Shocks and frictions in US business cycles: A Bayesian DSGE approach.{" "}
              <em>American Economic Review</em>, 97(3), 586&ndash;606.
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
