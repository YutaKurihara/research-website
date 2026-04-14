import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const IMG = process.env.__NEXT_ROUTER_BASEPATH || "";
const img = (name: string) => `${IMG}/images/blog-fwdet/${name}`;

export const metadata: Metadata = {
  title: "SAR衛星画像による洪水範囲の抽出手法",
};

export default function SarFloodMappingBlogPost() {
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
            2025-04-12
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            SAR衛星画像による洪水範囲の抽出手法
          </h1>
          <p className="mt-3 text-xs text-muted">
            Cian, F., Marconcini, M., & Ceccato, P. (2018) の NDFI手法を中心に整理
          </p>
          <a href="https://doi.org/10.1016/j.rse.2018.03.006" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.1016/j.rse.2018.03.006
          </a>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            SAR衛星による洪水検出の原理
          </h2>
          <p className="text-muted">
            SAR（合成開口レーダー）は、衛星からマイクロ波を地表に照射し、
            その反射（後方散乱）を受信して画像化するセンサーです。
            光学衛星と異なり、<strong className="text-foreground">雲を透過し、夜間でも観測可能</strong>なため、
            台風やモンスーンに伴う洪水の観測に適しています。
          </p>
          <p className="mt-3 text-muted">
            洪水検出の基本原理は、水面がマイクロ波を
            <strong className="text-foreground">鏡面反射</strong>するという性質に基づいています。
            陸地ではマイクロ波が散乱してセンサーに戻りますが、
            水面ではほぼ全てのマイクロ波が反射方向に逃げるため、
            後方散乱が著しく低下します。この変化を災害前後の画像で比較することで、
            浸水域を特定します。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            従来手法の課題
          </h2>
          <p className="text-muted">
            SAR画像による洪水検出の従来手法には、主に以下の課題がありました。
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">閾値設定の主観性</strong>
              — 洪水前後の後方散乱の変化をどの値で「浸水」と判定するかが、
              解析者の経験に依存していた。
            </li>
            <li>
              <strong className="text-foreground">恒常的水域との区別</strong>
              — 河川や湖沼などの恒常的水域と、洪水による一時的浸水域を区別するのが困難だった。
            </li>
            <li>
              <strong className="text-foreground">単一画像ペアへの依存</strong>
              — 災害前後の2枚の画像だけで判定するため、
              季節変動やノイズの影響を受けやすかった。
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            NDFI（正規化差分洪水指数）
          </h2>
          <p className="mb-4 text-muted">
            Cian et al. (2018) は、これらの課題を解決するために
            <strong className="text-foreground">NDFI（Normalized Difference Flood Index）</strong>
            を提案しました。NDFIはEO（地球観測）ビッグデータを活用し、
            大量の参照画像と洪水時画像を統計的に比較する手法です。
          </p>

          <h3 className="mb-2 font-medium text-foreground">NDFIの定義</h3>
          <div className="my-4 rounded-md border border-border bg-accent-light p-4">
            <p className="font-mono text-xs text-muted">
              NDFI = ( |mean(σ⁰<sub>BF</sub>)| − |min(σ⁰<sub>AF</sub>)| ) / ( |mean(σ⁰<sub>BF</sub>)| + |min(σ⁰<sub>AF</sub>)| )
            </p>
            <p className="mt-2 text-xs text-muted">
              σ⁰<sub>BF</sub> : 洪水前の後方散乱係数（複数画像の平均）<br />
              σ⁰<sub>AF</sub> : 洪水後の後方散乱係数（最小値を使用）
            </p>
          </div>

          <p className="text-muted">
            NDFIの値は−1から+1の範囲を取り、
            洪水により後方散乱が低下した領域では<strong className="text-foreground">正の値</strong>を示します。
            値が大きいほど、通常時と比較して後方散乱の低下が顕著であること、
            すなわち浸水の可能性が高いことを意味します。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">多時系列統計の活用</h3>
          <p className="text-muted">
            NDFIの特徴は、洪水前の画像として<strong className="text-foreground">単一画像ではなく、
            長期間にわたる多数の画像の統計量（平均値）</strong>を使用する点です。
            これにより、季節変動や一時的なノイズの影響が平滑化され、
            より安定した基準値が得られます。
            また、洪水後の画像には最小値を使用し、
            最も後方散乱が低下した（最も浸水が深い）状態を捉えます。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">閾値の決定</h3>
          <div className="my-4 rounded-md border border-border bg-accent-light p-4">
            <p className="font-mono text-xs text-muted">
              Threshold = mean(NDFI) − k<sub>f</sub> × stdev(NDFI)
            </p>
            <p className="mt-2 text-xs text-muted">
              k<sub>f</sub> : 閾値パラメータ（推奨値: 1.0）
            </p>
          </div>
          <p className="text-muted">
            閾値はNDFI画像全体の平均値と標準偏差から自動的に算出されます。
            k<sub>f</sub> = 1.0 が高い精度を示すことが検証により確認されています（Hamidi et al., 2023）。
            この<strong className="text-foreground">統計的な自動閾値設定</strong>により、
            従来の主観的な閾値設定の問題を解消しています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            後処理フィルタリング
          </h2>
          <p className="mb-4 text-muted">
            NDFIによる初期検出結果には誤検出が含まれるため、
            以下のフィルタリングを適用して精度を向上させます。
          </p>

          <div className="space-y-4">
            <Step num={1} title="スペックルノイズ除去">
              SAR画像に固有のスペックルノイズを低減するため、
              空間平均フィルタ（focal mean）を適用します。
              一般的に半径50mの円形カーネルが使用されます。
            </Step>

            <Step num={2} title="恒常的水域の除外">
              JRC Global Surface Water データセットを用い、
              年間10ヶ月以上水域として観測される領域を恒常的水域として除外します。
              これにより、河川や湖沼を洪水と誤検出することを防ぎます。
            </Step>

            <Step num={3} title="傾斜地の除外">
              DEMから算出した傾斜が5度以上の領域を除外します。
              急斜面では、SAR画像のレイオーバーやフォアショートニング効果により
              後方散乱が異常な値を示すことがあるためです。
            </Step>

            <Step num={4} title="連結ピクセルフィルタ">
              孤立したピクセル（周囲に接続する浸水ピクセルが8未満）を除去します。
              これにより、ノイズによる点状の誤検出を排除し、
              まとまった浸水域のみを抽出します。
            </Step>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            使用データ
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">データ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">解像度</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">用途</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Sentinel-1 GRD", "10m", "SAR後方散乱画像（C-band, VV/VH偏波）"],
                  ["JRC Global Surface Water", "30m", "恒常的水域マスク（季節性データ）"],
                  ["HydroSHEDS DEM", "90m", "傾斜フィルタ（5度以上を除外）"],
                  ["ESA WorldCover", "10m", "土地利用（農地・都市の被災面積算出）"],
                  ["WorldPop", "100m", "人口データ（被災人口推定）"],
                ].map(([d, r, u], i) => (
                  <tr key={d} className={i % 2 === 0 ? "bg-accent-light/50" : ""}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{d}</td>
                    <td className="border border-border px-3 py-2 text-muted">{r}</td>
                    <td className="border border-border px-3 py-2 text-muted">{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            検証結果
          </h2>
          <p className="mb-4 text-muted">
            Cian et al. (2018) は、3つの洪水イベントでNDFIの精度を検証しました。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">ケース</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">年</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">SAR</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">一致率</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">ヴェネト州（イタリア）</td>
                  <td className="border border-border px-3 py-2 text-muted">2010</td>
                  <td className="border border-border px-3 py-2 text-muted">COSMO-SkyMed</td>
                  <td className="border border-border px-3 py-2 text-muted">96.5%</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">マラウイ</td>
                  <td className="border border-border px-3 py-2 text-muted">2015</td>
                  <td className="border border-border px-3 py-2 text-muted">Sentinel-1</td>
                  <td className="border border-border px-3 py-2 text-muted">96.7%</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">ウガンダ</td>
                  <td className="border border-border px-3 py-2 text-muted">2015</td>
                  <td className="border border-border px-3 py-2 text-muted">Sentinel-1</td>
                  <td className="border border-border px-3 py-2 text-muted">96%以上</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            緊急管理機関が作成した洪水マップとの比較で、
            いずれのケースでも<strong className="text-foreground">96%以上の一致率</strong>を達成しています。
            NDFIは特にSentinel-1データとの相性が良く、
            Copernicusプログラムによる継続的なデータ供給と組み合わせることで、
            全球規模での迅速な洪水マッピングが可能になります。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            NDFIの利点
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">自動閾値設定</strong>
              — 統計量ベースで客観的に閾値を決定。解析者の主観に依存しない。
            </li>
            <li>
              <strong className="text-foreground">多時系列統計の活用</strong>
              — 長期間の参照画像を使用することで、季節変動やノイズの影響を低減。
            </li>
            <li>
              <strong className="text-foreground">2種類の浸水分類</strong>
              — 完全に水で覆われた領域だけでなく、
              水と植生が混在する領域（flooded vegetation）も検出可能。
            </li>
            <li>
              <strong className="text-foreground">センサー非依存</strong>
              — Sentinel-1に最適化されているが、COSMO-SkyMed等の他のSARセンサーにも適用可能。
            </li>
            <li>
              <strong className="text-foreground">迅速性</strong>
              — Google Earth Engine上での実装により、
              衛星データの取得から数分で洪水マップを生成可能。
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            限界と注意点
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">都市部での検出困難</strong>
              — 建物による二重散乱（double bounce）が水面の鏡面反射効果を打ち消し、
              都市部の浸水を見逃す可能性がある。
            </li>
            <li>
              <strong className="text-foreground">密な植生下の検出限界</strong>
              — 熱帯林など密な植生の下の浸水は、
              マイクロ波が植生冠に遮られるため検出が困難。
            </li>
            <li>
              <strong className="text-foreground">撮影タイミングの制約</strong>
              — Sentinel-1の再訪周期（6〜12日）のため、
              洪水ピーク時の画像が得られないことがある。
              最大浸水域ではなく、撮影時点の浸水域が検出される。
            </li>
            <li>
              <strong className="text-foreground">衛星軌道による偏り</strong>
              — Ascending/Descendingの撮影方向の違いにより、
              山間部ではレイオーバーやシャドウの影響で誤検出が生じうる。
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            実務への応用
          </h2>
          <p className="text-muted">
            NDFI手法は、UN-SPIDERの推奨プラクティスとして採用され、
            Google Earth Engine上でオープンソースのコードが公開されています。
            災害対応の現場では、以下のワークフローで活用されています。
          </p>
          <div className="mt-4 space-y-3">
            <Step num={1} title="SAR画像の取得">
              Sentinel-1 GRD画像を災害前後でそれぞれ取得。
              同一軌道番号（Relative Orbit Number）の画像ペアを選定。
            </Step>
            <Step num={2} title="NDFIの計算">
              洪水前の複数画像の平均と、洪水後画像の最小値からNDFIを算出。
            </Step>
            <Step num={3} title="浸水域の抽出">
              自動閾値で浸水域を二値化し、後処理フィルタを適用。
            </Step>
            <Step num={4} title="被害評価との連携">
              浸水範囲にFwDETで浸水深を付加し、
              被害曲線と組み合わせて直接被害額を算定。
            </Step>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Cian, F., Marconcini, M., & Ceccato, P. (2018).
              Normalized Difference Flood Index for rapid flood mapping: Taking advantage of EO big data.
              <em>Remote Sensing of Environment</em>, 209, 712-730.
              DOI: 10.1016/j.rse.2018.03.006
            </li>
            <li>
              Hamidi, E., Peter, B.G., Munoz, D.F. et al. (2023).
              Fast Flood Extent Monitoring with SAR Change Detection Using Google Earth Engine.
              <em>IEEE Transactions on Geoscience and Remote Sensing</em>.
              DOI: 10.1109/TGRS.2023.3240097
            </li>
            <li>
              Xue, F. et al. (2022).
              Flood Monitoring by Integrating Normalized Difference Flood Index and Probability Distribution of Water Bodies.
              <em>IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing</em>, 15, 4170-4179.
              DOI: 10.1109/JSTARS.2022.3176388
            </li>
            <li>
              UN-SPIDER. Recommended Practice: Flood Mapping and Damage Assessment Using Sentinel-1 SAR Data in Google Earth Engine.
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}

function Step({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs text-background">
        {num}
      </span>
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="mt-1 text-muted">{children}</p>
      </div>
    </div>
  );
}
