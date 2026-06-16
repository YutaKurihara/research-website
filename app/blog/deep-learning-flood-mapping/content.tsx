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
            2026-04-17
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "A Systematic Review of Deep Learning Methods for Flood Mapping"
              : "深層学習による洪水マッピング手法の体系的レビュー"}
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
            {en ? "Why Read This Paper" : "この論文を読むべき理由"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                Deep learning (DL) is increasingly applied to all three phases of flood mapping
                — <strong className="text-foreground">susceptibility mapping (where is flooding likely)</strong>,{" "}
                <strong className="text-foreground">rapid inundation modeling (how does flooding occur)</strong>, and{" "}
                <strong className="text-foreground">flood extent extraction from satellite imagery (where did flooding actually occur)</strong>.
                This systematic review, published in HESS, analyzes{" "}
                <strong className="text-foreground">187 papers</strong> published between 2015 and 2022,
                quantitatively summarizing which DL architectures are used in each phase and what accuracies
                have been reported. It is a valuable review that also addresses structural issues within the
                research community, such as the lack of justification for method selection and the absence of benchmarks.
              </>
            ) : (
              <>
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
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Three Phases of Flood Mapping and Conventional Methods" : "洪水マッピングの3フェーズと従来手法"}
          </h2>
          <p className="text-muted">
            {en
              ? "This paper classifies flood mapping into three phases, organizing the conventional methods and the role of DL for each:"
              : "本論文では洪水マッピングを3つのフェーズに分類し、それぞれの従来手法とDLの位置づけを整理しています："}
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Phase" : "フェーズ"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Objective" : "目的"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Conventional Methods" : "従来手法"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "No. of Papers" : "論文数"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Susceptibility Mapping" : "感受性マッピング"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Predict flood susceptibility based on topography, land use, etc." : "地形・土地利用等から浸水しやすさを予測"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Logistic regression, SVM, Random Forest" : "ロジスティック回帰、SVM、ランダムフォレスト"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "84" : "84本"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Rapid Inundation Modeling" : "急速浸水モデリング"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Rapidly estimate flood extent and depth as a surrogate for physics-based models (2D shallow water)" : "物理モデル（2D浅水流）の代替として浸水域・浸水深を高速推定"}</td>
                  <td className="border border-border px-3 py-2 text-muted">HEC-RAS, LISFLOOD-FP, MIKE</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "30" : "30本"}</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Satellite Image Extraction" : "衛星画像からの抽出"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Classify flooded/non-flooded pixels from SAR/optical imagery" : "SAR/光学画像からピクセル単位で浸水/非浸水を分類"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Thresholding, Otsu's method, Random Forest" : "閾値法、Otsu法、ランダムフォレスト"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "73" : "73本"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "DL Architectures Used" : "使用されるDLアーキテクチャ"}
          </h2>
          <p className="text-muted">
            {en
              ? "The distribution of DL architectures used across the 187 papers is as follows:"
              : "187本の論文で使用されたDLアーキテクチャの分布は以下の通りです："}
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Architecture" : "アーキテクチャ"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Adoption Rate" : "採用率"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Primary Application Phase" : "主な適用フェーズ"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Characteristics" : "特徴"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">CNN</td>
                  <td className="border border-border px-3 py-2 text-muted">~40%</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Susceptibility, Satellite imagery" : "感受性、衛星画像"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Patch classification. Leverages spatial context" : "パッチ分類。空間コンテキストの活用"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">U-Net / FCN</td>
                  <td className="border border-border px-3 py-2 text-muted">~25%</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Satellite imagery, Rapid modeling" : "衛星画像、急速モデリング"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Encoder-decoder architecture. Pixel-wise segmentation" : "エンコーダ-デコーダ構造。ピクセル単位のセグメンテーション"}</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">LSTM / GRU</td>
                  <td className="border border-border px-3 py-2 text-muted">~15%</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Rapid modeling" : "急速モデリング"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Time series prediction. Learns rainfall-to-water-level time lag" : "時系列予測。降雨→水位の時間遅れを学習"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">GAN</td>
                  <td className="border border-border px-3 py-2 text-muted">~5%</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Rapid modeling" : "急速モデリング"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Super-resolution of physics model output. Training data augmentation" : "物理モデル出力の超解像。学習データ増強"}</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Transformer</td>
                  <td className="border border-border px-3 py-2 text-muted">~3%</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Satellite imagery" : "衛星画像"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Vision Transformer. Learns long-range dependencies. Rapidly growing in adoption" : "Vision Transformer。長距離依存の学習。論文数は急増中"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Others (AE, DBN, etc.)" : "その他（AE, DBN等）"}</td>
                  <td className="border border-border px-3 py-2 text-muted">~12%</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Susceptibility" : "感受性"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Feature extraction via autoencoders, etc." : "オートエンコーダによる特徴抽出等"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en ? (
              <>
                Notably, <strong className="text-foreground">U-Net</strong> has demonstrated high performance in
                both flood extent extraction from satellite imagery and rapid inundation modeling, establishing
                itself as the de facto standard architecture in flood mapping. Its skip connections effectively
                preserve high-resolution features, enabling accurate reproduction of complex flood boundaries.
              </>
            ) : (
              <>
                特筆すべきは、<strong className="text-foreground">U-Net</strong>が衛星画像からの浸水域抽出と
                急速浸水モデリングの両方で高い性能を示しており、
                洪水マッピングにおける事実上の標準アーキテクチャになりつつある点です。
                スキップコネクションによる高解像度特徴の保持が、
                浸水域の複雑な境界を正確に再現するのに効果的です。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Quantitative Results by Phase" : "フェーズ別の定量的結果"}
          </h2>

          <h3 className="mb-2 font-medium text-foreground">{en ? "1. Susceptibility Mapping" : "1. 感受性マッピング"}</h3>
          <p className="text-muted">
            {en
              ? "Across 84 papers, the following input features were most frequently used:"
              : "84本の論文では、入力特徴量として以下が最も頻繁に使用されていました："}
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-muted">
            <li>{en ? "Topography (elevation, slope, TWI):" : "地形（標高、傾斜、TWI）:"} <strong className="text-foreground">95%</strong>{en ? " of papers" : "の論文"}</li>
            <li>{en ? "Land use / land cover:" : "土地利用/土地被覆:"} <strong className="text-foreground">89%</strong></li>
            <li>{en ? "Rainfall:" : "降雨量:"} <strong className="text-foreground">82%</strong></li>
            <li>{en ? "Distance to rivers:" : "河川までの距離:"} <strong className="text-foreground">78%</strong></li>
            <li>{en ? "Soil properties:" : "土壌特性:"} <strong className="text-foreground">65%</strong></li>
          </ul>
          <p className="mt-3 text-muted">
            {en ? (
              <>
                The median reported AUC (Area Under Curve) was{" "}
                <strong className="text-foreground">0.95</strong> (interquartile range 0.92-0.97), which is high.
                However, the authors note that this may be attributable to{" "}
                <strong className="text-foreground">validation methodology issues</strong>{" "}
                (overestimation due to random splitting that ignores spatial autocorrelation).
              </>
            ) : (
              <>
                報告されたAUC（Area Under Curve）の中央値は
                <strong className="text-foreground">0.95</strong>（四分位範囲 0.92-0.97）と高い値ですが、
                著者らはこれが<strong className="text-foreground">検証手法の問題</strong>
                （空間的自己相関を考慮しないランダム分割による過大評価）に起因する可能性を指摘しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">{en ? "2. Rapid Inundation Modeling" : "2. 急速浸水モデリング"}</h3>
          <p className="text-muted">
            {en
              ? "Across 30 papers using DL as a surrogate for physics-based models, the following approaches were reported:"
              : "物理モデルの代替としてDLを用いる30本の論文では、以下のアプローチが報告されています："}
          </p>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Approach" : "アプローチ"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Input" : "入力"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Output" : "出力"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Speedup Factor" : "高速化率"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Surrogate model" : "サロゲートモデル"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "DEM + flow hydrograph" : "DEM + 流量ハイドログラフ"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Flood depth map" : "浸水深マップ"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "100-1,000x" : "100〜1,000倍"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Super-resolution" : "超解像"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Coarse-resolution physics model output" : "粗解像度の物理モデル出力"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "High-resolution flood depth" : "高解像度浸水深"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "10-50x" : "10〜50倍"}</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Spatiotemporal prediction" : "時空間予測"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Rainfall time series + DEM" : "降雨時系列 + DEM"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Time-step flood depth animation" : "時刻別浸水深動画"}</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "50-500x" : "50〜500倍"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en ? (
              <>
                The reported NSE (Nash-Sutcliffe Efficiency) ranged from{" "}
                <strong className="text-foreground">0.85 to 0.99</strong>. However, most evaluations were
                conducted on the same catchments and rainfall patterns as the training data, leaving a critical
                issue: <strong className="text-foreground">generalization to unseen catchments remains untested</strong>.
              </>
            ) : (
              <>
                報告されたNSE（Nash-Sutcliffe Efficiency）は
                <strong className="text-foreground">0.85〜0.99</strong>の範囲ですが、
                学習データと同じ流域・同じ降雨パターンでの評価がほとんどであり、
                <strong className="text-foreground">未知の流域への汎化性能は未検証</strong>
                という重大な課題が残っています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">{en ? "3. Flood Extent Extraction from Satellite Imagery" : "3. 衛星画像からの浸水域抽出"}</h3>
          <p className="text-muted">
            {en
              ? "Sensor usage frequency and reported accuracy across 73 papers:"
              : "73本の論文でのセンサー別の使用頻度と報告精度："}
          </p>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Sensor" : "センサー"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Usage Rate" : "使用率"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Median F1 Score" : "F1スコア中央値"}</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">{en ? "Main Challenges" : "主な課題"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Sentinel-1 SAR</td>
                  <td className="border border-border px-3 py-2 text-muted">~45%</td>
                  <td className="border border-border px-3 py-2 text-muted">0.75-0.85</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Double bounce in urban areas, speckle noise" : "都市域のダブルバウンス、スペックルノイズ"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Sentinel-2 / Landsat</td>
                  <td className="border border-border px-3 py-2 text-muted">~30%</td>
                  <td className="border border-border px-3 py-2 text-muted">0.80-0.90</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Cloud cover, shadows, revisit period" : "雲被覆、影、再訪周期"}</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Multi-source fusion" : "マルチソース融合"}</td>
                  <td className="border border-border px-3 py-2 text-muted">~15%</td>
                  <td className="border border-border px-3 py-2 text-muted">0.82-0.92</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Temporal misalignment, resolution differences" : "時間的不整合、解像度の差"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">{en ? "Aerial photography / UAV" : "航空写真 / UAV"}</td>
                  <td className="border border-border px-3 py-2 text-muted">~10%</td>
                  <td className="border border-border px-3 py-2 text-muted">0.85-0.95</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "Limited spatial coverage" : "カバー範囲が限定的"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Structural Issues Identified by the Review" : "レビューが指摘する構造的問題"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The most valuable aspect of this paper is not the accuracy reports of individual studies but
                its identification of <strong className="text-foreground">structural issues</strong> across the
                research community as a whole:
              </>
            ) : (
              <>
                本論文の最も価値ある部分は、個別研究の精度報告ではなく、
                研究コミュニティ全体の<strong className="text-foreground">構造的な問題点</strong>を指摘している点です：
              </>
            )}
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">{en ? "Absence of benchmarks" : "ベンチマークの不在"}</strong>
              {en
                ? " — Datasets, evaluation metrics, and splitting methods are not standardized across studies, making fair comparison between methods impossible. Fewer than 15% of the 187 papers use a common benchmark"
                : " — 研究間で使用するデータセット・評価指標・分割方法が統一されておらず、手法間の公平な比較が不可能。187本中、共通ベンチマークを使用しているのは15%未満"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Lack of justification for architecture selection" : "アーキテクチャ選択の根拠不足"}</strong>
              {en
                ? " — Physical or mathematical rationale for the choice of DL model is rarely provided; the majority are motivated by \"trying the latest model\""
                : " — 「なぜそのDLモデルを選んだか」の物理的・数学的根拠が示されておらず、「最新のモデルを試した」という動機が大半"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Overly optimistic accuracy reporting" : "過度に楽観的な精度報告"}</strong>
              {en
                ? " — Random splitting that ignores spatial autocorrelation, training and evaluation on the same event, and uncorrected class imbalance may cause reported accuracy to significantly exceed operational accuracy"
                : " — 空間的自己相関を無視したランダム分割、同一イベントでの学習と評価、クラス不均衡の未補正などにより、報告精度が実運用時の精度を大幅に上回っている可能性"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Untested generalization" : "汎化性能の未検証"}</strong>
              {en
                ? " — Transfer performance to unseen catchments, climate zones, and event magnitudes is rarely evaluated, despite being the most important performance metric for operational use"
                : " — 学習に使用していない流域・気候帯・イベント規模への転移性能がほとんど評価されていない。実運用では最も重要な性能指標であるにもかかわらず"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Lack of uncertainty quantification" : "不確実性の定量化の欠如"}</strong>
              {en
                ? " — Only 5% of studies assign confidence intervals to DL predictions. Probabilistic outputs such as \"80% probability of inundation\" are essential for decision-making"
                : " — DLモデルの予測に信頼区間を付与する研究はわずか5%。意思決定には「浸水確率80%」のような確率的出力が不可欠"}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Future Research Directions" : "今後の研究方向"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">Physics-Informed Neural Networks (PINNs)</strong>
              {en
                ? " — Embedding physical laws such as shallow water equations into the DL loss function to achieve both data efficiency and physical consistency"
                : " — 浅水流方程式などの物理法則をDLの損失関数に組み込むことで、データ効率と物理的整合性を両立"}
            </li>
            <li>
              <strong className="text-foreground">Foundation Models</strong>
              {en
                ? " — Pre-training on large-scale Earth observation data and fine-tuning for flood tasks. Expected to achieve high accuracy with few-shot learning"
                : " — 大規模な地球観測データで事前学習したモデルを洪水タスクにファインチューニング。少数サンプルでの高精度化が期待される"}
            </li>
            <li>
              <strong className="text-foreground">Graph Neural Networks</strong>
              {en
                ? " — Treating river networks as graph structures to explicitly model upstream-downstream hydraulic connectivity"
                : " — 河川ネットワークをグラフ構造として扱い、上下流の水理学的接続性を明示的にモデル化"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Probabilistic DL" : "確率的DL"}</strong>
              {en
                ? " — Quantifying prediction uncertainty via Monte Carlo Dropout, Deep Ensembles, Evidential DL, etc., for use in decision-making"
                : " — Monte Carlo Dropout、Deep Ensemble、Evidential DLなどで予測不確実性を定量化し、意思決定に活用"}
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
