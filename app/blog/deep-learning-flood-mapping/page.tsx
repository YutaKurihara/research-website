import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "深層学習による洪水マッピング手法の体系的レビュー",
};

export default function DeepLearningFloodMappingPost() {
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
            深層学習による洪水マッピング手法の体系的レビュー
          </h1>
          <p className="mt-3 text-xs text-muted">
            Bentivoglio, R. et al. (2022). Deep learning methods for flood mapping: a review of existing
            applications and future research directions.
            <em> Hydrology and Earth System Sciences</em>, 26, 4345-4378.
          </p>
          <a href="https://doi.org/10.5194/hess-26-4345-2022" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.5194/hess-26-4345-2022
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
            深層学習（DL）は洪水マッピングの3つのフェーズ
            — <strong className="text-foreground">感受性マッピング（どこが浸水しやすいか）</strong>、
            <strong className="text-foreground">急速浸水モデリング（どう浸水するか）</strong>、
            <strong className="text-foreground">衛星画像からの浸水域抽出（実際に浸水したか）</strong>
            — すべてに適用が広がっています。
            本論文はHESSに掲載された体系的レビューで、2015〜2022年に発表された
            <strong className="text-foreground">187本の論文</strong>を分析し、
            各フェーズでどのDLアーキテクチャが使われ、どのような精度が報告されているかを
            定量的に整理しています。手法選択の根拠やベンチマークの不足といった
            研究コミュニティの構造的問題にも踏み込んだ重要なレビューです。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            洪水マッピングの3フェーズと従来手法
          </h2>
          <p className="text-muted">
            本論文では洪水マッピングを3つのフェーズに分類し、
            それぞれの従来手法とDLの位置づけを整理しています：
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">フェーズ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">目的</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">従来手法</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">論文数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">感受性マッピング</td>
                  <td className="border border-border px-3 py-2 text-muted">地形・土地利用等から浸水しやすさを予測</td>
                  <td className="border border-border px-3 py-2 text-muted">ロジスティック回帰、SVM、ランダムフォレスト</td>
                  <td className="border border-border px-3 py-2 text-muted">84本</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">急速浸水モデリング</td>
                  <td className="border border-border px-3 py-2 text-muted">物理モデル（2D浅水流）の代替として浸水域・浸水深を高速推定</td>
                  <td className="border border-border px-3 py-2 text-muted">HEC-RAS, LISFLOOD-FP, MIKE</td>
                  <td className="border border-border px-3 py-2 text-muted">30本</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">衛星画像からの抽出</td>
                  <td className="border border-border px-3 py-2 text-muted">SAR/光学画像からピクセル単位で浸水/非浸水を分類</td>
                  <td className="border border-border px-3 py-2 text-muted">閾値法、Otsu法、ランダムフォレスト</td>
                  <td className="border border-border px-3 py-2 text-muted">73本</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            使用されるDLアーキテクチャ
          </h2>
          <p className="text-muted">
            187本の論文で使用されたDLアーキテクチャの分布は以下の通りです：
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">アーキテクチャ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">採用率</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">主な適用フェーズ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">CNN</td>
                  <td className="border border-border px-3 py-2 text-muted">~40%</td>
                  <td className="border border-border px-3 py-2 text-muted">感受性、衛星画像</td>
                  <td className="border border-border px-3 py-2 text-muted">パッチ分類。空間コンテキストの活用</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">U-Net / FCN</td>
                  <td className="border border-border px-3 py-2 text-muted">~25%</td>
                  <td className="border border-border px-3 py-2 text-muted">衛星画像、急速モデリング</td>
                  <td className="border border-border px-3 py-2 text-muted">エンコーダ-デコーダ構造。ピクセル単位のセグメンテーション</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">LSTM / GRU</td>
                  <td className="border border-border px-3 py-2 text-muted">~15%</td>
                  <td className="border border-border px-3 py-2 text-muted">急速モデリング</td>
                  <td className="border border-border px-3 py-2 text-muted">時系列予測。降雨→水位の時間遅れを学習</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">GAN</td>
                  <td className="border border-border px-3 py-2 text-muted">~5%</td>
                  <td className="border border-border px-3 py-2 text-muted">急速モデリング</td>
                  <td className="border border-border px-3 py-2 text-muted">物理モデル出力の超解像。学習データ増強</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Transformer</td>
                  <td className="border border-border px-3 py-2 text-muted">~3%</td>
                  <td className="border border-border px-3 py-2 text-muted">衛星画像</td>
                  <td className="border border-border px-3 py-2 text-muted">Vision Transformer。長距離依存の学習。論文数は急増中</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">その他（AE, DBN等）</td>
                  <td className="border border-border px-3 py-2 text-muted">~12%</td>
                  <td className="border border-border px-3 py-2 text-muted">感受性</td>
                  <td className="border border-border px-3 py-2 text-muted">オートエンコーダによる特徴抽出等</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            特筆すべきは、<strong className="text-foreground">U-Net</strong>が衛星画像からの浸水域抽出と
            急速浸水モデリングの両方で高い性能を示しており、
            洪水マッピングにおける事実上の標準アーキテクチャになりつつある点です。
            スキップコネクションによる高解像度特徴の保持が、
            浸水域の複雑な境界を正確に再現するのに効果的です。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            フェーズ別の定量的結果
          </h2>

          <h3 className="mb-2 font-medium text-foreground">1. 感受性マッピング</h3>
          <p className="text-muted">
            84本の論文では、入力特徴量として以下が最も頻繁に使用されていました：
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-muted">
            <li>地形（標高、傾斜、TWI）: <strong className="text-foreground">95%</strong>の論文</li>
            <li>土地利用/土地被覆: <strong className="text-foreground">89%</strong></li>
            <li>降雨量: <strong className="text-foreground">82%</strong></li>
            <li>河川までの距離: <strong className="text-foreground">78%</strong></li>
            <li>土壌特性: <strong className="text-foreground">65%</strong></li>
          </ul>
          <p className="mt-3 text-muted">
            報告されたAUC（Area Under Curve）の中央値は
            <strong className="text-foreground">0.95</strong>（四分位範囲 0.92-0.97）と高い値ですが、
            著者らはこれが<strong className="text-foreground">検証手法の問題</strong>
            （空間的自己相関を考慮しないランダム分割による過大評価）に起因する可能性を指摘しています。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">2. 急速浸水モデリング</h3>
          <p className="text-muted">
            物理モデルの代替としてDLを用いる30本の論文では、以下のアプローチが報告されています：
          </p>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">アプローチ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">入力</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">出力</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">高速化率</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">サロゲートモデル</td>
                  <td className="border border-border px-3 py-2 text-muted">DEM + 流量ハイドログラフ</td>
                  <td className="border border-border px-3 py-2 text-muted">浸水深マップ</td>
                  <td className="border border-border px-3 py-2 text-muted">100〜1,000倍</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">超解像</td>
                  <td className="border border-border px-3 py-2 text-muted">粗解像度の物理モデル出力</td>
                  <td className="border border-border px-3 py-2 text-muted">高解像度浸水深</td>
                  <td className="border border-border px-3 py-2 text-muted">10〜50倍</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">時空間予測</td>
                  <td className="border border-border px-3 py-2 text-muted">降雨時系列 + DEM</td>
                  <td className="border border-border px-3 py-2 text-muted">時刻別浸水深動画</td>
                  <td className="border border-border px-3 py-2 text-muted">50〜500倍</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            報告されたNSE（Nash-Sutcliffe Efficiency）は
            <strong className="text-foreground">0.85〜0.99</strong>の範囲ですが、
            学習データと同じ流域・同じ降雨パターンでの評価がほとんどであり、
            <strong className="text-foreground">未知の流域への汎化性能は未検証</strong>
            という重大な課題が残っています。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">3. 衛星画像からの浸水域抽出</h3>
          <p className="text-muted">
            73本の論文でのセンサー別の使用頻度と報告精度：
          </p>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">センサー</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">使用率</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">F1スコア中央値</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">主な課題</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Sentinel-1 SAR</td>
                  <td className="border border-border px-3 py-2 text-muted">~45%</td>
                  <td className="border border-border px-3 py-2 text-muted">0.75-0.85</td>
                  <td className="border border-border px-3 py-2 text-muted">都市域のダブルバウンス、スペックルノイズ</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Sentinel-2 / Landsat</td>
                  <td className="border border-border px-3 py-2 text-muted">~30%</td>
                  <td className="border border-border px-3 py-2 text-muted">0.80-0.90</td>
                  <td className="border border-border px-3 py-2 text-muted">雲被覆、影、再訪周期</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">マルチソース融合</td>
                  <td className="border border-border px-3 py-2 text-muted">~15%</td>
                  <td className="border border-border px-3 py-2 text-muted">0.82-0.92</td>
                  <td className="border border-border px-3 py-2 text-muted">時間的不整合、解像度の差</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">航空写真 / UAV</td>
                  <td className="border border-border px-3 py-2 text-muted">~10%</td>
                  <td className="border border-border px-3 py-2 text-muted">0.85-0.95</td>
                  <td className="border border-border px-3 py-2 text-muted">カバー範囲が限定的</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            レビューが指摘する構造的問題
          </h2>
          <p className="text-muted">
            本論文の最も価値ある部分は、個別研究の精度報告ではなく、
            研究コミュニティ全体の<strong className="text-foreground">構造的な問題点</strong>を指摘している点です：
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">ベンチマークの不在</strong>
              — 研究間で使用するデータセット・評価指標・分割方法が統一されておらず、
              手法間の公平な比較が不可能。187本中、共通ベンチマークを使用しているのは15%未満
            </li>
            <li>
              <strong className="text-foreground">アーキテクチャ選択の根拠不足</strong>
              — 「なぜそのDLモデルを選んだか」の物理的・数学的根拠が示されておらず、
              「最新のモデルを試した」という動機が大半
            </li>
            <li>
              <strong className="text-foreground">過度に楽観的な精度報告</strong>
              — 空間的自己相関を無視したランダム分割、同一イベントでの学習と評価、
              クラス不均衡の未補正などにより、報告精度が実運用時の精度を大幅に上回っている可能性
            </li>
            <li>
              <strong className="text-foreground">汎化性能の未検証</strong>
              — 学習に使用していない流域・気候帯・イベント規模への転移性能が
              ほとんど評価されていない。実運用では最も重要な性能指標であるにもかかわらず
            </li>
            <li>
              <strong className="text-foreground">不確実性の定量化の欠如</strong>
              — DLモデルの予測に信頼区間を付与する研究はわずか5%。
              意思決定には「浸水確率80%」のような確率的出力が不可欠
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            今後の研究方向
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">Physics-Informed Neural Networks (PINNs)</strong>
              — 浅水流方程式などの物理法則をDLの損失関数に組み込むことで、
              データ効率と物理的整合性を両立
            </li>
            <li>
              <strong className="text-foreground">Foundation Models</strong>
              — 大規模な地球観測データで事前学習したモデルを洪水タスクにファインチューニング。
              少数サンプルでの高精度化が期待される
            </li>
            <li>
              <strong className="text-foreground">Graph Neural Networks</strong>
              — 河川ネットワークをグラフ構造として扱い、
              上下流の水理学的接続性を明示的にモデル化
            </li>
            <li>
              <strong className="text-foreground">確率的DL</strong>
              — Monte Carlo Dropout、Deep Ensemble、Evidential DLなどで
              予測不確実性を定量化し、意思決定に活用
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
              Bentivoglio, R. et al. (2022). Deep learning methods for flood mapping: a review of
              existing applications and future research directions.
              <em> Hydrol. Earth Syst. Sci.</em>, 26, 4345-4378.
              DOI: 10.5194/hess-26-4345-2022
            </li>
            <li>
              Ronneberger, O. et al. (2015). U-Net: Convolutional Networks for Biomedical
              Image Segmentation. <em>MICCAI</em>, 234-241.
              DOI: 10.1007/978-3-319-24574-4_28
            </li>
            <li>
              Mosavi, A. et al. (2018). Flood prediction using machine learning models:
              Literature review. <em>Water</em>, 10, 1536.
              DOI: 10.3390/w10111536
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
