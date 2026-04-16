import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "S2S予測の防災活用 — サブシーズナル予測はどこまで意思決定に使えるか",
};

export default function S2SDisasterPreparednessPost() {
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
            2025-04-16
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            S2S予測の防災活用 — サブシーズナル予測はどこまで意思決定に使えるか
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
            この論文を読むべき理由
          </h2>
          <p className="text-muted">
            天気予報（1〜10日）と季節予報（3〜6ヶ月）の間にある
            <strong className="text-foreground">サブシーズナル（2週間〜2ヶ月）</strong>
            というタイムスケールは、洪水・干ばつ・熱波への事前対応を計画するうえで
            最も実用的でありながら、予測スキルの面で最も困難な領域です。
            本レビューは、S2Sプロジェクトのデータベースを中核に、
            水資源・農業・健康・エネルギーなど7分野での活用事例を体系的に整理し、
            11機関のマルチモデルアンサンブルの予測スキル、統計的後処理手法、
            そして意思決定への実装上の課題を包括的に論じた70名超の共著による大型レビューです。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            背景 — なぜS2Sが難しいのか
          </h2>
          <p className="text-muted">
            中期予報（〜10日）は大気の初期値に強く依存し、季節予報は海面水温（SST）などの
            境界条件に支えられます。S2Sタイムスケールはこの遷移領域にあたり、
            初期値の記憶が薄れる一方で境界条件のシグナルはまだ弱いという二重の困難を抱えています。
          </p>
          <p className="mt-3 text-muted">
            しかし近年、以下の<strong className="text-foreground">予測可能性の源泉（Sources of Predictability）</strong>
            が明確化され、予測スキルの向上が報告されています：
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">予測可能性の源泉</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">メカニズム</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">有効リード</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">MJO（マッデン・ジュリアン振動）</td>
                  <td className="border border-border px-3 py-2 text-muted">30〜60日周期の熱帯対流活動が中高緯度にテレコネクション</td>
                  <td className="border border-border px-3 py-2 text-muted">3〜4週間</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">成層圏突然昇温（SSW）</td>
                  <td className="border border-border px-3 py-2 text-muted">成層圏極渦の崩壊が対流圏のブロッキングを誘発</td>
                  <td className="border border-border px-3 py-2 text-muted">2〜6週間</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">土壌水分</td>
                  <td className="border border-border px-3 py-2 text-muted">陸面蒸発量を介した降水の正フィードバック</td>
                  <td className="border border-border px-3 py-2 text-muted">1〜2週間</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">海氷</td>
                  <td className="border border-border px-3 py-2 text-muted">北極海氷の変動が中緯度の大気循環に影響</td>
                  <td className="border border-border px-3 py-2 text-muted">2〜4週間</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">ENSO</td>
                  <td className="border border-border px-3 py-2 text-muted">熱帯太平洋SSTの季節予測が降水場を規定</td>
                  <td className="border border-border px-3 py-2 text-muted">1〜6ヶ月</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            特に熱帯域では、MJOに駆動された降水パターンが
            <strong className="text-foreground">3〜4週間先まで有意なスキル</strong>を持つことが
            複数のモデルで確認されており、東南アジアの降水予測に直接的な恩恵をもたらしています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            S2Sデータベースの構成
          </h2>
          <p className="text-muted">
            WMO/WWRPのS2Sプロジェクトが運用する
            <strong className="text-foreground">S2S Prediction Project Database</strong>は、
            以下の11機関のサブシーズナル予報をアーカイブしています：
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">機関</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">モデル</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">アンサンブル数</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">予報期間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ECMWF", "IFS", "51", "46日"],
                  ["NCEP (CPC)", "CFSv2", "16 (日4回)", "44日"],
                  ["UKMO (Met Office)", "GloSea6", "28", "60日"],
                  ["BOM (豪気象局)", "ACCESS-S2", "33", "62日"],
                  ["ECCC (カナダ)", "GEM-NEMO", "21", "32日"],
                  ["CMA (中国)", "BCC-CSM2", "4", "60日"],
                  ["JMA (日本)", "JMA/MRI-CPS3", "5", "34日"],
                  ["HMCR (ロシア)", "SL-AV", "20", "61日"],
                  ["KMA (韓国)", "GloSea5-GC2", "4", "60日"],
                  ["ISAC-CNR", "GLOBO", "5", "32日"],
                  ["Météo-France", "CNRM", "15", "61日"],
                ].map(([org, model, ens, lead], i) => (
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
            各モデルはリアルタイム予報に加えて<strong className="text-foreground">20年以上のヒンドキャスト（再予報）</strong>
            を提供しており、これがキャリブレーションと検証の基盤となります。
            データはECMWFとCMAの2つのアーカイブセンターで公開されています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            統計的後処理 — 生のアンサンブルをどう補正するか
          </h2>
          <p className="text-muted">
            本レビューが強調するのは、
            <strong className="text-foreground">生のS2Sアンサンブル出力はキャリブレーション不足である</strong>
            という点です。具体的には：
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">系統的バイアス</strong>
              — モデルの気候値が観測と乖離（湿潤バイアスまたは乾燥バイアス）
            </li>
            <li>
              <strong className="text-foreground">過小分散（Under-dispersion）</strong>
              — アンサンブルスプレッドが実際の予測不確実性を過小評価し、
              予測区間が狭すぎる
            </li>
            <li>
              <strong className="text-foreground">テール確率の信頼性不足</strong>
              — 極端事象の発生確率が不正確で、意思決定に使えない
            </li>
          </ul>
          <p className="mt-3 text-muted">
            これに対し、以下の後処理手法が有効であることが報告されています：
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">手法</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">概要</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">BMA</td>
                  <td className="border border-border px-3 py-2 text-muted">各メンバーにカーネル分布を当てはめ、重み付き混合で予測PDF生成</td>
                  <td className="border border-border px-3 py-2 text-muted">マルチモデル統合に適する。予測PDFから任意閾値の超過確率を算出可能</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">EMOS (NGR)</td>
                  <td className="border border-border px-3 py-2 text-muted">アンサンブル平均・分散から正規分布パラメータを回帰推定</td>
                  <td className="border border-border px-3 py-2 text-muted">計算が軽量。単一モデルに適する</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Quantile Mapping</td>
                  <td className="border border-border px-3 py-2 text-muted">モデルと観測の累積分布関数を一致させる補正</td>
                  <td className="border border-border px-3 py-2 text-muted">マージナル分布は改善するがスプレッドを圧縮するリスク</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">ML/DL</td>
                  <td className="border border-border px-3 py-2 text-muted">ニューラルネットワークで非線形な予測-観測関係を学習</td>
                  <td className="border border-border px-3 py-2 text-muted">高表現力だが過学習リスク。ヒンドキャスト期間が短いS2Sでは注意</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            レビューでは、S2Sスケールでのこれら手法の体系的比較がまだ不足しており、
            特にマルチモデルBMAの降水量への適用は
            <strong className="text-foreground">今後の重要な研究課題</strong>として位置づけられています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            防災分野での適用事例
          </h2>
          <p className="text-muted">
            本レビューが特に力を入れているのが、
            <strong className="text-foreground">Anticipatory Action（事前防災行動）</strong>
            へのS2S予測の実装事例です：
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">Forecast-based Financing (FbF)</h3>
          <p className="text-muted">
            赤十字・赤新月社が推進する<strong className="text-foreground">予測連動型資金拠出メカニズム</strong>。
            事前に合意された閾値超過確率に基づいて、災害発生前に自動的に資金を放出し、
            避難所開設・物資事前配置・現金給付を実行します。
            バングラデシュでは2017年以降、モンスーン洪水に対してFbFが複数回発動されています。
          </p>
          <p className="mt-3 text-muted">
            FbFの意思決定は通常<strong className="text-foreground">2段階トリガー構造</strong>を採用しています：
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-muted">
            <li><strong className="text-foreground">Readiness trigger（準備段階）</strong> — 超過確率 ~20%: ロジスティクス計画、ボランティア動員</li>
            <li><strong className="text-foreground">Action trigger（行動段階）</strong> — 超過確率 ~40%: 物資放出、避難所開設、現金給付</li>
          </ul>

          <h3 className="mt-5 mb-2 font-medium text-foreground">水資源管理・ダム操作</h3>
          <p className="text-muted">
            米国BOR（開拓局）やオーストラリアMDB（マレー・ダーリング流域局）は、
            S2S予測を<strong className="text-foreground">貯水池の事前放流判断</strong>に活用しています。
            特に多目的ダムでは、洪水制御と水供給のトレードオフがあるため、
            2〜4週間先の降水予測が放流スケジュールの最適化に直結します。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">農業・食料安全保障</h3>
          <p className="text-muted">
            WFP（世界食糧計画）とFEWS NET（飢饉早期警報ネットワーク）は、
            S2S降水予測を干ばつリスクの早期警報に使用しています。
            作付け期の降水予測が3〜4週間前に得られれば、
            種子の品種選択や灌漑スケジュールの調整が可能になります。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            予測スキルの定量的知見
          </h2>
          <p className="text-muted">
            本レビューで報告されている降水予測のスキル（異常相関係数: ACC）の
            リードタイム別の概要は以下の通りです：
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">リードタイム</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">熱帯域ACC</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">中緯度ACC</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">主な予測可能性の源泉</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Week 1</td>
                  <td className="border border-border px-3 py-2 text-muted">0.6〜0.8</td>
                  <td className="border border-border px-3 py-2 text-muted">0.5〜0.7</td>
                  <td className="border border-border px-3 py-2 text-muted">初期値</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Week 2</td>
                  <td className="border border-border px-3 py-2 text-muted">0.3〜0.5</td>
                  <td className="border border-border px-3 py-2 text-muted">0.1〜0.3</td>
                  <td className="border border-border px-3 py-2 text-muted">MJO + 初期値残余</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Week 3-4</td>
                  <td className="border border-border px-3 py-2 text-muted">0.1〜0.3</td>
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
            マルチモデルアンサンブル（MME）は単一モデルに対して
            <strong className="text-foreground">Week 2以降で最大20〜30%のスキル向上</strong>を示しており、
            特にECMWF + UKMO + NCEPの3モデル組み合わせが降水予測で安定した改善を示すことが
            複数の研究で報告されています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            課題と今後の方向性
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">ユーザーとの共同設計の不足</strong>
              — 予測プロダクトが気象学者の視点で設計されており、意思決定者が本当に必要とする情報
              （閾値超過確率、インパクト予測）との乖離が大きい
            </li>
            <li>
              <strong className="text-foreground">ヒンドキャスト期間の短さ</strong>
              — 典型的には20年程度で、極端事象の統計的検証には不十分。
              特にBMAやEMOSのパラメータ推定においてオーバーフィッティングのリスクがある
            </li>
            <li>
              <strong className="text-foreground">確率情報のコミュニケーション</strong>
              — 「30%の確率で大雨」というメッセージを非専門家の意思決定者がどう解釈し行動に移すかは、
              認知心理学・行動経済学を含む学際的な課題
            </li>
            <li>
              <strong className="text-foreground">テレコネクションの非定常性</strong>
              — MJOやENSOと地域降水の関係が気候変動で変質する可能性があり、
              ヒンドキャストベースのキャリブレーションの長期的信頼性が不透明
            </li>
            <li>
              <strong className="text-foreground">高解像度化</strong>
              — 現在のS2Sモデルは1〜1.5°格子（約100〜150km）であり、
              流域スケールの洪水予測には統計的ダウンスケーリングが不可欠
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
