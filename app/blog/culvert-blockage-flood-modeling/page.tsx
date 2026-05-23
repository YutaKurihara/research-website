import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "カルバート閉塞が洪水動態に与える影響 — 2D水理モデルによる定量評価とインフラ優先度の特定",
};

export default function CulvertBlockageFloodModelingPost() {
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
            カルバート閉塞が洪水動態に与える影響 — 2D水理モデルによる定量評価とインフラ優先度の特定
          </h1>
          <p className="mt-3 text-xs text-muted">
            De Vos, L. F., Mahajan, K., Caviedes-Voullième, D., &amp; Rüther, N. (2026).
            Culvert blockages in 2D-hydrodynamic flash flood modeling: quantifying the impact on flood dynamics and mitigation strategies.
            <em> Natural Hazards and Earth System Sciences</em>, 26, 2319–2352.
          </p>
          <a href="https://doi.org/10.5194/nhess-26-2319-2026" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.5194/nhess-26-2319-2026
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
            中小河川の洪水モデリングでは、カルバート（暗渠・横断管）の閉塞が局所的な浸水を劇的に悪化させうることが
            経験的に知られていますが、その影響を定量的に評価した研究はほとんどありませんでした。
            本研究は、<strong className="text-foreground">TELEMAC-2Dにカルバート閉塞の動的モジュールを実装</strong>し、
            閉塞率（BR）と閉塞トリガー水位（TR）を組み合わせたシナリオ解析により、
            <strong className="text-foreground">どのカルバートが閉塞時に最も被害を拡大させるか</strong>を特定する
            フレームワークを提示しています。
            行政のカルバート台帳に欠落があるだけで流出ピークが5〜9%変わるという結果は、
            小流域の洪水リスク評価における基盤データの重要性を改めて示しています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            対象流域と背景
          </h2>
          <p className="text-muted">
            ドイツ中部バイエルン州北西部の<strong className="text-foreground">Reichenberger Bach流域（約33 km²）</strong>を
            対象としています。無観測流域であり、流域最低点は191 m a.s.l.、最高点は374 m a.s.l.です。
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">河川</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">延長</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">平均勾配</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Reichenberger Bach</td>
                  <td className="border border-border px-3 py-2 text-muted">~7.7 km</td>
                  <td className="border border-border px-3 py-2 text-muted">1.3%</td>
                  <td className="border border-border px-3 py-2 text-muted">農地を南→北に流下、市街地で全区間暗渠化</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Guttenberger Bach</td>
                  <td className="border border-border px-3 py-2 text-muted">~5.3 km</td>
                  <td className="border border-border px-3 py-2 text-muted">2.5%</td>
                  <td className="border border-border px-3 py-2 text-muted">森林地を流下</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            2021〜2024年に4回の洪水イベントが記録されており、いずれも消防への通報（道路・地下室の浸水）を伴っています。
            行政データには<strong className="text-foreground">22基のカルバート</strong>が登録されていましたが、
            現地踏査で<strong className="text-foreground">追加7基</strong>を発見し、
            計29基をモデルに組み込んでいます。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            手法
          </h2>

          <h3 className="mb-2 font-medium text-foreground">1. 水理モデル（TELEMAC-2D）</h3>
          <p className="mb-3 text-muted">
            オープンソースの2D浅水方程式モデル<strong className="text-foreground">TELEMAC-2D</strong>を使用。
            半陰的有限要素法、時間刻み0.5秒。初期条件は完全乾燥状態。
            降雨流出にはSCS-CN法を適用しています。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">メッシュ要素</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">解像度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">河道沿い（Strahler ≤7）</td>
                  <td className="border border-border px-3 py-2 text-muted">0.5–0.7 m</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">河道近傍の建物</td>
                  <td className="border border-border px-3 py-2 text-muted">1–2 m</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">その他の領域</td>
                  <td className="border border-border px-3 py-2 text-muted">最大15 m</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">総節点数 / 総要素数</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">1,168,050 / 2,318,072</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            地形データはLiDAR DEM（1 m解像度）と既存洪水モデルの河道測量断面を統合。
            粗度係数と流出CN値は土地利用データから設定しています。
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">2. カルバートモデリング</h3>
          <p className="mb-3 text-muted">
            カルバートは1D sink-and-sourceリンクとして表現され、Bodhaine (1968) の6種の流況に基づいて
            通過流量を計算します。本研究では標準のTELEMAC-2Dに以下の改良を加えています。
          </p>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">最大取水制限係数kの低減</strong>（0.9→0.5）: 上流節点から1タイムステップで取水できる体積を制限し、2Dメッシュとの整合性を向上
            </li>
            <li>
              <strong className="text-foreground">残余流量の分配</strong>: 理論流量が上流節点の許容量を超える場合、隣接節点から段階的に取水して下流節点に輸送
            </li>
          </ul>

          <h3 className="mt-6 mb-2 font-medium text-foreground">3. カルバート閉塞モデル</h3>
          <p className="mb-3 text-muted">
            閉塞メカニズムとして<strong className="text-foreground">流木・枝葉によるログジャム</strong>を想定。
            現地踏査と消防写真で実際の大規模閉塞を確認しています。
            モデルには<strong className="text-foreground">Energy Loss Method（ELM）</strong>を採用。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">パラメータ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">定義</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">設定値</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">閉塞率 BR</td>
                  <td className="border border-border px-3 py-2 text-muted">閉塞面積 / 全断面積</td>
                  <td className="border border-border px-3 py-2 text-muted">0.2, 0.5, 0.8</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">トリガー比 TR</td>
                  <td className="border border-border px-3 py-2 text-muted">上流水深 / カルバート高さ</td>
                  <td className="border border-border px-3 py-2 text-muted">0, 0.8, 1.0, 1.2, 1.5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            ELMでは閉塞率BRに応じて入口損失係数k<sub>e</sub>&apos;を増大させます。
            初期値k<sub>e</sub>=0.5（角形コンクリート管）に対し、
            BR=0.2でk<sub>e</sub>&apos;=1.3、BR=0.5で5.8、<strong className="text-foreground">BR=0.8で56.8</strong>と
            非線形に増加します。一度閉塞が発生すると解除されない（永続閉塞）仮定です。
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">4. 降雨シナリオ</h3>
          <p className="text-muted">
            6時間確率降雨（Euler II型分布）を用い、再現期間HN5〜HN100の6シナリオを設定。
            降雨データはRADKLIM/RADOLANレーダー（1 km²、1時間）、
            確率降雨量はドイツ標準のKOSTRA 2020データセット（5 km²解像度）から算定しています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            モデル検証
          </h2>
          <p className="text-muted">
            無観測流域のため、2021年7月15日洪水イベントの写真記録とGPS水面範囲を用いた
            <strong className="text-foreground">妥当性確認（plausibility assessment）</strong>を実施。
            6日前の降雨（7/9, 60 mm/13h）による先行湿潤条件を考慮し、SCS-CNを湿潤条件に設定。
            降雨入力にはRADKLIM-YW（5分時間分解能）の空間分布データを使用しています。
          </p>
          <p className="mt-2 text-muted">
            Reichenberg市街地の複数地点で浸水範囲の良好な一致を確認。
            粗度・流出係数のローカル調整なしでこの精度が得られています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            主な数値結果
          </h2>

          <h3 className="mb-2 font-medium text-foreground">カルバート台帳欠落の影響</h3>
          <p className="mb-4 text-muted">
            行政データの22基と現地踏査後の29基を比較した結果、
            <strong className="text-foreground">流出ピークが5〜9%増加</strong>。
            公式台帳の不完全さだけでモデル精度に有意な影響を与えることを示しています。
          </p>

          <h3 className="mb-2 font-medium text-foreground">流域出口への影響</h3>
          <p className="mb-4 text-muted">
            カルバート閉塞（BR=0.8）による流域出口のピーク流量変化は
            <strong className="text-foreground">HN10〜HN100で2%未満</strong>。
            上流での湛水・氾濫原への分散が流量を減衰させるため、流域スケールでは影響が限定的です。
          </p>

          <h3 className="mb-2 font-medium text-foreground">局所スケールの影響（断面解析）</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">再現期間</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">閉塞シナリオ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">市街地断面での影響</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">HN5</td>
                  <td className="border border-border px-3 py-2 text-muted">BR=0.8, TR=0〜1.2</td>
                  <td className="border border-border px-3 py-2 text-muted">急激な流量増加（t≈4〜5h）、TR=1.5では基準と同程度</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">HN10</td>
                  <td className="border border-border px-3 py-2 text-muted">BR=0.8, TR=0〜1.2</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">ピーク流量が基準の約2倍に増加</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">HN20〜HN100</td>
                  <td className="border border-border px-3 py-2 text-muted">全シナリオ</td>
                  <td className="border border-border px-3 py-2 text-muted">ハイドログラフがほぼ収束（閉塞有無に関わらずカルバート能力超過）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">浸水面積への影響（閉塞率BR別）</h3>
          <p className="mb-3 text-muted">水深30 cm以上の浸水面積の相対増加率（TR=0.8固定）:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">閉塞率</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">道路（HN5–HN20）</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">住宅・工業地（HN20–HN30）</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">全域</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">BR=0.8</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">&gt;10%増</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">&gt;10%増</td>
                  <td className="border border-border px-3 py-2 text-muted">1–3%増</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">BR=0.5</td>
                  <td className="border border-border px-3 py-2 text-muted">&lt;1.2%増</td>
                  <td className="border border-border px-3 py-2 text-muted">微増</td>
                  <td className="border border-border px-3 py-2 text-muted">&lt;1.2%増</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">BR=0.2</td>
                  <td className="border border-border px-3 py-2 text-muted">無視可能</td>
                  <td className="border border-border px-3 py-2 text-muted">無視可能</td>
                  <td className="border border-border px-3 py-2 text-muted">&lt;1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">浸水面積への影響（トリガー比TR別）</h3>
          <p className="mb-3 text-muted">BR=0.8固定での道路浸水面積の相対増加率:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">TR</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">HN5（道路）</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">HN10（道路）</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">傾向</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">TR=0（即時閉塞）</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">~20%増</td>
                  <td className="border border-border px-3 py-2 text-muted">~13%増</td>
                  <td className="border border-border px-3 py-2 text-muted">低再現期間ほど影響大</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">TR=0.8〜1.2</td>
                  <td className="border border-border px-3 py-2 text-muted">中程度</td>
                  <td className="border border-border px-3 py-2 text-muted">中程度</td>
                  <td className="border border-border px-3 py-2 text-muted">閉塞タイミングに依存</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">TR=1.5</td>
                  <td className="border border-border px-3 py-2 text-muted">1.4%増</td>
                  <td className="border border-border px-3 py-2 text-muted">微増</td>
                  <td className="border border-border px-3 py-2 text-muted">重要カルバートが閉塞しない</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">空間的整合性（CSI）</h3>
          <p className="text-muted">
            浸水深3 cm以上の閾値で<strong className="text-foreground">CSI &gt; 0.97</strong>（閉塞有無でほぼ同じ浸水域）。
            一方、30 cm以上ではCSIが低下し、シナリオ間の差異が顕著になります。
            これは閉塞が浸水「範囲」より「深さ」に強く影響することを意味しています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            重要カルバートの特定と緩和策
          </h2>
          <p className="mb-3 text-muted">
            シナリオ間の浸水差分解析から、Reichenberg市街地の
            <strong className="text-foreground">2基のカルバート（cc1, cc2）</strong>が
            局所浸水を支配していることを特定。これらの閉塞を防止（TR=∞、つまり常時通水を確保）
            するシナリオで緩和効果を検証しています。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">シナリオ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">HN5 道路浸水増</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">HN10 道路浸水増</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">HN20+ 効果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">全閉塞（対策なし）</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">18.49%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">13.22%</td>
                  <td className="border border-border px-3 py-2 text-muted">—</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">cc1のみ保全</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">1.40%</td>
                  <td className="border border-border px-3 py-2 text-muted">8.77%</td>
                  <td className="border border-border px-3 py-2 text-muted">軽微</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">cc2のみ保全</td>
                  <td className="border border-border px-3 py-2 text-muted">~18%（変化なし）</td>
                  <td className="border border-border px-3 py-2 text-muted">13.48%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">大幅減少</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">cc1+cc2保全</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">—</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">1.76%</td>
                  <td className="border border-border px-3 py-2 text-muted">相乗効果あり</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            重要な知見として、<strong className="text-foreground">カルバートの重要度は再現期間によって変化</strong>します。
            cc1はHN5で支配的ですが、HN20以上ではcc2が主要な影響因子に切り替わります。
            つまり、単一の再現期間だけでインフラ優先度を判断することは危険であり、
            複数シナリオでの評価が不可欠です。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            限界
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">無観測流域</strong>:
              出口ハイドログラフの検証ができず、写真記録による妥当性確認にとどまる
            </li>
            <li>
              <strong className="text-foreground">瞬時閉塞の仮定</strong>:
              実際の流木蓄積は漸進的だが、モデルでは閾値超過時に即座に閉塞が発生する
            </li>
            <li>
              <strong className="text-foreground">1Dカルバート表現</strong>:
              管路内の通過時間、断面変化、分岐は再現できない（1D排水管モデルとの結合が将来課題）
            </li>
            <li>
              <strong className="text-foreground">流況タイプ1の未実装</strong>:
              TELEMAC-2Dでは急勾配・低下流水深の流況タイプ1が実装されていないが、洪水ピーク時の影響は限定的と評価
            </li>
            <li>
              <strong className="text-foreground">HN100の限界</strong>:
              本研究のHN100（ピーク45 mm/h）は極端設計降雨（100 mm/h）より小さく、より大きなイベントでは結果が異なる可能性がある
            </li>
            <li>
              <strong className="text-foreground">流域固有性</strong>:
              地形・土地利用・インフラ配置に依存するため、他流域への直接的な定量的一般化は困難
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
              <strong className="text-foreground">カルバート台帳の完全性が重要</strong>:
              行政データの欠落だけで流出ピークが5〜9%変化するため、現地踏査によるデータ補完が不可欠
            </li>
            <li>
              <strong className="text-foreground">局所スケールの感度分析が必要</strong>:
              流域出口の応答は鈍いが、市街地の特定断面ではピーク流量が2倍になりうる
            </li>
            <li>
              <strong className="text-foreground">早期警戒と連動した現場対応</strong>:
              重要カルバートの閉塞防止（消防による流木除去）が、低〜中再現期間の洪水被害を大幅に軽減
            </li>
            <li>
              <strong className="text-foreground">複数再現期間での評価</strong>:
              インフラの重要度は再現期間により変わるため、単一シナリオでの優先度付けは不十分
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
              De Vos, L. F., Mahajan, K., Caviedes-Voullième, D., &amp; Rüther, N. (2026).
              Culvert blockages in 2D-hydrodynamic flash flood modeling: quantifying the impact on flood dynamics and mitigation strategies.
              <em> Natural Hazards and Earth System Sciences</em>, 26, 2319–2352.
              DOI: 10.5194/nhess-26-2319-2026
            </li>
            <li>
              Bodhaine, G. L. (1968). Measurement of peak discharge at culverts by indirect methods.
              <em> USGS Techniques of Water-Resources Investigations</em>, Book 3, Chapter A3.
            </li>
            <li>
              Smolders, S., Plancke, Y., Li, H., Neumann, L. E., &amp; Peeters, P. (2016).
              Culvert modelling in TELEMAC-2D and TELEMAC-3D.
              <em> Proceedings of the 23rd TELEMAC-MASCARET User Conference</em>.
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
