import type { Metadata } from "next";
import Link from "next/link";
import { MathBlock, Math } from "@/components/Math";

export const metadata: Metadata = {
  title: "SAR浸水マップの準リアルタイム同化による洪水予測の改善",
};

export default function SarFloodAssimilationPost() {
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
            SAR浸水マップの準リアルタイム同化による洪水予測の改善
          </h1>
          <p className="mt-3 text-xs text-muted">
            Hostache, R., Chini, M., Giustarini, L., Neal, J., Kavetski, D., Wood, M.,
            Corato, G., Pelich, R.‐M., &amp; Matgen, P. (2018).
            Near‐Real‐Time Assimilation of SAR‐Derived Flood Maps for Improving Flood Forecasts.
            <em> Water Resources Research</em>, 54(8), 5516–5535.
          </p>
          <a href="https://doi.org/10.1029/2017WR022205" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.1029/2017WR022205
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
            洪水予測モデルは初期条件やパラメータの不確実性により精度が限られますが、
            衛星SARが捉える<strong className="text-foreground">面的な浸水情報</strong>を
            モデルにフィードバックすれば予測を大幅に改善できるはずです。
            本研究は、SAR画像から各ピクセルの<strong className="text-foreground">浸水確率</strong>を導出し、
            水文モデル＋水理モデルのカスケードに<strong className="text-foreground">パーティクルフィルタ</strong>で
            逐次同化するフレームワークを構築。
            英国セヴァーン川の4つの洪水イベントで、
            <strong className="text-foreground">予測誤差を最大50%削減</strong>し、
            同化後24〜48時間にわたり改善効果が持続することを実証しました。
            被引用数164（2026年時点）の高被引用論文です。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            対象流域と洪水イベント
          </h2>
          <p className="text-muted">
            <strong className="text-foreground">セヴァーン川（River Severn）</strong>、
            英国最長の河川（約354 km）。
            複数の水位観測所を持ち、過去に大規模洪水が繰り返し発生している
            データ豊富な流域です。本研究では4つの洪水イベントを対象としています。
          </p>
          <p className="mt-2 text-muted">
            各イベントでSentinel-1もしくはENVISAT ASAR画像を取得し、
            浸水域の空間分布を観測データとして利用しています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            手法の全体構造
          </h2>
          <p className="mb-4 text-muted">
            フレームワークは3つのコンポーネントで構成されます。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">コンポーネント</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">モデル/手法</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">役割</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">水文モデル</td>
                  <td className="border border-border px-3 py-2 text-muted">SUPERFLEX</td>
                  <td className="border border-border px-3 py-2 text-muted">降雨→流出の変換。柔軟な概念的モデル構造</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">水理モデル</td>
                  <td className="border border-border px-3 py-2 text-muted">LISFLOOD-FP</td>
                  <td className="border border-border px-3 py-2 text-muted">2D氾濫シミュレーション。慣性項付き浅水方程式</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">データ同化</td>
                  <td className="border border-border px-3 py-2 text-muted">パーティクルフィルタ（PF）</td>
                  <td className="border border-border px-3 py-2 text-muted">SAR浸水確率マップと予測を比較し、重みを更新</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            SUPERFLEXが生成した流量ハイドログラフをLISFLOOD-FPの上流境界条件として与え、
            氾濫原の浸水範囲を2Dでシミュレートします。
            SAR画像が取得されたタイムステップで、パーティクルフィルタが
            各パーティクル（アンサンブルメンバー）の尤度を評価し、重みを更新します。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            SAR浸水確率マップの導出
          </h2>
          <p className="mb-3 text-muted">
            従来のSAR洪水マッピングでは閾値処理で浸水/非浸水の<strong className="text-foreground">二値マップ</strong>を
            生成しますが、本研究では各ピクセルに<strong className="text-foreground">浸水確率 <Math tex="p_i" /></strong>を
            割り当てます。
          </p>
          <p className="mb-3 text-muted">
            SAR後方散乱値のヒストグラムを、浸水ピクセルと非浸水ピクセルの
            2つの分布（通常はガウス分布）の混合としてモデル化します。
            ベイズの定理により、観測された後方散乱値 <Math tex="\sigma^0" /> が与えられたときの
            浸水確率は次のように計算されます：
          </p>
          <MathBlock tex="p_i = P(\text{flooded} \mid \sigma^0_i) = \frac{\pi_f \cdot f(\sigma^0_i \mid \text{flooded})}{\pi_f \cdot f(\sigma^0_i \mid \text{flooded}) + \pi_{nf} \cdot f(\sigma^0_i \mid \text{not flooded})}" />
          <p className="mt-3 text-muted">
            ここで、<Math tex="\pi_f" /> と <Math tex="\pi_{nf}" /> は浸水/非浸水の事前確率、
            <Math tex="f(\cdot)" /> は各クラスの条件付き確率密度関数です。
            この確率的アプローチにより、<strong className="text-foreground">SAR観測の不確実性を
            データ同化に明示的に組み込む</strong>ことが可能になります。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            パーティクルフィルタによるデータ同化
          </h2>

          <h3 className="mb-2 font-medium text-foreground">パーティクルフィルタの基本</h3>
          <p className="mb-4 text-muted">
            N個の<strong className="text-foreground">パーティクル</strong>（異なるパラメータセットを持つ
            モデル実行）を並列に実行します。
            各パーティクルnはSUPERFLEX + LISFLOOD-FPを通じて独自の浸水予測マップを生成。
            SAR画像取得時に、予測と観測の一致度に基づいて各パーティクルの<strong className="text-foreground">重み <Math tex="W_n" /></strong>を
            更新します。
          </p>

          <h3 className="mb-2 font-medium text-foreground">ピクセル単位の局所重み</h3>
          <p className="mb-3 text-muted">
            パーティクル <Math tex="n" /> のピクセル <Math tex="i" /> における予測と観測の一致度は、
            <strong className="text-foreground">局所重み <Math tex="w_{i,n}" /></strong> として定義されます：
          </p>
          <MathBlock tex="w_{i,n} = p_i \cdot M_{i,n} + (1 - p_i)(1 - M_{i,n})" />
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">変数</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">意味</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground"><Math tex="p_i" /></td>
                  <td className="border border-border px-3 py-2 text-muted">SAR画像から導出されたピクセルiの浸水確率（0〜1の連続値）</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground"><Math tex="M_{i,n}" /></td>
                  <td className="border border-border px-3 py-2 text-muted">パーティクルnによるピクセルiの浸水予測（1=浸水、0=非浸水）</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground"><Math tex="w_{i,n}" /></td>
                  <td className="border border-border px-3 py-2 text-muted">ピクセルiにおけるパーティクルnの局所重み（尤度）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            この式の直感的な意味は明快です：
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-2 text-muted">
            <li>
              SARが「浸水」と言い（<Math tex="p_i \approx 1" />）、モデルも「浸水」と予測（<Math tex="M = 1" />）
              → <Math tex="w \approx 1" />（高い一致）
            </li>
            <li>
              SARが「浸水」と言い（<Math tex="p_i \approx 1" />）、モデルは「非浸水」と予測（<Math tex="M = 0" />）
              → <Math tex="w \approx 0" />（不一致）
            </li>
            <li>
              SARが「非浸水」と言い（<Math tex="p_i \approx 0" />）、モデルも「非浸水」と予測（<Math tex="M = 0" />）
              → <Math tex="w \approx 1" />（高い一致）
            </li>
            <li>
              SARが不確実（<Math tex="p_i \approx 0.5" />）
              → <Math tex="w \approx 0.5" />（情報量が低い）
            </li>
          </ul>

          <h3 className="mt-6 mb-2 font-medium text-foreground">グローバル重み（パーティクルの尤度）</h3>
          <p className="mb-3 text-muted">
            全ピクセルの局所重みの積として、パーティクル <Math tex="n" /> のグローバル重みが計算されます：
          </p>
          <MathBlock tex="W_n = \prod_{i} w_{i,n}" />
          <p className="mt-3 text-muted">
            実装上はアンダーフローを避けるため対数空間で計算します：
          </p>
          <MathBlock tex="\log W_n = \sum_{i} \log w_{i,n}" />
          <p className="mt-3 text-muted">
            グローバル重みが大きいパーティクル（SARの観測と整合するモデル実行）が
            高い確率で次のステップに残され、重みが小さいパーティクルは淘汰されます。
            この<strong className="text-foreground">リサンプリング</strong>により、
            モデルのパラメータ空間が観測に整合する方向に絞り込まれます。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            モデル構成の詳細
          </h2>

          <h3 className="mb-2 font-medium text-foreground">SUPERFLEX（水文モデル）</h3>
          <p className="mb-3 text-muted">
            柔軟な概念的降雨流出モデル。貯留関数の構造（直列/並列、線形/非線形）を
            ユーザーが自由に設計できます。
            本研究ではパーティクルごとに異なるパラメータセットを与え、
            流出ハイドログラフの不確実性をアンサンブルとして表現します。
          </p>

          <h3 className="mb-2 font-medium text-foreground">LISFLOOD-FP（水理モデル）</h3>
          <p className="mb-3 text-muted">
            ブリストル大学開発の2D氾濫モデル。慣性項付き浅水方程式を陽的差分法で解きます。
            <strong className="text-foreground">計算効率が高く</strong>、
            パーティクルフィルタのように多数の並列実行が必要な場合に適しています。
            SUPERFLEXの出力流量を上流境界条件として受け取り、
            DTM上で浸水範囲と水深の時空間分布を計算します。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">パラメータ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">同化で更新</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">SUPERFLEXパラメータ</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">はい</td>
                  <td className="border border-border px-3 py-2 text-muted">貯留関数の係数、分配率など（流出応答を制御）</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Manning&apos;s n</td>
                  <td className="border border-border px-3 py-2 text-muted">はい</td>
                  <td className="border border-border px-3 py-2 text-muted">氾濫原の粗度係数（浸水範囲を制御）</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">DTM</td>
                  <td className="border border-border px-3 py-2 text-muted">いいえ</td>
                  <td className="border border-border px-3 py-2 text-muted">地形データ（全パーティクル共通）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            主な数値結果
          </h2>

          <h3 className="mb-2 font-medium text-foreground">予測誤差の削減</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">評価項目</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">結果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">同化タイムステップでの誤差削減</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">最大50%</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">改善効果の持続時間</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">24〜48時間</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">対象イベント数</td>
                  <td className="border border-border px-3 py-2 text-muted">4洪水イベント（セヴァーン川）</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">被引用数</td>
                  <td className="border border-border px-3 py-2 text-muted">164（2026年時点）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            同化により、パーティクルフィルタが不確実性の幅を絞り込み、
            水位予測のアンサンブル幅が大幅に縮小します。
            特に、<strong className="text-foreground">洪水ピーク前のSAR画像</strong>を同化した場合に
            ピーク水位の予測精度が最も向上しました。
            逆に、ピーク通過後の画像同化は予測改善への寄与が限定的です。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">確率的アプローチの優位性</h3>
          <p className="text-muted">
            二値（浸水/非浸水）マップの同化と比較して、確率的浸水マップの同化は
            以下の点で優れています：
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">SAR分類の不確実性を明示的に反映</strong>:
              閾値の恣意性を排除し、境界域のピクセルが中間的な重みを持つ
            </li>
            <li>
              <strong className="text-foreground">パーティクルの退化を軽減</strong>:
              二値マップでは不一致ピクセルの <Math tex="w=0" /> がグローバル重みを即座にゼロにするが、
              確率マップでは連続値により極端な淘汰を回避
            </li>
            <li>
              <strong className="text-foreground">非浸水域の情報も活用</strong>:
              <Math tex="p_i \approx 0" /> の領域でも <Math tex="M=0" /> のパーティクルに高い重みが付き、
              浸水範囲の過大予測を制約する
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            同化ワークフローの流れ
          </h2>
          <ol className="ml-4 list-decimal space-y-3 text-muted">
            <li>
              <strong className="text-foreground">初期化</strong>:
              N個のパーティクルをパラメータ空間からサンプリングし、等しい重み（<Math tex="1/N" />）を割り当て
            </li>
            <li>
              <strong className="text-foreground">予測</strong>:
              各パーティクルでSUPERFLEX→LISFLOOD-FPを実行し、浸水予測マップ <Math tex="M_{i,n}" /> を生成
            </li>
            <li>
              <strong className="text-foreground">SAR取得</strong>:
              衛星通過時にSAR画像を取得し、後方散乱ヒストグラムから浸水確率マップ <Math tex="p_i" /> を導出
            </li>
            <li>
              <strong className="text-foreground">重み更新</strong>:
              全ピクセルの局所重み <Math tex="w_{i,n}" /> を計算し、積でグローバル重み <Math tex="W_n" /> を算出
            </li>
            <li>
              <strong className="text-foreground">リサンプリング</strong>:
              重みに比例してパーティクルを再サンプリング。重みの小さいパーティクルは淘汰
            </li>
            <li>
              <strong className="text-foreground">予測継続</strong>:
              更新されたアンサンブルで次のタイムステップ以降の予測を実行
            </li>
          </ol>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            限界
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">計算コスト</strong>:
              N個のパーティクル × LISFLOOD-FPの2D実行は、広域・高解像度では膨大な計算資源を必要とする
            </li>
            <li>
              <strong className="text-foreground">SAR取得頻度の制約</strong>:
              Sentinel-1の再訪周期（6〜12日）では、急激な洪水展開中に複数回の同化ができない場合がある
            </li>
            <li>
              <strong className="text-foreground">パーティクル退化</strong>:
              観測ピクセル数が非常に多い場合、グローバル重みが少数のパーティクルに集中する可能性がある
            </li>
            <li>
              <strong className="text-foreground">都市域の検出限界</strong>:
              SARは建物の二重反射により都市部の浸水を検出できず、確率マップの品質が低下する
            </li>
            <li>
              <strong className="text-foreground">後方散乱分布の仮定</strong>:
              ガウス分布の仮定が全ての土地被覆・地形条件で成立するとは限らない
            </li>
            <li>
              <strong className="text-foreground">単一流域での検証</strong>:
              セヴァーン川はデータ豊富な流域であり、データ不足の途上国流域での適用性は未検証
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            実務への示唆
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">洪水予報への衛星統合</strong>:
              水位・流量観測が乏しい流域でも、SARの面的情報でモデル予測を補正できる。
              特に途上国の無観測流域で有望
            </li>
            <li>
              <strong className="text-foreground">準リアルタイム運用</strong>:
              Sentinel-1のNRT配信（数時間以内）と組み合わせれば、
              洪水進行中の予測更新が現実的
            </li>
            <li>
              <strong className="text-foreground">ピーク前の同化が鍵</strong>:
              洪水ピーク前のSAR画像が最も予測改善に寄与するため、
              衛星タスキングの優先順位設定が重要
            </li>
            <li>
              <strong className="text-foreground">後続研究への発展</strong>:
              Hostache et al. (2021) では確率的浸水マップの同化に拡張され、
              Sentinel-1データへの実適用が進んでいる
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
              Hostache, R., Chini, M., Giustarini, L., Neal, J., Kavetski, D., Wood, M.,
              Corato, G., Pelich, R.‐M., &amp; Matgen, P. (2018).
              Near‐Real‐Time Assimilation of SAR‐Derived Flood Maps for Improving Flood Forecasts.
              <em> Water Resources Research</em>, 54(8), 5516–5535.
              DOI: 10.1029/2017WR022205
            </li>
            <li>
              Hostache, R. et al. (2021). Assimilation of probabilistic flood maps from SAR data
              into a coupled hydrologic–hydraulic forecasting model.
              <em> Journal of Hydrology</em>, 603, 127069.
            </li>
            <li>
              Bates, P. D., Horritt, M. S., &amp; Fewtrell, T. J. (2010).
              A simple inertial formulation of the shallow water equations for efficient two-dimensional
              flood inundation modelling.
              <em> Journal of Hydrology</em>, 387(1–2), 33–45.
            </li>
            <li>
              Fenicia, F., Kavetski, D., &amp; Savenije, H. H. G. (2011).
              Elements of a flexible approach for conceptual hydrological modeling: 1. Motivation and theoretical development.
              <em> Water Resources Research</em>, 47(11), W11510.
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
