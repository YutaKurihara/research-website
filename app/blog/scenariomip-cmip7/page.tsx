import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ScenarioMIP-CMIP7 — 次期気候モデル比較の7シナリオ設計と排出駆動型への転換",
};

export default function ScenarioMipCmip7Post() {
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
            ScenarioMIP-CMIP7 — 次期気候モデル比較の7シナリオ設計と排出駆動型への転換
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
        {/* ── この論文を読むべき理由 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            この論文を読むべき理由
          </h2>
          <p className="text-muted">
            CMIP（結合モデル相互比較プロジェクト）は、世界中の気候モデルを
            共通のシナリオで走らせ、その結果をIPCC報告書の科学的基盤とする枠組みです。
            CMIP6ではSSP1-2.6〜SSP5-8.5の5シナリオが使われましたが、
            <strong className="text-foreground">CMIP7では7つの新シナリオ</strong>
            が設計され、実験手法も大きく変わります。
            洪水リスク評価や気候変動影響分析に携わるなら、
            今後数年間のグローバルな気候予測の「入力」が
            どう変わるかを理解しておくことが重要です。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── CMIP6からの主要変更点 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            CMIP6からの主要変更点
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    項目
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
                    シナリオ数
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    5（SSP1-2.6〜SSP5-8.5）
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    7（H, HL, M, ML, L, VL, LN）
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    CO₂の扱い
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    濃度駆動型（concentration-driven）
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    排出駆動型（emission-driven）
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    高排出シナリオ
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    SSP5-8.5（8.5 W/m²）
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    H（SSP5-8.5より低い — 非現実的と判断）
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    歴史期間の終点
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    2015年
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    2023年
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    延長シミュレーション
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    2100年まで（一部2300年）
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    2150年必須、2500年オプション
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    アンサンブル
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    推奨なし
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    最低5メンバー推奨
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 7つのシナリオ ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            7つのコアシナリオ
          </h2>
          <p className="mb-4 text-muted">
            CMIP6のSSPシナリオとは異なり、
            排出経路の<strong className="text-foreground">形状</strong>（高→低への転換など）を
            明示的に設計しています。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    略称
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    名称
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    排出経路の特徴
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    2100年の気温上昇
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
                    高排出を維持。ただしSSP5-8.5よりは低く設定
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
                    初期は高排出、後半に急速削減（遅延緩和）
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
                    現行政策の延長。緩やかな排出減少
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
                    中期以降に緩和を強化
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
                    2°C目標に整合する排出削減経路
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~2.0°C未満
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
                    1.5°C目標。早期かつ急速な排出削減
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
                    一時的にオーバーシュート後、大規模CDRで回復
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~1.5°C（回復後）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 排出駆動型の意味 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            排出駆動型への転換 — 何が変わるのか
          </h2>
          <p className="mb-3 text-muted">
            CMIP6ではCO₂<strong className="text-foreground">濃度</strong>を
            シナリオとして与え（concentration-driven）、
            すべてのESM（地球システムモデル）が同じCO₂濃度で計算していました。
            CMIP7では CO₂<strong className="text-foreground">排出量</strong>を与え（emission-driven）、
            各ESMが自身の炭素循環モデルで濃度を計算します。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    方式
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    入力
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    モデルが計算
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    意義
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    濃度駆動型
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    CO₂濃度の時系列
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    気温・降水等のみ
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    全モデルで同じ濃度 → 気候応答の比較が容易
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    排出駆動型
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    CO₂排出量の時系列
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    CO₂濃度 + 気温・降水等
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    炭素循環の不確実性を含む → より現実的な不確実性幅
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            排出駆動型では、
            <strong className="text-foreground">
              炭素循環のフィードバック（永久凍土融解、森林火災、海洋吸収の変化）
            </strong>
            がモデルごとに異なるため、同じ排出量でもCO₂濃度に差が生じます。
            これにより気候予測の不確実性をより完全に評価できますが、
            モデル間の比較は複雑になります。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── SSP5-8.5の廃止 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            SSP5-8.5が消えた理由
          </h2>
          <p className="text-muted">
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
          </p>
          <p className="mt-2 text-muted">
            これは洪水リスク評価にも影響します。
            SSP5-8.5で計算された極端降水の増加率は
            <strong className="text-foreground">上限として過大評価</strong>
            だった可能性があり、
            CMIP7のシナリオ範囲はより現実的な不確実性幅を提供します。
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 新しい設計要素 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            新しい設計要素
          </h2>

          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                経路の「形状」を重視
              </p>
              <p className="text-muted">
                HLやMLシナリオのように
                「高排出→急速削減」「中排出→段階的削減」といった
                <strong className="text-foreground">転換パス</strong>
                を明示的に設計。
                政策変更のタイミングが気候に与える影響を評価できます。
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                LN（Low-to-Negative）— オーバーシュートシナリオ
              </p>
              <p className="text-muted">
                1.5°Cを一時的に超過した後、
                大規模な炭素除去（CDR: Carbon Dioxide Removal）で
                気温を引き下げるシナリオ。
                <strong className="text-foreground">
                  気候システムが可逆的かどうか
                </strong>
                を検証する初めての体系的な実験です。
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                2500年までの延長
              </p>
              <p className="text-muted">
                海面上昇や氷床変動は数百年スケールで応答するため、
                2100年以降の長期シミュレーション（2150年必須、2500年オプション）が
                組み込まれました。
                長期的な沿岸洪水リスク評価に重要なデータとなります。
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                FaIR確率的アンサンブル
              </p>
              <p className="text-muted">
                簡易気候モデルFaIRの大規模アンサンブルで
                各シナリオの気温上昇の確率分布を導出。
                排出量からCO₂濃度への変換にも使用されています。
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 自然強制力 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            自然強制力の処方
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    要素
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    方針
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    太陽活動
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    SOLARIS-HEPPA勧告に従い2299年まで処方
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    火山
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    2023年の値から9年かけて1850–2021年平均に漸近、以降一定
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 実務への示唆 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            洪水リスク評価への示唆
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">SSP5-8.5の結果は上限推定として再評価が必要</strong>
              — 今後のリスク評価ではCMIP7のHシナリオ（より低い高排出）が上限になる
            </li>
            <li>
              <strong className="text-foreground">不確実性幅が広がる</strong>
              — 排出駆動型により炭素循環の不確実性が加わるため、
              同じシナリオでもモデル間の気温差が大きくなる
            </li>
            <li>
              <strong className="text-foreground">転換シナリオが政策評価に有用</strong>
              — HL/MLシナリオにより「今すぐ対策」vs「遅延対策」の洪水リスク差を定量化可能
            </li>
            <li>
              <strong className="text-foreground">長期海面上昇の評価が改善</strong>
              — 2500年延長により、沿岸洪水リスクの超長期評価に必要なデータが提供される
            </li>
            <li>
              <strong className="text-foreground">ダウンスケーリング手法の更新が必要</strong>
              — NEX-GDDP等のダウンスケーリング済みデータセットもCMIP7ベースに移行するため、
              既存のバイアス補正パイプラインの更新が必要になる
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── タイムライン ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            CMIP7のスケジュール
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    時期
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    マイルストーン
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    2026年
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    シナリオ設計の確定（本論文）、強制力データの準備
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">
                    2027–2028年
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ESMによるシミュレーション実行、データ公開開始
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">
                    2028年
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    IPCC第7次評価報告書（AR7）への入力、グローバルストックテイク
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
              Van Vuuren, D. P., O&apos;Neill, B. C., Tebaldi, C., et al. (2026).
              The Scenario Model Intercomparison Project for CMIP7 (ScenarioMIP-CMIP7).
              <em> Geoscientific Model Development</em>, 19(7), 2627–2656.
              DOI: 10.5194/gmd-19-2627-2026
            </li>
            <li>
              O&apos;Neill, B. C., et al. (2016).
              The Scenario Model Intercomparison Project (ScenarioMIP) for CMIP6.
              <em> Geoscientific Model Development</em>, 9(9), 3461–3482.
            </li>
            <li>
              Smith, C. J., et al. (2018).
              FAIR v1.3: a simple emissions-based impulse response and carbon cycle model.
              <em> Geoscientific Model Development</em>, 11(6), 2273–2297.
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
