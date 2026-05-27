import type { Metadata } from "next";
import Link from "next/link";
import { MathBlock, Math } from "@/components/Math";

export const metadata: Metadata = {
  title:
    "浅水方程式の解き方 — 各項の離散化手法と代表的な解法の比較",
};

export default function SolvingShallowWaterEquationsPost() {
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
            2026-05-27
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            浅水方程式の解き方 — 各項の離散化手法と代表的な解法の比較
          </h1>
          <p className="mt-3 text-xs text-muted">
            <Link
              href="/blog/hydraulic-model-equations"
              className="text-highlight hover:underline"
            >
              前回の記事
            </Link>
            では、浅水方程式の運動方程式が4つの項で構成されること、
            モデルごとにどの項を省略するかを整理しました。
            本記事では、その各項を「コンピュータで実際にどう計算するか」に焦点を当てます。
            項ごとに利用可能な離散化手法をリストアップし、
            代表的な手法を数式で解説します。
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* ── 方程式の全体像 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            方程式の全体像（前回の復習）
          </h2>
          <p className="mb-4 text-muted">
            浅水方程式は<strong className="text-foreground">連続方程式</strong>と
            <strong className="text-foreground">運動方程式</strong>から成ります。
            運動方程式は4つの項で構成されています。
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">連続方程式（質量保存）</p>
          <MathBlock
            tex={String.raw`\underbrace{\frac{\partial h}{\partial t}}_{\text{貯留変化}} + \underbrace{\frac{\partial q_x}{\partial x} + \frac{\partial q_y}{\partial y}}_{\text{流出入フラックス}} = R`}
          />
          <p className="mt-2 text-muted">
            <Math tex={String.raw`q_x = hu, \; q_y = hv`} /> は単位幅流量 [m²/s] です。
          </p>

          <p className="mt-5 mb-2 text-[11px] font-medium text-foreground">運動方程式（運動量保存）</p>
          <MathBlock
            tex={String.raw`\underbrace{\frac{\partial q}{\partial t}}_{\textcircled{1}\;\text{局所加速度}} + \underbrace{\frac{\partial}{\partial x}\!\left(\frac{q^2}{h}\right)}_{\textcircled{2}\;\text{移流}} + \underbrace{g\,h\,\frac{\partial \eta}{\partial x}}_{\textcircled{3}\;\text{水面勾配}} + \underbrace{\frac{g\,n^2\,q\,|q|}{h^{7/3}}}_{\textcircled{4}\;\text{摩擦}} = 0`}
          />
          <p className="mt-2 text-muted">
            ここでは保存形（<Math tex="q = hu" /> を変数とする形）で書いています。
            <Math tex={String.raw`\eta = z_b + h`} /> は水面標高です。
            本記事では、これら各項を「どう数値化するか」を一つずつ見ていきます。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 空間離散化の枠組み ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            前提：空間離散化の3つの枠組み
          </h2>
          <p className="mb-4 text-muted">
            各項の離散化を理解する前に、空間を格子に分割する3つの大枠を確認します。
            どの枠組みを選ぶかで、各項の離散化手法が変わります。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    枠組み
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    考え方
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    格子
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    代表モデル
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    有限差分法（FDM）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    微分を隣接点の差分で近似
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    構造格子（正方形）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    LISFLOOD-FP, RIM2D
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    有限体積法（FVM）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    各セルの保存則（流入＝流出）を満たす
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    構造 or 非構造
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    HEC-RAS 2D
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    有限要素法（FEM）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    基底関数で解を近似し、重み付き残差を最小化
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    非構造（三角形）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    TELEMAC-2D
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-3 text-muted">
            以下では最も直感的な<strong className="text-foreground">有限差分法（FDM）</strong>を軸に説明しますが、
            各項の解法リストではFVM・FEMでの扱いにも触れます。
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">
            スタガード格子：変数の配置
          </p>
          <p className="mb-3 text-muted">
            FDMでは、水深とフラックスを<strong className="text-foreground">ずらして配置</strong>するスタガード格子が標準です。
          </p>
          <div className="overflow-x-auto rounded border border-border bg-accent-light/30 px-4 py-4">
            <pre className="text-xs leading-relaxed text-muted">
{`   q_{i-1/2}           q_{i+1/2}           q_{i+3/2}
      ↓                    ↓                    ↓
 ─────┼────────────────────┼────────────────────┼─────
      │                    │                    │
      │   h_i, η_i, z_i   │  h_{i+1}, η_{i+1}  │
      │                    │                    │
 ─────┼────────────────────┼────────────────────┼─────

 ←──────── Δx ────────→

 ● h, η, z  → セル中心（整数添字）：貯留量を表す
 ● q        → セル境界（半整数添字）：セル間の移動量を表す`}
            </pre>
          </div>
          <p className="mt-3 text-muted">
            この配置により、隣接するセルの水面差が自然にフラックスの駆動力となり、
            フラックスの差が自然に水深の増減を表現します。
            同じ位置に全変数を置くと（コロケート格子）、
            チェッカーボード状の数値振動が生じやすくなります。
          </p>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── 連続方程式の解き方 ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            連続方程式の解き方
          </h2>
          <p className="mb-3 text-muted">
            連続方程式はシンプルな構造で、
            すべてのモデルで同じように離散化されます。
          </p>
          <MathBlock
            tex={String.raw`\frac{\partial h}{\partial t} + \frac{\partial q}{\partial x} = R`}
          />

          <p className="mt-3 mb-2 text-[11px] font-medium text-foreground">
            離散化
          </p>
          <p className="mb-2 text-muted">
            時間微分を前進差分、空間微分を中心差分で置き換えます。
          </p>
          <MathBlock
            tex={String.raw`\frac{h_i^{n+1} - h_i^n}{\Delta t} + \frac{q_{i+1/2}^{n+1} - q_{i-1/2}^{n+1}}{\Delta x} = R`}
          />
          <p className="mt-2 mb-2 text-[11px] font-medium text-foreground">
            水深の更新式
          </p>
          <MathBlock
            tex={String.raw`\boxed{\; h_i^{n+1} = h_i^{n} + \frac{\Delta t}{\Delta x}\left(q_{i-1/2}^{n+1} - q_{i+1/2}^{n+1}\right) + R \cdot \Delta t \;}`}
          />
          <p className="mt-3 text-muted">
            「セルの水深の変化 = 左から入る水 − 右へ出る水 + 降雨」
            という直感的な意味です。
            この式は単純なので、離散化手法による違いはほとんどありません。
            <strong className="text-foreground">
              核心は、右辺のフラックス <Math tex={String.raw`q_{i+1/2}^{n+1}`} /> をどう求めるか
            </strong>
            — つまり運動方程式の各項をどう解くかにあります。
          </p>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── ① 局所加速度項 ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            ① 局所加速度項の解き方
          </h2>
          <MathBlock tex={String.raw`\frac{\partial q}{\partial t}`} />
          <p className="mt-3 mb-4 text-muted">
            セル境界での流量の<strong className="text-foreground">時間変化率</strong>です。
            「今のフラックスから次のフラックスへ、どう時間発展させるか」という問題になります。
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">利用可能な手法</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    手法
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    離散化
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    特徴
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    使用モデル
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    前進Euler法（陽解法）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    <Math tex={String.raw`\frac{q^{n+1} - q^n}{\Delta t}`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    単純で並列化に最適。CFL条件で時間刻みに制約
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    LISFLOOD-FP, RIM2D
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    後退Euler法（陰解法）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    <Math tex={String.raw`\frac{q^{n+1} - q^n}{\Delta t} = F(q^{n+1})`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    無条件安定で大きな時間刻みが可能。連立方程式の求解が必要
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    HEC-RAS 2D
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    Runge-Kutta法
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    多段階で中間値を評価
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    高精度だが計算量が多い。研究用コードで使用
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    一部の研究コード
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    θ法（Crank-Nicolson等）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    陽・陰の重み付き平均
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    θ=0.5で2次精度。TELEMAC-2Dでも使用
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    TELEMAC-2D
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            代表的な手法：前進Euler法（LISFLOOD-FP / RIM2D）
          </p>
          <MathBlock
            tex={String.raw`\frac{\partial q}{\partial t} \;\approx\; \frac{q_{i+1/2}^{n+1} - q_{i+1/2}^{n}}{\Delta t}`}
          />
          <p className="mt-2 text-muted">
            現在のステップ <Math tex="n" /> の値だけで次のステップ{" "}
            <Math tex="n+1" /> を計算します。
            各セル境界で<strong className="text-foreground">独立に計算できる</strong>ため、
            GPUの大規模並列化に最適です。
            ただし、時間刻みが大きすぎると数値が発散するため、
            CFL条件（後述）による制約を受けます。
          </p>

          <div className="mt-4 rounded border border-border bg-accent-light/30 p-4">
            <p className="text-[11px] font-medium text-foreground">
              陰解法との比較
            </p>
            <p className="mt-1 text-muted">
              HEC-RAS 2Dは陰解法を採用しており、時間刻みの制約が緩い代わりに、
              毎ステップ全セルの連立方程式を解く必要があります。
              これは精度が低下する可能性がありますが、
              実務的には大きな時間刻みで安定に計算できる利点があります。
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── ② 移流項 ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            ② 移流加速度項の解き方
          </h2>
          <MathBlock
            tex={String.raw`\frac{\partial}{\partial x}\!\left(\frac{q^2}{h}\right)`}
          />
          <p className="mt-3 mb-4 text-muted">
            流れが運動量自体を輸送する効果を表します。
            数値的に最も厄介な項であり、不適切に扱うと数値振動や散逸が生じます。
            <strong className="text-foreground">
              局所慣性モデル（LISFLOOD-FP, RIM2D）ではこの項を省略
            </strong>
            するため計算が大幅に単純化されます。
            完全SWEを解くモデルでのみ必要です。
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">利用可能な手法</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    手法
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    考え方
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    精度
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    使用モデル
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    1次風上差分
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    流れの上流側の値を使う
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    1次。安定だが数値拡散が大きい
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    基本的なFDMコード
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    Godunov型（リーマンソルバー）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    セル境界でリーマン問題を解く
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    衝撃波を捕捉可能。FVMの標準
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    HEC-RAS 2D (Full)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    MUSCL再構築 + リーマンソルバー
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    セル内で線形補間→境界値を高精度化
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    2次精度。リミッターで振動を抑制
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    研究用高精度コード
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    特性曲線法 + FEM
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    流れに沿って移流を追跡
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    大きな時間刻みでも安定
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    TELEMAC-2D
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    省略する
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    移流項を方程式から削除
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    <Math tex={String.raw`Fr < 0.5`} /> で妥当
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    LISFLOOD-FP, RIM2D, RRI
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            代表的な手法：Roe近似リーマンソルバー（HEC-RAS等のFVM）
          </p>
          <p className="mb-3 text-muted">
            セル境界の左右に異なる状態（<Math tex={String.raw`h_L, q_L`} /> と{" "}
            <Math tex={String.raw`h_R, q_R`} />）があるとき、
            その不連続面がどう伝播するかを解く「リーマン問題」を各セル境界で解きます。
          </p>

          <div className="rounded border border-border p-4">
            <p className="mb-2 text-[11px] font-medium text-foreground">
              Roeソルバーのフラックス計算
            </p>
            <MathBlock
              tex={String.raw`F_{i+1/2} = \frac{1}{2}\big(F_L + F_R\big) - \frac{1}{2}\sum_{k=1}^{2} |\tilde{\lambda}_k|\,\tilde{\alpha}_k\,\tilde{e}_k`}
            />
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <tbody>
                  <tr>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      <Math tex={String.raw`F_L, F_R`} />
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      左右の状態から計算したフラックス
                    </td>
                  </tr>
                  <tr className="bg-accent-light/50">
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      <Math tex={String.raw`\tilde{\lambda}_k`} />
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      Roe平均での固有値（波の伝播速度）：{" "}
                      <Math tex={String.raw`\tilde{u} \pm \sqrt{g\tilde{h}}`} />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      <Math tex={String.raw`\tilde{\alpha}_k`} />
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      波の強度（左右の状態差を固有ベクトルに分解した係数）
                    </td>
                  </tr>
                  <tr className="bg-accent-light/50">
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      <Math tex={String.raw`\tilde{e}_k`} />
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      固有ベクトル
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-muted">
              第1項が左右の単純平均、第2項が波の伝播方向に応じた補正で、
              衝撃波（跳水）や疎密波を正確に捕捉できます。
              計算コストが高い分、射流・跳水を含む流れを安定に扱えます。
            </p>
          </div>

          <div className="mt-4 rounded border border-border bg-accent-light/30 p-4">
            <p className="text-[11px] font-medium text-foreground">
              なぜ局所慣性モデルはこの項を省略できるのか
            </p>
            <p className="mt-1 text-muted">
              de Almeida &amp; Bates (2013) は、
              洪水氾濫では移流項の寄与が全体の1%未満であることが多いと報告しています。
              フルード数 <Math tex={String.raw`Fr = u/\sqrt{gh}`} /> が 0.5 未満の
              緩やかな流れでは省略しても精度への影響はわずかです。
              そして移流項を省略することで、リーマンソルバーが不要になり、
              計算が劇的に単純化されます。
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── ③ 水面勾配項 ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            ③ 水面勾配項の解き方
          </h2>
          <MathBlock
            tex={String.raw`g\,h\,\frac{\partial \eta}{\partial x}`}
          />
          <p className="mt-3 mb-4 text-muted">
            水面が高い側から低い側へ流れを押す<strong className="text-foreground">圧力駆動力</strong>です。
            全てのモデルで保持される最も基本的な項であり、
            離散化の方法もモデル間で比較的共通しています。
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">利用可能な手法</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    手法
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    考え方
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    注意点
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    中心差分
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    左右セルの水面標高の差で勾配を近似
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    スタガード格子と自然に整合。最も一般的
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    well-balanced法
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    静水圧平衡を正確に保つ再構築
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    急な地形変化で偽の流れを防止
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    水面標高法（surface gradient method）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    <Math tex={String.raw`\eta`} /> を直接再構築（<Math tex={String.raw`h + z_b`} /> を分離しない）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    FVMで河床不連続を扱うときに有効
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            代表的な手法：中心差分（LISFLOOD-FP / RIM2D）
          </p>
          <p className="mb-3 text-muted">
            セル境界 <Math tex={String.raw`i+1/2`} /> における水面勾配は、
            左右セルの水面標高の差で直接求めます。
          </p>
          <MathBlock
            tex={String.raw`g\,h_f\,\frac{\partial \eta}{\partial x}\bigg|_{i+1/2} \;\approx\; g\,h_f \cdot \frac{\eta_{i+1}^n - \eta_i^n}{\Delta x}`}
          />
          <p className="mt-3 mb-2 text-muted">
            ここで <Math tex="h_f" /> はセル境界での<strong className="text-foreground">代表水深</strong>で、
            以下のように定義されます。
          </p>
          <MathBlock
            tex={String.raw`h_f = \max\!\big(\eta_i,\; \eta_{i+1}\big) - \max\!\big(z_{b,i},\; z_{b,i+1}\big)`}
          />

          <div className="mt-4 rounded border border-border bg-accent-light/30 p-4">
            <p className="text-[11px] font-medium text-foreground">
              なぜ <Math tex="h_f" /> をこう定義するのか
            </p>
            <p className="mt-1 text-muted">
              左右のセルで地盤高が異なる場合（堤防や段差）、
              単純に <Math tex={String.raw`(h_i + h_{i+1})/2`} /> とすると
              実際に水が流れていない状況でもフラックスが発生してしまいます。
              上記の定義なら、片側の水面が相手の地盤より低い場合に{" "}
              <Math tex={String.raw`h_f \leq 0`} /> となり、
              フラックスが自然にゼロになります。
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── ④ 摩擦項 ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            ④ 摩擦項の解き方
          </h2>
          <MathBlock
            tex={String.raw`\frac{g\,n^2\,q\,|q|}{h^{7/3}}`}
          />
          <p className="mt-3 mb-4 text-muted">
            河床・地表面との摩擦による減速効果です。Manning式に基づいており、
            水深が小さいほど摩擦が強くなります。
            数値計算上、<strong className="text-foreground">水深→0で分母が爆発する</strong>
            ため、離散化の方法が安定性に大きく影響します。
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">利用可能な手法</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    手法
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    離散化
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    安定性
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    使用モデル
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    完全陽的
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    <Math tex={String.raw`\frac{g n^2 q^n |q^n|}{h_f^{7/3}}`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    浅い水深で不安定になりやすい
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    —
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    半陰的（semi-implicit）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    <Math tex={String.raw`|q|`} /> は <Math tex="n" />、
                    <Math tex="q" /> は <Math tex="n+1" /> で評価
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    大幅に改善。連立方程式不要
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    LISFLOOD-FP, RIM2D
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    完全陰的
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    全てを <Math tex="n+1" /> で評価
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    最も安定。非線形連立方程式の反復解法が必要
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    HEC-RAS, TELEMAC-2D
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    分割法（splitting）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    摩擦をソース項として分離し独立に解く
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    FVMとの相性がよい
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    FVM系研究コード
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            代表的な手法：半陰的処理（LISFLOOD-FP / RIM2D）
          </p>
          <p className="mb-3 text-muted">
            摩擦項の <Math tex={String.raw`q|q|`} /> を、
            <Math tex={String.raw`|q^n| \cdot q^{n+1}`} /> に分解します。
          </p>

          <div className="mb-4 rounded border border-border p-4">
            <p className="mb-2 text-[11px] font-medium text-foreground">
              なぜ半陰的にするのか — 完全陽的の問題
            </p>
            <p className="text-muted">
              完全陽的に計算すると、水深が小さいとき摩擦項{" "}
              <Math tex={String.raw`gn^2 q^n |q^n| / h_f^{7/3}`} />{" "}
              が極端に大きくなり、
              次ステップのフラックスが<strong className="text-foreground">符号反転（物理的にあり得ない逆流）</strong>
              してしまいます。
            </p>
          </div>

          <p className="mb-2 text-muted">半陰的に離散化すると：</p>
          <MathBlock
            tex={String.raw`\frac{g\,n^2\,q\,|q|}{h_f^{7/3}} \;\approx\; \underbrace{\frac{g\,n^2\,|q^n|}{h_f^{7/3}}}_{\text{既知の係数}} \cdot \underbrace{q^{n+1}}_{\text{未知}}`}
          />
          <p className="mt-2 text-muted">
            こうすると <Math tex={String.raw`q^{n+1}`} /> に対して
            <strong className="text-foreground">線形</strong>になります。
            運動方程式全体を整理すると：
          </p>
          <MathBlock
            tex={String.raw`q^{n+1}\!\left(1 + \frac{g\,n^2\,|q^n|\,\Delta t}{h_f^{7/3}}\right) = q^n - g\,h_f\,\Delta t\,\frac{\eta_{i+1} - \eta_i}{\Delta x}`}
          />
          <p className="mt-2 text-muted">
            分母の <Math tex={String.raw`1 + (\cdots)`} /> は常に1以上なので、
            フラックスは必ず<strong className="text-foreground">減衰方向</strong>に修正されます。
            水深が小さくなるほど分母が大きくなり、摩擦が自動的に強まって
            フラックスが抑制される — 物理的に正しい振る舞いです。
          </p>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── 全体を組み合わせる ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            全体を組み合わせる：フラックス更新式
          </h2>
          <p className="mb-3 text-muted">
            ①③④の離散化を運動方程式に代入して整理すると、
            局所慣性モデル（LISFLOOD-FP / RIM2D）のフラックス更新式が得られます。
          </p>
          <MathBlock
            tex={String.raw`\boxed{\; q_{i+1/2}^{n+1} = \frac{\overbrace{q_{i+1/2}^{n}}^{\textcircled{1}\;\text{慣性}} \;-\; \overbrace{g\,h_f\,\Delta t\;\dfrac{\eta_{i+1} - \eta_i}{\Delta x}}^{\textcircled{3}\;\text{水面勾配}}}{\underbrace{1 \;+\; \dfrac{g\,n^2\,|q_{i+1/2}^{n}|\,\Delta t}{h_f^{7/3}}}_{\textcircled{4}\;\text{摩擦による減衰}}} \;}`}
          />
          <p className="mt-3 text-muted">
            この1行の式に、局所慣性近似の物理が凝縮されています。
            ②移流項は省略されているため、式に現れません。
            各セル境界で独立に計算でき、GPUの大規模並列処理に理想的です。
          </p>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            計算の流れ（1タイムステップ）
          </p>
          <div className="space-y-2">
            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                1
              </span>
              <p className="text-muted">
                全セル境界で <Math tex="h_f" /> を計算
              </p>
            </div>
            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                2
              </span>
              <p className="text-muted">
                上式でフラックス <Math tex={String.raw`q_{i+1/2}^{n+1}`} /> を更新（x方向・y方向）
              </p>
            </div>
            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                3
              </span>
              <p className="text-muted">
                連続方程式で水深 <Math tex={String.raw`h_i^{n+1}`} /> を更新
              </p>
            </div>
            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                4
              </span>
              <p className="text-muted">
                CFL条件で次の <Math tex={String.raw`\Delta t`} /> を決定
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── CFL条件 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            安定条件：CFL条件
          </h2>
          <p className="mb-3 text-muted">
            陽解法では、情報の伝播速度が1タイムステップで1セルを超えないことが安定の条件です。
          </p>
          <MathBlock
            tex={String.raw`\Delta t \;\leq\; \alpha \cdot \frac{\Delta x}{\sqrt{g \cdot h_{\max}}}`}
          />
          <p className="mt-2 text-muted">
            <Math tex={String.raw`\alpha`} /> はCFL数（通常0.2〜0.7）、
            <Math tex={String.raw`h_{\max}`} /> は領域内の最大水深、
            <Math tex={String.raw`\sqrt{gh_{\max}}`} /> は浅水波の伝播速度です。
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    <Math tex={String.raw`\Delta x`} />
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    <Math tex={String.raw`h_{\max}`} />
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    <Math tex={String.raw`\Delta t_{\max}`} />（<Math tex={String.raw`\alpha\!=\!0.5`} />）
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    計算量の目安
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">10 m</td>
                  <td className="border border-border px-3 py-2 text-muted">1 m</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">1.60 s</td>
                  <td className="border border-border px-3 py-2 text-muted">基準</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">5 m</td>
                  <td className="border border-border px-3 py-2 text-muted">1 m</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">0.80 s</td>
                  <td className="border border-border px-3 py-2 text-muted">×8</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">2 m</td>
                  <td className="border border-border px-3 py-2 text-muted">1 m</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">0.32 s</td>
                  <td className="border border-border px-3 py-2 text-muted">×50</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">2 m</td>
                  <td className="border border-border px-3 py-2 text-muted">3 m</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">0.18 s</td>
                  <td className="border border-border px-3 py-2 text-muted">×89</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            解像度を半分にすると、セル数が4倍×ステップ数が2倍＝計算量が約<strong className="text-foreground">8倍</strong>に。
            これが高解像度計算にGPU並列化が不可欠な理由です。
            陰解法はこの制約がないため大きな時間刻みが取れますが、
            毎ステップの連立方程式の求解コストが加わります。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 乾湿境界 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            乾湿境界（Wetting and Drying）の扱い
          </h2>
          <p className="mb-4 text-muted">
            水が広がっていく（wetting）過程と退水（drying）する過程では、
            水深がゼロに近づき摩擦項の分母 <Math tex={String.raw`h^{7/3}`} /> が極端に小さくなります。
            以下の3つの対策が組み合わされます。
          </p>

          <div className="space-y-3">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                ① 閾値水深
              </p>
              <p className="text-muted">
                最小水深 <Math tex={String.raw`h_{\min}`} />（例: 10⁻³ m）を設定し、
                <Math tex={String.raw`h_f < h_{\min}`} /> ならフラックスをゼロに。
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                ② フラックス制限
              </p>
              <p className="text-muted">
                1ステップでセルの水を全て排出しないよう上限を設定。
              </p>
              <MathBlock
                tex={String.raw`|q_{i+1/2}^{n+1}| \;\leq\; \frac{h_i \cdot \Delta x}{N_{\text{out}} \cdot \Delta t}`}
              />
              <p className="mt-1 text-muted">
                <Math tex={String.raw`N_{\text{out}}`} /> は流出する辺の数（2Dでは最大4）。
                水深が負にならないことを保証します。
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                ③ 境界水深の定義による自然な遮断
              </p>
              <p className="text-muted">
                <Math
                  tex={String.raw`h_f = \max(\eta_i, \eta_{i+1}) - \max(z_{b,i}, z_{b,i+1})`}
                />{" "}
                により、水面が相手側の地盤より低ければ{" "}
                <Math tex={String.raw`h_f \leq 0`} /> → フラックス自動ゼロ。
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── まとめ ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            まとめ：項ごとの解法の全体像
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    項
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    LISFLOOD-FP / RIM2D
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    HEC-RAS 2D (Full)
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    TELEMAC-2D
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ① 局所加速度
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    前進Euler（陽的）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    後退Euler（陰的）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    θ法
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ② 移流
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    省略
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    FVM + リーマンソルバー
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    特性曲線法 / SUPG
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ③ 水面勾配
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    中心差分
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    FVM勾配再構築
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    FEM基底関数の勾配
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ④ 摩擦
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    半陰的
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    完全陰的
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    完全陰的
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    CFL制約
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    あり（小さい Δt）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    緩い or なし
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    緩い
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    GPU並列化
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    最適
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    困難
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    困難
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            局所慣性モデルが高速な理由は、②移流項を省略したことで
            リーマンソルバーが不要になり、④摩擦を半陰的に処理することで
            連立方程式の求解も不要になった点にあります。
            全ての計算が「1セル境界につき1行の代数式」に帰着するため、
            GPUで大規模に並列化できます。
          </p>
          <p className="mt-2 text-muted">
            一方、完全SWEモデル（HEC-RAS, TELEMAC-2D）は
            計算コストが高い分、射流・跳水・急変流を再現できます。
            対象とする流れの性質に応じて使い分けることが重要です。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Bates, P. D., Horritt, M. S., &amp; Fewtrell, T. J. (2010).
              A simple inertial formulation of the shallow water equations for
              efficient two-dimensional flood inundation modelling.
              <em> Journal of Hydrology</em>, 387(1–2), 33–45.
            </li>
            <li>
              de Almeida, G. A. M., Bates, P., Freer, J. E., &amp; Souvignet,
              M. (2012). Improving the stability of a simple formulation of the
              shallow water equations for 2-D flood modeling.
              <em> Water Resources Research</em>, 48(5), W05528.
            </li>
            <li>
              Toro, E. F. (2001).
              <em>Shock-Capturing Methods for Free-Surface Shallow Flows.</em>{" "}
              Wiley.
            </li>
            <li>
              Hervouet, J.-M. (2007).
              <em>Hydrodynamics of Free Surface Flows: Modelling with the Finite Element Method.</em>{" "}
              Wiley.
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
