import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "複合災害としての洪水 — 複数ハザードの同時発生リスクをどう評価するか",
};

export default function CompoundFloodingPost() {
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
            2026-04-17
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            複合災害としての洪水 — 複数ハザードの同時発生リスクをどう評価するか
          </h1>
          <p className="mt-3 text-xs text-muted">
            Zscheischler, J. et al. (2020). A typology of compound weather and climate events.
            <em> Nature Reviews Earth &amp; Environment</em>, 1, 333-347.
          </p>
          <a href="https://doi.org/10.1038/s43017-020-0060-z" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.1038/s43017-020-0060-z
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
            2020年のNature Reviews Earth &amp; Environmentに掲載された本論文は、
            <strong className="text-foreground">「複合イベント（compound events）」</strong>
            の概念を体系的に分類し、その評価手法・気候変動下での変化・社会的影響を
            包括的にレビューした画期的な論文です。
            洪水リスク評価は従来、降水量のみを外力としてきましたが、
            実際の災害は高潮と豪雨の同時発生、前期降水による土壌水分飽和+豪雨、
            連続する台風による累積的影響など、複数のドライバーが重なることで
            甚大化します。単一ハザード評価では捉えきれないリスクの構造を理解するための
            必読のフレームワーク論文です。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            複合イベントの4類型
          </h2>
          <p className="text-muted">
            本論文の最大の貢献は、多様な複合イベントを
            <strong className="text-foreground">4つの類型</strong>に整理したことです：
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">類型</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">定義</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">洪水関連の例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Preconditioned</td>
                  <td className="border border-border px-3 py-2 text-muted">先行条件が後続イベントの影響を増幅</td>
                  <td className="border border-border px-3 py-2 text-muted">土壌水分飽和 + 豪雨 → 表面流出が急増。森林火災後の裸地 + 豪雨 → 土石流</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Multivariate</td>
                  <td className="border border-border px-3 py-2 text-muted">複数のハザードが同時・同場所で発生</td>
                  <td className="border border-border px-3 py-2 text-muted">高潮 + 河川洪水の同時発生（coastal compound flooding）。強風 + 豪雨による複合被害</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Temporally compounding</td>
                  <td className="border border-border px-3 py-2 text-muted">同種のイベントが連続して発生し、回復不能に</td>
                  <td className="border border-border px-3 py-2 text-muted">連続台風による堤防の累積的損傷。反復的洪水による避難疲れ</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Spatially compounding</td>
                  <td className="border border-border px-3 py-2 text-muted">広域で同時多発し、救援リソースが分散</td>
                  <td className="border border-border px-3 py-2 text-muted">2011年タイ洪水のように複数の河川が同時に氾濫。2020年フィリピンの台風Ulysses + Rolly連続上陸</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            この類型は相互排他ではなく、実際の災害は複数の類型が重畳します。
            例えばフィリピンにおける台風災害は、高潮+河川洪水（Multivariate）、
            前期降水による土壌飽和（Preconditioned）、連続台風（Temporally compounding）が
            同時に作用する典型的な多重複合イベントです。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            統計的評価手法
          </h2>
          <p className="text-muted">
            複合イベントの評価では、単一変数の極値統計（GEV分布等）では不十分であり、
            複数変数の<strong className="text-foreground">依存構造</strong>を明示的にモデル化する必要があります。
            本論文が整理する主要手法は以下の通りです：
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">手法</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">概要</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">適用対象</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">限界</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Copula</td>
                  <td className="border border-border px-3 py-2 text-muted">周辺分布と依存構造を分離してモデル化。2変数以上の同時超過確率を算出</td>
                  <td className="border border-border px-3 py-2 text-muted">高潮+河川水位、降水量+風速</td>
                  <td className="border border-border px-3 py-2 text-muted">高次元（3変数以上）では推定が不安定</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">条件付き極値</td>
                  <td className="border border-border px-3 py-2 text-muted">一方の変数が閾値を超えた条件下で他方の分布を推定</td>
                  <td className="border border-border px-3 py-2 text-muted">Preconditioned型（土壌水分条件付き降水）</td>
                  <td className="border border-border px-3 py-2 text-muted">条件設定の恣意性</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">マルコフ連鎖</td>
                  <td className="border border-border px-3 py-2 text-muted">連続イベントの発生確率を遷移行列で記述</td>
                  <td className="border border-border px-3 py-2 text-muted">Temporally compounding型（連続台風）</td>
                  <td className="border border-border px-3 py-2 text-muted">定常性の仮定が必要</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">大規模アンサンブル</td>
                  <td className="border border-border px-3 py-2 text-muted">GCM大規模アンサンブル（100メンバー以上）から希少な同時発生を直接サンプリング</td>
                  <td className="border border-border px-3 py-2 text-muted">全類型（データが十分な場合）</td>
                  <td className="border border-border px-3 py-2 text-muted">計算コスト大。モデルバイアスの影響</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            論文では、<strong className="text-foreground">依存構造の非定常性</strong>が特に重要な課題として
            強調されています。気候変動は個々のハザードの強度だけでなく、ハザード間の
            相関（例：降水量と高潮の同時発生確率）自体を変化させるため、
            過去の統計に基づく依存構造が将来も成立するとは限りません。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            沿岸複合洪水 — 最も研究が進んだ事例
          </h2>
          <p className="text-muted">
            本レビューで最も詳細に取り上げられているのが、
            <strong className="text-foreground">沿岸域での高潮と河川洪水の同時発生（coastal compound flooding）</strong>
            です。この現象は以下のメカニズムで生じます：
          </p>
          <ol className="mt-3 ml-4 list-decimal space-y-2 text-muted">
            <li>
              台風の強風・低気圧による<strong className="text-foreground">高潮</strong>が河口の排水を阻害
            </li>
            <li>
              同時に内陸部での<strong className="text-foreground">豪雨</strong>が河川流量を増大
            </li>
            <li>
              河口部で海側と川側の水位が合流し、単独では起きない水位上昇が発生
            </li>
          </ol>
          <p className="mt-3 text-muted">
            米国の事例研究（Wahl et al., 2015）では、過去数十年で高潮と降水の
            同時発生頻度が有意に増加していることが報告されています。
            これは海面上昇による背景水位の上昇と、気候変動による極端降水の増加が
            複合的に作用した結果です。
          </p>
          <p className="mt-3 text-muted">
            定量的には、米国大西洋岸で高潮と河川洪水の
            <strong className="text-foreground">同時超過確率は個別確率の積（独立仮定）の
            2〜5倍</strong>に達する地点があり、依存構造を無視した設計は
            洪水リスクを大幅に過小評価することが示されています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            気候変動下での複合リスクの変化
          </h2>
          <p className="text-muted">
            本論文がレビューする将来予測研究から得られた主要な知見：
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">沿岸複合洪水</strong>:
              海面上昇（RCP8.5で2100年に0.5〜1.0m）により、
              現在の100年確率複合洪水が2100年には
              <strong className="text-foreground">10〜20年確率</strong>に頻度上昇する地域が多数
            </li>
            <li>
              <strong className="text-foreground">熱波+干ばつの同時発生</strong>:
              ヨーロッパでは2050年までに同時発生確率が
              <strong className="text-foreground">2〜3倍</strong>に増加
            </li>
            <li>
              <strong className="text-foreground">連続的極端降水</strong>:
              年間の極端降水日数が増加するだけでなく、イベント間隔が短縮し、
              インフラの回復時間が確保できなくなる
            </li>
            <li>
              <strong className="text-foreground">依存構造の変化</strong>:
              一部のGCM研究では、気候変動が個々の変数の強度だけでなく、
              変数間の相関係数自体を変化させることが示唆されている
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            課題と今後の方向性
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">データの制約</strong>
              — 複合イベントは定義上まれであり、観測記録が短い地域
              （途上国の大半）では統計的推定が困難。大規模アンサンブルの活用が不可欠
            </li>
            <li>
              <strong className="text-foreground">因果関係の理解</strong>
              — 統計的依存（相関）と物理的因果メカニズムの区別が不十分。
              プロセスベースのモデリングとの統合が必要
            </li>
            <li>
              <strong className="text-foreground">インパクトへの変換</strong>
              — ハザードの同時発生確率だけでなく、それが社会インフラ・人命に
              与えるインパクト（被害関数）との統合が不足
            </li>
            <li>
              <strong className="text-foreground">早期警報への実装</strong>
              — 複合リスクの概念はまだ予報・警報システムに組み込まれておらず、
              単一ハザードベースの警報が主流
            </li>
            <li>
              <strong className="text-foreground">高次元Copulaの発展</strong>
              — 3変数以上の複合イベント（降水+高潮+波浪 等）の
              依存構造モデリングは手法的に未成熟
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
              Zscheischler, J. et al. (2020). A typology of compound weather and climate events.
              <em> Nat. Rev. Earth Environ.</em>, 1, 333-347.
              DOI: 10.1038/s43017-020-0060-z
            </li>
            <li>
              Wahl, T. et al. (2015). Increasing risk of compound flooding from storm surge and
              rainfall for major US cities. <em>Nat. Clim. Change</em>, 5, 1093-1097.
              DOI: 10.1038/nclimate2736
            </li>
            <li>
              Leonard, M. et al. (2014). A compound event framework for understanding extreme impacts.
              <em> WIREs Clim. Change</em>, 5, 113-128.
              DOI: 10.1002/wcc.252
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
