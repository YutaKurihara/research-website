import type { Metadata } from "next";
import Link from "next/link";
import { MathBlock, Math } from "@/components/Math";

export const metadata: Metadata = {
  title: "マルチGPUで都市洪水をリアルタイム予測 — ベルリン全域891km²を2m解像度で5.5時間",
};

export default function GpuUrbanFloodModelingPost() {
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
            2026-05-24
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            マルチGPUで都市洪水をリアルタイム予測 — ベルリン全域891 km²を2 m解像度で5.5時間
          </h1>
          <p className="mt-3 text-xs text-muted">
            Khosh Bin Ghomash, S., Deng, S., &amp; Apel, H. (2026).
            Enabling real-time high-resolution flood forecasting for the entire state of Berlin
            through multi-GPU accelerated physics-based modeling.
            <em> Natural Hazards and Earth System Sciences</em>, 26, 85–101.
          </p>
          <a href="https://doi.org/10.5194/nhess-26-85-2026" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.5194/nhess-26-85-2026
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
            都市域の内水氾濫をリアルタイムで予測するには、高解像度の2D水理シミュレーションが必要ですが、
            計算コストが膨大で実用的なリードタイムを確保できませんでした。
            本研究は、CUDA Fortranで実装したGPU加速型2D浅水方程式ソルバー
            <strong className="text-foreground">RIM2D</strong>を
            マルチGPU（最大8基のNVIDIA A100）で並列実行し、
            <strong className="text-foreground">ベルリン全域891.8 km²を2 m解像度（4.19億セル）で
            5.5時間で計算</strong>できることを実証しました。
            10 m解像度なら実時間の<strong className="text-foreground">347倍速</strong>で完了し、
            早期警報システムへの統合が現実的であることを示しています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            対象都市と洪水イベント
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">項目</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">値</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">対象都市</td>
                  <td className="border border-border px-3 py-2 text-muted">ベルリン州全域（891.8 km²、人口約389万人）</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">地形</td>
                  <td className="border border-border px-3 py-2 text-muted">比較的平坦、平均標高34 m a.s.l.、シュプレー川沿い</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">気候</td>
                  <td className="border border-border px-3 py-2 text-muted">温帯大陸性（Köppen Cfb）、年平均降水量~570 mm</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">対象イベント</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">2017年6月29–30日（24時間で最大196.9 mm）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            支配方程式: 局所慣性近似の浅水方程式
          </h2>
          <p className="mb-3 text-muted">
            RIM2Dは<strong className="text-foreground">浅水方程式の局所慣性近似（Local Inertia Form）</strong>を
            ラスターベースで解きます。移流項を省略し、慣性項と摩擦項のバランスで流速を計算する
            この定式化は、Bates et al. (2010) が提案し、都市域の内水氾濫に広く適用されています。
          </p>

          <h3 className="mb-2 font-medium text-foreground">連続の式</h3>
          <MathBlock tex="\frac{\partial h}{\partial t} + \frac{\partial q_x}{\partial x} + \frac{\partial q_y}{\partial y} = R - I - D" />
          <p className="mt-2 text-muted">
            <Math tex="h" /> は水深、<Math tex="q_x, q_y" /> は単位幅あたり流量、
            <Math tex="R" /> は降雨強度、<Math tex="I" /> は浸透量、<Math tex="D" /> は下水排水量です。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">運動量方程式（局所慣性近似）</h3>
          <MathBlock tex="\frac{\partial q}{\partial t} + g h \frac{\partial (h + z)}{\partial x} + \frac{g n^2 q |q|}{h^{7/3}} = 0" />
          <p className="mt-2 text-muted">
            <Math tex="g" /> は重力加速度、<Math tex="z" /> は地盤高、<Math tex="n" /> はManningの粗度係数です。
            第2項が水面勾配による駆動力、第3項がManning式に基づく摩擦抵抗を表します。
            移流項（<Math tex="\partial(q^2/h)/\partial x" />）を省略しているため、
            緩勾配の氾濫流に適した計算効率の高い定式化になっています。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">セル間フラックスの離散化</h3>
          <p className="mb-3 text-muted">
            隣接セル間のフラックスは、前タイムステップのフラックスと水面勾配から陽的に更新されます：
          </p>
          <MathBlock tex="q^{n+1} = \frac{q^n - g h_f \Delta t \, \frac{\partial (h + z)}{\partial x}}{1 + g \Delta t \, \frac{n^2 |q^n|}{h_f^{7/3}}}" />
          <p className="mt-2 text-muted">
            <Math tex="h_f" /> はセル界面の水深（上流側の水深）、<Math tex="\Delta t" /> は時間刻みです。
            分母の摩擦項が陰的に処理されているため、数値安定性が向上しています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            モデル構成とデータ
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">解像度</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">セル数</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">2 m</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">4.19億</td>
                  <td className="border border-border px-3 py-2 text-muted">高精度ハザードマップ</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">5 m</td>
                  <td className="border border-border px-3 py-2 text-muted">6,700万</td>
                  <td className="border border-border px-3 py-2 text-muted">運用予測（精度と速度のバランス）</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">10 m</td>
                  <td className="border border-border px-3 py-2 text-muted">1,670万</td>
                  <td className="border border-border px-3 py-2 text-muted">アンサンブル予報・高速スクリーニング</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">入力データ</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">データ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">出典</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">解像度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">DEM</td>
                  <td className="border border-border px-3 py-2 text-muted">DGM1（Geoportal Berlin）</td>
                  <td className="border border-border px-3 py-2 text-muted">1 m</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">建物</td>
                  <td className="border border-border px-3 py-2 text-muted">OpenStreetMap</td>
                  <td className="border border-border px-3 py-2 text-muted">—</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">土地被覆</td>
                  <td className="border border-border px-3 py-2 text-muted">Sentinel-2ベース分類（2020年）</td>
                  <td className="border border-border px-3 py-2 text-muted">10 m</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">降雨</td>
                  <td className="border border-border px-3 py-2 text-muted">RADOLAN（DWD）</td>
                  <td className="border border-border px-3 py-2 text-muted">1 km, 1時間</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">人口</td>
                  <td className="border border-border px-3 py-2 text-muted">WorldPop 2020</td>
                  <td className="border border-border px-3 py-2 text-muted">100 m</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">Manning粗度係数</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">土地被覆</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted"><Math tex="n" /> (m⁻¹/³s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">市街地</td>
                  <td className="border border-border px-3 py-2 text-muted">0.025</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">植生</td>
                  <td className="border border-border px-3 py-2 text-muted">0.04</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">森林</td>
                  <td className="border border-border px-3 py-2 text-muted">0.1</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">水面</td>
                  <td className="border border-border px-3 py-2 text-muted">0.03</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-muted">
            下水排水能力は2年確率15分降雨（KOSTRA: 12.5 mm）から
            <strong className="text-foreground">21 mm/h</strong>と推定し、均一に適用しています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            マルチGPU並列化
          </h2>
          <p className="mb-3 text-muted">
            RIM2DはCUDA Fortranで実装されており、計算領域を長軸方向に1D分割し、
            各GPUに割り当てます。境界セルのゴーストゾーン交換で計算の整合性を確保します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">解像度</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">1 GPU</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">4 GPU</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">8 GPU</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">対実時間比</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">10 m</td>
                  <td className="border border-border px-3 py-2 text-muted">16分</td>
                  <td className="border border-border px-3 py-2 text-muted">—</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">8分</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">347×</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">5 m</td>
                  <td className="border border-border px-3 py-2 text-muted">116分</td>
                  <td className="border border-border px-3 py-2 text-muted">39分</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">34分</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">84×</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">2 m</td>
                  <td className="border border-border px-3 py-2 text-muted">不可（メモリ不足）</td>
                  <td className="border border-border px-3 py-2 text-muted">579分</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">330分（5.5h）</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">8.7×</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            5〜10 m解像度では4 GPUを超えると改善が限定的（通信オーバーヘッド）。
            2 m解像度では6 GPU以上が必要で、単一GPUではメモリ不足で実行できません。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            検証結果
          </h2>

          <h3 className="mb-2 font-medium text-foreground">VGI（市民からの情報）による検証</h3>
          <p className="mb-3 text-muted">
            2017年洪水のSNS投稿から19地点の浸水情報を収集し、写真中の参照物から水深を推定。
            16地点で定量的な水深比較を実施しました。
            RIM2Dは<strong className="text-foreground">わずかな過小評価傾向</strong>を示しましたが、
            差は概ね許容範囲内です。
          </p>

          <h3 className="mb-2 font-medium text-foreground">公式ハザードマップとの比較（HQ100シナリオ）</h3>
          <p className="mb-3 text-muted">
            3つの集水域で公式浸水想定と比較し、以下の指標で評価しています：
          </p>
          <MathBlock tex="\text{CSI} = \frac{TP}{TP + FP + FN}" />
          <p className="mt-2 text-muted">
            CSI（Critical Success Index）は浸水域の空間的一致度を示します。
            <Math tex="TP" />は両者が浸水と判定した領域、
            <Math tex="FP" />はモデルのみ浸水、<Math tex="FN" />は公式のみ浸水です。
            全解像度で高いCSIを達成しており、<strong className="text-foreground">解像度が細かいほど精度が向上</strong>しています。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">下水容量の感度分析</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">下水容量</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">浸水面積変化</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">平均水深変化</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">50%低下</td>
                  <td className="border border-border px-3 py-2 text-muted">+8%</td>
                  <td className="border border-border px-3 py-2 text-muted">+17%</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">完全閉塞</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+13%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+23%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            限界
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">キャリブレーション未実施</strong>:
              検証データの不足から意図的に無校正で実行。運用時には校正が推奨される
            </li>
            <li>
              <strong className="text-foreground">下水管網の簡略化</strong>:
              均一な排水容量（21 mm/h）を仮定。実際の管網データ・先行充水状態は考慮されていない
            </li>
            <li>
              <strong className="text-foreground">地下構造物の未考慮</strong>:
              地下道・橋梁・トンネル等の詳細データは組み込まれていない
            </li>
            <li>
              <strong className="text-foreground">降雨入力の粗さ</strong>:
              RADOLANの1 km解像度は対流性降雨のサブキロメートル変動を捉えきれない
            </li>
            <li>
              <strong className="text-foreground">VGI検証の限界</strong>:
              19地点のSNS写真のみ。体系的な水位・流量観測データは存在しない
            </li>
            <li>
              <strong className="text-foreground">パラメータ不確実性</strong>:
              現実的なパラメータ範囲で浸水面積±10–20%、水深±15–25%の不確実性
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
              <strong className="text-foreground">早期警報システムへの統合</strong>:
              10 m解像度なら48時間予測を8分で完了。降雨予報と組み合わせた
              リアルタイム浸水予測が技術的に可能
            </li>
            <li>
              <strong className="text-foreground">アンサンブル予報</strong>:
              高速性を活かし、降雨不確実性を考慮した確率的浸水予測（アンサンブル実行）が現実的
            </li>
            <li>
              <strong className="text-foreground">影響ベースの予警報</strong>:
              「大雨警報」ではなく「どこが何cm浸水するか」をマップで提示する
              次世代の都市洪水警報が可能に
            </li>
            <li>
              <strong className="text-foreground">クラウドGPUの活用</strong>:
              専用クラスタでなくクラウドHPCプロバイダのGPUインスタンスで
              費用対効果の高い運用が可能
            </li>
            <li>
              <strong className="text-foreground">途上国都市への応用可能性</strong>:
              OpenStreetMap建物データとオープンDEMで構築可能なため、
              詳細な下水管網データがない都市でも適用できる
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
              Khosh Bin Ghomash, S., Deng, S., &amp; Apel, H. (2026).
              Enabling real-time high-resolution flood forecasting for the entire state of Berlin
              through multi-GPU accelerated physics-based modeling.
              <em> Natural Hazards and Earth System Sciences</em>, 26, 85–101.
              DOI: 10.5194/nhess-26-85-2026
            </li>
            <li>
              Bates, P. D., Horritt, M. S., &amp; Fewtrell, T. J. (2010).
              A simple inertial formulation of the shallow water equations for efficient
              two-dimensional flood inundation modelling.
              <em> Journal of Hydrology</em>, 387(1–2), 33–45.
            </li>
            <li>
              de Almeida, G. A. M., Bates, P., Freer, J. E., &amp; Souvignet, M. (2012).
              Improving the stability of a simple formulation of the shallow water equations for 2-D flood modeling.
              <em> Water Resources Research</em>, 48(5), W05528.
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
