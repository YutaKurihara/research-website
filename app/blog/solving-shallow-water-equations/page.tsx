import type { Metadata } from "next";
import Link from "next/link";
import { MathBlock, Math } from "@/components/Math";

export const metadata: Metadata = {
  title:
    "浅水方程式の解き方 — 連続式から離散式への導出とスタガード格子の仕組み",
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
            浅水方程式の解き方 — 連続式から離散式への導出とスタガード格子の仕組み
          </h1>
          <p className="mt-3 text-xs text-muted">
            洪水シミュレーションの核となる浅水方程式を、コンピュータで実際に「解く」には
            どうすればよいのか。局所慣性近似を題材に、連続方程式と運動方程式を
            格子上の差分式へ変換する過程を一歩ずつ導出します。
            スタガード格子の配置、半陰的な摩擦処理、CFL安定条件、
            乾湿境界の扱いまで、実装に必要な要素を網羅的に解説します。
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* ── 出発点 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            出発点：局所慣性近似の方程式系
          </h2>
          <p className="mb-4 text-muted">
            本記事では、LISFLOOD-FPやRIM2Dが採用する
            <strong className="text-foreground">局所慣性近似</strong>
            を対象とします。移流項を省略した1次元の方程式系は以下の通りです
            （2次元への拡張はx方向・y方向を独立に解くことで実現します）。
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">連続方程式</p>
          <MathBlock
            tex={String.raw`\frac{\partial h}{\partial t} + \frac{\partial q}{\partial x} = R`}
          />

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            運動方程式（局所慣性近似）
          </p>
          <MathBlock
            tex={String.raw`\frac{\partial q}{\partial t} + g\,h\,\frac{\partial \eta}{\partial x} + \frac{g\,n^2\,q\,|q|}{h^{7/3}} = 0`}
          />

          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    記号
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    意味
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    単位
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex="h" />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">水深</td>
                  <td className="border border-border px-3 py-2 text-muted">m</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex="q = h \cdot u" />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    単位幅流量（水深 × 流速）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    m²/s
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex={String.raw`\eta = z_b + h`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    水面標高（地盤高 + 水深）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">m</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex="n" />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Manningの粗度係数
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    m⁻¹/³s
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex="g" />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    重力加速度（9.81）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    m/s²
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex="R" />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    降雨・浸透等のソース項
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">m/s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── スタガード格子 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Step 1：スタガード格子の配置
          </h2>
          <p className="mb-4 text-muted">
            浅水方程式を差分法で解く際、
            <strong className="text-foreground">水深 <Math tex="h" /> とフラックス <Math tex="q" /> を同じ位置に置かない</strong>
            ことが安定な計算の鍵です。これを
            <strong className="text-foreground">スタガード格子（staggered grid）</strong>と呼びます。
          </p>

          <div className="my-4 overflow-x-auto rounded border border-border bg-accent-light/30 px-4 py-4">
            <pre className="text-xs leading-relaxed text-muted">
{`    q_{i-1/2}         q_{i+1/2}         q_{i+3/2}
       ↓                  ↓                  ↓
  ─────┼──────────────────┼──────────────────┼─────
       │                  │                  │
       │    h_i, η_i      │   h_{i+1}, η_{i+1}   │
       │    z_{b,i}       │   z_{b,i+1}      │
       │                  │                  │
  ─────┼──────────────────┼──────────────────┼─────
       ↑                  ↑                  ↑
  セル境界          セル境界           セル境界

  ←────── Δx ──────→`}
            </pre>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    変数
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    格子上の位置
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    理由
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    <Math tex={String.raw`h_i, \; \eta_i, \; z_{b,i}`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    セル中心（整数添字）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    セル内の平均的な水の貯留量を表す
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    <Math tex={String.raw`q_{i+1/2}`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    セル境界（半整数添字）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    隣接セル間の水の移動量を表す
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            この配置により、連続方程式の{" "}
            <Math tex={String.raw`\partial q / \partial x`} /> を中心差分で近似したとき、
            <strong className="text-foreground">
              セルの左右境界のフラックス差から自然に水深の変化が求まります
            </strong>
            。同じ位置に全変数を置く（コロケート格子）と、
            チェッカーボード状の数値振動が発生しやすくなります。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 連続方程式の離散化 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Step 2：連続方程式の離散化
          </h2>
          <p className="mb-3 text-muted">
            連続方程式を前進Euler法（時間方向）と中心差分（空間方向）で離散化します。
          </p>
          <p className="mb-2 text-[11px] font-medium text-foreground">連続式（微分形）</p>
          <MathBlock
            tex={String.raw`\frac{\partial h}{\partial t} + \frac{\partial q}{\partial x} = R`}
          />

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            時間微分の離散化（前進Euler）
          </p>
          <MathBlock
            tex={String.raw`\frac{\partial h}{\partial t} \;\approx\; \frac{h_i^{n+1} - h_i^{n}}{\Delta t}`}
          />

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            空間微分の離散化（中心差分）
          </p>
          <MathBlock
            tex={String.raw`\frac{\partial q}{\partial x} \;\approx\; \frac{q_{i+1/2}^{n+1} - q_{i-1/2}^{n+1}}{\Delta x}`}
          />

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            離散化された連続方程式
          </p>
          <MathBlock
            tex={String.raw`\boxed{\; h_i^{n+1} = h_i^{n} + \frac{\Delta t}{\Delta x}\left(q_{i-1/2}^{n+1} - q_{i+1/2}^{n+1}\right) + R \cdot \Delta t \;}`}
          />

          <p className="mt-3 text-muted">
            ここで <Math tex="n" /> は現在の時間ステップ、
            <Math tex="n+1" /> は次の時間ステップを表します。
            この式は直感的に「
            <strong className="text-foreground">
              セルの水深の変化 = 左から入る水 − 右へ出る水 + 降雨
            </strong>
            」を意味しています。
          </p>
          <p className="mt-2 text-muted">
            フラックス <Math tex={String.raw`q_{i+1/2}^{n+1}`} /> の符号は
            <strong className="text-foreground">正が右向き</strong>の流れを表します。
            左境界から入る流量が <Math tex={String.raw`q_{i-1/2}`} /> でプラス、
            右境界から出る流量が <Math tex={String.raw`q_{i+1/2}`} /> でプラスなので、
            差し引きで水深が増減します。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 運動方程式の離散化 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Step 3：運動方程式の離散化（フラックス更新式の導出）
          </h2>
          <p className="mb-3 text-muted">
            最も重要なステップです。運動方程式からセル境界のフラックス{" "}
            <Math tex={String.raw`q_{i+1/2}^{n+1}`} /> を求めます。
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">
            運動方程式（再掲）
          </p>
          <MathBlock
            tex={String.raw`\frac{\partial q}{\partial t} + g\,h\,\frac{\partial \eta}{\partial x} + \frac{g\,n^2\,q\,|q|}{h^{7/3}} = 0`}
          />

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            ① 時間微分の離散化
          </p>
          <MathBlock
            tex={String.raw`\frac{\partial q}{\partial t} \;\approx\; \frac{q_{i+1/2}^{n+1} - q_{i+1/2}^{n}}{\Delta t}`}
          />

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            ② 水面勾配の離散化
          </p>
          <p className="mb-2 text-muted">
            セル境界 <Math tex={String.raw`i+1/2`} /> における水面勾配は、
            左右のセル中心の水面標高の差から中心差分で求めます。
          </p>
          <MathBlock
            tex={String.raw`g\,h_f\,\frac{\partial \eta}{\partial x} \;\approx\; g\,h_f\,\frac{\eta_{i+1}^n - \eta_i^n}{\Delta x}`}
          />
          <p className="mt-2 text-muted">
            <Math tex={String.raw`h_f`} /> はセル境界での代表水深で、
            通常は<strong className="text-foreground">上流側の水深</strong>（アップウィンド）を取ります：
          </p>
          <MathBlock
            tex={String.raw`h_f = \max\!\big(\eta_i^n,\; \eta_{i+1}^n\big) - \max\!\big(z_{b,i},\; z_{b,i+1}\big)`}
          />
          <p className="mt-2 text-muted">
            この定義により、左右のセルで地盤高が異なる場合でも
            セル境界の水深を適切に評価でき、
            乾いたセルへの流れの発生条件も自然に表現されます。
          </p>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            ③ 摩擦項の処理（半陰的）
          </p>
          <p className="mb-2 text-muted">
            摩擦項をそのまま陽的（<Math tex="n" /> のステップで評価）に離散化すると、
            水深が小さいときに <Math tex={String.raw`h^{7/3}`} /> が小さくなり、
            摩擦項が爆発して
            <strong className="text-foreground">数値的に不安定</strong>になります。
            これを回避するために、<Math tex="|q|" /> は既知の{" "}
            <Math tex={String.raw`q^n`} /> で、
            <Math tex="q" /> 自体は未知の <Math tex={String.raw`q^{n+1}`} /> で評価する
            <strong className="text-foreground">半陰的（semi-implicit）処理</strong>
            を行います。
          </p>
          <MathBlock
            tex={String.raw`\frac{g\,n^2\,q\,|q|}{h_f^{7/3}} \;\approx\; \frac{g\,n^2\,|q^n|}{h_f^{7/3}} \cdot q^{n+1}_{i+1/2}`}
          />
          <p className="mt-2 text-muted">
            こうすることで <Math tex={String.raw`q^{n+1}`} /> について
            <strong className="text-foreground">線形</strong>になり、
            陽的に解けるにもかかわらず、摩擦の安定化効果が得られます。
          </p>

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            ④ 代入して整理
          </p>
          <p className="mb-2 text-muted">①②③を運動方程式に代入します。</p>
          <MathBlock
            tex={String.raw`\frac{q^{n+1} - q^n}{\Delta t} + g\,h_f\,\frac{\eta_{i+1}^n - \eta_i^n}{\Delta x} + \frac{g\,n^2\,|q^n|}{h_f^{7/3}} \cdot q^{n+1} = 0`}
          />
          <p className="mt-2 mb-2 text-muted">
            <Math tex={String.raw`q^{n+1}`} /> について解きます。
          </p>
          <MathBlock
            tex={String.raw`q^{n+1} + \frac{g\,n^2\,|q^n|\,\Delta t}{h_f^{7/3}} \cdot q^{n+1} = q^n - g\,h_f\,\Delta t\,\frac{\eta_{i+1}^n - \eta_i^n}{\Delta x}`}
          />
          <MathBlock
            tex={String.raw`q^{n+1}\left(1 + \frac{g\,n^2\,|q^n|\,\Delta t}{h_f^{7/3}}\right) = q^n - g\,h_f\,\Delta t\,\frac{\eta_{i+1}^n - \eta_i^n}{\Delta x}`}
          />

          <p className="mt-4 mb-2 text-[11px] font-medium text-foreground">
            ⑤ 最終形：フラックス更新式
          </p>
          <MathBlock
            tex={String.raw`\boxed{\; q_{i+1/2}^{n+1} = \frac{q_{i+1/2}^{n} \;-\; g\,h_f\,\Delta t\;\dfrac{\eta_{i+1}^n - \eta_i^n}{\Delta x}}{1 \;+\; \dfrac{g\,n^2\,|q_{i+1/2}^{n}|\,\Delta t}{h_f^{7/3}}} \;}`}
          />

          <div className="mt-4 rounded border border-border bg-accent-light/30 p-4">
            <p className="mb-2 text-[11px] font-medium text-foreground">
              各部分の物理的意味
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <tbody>
                  <tr>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      分子の第1項
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      <Math tex={String.raw`q^{n}`} /> — 前ステップのフラックス（慣性）
                    </td>
                  </tr>
                  <tr className="bg-accent-light/50">
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      分子の第2項
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      水面勾配による駆動力（水面が高い側→低い側へ押す力）
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      分母
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      1 + 摩擦係数 — 常に≥1なのでフラックスを必ず減衰させる
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 計算手順のまとめ ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Step 4：1タイムステップの計算手順
          </h2>
          <p className="mb-4 text-muted">
            各タイムステップで以下の順序で計算を行います。
            2次元の場合はx方向・y方向のフラックスを独立に計算します。
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                1
              </span>
              <div className="text-muted">
                <p className="font-medium text-foreground">境界水深の計算</p>
                <p className="mt-1">
                  全セル境界で <Math tex={String.raw`h_f`} /> を計算：
                  <Math
                    tex={String.raw`h_f = \max(\eta_i, \eta_{i+1}) - \max(z_{b,i}, z_{b,i+1})`}
                  />
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                2
              </span>
              <div className="text-muted">
                <p className="font-medium text-foreground">フラックスの更新</p>
                <p className="mt-1">
                  全セル境界でフラックス更新式を適用して{" "}
                  <Math tex={String.raw`q_{i+1/2}^{n+1}`} /> を計算
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                3
              </span>
              <div className="text-muted">
                <p className="font-medium text-foreground">水深の更新</p>
                <p className="mt-1">
                  連続方程式で{" "}
                  <Math
                    tex={String.raw`h_i^{n+1} = h_i^n + \frac{\Delta t}{\Delta x}(q_{i-1/2}^{n+1} - q_{i+1/2}^{n+1}) + R \cdot \Delta t`}
                  />
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded border border-border p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-xs font-medium text-highlight">
                4
              </span>
              <div className="text-muted">
                <p className="font-medium text-foreground">
                  時間刻みの更新（CFL条件）
                </p>
                <p className="mt-1">
                  次ステップの <Math tex={String.raw`\Delta t`} /> をCFL条件から計算
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-muted">
            ステップ1〜3は各セル（境界）で<strong className="text-foreground">独立</strong>に計算できるため、
            GPUのようなSIMD型プロセッサで大規模に並列化できます。
            これがLISFLOOD-FPやRIM2Dが高速な理由です。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── CFL条件 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Step 5：CFL安定条件と適応的時間刻み
          </h2>
          <p className="mb-3 text-muted">
            陽解法では時間刻み <Math tex={String.raw`\Delta t`} /> が大きすぎると
            計算が不安定になります。
            <strong className="text-foreground">
              CFL条件（Courant-Friedrichs-Lewy condition）
            </strong>
            は、情報の伝播速度が1タイムステップで1セル幅を超えないことを要求します。
          </p>
          <MathBlock
            tex={String.raw`\Delta t \;\leq\; \alpha \cdot \frac{\Delta x}{\sqrt{g \cdot h_{\max}}}`}
          />
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    記号
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    意味
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex={String.raw`\alpha`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    CFL数（通常 0.2〜0.7、安全係数として1未満に設定）
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex={String.raw`\Delta x`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    格子間隔
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-foreground">
                    <Math tex={String.raw`\sqrt{g \cdot h_{\max}}`} />
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    浅水波の伝播速度（長波の波速）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            <Math tex={String.raw`h_{\max}`} /> は計算領域内の最大水深です。
            実用的には毎ステップ <Math tex={String.raw`h_{\max}`} /> を更新し、
            <strong className="text-foreground">適応的に時間刻みを調整</strong>
            します。
          </p>

          <div className="mt-4 rounded border border-border bg-accent-light/30 p-4">
            <p className="mb-2 text-[11px] font-medium text-foreground">
              具体的な数値例
            </p>
            <div className="overflow-x-auto">
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
                      <Math tex={String.raw`\Delta t_{\max}`} />（<Math tex={String.raw`\alpha = 0.5`} />）
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      10 m
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      1 m
                    </td>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      1.60 s
                    </td>
                  </tr>
                  <tr className="bg-accent-light/50">
                    <td className="border border-border px-3 py-2 text-muted">
                      5 m
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      1 m
                    </td>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      0.80 s
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 text-muted">
                      2 m
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      1 m
                    </td>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      0.32 s
                    </td>
                  </tr>
                  <tr className="bg-accent-light/50">
                    <td className="border border-border px-3 py-2 text-muted">
                      2 m
                    </td>
                    <td className="border border-border px-3 py-2 text-muted">
                      3 m
                    </td>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">
                      0.18 s
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-muted">
              解像度が半分になると <Math tex={String.raw`\Delta t`} /> も半分 →{" "}
              セル数は4倍 × ステップ数2倍 = 計算量は
              <strong className="text-foreground">約8倍</strong>になります。
              これが高解像度計算にGPUが必要な理由です。
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 乾湿境界 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Step 6：乾湿境界（Wetting and Drying）の扱い
          </h2>
          <p className="mb-3 text-muted">
            洪水シミュレーションでは、水が地表を濡らしていく（wetting）過程と
            退水して乾く（drying）過程を正しく扱う必要があります。
            数値的に厄介なのは、
            <strong className="text-foreground">
              水深がゼロに近づくと摩擦項が発散する
            </strong>
            ことです。
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">
            主な対策
          </p>

          <div className="space-y-3">
            <div className="rounded border border-border p-3">
              <p className="mb-1 text-sm font-medium text-foreground">
                閾値水深（depth threshold）
              </p>
              <p className="text-muted">
                最小水深 <Math tex={String.raw`h_{\min}`} />（例: 10⁻³ m）を設定し、
                <Math tex={String.raw`h_f < h_{\min}`} /> ならフラックスをゼロにします。
                これにより摩擦項の分母がゼロになることを防ぎます。
              </p>
            </div>

            <div className="rounded border border-border p-3">
              <p className="mb-1 text-sm font-medium text-foreground">
                フラックス制限
              </p>
              <p className="text-muted">
                1タイムステップでセルの水をすべて排出しないよう、
                フラックスに上限を設けます：
              </p>
              <MathBlock
                tex={String.raw`|q_{i+1/2}^{n+1}| \;\leq\; \frac{h_i^n \cdot \Delta x}{N_{\text{out}} \cdot \Delta t}`}
              />
              <p className="mt-1 text-muted">
                <Math tex={String.raw`N_{\text{out}}`} /> は
                セルから流出する辺の数（2Dでは最大4）です。
                これにより水深が負になることを防ぎます。
              </p>
            </div>

            <div className="rounded border border-border p-3">
              <p className="mb-1 text-sm font-medium text-foreground">
                境界水深の定義
              </p>
              <p className="text-muted">
                <Math
                  tex={String.raw`h_f = \max(\eta_i, \eta_{i+1}) - \max(z_{b,i}, z_{b,i+1})`}
                />{" "}
                の定義により、乾いたセル側の地盤高が水面より高ければ{" "}
                <Math tex={String.raw`h_f \leq 0`} /> となり、
                自然にフラックスが遮断されます。
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 拡散波の場合 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            補足：拡散波近似ではどう解くか
          </h2>
          <p className="mb-3 text-muted">
            HEC-RAS（Diffusion Wave）やRRIが使う拡散波近似では、
            運動方程式が定常的（<Math tex={String.raw`\partial q / \partial t = 0`} />）になるため、
            <strong className="text-foreground">
              フラックスを水面勾配から直接計算
            </strong>
            できます。
          </p>

          <p className="mb-2 text-[11px] font-medium text-foreground">
            拡散波の釣り合い
          </p>
          <MathBlock
            tex={String.raw`S_f = -\frac{\partial \eta}{\partial x}`}
          />
          <p className="mt-2 mb-2 text-[11px] font-medium text-foreground">
            Manning式に代入して流量を計算
          </p>
          <MathBlock
            tex={String.raw`q_{i+1/2} = -\frac{h_f^{5/3}}{n} \cdot \frac{\eta_{i+1} - \eta_i}{|\eta_{i+1} - \eta_i|^{1/2}} \cdot \frac{1}{\Delta x^{1/2}}`}
          />
          <p className="mt-2 text-muted">
            前ステップのフラックス <Math tex={String.raw`q^n`} /> に依存せず、
            水面標高だけで決まります。局所慣性近似のフラックス更新式と比較すると、
            <strong className="text-foreground">
              分子の <Math tex={String.raw`q^n`} /> 項（慣性）がなく
            </strong>
            、分母の摩擦減衰もありません。
            流れが即座に定常状態に達すると仮定しているため、
            加速・減速の過渡過程は再現されません。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 完全SWEの場合 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            補足：完全SWEではどう解くか
          </h2>
          <p className="mb-3 text-muted">
            TELEMAC-2DやHEC-RAS（Full Momentum）が解く完全SWEでは、
            移流項 <Math tex={String.raw`\partial(q^2/h)/\partial x`} /> が加わるため、
            単純な陽解法では安定に解けません。代表的な解法は以下の通りです。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    解法
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    モデル例
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    有限要素法（FEM）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    TELEMAC-2D
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    非構造格子（三角形メッシュ）で複雑地形に適応。
                    重み付き残差法で弱形式に変換して解く
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    有限体積法（FVM）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    HEC-RAS 2D
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    セル境界でのフラックスをRiemannソルバー等で計算。
                    保存則を厳密に満たす
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    Godunov型スキーム
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    各種研究コード
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    セル境界でリーマン問題を解き、衝撃波（跳水）を
                    捕捉。Roe、HLLCなどの近似リーマンソルバーを使用
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            これらの手法は移流項を安定に扱える反面、
            リーマンソルバーや連立方程式の求解が必要で
            <strong className="text-foreground">計算コストが高く</strong>なります。
            局所慣性近似が「移流項を落として単純な陽解法で解ける」という
            計算上の大きなメリットを持つことがわかります。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── まとめ ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            まとめ
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    近似
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    フラックスの求め方
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    前ステップへの依存
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    解法の複雑さ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    完全SWE
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    FEM/FVM + リーマンソルバー
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    あり（移流 + 慣性）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">高</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    局所慣性
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    陽的更新式（1行の式）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    あり（慣性のみ）
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">低</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    拡散波
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Manning式で直接算出
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    なし
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">最低</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            局所慣性近似のフラックス更新式は、
            たった1行の代数式で前ステップのフラックス・水面勾配・摩擦のバランスを表現しています。
            各セル境界で独立に計算でき、GPUの大規模並列処理に理想的です。
            この「式の単純さ」と「物理の本質を保つ近似」の組み合わせが、
            LISFLOOD-FPやRIM2Dが広く使われている理由です。
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
              Neal, J., Villanueva, I., Wright, N., Willis, T., Fewtrell, T.,
              &amp; Bates, P. (2012). How much physical complexity is needed to
              model flood inundation?
              <em> Hydrological Processes</em>, 26(15), 2264–2282.
            </li>
            <li>
              Khosh Bin Ghomash, S., Deng, S., &amp; Apel, H. (2026). Enabling
              real-time high-resolution flood forecasting for the entire state
              of Berlin through multi-GPU accelerated physics-based modeling.
              <em> Natural Hazards and Earth System Sciences</em>, 26, 85–101.
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
