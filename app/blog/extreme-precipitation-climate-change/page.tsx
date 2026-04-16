import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "気候変動と極端降水の増大 — 水資源量が多い地域ほどリスクが高まる",
};

export default function ExtremePrecipitationClimateChangePost() {
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
            気候変動と極端降水の増大 — 水資源量が多い地域ほどリスクが高まる
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
            この論文を読むべき理由
          </h2>
          <p className="text-muted">
            気候変動で極端降水が増加することは広く知られていますが、
            <strong className="text-foreground">その増加率が地域の既存の水資源量と正の相関を示す</strong>
            ことを全球スケールで定量的に示した研究です。
            つまり、年間降水量や流出量が多い湿潤地域ほど、
            極端降水と洪水流量の気候変動による増加率が大きくなります。
            フィリピンや東南アジアのような熱帯湿潤地域は、
            このパターンにおいて最もリスクが増大するカテゴリに属しており、
            将来の洪水リスク評価やインフラ設計の見直しに重要な根拠を提供します。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            背景 — クラウジウス・クラペイロンの法則とその限界
          </h2>
          <p className="text-muted">
            気温が上昇すると、大気の飽和水蒸気量はクラウジウス・クラペイロン（C-C）の関係に従い
            <strong className="text-foreground">約7%/℃</strong>の割合で増加します。
            これが極端降水の増大を駆動する基本的な熱力学的メカニズムです。
          </p>
          <p className="mt-3 text-muted">
            しかし、実際の降水変化はC-Cの一様な予測からは大きく外れることが知られています。
            その主な理由は：
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">水蒸気供給の地域差</strong>
              — 飽和水蒸気量が増えても、実際に供給される水蒸気量は地域の水循環に依存する。
              乾燥地域では「容量は増えるが中身が足りない」状態になる
            </li>
            <li>
              <strong className="text-foreground">大気力学の変化</strong>
              — 気候変動により大気循環パターン（ストームトラック、モンスーン強度）が変化し、
              降水の空間分布が再編される
            </li>
            <li>
              <strong className="text-foreground">対流の非線形性</strong>
              — 特に短時間降水では、C-Cの7%/℃を超える「スーパーC-C」スケーリング
              （最大14%/℃）が観測されており、対流性降水と層状性降水で応答が異なる
            </li>
          </ul>
          <p className="mt-3 text-muted">
            本論文の独自性は、これらの複雑な要因を「水の利用可能性」という
            単一の説明変数で統一的に解釈した点にあります。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            データと手法
          </h2>

          <h3 className="mb-2 font-medium text-foreground">使用データ</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">データ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">ソース</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">解像度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">GCM出力（降水・気温）</td>
                  <td className="border border-border px-3 py-2 text-muted">CMIP5 マルチモデルアンサンブル</td>
                  <td className="border border-border px-3 py-2 text-muted">モデル依存（1°〜2.5°）</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">流量データ</td>
                  <td className="border border-border px-3 py-2 text-muted">ISIMIP2bグローバル水文モデル（4モデル）</td>
                  <td className="border border-border px-3 py-2 text-muted">0.5°</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">観測年降水量</td>
                  <td className="border border-border px-3 py-2 text-muted">CRU TS / GPCC</td>
                  <td className="border border-border px-3 py-2 text-muted">0.5°</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">解析手法</h3>
          <ol className="ml-4 list-decimal space-y-2 text-muted">
            <li>
              <strong className="text-foreground">極端降水指標の算出</strong>
              — 各グリッドセルで年最大日降水量（Rx1day）、年最大5日降水量（Rx5day）、
              99パーセンタイル超過日降水量（R99p）を計算
            </li>
            <li>
              <strong className="text-foreground">将来変化率の算出</strong>
              — 基準期間（1976-2005）に対する近未来（2021-2050）および世紀末（2071-2100）の
              各指標の変化率（%）をRCPシナリオ別に計算
            </li>
            <li>
              <strong className="text-foreground">水資源量との回帰分析</strong>
              — 各グリッドの年間降水量（または年間流出量）を説明変数、
              極端降水の変化率を応答変数とした空間回帰を実施
            </li>
            <li>
              <strong className="text-foreground">洪水流量の変化</strong>
              — ISIMIP2bの4つのグローバル水文モデル（H08, LPJmL, MPI-HM, WaterGAP2）で
              100年確率洪水流量を一般化極値分布（GEV）でフィッティングし、変化率を算出
            </li>
          </ol>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            主な定量的知見
          </h2>

          <h3 className="mb-2 font-medium text-foreground">極端降水の変化率</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">指標</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">期間</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">乾燥地域</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">湿潤地域</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">シナリオ</th>
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

          <h3 className="mt-5 mb-2 font-medium text-foreground">100年確率洪水流量の変化</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">年間流出量帯</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">100年洪水の変化率</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">現在の100年が将来何年に</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">低（&lt;200 mm/年）</td>
                  <td className="border border-border px-3 py-2 text-muted">+5〜15%</td>
                  <td className="border border-border px-3 py-2 text-muted">〜70〜80年</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">中（200〜600 mm/年）</td>
                  <td className="border border-border px-3 py-2 text-muted">+10〜25%</td>
                  <td className="border border-border px-3 py-2 text-muted">〜40〜60年</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">高（&gt;600 mm/年）</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+20〜40%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">〜20〜50年</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            この結果は、<strong className="text-foreground">年間流出量が大きい河川ほど
            100年確率洪水流量の増加率が大きい</strong>ことを示しています。
            現在の100年確率洪水が、世紀末には一部の湿潤地域で
            20〜50年確率のイベントに頻度が上がる計算です。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">回帰分析の結果</h3>
          <p className="text-muted">
            極端降水の変化率と年間降水量の空間回帰では、
            <strong className="text-foreground">正の回帰係数</strong>が全シナリオ・全期間で確認されました。
            この関係はRCP2.6（低排出）からRCP8.5（高排出）まで堅牢であり、
            排出シナリオが厳しいほど回帰の傾きが急になります。
            これは、温暖化が進むほど湿潤/乾燥間の格差が拡大する
            「<strong className="text-foreground">wet-get-wetter</strong>」パターンと整合しています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            インフラ設計への含意
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">設計外力の見直し</strong>
              — 現在の100年確率降水量に基づくダム・堤防・排水路の設計が、
              将来的には50年確率程度のイベントにしか対応できなくなる可能性がある。
              特に湿潤地域ではこの乖離が大きい
            </li>
            <li>
              <strong className="text-foreground">GCMダウンスケーリングの必要性</strong>
              — GCMの粗い空間解像度では、島嶼地形での地形性降水の増幅を捉えきれない。
              統計的ダウンスケーリング（Quantile Mapping等）による
              ローカルスケールへの変換が不可欠
            </li>
            <li>
              <strong className="text-foreground">適応投資の優先順位</strong>
              — 水資源が豊かな地域ほどリスク増大が大きいため、
              洪水適応投資の費用対効果が最も高い地域を客観的に特定する根拠となる
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            限界
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              CMIP5モデルを使用しており、CMIP6では一部モデルの気候感度が
              高く推定されている。ただし「水資源量と変化率の正の相関」という
              構造的パターンは物理メカニズムに基づくため、CMIP6でも維持される
            </li>
            <li>
              グローバルスケールの分析であり、局所的な地形効果・土地利用変化・
              都市化の影響は考慮されていない
            </li>
            <li>
              GCMの降水バイアスが大きい地域（特に山岳域・島嶼域）では、
              変化率の推定に系統的な誤差が含まれる可能性がある
            </li>
            <li>
              水文モデルの構造的不確実性（4モデル間のばらつき）が
              洪水流量の変化推定に与える影響は定量化されているが、
              完全には解消されていない
            </li>
            <li>
              「wet-get-wetter」パターンは平均降水量では必ずしも成立しないが、
              本研究は極端降水とピーク流量に限定した分析であることに注意
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
