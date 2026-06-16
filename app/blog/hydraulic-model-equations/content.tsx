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
            2026-05-24
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Comparing Governing Equations of Hydraulic Models — Full SWE, Local Inertia, and Diffusion Wave"
              : "水理モデルの支配方程式を比較する — 完全SWE・局所慣性・拡散波の違い"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "LISFLOOD-FP, HEC-RAS, TELEMAC-2D, RRI — representative hydraulic models used for flood simulation are all based on the Shallow Water Equations, but they differ in which terms are retained and which are neglected. This article explains the physical meaning of each term in the momentum equation and compares the approximation levels across models using their mathematical formulations."
              : "LISFLOOD-FP、HEC-RAS、TELEMAC-2D、RRI — 洪水シミュレーションに使われる代表的な水理モデルは、いずれも浅水方程式（Shallow Water Equations）を基礎としていますが、どの項を残しどの項を省略するかが異なります。本記事では運動方程式の各項の物理的意味を解説し、モデルごとの近似レベルを数式で比較します。"}
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* ── 浅水方程式の全体像 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Overview of the Shallow Water Equations (SWE)"
              : "浅水方程式（SWE）の全体像"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The two-dimensional shallow water equations consist of
                the <strong className="text-foreground">continuity equation</strong> (mass conservation) and
                the <strong className="text-foreground">momentum equation</strong> (momentum conservation).
                They are derived from the three-dimensional Navier-Stokes equations by integrating over the water depth.
              </>
            ) : (
              <>
                2次元の浅水方程式は、
                <strong className="text-foreground">連続方程式</strong>（質量保存）と
                <strong className="text-foreground">運動方程式</strong>（運動量保存）から成ります。
                水深方向に積分することで、3次元のNavier-Stokes方程式から導かれます。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 連続方程式 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Continuity Equation (Common to All Models)"
              : "連続方程式（全モデル共通）"}
          </h2>
          <MathBlock
            tex={String.raw`\frac{\partial h}{\partial t} + \frac{\partial (hu)}{\partial x} + \frac{\partial (hv)}{\partial y} = R`}
          />
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Symbol" : "記号"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Meaning" : "意味"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex="h" />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Water depth [m]" : "水深 [m]"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex="u, \; v" />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Depth-averaged velocity in x and y directions [m/s]"
                      : "x方向・y方向の断面平均流速 [m/s]"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex="R" />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Source term for rainfall, infiltration, etc. [m/s]"
                      : "降雨・浸透などのソース項 [m/s]"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en ? (
              <>
                This equation states that &ldquo;the rate of change of water depth at a given location equals the difference between inflow and outflow,&rdquo;
                representing the <strong className="text-foreground">law of mass conservation</strong>.
                It is common to all models. The differences in approximation level appear in the momentum equation.
              </>
            ) : (
              <>
                この式は「ある場所の水深の変化速度は、流入量と流出量の差に等しい」
                という<strong className="text-foreground">質量保存則</strong>を表しており、
                すべてのモデルで共通です。近似レベルの違いは運動方程式に現れます。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 完全運動方程式 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Momentum Equation (Full Form)"
              : "運動方程式（完全形）"}
          </h2>
          <p className="mb-4 text-muted">
            {en
              ? "The x-direction momentum equation, written in non-conservative form, consists of the following four terms. The y-direction equation has the same structure."
              : "x方向の運動方程式を非保存形で書くと、以下の4つの項で構成されます。y方向も同様の構造です。"}
          </p>
          <MathBlock
            tex={String.raw`\underbrace{\frac{\partial u}{\partial t}}_{\textcircled{1}\;\text{局所加速度}} + \underbrace{u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}}_{\textcircled{2}\;\text{移流加速度}} = \underbrace{-g\frac{\partial \eta}{\partial x}}_{\textcircled{3}\;\text{水面勾配}} + \underbrace{\left(-g\,S_{f,x}\right)}_{\textcircled{4}\;\text{摩擦}}`}
          />
        </section>

        <hr className="border-border" />

        {/* ── 各項の解説 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Physical Meaning of Each Term"
              : "各項の物理的意味"}
          </h2>

          {/* 項1 */}
          <div className="mb-5 rounded border border-border p-4">
            <p className="mb-2 text-sm font-medium text-foreground">
              {en
                ? "① Local Acceleration"
                : "① 局所加速度項（Local Acceleration）"}
            </p>
            <MathBlock tex={String.raw`\frac{\partial u}{\partial t}`} />
            <p className="text-muted">
              {en ? (
                <>
                  The time rate of change of velocity at a{" "}
                  <strong className="text-foreground">fixed point</strong>.
                  This term is necessary to represent rapid flow variations such as the onset of flood waves or tsunamis.
                  Omitting this term means that{" "}
                  <strong className="text-foreground">unsteady flow behavior</strong>{" "}
                  can only be partially captured.
                </>
              ) : (
                <>
                  ある<strong className="text-foreground">固定地点</strong>での流速の時間変化率。
                  急激な流れの変動（洪水波の立ち上がりや津波など）を表現するために必要です。
                  この項を省略すると、流れの<strong className="text-foreground">非定常性</strong>を
                  部分的にしか表現できなくなります。
                </>
              )}
            </p>
          </div>

          {/* 項2 */}
          <div className="mb-5 rounded border border-border p-4">
            <p className="mb-2 text-sm font-medium text-foreground">
              {en
                ? "② Advective Acceleration"
                : "② 移流加速度項（Advective Acceleration）"}
            </p>
            <MathBlock
              tex={String.raw`u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}`}
            />
            <p className="text-muted">
              {en ? (
                <>
                  Acceleration due to{" "}
                  <strong className="text-foreground">spatial variation</strong>{" "}
                  in velocity.
                  This represents phenomena such as flow acceleration through constrictions and deceleration at confluences.
                  It becomes important where abrupt topographic changes occur (around bridge piers, sudden contractions and expansions),
                  but its influence is often small in gradually spreading flows such as floodplain inundation.
                </>
              ) : (
                <>
                  流速の<strong className="text-foreground">空間的変化</strong>による加速。
                  流れが狭窄部で加速したり、合流点で減速したりする現象を表します。
                  急激な地形変化がある場所（橋脚周り、急縮小・急拡大）で重要になりますが、
                  洪水氾濫のように緩やかに広がる流れでは影響が小さいことが多いです。
                </>
              )}
            </p>
          </div>

          {/* 項3 */}
          <div className="mb-5 rounded border border-border p-4">
            <p className="mb-2 text-sm font-medium text-foreground">
              {en
                ? "③ Water Surface Gradient"
                : "③ 水面勾配項（Water Surface Gradient）"}
            </p>
            <MathBlock
              tex={String.raw`-g\frac{\partial \eta}{\partial x} \qquad \text{where} \quad \eta = z_b + h`}
            />
            <p className="text-muted">
              {en ? (
                <>
                  The pressure-driven force due to the spatial gradient of the water surface elevation{" "}
                  <Math tex={String.raw`\eta`} /> (= bed elevation{" "}
                  <Math tex="z_b" /> + water depth <Math tex="h" />
                  ). This is the force that drives flow from higher to lower water surfaces.
                  It is the most fundamental term,{" "}
                  <strong className="text-foreground">
                    retained at all approximation levels
                  </strong>.
                </>
              ) : (
                <>
                  水面標高 <Math tex={String.raw`\eta`} />（= 河床標高{" "}
                  <Math tex="z_b" /> + 水深 <Math tex="h" />
                  ）の空間勾配による圧力駆動力。
                  水面が高い側から低い側へ流れを駆動する力です。
                  これは<strong className="text-foreground">
                    すべての近似レベルで保持
                  </strong>
                  される最も基本的な項です。
                </>
              )}
            </p>
          </div>

          {/* 項4 */}
          <div className="mb-5 rounded border border-border p-4">
            <p className="mb-2 text-sm font-medium text-foreground">
              {en
                ? "④ Friction Term"
                : "④ 摩擦項（Friction）"}
            </p>
            <MathBlock
              tex={String.raw`-g\,S_{f,x} = -g \, \frac{n^2 \, u \sqrt{u^2+v^2}}{h^{4/3}}`}
            />
            <p className="text-muted">
              {en ? (
                <>
                  The decelerating effect due to friction with the riverbed and land surface,
                  expressed using Manning&apos;s roughness coefficient <Math tex="n" />.
                  The shallower the water depth and the higher the velocity, the greater the frictional effect.
                  Like the water surface gradient, this term is{" "}
                  <strong className="text-foreground">
                    retained in all models
                  </strong>.
                </>
              ) : (
                <>
                  河床・地表面との摩擦による減速効果。
                  Manningの粗度係数 <Math tex="n" /> で表現されます。
                  水深が小さいほど、また流速が大きいほど摩擦の影響が大きくなります。
                  水面勾配と同様、
                  <strong className="text-foreground">
                    すべてのモデルで保持
                  </strong>
                  されます。
                </>
              )}
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 近似レベルの比較 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Three Approximation Levels"
              : "3つの近似レベル"}
          </h2>
          <p className="mb-4 text-muted">
            {en
              ? "By omitting terms from the full form, models that offer greater computational efficiency and stability can be obtained. Let us examine the three main approximation levels."
              : "完全形から項を省略することで、計算効率と安定性を高めたモデルが得られます。主要な3つの近似レベルを見ていきます。"}
          </p>

          {/* 完全SWE */}
          <div className="mb-6 rounded border border-border p-4">
            <p className="mb-1 text-sm font-medium text-foreground">
              {en
                ? "Full Shallow Water Equations (Dynamic Wave / Full SWE)"
                : "完全浅水方程式（Dynamic Wave / Full SWE）"}
            </p>
            <p className="mb-3 text-[11px] text-muted">
              TELEMAC-2D, HEC-RAS (Full Momentum)
            </p>
            <MathBlock
              tex={String.raw`\frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} = -g\frac{\partial \eta}{\partial x} - g\,S_{f,x}`}
            />
            <p className="mt-2 text-muted">
              {en ? (
                <>
                  <strong className="text-foreground">All terms are retained.</strong>{" "}
                  Capable of reproducing all flow phenomena including rapidly varying flow, supercritical flow, hydraulic jumps, and tsunamis.
                  Computational cost is the highest, and special techniques are needed to ensure numerical stability.
                  TELEMAC-2D solves these with FEM (finite element method), while HEC-RAS 2D uses the finite volume method.
                </>
              ) : (
                <>
                  <strong className="text-foreground">全ての項を保持。</strong>
                  急変流・射流・跳水・津波など、あらゆる流れ現象を再現可能。
                  計算コストは最も高く、数値安定性の確保に工夫が必要です。
                  TELEMAC-2DはFEM（有限要素法）で、HEC-RAS 2Dは有限体積法で解きます。
                </>
              )}
            </p>
          </div>

          {/* 局所慣性 */}
          <div className="mb-6 rounded border border-border p-4">
            <p className="mb-1 text-sm font-medium text-foreground">
              {en
                ? "Local Inertia Approximation"
                : "簡略化慣性方程式（Local Inertia Approximation）"}
            </p>
            <p className="mb-3 text-[11px] text-muted">LISFLOOD-FP, RIM2D</p>
            <MathBlock
              tex={String.raw`\frac{\partial u}{\partial t} + {\color{lightgray} \cancel{u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}}} = -g\frac{\partial \eta}{\partial x} - g\,S_{f,x}`}
            />
            <p className="mt-1 mb-3 text-center text-[11px] text-muted">
              {en
                ? "↓ Advective acceleration omitted"
                : "↓ 移流加速度を省略"}
            </p>
            <MathBlock
              tex={String.raw`\frac{\partial u}{\partial t} = -g\frac{\partial \eta}{\partial x} - g\,S_{f,x}`}
            />
            <p className="mt-2 text-muted">
              {en ? (
                <>
                  The advection term (②) is omitted, retaining only the{" "}
                  <strong className="text-foreground">local acceleration</strong>.
                  In gradually spreading flows such as floodplain inundation, the advection term contributes little,
                  so accuracy is largely maintained while computation is significantly accelerated.
                  As shown by Bates et al. (2010), this is a good approximation under the condition{" "}
                  <Math tex={String.raw`Fr < 0.5`} />.
                  Because it can be solved stably with explicit schemes, it is well suited for GPU implementation
                  and is adopted by LISFLOOD-FP and RIM2D.
                </>
              ) : (
                <>
                  移流項（②）を省略し、
                  <strong className="text-foreground">局所的な加速度のみ</strong>を保持。
                  洪水氾濫のような緩やかな流れでは移流項の寄与が小さいため、
                  精度をほぼ維持しながら計算を大幅に効率化できます。
                  Bates et al. (2010) が示したように、フルード数{" "}
                  <Math tex={String.raw`Fr < 0.5`} /> の条件で良好な近似です。
                  陽解法で安定的に解けるためGPU実装に適しており、
                  LISFLOOD-FPやRIM2Dで採用されています。
                </>
              )}
            </p>
          </div>

          {/* 拡散波 */}
          <div className="mb-6 rounded border border-border p-4">
            <p className="mb-1 text-sm font-medium text-foreground">
              {en
                ? "Diffusion Wave Approximation"
                : "拡散波近似（Diffusion Wave Approximation）"}
            </p>
            <p className="mb-3 text-[11px] text-muted">
              HEC-RAS (Diffusion Wave), RRI
            </p>
            <MathBlock
              tex={String.raw`{\color{lightgray} \cancel{\frac{\partial u}{\partial t}}} + {\color{lightgray} \cancel{u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}}} = -g\frac{\partial \eta}{\partial x} - g\,S_{f,x}`}
            />
            <p className="mt-1 mb-3 text-center text-[11px] text-muted">
              {en
                ? "↓ Both local and advective acceleration omitted"
                : "↓ 局所加速度と移流加速度をともに省略"}
            </p>
            <MathBlock
              tex={String.raw`0 = -g\frac{\partial \eta}{\partial x} - g\,S_{f,x}`}
            />
            <p className="mt-1 mb-3 text-center text-[11px] text-muted">
              {en ? "Rearranging:" : "整理すると"}
            </p>
            <MathBlock
              tex={String.raw`S_{f,x} = -\frac{\partial \eta}{\partial x}`}
            />
            <p className="mt-2 text-muted">
              {en ? (
                <>
                  All acceleration terms are omitted, and velocity is determined solely by the{" "}
                  <strong className="text-foreground">
                    balance between water surface gradient and friction
                  </strong>.
                  At each time step, this yields the intuitive formula: &ldquo;water flows from higher to lower surfaces, decelerated by friction.&rdquo;
                  Combined with Manning&apos;s equation, velocity can be computed directly, making the calculation very fast and stable.
                  RRI is a model that integrates rainfall-runoff and inundation computation, and adopts this approximation.
                  However, rapid velocity changes (dam breaks, abrupt urban flows) cannot be reproduced.
                </>
              ) : (
                <>
                  加速度項を全て省略し、
                  <strong className="text-foreground">
                    水面勾配と摩擦の釣り合い
                  </strong>
                  のみで流速を決定。各時刻で「水面が高い方から低い方へ、
                  摩擦で減速されながら流れる」という直感的な式になります。
                  Manningの式と組み合わせて流速を直接算出できるため計算が非常に高速で安定。
                  RRIは降雨-流出と氾濫を一体的に計算するモデルで、この近似を採用しています。
                  ただし、急な流速変化（ダム破壊、都市部の急激な流れ）は再現できません。
                </>
              )}
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── モデル比較表 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Term Retention / Omission by Model"
              : "モデル別の項の保持・省略"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Model" : "モデル"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-center text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Approx. Level" : "近似レベル"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-center text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "① Local Accel." : "① 局所加速度"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-center text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "② Advection" : "② 移流加速度"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-center text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "③ Surface Grad." : "③ 水面勾配"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-center text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "④ Friction" : "④ 摩擦"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    TELEMAC-2D
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-muted">
                    {en ? "Full SWE" : "完全SWE"}
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    HEC-RAS (Full)
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-muted">
                    {en ? "Full SWE" : "完全SWE"}
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    LISFLOOD-FP
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-muted">
                    {en ? "Local Inertia" : "局所慣性"}
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-red-400">
                    ✗
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    RIM2D
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-muted">
                    {en ? "Local Inertia" : "局所慣性"}
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-red-400">
                    ✗
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    HEC-RAS (Diff.)
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-muted">
                    {en ? "Diffusion Wave" : "拡散波"}
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-red-400">
                    ✗
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-red-400">
                    ✗
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    RRI
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-muted">
                    {en ? "Diffusion Wave" : "拡散波"}
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-red-400">
                    ✗
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-red-400">
                    ✗
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                  <td className="border border-border px-3 py-2 text-center text-green-500">
                    ✓
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 各モデルの特徴 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Characteristics of Each Model"
              : "各モデルの特徴"}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Model" : "モデル"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Dim." : "次元"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Numerical Method" : "数値解法"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Features" : "特徴"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    TELEMAC-2D
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    2D
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Finite Element Method (FEM)"
                      : "有限要素法（FEM）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Adapts to complex terrain with unstructured meshes. Can also account for turbulence models, wind stress, and Coriolis force. Applicable to both river and coastal domains"
                      : "非構造格子で複雑地形に適応。乱流モデル・風応力・コリオリ力も考慮可能。河川・沿岸の両方に対応"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    HEC-RAS
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    1D/2D
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Finite Volume / Implicit"
                      : "有限体積法 / 陰解法"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Offers choice between Full Momentum and Diffusion Wave. Strong in coupled 1D/2D computation. Rich GUI and widely used in practice"
                      : "Full MomentumとDiffusion Waveを選択可能。1D/2D結合計算に強み。GUIが充実し実務で広く利用"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    LISFLOOD-FP
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    1D/2D
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Finite Difference / Explicit"
                      : "有限差分法 / 陽解法"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Fast and stable via local inertia approximation. Raster-based, making it easy to apply to large domains. Widely used in academic research"
                      : "局所慣性近似により高速・安定。ラスタベースで大規模領域に適用しやすい。学術研究で広く利用"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    RIM2D
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    2D
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Finite Difference / GPU-parallel"
                      : "有限差分法 / GPU並列"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Parallelizes the same local inertia approximation as LISFLOOD-FP on multi-GPU. Computes the entire 891 km² of Berlin at 2 m resolution faster than real time"
                      : "LISFLOOD-FPと同じ局所慣性近似をマルチGPUで並列化。ベルリン全域891 km²を2 m解像度でリアルタイム以上の速度で計算"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    RRI
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    2D
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Finite Difference"
                      : "有限差分法"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Integrates rainfall-runoff and inundation computation. Handles slope flow, channel flow, and floodplain flow in a unified framework, enabling basin-wide simulation with a single model (developed by ICHARM)"
                      : "降雨-流出と氾濫計算を一体化。斜面流・河道流・氾濫流を統一的に扱い、流域全体を1つのモデルで計算可能（ICHARM開発）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── どの近似を選ぶべきか ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Which Approximation Level Should You Choose?"
              : "どの近似レベルを選ぶべきか"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                The choice of approximation level can be guided by the{" "}
                <strong className="text-foreground">Froude number</strong>{" "}
                <Math tex={String.raw`Fr = u / \sqrt{gh}`} />.
              </>
            ) : (
              <>
                近似レベルの選択は、
                <strong className="text-foreground">フルード数</strong>{" "}
                <Math tex={String.raw`Fr = u / \sqrt{gh}`} /> が指標になります。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Condition" : "条件"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Recommended Approx." : "推奨近似"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Example Models" : "モデル例"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? (
                      <>Supercritical flow, hydraulic jumps, dam breaks (<Math tex={String.raw`Fr \gtrsim 1`} />)</>
                    ) : (
                      <>射流・跳水・ダム破壊（<Math tex={String.raw`Fr \gtrsim 1`} />）</>
                    )}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Full SWE" : "完全SWE"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    TELEMAC-2D, HEC-RAS (Full)
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? (
                      <>Gradual inundation, urban flooding (<Math tex={String.raw`Fr < 0.5`} />)</>
                    ) : (
                      <>緩やかな氾濫・都市洪水（<Math tex={String.raw`Fr < 0.5`} />）</>
                    )}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Local Inertia" : "局所慣性"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    LISFLOOD-FP, RIM2D
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Large-scale basins, long-duration simulations"
                      : "大規模流域・長期間の計算"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Diffusion Wave" : "拡散波"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    HEC-RAS (Diff.), RRI
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            {en ? (
              <>
                De Almeida &amp; Bates (2013) reported that{" "}
                <strong className="text-foreground">
                  the contribution of the advection term is often less than 1% of the total in floodplain inundation
                </strong>,
                and that the local inertia approximation provides sufficient accuracy.
                On the other hand, the diffusion wave completely ignores acceleration, so wave propagation speeds tend to be faster than reality,
                and caution is needed when there are rapid discharge variations.
              </>
            ) : (
              <>
                De Almeida &amp; Bates (2013) は、
                <strong className="text-foreground">
                  洪水氾濫では移流項の寄与は全体の1%未満
                </strong>
                であることが多く、局所慣性近似で十分な精度が得られると報告しています。
                一方、拡散波は加速度を完全に無視するため、
                波の伝播速度が実際より速くなる傾向があり、
                急激な流量変動がある場合は注意が必要です。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── まとめ ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Summary" : "まとめ"}
          </h2>
          <p className="text-muted">
            {en
              ? "The momentum equation of the shallow water equations consists of four terms, and each hydraulic model omits different terms, achieving a trade-off between computational efficiency and applicability."
              : "浅水方程式の運動方程式は4つの項で構成されますが、水理モデルはそれぞれ異なる項を省略することで計算効率と適用範囲のトレードオフを実現しています。"}
          </p>
          <MathBlock
            tex={String.raw`\underbrace{\frac{\partial u}{\partial t}}_{\text{省略 → 拡散波}} + \underbrace{u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}}_{\text{省略 → 局所慣性}} = -g\frac{\partial \eta}{\partial x} - g\,S_{f,x}`}
          />
          <p className="mt-3 text-muted">
            {en
              ? "From Full SWE to Local Inertia to Diffusion Wave, the number of omitted terms increases and computation becomes faster, but the range of phenomena that can be reproduced narrows. When selecting a model, it is important to comprehensively consider the flow characteristics (Froude number) of the target basin, the required spatial resolution, and computational time constraints."
              : "完全SWE → 局所慣性 → 拡散波の順に、省略する項が増え、計算は高速になりますが、再現できる現象の範囲は狭くなります。モデル選択では、対象流域の流れの性質（フルード数）、必要な空間解像度、計算時間の制約を総合的に判断することが重要です。"}
          </p>
        </section>
      </article>
    </div>
  );
}
