import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAR衛星×水理モデル — リモートセンシングで洪水予測を高精度化するアプローチの体系的整理",
};

export default function SarHydraulicModelIntegrationPost() {
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
            2026-04-20
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            SAR衛星×水理モデル — リモートセンシングで洪水予測を高精度化するアプローチの体系的整理
          </h1>
          <p className="mt-3 text-xs text-muted">
            Grimaldi, S., Li, Y., Pauwels, V.R.N., &amp; Walker, J.P. (2016).
            Remote Sensing-Derived Water Extent and Level to Constrain Hydraulic Flood
            Forecasting Models: Opportunities and Challenges.
            <em> Surveys in Geophysics</em>, 37, 977-1034.
          </p>
          <a href="https://doi.org/10.1007/s10712-016-9378-y" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.1007/s10712-016-9378-y
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
            SAR衛星で洪水範囲を抽出する技術と、2D水理モデルで浸水域を計算するシミュレーション。
            この2つは個別には広く使われていますが、
            <strong className="text-foreground">両者をどう組み合わせれば洪水予測の精度と信頼性を
            本質的に向上させられるのか</strong>を体系的に整理したレビューが本論文です。
            SAR画像から抽出できる「浸水範囲」と「水位」の2種類の観測情報が、
            水理モデルの<strong className="text-foreground">キャリブレーション（較正）</strong>・
            <strong className="text-foreground">バリデーション（検証）</strong>・
            <strong className="text-foreground">データ同化（リアルタイム更新）</strong>
            という3つの段階でそれぞれどのように活用できるかを、
            具体的な手法・精度・限界とともに論じています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            背景 — なぜSARと水理モデルを統合するのか
          </h2>
          <p className="text-muted">
            洪水被害の軽減には、浸水域の到達時間・水深・流速を空間的に予測する必要があります。
            しかし、水理モデル単独での予測には以下の課題があります：
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">地形データの不足</strong>
              — 氾濫原の微地形（堤防・水路・構造物）がDEMの解像度では表現できない。
              SRTM（90m）やCopernicus GLO-30でも堤防の盛土を捉えきれない
            </li>
            <li>
              <strong className="text-foreground">摩擦係数（Manning&apos;s n）の不確実性</strong>
              — 土地利用や植生の季節変化により粗度が変動するが、
              多くの場合は文献値を一律に適用している
            </li>
            <li>
              <strong className="text-foreground">境界条件の誤差</strong>
              — 上流の流量ハイドログラフや降雨-流出モデルの出力に含まれる誤差が
              水理モデルに伝播する
            </li>
            <li>
              <strong className="text-foreground">検証データの空間的制約</strong>
              — 水位計は点観測であり、2Dモデルの面的な出力
              （浸水範囲・浸水深分布）の検証には不十分
            </li>
          </ul>
          <p className="mt-3 text-muted">
            SAR衛星は、これらの課題に対して
            <strong className="text-foreground">面的・全天候・反復的な観測情報</strong>
            を提供できます。特にSentinel-1の6〜12日再訪周期により、
            洪水イベント中に複数回の観測が期待できるようになり、
            静的な検証だけでなく動的なモデル更新（データ同化）が現実的になりました。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            SARから抽出できる2種類の洪水情報
          </h2>
          <p className="text-muted">
            本レビューでは、SAR画像から水理モデルに投入可能な情報を
            <strong className="text-foreground">浸水範囲（Flood Extent）</strong>と
            <strong className="text-foreground">水位（Water Level / Stage）</strong>
            の2カテゴリに分類しています。
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">情報</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">抽出手法</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">精度</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">水理モデルでの用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">浸水範囲</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    閾値法、変化検出、機械学習分類（Random Forest, CNN等）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">F1 = 0.7〜0.9（土地被覆に依存）</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    キャリブレーション、バリデーション、データ同化
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">水位</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    浸水境界線とDEMの交差から推定（水陸境界法）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">RMSE = 0.5〜1.5m（DEM精度に依存）</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    キャリブレーション、データ同化（水位計の空間補完）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            水位推定の精度は、使用するDEMの鉛直精度に強く依存します。
            Hostache et al. (2009) は、SAR画像から抽出した浸水境界線と
            LiDAR DEMを組み合わせることで、
            <strong className="text-foreground">平均±54cmの精度で水位を推定</strong>
            できることを示しました。ただし、SRTM等の粗いDEMでは
            1〜2m程度の誤差が生じます。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            統合の3段階 — キャリブレーション・バリデーション・データ同化
          </h2>

          <h3 className="mb-2 font-medium text-foreground">1. キャリブレーション（モデル較正）</h3>
          <p className="text-muted">
            SAR由来の浸水範囲を「正解データ」として、水理モデルの
            <strong className="text-foreground">Manning&apos;s n（粗度係数）</strong>や
            <strong className="text-foreground">河道断面形状</strong>を最適化する手法です。
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">手法</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">概要</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">比較指標</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">バイナリパターン比較</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    モデル浸水域とSAR浸水域のピクセル一致率を最大化するようにパラメータを探索
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    F統計量 = A∩B / (A∪B)、Critical Success Index
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">水位ベース較正</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    SAR＋DEMから推定した水位と、モデルの水位出力のRMSEを最小化
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    RMSE（水位）、Nash-Sutcliffe効率
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">GLUE + SAR</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    一般化尤度不確実性推定（GLUE）のリジェクション基準にSAR浸水範囲を使用
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    パラメータの事後分布（不確実性の定量化）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            Di Baldassarre et al. (2009) は、SAR浸水範囲による較正で
            <strong className="text-foreground">Manning&apos;s nの不確実性幅を
            従来の0.01〜0.10から0.03〜0.06に約50%縮小</strong>
            できることを示しました。
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">2. バリデーション（独立検証）</h3>
          <p className="text-muted">
            較正に使用していない別イベントのSAR画像で、モデルの予測性能を
            独立に検証します。従来の水位計による点検証に加えて、
            <strong className="text-foreground">浸水域の面的な一致度</strong>を評価できる点がSARの大きな利点です。
            複数のSARセンサー（Sentinel-1, ALOS-2 PALSAR, RADARSAT等）からの
            マルチソース検証により、センサー固有のバイアスも評価可能です。
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">3. データ同化（リアルタイム更新）</h3>
          <p className="text-muted">
            最も先進的なアプローチが、
            <strong className="text-foreground">SAR観測を水理モデルに逐次同化</strong>して
            予測をリアルタイムに更新するデータ同化です。
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">同化手法</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">概要</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">適用事例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">EnKF</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    アンサンブルカルマンフィルタ。モデルの状態変数（水位・流量）を
                    SAR観測で更新
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Hostache et al. (2018): Alzette川で水位RMSE 30%改善
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">粒子フィルタ</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    非線形・非ガウスの状態推定。SAR由来の浸水確率マップを尤度として使用
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Hostache et al. (2021): LISFLOOD-FP + Sentinel-1確率マップ
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Digital Twin</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    水理モデルの双子を常時稼働させ、SAR観測で継続的に同期
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    2025年のAlzette洪水での概念実証（proof of concept）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            Hostache et al. (2018) は、概念的水文モデル + LISFLOOD-FP水理モデルの
            カスケードにSentinel-1 SAR画像を逐次同化するフレームワークを構築し、
            <strong className="text-foreground">同化なしに比べて水位予測の
            RMSEを最大30%改善</strong>できることを実証しました。
            2021年の後続研究では、SAR画像から「浸水/非浸水」の二値マップではなく
            <strong className="text-foreground">確率的浸水マップ</strong>を同化する手法に
            拡張されています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            代表的な水理モデルとSAR統合の適合性
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">モデル</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">次元</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">支配方程式</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">SAR統合の実績</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">LISFLOOD-FP</td>
                  <td className="border border-border px-3 py-2 text-muted">1D/2D</td>
                  <td className="border border-border px-3 py-2 text-muted">簡略化慣性方程式</td>
                  <td className="border border-border px-3 py-2 text-muted">最多。EnKF・粒子フィルタ同化の実績豊富</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">HEC-RAS</td>
                  <td className="border border-border px-3 py-2 text-muted">1D/2D</td>
                  <td className="border border-border px-3 py-2 text-muted">完全Saint-Venant / 拡散波</td>
                  <td className="border border-border px-3 py-2 text-muted">SAR浸水範囲での較正・検証事例多数</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">TELEMAC-2D</td>
                  <td className="border border-border px-3 py-2 text-muted">2D</td>
                  <td className="border border-border px-3 py-2 text-muted">完全浅水方程式（FEM）</td>
                  <td className="border border-border px-3 py-2 text-muted">大規模河川での適用事例</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">RRI</td>
                  <td className="border border-border px-3 py-2 text-muted">2D</td>
                  <td className="border border-border px-3 py-2 text-muted">拡散波（降雨-流出一体型）</td>
                  <td className="border border-border px-3 py-2 text-muted">SAR浸水範囲での検証に適する</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">FwDET</td>
                  <td className="border border-border px-3 py-2 text-muted">—</td>
                  <td className="border border-border px-3 py-2 text-muted">コスト距離法（簡易推定）</td>
                  <td className="border border-border px-3 py-2 text-muted">SAR浸水範囲 + DEMから浸水深を直接推定</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            LISFLOOD-FPは簡略化慣性方程式を採用しているため計算コストが低く、
            データ同化に必要な<strong className="text-foreground">数百〜数千回の
            アンサンブルラン</strong>が現実的な時間内で可能です。
            これがSAR同化研究で最も多く使用されている理由です。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Google Earth Engineで何ができるか
          </h2>
          <p className="text-muted">
            GEEは2D水理モデルの求解器（Saint-Venantソルバー等）を内蔵していないため、
            <strong className="text-foreground">本格的な水理シミュレーションはGEE単体では不可能</strong>
            です。しかし、SAR×水理モデル統合ワークフローの
            <strong className="text-foreground">前処理・後処理・簡易推定</strong>
            の多くはGEE上で実行できます。
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">処理</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">GEEで可能か</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">利用可能なツール・データ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">SAR浸水範囲抽出</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">可能</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Sentinel-1 GRD + 閾値法/変化検出。UN-SPIDERの推奨手法あり
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">深層学習による浸水分類</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">可能</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    DeepSAR Flood Mapper（MLP + Sentinel-1 + HAND）。公開アプリあり
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">浸水深の簡易推定</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">可能</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    FwDET（コスト距離法）。SAR浸水範囲 + Copernicus DEM
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">水位推定（水陸境界法）</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">可能</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    浸水境界ポリゴン + DEM → ee.Image.reduceRegion で標高中央値を取得
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">HAND（最近接水系との比高）</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">可能</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    MERIT Hydro HAND がGEEカタログに収録済み
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Manning&apos;s n マップ作成</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">可能</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ESA WorldCover / Dynamic World → 土地被覆分類 → 粗度係数を割当
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">2D水理シミュレーション</td>
                  <td className="border border-border px-3 py-2 text-muted">不可</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    LISFLOOD-FP / HEC-RAS / RRI はローカルまたはHPC上で実行
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">データ同化（EnKF等）</td>
                  <td className="border border-border px-3 py-2 text-muted">不可</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Python（filterpy, DART等）で外部実装が必要
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">GEE上の注目ツール: DeepSAR Flood Mapper</h3>
          <p className="text-muted">
            2025年に発表されたDeepSAR Flood Mapperは、
            Sentinel-1のVV/VH偏波とMERIT Hydro HANDデータを入力とする
            <strong className="text-foreground">MLPモデルをGEE上で完全自動実行</strong>する
            オープンソースアプリケーションです。
            学習済みモデルの重みをGEEのee.Classifierに実装する
            「Offline Training / Online Prediction」戦略を採用しており、
            ユーザーはAOIと日付を指定するだけで浸水マップを生成できます。
            Otsu閾値法やSVMに対して精度が向上することが報告されています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            実用的な統合ワークフロー
          </h2>
          <p className="text-muted">
            本レビューの知見と現在のGEE機能を踏まえると、
            SAR×水理モデルの統合は以下のワークフローで実現できます：
          </p>
          <ol className="mt-3 ml-4 list-decimal space-y-2 text-muted">
            <li>
              <strong className="text-foreground">GEE上でSAR浸水範囲を抽出</strong>
              — Sentinel-1 + 変化検出法 or DeepSAR。マスク処理（傾斜、恒常水域、土地被覆）を適用
            </li>
            <li>
              <strong className="text-foreground">GEE上で水位を推定</strong>
              — 浸水境界線 × Copernicus DEM。複数の断面で水位プロファイルを構築
            </li>
            <li>
              <strong className="text-foreground">GEE上でManning&apos;s nマップを生成</strong>
              — ESA WorldCover分類結果にルックアップテーブルで粗度係数を割当
            </li>
            <li>
              <strong className="text-foreground">ローカルで水理モデルを実行</strong>
              — LISFLOOD-FP or HEC-RASに地形・粗度・境界条件を入力してシミュレーション
            </li>
            <li>
              <strong className="text-foreground">SAR浸水範囲でキャリブレーション</strong>
              — F統計量を最大化するManning&apos;s nの組合せを探索
            </li>
            <li>
              <strong className="text-foreground">（発展）データ同化</strong>
              — 新しいSAR画像の取得時にEnKFで水理モデルの状態を更新
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
              SAR浸水抽出は<strong className="text-foreground">植生下・都市域</strong>で精度が低下する。
              Cバンド（Sentinel-1）は密生植生を透過できず、都市部では建物のダブルバウンスが
              浸水シグナルと混同される
            </li>
            <li>
              水位推定はDEMの鉛直精度に直結する。
              LiDAR DEMがあれば±50cm程度だが、SRTM/GLO-30では1〜2mの誤差が残る
            </li>
            <li>
              Sentinel-1の再訪周期（6〜12日）では、
              <strong className="text-foreground">フラッシュフラッド</strong>の捕捉が困難。
              洪水のピークと衛星通過のタイミングが一致しない可能性が高い
            </li>
            <li>
              データ同化にはアンサンブルランが必要であり、
              計算コストが高い。LISFLOOD-FPの簡略化方程式でも数百〜数千ラン × イベント期間の計算が必要
            </li>
            <li>
              SAR画像の幾何補正・放射補正の品質がモデル連携の精度に直接影響するが、
              自動処理パイプラインでの品質保証は未成熟
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
              Grimaldi, S., Li, Y., Pauwels, V.R.N., &amp; Walker, J.P. (2016).
              Remote Sensing-Derived Water Extent and Level to Constrain Hydraulic
              Flood Forecasting Models. <em>Surv. Geophys.</em>, 37, 977-1034.
              DOI: 10.1007/s10712-016-9378-y
            </li>
            <li>
              Schumann, G., Bates, P.D., Horritt, M.S., Matgen, P., &amp; Pappenberger, F. (2009).
              Progress in integration of remote sensing-derived flood extent and stage data
              and hydraulic models. <em>Rev. Geophys.</em>, 47, RG4001.
              DOI: 10.1029/2008RG000274
            </li>
            <li>
              Hostache, R. et al. (2018). Near-Real-Time Assimilation of SAR-Derived Flood Maps
              for Improving Flood Forecasts. <em>Water Resour. Res.</em>, 54, 5516-5535.
              DOI: 10.1029/2017WR022205
            </li>
            <li>
              Hostache, R. et al. (2021). Assimilation of probabilistic flood maps from SAR data
              into a coupled hydrologic-hydraulic forecasting model.
              <em> Hydrol. Earth Syst. Sci.</em>, 25, 4081-4097.
              DOI: 10.5194/hess-25-4081-2021
            </li>
            <li>
              Hostache, R., Matgen, P., &amp; Wagner, W. (2009). Water Level Estimation and Reduction
              of Hydraulic Model Calibration Uncertainties Using Satellite SAR Images of Floods.
              <em> IEEE Trans. Geosci. Remote Sens.</em>, 47, 431-441.
              DOI: 10.1109/TGRS.2008.2008718
            </li>
            <li>
              Di Baldassarre, G., Schumann, G., &amp; Bates, P.D. (2009). A technique for the calibration
              of hydraulic models using uncertain satellite observations of flood extent.
              <em> J. Hydrol.</em>, 367, 276-282.
              DOI: 10.1016/j.jhydrol.2009.01.020
            </li>
            <li>
              Dan, T. et al. (2025). DeepSAR Flood Mapper: global flood mapping on Google Earth Engine
              cloud platform using MLP deep learning model with Sentinel-1 SAR imagery and HAND
              topographic data. <em>GISci. Remote Sens.</em>, 63(1).
              DOI: 10.1080/15481603.2025.2612306
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
