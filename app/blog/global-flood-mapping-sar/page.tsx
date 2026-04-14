import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10年分のSARデータで世界の洪水を地図化する — 深層学習による全球洪水データセット",
};

export default function GlobalFloodMappingSarPost() {
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
            2025-04-13
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            10年分のSARデータで世界の洪水を地図化する — 深層学習による全球洪水データセット
          </h1>
          <p className="mt-3 text-xs text-muted">
            Misra, A. et al. (2025). Mapping global floods with 10 years of satellite radar data.
            <em> Nature Communications</em>, 16, 5762.
          </p>
          <a href="https://doi.org/10.1038/s41467-025-60973-1" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-highlight hover:underline">
            DOI: 10.1038/s41467-025-60973-1
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
            Microsoft AI for Good Research Labが、Sentinel-1 SARの10年分のアーカイブ（2014〜2024年）に
            深層学習モデルを適用し、<strong className="text-foreground">既存データセットより71%多い洪水域を検出した
            全球洪水データセット</strong>を構築しました。
            従来の光学衛星ベースのデータセット（GSW, MODIS）では雲に遮られて見逃されていた洪水を、
            SARの全天候観測能力で補完する画期的な研究です。
            モデルコード・予測結果・データセットがすべて公開されており、実務への即時適用が可能です。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            背景と課題
          </h2>
          <p className="text-muted">
            洪水は世界で最も頻繁に発生する自然災害であり、その被害は気候変動により拡大しています。
            正確な洪水マッピングは、リスク評価・災害対応・保険設計に不可欠ですが、
            既存のデータセットには以下の課題がありました。
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">光学衛星の雲被覆問題</strong>
              — MODISやLandsatは洪水を引き起こす降雨と同時に発生する雲により、
              最も重要なタイミングで観測できない。特に熱帯域で深刻。
            </li>
            <li>
              <strong className="text-foreground">時間解像度の制約</strong>
              — 数時間で終わるフラッシュフラッドは、6〜16日の再訪周期では捕捉できない。
            </li>
            <li>
              <strong className="text-foreground">空間的な偏り</strong>
              — 先進国に偏った被害報告に基づくデータベース（EM-DAT等）は、
              途上国の洪水を過小評価している。
            </li>
            <li>
              <strong className="text-foreground">手法の一貫性の欠如</strong>
              — イベントごとに異なるセンサー・閾値・手法で解析されており、
              時系列での比較が困難。
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            手法のポイント
          </h2>

          <h3 className="mb-2 font-medium text-foreground">1. 深層学習モデル（MobileNet変化検出）</h3>
          <p className="mb-3 text-muted">
            <strong className="text-foreground">MobileNet early fusion change detection model</strong>を採用。
            軽量なアーキテクチャにより、限られた計算資源でもピクセルレベルの分類が可能です。
          </p>
          <p className="mb-3 text-muted">
            入力は4チャンネルで構成されます：
          </p>
          <ul className="ml-4 list-disc space-y-1 text-muted">
            <li>VV偏波の二値変化指標</li>
            <li>VH偏波の二値変化指標</li>
            <li>VV帯のデルタ振幅（後方散乱変化量）</li>
            <li>VH帯のデルタ振幅</li>
          </ul>
          <p className="mt-3 text-muted">
            重要な知見として、<strong className="text-foreground">生の振幅値をそのまま使うよりも、
            水の存在と整合するピクセル値の範囲でフィルタリングした方が精度が向上</strong>しました。
            具体的には、VV帯で−17.5 dB以下、VH帯で−22.5 dB以下を水面のシグナチャとしています。
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">2. 学習データと前処理</h3>
          <p className="mb-3 text-muted">
            学習データは4つの大規模洪水イベントから手動ラベリングで構築されました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">イベント</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">時期</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">パキスタン洪水</td>
                  <td className="border border-border px-3 py-2 text-muted">2022年8月</td>
                  <td className="border border-border px-3 py-2 text-muted">学習</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">ギリシャ洪水</td>
                  <td className="border border-border px-3 py-2 text-muted">2023年9月</td>
                  <td className="border border-border px-3 py-2 text-muted">学習</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">モザンビーク洪水</td>
                  <td className="border border-border px-3 py-2 text-muted">2023年3月</td>
                  <td className="border border-border px-3 py-2 text-muted">検証</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">エチオピア南東部洪水</td>
                  <td className="border border-border px-3 py-2 text-muted">2023年11月</td>
                  <td className="border border-border px-3 py-2 text-muted">テスト</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            SAR前処理として、軌道補正、ガンマ補正（入射角による後方散乱の正規化）、
            PlanetDEMを用いた地形補正、スペックルフィルタリングを適用。
            連続する画像ペア（30日以内、同一観測ジオメトリ）を比較する変化検出手法を採用しています。
          </p>

          <h3 className="mt-6 mb-2 font-medium text-foreground">3. 誤検出の低減（後処理）</h3>
          <p className="mb-3 text-muted">
            SARによる洪水検出では誤検出が大きな課題です。本研究では5種類の補助データセットを用いたフィルタリングを実施しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">補助データ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">土壌水分（10km）</td>
                  <td className="border border-border px-3 py-2 text-muted">乾燥地域の誤検出を除外</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">地表面温度</td>
                  <td className="border border-border px-3 py-2 text-muted">凍結・融解サイクルによる誤検出を除外</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">DEM（傾斜）</td>
                  <td className="border border-border px-3 py-2 text-muted">10°以上の急傾斜地（地形影）を除外</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">ESA土地被覆</td>
                  <td className="border border-border px-3 py-2 text-muted">裸地・都市域を除外</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">恒常的水域</td>
                  <td className="border border-border px-3 py-2 text-muted">湖沼・河川のノイズ低減</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-6 mb-2 font-medium text-foreground">4. 10年間の時系列解析</h3>
          <p className="text-muted">
            2014年10月〜2024年9月の全Sentinel-1アーカイブに一貫した手法を適用。
            月次の洪水面積を集計し、利用可能なSAR観測数で正規化。
            季節成分・トレンド・残差に分解し、季節ダミー変数を含む線形回帰で長期トレンドを推定しました。
            2021年後半のSentinel-1オフライン期間（観測数約50%減）や、
            2017年6月以前の単偏波データなど、データの不均一性にも対処しています。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            主な数値結果
          </h2>

          <h3 className="mb-2 font-medium text-foreground">モデル精度</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">評価</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">IoU</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">精度</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">再現率</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">F1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">内部テストセット</td>
                  <td className="border border-border px-3 py-2 text-muted">0.67</td>
                  <td className="border border-border px-3 py-2 text-muted">0.68</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">0.99</td>
                  <td className="border border-border px-3 py-2 text-muted">0.80</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">Kuro Siwoベンチマーク（43イベント）</td>
                  <td className="border border-border px-3 py-2 text-muted">0.63</td>
                  <td className="border border-border px-3 py-2 text-muted">0.84</td>
                  <td className="border border-border px-3 py-2 text-muted">0.72</td>
                  <td className="border border-border px-3 py-2 text-muted">0.77</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-muted">
            Kuro Siwoベンチマーク上のF1=0.77は、既存モデル（0.75〜0.80）と同等で、Copernicus GFMシステム（0.72）を上回る。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">既存データセットとの比較</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">比較</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">追加検出率</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">全球（GSW + MODIS比）</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+71%</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">アフリカ全域</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+90%</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">エチオピア</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+194%</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 text-muted">エチオピア・ドロアド</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">+1013%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">10年間の洪水トレンド</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">シナリオ</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">年間増加率</th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">p値</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">全データ</td>
                  <td className="border border-border px-3 py-2 text-muted">6% ± 2%</td>
                  <td className="border border-border px-3 py-2 text-muted">0.0005</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">2022年除外（著者推奨）</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">5% ± 2%</td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">0.01</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 text-muted">2017年以前＆2022年除外</td>
                  <td className="border border-border px-3 py-2 text-muted">2% ± 3%</td>
                  <td className="border border-border px-3 py-2 text-muted">0.5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-muted">
            著者推奨の推定値（年5%増）は、10年で約60%の洪水面積増加に相当する。
            ナイジェリア〜エチオピア回廊での増加傾向はCMIP6の降水予測と相関するが、因果関係の結論には慎重。
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">ケニア2024年洪水（リアルタイム適用）</h3>
          <p className="text-muted">
            2024年春のケニア洪水に対してリアルタイムで適用。
            推定<strong className="text-foreground">75,000ヘクタール</strong>の農地被害を検出し、
            政府の公式統計（68,000ヘクタール）と概ね一致しました。
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            意義と示唆
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">光学衛星の限界を補完</strong>:
              雲被覆により見逃されていた洪水を全球で71%多く検出。特にアフリカ・南アジアで効果大。
            </li>
            <li>
              <strong className="text-foreground">一貫した長期データセット</strong>:
              10年間を同一手法で処理することで、時系列比較とトレンド分析が初めて可能に。
            </li>
            <li>
              <strong className="text-foreground">リアルタイム災害対応</strong>:
              ケニア洪水での実証により、最小限の人的介入で日次更新が可能であることを示した。
            </li>
            <li>
              <strong className="text-foreground">完全オープン</strong>:
              モデルコード（GitHub）、予測結果（Hugging Face）、入力データ（Planetary Computer）が
              すべて公開されており、誰でも再現・拡張が可能。
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            限界
          </h2>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>フラッシュフラッド（数時間の洪水）はSentinel-1の再訪周期（6〜12日）では捕捉できない</li>
            <li>都市部では建物の干渉で検出精度が著しく低下する</li>
            <li>水田の灌漑と洪水の区別が困難（意図的な浸水と自然洪水が同じシグナチャ）</li>
            <li>学習データが4イベントに限定されており、多様な土壌水分条件・地形の学習が不十分</li>
            <li>10年間のデータでは気候変動への因果帰属は困難</li>
            <li>補助データの空間解像度が粗い（土壌水分: 10km）ため、ピクセルレベルでの学習に不適</li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Misra, A., White, K., Fobi Nsutezo, S., Straka, W., & Lavista, J. (2025).
              Mapping global floods with 10 years of satellite radar data.
              <em>Nature Communications</em>, 16, 5762.
              DOI: 10.1038/s41467-025-60973-1
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted">
            <a href="https://github.com/microsoft/ai4g-flood" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">GitHub（モデルコード）</a>
            {" / "}
            <a href="https://huggingface.co/datasets/ai-for-good-lab/ai4g-flood-dataset" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">Hugging Face（データセット）</a>
          </p>
        </section>

      </article>
    </div>
  );
}
