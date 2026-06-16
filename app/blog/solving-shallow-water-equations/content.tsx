"use client";

import Link from "next/link";
import { MathBlock, Math } from "@/components/Math";
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
            2026-05-27
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Solving the Shallow Water Equations — Discretization Methods for Each Term and Comparison of Representative Solvers"
              : "浅水方程式の解き方 — 各項の離散化手法と代表的な解法の比較"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            <Link
              href="/blog/hydraulic-model-equations"
              className="text-highlight hover:underline"
            >
              {en ? "In the previous post" : "前回の記事"}
            </Link>
            {en
              ? ", we reviewed how the momentum equation of the shallow water equations consists of four terms and which terms each model omits. This post focuses on how each term is actually computed on a computer. We list available discretization methods for each term and explain representative approaches with equations."
              : "では、浅水方程式の運動方程式が4つの項で構成されること、モデルごとにどの項を省略するかを整理しました。本記事では、その各項を「コンピュータで実際にどう計算するか」に焦点を当てます。項ごとに利用可能な離散化手法をリストアップし、代表的な手法を数式で解説します。"}
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* ── Overview of the equations ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Overview of the Equations (Recap)" : "方程式の全体像（前回の復習）"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>The shallow water equations consist of the <strong className="text-foreground">continuity equation</strong> and the <strong className="text-foreground">momentum equation</strong>. The momentum equation is composed of four terms.</>
            ) : (
              <>浅水方程式は<strong className="text-foreground">連続方程式</strong>と<strong className="text-foreground">運動方程式</strong>から成ります。運動方程式は4つの項で構成されています。</>
            )}
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">
            {en ? "Continuity equation (mass conservation)" : "連続方程式（質量保存）"}
          </p>
          <MathBlock
            tex={String.raw`\underbrace{\frac{\partial h}{\partial t}}_{\text{${en ? "storage change" : "貯留変化"}}} + \underbrace{\frac{\partial q_x}{\partial x} + \frac{\partial q_y}{\partial y}}_{\text{${en ? "flux in/out" : "流出入フラックス"}}} = R`}
          />
          <p className="mt-2 text-muted">
            <Math tex={String.raw`q_x = hu, \; q_y = hv`} />{" "}
            {en
              ? "are the unit-width discharges [m²/s]."
              : "は単位幅流量 [m²/s] です。"}
          </p>

          <p className="mt-5 mb-2 text-[11px] font-medium text-foreground">
            {en ? "Momentum equation (momentum conservation)" : "運動方程式（運動量保存）"}
          </p>
          <MathBlock
            tex={String.raw`\underbrace{\frac{\partial q}{\partial t}}_{\textcircled{1}\;\text{${en ? "local accel." : "局所加速度"}}} + \underbrace{\frac{\partial}{\partial x}\!\left(\frac{q^2}{h}\right)}_{\textcircled{2}\;\text{${en ? "advection" : "移流"}}} + \underbrace{g\,h\,\frac{\partial \eta}{\partial x}}_{\textcircled{3}\;\text{${en ? "water surface slope" : "水面勾配"}}} + \underbrace{\frac{g\,n^2\,q\,|q|}{h^{7/3}}}_{\textcircled{4}\;\text{${en ? "friction" : "摩擦"}}} = 0`}
          />
          <p className="mt-2 text-muted">
            {en
              ? <>Here the equation is written in conservation form (with <Math tex="q = hu" /> as the variable). <Math tex={String.raw`\eta = z_b + h`} /> is the water surface elevation. In this post, we look at how each of these terms is discretized.</>
              : <>ここでは保存形（<Math tex="q = hu" /> を変数とする形）で書いています。<Math tex={String.raw`\eta = z_b + h`} /> は水面標高です。本記事では、これら各項を「どう数値化するか」を一つずつ見ていきます。</>}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Spatial discretization frameworks ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Prerequisite: Three Spatial Discretization Frameworks"
              : "前提：空間離散化の3つの枠組み"}
          </h2>
          <p className="mb-4 text-muted">
            {en
              ? "Before understanding the discretization of each term, let us review the three main frameworks for dividing space into a grid. The choice of framework determines which discretization methods are available for each term."
              : "各項の離散化を理解する前に、空間を格子に分割する3つの大枠を確認します。どの枠組みを選ぶかで、各項の離散化手法が変わります。"}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Framework" : "枠組み"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Concept" : "考え方"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Grid" : "格子"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Representative model" : "代表モデル"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Finite Difference Method (FDM)" : "有限差分法（FDM）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Approximate derivatives by differences between neighboring points"
                      : "微分を隣接点の差分で近似"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Structured grid (square)" : "構造格子（正方形）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    LISFLOOD-FP, RIM2D
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Finite Volume Method (FVM)" : "有限体積法（FVM）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Enforce conservation law (inflow = outflow) for each cell"
                      : "各セルの保存則（流入＝流出）を満たす"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Structured or unstructured" : "構造 or 非構造"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    HEC-RAS 2D
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Finite Element Method (FEM)" : "有限要素法（FEM）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Approximate the solution with basis functions and minimize the weighted residual"
                      : "基底関数で解を近似し、重み付き残差を最小化"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Unstructured (triangular)" : "非構造（三角形）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    TELEMAC-2D
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-3 text-muted">
            {en ? (
              <>The following explanations are centered on the most intuitive framework, the <strong className="text-foreground">Finite Difference Method (FDM)</strong>, but the method lists for each term also mention FVM and FEM treatments.</>
            ) : (
              <>以下では最も直感的な<strong className="text-foreground">有限差分法（FDM）</strong>を軸に説明しますが、各項の解法リストではFVM・FEMでの扱いにも触れます。</>
            )}
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">
            {en ? "Staggered grid: variable placement" : "スタガード格子：変数の配置"}
          </p>
          <p className="mb-3 text-muted">
            {en ? (
              <>In FDM, a staggered grid that places water depth and fluxes at <strong className="text-foreground">offset positions</strong> is the standard.</>
            ) : (
              <>FDMでは、水深とフラックスを<strong className="text-foreground">ずらして配置</strong>するスタガード格子が標準です。</>
            )}
          </p>
          <div className="overflow-x-auto rounded border border-border bg-accent-light/30 px-4 py-4">
            <pre className="text-xs leading-relaxed text-muted">
{en
  ? `   q_{i-1/2}           q_{i+1/2}           q_{i+3/2}
      ↓                    ↓                    ↓
 ─────┼────────────────────┼────────────────────┼─────
      │                    │                    │
      │   h_i, η_i, z_i   │  h_{i+1}, η_{i+1}  │
      │                    │                    │
 ─────┼────────────────────┼────────────────────┼─────

 ←──────── Δx ────────→

 ● h, η, z  → Cell center (integer index): represents storage
 ● q        → Cell face (half-integer index): represents transfer between cells`
  : `   q_{i-1/2}           q_{i+1/2}           q_{i+3/2}
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
            {en
              ? "With this arrangement, the water surface difference between adjacent cells naturally becomes the driving force for flux, and the difference in fluxes naturally represents the change in water depth. Placing all variables at the same location (collocated grid) tends to produce checkerboard-pattern numerical oscillations."
              : "この配置により、隣接するセルの水面差が自然にフラックスの駆動力となり、フラックスの差が自然に水深の増減を表現します。同じ位置に全変数を置くと（コロケート格子）、チェッカーボード状の数値振動が生じやすくなります。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── Continuity equation ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Solving the Continuity Equation" : "連続方程式の解き方"}
          </h2>
          <p className="mb-3 text-muted">
            {en
              ? "The continuity equation has a simple structure and is discretized the same way in all models."
              : "連続方程式はシンプルな構造で、すべてのモデルで同じように離散化されます。"}
          </p>
          <MathBlock
            tex={String.raw`\frac{\partial h}{\partial t} + \frac{\partial q}{\partial x} = R`}
          />

          <p className="mt-3 mb-2 text-[11px] font-medium text-foreground">
            {en ? "Discretization" : "離散化"}
          </p>
          <p className="mb-2 text-muted">
            {en
              ? "We replace the time derivative with a forward difference and the spatial derivative with a central difference."
              : "時間微分を前進差分、空間微分を中心差分で置き換えます。"}
          </p>
          <MathBlock
            tex={String.raw`\frac{h_i^{n+1} - h_i^n}{\Delta t} + \frac{q_{i+1/2}^{n+1} - q_{i-1/2}^{n+1}}{\Delta x} = R`}
          />
          <p className="mt-2 mb-2 text-[11px] font-medium text-foreground">
            {en ? "Water depth update equation" : "水深の更新式"}
          </p>
          <MathBlock
            tex={String.raw`\boxed{\; h_i^{n+1} = h_i^{n} + \frac{\Delta t}{\Delta x}\left(q_{i-1/2}^{n+1} - q_{i+1/2}^{n+1}\right) + R \cdot \Delta t \;}`}
          />
          <p className="mt-3 text-muted">
            {en ? (
              <>This means: "change in cell water depth = water entering from the left - water leaving to the right + rainfall." Since this equation is straightforward, there is little difference between discretization methods. <strong className="text-foreground">The key question is how to compute the flux <Math tex={String.raw`q_{i+1/2}^{n+1}`} /> on the right-hand side</strong> — that is, how to solve each term of the momentum equation.</>
            ) : (
              <>「セルの水深の変化 = 左から入る水 − 右へ出る水 + 降雨」という直感的な意味です。この式は単純なので、離散化手法による違いはほとんどありません。<strong className="text-foreground">核心は、右辺のフラックス <Math tex={String.raw`q_{i+1/2}^{n+1}`} /> をどう求めるか</strong> — つまり運動方程式の各項をどう解くかにあります。</>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── Term 1: Local acceleration ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Term 1: Solving the Local Acceleration Term"
              : "① 局所加速度項の解き方"}
          </h2>
          <MathBlock tex={String.raw`\frac{\partial q}{\partial t}`} />
          <p className="mt-3 mb-4 text-muted">
            {en ? (
              <>This is the <strong className="text-foreground">time rate of change</strong> of discharge at a cell face. The question becomes: "how do we advance the flux from the current time step to the next?"</>
            ) : (
              <>セル境界での流量の<strong className="text-foreground">時間変化率</strong>です。「今のフラックスから次のフラックスへ、どう時間発展させるか」という問題になります。</>
            )}
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">
            {en ? "Available methods" : "利用可能な手法"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Method" : "手法"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Discretization" : "離散化"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Characteristics" : "特徴"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Used by" : "使用モデル"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Forward Euler (explicit)" : "前進Euler法（陽解法）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    <Math tex={String.raw`\frac{q^{n+1} - q^n}{\Delta t}`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Simple and ideal for parallelization. Time step constrained by CFL condition"
                      : "単純で並列化に最適。CFL条件で時間刻みに制約"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    LISFLOOD-FP, RIM2D
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Backward Euler (implicit)" : "後退Euler法（陰解法）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    <Math tex={String.raw`\frac{q^{n+1} - q^n}{\Delta t} = F(q^{n+1})`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Unconditionally stable; allows large time steps. Requires solving a system of equations"
                      : "無条件安定で大きな時間刻みが可能。連立方程式の求解が必要"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    HEC-RAS 2D
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Runge-Kutta method" : "Runge-Kutta法"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Multi-stage evaluation of intermediate values"
                      : "多段階で中間値を評価"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "High accuracy but computationally expensive. Used in research codes"
                      : "高精度だが計算量が多い。研究用コードで使用"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Some research codes" : "一部の研究コード"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "θ-method (Crank-Nicolson, etc.)"
                      : "θ法（Crank-Nicolson等）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Weighted average of explicit and implicit"
                      : "陽・陰の重み付き平均"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "θ=0.5 gives second-order accuracy. Also used by TELEMAC-2D"
                      : "θ=0.5で2次精度。TELEMAC-2Dでも使用"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    TELEMAC-2D
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            {en
              ? "Representative method: Forward Euler (LISFLOOD-FP / RIM2D)"
              : "代表的な手法：前進Euler法（LISFLOOD-FP / RIM2D）"}
          </p>
          <MathBlock
            tex={String.raw`\frac{\partial q}{\partial t} \;\approx\; \frac{q_{i+1/2}^{n+1} - q_{i+1/2}^{n}}{\Delta t}`}
          />
          <p className="mt-2 text-muted">
            {en ? (
              <>The next step <Math tex="n+1" /> is computed using only the values at the current step <Math tex="n" />. Since each cell face can be <strong className="text-foreground">computed independently</strong>, this is ideal for massively parallel GPU computation. However, if the time step is too large, the solution diverges, so it is constrained by the CFL condition (discussed later).</>
            ) : (
              <>現在のステップ <Math tex="n" /> の値だけで次のステップ{" "}<Math tex="n+1" /> を計算します。各セル境界で<strong className="text-foreground">独立に計算できる</strong>ため、GPUの大規模並列化に最適です。ただし、時間刻みが大きすぎると数値が発散するため、CFL条件（後述）による制約を受けます。</>
            )}
          </p>

          <div className="mt-4 rounded border border-border bg-accent-light/30 p-4">
            <p className="text-[11px] font-medium text-foreground">
              {en ? "Comparison with implicit schemes" : "陰解法との比較"}
            </p>
            <p className="mt-1 text-muted">
              {en
                ? "HEC-RAS 2D uses an implicit scheme, which relaxes time step constraints but requires solving a system of equations for all cells at each step. While this may reduce accuracy, it offers the practical advantage of stable computation with large time steps."
                : "HEC-RAS 2Dは陰解法を採用しており、時間刻みの制約が緩い代わりに、毎ステップ全セルの連立方程式を解く必要があります。これは精度が低下する可能性がありますが、実務的には大きな時間刻みで安定に計算できる利点があります。"}
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── Term 2: Advection ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Term 2: Solving the Advection Term"
              : "② 移流加速度項の解き方"}
          </h2>
          <MathBlock
            tex={String.raw`\frac{\partial}{\partial x}\!\left(\frac{q^2}{h}\right)`}
          />
          <p className="mt-3 mb-4 text-muted">
            {en ? (
              <>This represents the effect of the flow transporting momentum itself. It is the most numerically challenging term; improper treatment causes numerical oscillation or dissipation. <strong className="text-foreground">Local inertia models (LISFLOOD-FP, RIM2D) omit this term</strong>, greatly simplifying the computation. It is needed only by models solving the full SWE.</>
            ) : (
              <>流れが運動量自体を輸送する効果を表します。数値的に最も厄介な項であり、不適切に扱うと数値振動や散逸が生じます。<strong className="text-foreground">局所慣性モデル（LISFLOOD-FP, RIM2D）ではこの項を省略</strong>するため計算が大幅に単純化されます。完全SWEを解くモデルでのみ必要です。</>
            )}
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">
            {en ? "Available methods" : "利用可能な手法"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Method" : "手法"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Concept" : "考え方"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Accuracy" : "精度"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Used by" : "使用モデル"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "First-order upwind" : "1次風上差分"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Use the upstream value in the flow direction"
                      : "流れの上流側の値を使う"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "1st order. Stable but large numerical diffusion"
                      : "1次。安定だが数値拡散が大きい"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Basic FDM codes" : "基本的なFDMコード"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Godunov-type (Riemann solver)" : "Godunov型（リーマンソルバー）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Solve the Riemann problem at cell interfaces"
                      : "セル境界でリーマン問題を解く"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Can capture shocks. Standard for FVM"
                      : "衝撃波を捕捉可能。FVMの標準"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    HEC-RAS 2D (Full)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "MUSCL reconstruction + Riemann solver"
                      : "MUSCL再構築 + リーマンソルバー"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Linear interpolation within cells to improve interface values"
                      : "セル内で線形補間→境界値を高精度化"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "2nd order. Limiters suppress oscillations"
                      : "2次精度。リミッターで振動を抑制"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "High-accuracy research codes" : "研究用高精度コード"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Method of characteristics + FEM"
                      : "特性曲線法 + FEM"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Track advection along flow characteristics"
                      : "流れに沿って移流を追跡"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Stable even with large time steps"
                      : "大きな時間刻みでも安定"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    TELEMAC-2D
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Omit" : "省略する"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Remove the advection term from the equation"
                      : "移流項を方程式から削除"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? (
                      <>Valid when <Math tex={String.raw`Fr < 0.5`} /></>
                    ) : (
                      <><Math tex={String.raw`Fr < 0.5`} /> で妥当</>
                    )}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    LISFLOOD-FP, RIM2D, RRI
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            {en
              ? "Representative method: Roe approximate Riemann solver (HEC-RAS and other FVM codes)"
              : "代表的な手法：Roe近似リーマンソルバー（HEC-RAS等のFVM）"}
          </p>
          <p className="mb-3 text-muted">
            {en ? (
              <>When there are different states on the left and right of a cell face (<Math tex={String.raw`h_L, q_L`} /> and{" "}<Math tex={String.raw`h_R, q_R`} />), we solve the "Riemann problem" at each cell face to determine how the discontinuity propagates.</>
            ) : (
              <>セル境界の左右に異なる状態（<Math tex={String.raw`h_L, q_L`} /> と{" "}<Math tex={String.raw`h_R, q_R`} />）があるとき、その不連続面がどう伝播するかを解く「リーマン問題」を各セル境界で解きます。</>
            )}
          </p>

          <div className="rounded border border-border p-4">
            <p className="mb-2 text-[11px] font-medium text-foreground">
              {en ? "Roe solver flux computation" : "Roeソルバーのフラックス計算"}
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
                      {en
                        ? "Fluxes computed from left and right states"
                        : "左右の状態から計算したフラックス"}
                    </td>
                  </tr>
                  <tr className="bg-accent-light/50">
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      <Math tex={String.raw`\tilde{\lambda}_k`} />
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? (
                        <>Eigenvalues at Roe-averaged state (wave propagation speeds):{" "}<Math tex={String.raw`\tilde{u} \pm \sqrt{g\tilde{h}}`} /></>
                      ) : (
                        <>Roe平均での固有値（波の伝播速度）：{" "}<Math tex={String.raw`\tilde{u} \pm \sqrt{g\tilde{h}}`} /></>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      <Math tex={String.raw`\tilde{\alpha}_k`} />
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en
                        ? "Wave strengths (coefficients from decomposing the state difference into eigenvectors)"
                        : "波の強度（左右の状態差を固有ベクトルに分解した係数）"}
                    </td>
                  </tr>
                  <tr className="bg-accent-light/50">
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      <Math tex={String.raw`\tilde{e}_k`} />
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      {en ? "Eigenvectors" : "固有ベクトル"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-muted">
              {en
                ? "The first term is a simple average of left and right fluxes; the second term is a correction based on wave propagation directions, enabling accurate capture of shocks (hydraulic jumps) and rarefaction waves. The higher computational cost buys the ability to handle supercritical flow, hydraulic jumps, and rapidly varying flow stably."
                : "第1項が左右の単純平均、第2項が波の伝播方向に応じた補正で、衝撃波（跳水）や疎密波を正確に捕捉できます。計算コストが高い分、射流・跳水を含む流れを安定に扱えます。"}
            </p>
          </div>

          <div className="mt-4 rounded border border-border bg-accent-light/30 p-4">
            <p className="text-[11px] font-medium text-foreground">
              {en
                ? "Why can local inertia models omit this term?"
                : "なぜ局所慣性モデルはこの項を省略できるのか"}
            </p>
            <p className="mt-1 text-muted">
              {en ? (
                <>de Almeida &amp; Bates (2013) reported that the contribution of the advection term is often less than 1% in flood inundation. For gentle flows where the Froude number <Math tex={String.raw`Fr = u/\sqrt{gh}`} /> is below 0.5, omitting it has negligible impact on accuracy. By omitting the advection term, the Riemann solver becomes unnecessary, drastically simplifying the computation.</>
              ) : (
                <>de Almeida &amp; Bates (2013) は、洪水氾濫では移流項の寄与が全体の1%未満であることが多いと報告しています。フルード数 <Math tex={String.raw`Fr = u/\sqrt{gh}`} /> が 0.5 未満の緩やかな流れでは省略しても精度への影響はわずかです。そして移流項を省略することで、リーマンソルバーが不要になり、計算が劇的に単純化されます。</>
              )}
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── Term 3: Water surface slope ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Term 3: Solving the Water Surface Slope Term"
              : "③ 水面勾配項の解き方"}
          </h2>
          <MathBlock
            tex={String.raw`g\,h\,\frac{\partial \eta}{\partial x}`}
          />
          <p className="mt-3 mb-4 text-muted">
            {en ? (
              <>This is the <strong className="text-foreground">pressure driving force</strong> that pushes flow from the higher water surface to the lower side. It is the most fundamental term, retained by all models, and the discretization approach is relatively consistent across models.</>
            ) : (
              <>水面が高い側から低い側へ流れを押す<strong className="text-foreground">圧力駆動力</strong>です。全てのモデルで保持される最も基本的な項であり、離散化の方法もモデル間で比較的共通しています。</>
            )}
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">
            {en ? "Available methods" : "利用可能な手法"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Method" : "手法"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Concept" : "考え方"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Notes" : "注意点"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Central difference" : "中心差分"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Approximate the gradient from the difference of water surface elevations at left and right cells"
                      : "左右セルの水面標高の差で勾配を近似"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Naturally consistent with staggered grids. Most common"
                      : "スタガード格子と自然に整合。最も一般的"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Well-balanced method" : "well-balanced法"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Reconstruction that exactly preserves hydrostatic equilibrium"
                      : "静水圧平衡を正確に保つ再構築"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Prevents spurious flow at steep topography changes"
                      : "急な地形変化で偽の流れを防止"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Surface gradient method" : "水面標高法（surface gradient method）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? (
                      <>Reconstruct <Math tex={String.raw`\eta`} /> directly (without separating <Math tex={String.raw`h + z_b`} />)</>
                    ) : (
                      <><Math tex={String.raw`\eta`} /> を直接再構築（<Math tex={String.raw`h + z_b`} /> を分離しない）</>
                    )}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Effective for handling bed discontinuities in FVM"
                      : "FVMで河床不連続を扱うときに有効"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            {en
              ? "Representative method: Central difference (LISFLOOD-FP / RIM2D)"
              : "代表的な手法：中心差分（LISFLOOD-FP / RIM2D）"}
          </p>
          <p className="mb-3 text-muted">
            {en ? (
              <>The water surface gradient at cell face <Math tex={String.raw`i+1/2`} /> is computed directly from the difference of water surface elevations of the left and right cells.</>
            ) : (
              <>セル境界 <Math tex={String.raw`i+1/2`} /> における水面勾配は、左右セルの水面標高の差で直接求めます。</>
            )}
          </p>
          <MathBlock
            tex={String.raw`g\,h_f\,\frac{\partial \eta}{\partial x}\bigg|_{i+1/2} \;\approx\; g\,h_f \cdot \frac{\eta_{i+1}^n - \eta_i^n}{\Delta x}`}
          />
          <p className="mt-3 mb-2 text-muted">
            {en ? (
              <>Here <Math tex="h_f" /> is the <strong className="text-foreground">representative water depth</strong> at the cell face, defined as follows.</>
            ) : (
              <>ここで <Math tex="h_f" /> はセル境界での<strong className="text-foreground">代表水深</strong>で、以下のように定義されます。</>
            )}
          </p>
          <MathBlock
            tex={String.raw`h_f = \max\!\big(\eta_i,\; \eta_{i+1}\big) - \max\!\big(z_{b,i},\; z_{b,i+1}\big)`}
          />

          <div className="mt-4 rounded border border-border bg-accent-light/30 p-4">
            <p className="text-[11px] font-medium text-foreground">
              {en ? (
                <>Why is <Math tex="h_f" /> defined this way?</>
              ) : (
                <>なぜ <Math tex="h_f" /> をこう定義するのか</>
              )}
            </p>
            <p className="mt-1 text-muted">
              {en ? (
                <>When adjacent cells have different bed elevations (levees, steps), simply using <Math tex={String.raw`(h_i + h_{i+1})/2`} /> would generate flux even when water is not actually flowing. With the above definition, when one side's water surface is below the other's bed elevation, <Math tex={String.raw`h_f \leq 0`} /> and the flux naturally becomes zero.</>
              ) : (
                <>左右のセルで地盤高が異なる場合（堤防や段差）、単純に <Math tex={String.raw`(h_i + h_{i+1})/2`} /> とすると実際に水が流れていない状況でもフラックスが発生してしまいます。上記の定義なら、片側の水面が相手の地盤より低い場合に{" "}<Math tex={String.raw`h_f \leq 0`} /> となり、フラックスが自然にゼロになります。</>
              )}
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── Term 4: Friction ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Term 4: Solving the Friction Term"
              : "④ 摩擦項の解き方"}
          </h2>
          <MathBlock
            tex={String.raw`\frac{g\,n^2\,q\,|q|}{h^{7/3}}`}
          />
          <p className="mt-3 mb-4 text-muted">
            {en ? (
              <>This is the deceleration effect due to friction with the riverbed and ground surface. Based on Manning's equation, friction increases as water depth decreases. Numerically, since the <strong className="text-foreground">denominator explodes as water depth approaches zero</strong>, the discretization method has a major impact on stability.</>
            ) : (
              <>河床・地表面との摩擦による減速効果です。Manning式に基づいており、水深が小さいほど摩擦が強くなります。数値計算上、<strong className="text-foreground">水深→0で分母が爆発する</strong>ため、離散化の方法が安定性に大きく影響します。</>
            )}
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">
            {en ? "Available methods" : "利用可能な手法"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Method" : "手法"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Discretization" : "離散化"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Stability" : "安定性"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Used by" : "使用モデル"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Fully explicit" : "完全陽的"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    <Math tex={String.raw`\frac{g n^2 q^n |q^n|}{h_f^{7/3}}`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Prone to instability at shallow depths"
                      : "浅い水深で不安定になりやすい"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    —
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Semi-implicit" : "半陰的（semi-implicit）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? (
                      <><Math tex={String.raw`|q|`} /> at <Math tex="n" />, <Math tex="q" /> at <Math tex="n+1" /></>
                    ) : (
                      <><Math tex={String.raw`|q|`} /> は <Math tex="n" />、<Math tex="q" /> は <Math tex="n+1" /> で評価</>
                    )}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Greatly improved. No system of equations needed"
                      : "大幅に改善。連立方程式不要"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    LISFLOOD-FP, RIM2D
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Fully implicit" : "完全陰的"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? (
                      <>Everything evaluated at <Math tex="n+1" /></>
                    ) : (
                      <>全てを <Math tex="n+1" /> で評価</>
                    )}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Most stable. Requires iterative solver for nonlinear systems"
                      : "最も安定。非線形連立方程式の反復解法が必要"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    HEC-RAS, TELEMAC-2D
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Splitting" : "分割法（splitting）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Separate friction as a source term and solve independently"
                      : "摩擦をソース項として分離し独立に解く"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Good compatibility with FVM"
                      : "FVMとの相性がよい"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "FVM research codes" : "FVM系研究コード"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            {en
              ? "Representative method: Semi-implicit treatment (LISFLOOD-FP / RIM2D)"
              : "代表的な手法：半陰的処理（LISFLOOD-FP / RIM2D）"}
          </p>
          <p className="mb-3 text-muted">
            {en ? (
              <>The <Math tex={String.raw`q|q|`} /> in the friction term is decomposed as <Math tex={String.raw`|q^n| \cdot q^{n+1}`} />.</>
            ) : (
              <>摩擦項の <Math tex={String.raw`q|q|`} /> を、<Math tex={String.raw`|q^n| \cdot q^{n+1}`} /> に分解します。</>
            )}
          </p>

          <div className="mb-4 rounded border border-border p-4">
            <p className="mb-2 text-[11px] font-medium text-foreground">
              {en
                ? "Why go semi-implicit? The problem with fully explicit"
                : "なぜ半陰的にするのか — 完全陽的の問題"}
            </p>
            <p className="text-muted">
              {en ? (
                <>With a fully explicit computation, when water depth is small, the friction term <Math tex={String.raw`gn^2 q^n |q^n| / h_f^{7/3}`} />{" "}becomes extremely large, causing the flux at the next step to <strong className="text-foreground">reverse sign (a physically impossible backflow)</strong>.</>
              ) : (
                <>完全陽的に計算すると、水深が小さいとき摩擦項{" "}<Math tex={String.raw`gn^2 q^n |q^n| / h_f^{7/3}`} />{" "}が極端に大きくなり、次ステップのフラックスが<strong className="text-foreground">符号反転（物理的にあり得ない逆流）</strong>してしまいます。</>
              )}
            </p>
          </div>

          <p className="mb-2 text-muted">
            {en ? "With semi-implicit discretization:" : "半陰的に離散化すると："}
          </p>
          <MathBlock
            tex={String.raw`\frac{g\,n^2\,q\,|q|}{h_f^{7/3}} \;\approx\; \underbrace{\frac{g\,n^2\,|q^n|}{h_f^{7/3}}}_{\text{${en ? "known coefficient" : "既知の係数"}}} \cdot \underbrace{q^{n+1}}_{\text{${en ? "unknown" : "未知"}}}`}
          />
          <p className="mt-2 text-muted">
            {en ? (
              <>This makes the expression <strong className="text-foreground">linear</strong> in <Math tex={String.raw`q^{n+1}`} />. Rearranging the entire momentum equation:</>
            ) : (
              <>こうすると <Math tex={String.raw`q^{n+1}`} /> に対して<strong className="text-foreground">線形</strong>になります。運動方程式全体を整理すると：</>
            )}
          </p>
          <MathBlock
            tex={String.raw`q^{n+1}\!\left(1 + \frac{g\,n^2\,|q^n|\,\Delta t}{h_f^{7/3}}\right) = q^n - g\,h_f\,\Delta t\,\frac{\eta_{i+1} - \eta_i}{\Delta x}`}
          />
          <p className="mt-2 text-muted">
            {en
              ? "Since the denominator (1 + ...) is always 1 or greater, the flux is always corrected in the damping direction. As water depth decreases, the denominator grows, friction automatically strengthens, and flux is suppressed — a physically correct behavior."
              : "分母の 1 + (…) は常に1以上なので、フラックスは必ず減衰方向に修正されます。水深が小さくなるほど分母が大きくなり、摩擦が自動的に強まってフラックスが抑制される — 物理的に正しい振る舞いです。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ────────────────────────────────────────── */}
        {/* ── Putting it all together ── */}
        {/* ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Putting It All Together: The Flux Update Equation"
              : "全体を組み合わせる：フラックス更新式"}
          </h2>
          <p className="mb-3 text-muted">
            {en
              ? "Substituting the discretizations from terms 1, 3, and 4 into the momentum equation and rearranging yields the flux update equation of the local inertia model (LISFLOOD-FP / RIM2D)."
              : "①③④の離散化を運動方程式に代入して整理すると、局所慣性モデル（LISFLOOD-FP / RIM2D）のフラックス更新式が得られます。"}
          </p>
          <MathBlock
            tex={String.raw`\boxed{\; q_{i+1/2}^{n+1} = \frac{\overbrace{q_{i+1/2}^{n}}^{\textcircled{1}\;\text{${en ? "inertia" : "慣性"}}} \;-\; \overbrace{g\,h_f\,\Delta t\;\dfrac{\eta_{i+1} - \eta_i}{\Delta x}}^{\textcircled{3}\;\text{${en ? "water surface slope" : "水面勾配"}}}}{\underbrace{1 \;+\; \dfrac{g\,n^2\,|q_{i+1/2}^{n}|\,\Delta t}{h_f^{7/3}}}_{\textcircled{4}\;\text{${en ? "friction damping" : "摩擦による減衰"}}}} \;}`}
          />
          <p className="mt-3 text-muted">
            {en
              ? "All the physics of the local inertia approximation is condensed into this single equation. Term 2 (advection) is omitted, so it does not appear. Each cell face can be computed independently, making it ideal for massively parallel GPU processing."
              : "この1行の式に、局所慣性近似の物理が凝縮されています。②移流項は省略されているため、式に現れません。各セル境界で独立に計算でき、GPUの大規模並列処理に理想的です。"}
          </p>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            {en ? "Computation flow (one time step)" : "計算の流れ（1タイムステップ）"}
          </p>
          <div className="space-y-2">
            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                1
              </span>
              <p className="text-muted">
                {en ? (
                  <>Compute <Math tex="h_f" /> at all cell faces</>
                ) : (
                  <>全セル境界で <Math tex="h_f" /> を計算</>
                )}
              </p>
            </div>
            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                2
              </span>
              <p className="text-muted">
                {en ? (
                  <>Update flux <Math tex={String.raw`q_{i+1/2}^{n+1}`} /> using the above equation (x- and y-directions)</>
                ) : (
                  <>上式でフラックス <Math tex={String.raw`q_{i+1/2}^{n+1}`} /> を更新（x方向・y方向）</>
                )}
              </p>
            </div>
            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                3
              </span>
              <p className="text-muted">
                {en ? (
                  <>Update water depth <Math tex={String.raw`h_i^{n+1}`} /> via the continuity equation</>
                ) : (
                  <>連続方程式で水深 <Math tex={String.raw`h_i^{n+1}`} /> を更新</>
                )}
              </p>
            </div>
            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                4
              </span>
              <p className="text-muted">
                {en ? (
                  <>Determine the next <Math tex={String.raw`\Delta t`} /> from the CFL condition</>
                ) : (
                  <>CFL条件で次の <Math tex={String.raw`\Delta t`} /> を決定</>
                )}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── CFL condition ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Stability Condition: The CFL Condition" : "安定条件：CFL条件"}
          </h2>
          <p className="mb-3 text-muted">
            {en
              ? "In explicit schemes, stability requires that the information propagation speed does not exceed one cell per time step."
              : "陽解法では、情報の伝播速度が1タイムステップで1セルを超えないことが安定の条件です。"}
          </p>
          <MathBlock
            tex={String.raw`\Delta t \;\leq\; \alpha \cdot \frac{\Delta x}{\sqrt{g \cdot h_{\max}}}`}
          />
          <p className="mt-2 text-muted">
            {en ? (
              <><Math tex={String.raw`\alpha`} /> is the CFL number (typically 0.2-0.7), <Math tex={String.raw`h_{\max}`} /> is the maximum water depth in the domain, and <Math tex={String.raw`\sqrt{gh_{\max}}`} /> is the shallow-water wave propagation speed.</>
            ) : (
              <><Math tex={String.raw`\alpha`} /> はCFL数（通常0.2〜0.7）、<Math tex={String.raw`h_{\max}`} /> は領域内の最大水深、<Math tex={String.raw`\sqrt{gh_{\max}}`} /> は浅水波の伝播速度です。</>
            )}
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
                    <Math tex={String.raw`\Delta t_{\max}`} />
                    {en ? " (" : "（"}<Math tex={String.raw`\alpha\!=\!0.5`} />{en ? ")" : "）"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Relative cost" : "計算量の目安"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">10 m</td>
                  <td className="border border-border px-3 py-2 text-muted">1 m</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">1.60 s</td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Baseline" : "基準"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">5 m</td>
                  <td className="border border-border px-3 py-2 text-muted">1 m</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">0.80 s</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "×8" : "×8"}</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">2 m</td>
                  <td className="border border-border px-3 py-2 text-muted">1 m</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">0.32 s</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "×50" : "×50"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">2 m</td>
                  <td className="border border-border px-3 py-2 text-muted">3 m</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">0.18 s</td>
                  <td className="border border-border px-3 py-2 text-muted">{en ? "×89" : "×89"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en ? (
              <>Halving the resolution means 4x the cells × 2x the steps = roughly <strong className="text-foreground">8x</strong> the computational cost. This is why GPU parallelization is essential for high-resolution simulations. Implicit schemes are free from this constraint and can use large time steps, but they incur the cost of solving a system of equations at each step.</>
            ) : (
              <>解像度を半分にすると、セル数が4倍×ステップ数が2倍＝計算量が約<strong className="text-foreground">8倍</strong>に。これが高解像度計算にGPU並列化が不可欠な理由です。陰解法はこの制約がないため大きな時間刻みが取れますが、毎ステップの連立方程式の求解コストが加わります。</>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Wetting and drying ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Wetting and Drying Treatment"
              : "乾湿境界（Wetting and Drying）の扱い"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>During the wetting (water spreading) and drying (water receding) processes, water depth approaches zero and the denominator <Math tex={String.raw`h^{7/3}`} /> of the friction term becomes extremely small. The following three countermeasures are combined.</>
            ) : (
              <>水が広がっていく（wetting）過程と退水（drying）する過程では、水深がゼロに近づき摩擦項の分母 <Math tex={String.raw`h^{7/3}`} /> が極端に小さくなります。以下の3つの対策が組み合わされます。</>
            )}
          </p>

          <div className="space-y-3">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "1. Threshold depth" : "① 閾値水深"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>Set a minimum depth <Math tex={String.raw`h_{\min}`} /> (e.g., 10⁻³ m); if <Math tex={String.raw`h_f < h_{\min}`} />, set flux to zero.</>
                ) : (
                  <>最小水深 <Math tex={String.raw`h_{\min}`} />（例: 10⁻³ m）を設定し、<Math tex={String.raw`h_f < h_{\min}`} /> ならフラックスをゼロに。</>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "2. Flux limiter" : "② フラックス制限"}
              </p>
              <p className="text-muted">
                {en
                  ? "Set an upper limit so that all water in a cell is not drained in a single step."
                  : "1ステップでセルの水を全て排出しないよう上限を設定。"}
              </p>
              <MathBlock
                tex={String.raw`|q_{i+1/2}^{n+1}| \;\leq\; \frac{h_i \cdot \Delta x}{N_{\text{out}} \cdot \Delta t}`}
              />
              <p className="mt-1 text-muted">
                {en ? (
                  <><Math tex={String.raw`N_{\text{out}}`} /> is the number of outflow edges (up to 4 in 2D). This guarantees water depth does not become negative.</>
                ) : (
                  <><Math tex={String.raw`N_{\text{out}}`} /> は流出する辺の数（2Dでは最大4）。水深が負にならないことを保証します。</>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "3. Natural cutoff via interface depth definition"
                  : "③ 境界水深の定義による自然な遮断"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>With <Math tex={String.raw`h_f = \max(\eta_i, \eta_{i+1}) - \max(z_{b,i}, z_{b,i+1})`} />, when the water surface is below the neighboring bed elevation, <Math tex={String.raw`h_f \leq 0`} /> and flux is automatically zero.</>
                ) : (
                  <><Math tex={String.raw`h_f = \max(\eta_i, \eta_{i+1}) - \max(z_{b,i}, z_{b,i+1})`} /> により、水面が相手側の地盤より低ければ{" "}<Math tex={String.raw`h_f \leq 0`} /> → フラックス自動ゼロ。</>
                )}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Summary ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Summary: Solution Methods by Term"
              : "まとめ：項ごとの解法の全体像"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Term" : "項"}
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
                    {en ? "1. Local acceleration" : "① 局所加速度"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Forward Euler (explicit)" : "前進Euler（陽的）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Backward Euler (implicit)" : "後退Euler（陰的）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "θ-method" : "θ法"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "2. Advection" : "② 移流"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Omitted" : "省略"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "FVM + Riemann solver" : "FVM + リーマンソルバー"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Method of characteristics / SUPG" : "特性曲線法 / SUPG"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "3. Water surface slope" : "③ 水面勾配"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Central difference" : "中心差分"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "FVM gradient reconstruction" : "FVM勾配再構築"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "FEM basis function gradient" : "FEM基底関数の勾配"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "4. Friction" : "④ 摩擦"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Semi-implicit" : "半陰的"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Fully implicit" : "完全陰的"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Fully implicit" : "完全陰的"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "CFL constraint" : "CFL制約"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Yes (small Δt)" : "あり（小さい Δt）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Relaxed or none" : "緩い or なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Relaxed" : "緩い"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "GPU parallelization" : "GPU並列化"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Ideal" : "最適"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Difficult" : "困難"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Difficult" : "困難"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            {en
              ? "The reason local inertia models are fast is that omitting term 2 (advection) eliminates the need for a Riemann solver, and semi-implicit treatment of term 4 (friction) removes the need for solving a system of equations. All computations reduce to a single algebraic expression per cell face, enabling massive parallelization on GPUs."
              : "局所慣性モデルが高速な理由は、②移流項を省略したことでリーマンソルバーが不要になり、④摩擦を半陰的に処理することで連立方程式の求解も不要になった点にあります。全ての計算が「1セル境界につき1行の代数式」に帰着するため、GPUで大規模に並列化できます。"}
          </p>
          <p className="mt-2 text-muted">
            {en
              ? "On the other hand, full SWE models (HEC-RAS, TELEMAC-2D) can reproduce supercritical flow, hydraulic jumps, and rapidly varying flow at the cost of higher computation. Choosing the right model based on the flow characteristics is important."
              : "一方、完全SWEモデル（HEC-RAS, TELEMAC-2D）は計算コストが高い分、射流・跳水・急変流を再現できます。対象とする流れの性質に応じて使い分けることが重要です。"}
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
