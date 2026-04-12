import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "中央アジアにおける大規模洪水リスク評価 — データ不足地域への適用",
};

export default function CentralAsiaFloodRiskPost() {
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
            中央アジアにおける大規模洪水リスク評価 — データ不足地域への適用
          </h1>
          <p className="mt-3 text-xs text-muted">
            Ceresa, P. et al. (2025). Large-scale flood risk assessment in data-scarce areas: an application to Central Asia.
            <em> Natural Hazards and Earth System Sciences</em>, 25, 403-428.
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            論文の概要
          </h2>
          <p className="text-muted">
            中央アジア5カ国（カザフスタン、キルギス、タジキスタン、トルクメニスタン、ウズベキスタン）を対象とした、
            <strong className="text-foreground">初の高解像度・広域・越境的な確率論的洪水リスク評価</strong>です。
            データが不足する地域において、グローバルデータセットとローカルデータを統合し、
            現在および気候変動下（RCP4.5, 2080年）のリスクを定量化しました。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            背景と課題
          </h2>
          <p className="text-muted">
            中央アジアの河川洪水は主に春〜夏の融雪に起因し、
            1988〜2007年の間に死者数で第2位、被災人口で19%を占めました。
            しかし、<strong className="text-foreground">流量観測ネットワークが限られ、
            被害記録も断片的</strong>なため、定量的なリスク評価はこれまで実施されていませんでした。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            手法
          </h2>

          <h3 className="mb-2 font-medium text-foreground">データ統合戦略</h3>
          <p className="mb-4 text-muted">
            グローバルデータセット（ERA5-Land気象データ、MERIT Hydro DEM、GlobeLand30土地利用、WorldPop人口密度）と、
            現地機関から収集した建物特性・建設コスト・防災インフラ情報を統合。
            気象・流量データは「現地の制度的支援なしには取得困難」な地域であるため、
            このハイブリッドアプローチが不可欠でした。
          </p>

          <h3 className="mb-2 font-medium text-foreground">水文・水理モデリング</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">コンポーネント</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">モデル</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">仕様</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">水文</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">TOPKAPI-X</td>
                  <td className="border border-border px-3 py-2 text-muted">1km格子、1時間ステップ、ERA5-Land入力（1981-2020）、融雪モジュール搭載</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">氾濫</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">CA2D</td>
                  <td className="border border-border px-3 py-2 text-muted">約90m解像度、拡散波方程式、78,000河川区間×8再現期間</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">気候変動</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">RegCM4.3.5</td>
                  <td className="border border-border px-3 py-2 text-muted">MPI-ESM-MR駆動、RCP4.5、PDF matching法でバイアス補正</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">確率論的リスク評価</h3>
          <p className="text-muted">
            ハザードマップだけに依存せず、
            <strong className="text-foreground">10,000年分の合成洪水カタログ</strong>を生成。
            相関のある河川区間をクラスタリングし、空間的に整合性のある洪水シナリオを構築することで、
            極端イベントを含むリスクの全範囲を評価しました。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">脆弱性評価</h3>
          <p className="text-muted">
            建物被害にはINSYDEモデル（構造・非構造・仕上げ・設備の4要素）を使用し、
            各国の建物アーキタイプと現地の建設単価に基づいてカスタマイズ。
            農作物（綿花・小麦）にはHAZUSデータベースの脆弱性関数を適用しました。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            主な結果
          </h2>

          <h3 className="mb-2 font-medium text-foreground">現在のリスク</h3>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">絶対リスク</strong>:
              カザフスタンとウズベキスタンが最大の経済損失（曝露資産が大きいため）
            </li>
            <li>
              <strong className="text-foreground">相対リスク</strong>:
              カザフスタンとタジキスタンが最も高い（曝露資産あたりの年平均損失が6‰超）
            </li>
            <li>
              交通・農業セクターが全国で最も脆弱
            </li>
          </ul>

          <h3 className="mt-5 mb-2 font-medium text-foreground">気候変動影響（2080年, RCP4.5）</h3>
          <p className="text-muted">
            気候変動の影響は地理的に大きく異なりました。
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">リスク増加</strong>:
              カザフスタン・マンギスタウ地域が最も深刻な増加
            </li>
            <li>
              <strong className="text-foreground">リスク減少</strong>:
              トルクメニスタン（レバプ）、タジキスタン（ハトロン）、ウズベキスタン（サマルカンド）等
            </li>
          </ul>
          <p className="mt-2 text-muted">
            この不均一なパターンは、降水量変化・融雪タイミング・局所地形の複雑な相互作用を反映しています。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">検証</h3>
          <p className="text-muted">
            タジキスタン・ハマドニ2005年洪水で検証。
            モデル推定損失1,000万USDは報告値700〜1,000万USDと整合。
            8つの歴史的洪水イベントについても、損失超過確率曲線と報告値の一致を確認しました。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            意義と示唆
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">データ不足地域での方法論</strong>:
              グローバルデータセットとローカル情報を戦略的に統合するアプローチは、
              東南アジアやアフリカ等の他のデータ不足地域にも適用可能。
            </li>
            <li>
              <strong className="text-foreground">越境的アプローチ</strong>:
              河川システムが国境を越えて連結している中央アジアでは、
              国単位ではなく広域的なリスク評価が不可欠。
            </li>
            <li>
              <strong className="text-foreground">リスクファイナンス</strong>:
              損失超過確率曲線はパラメトリック保険設計や災害リスクファイナンスに直接利用可能。
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            限界
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>流量観測ネットワークの限界と被災後調査の欠如により、検証が1イベントに限定</li>
            <li>気候変動予測の不確実性が大きい（単一のGCM・RCPシナリオのみ使用）</li>
            <li>防災インフラの推定が人口密度相関に依存し、工学的仕様に基づかない</li>
            <li>気候変動下のリスクは住宅セクターのみ（将来の経済データが不足）</li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Ceresa, P. et al. (2025).
              Large-scale flood risk assessment in data-scarce areas: an application to Central Asia.
              <em>Natural Hazards and Earth System Sciences</em>, 25, 403-428.
              DOI: 10.5194/nhess-25-403-2025
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted">
            <a href="https://nhess.copernicus.org/articles/25/403/2025/" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">
              論文全文（オープンアクセス）
            </a>
          </p>
        </section>

      </article>
    </div>
  );
}
