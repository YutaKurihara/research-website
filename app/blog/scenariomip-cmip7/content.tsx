"use client";

import Link from "next/link";
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
            2026-06-12
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "ScenarioMIP-CMIP7 — Seven-Scenario Design for the Next Climate Model Intercomparison and the Shift to Emission-Driven Experiments"
              : "ScenarioMIP-CMIP7 — 次期気候モデル比較の7シナリオ設計と排出駆動型への転換"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            Van Vuuren, D. P., O&apos;Neill, B. C., Tebaldi, C., Sanderson, B.
            M., et al. (2026). The Scenario Model Intercomparison Project for
            CMIP7 (ScenarioMIP-CMIP7).
            <em> Geoscientific Model Development</em>, 19(7), 2627–2656.
          </p>
          <a
            href="https://doi.org/10.5194/gmd-19-2627-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-xs text-highlight hover:underline"
          >
            DOI: 10.5194/gmd-19-2627-2026
          </a>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* ── Why Read This Paper ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Why Read This Paper" : "この論文を読むべき理由"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                CMIP (Coupled Model Intercomparison Project) is a framework in
                which climate models worldwide are run under common scenarios,
                and the results serve as the scientific basis for IPCC
                assessment reports. CMIP6 used five scenarios from SSP1-2.6 to
                SSP5-8.5, but{" "}
                <strong className="text-foreground">
                  CMIP7 introduces seven new scenarios
                </strong>{" "}
                with a fundamentally different experimental approach. If you
                work on flood risk assessment or climate change impact analysis,
                it is essential to understand how the &quot;inputs&quot; to
                global climate projections will change over the coming years.
              </>
            ) : (
              <>
                CMIP（結合モデル相互比較プロジェクト）は、世界中の気候モデルを
                共通のシナリオで走らせ、その結果をIPCC報告書の科学的基盤とする枠組みです。
                CMIP6ではSSP1-2.6〜SSP5-8.5の5シナリオが使われましたが、
                <strong className="text-foreground">
                  CMIP7では7つの新シナリオ
                </strong>
                が設計され、実験手法も大きく変わります。
                洪水リスク評価や気候変動影響分析に携わるなら、
                今後数年間のグローバルな気候予測の「入力」が
                どう変わるかを理解しておくことが重要です。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Key Changes from CMIP6 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Key Changes from CMIP6" : "CMIP6からの主要変更点"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Item" : "項目"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    CMIP6
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    CMIP7
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Number of scenarios" : "シナリオ数"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "5 (SSP1-2.6 to SSP5-8.5)"
                      : "5（SSP1-2.6〜SSP5-8.5）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    7（H, HL, M, ML, L, VL, LN）
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "CO₂ treatment" : "CO₂の扱い"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Concentration-driven"
                      : "濃度駆動型（concentration-driven）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Emission-driven"
                      : "排出駆動型（emission-driven）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "High-emission scenario" : "高排出シナリオ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    SSP5-8.5（8.5 W/m²）
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "H (lower than SSP5-8.5 — deemed unrealistic)"
                      : "H（SSP5-8.5より低い — 非現実的と判断）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "End of historical period"
                      : "歴史期間の終点"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "2015" : "2015年"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "2023" : "2023年"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Extended simulations" : "延長シミュレーション"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Up to 2100 (some to 2300)"
                      : "2100年まで（一部2300年）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "2150 required, 2500 optional"
                      : "2150年必須、2500年オプション"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Ensemble" : "アンサンブル"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "No recommendation" : "推奨なし"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Minimum 5 members recommended"
                      : "最低5メンバー推奨"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Seven Core Scenarios ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Seven Core Scenarios" : "7つのコアシナリオ"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                Unlike CMIP6&apos;s SSP scenarios, the{" "}
                <strong className="text-foreground">shape</strong> of emission
                pathways (e.g., high-to-low transitions) is explicitly designed.
              </>
            ) : (
              <>
                CMIP6のSSPシナリオとは異なり、
                排出経路の
                <strong className="text-foreground">形状</strong>
                （高→低への転換など）を明示的に設計しています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Abbreviation" : "略称"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Name" : "名称"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en
                      ? "Emission pathway characteristics"
                      : "排出経路の特徴"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en
                      ? "Temperature rise by 2100"
                      : "2100年の気温上昇"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    H
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    High
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Sustained high emissions, but set lower than SSP5-8.5"
                      : "高排出を維持。ただしSSP5-8.5よりは低く設定"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ~3.5°C
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    HL
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    High-to-Low
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Initially high emissions, rapid reduction later (delayed mitigation)"
                      : "初期は高排出、後半に急速削減（遅延緩和）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~2.5°C
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    M
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Medium
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Extension of current policies; gradual emission decline"
                      : "現行政策の延長。緩やかな排出減少"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~2.5–3.0°C
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ML
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Medium-to-Low
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Strengthened mitigation from mid-term onward"
                      : "中期以降に緩和を強化"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~2.0°C
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    L
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Low
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Emission reduction pathway consistent with the 2°C target"
                      : "2°C目標に整合する排出削減経路"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "<2.0°C" : "~2.0°C未満"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    VL
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Very Low
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "1.5°C target; early and rapid emission reduction"
                      : "1.5°C目標。早期かつ急速な排出削減"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ~1.5°C
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    LN
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    Low-to-Negative
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Temporary overshoot followed by recovery via large-scale CDR"
                      : "一時的にオーバーシュート後、大規模CDRで回復"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "~1.5°C (post-recovery)"
                      : "~1.5°C（回復後）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Shift to Emission-Driven ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Shift to Emission-Driven — What Changes"
              : "排出駆動型への転換 — 何が変わるのか"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                In CMIP6, CO₂{" "}
                <strong className="text-foreground">concentration</strong> was
                prescribed as a scenario input (concentration-driven), and all
                ESMs (Earth System Models) computed with the same CO₂
                concentration. In CMIP7, CO₂{" "}
                <strong className="text-foreground">emissions</strong> are
                prescribed (emission-driven), and each ESM computes
                concentrations using its own carbon cycle model.
              </>
            ) : (
              <>
                CMIP6ではCO₂
                <strong className="text-foreground">濃度</strong>を
                シナリオとして与え（concentration-driven）、
                すべてのESM（地球システムモデル）が同じCO₂濃度で計算していました。
                CMIP7では CO₂
                <strong className="text-foreground">排出量</strong>を与え
                （emission-driven）、
                各ESMが自身の炭素循環モデルで濃度を計算します。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Approach" : "方式"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Input" : "入力"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Model computes" : "モデルが計算"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Significance" : "意義"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Concentration-driven" : "濃度駆動型"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "CO₂ concentration time series"
                      : "CO₂濃度の時系列"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Temperature, precipitation, etc. only"
                      : "気温・降水等のみ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Same concentration across all models → easier to compare climate responses"
                      : "全モデルで同じ濃度 → 気候応答の比較が容易"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Emission-driven" : "排出駆動型"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "CO₂ emission time series"
                      : "CO₂排出量の時系列"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "CO₂ concentration + temperature, precipitation, etc."
                      : "CO₂濃度 + 気温・降水等"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Includes carbon cycle uncertainty → more realistic uncertainty range"
                      : "炭素循環の不確実性を含む → より現実的な不確実性幅"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                In emission-driven experiments,{" "}
                <strong className="text-foreground">
                  carbon cycle feedbacks (permafrost thaw, wildfires, changes in
                  ocean uptake)
                </strong>{" "}
                differ across models, so the same emissions can yield different
                CO₂ concentrations. This enables a more complete assessment of
                climate projection uncertainty, but makes inter-model comparison
                more complex.
              </>
            ) : (
              <>
                排出駆動型では、
                <strong className="text-foreground">
                  炭素循環のフィードバック（永久凍土融解、森林火災、海洋吸収の変化）
                </strong>
                がモデルごとに異なるため、同じ排出量でもCO₂濃度に差が生じます。
                これにより気候予測の不確実性をより完全に評価できますが、
                モデル間の比較は複雑になります。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── Why SSP5-8.5 Was Dropped ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Why SSP5-8.5 Was Dropped" : "SSP5-8.5が消えた理由"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                CMIP6&apos;s highest-emission scenario SSP5-8.5 (radiative
                forcing of 8.5 W/m²) assumed a rapid expansion of fossil fuel
                use, with CO₂ concentrations reaching approximately 1100 ppm by
                2100. However, given the rapid adoption of renewable energy and
                the advancement of national decarbonization policies, it was
                judged to be{" "}
                <strong className="text-foreground">
                  no longer plausible as a realistic emission pathway
                </strong>
                . CMIP7&apos;s H scenario represents high emissions but is set
                at a substantially lower level than SSP5-8.5.
              </>
            ) : (
              <>
                CMIP6の最高排出シナリオSSP5-8.5（放射強制力8.5 W/m²）は、
                化石燃料利用の急拡大を前提とし、
                2100年にCO₂濃度が約1100 ppmに達する想定でした。
                しかし、再生可能エネルギーの急速な普及と
                各国の脱炭素政策の進展を受け、
                <strong className="text-foreground">
                  現実的な排出経路としてはもはや妥当でない
                </strong>
                と判断されました。
                CMIP7のHシナリオは高排出ですが、SSP5-8.5よりは大幅に低い水準に設定されています。
              </>
            )}
          </p>
          <p className="mt-2 text-muted">
            {en ? (
              <>
                This also has implications for flood risk assessment. The
                extreme precipitation increases computed under SSP5-8.5 may have
                been{" "}
                <strong className="text-foreground">
                  overestimated as an upper bound
                </strong>
                , and CMIP7&apos;s scenario range provides a more realistic
                uncertainty envelope.
              </>
            ) : (
              <>
                これは洪水リスク評価にも影響します。
                SSP5-8.5で計算された極端降水の増加率は
                <strong className="text-foreground">上限として過大評価</strong>
                だった可能性があり、
                CMIP7のシナリオ範囲はより現実的な不確実性幅を提供します。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── New Design Elements ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "New Design Elements" : "新しい設計要素"}
          </h2>

          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Emphasis on pathway \"shape\""
                  : "経路の「形状」を重視"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Scenarios like HL and ML explicitly design{" "}
                    <strong className="text-foreground">
                      transition paths
                    </strong>{" "}
                    such as &quot;high emissions → rapid reduction&quot; and
                    &quot;medium emissions → gradual reduction.&quot; This
                    enables assessment of the climate impact of the timing of
                    policy changes.
                  </>
                ) : (
                  <>
                    HLやMLシナリオのように
                    「高排出→急速削減」「中排出→段階的削減」といった
                    <strong className="text-foreground">転換パス</strong>
                    を明示的に設計。
                    政策変更のタイミングが気候に与える影響を評価できます。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "LN (Low-to-Negative) — Overshoot scenario"
                  : "LN（Low-to-Negative）— オーバーシュートシナリオ"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    A scenario in which temperatures temporarily exceed 1.5°C
                    before being brought back down through large-scale Carbon
                    Dioxide Removal (CDR). This is the first systematic
                    experiment to test{" "}
                    <strong className="text-foreground">
                      whether the climate system is reversible
                    </strong>
                    .
                  </>
                ) : (
                  <>
                    1.5°Cを一時的に超過した後、
                    大規模な炭素除去（CDR: Carbon Dioxide Removal）で
                    気温を引き下げるシナリオ。
                    <strong className="text-foreground">
                      気候システムが可逆的かどうか
                    </strong>
                    を検証する初めての体系的な実験です。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Extension to 2500" : "2500年までの延長"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Since sea level rise and ice sheet dynamics respond on
                    multi-century timescales, long-term simulations beyond 2100
                    (2150 required, 2500 optional) have been incorporated. This
                    will provide critical data for long-term coastal flood risk
                    assessment.
                  </>
                ) : (
                  <>
                    海面上昇や氷床変動は数百年スケールで応答するため、
                    2100年以降の長期シミュレーション（2150年必須、2500年オプション）が
                    組み込まれました。
                    長期的な沿岸洪水リスク評価に重要なデータとなります。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "FaIR probabilistic ensemble"
                  : "FaIR確率的アンサンブル"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    A large ensemble of the simple climate model FaIR is used to
                    derive the probability distribution of temperature rise for
                    each scenario. It is also used to convert emissions to CO₂
                    concentrations.
                  </>
                ) : (
                  <>
                    簡易気候モデルFaIRの大規模アンサンブルで
                    各シナリオの気温上昇の確率分布を導出。
                    排出量からCO₂濃度への変換にも使用されています。
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Natural Forcing Prescriptions ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "Natural Forcing Prescriptions" : "自然強制力の処方"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Component" : "要素"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Approach" : "方針"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Solar activity" : "太陽活動"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Prescribed through 2299 following SOLARIS-HEPPA recommendations"
                      : "SOLARIS-HEPPA勧告に従い2299年まで処方"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Volcanic" : "火山"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Ramped from 2023 values to the 1850–2021 mean over 9 years, then held constant"
                      : "2023年の値から9年かけて1850–2021年平均に漸近、以降一定"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Implications for Flood Risk Assessment ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "Implications for Flood Risk Assessment"
              : "洪水リスク評価への示唆"}
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en
                  ? "SSP5-8.5 results need to be re-evaluated as upper-bound estimates"
                  : "SSP5-8.5の結果は上限推定として再評価が必要"}
              </strong>
              {en
                ? " — future risk assessments will use CMIP7's H scenario (a lower high-emission pathway) as the upper bound"
                : " — 今後のリスク評価ではCMIP7のHシナリオ（より低い高排出）が上限になる"}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Uncertainty range widens"
                  : "不確実性幅が広がる"}
              </strong>
              {en
                ? " — emission-driven experiments add carbon cycle uncertainty, so inter-model temperature spread increases even under the same scenario"
                : " — 排出駆動型により炭素循環の不確実性が加わるため、同じシナリオでもモデル間の気温差が大きくなる"}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Transition scenarios are useful for policy evaluation"
                  : "転換シナリオが政策評価に有用"}
              </strong>
              {en
                ? " — HL/ML scenarios enable quantification of flood risk differences between 'act now' vs. 'delayed action'"
                : " — HL/MLシナリオにより「今すぐ対策」vs「遅延対策」の洪水リスク差を定量化可能"}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Improved long-term sea level rise assessment"
                  : "長期海面上昇の評価が改善"}
              </strong>
              {en
                ? " — the 2500 extension provides data needed for ultra-long-term coastal flood risk assessment"
                : " — 2500年延長により、沿岸洪水リスクの超長期評価に必要なデータが提供される"}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Downscaling methods will need updating"
                  : "ダウンスケーリング手法の更新が必要"}
              </strong>
              {en
                ? " — downscaled datasets such as NEX-GDDP will transition to a CMIP7 basis, requiring updates to existing bias correction pipelines"
                : " — NEX-GDDP等のダウンスケーリング済みデータセットもCMIP7ベースに移行するため、既存のバイアス補正パイプラインの更新が必要になる"}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── CMIP7 Timeline ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "CMIP7 Timeline" : "CMIP7のスケジュール"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Period" : "時期"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Milestone" : "マイルストーン"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    2026
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Scenario design finalized (this paper); forcing data preparation"
                      : "シナリオ設計の確定（本論文）、強制力データの準備"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    2027–2028
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "ESM simulation runs; data publication begins"
                      : "ESMによるシミュレーション実行、データ公開開始"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    2028
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Input to IPCC Seventh Assessment Report (AR7); Global Stocktake"
                      : "IPCC第7次評価報告書（AR7）への入力、グローバルストックテイク"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Van Vuuren, D. P., O&apos;Neill, B. C., Tebaldi, C., et al.
              (2026). The Scenario Model Intercomparison Project for CMIP7
              (ScenarioMIP-CMIP7).
              <em> Geoscientific Model Development</em>, 19(7), 2627–2656. DOI:
              10.5194/gmd-19-2627-2026
            </li>
            <li>
              O&apos;Neill, B. C., et al. (2016). The Scenario Model
              Intercomparison Project (ScenarioMIP) for CMIP6.
              <em> Geoscientific Model Development</em>, 9(9), 3461–3482.
            </li>
            <li>
              Smith, C. J., et al. (2018). FAIR v1.3: a simple emissions-based
              impulse response and carbon cycle model.
              <em> Geoscientific Model Development</em>, 11(6), 2273–2297.
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
