import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FwDET - 衛星画像から浸水深を推定するツールの解説",
};

export default function FwDETBlogPost() {
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
            FwDET — 衛星画像から浸水深を推定するツールの解説
          </h1>
          <p className="mt-3 text-xs text-muted">
            Cohen, S. et al. (2018, 2019) / Peter, B.G. et al. (2022) の論文をもとに整理
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            FwDETとは
          </h2>
          <p className="text-muted">
            FwDET（Floodwater Depth Estimation Tool）は、衛星画像等から得られた
            <strong className="text-foreground">浸水範囲マップ</strong>と
            <strong className="text-foreground">数値標高モデル（DEM）</strong>を組み合わせて、
            浸水域内の各地点の水深を推定するツールです。
            アラバマ大学のSagy Cohen教授らが2018年に初版（v1.0）を開発し、
            2019年にv2.0、2022年にはGoogle Earth Engine版（FwDET-GEE）が公開されました。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            なぜ浸水深が必要なのか
          </h2>
          <p className="text-muted">
            衛星画像（特にSAR画像）から浸水範囲を検出する技術は確立されていますが、
            それだけでは「どこが浸水したか」しかわかりません。
            被害額の算定や避難計画には「どれだけ深く浸水したか」の情報が不可欠です。
            しかし、詳細な水理モデル（HEC-RAS等）による浸水深シミュレーションには
            膨大な入力データと計算時間が必要で、災害直後の迅速な対応には間に合いません。
          </p>
          <p className="mt-3 text-muted">
            FwDETは、浸水範囲マップとDEMさえあれば
            <strong className="text-foreground">数分で浸水深を推定</strong>できるため、
            緊急対応のファーストオーダーツールとして位置づけられています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            アルゴリズム（v2.0）
          </h2>
          <p className="mb-4 text-muted">
            FwDETの基本原理は、浸水域の境界における水面標高を基準として、
            浸水域内の各ピクセルの地盤標高との差分から水深を計算することです。
          </p>

          <div className="space-y-4">
            <Step num={1} title="浸水域の境界を特定">
              浸水範囲ポリゴンをラインに変換し、DEMのグリッドに合わせてラスタ化します。
              この境界ピクセルが水深計算の基準点となります。
            </Step>

            <Step num={2} title="境界の標高を取得">
              各境界ピクセルのDEM標高値を抽出します。
              この標高値が、その地点での水面の高さを表します。
            </Step>

            <Step num={3} title="最寄りの境界標高を浸水域全体に割り当て">
              浸水域内の各ピクセルに対して、最も近い境界ピクセルの標高値を割り当てます。
              v2.0ではArcGISのCost Allocationツール（GEE版ではreduceNeighborhood）を使用し、
              v1.0のFocal Statistics反復処理と比べて<strong className="text-foreground">15倍の高速化</strong>を達成しました。
            </Step>

            <Step num={4} title="コストラスタによる制御">
              恒常的な水域（河川・湖沼）を横切って標高値が伝播しないよう、
              水域ピクセルに高いコスト値（1000）を、陸地ピクセルに低いコスト値（1）を設定します。
              これにより、川を挟んだ誤った水深計算を防止します。
            </Step>

            <Step num={5} title="沿岸域の補正（v2.0で追加）">
              沿岸部では、標高がゼロ以下の境界ピクセル（海面）を除外します。
              v1.0では海岸線が基準となり浸水深が過小評価される問題がありましたが、
              v2.0ではこれを解決しました。
            </Step>

            <Step num={6} title="水深の計算">
              各浸水ピクセルの水深を以下の式で計算します。
            </Step>
          </div>

          <div className="mt-4 rounded-md border border-border bg-accent-light p-4">
            <p className="font-mono text-xs text-muted">
              水深 = 割り当てられた水面標高 − 地盤標高（DEM値）
            </p>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            検証結果
          </h2>
          <p className="mb-4 text-muted">
            FwDET v2.0は、水理モデルのシミュレーション結果との比較で検証されています。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">ケース</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">タイプ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">DEM解像度</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">平均誤差</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">Portsmouth-Norfolk（ハリケーンIrene, 2011）</td>
                  <td className="border border-border px-3 py-2 text-muted">沿岸</td>
                  <td className="border border-border px-3 py-2 text-muted">1m LiDAR</td>
                  <td className="border border-border px-3 py-2 text-muted">0.18m</td>
                </tr>
                <tr className="bg-accent-light">
                  <td className="border border-border px-3 py-2 text-muted">Brazos River（テキサス洪水, 2016）</td>
                  <td className="border border-border px-3 py-2 text-muted">河川</td>
                  <td className="border border-border px-3 py-2 text-muted">10m NED</td>
                  <td className="border border-border px-3 py-2 text-muted">0.31m</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            沿岸洪水で平均誤差0.18m、河川洪水で0.31mという結果は、
            緊急対応の初期評価としては十分な精度です。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            実際の災害への適用事例
          </h2>
          <div className="space-y-3 text-muted">
            <p>
              <strong className="text-foreground">ハリケーンIrene（2011年、米国中部大西洋岸）</strong>
              — Landsat 5画像（30m解像度）を使用。上陸5日後の画像から平均浸水深0.64mを推定。
            </p>
            <p>
              <strong className="text-foreground">ハリケーンFlorence（2018年、カロライナ）</strong>
              — AMSR2/GMIマイクロ波衛星データ（90m解像度）を使用。平均浸水深0.92m。
              主要河川の氾濫原で深い浸水、広域では浅〜中程度の浸水を検出。
            </p>
            <p>
              <strong className="text-foreground">スリランカ洪水（2018年5月）</strong>
              — Sentinel-1b SAR画像（10m解像度）を使用。断片的な浸水域への適用事例。
              ALOS（30m）、HydroSHEDS（90m）、MERIT（90m）の3種のDEMを比較検証。
            </p>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            GEE版（FwDET-GEE）
          </h2>
          <p className="text-muted">
            Peter et al. (2022) により、FwDETがGoogle Earth Engine上に実装されました。
            クラウド上のDEMデータ（Copernicus GLO-30等）を直接利用でき、
            ローカル環境でのデータダウンロードやGISソフトウェアが不要になりました。
            衛星画像から浸水範囲を検出した直後に、同じGEE環境で浸水深推定まで完結できるため、
            災害対応の時間を大幅に短縮できます。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            限界と注意点
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">ユークリッド距離ベース</strong>
              — 最寄りの境界ピクセルを直線距離で決定するため、
              背水効果や複雑な流路がある場合に誤差が生じる。
            </li>
            <li>
              <strong className="text-foreground">都市部の課題</strong>
              — 高解像度DEMでは建物の屋根が地表面として扱われ、
              浸水域内に非浸水ピクセルが生じ、境界の誤認識につながる。
            </li>
            <li>
              <strong className="text-foreground">DEM解像度への依存</strong>
              — 特に沿岸部では地形勾配が小さいため、高解像度DEMが精度に大きく影響する。
            </li>
            <li>
              <strong className="text-foreground">撮影タイミング</strong>
              — 衛星画像が洪水ピークから時間的にずれると、最大浸水深を捕捉できない。
            </li>
            <li>
              <strong className="text-foreground">恒常的水域</strong>
              — DEMは河川・湖沼の水面標高を記録しており、河床標高ではないため、
              これらの領域では水深を過大評価する傾向がある。
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
              Cohen, S., Brakenridge, G.R., Kettner, A. et al. (2018).
              Estimating Floodwater Depths from Flood Inundation Maps and Topography.
              <em>JAWRA</em>, 54(4), 847-858.
              DOI: 10.1111/1752-1688.12609
            </li>
            <li>
              Cohen, S., Raney, A., Munasinghe, D. et al. (2019).
              The Floodwater Depth Estimation Tool (FwDET v2.0) for improved remote sensing analysis of coastal flooding.
              <em>Natural Hazards and Earth System Sciences</em>, 19, 2053-2065.
              DOI: 10.5194/nhess-19-2053-2019
            </li>
            <li>
              Peter, B.G., Cohen, S., Lucey, R. et al. (2022).
              Google Earth Engine Implementation of the Floodwater Depth Estimation Tool (FwDET-GEE).
              <em>IEEE Geoscience and Remote Sensing Letters</em>, 19.
              DOI: 10.1109/LGRS.2020.3031190
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
