import Image from "next/image";

const IMG = process.env.__NEXT_ROUTER_BASEPATH || "";
const basePath = `${IMG}/images/flood-direct-damage`;

export default function FloodDirectDamageContent() {
  return (
    <article className="space-y-8 text-sm leading-relaxed">
      <section>
        <h2 className="mb-3 text-lg font-bold">この研究が解決する課題</h2>
        <p className="mb-3 text-muted">
          災害が発生すると、政府や国際機関は被害状況を把握し、復興予算を各自治体に配分する必要があります。
          しかし、従来の被害調査（PDNA/DaLA）は現地でのインタビューに基づくため、
          <strong className="text-foreground">完了まで6週間〜3か月</strong>かかります。
          この遅れが復興の開始を遅らせ、予算配分の不均衡を生みます。
        </p>
        <p className="text-muted">
          本研究では、<strong className="text-foreground">
          衛星画像とクラウド処理（Google Earth Engine）を組み合わせることで、
          災害発生からわずか2日で広域の被害額を推定</strong>できる手法を提案しました。
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">全体の流れ</h2>
        <p className="mb-4 text-muted">
          本手法は大きく2つのステップで構成されます。左側の「Flood Mapping」で浸水域と浸水深を作成し、
          右側の「Damage Analysis」で各セクターの被害額を算定します。
        </p>
        <figure className="my-4">
          <Image
            src={`${basePath}/Fig.1_Diagram.png`}
            alt="研究手法の全体フロー図"
            width={1200}
            height={400}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Fig. 1: 洪水直接被害評価の全体フロー。左：浸水マッピング、右：被害分析。
          </figcaption>
        </figure>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">対象地域と災害</h2>
        <p className="mb-4 text-muted">
          フィリピン北部ルソン島の<strong className="text-foreground">カガヤン・バレー地域</strong>（Region II）が対象です。
          カガヤン川はフィリピン最長（505 km）・最大流域面積（25,649 km²）の河川で、
          モンスーン期（7月〜12月）に頻繁に洪水が発生します。
        </p>
        <figure className="my-4">
          <Image
            src={`${basePath}/Fig.2_StudyArea.png`}
            alt="対象地域の地図"
            width={800}
            height={800}
            className="mx-auto max-w-md rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Fig. 2: 対象地域であるカガヤン・バレー地域の位置図。
          </figcaption>
        </figure>
        <p className="text-muted">
          <strong className="text-foreground">台風Ulysses</strong>（国際名Vamco）は2020年11月にこの地域を襲い、
          農業被害73億ペソ、インフラ被害129億ペソという甚大な被害をもたらしました。
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">Step 1: 浸水マップの作成</h2>

        <h3 className="mb-2 mt-5 font-semibold">SAR画像による浸水域の検出</h3>
        <p className="mb-3 text-muted">
          浸水範囲の検出には<strong className="text-foreground">Sentinel-1衛星のSAR（合成開口レーダー）</strong>画像を使用します。
          SARはマイクロ波を地表に照射してその反射を受信するセンサーで、
          雲を透過して地表を観測できるため、台風通過後の曇天でも浸水域を検出できます。
        </p>
        <p className="mb-3 text-muted">
          洪水前（2020年10月8日）と洪水後（11月13日）の2枚のSAR画像を比較し、
          <strong className="text-foreground">NDFI（正規化差分洪水指数）</strong>で浸水域を自動判定します。
          水面はSAR信号を鏡面反射するため後方散乱が弱くなるという性質を利用しています。
        </p>
        <ul className="mb-4 ml-4 list-disc space-y-1 text-muted">
          <li>50mカーネルの平均フィルタでスペックルノイズを除去</li>
          <li>NDFIにより洪水前後のSAR信号変化を定量化</li>
          <li>4ピクセル以上の連結領域のみを浸水域として認定</li>
          <li>傾斜5度以上の地域を除外（山地の誤検出を防止）</li>
          <li>最終的に解像度<strong className="text-foreground">10m</strong>の浸水マップを生成</li>
        </ul>

        <h3 className="mb-2 mt-5 font-semibold">FwDET-GEEによる浸水深の推定</h3>
        <p className="mb-3 text-muted">
          SAR画像から得られる浸水マップは「どこが浸水したか」を示しますが、「どれだけ深く浸水したか」は分かりません。
          浸水深は被害額の算定に不可欠なため、<strong className="text-foreground">FwDET-GEE
          （Floodwater Depth Estimation Tool）</strong>を使用して推定します。
        </p>
        <p className="mb-3 text-muted">
          FwDETの仕組みは以下のとおりです：
        </p>
        <ol className="mb-4 ml-4 list-decimal space-y-2 text-muted">
          <li>
            <strong className="text-foreground">浸水域の境界を基準（水深 = 0m）</strong>とする。
            浸水域の端は陸地と水面の境界なので、ここが水深ゼロの基準線となる。
          </li>
          <li>
            <strong className="text-foreground">DEM（数値標高モデル）</strong>のデータを使い、
            浸水域内の各セルについて、周囲8セルのうち最も低い水深を参照して水深を決定する。
            Copernicus DEM GLO-30（相対垂直精度 &lt; 2m）を使用。
          </li>
          <li>
            浸水域の境界から内側に向かって反復的に水深を計算することで、
            <strong className="text-foreground">浸水域全体の水深分布</strong>を推定する。
          </li>
          <li>
            3×3ピクセルのローパスフィルタで異常値を平滑化し、最終的な浸水深マップを生成する。
          </li>
        </ol>

        <h3 className="mb-2 mt-5 font-semibold">浸水マッピングの結果</h3>
        <figure className="my-4">
          <Image
            src={`${basePath}/Fig.3_FloodMap.png`}
            alt="浸水深マップ"
            width={1200}
            height={600}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Fig. 3: 2020年11月13日時点の浸水深マップ。(b) 本手法（衛星画像）、(c) RRIモデルによるシミュレーション結果。
          </figcaption>
        </figure>

        <p className="mb-3 text-muted">
          浸水面積は<strong className="text-foreground">2,033 km²</strong>（地域全体の約8%）。
          そのうち43%が水深0.5m以上で、作物やインフラに重大な被害をもたらすレベルでした。
        </p>

        <figure className="my-4">
          <Image
            src={`${basePath}/Fig.4_FloodDepth.png`}
            alt="浸水深別の面積分布"
            width={600}
            height={400}
            className="mx-auto max-w-sm rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Fig. 4: 浸水深別の面積分布。赤線は平均浸水深1.126mを示す。
          </figcaption>
        </figure>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">Step 2: 被害額の算定</h2>

        <h3 className="mb-2 mt-5 font-semibold">Random Forestによる土地利用マップの作成</h3>
        <p className="mb-3 text-muted">
          フィリピンには高解像度の農作物マップが存在しないため、機械学習で独自の土地利用マップを作成しました。
          使用したアルゴリズムは<strong className="text-foreground">Random Forest（ランダムフォレスト）</strong>です。
        </p>

        <div className="my-4 rounded-lg border border-border bg-card-bg p-5">
          <h4 className="mb-2 text-sm font-semibold">Random Forestとは？</h4>
          <p className="mb-3 text-muted">
            Random Forestは、多数の決定木（Decision Tree）を組み合わせた<strong className="text-foreground">アンサンブル学習</strong>手法です。
            個々の決定木はデータのランダムなサブセットで学習し、最終的な分類は全ての木の「多数決」で決定します。
          </p>
          <ul className="ml-4 list-disc space-y-1 text-muted">
            <li>単一の決定木より<strong className="text-foreground">過学習しにくい</strong>（頑健性が高い）</li>
            <li>各特徴量の<strong className="text-foreground">重要度を定量化</strong>できる</li>
            <li>ノイズに対して比較的強い</li>
            <li>本研究では<strong className="text-foreground">500本の決定木</strong>を使用</li>
          </ul>
        </div>

        <p className="mb-3 text-muted">
          <strong className="text-foreground">入力データ（特徴量）</strong>として、
          Sentinel-1のSARデータ（VV/VH偏波）、Landsat-8の光学バンド（B1〜B11）、
          および植生・水域指標（NDVI, EVI, NDWI, MNDWI）を使用しました。
          さらに、MERIT Hydroの地形データ（標高・傾斜・集水面積）と
          NAMRIAの公式土地被覆マップも入力に加えています。
        </p>

        <p className="mb-3 text-muted">
          <strong className="text-foreground">教師データ</strong>は、
          Google Street Viewで各土地利用カテゴリの位置を確認し、
          カテゴリごとに80サンプル（学習用50 + 検証用30）を収集しました。
        </p>

        <figure className="my-4">
          <Image
            src={`${basePath}/Fig.5_Samples.png`}
            alt="教師データの収集例"
            width={1200}
            height={600}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Fig. 5: (A)(B) Google Street Viewで確認した水田・トウモロコシ畑の例。
            (C)(D)(E) 衛星画像で確認した裸地・森林・都市域。(F) 学習・検証サンプルの分布。
          </figcaption>
        </figure>

        <p className="mb-3 text-muted">
          6分類（水田・トウモロコシ畑・森林・裸地・都市・水域）のLULCマップを解像度30mで作成。
          <strong className="text-foreground">全体精度93%</strong>、
          カッパ係数0.92という高い精度を達成しました。
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <figure>
            <Image
              src={`${basePath}/Fig.6_LULCMap.png`}
              alt="土地利用マップ"
              width={400}
              height={600}
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="mt-2 text-xs text-muted">
              Fig. 6: Random Forestで作成したLULCマップ。
            </figcaption>
          </figure>
          <figure>
            <Image
              src={`${basePath}/Fig.7_LULCerror.png`}
              alt="分類精度評価"
              width={400}
              height={600}
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="mt-2 text-xs text-muted">
              Fig. 7: 各土地利用タイプの分類精度。
            </figcaption>
          </figure>
        </div>

        <h3 className="mb-2 mt-6 font-semibold">被害曲線（Damage Curve）による被害額の算定</h3>
        <p className="mb-3 text-muted">
          浸水深マップと土地利用マップを重ね合わせ、各セクターの被害額を
          「<strong className="text-foreground">浸水深 × 被害曲線（Damage Curve） × 単価</strong>」で計算します。
          被害曲線は浸水深に対する被害率を表す経験的な関数で、セクターごとに異なります。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">対象</th>
                <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">データソース</th>
                <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">被害曲線</th>
                <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">単価</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">住宅</td>
                <td className="border border-border px-3 py-2 text-muted">Open Buildings V3</td>
                <td className="border border-border px-3 py-2 text-muted">GMMA-RAP (2014), シグモイド関数</td>
                <td className="border border-border px-3 py-2 text-muted">10,300 PhP/m²</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">水田</td>
                <td className="border border-border px-3 py-2 text-muted">作成したLULCマップ</td>
                <td className="border border-border px-3 py-2 text-muted">Shrestha et al. (2016)</td>
                <td className="border border-border px-3 py-2 text-muted">69.6 PhP/ha</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">トウモロコシ</td>
                <td className="border border-border px-3 py-2 text-muted">作成したLULCマップ</td>
                <td className="border border-border px-3 py-2 text-muted">Tariq et al. (2021)</td>
                <td className="border border-border px-3 py-2 text-muted">45.9 PhP/ha</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">道路</td>
                <td className="border border-border px-3 py-2 text-muted">DPWH + OpenStreetMap</td>
                <td className="border border-border px-3 py-2 text-muted">独自作成（水量vs被害の回帰）</td>
                <td className="border border-border px-3 py-2 text-muted">-</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">病院・学校</td>
                <td className="border border-border px-3 py-2 text-muted">OpenStreetMap</td>
                <td className="border border-border px-3 py-2 text-muted">独自作成（水量vs被害の回帰）</td>
                <td className="border border-border px-3 py-2 text-muted">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="my-4">
          <Image
            src={`${basePath}/Fig.8_RoadsDamageCurve.png`}
            alt="道路の被害曲線"
            width={1200}
            height={500}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Fig. 8: (A) 国道の被害額と水量の関係、(B) 市町村道の被害額と水量の関係。線形回帰により被害関数を作成。
          </figcaption>
        </figure>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">主な結果</h2>
        <figure className="my-4">
          <Image
            src={`${basePath}/Fig.10_FloodDamageResults.png`}
            alt="被害評価結果"
            width={1200}
            height={600}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Fig. 10: (a) 土地利用タイプ別の浸水面積（円の大きさは浸水面積を表す）。
            (b) 各セクターの被害額（円の大きさは被害額を表す）。
          </figcaption>
        </figure>

        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">セクター</th>
                <th className="border border-border bg-accent-light px-3 py-2 text-right font-semibold">衛星解析（百万PhP）</th>
                <th className="border border-border bg-accent-light px-3 py-2 text-right font-semibold">現地報告（百万PhP）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">住宅</td>
                <td className="border border-border px-3 py-2 text-right text-muted">2,694</td>
                <td className="border border-border px-3 py-2 text-right text-muted">-</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">水田</td>
                <td className="border border-border px-3 py-2 text-right text-muted">844</td>
                <td className="border border-border px-3 py-2 text-right text-muted">981</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">トウモロコシ</td>
                <td className="border border-border px-3 py-2 text-right text-muted">1,160</td>
                <td className="border border-border px-3 py-2 text-right text-muted">289</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">道路</td>
                <td className="border border-border px-3 py-2 text-right text-muted">1,598</td>
                <td className="border border-border px-3 py-2 text-right text-muted">2,464</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">病院</td>
                <td className="border border-border px-3 py-2 text-right text-muted">21.7</td>
                <td className="border border-border px-3 py-2 text-right text-muted">26.2</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 text-muted">学校</td>
                <td className="border border-border px-3 py-2 text-right text-muted">725</td>
                <td className="border border-border px-3 py-2 text-right text-muted">644</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted">
          水田・病院については良好な一致が見られました。トウモロコシは過大評価の傾向があり、
          被害曲線の精度向上が今後の課題です。Quirino州の道路被害は過小評価されましたが、
          これは山岳地帯の土砂災害による被害が本手法では捕捉できないためです。
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">GEEによる迅速な分析</h2>
        <figure className="my-4">
          <Image
            src={`${basePath}/Fig.11_GEEInterface.jpg`}
            alt="Google Earth Engineのインターフェース"
            width={1200}
            height={600}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Fig. 11: Google Earth Engineのインターフェース。左のグラフは土地利用別の浸水面積、
            円グラフは各セクターの被害額を示す。
          </figcaption>
        </figure>

        <p className="mb-3 text-muted">
          Sentinel-1衛星はカガヤン州全域を2020年11月13日に撮影し、わずか2日後の11月15日には
          GEE上で利用可能になりました。一方、従来の現地調査（SitRep）は結果の取りまとめまでに1か月を要しました。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold"></th>
                <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">従来手法（PDNA/DaLA）</th>
                <th className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">本手法</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 font-medium">所要時間</td>
                <td className="border border-border px-3 py-2 text-muted">6週間〜3か月</td>
                <td className="border border-border px-3 py-2 text-muted"><strong className="text-foreground">2日</strong></td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-medium">カバー範囲</td>
                <td className="border border-border px-3 py-2 text-muted">インタビュー対象のみ</td>
                <td className="border border-border px-3 py-2 text-muted"><strong className="text-foreground">地域全体</strong></td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-medium">必要スキル</td>
                <td className="border border-border px-3 py-2 text-muted">多セクターの専門家</td>
                <td className="border border-border px-3 py-2 text-muted">GEEの基本操作</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-medium">コスト</td>
                <td className="border border-border px-3 py-2 text-muted">高い（人件費・移動費）</td>
                <td className="border border-border px-3 py-2 text-muted"><strong className="text-foreground">低い（クラウド処理）</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">被害額と復興予算の関係</h2>
        <figure className="my-4">
          <Image
            src={`${basePath}/Fig.12_AssistantCost.png`}
            alt="被害額と復興予算の相関"
            width={1200}
            height={800}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Fig. 12: (A)(B)(C) 支援費用と直接被害の相関。(D)(E)(F) 復興予算と直接被害の相関。
          </figcaption>
        </figure>
        <p className="text-muted">
          衛星解析による被害推定結果を復興予算の配分に活用することで、
          DPWHや各自治体への予算配分をより迅速かつ公平に行うことが期待されます。
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">結論と今後の課題</h2>
        <p className="mb-3 text-muted">
          本手法は、Google Earth EngineとSentinel-1衛星画像を用いて、迅速かつ効率的な洪水被害評価を実現しました。
          台風Ulyssesによるカガヤン・バレー地域の被害評価に適用した結果、
          複数のセクターにわたる迅速かつ合理的な被害推定が可能であることが示されました。
        </p>
        <p className="text-muted">
          今後の課題として、被害曲線の精度向上（特にトウモロコシ）、
          山岳地帯の土砂災害被害の統合、および他の災害イベントへの適用と検証が挙げられます。
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">References</h2>
        <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
          <li>Cian, F., Marconcini, M., & Ceccato, P. (2018). Normalized Difference Flood Index for rapid flood mapping. <em>Remote Sensing of Environment</em>, 209, 712-730.</li>
          <li>Cohen, S. et al. (2018). Estimating Floodwater Depths from Flood Inundation Maps and Topography. <em>JAWRA</em>, 54(4), 847-858.</li>
          <li>Cohen, S. et al. (2019). The Floodwater Depth Estimation Tool (FwDET v2.0). <em>Natural Hazards and Earth System Sciences</em>, 19, 2053-2065.</li>
          <li>Peter, B.G. et al. (2022). Google Earth Engine Implementation of FwDET-GEE. <em>IEEE Geoscience and Remote Sensing Letters</em>, 19.</li>
          <li>Hamidi, E. et al. (2023). Fast Flood Extent Monitoring with SAR Change Detection Using Google Earth Engine. <em>IEEE Trans. on Geoscience and Remote Sensing</em>.</li>
          <li>Gorelick, N. et al. (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone. <em>Remote Sensing of Environment</em>.</li>
          <li>Breiman, L. (2001). Random Forests. <em>Machine Learning</em>, 45, 5-32.</li>
          <li>Sirko, W. et al. (2021). Continental-Scale Building Detection from High Resolution Satellite Imagery. <em>arXiv:2107.12283</em>.</li>
          <li>Pacheco, B.M. et al. (2014). Development of Vulnerability Curves of Key Building Types in the Greater Metro Manila Area. UPD-ICE.</li>
          <li>Shrestha, B.B. et al. (2016). Improvement in flood disaster damage assessment using highly accurate IfSAR DEM. <em>Journal of Disaster Research</em>, 11(6), 1137-1149.</li>
          <li>Shrestha, B.B. et al. (2018). Methodology for Agricultural Flood Damage Assessment. In <em>Recent Advances in Flood Risk Management</em>. IntechOpen.</li>
          <li>Tariq, M.A.U.R. et al. (2021). An Evaluation of Risk-Based Agricultural Land-Use Adjustments. <em>Hydrology</em>, 8(1), 53.</li>
          <li>Yamazaki, D. et al. (2017). A high-accuracy map of global terrain elevations. <em>Geophysical Research Letters</em>, 44(11), 5844-5853.</li>
          <li>Sayama, T. et al. (2015). Hydrologic sensitivity of flood runoff and inundation. <em>Natural Hazards and Earth System Sciences</em>, 15, 1617-1630.</li>
          <li>Ohara, M. et al. (2016). Study on Basic Flood Risk Assessment in Asian Flood Prone Area. <em>Journal of Disaster Research</em>, 11(6), 1150-1160.</li>
          <li>NDRRMC. (2021). Situational Report No. 29 re Typhoon &ldquo;ULYSSES&rdquo; (I.N. VAMCO).</li>
          <li>World Bank. (2018). Methodology Note on the Global RApid post-disaster Damage Estimation (GRADE) approach.</li>
          <li>EU, WB & UNDG. (2013). Post-Disaster Needs Assessments Guidelines Volume A.</li>
          <li>Copernicus & ESA. (2022). Copernicus DEM Product Handbook.</li>
          <li>PSA. (2022). Production Costs and Returns of Palay and Corn 2019-2021.</li>
          <li>PSA. (2020). Construction Statistics from Approved Building Permits.</li>
          <li>UN-SPIDER. Recommended Practice: Flood Mapping Using Sentinel-1 SAR in GEE.</li>
        </ol>
      </section>
    </article>
  );
}
