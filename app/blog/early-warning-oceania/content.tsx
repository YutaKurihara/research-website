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
            2026-06-14
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Early Warning Systems in Oceania — Vulnerability of Pacific Island Nations and Regional Cooperation"
              : "大洋州・オセアニアにおける早期警報の現状と課題 — 太平洋島嶼国の脆弱性と地域協力"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "A comprehensive review of early warning system (EWS) development, meteorological observation networks, regional cooperation frameworks, and last-mile delivery challenges across Pacific Island Countries and Territories (PICTs). Based on WMO, SPREP, SPC, and IPCC AR6 assessments."
              : "太平洋島嶼国・地域（PICTs）における早期警報システム（EWS）の構築、気象観測網、地域協力枠組み、ラストマイルの課題を包括的にレビュー。WMO、SPREP、SPC、IPCC AR6等の報告書に基づく。"}
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* ── 1. Oceania Disaster Risk Profile ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "1. Oceania Disaster Risk Profile"
              : "1. 大洋州の災害リスクプロファイル"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The Pacific region encompasses{" "}
                <strong className="text-foreground">
                  14 Pacific Island Countries and Territories (PICTs)
                </strong>{" "}
                — Papua New Guinea, Fiji, Solomon Islands, Vanuatu, Samoa,
                Tonga, Kiribati, Federated States of Micronesia (FSM), Marshall
                Islands, Palau, Tuvalu, Nauru, Cook Islands, and Niue — spread
                across an ocean area exceeding 30 million km&sup2;, yet with a
                combined land area of only about 550,000 km&sup2; and total
                population of approximately 12.5 million. This extreme
                geographic dispersion creates unique disaster risk
                characteristics found nowhere else on Earth.
              </>
            ) : (
              <>
                太平洋地域には{" "}
                <strong className="text-foreground">
                  14の太平洋島嶼国・地域（PICTs）
                </strong>{" "}
                — パプアニューギニア、フィジー、ソロモン諸島、バヌアツ、サモア、
                トンガ、キリバス、ミクロネシア連邦（FSM）、マーシャル諸島、パラオ、
                ツバル、ナウル、クック諸島、ニウエ —
                が含まれ、3,000万km&sup2;を超える海洋面積に対し、
                陸地面積はわずか約55万km&sup2;、総人口は約1,250万人に過ぎません。
                この極端な地理的分散が、
                地球上で他に類を見ない災害リスク特性を生み出しています。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                The region faces a convergence of{" "}
                <strong className="text-foreground">
                  multiple natural hazards
                </strong>
                : tropical cyclones (TCs) averaging 7-10 per season in the
                South Pacific basin, riverine and flash flooding (particularly
                in PNG, Fiji, and Solomon Islands), prolonged droughts linked to
                ENSO, tsunamis from the Pacific Ring of Fire, volcanic
                eruptions (the 2022 Hunga Tonga-Hunga Ha&apos;apai eruption
                demonstrated catastrophic potential), and chronic sea-level rise
                threatening the very existence of low-lying atoll nations.
              </>
            ) : (
              <>
                この地域は{" "}
                <strong className="text-foreground">
                  複数の自然災害リスク
                </strong>{" "}
                が集中しています。南太平洋海盆では年平均7-10個の熱帯低気圧（TC）が発生し、
                河川洪水・鉄砲水（特にPNG、フィジー、ソロモン諸島）、
                ENSOに連動する長期干ばつ、環太平洋火山帯からの津波、
                火山噴火（2022年フンガ・トンガ＝フンガ・ハアパイ噴火は壊滅的影響を実証）、
                そして低地環礁国家の存続そのものを脅かす慢性的な海面上昇が脅威となっています。
              </>
            )}
          </p>

          <p className="mb-4 text-muted">
            {en ? (
              <>
                The{" "}
                <strong className="text-foreground">WorldRiskIndex</strong>{" "}
                consistently ranks Pacific nations among the world&apos;s most
                at-risk. Vanuatu has been ranked #1 globally in multiple years,
                with Tonga typically in the top 3 and Solomon Islands in the top
                10. These rankings reflect not only high hazard exposure but
                also extreme vulnerability due to limited coping and adaptive
                capacities. Economic losses from a single TC can exceed 50% of
                GDP — TC Pam (2015) caused damage equivalent to 64% of
                Vanuatu&apos;s GDP, and TC Harold (2020) affected four countries
                simultaneously. Climate change is amplifying these risks: TC
                intensity is projected to increase by 2-11% under RCP4.5, ENSO
                variability is expected to intensify, and king tides are
                becoming more frequent and damaging as mean sea levels rise.
              </>
            ) : (
              <>
                <strong className="text-foreground">WorldRiskIndex</strong>{" "}
                は太平洋島嶼国を一貫して世界で最もリスクの高い国々に位置づけています。
                バヌアツは複数年にわたり世界第1位、
                トンガは通常トップ3以内、ソロモン諸島はトップ10に入っています。
                これらのランキングはハザード曝露の高さだけでなく、
                対処能力・適応能力の限界による極端な脆弱性を反映しています。
                単一のTCによる経済損失がGDPの50%を超えることもあり、
                TC Pam（2015年）はバヌアツのGDPの64%に相当する被害を、
                TC Harold（2020年）は4カ国に同時被害をもたらしました。
                気候変動がこれらのリスクを増幅しており、
                RCP4.5下でTC強度は2-11%の増加が予測され、
                ENSO変動の激化、平均海面上昇に伴うキングタイドの頻度増加と被害拡大が見込まれています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Country" : "国名"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Population (approx.)" : "人口（概数）"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "WorldRiskIndex Rank" : "WorldRiskIndex順位"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Hazards" : "主要ハザード"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Terrain" : "地形"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Vanuatu" : "バヌアツ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    320,000
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    #1
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "TC, earthquake, tsunami, volcano, flooding"
                      : "TC・地震・津波・火山・洪水"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Volcanic islands" : "火山島"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Tonga" : "トンガ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    106,000
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    #2-3
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "TC, tsunami, volcano, sea-level rise"
                      : "TC・津波・火山・海面上昇"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Low islands + volcanic" : "低地島＋火山島"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Solomon Islands" : "ソロモン諸島"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    720,000
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    #4-8
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "TC, earthquake, tsunami, flooding, landslide"
                      : "TC・地震・津波・洪水・地すべり"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Mountainous volcanic" : "山岳火山島"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Papua New Guinea" : "パプアニューギニア"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    10,000,000
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    #10-15
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Earthquake, volcano, flooding, landslide, TC"
                      : "地震・火山・洪水・地すべり・TC"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Mountainous + coastal" : "山岳＋沿岸"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Fiji" : "フィジー"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    930,000
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    #15-20
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "TC, flooding, drought, sea-level rise"
                      : "TC・洪水・干ばつ・海面上昇"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Volcanic islands + atolls"
                      : "火山島＋環礁"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Samoa" : "サモア"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    220,000
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    #15-25
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "TC, tsunami, flooding, volcanic"
                      : "TC・津波・洪水・火山"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Volcanic islands" : "火山島"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Kiribati" : "キリバス"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    130,000
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "High vulnerability" : "高脆弱性"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Sea-level rise, drought, king tides"
                      : "海面上昇・干ばつ・キングタイド"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Low-lying atolls (max 3m)" : "低地環礁（最大3m）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Marshall Islands" : "マーシャル諸島"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    42,000
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "High vulnerability" : "高脆弱性"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Sea-level rise, drought, king tides, TC"
                      : "海面上昇・干ばつ・キングタイド・TC"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Low-lying atolls (max 2m)" : "低地環礁（最大2m）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Tuvalu" : "ツバル"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    11,000
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Existential threat"
                      : "存続的脅威"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Sea-level rise, king tides, TC"
                      : "海面上昇・キングタイド・TC"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Low-lying atolls (max 4.5m)" : "低地環礁（最大4.5m）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 2. Meteorological Observation Network ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "2. Meteorological Observation Network"
              : "2. 気象観測ネットワークの現状"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The Pacific region suffers from one of the{" "}
                <strong className="text-foreground">
                  most severe observational data gaps
                </strong>{" "}
                on the planet. National Meteorological and Hydrological Services
                (NMHS) across PICTs operate with extremely limited resources,
                and the vast ocean distances between island groups make network
                maintenance extraordinarily challenging. The WMO&apos;s Global
                Basic Observing Network (GBON) compliance assessment reveals
                that most Pacific SIDS fall far below minimum density
                requirements for surface and upper-air observations.
              </>
            ) : (
              <>
                太平洋地域は地球上で{" "}
                <strong className="text-foreground">
                  最も深刻な観測データギャップ
                </strong>{" "}
                を抱える地域の一つです。PICTs各国の国家気象水文サービス（NMHS）は
                極めて限られたリソースで運営されており、
                島嶼群間の広大な海洋距離がネットワーク維持を極めて困難にしています。
                WMOの全球基本観測ネットワーク（GBON）準拠評価によれば、
                太平洋SIDS（小島嶼開発途上国）の大部分は
                地上・高層観測の最低密度要件を大幅に下回っています。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">
                  Automatic Weather Stations (AWS)
                </strong>{" "}
                have been deployed through various donor-funded projects
                (JICA, BoM Australia, EU, Finland), but maintenance remains the
                critical bottleneck. Many AWS units become non-functional within
                2-3 years of installation due to corrosion from salt spray,
                spare parts supply chain issues, and lack of trained
                technicians. For example, in Solomon Islands, only about 40% of
                installed AWS were operational at any given time as of 2023.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  自動気象観測装置（AWS）
                </strong>{" "}
                は各種ドナー資金プロジェクト（JICA、豪州気象局、EU、フィンランド）を通じて
                配備されてきましたが、維持管理が最大のボトルネックです。
                多くのAWSは塩害による腐食、スペアパーツの供給問題、
                訓練された技術者の不足により、設置後2-3年で機能不全に陥ります。
                例えばソロモン諸島では、2023年時点で
                設置済みAWSの約40%しか稼働していませんでした。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">
                  Upper-air observations (radiosondes)
                </strong>{" "}
                are critically sparse. In the entire Pacific Ocean region,
                only a handful of stations conduct regular radiosonde launches
                — primarily Nadi (Fiji), Port Moresby (PNG), Honiara (Solomon
                Islands), Funafuti (Tuvalu), and Apia (Samoa), along with
                territorial stations on Guam and New Caledonia. The recommended
                WMO frequency of twice-daily launches is not met by most
                stations due to consumable costs (~USD 200-400 per sonde). This
                creates a massive{" "}
                <strong className="text-foreground">
                  &quot;data desert&quot;
                </strong>{" "}
                that directly degrades numerical weather prediction (NWP) skill
                over the Pacific basin.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  高層気象観測（ラジオゾンデ）
                </strong>{" "}
                は決定的に不足しています。太平洋全域で定期的にラジオゾンデ観測を行っている
                観測所はごくわずかで、主にナディ（フィジー）、ポートモレスビー（PNG）、
                ホニアラ（ソロモン諸島）、フナフティ（ツバル）、アピア（サモア）に加え、
                グアムとニューカレドニアの領土観測所のみです。
                WMO推奨の1日2回の放球は、消耗品コスト（1個あたり約200-400米ドル）のため
                ほとんどの観測所で達成されていません。
                これにより太平洋域の数値天気予報（NWP）の予測精度を直接低下させる{" "}
                <strong className="text-foreground">
                  「データ砂漠」
                </strong>
                が生じています。
              </>
            )}
          </p>

          <p className="mb-4 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">
                  Weather radar coverage
                </strong>{" "}
                is extremely limited in the Pacific. Only Fiji (Nausori),
                New Caledonia, and Guam (US NWS) operate operational weather
                radars. The remaining PICTs have no radar coverage whatsoever,
                relying entirely on satellite imagery — primarily{" "}
                <strong className="text-foreground">Himawari-9</strong> (JMA)
                for the western and central Pacific, and{" "}
                <strong className="text-foreground">GOES-West</strong> (NOAA)
                for eastern areas. Tide gauge networks, maintained through the
                Pacific Sea Level Monitoring Project, provide critical data for
                tsunami and storm surge warnings, with approximately 14 SEAFRAME
                stations across the region.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  気象レーダーのカバー範囲
                </strong>{" "}
                は太平洋では極めて限定的です。フィジー（ナウソリ）、ニューカレドニア、
                グアム（米国NWS）のみが運用中の気象レーダーを保有しています。
                残りのPICTsにはレーダーが一切なく、衛星画像に完全に依存しています。
                主に西太平洋・中部太平洋では{" "}
                <strong className="text-foreground">ひまわり9号</strong>（気象庁）、
                東部では{" "}
                <strong className="text-foreground">GOES-West</strong>（NOAA）が
                使用されています。
                Pacific Sea Level Monitoring Projectで維持される潮位計ネットワークは、
                約14のSEAFRAME観測点で
                津波・高潮警報に不可欠なデータを提供しています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Country" : "国名"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Synoptic Stations" : "地上気象官署"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    AWS
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Radiosonde" : "ラジオゾンデ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Radar" : "レーダー"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Tide Gauge" : "潮位計"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Fiji" : "フィジー"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    8
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~20
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Yes (Nadi)" : "有（ナディ）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "1 (Nausori)" : "1（ナウソリ）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Yes (SEAFRAME)" : "有（SEAFRAME）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    PNG
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    15-20
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~15
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Yes (Port Moresby)"
                      : "有（ポートモレスビー）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "None" : "なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Yes" : "有"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Samoa" : "サモア"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    3
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~10
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Yes (Apia)" : "有（アピア）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "None" : "なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Yes (SEAFRAME)" : "有（SEAFRAME）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Vanuatu" : "バヌアツ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    4
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~8
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "No" : "なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "None" : "なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Yes (SEAFRAME)" : "有（SEAFRAME）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Tonga" : "トンガ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    3
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~6
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "No" : "なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "None" : "なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Yes (SEAFRAME)" : "有（SEAFRAME）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Solomon Islands" : "ソロモン諸島"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    5
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~8
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Yes (Honiara)" : "有（ホニアラ）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "None" : "なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Yes (SEAFRAME)" : "有（SEAFRAME）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Kiribati" : "キリバス"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    2
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~4
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "No" : "なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "None" : "なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Yes (SEAFRAME)" : "有（SEAFRAME）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Tuvalu" : "ツバル"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    1
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~2
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Yes (Funafuti)" : "有（フナフティ）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "None" : "なし"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Yes (SEAFRAME)" : "有（SEAFRAME）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 3. Current EWS Framework ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "3. Current Early Warning System Framework"
              : "3. 現行の早期警報体制"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">NMHS capacity</strong> in
                the Pacific varies enormously. Fiji Meteorological Service
                (FMS) is the largest with approximately 80-100 staff and serves
                as the WMO Regional Specialized Meteorological Centre (RSMC)
                for tropical cyclone warnings. Most other PICTs have NMHS
                staffing levels of just{" "}
                <strong className="text-foreground">5-30 personnel</strong>,
                often without 24/7 operational capacity. Some of the smallest
                nations (Nauru, Niue, Palau) have only 2-5 meteorological
                staff. This means warnings must often be issued by a single
                forecaster on duty, creating obvious risks of human error and
                fatigue during prolonged severe weather events.
              </>
            ) : (
              <>
                太平洋における{" "}
                <strong className="text-foreground">NMHSの能力</strong>{" "}
                は国により大きく異なります。フィジー気象局（FMS）は約80-100名の職員を擁し
                最大規模で、WMOの熱帯低気圧警報のための地域特別気象センター（RSMC）を
                務めています。しかし他のPICTsのNMHSは
                通常わずか{" "}
                <strong className="text-foreground">5-30名</strong>{" "}
                の人員で運営されており、24時間体制の運用能力を持たない場合がほとんどです。
                最小国（ナウル、ニウエ、パラオ）では気象職員が2-5名のみです。
                これは長期間の荒天時に単独の予報官が警報を発出せねばならない状況を意味し、
                ヒューマンエラーや疲労のリスクが明白です。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">
                  Tsunami warning
                </strong>{" "}
                in the Pacific is coordinated by the{" "}
                <strong className="text-foreground">
                  Pacific Tsunami Warning Center (PTWC)
                </strong>{" "}
                based in Ewa Beach, Hawaii. PTWC monitors seismic activity and
                issues initial threat assessments within 3-5 minutes of a
                significant earthquake. Each PICT designates a Tsunami Warning
                Focal Point — typically the NMHS or NDMO — responsible for
                translating PTWC advisories into national warnings and
                activating response procedures. The 2022 Hunga Tonga event
                exposed critical gaps: the submarine cable connecting Tonga was
                severed, making communication impossible for days, and the
                unprecedented nature of the volcano-generated tsunami challenged
                existing warning protocols.
              </>
            ) : (
              <>
                太平洋における{" "}
                <strong className="text-foreground">
                  津波警報
                </strong>{" "}
                は、ハワイ州エヴァビーチに拠点を置く{" "}
                <strong className="text-foreground">
                  太平洋津波警報センター（PTWC）
                </strong>{" "}
                が調整しています。PTWCは地震活動を監視し、重大な地震発生後3-5分以内に
                初期脅威評価を発出します。各PICTは津波警報フォーカルポイント
                （通常NMHSまたはNDMO）を指定し、PTWCの注意報を国内警報に変換して
                対応手順を発動する責任を負っています。
                2022年のフンガ・トンガ事象では重大なギャップが露呈しました。
                トンガに接続する海底ケーブルが切断され数日間通信不能となり、
                火山起源津波の前例のない性質が既存の警報プロトコルに挑戦しました。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">
                  Tropical cyclone warning
                </strong>{" "}
                is issued by{" "}
                <strong className="text-foreground">RSMC Nadi</strong> (Fiji
                Meteorological Service) for the area 0-25&deg;S,
                160&deg;E-120&deg;W, and by{" "}
                <strong className="text-foreground">
                  TCWC Brisbane
                </strong>{" "}
                (Australian Bureau of Meteorology) for the area south of
                10&deg;S between 90&deg;E and 160&deg;E. These centers provide
                track forecasts, intensity estimates, and guidance to national
                NMHS, which then issue national-level warnings. Lead times for
                TC warnings have improved to 72+ hours for track forecasts, but
                intensity forecasting remains challenging, and rapid
                intensification events (which are becoming more frequent under
                climate change) can reduce effective warning times
                significantly.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  熱帯低気圧警報
                </strong>{" "}
                は{" "}
                <strong className="text-foreground">RSMCナディ</strong>（フィジー気象局）が
                南緯0-25度、東経160度-西経120度の範囲を、{" "}
                <strong className="text-foreground">
                  TCWCブリスベン
                </strong>（オーストラリア気象局）が南緯10度以南の東経90度-160度の範囲を
                担当しています。これらのセンターは進路予報、強度推定、
                国別NMHSへのガイダンスを提供し、各国が国内警報を発出します。
                TC警報のリードタイムは進路予報で72時間以上に改善されていますが、
                強度予報は依然として困難であり、
                気候変動下で頻度が増加している急速強化イベントは
                実効的な警報時間を大幅に短縮する可能性があります。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">Flood early warning</strong>{" "}
                coverage is limited to a few major river basins, primarily in
                Fiji (Rewa, Ba, Nadi rivers) and PNG (Sepik, Fly, Markham
                rivers). Most PICTs lack hydrological monitoring networks
                entirely. Flash flood warnings rely heavily on satellite-based
                rainfall estimates and global NWP guidance rather than in-situ
                gauging.{" "}
                <strong className="text-foreground">
                  Drought early warning
                </strong>{" "}
                is addressed through the Pacific Islands Climate Outlook Forum
                (PICOF), which produces seasonal outlooks based on ENSO state
                and multi-model consensus forecasts, held bi-annually.
                Community-based EWS, such as river-level sirens and community
                wardens, have been established in high-risk areas of Fiji,
                Solomon Islands, and Vanuatu, but sustainability remains a
                concern.
              </>
            ) : (
              <>
                <strong className="text-foreground">洪水早期警報</strong>{" "}
                の対象はいくつかの主要河川流域に限られ、主にフィジー（レワ川、バ川、ナディ川）と
                PNG（セピック川、フライ川、マーカム川）で運用されています。
                ほとんどのPICTsは水文観測ネットワークを全く持っていません。
                鉄砲水の警報は現地の観測機器ではなく、衛星降雨推定やグローバルNWPガイダンスに
                大きく依存しています。
                <strong className="text-foreground">
                  干ばつ早期警報
                </strong>{" "}
                は太平洋島嶼気候展望フォーラム（PICOF）を通じて対応しており、
                ENSO状態とマルチモデル合意予報に基づく季節展望を年2回発表しています。
                コミュニティベースのEWS（河川水位サイレンやコミュニティウォーデンなど）は
                フィジー、ソロモン諸島、バヌアツの高リスク地域に設置されていますが、
                持続可能性が課題として残っています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 4. Regional Cooperation Frameworks ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "4. Regional Cooperation Frameworks"
              : "4. 地域協力の枠組み"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Given the limited capacity of individual PICTs, regional
                cooperation is not merely beneficial but{" "}
                <strong className="text-foreground">
                  essential for survival
                </strong>
                . The Pacific region has developed one of the most extensive
                networks of intergovernmental cooperation arrangements for
                disaster risk reduction anywhere in the developing world.
              </>
            ) : (
              <>
                個々のPICTsの限られた能力を考えると、地域協力は
                単なる利益ではなく{" "}
                <strong className="text-foreground">
                  生存に不可欠
                </strong>{" "}
                です。太平洋地域は、途上国の中でも
                最も広範な防災のための政府間協力体制を構築してきました。
              </>
            )}
          </p>

          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Pacific Meteorological Council (PMC) & PMDP"
                  : "太平洋気象理事会（PMC）& PMDP"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    The PMC, established by the Pacific Islands Forum, is the
                    peak regional body coordinating meteorological services. It
                    meets biennially and sets strategic direction for NMHS
                    development. The{" "}
                    <strong className="text-foreground">
                      Pacific Meteorological Desk Partnership (PMDP)
                    </strong>
                    , hosted by SPREP, serves as the PMC&apos;s implementation
                    arm, facilitating technical assistance, training, and
                    coordination between donor-funded projects and national
                    NMHS.
                  </>
                ) : (
                  <>
                    太平洋諸島フォーラムが設立したPMCは、気象サービスを調整する
                    地域最高機関です。2年ごとに開催され、NMHS開発の戦略的方向性を定めています。
                    SPREPが事務局を務める{" "}
                    <strong className="text-foreground">
                      太平洋気象デスクパートナーシップ（PMDP）
                    </strong>{" "}
                    はPMCの実施機関として、技術支援、研修、
                    ドナー資金プロジェクトと各国NMHSの調整を担っています。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                SPREP
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    The{" "}
                    <strong className="text-foreground">
                      Secretariat of the Pacific Regional Environment Programme
                    </strong>{" "}
                    (based in Apia, Samoa) is the lead regional organization for
                    environmental and climate change issues. SPREP hosts the
                    Pacific Climate Change Science Program, manages the Pacific
                    Meteorological Desk, and coordinates regional climate
                    services. It plays a central role in channeling climate
                    finance to PICTs.
                  </>
                ) : (
                  <>
                    <strong className="text-foreground">
                      太平洋地域環境計画事務局
                    </strong>
                    （サモア・アピアに本部）は環境・気候変動問題を主導する地域機関です。
                    太平洋気候変動科学プログラムを運営し、太平洋気象デスクを管理し、
                    地域気候サービスを調整しています。
                    PICTsへの気候資金の導入において中心的役割を果たしています。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "SPC (Pacific Community)"
                  : "SPC（太平洋共同体）"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    The{" "}
                    <strong className="text-foreground">
                      Pacific Community&apos;s Geoscience, Energy and Maritime
                      (GEM) division
                    </strong>{" "}
                    provides technical support for geohazard monitoring (seismic,
                    volcanic, tsunami), ocean observations, and coastal
                    assessment. SPC also manages the Pacific Tsunami Warning and
                    Mitigation System coordination, produces multi-hazard risk
                    assessments, and supports national NDMO capacity building
                    through the Pacific Islands Emergency Management Alliance
                    (PIEMA).
                  </>
                ) : (
                  <>
                    <strong className="text-foreground">
                      太平洋共同体の地球科学・エネルギー・海事（GEM）部門
                    </strong>{" "}
                    は、地球物理ハザード監視（地震・火山・津波）、海洋観測、
                    沿岸評価の技術支援を提供しています。
                    SPCは太平洋津波警報緩和システムの調整も管理し、
                    マルチハザードリスク評価を作成、
                    太平洋島嶼防災管理連盟（PIEMA）を通じた各国NDMOの能力構築を支援しています。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Key Strategic Frameworks"
                  : "主要な戦略的枠組み"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Several overarching frameworks guide regional action:{" "}
                    <strong className="text-foreground">
                      Framework for Resilient Development in the Pacific (FRDP)
                      2017-2030
                    </strong>{" "}
                    integrates climate change and disaster risk management into
                    sustainable development;{" "}
                    <strong className="text-foreground">
                      Pacific Islands Meteorological Strategy (PIMS) 2017-2026
                    </strong>{" "}
                    sets targets for NMHS modernization, observation network
                    strengthening, and service delivery improvement; and the{" "}
                    <strong className="text-foreground">
                      Boe Declaration on Regional Security (2018)
                    </strong>{" "}
                    — a landmark statement by Pacific Islands Forum leaders
                    recognizing climate change as{" "}
                    <strong className="text-foreground">
                      &quot;the single greatest threat to the livelihoods,
                      security and wellbeing of the peoples of the Pacific.&quot;
                    </strong>
                  </>
                ) : (
                  <>
                    いくつかの包括的な枠組みが地域行動を導いています。{" "}
                    <strong className="text-foreground">
                      太平洋レジリエント開発枠組み（FRDP）2017-2030
                    </strong>{" "}
                    は気候変動と災害リスク管理を持続可能な開発に統合し、{" "}
                    <strong className="text-foreground">
                      太平洋島嶼気象戦略（PIMS）2017-2026
                    </strong>{" "}
                    はNMHSの近代化、観測網の強化、サービス提供の改善目標を設定しています。
                    そして{" "}
                    <strong className="text-foreground">
                      ボエ地域安全保障宣言（2018年）
                    </strong>{" "}
                    — 太平洋諸島フォーラム首脳が気候変動を{" "}
                    <strong className="text-foreground">
                      「太平洋の人々の生活、安全保障、福祉に対する最大の脅威」
                    </strong>
                    と認識した画期的な声明です。
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 5. International Support and Projects ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "5. International Support and Projects"
              : "5. 国際支援とプロジェクト"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                The Pacific region benefits from substantial international
                support for EWS development, though coordination challenges and
                sustainability concerns persist. Key programs and projects
                include:
              </>
            ) : (
              <>
                太平洋地域はEWS開発のために多大な国際支援を受けていますが、
                調整の課題と持続可能性の懸念が残っています。
                主要なプログラム・プロジェクトは以下の通りです。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Program / Project" : "プログラム/プロジェクト"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Lead Agency" : "主導機関"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Focus" : "対象分野"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Activities" : "主な活動"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "JICA Pacific Technical Cooperation"
                      : "JICA太平洋技術協力"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    JICA / JMA
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Met services, DRR capacity"
                      : "気象サービス、防災能力"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "NMHS staff training, AWS/equipment provision, forecaster secondments to JMA, JICA-Net distance learning, technical advisors in Fiji/PNG"
                      : "NMHS職員研修、AWS/機材供与、気象庁への予報官派遣研修、JICA-Net遠隔学習、フィジー/PNGへの技術アドバイザー派遣"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    COSPPac
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Australia BoM"
                      : "豪州気象局（BoM）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Climate & ocean services"
                      : "気候・海洋サービス"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Seasonal climate outlooks, sea level monitoring (SEAFRAME), Ocean Portal, ENSO tracker, mentoring of Pacific forecasters"
                      : "季節気候展望、海面監視（SEAFRAME）、Ocean Portal、ENSOトラッカー、太平洋予報官の指導"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    CREWS Pacific SIDS
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    WMO / SPREP
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Multi-hazard EWS" : "マルチハザードEWS"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Impact-based forecasting (IBF) capacity, CAP alert dissemination, NMHS operational procedures, focus on Fiji, Vanuatu, Solomon Islands"
                      : "インパクトベース予報（IBF）能力、CAPアラート配信、NMHS運用手順、フィジー・バヌアツ・ソロモン諸島が重点対象"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "GCF Pacific Early Warning (UNDP/WMO)"
                      : "GCF太平洋早期警報（UNDP/WMO）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    UNDP / WMO
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Climate-resilient EWS"
                      : "気候レジリエントEWS"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Green Climate Fund financed; AWS network strengthening, forecast improvement, community warning systems in Cook Islands, FSM, Marshall Islands, Niue, Palau, Samoa, Tonga, Tuvalu"
                      : "緑の気候基金の資金；AWS網強化、予報改善、コミュニティ警報システム（クック諸島、FSM、マーシャル、ニウエ、パラオ、サモア、トンガ、ツバル）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "World Bank PREP"
                      : "世銀PREP"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "World Bank" : "世界銀行"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Resilience, post-disaster"
                      : "レジリエンス、災害後対応"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Pacific Resilience Program: EWS strengthening, climate-resilient infrastructure, contingent financing (CERC), Samoa/Tonga/Vanuatu/Marshall Islands"
                      : "太平洋レジリエンスプログラム：EWS強化、気候レジリエントインフラ、緊急対応融資（CERC）、サモア/トンガ/バヌアツ/マーシャル諸島"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    EU GCCA+ Pacific
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    EU / SPC / SPREP
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Climate adaptation"
                      : "気候適応"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Global Climate Change Alliance Plus: climate science, coastal monitoring, community adaptation, institutional strengthening across 15 Pacific ACP states"
                      : "グローバル気候変動連盟プラス：気候科学、沿岸モニタリング、コミュニティ適応、15太平洋ACP諸国の制度強化"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Finland-Pacific Met Partnership"
                      : "フィンランド太平洋気象パートナーシップ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    FMI / SPREP
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Observations, forecasting"
                      : "観測、予報"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "AWS deployment (Vaisala equipment), radar data processing training, NWP product interpretation, sustainable equipment maintenance"
                      : "AWS配備（Vaisala機器）、レーダーデータ処理研修、NWPプロダクト解釈、持続可能な機器維持管理"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 6. Last-Mile Challenges ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "6. Last-Mile Challenges in the Pacific"
              : "6. ラストマイルの課題"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Even when accurate forecasts and timely warnings are produced,
                reaching vulnerable communities in the Pacific presents
                challenges unlike those in any other world region. The{" "}
                <strong className="text-foreground">
                  &quot;last mile&quot; problem
                </strong>{" "}
                is amplified by extreme geographic dispersion, infrastructure
                limitations, and socio-cultural complexity.
              </>
            ) : (
              <>
                正確な予報やタイムリーな警報が作成されても、
                太平洋の脆弱なコミュニティに届けることは、
                世界の他の地域とは異なる固有の課題を呈します。{" "}
                <strong className="text-foreground">
                  「ラストマイル」問題
                </strong>{" "}
                は、極端な地理的分散、インフラの制限、
                社会文化的な複雑さによって増幅されています。
              </>
            )}
          </p>

          <ul className="ml-4 list-disc space-y-3 text-muted">
            <li>
              <strong className="text-foreground">
                {en
                  ? "Geographic dispersion"
                  : "地理的分散"}
              </strong>
              {en ? (
                <>
                  {" "}— Pacific nations consist of hundreds of scattered
                  islands across millions of square kilometers of ocean.
                  Kiribati spans 3,440 km east-west; FSM&apos;s 607 islands are
                  spread across 2,700 km. Remote atolls may be accessible only
                  by irregular boat service (once every few weeks or months).
                  This makes physical infrastructure deployment, maintenance,
                  and emergency response logistics extraordinarily difficult.
                </>
              ) : (
                <>
                  {" "}— 太平洋国家は数百万km&sup2;の海洋に散在する数百の島々で構成されています。
                  キリバスは東西3,440km、FSMの607の島々は2,700kmにわたって分布しています。
                  遠隔環礁へは不定期の船便（数週間〜数ヶ月に1回）でしかアクセスできない場合もあり、
                  物理的インフラの展開、維持管理、緊急対応のロジスティクスが極めて困難です。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Communication infrastructure"
                  : "通信インフラ"}
              </strong>
              {en ? (
                <>
                  {" "}— Internet connectivity is limited and expensive in most
                  PICTs. While mobile coverage has expanded in main urban areas,
                  outer islands often rely on HF radio as the primary
                  communication medium. During TC events, power and
                  communication infrastructure is typically among the first
                  assets to fail. The 2022 Tonga eruption demonstrated the
                  vulnerability of submarine cable-dependent nations to total
                  communication blackout. Cell broadcast technology for
                  emergency alerts is not yet widely deployed.
                </>
              ) : (
                <>
                  {" "}— ほとんどのPICTsではインターネット接続が限られ高価です。
                  主要都市部ではモバイルカバーが拡大していますが、
                  離島ではHF無線が主要な通信手段であることが多いです。
                  TC発生時には電力・通信インフラが最初に機能停止するものの一つです。
                  2022年のトンガ噴火は海底ケーブルに依存する国の
                  完全通信途絶への脆弱性を実証しました。
                  緊急警報のためのセルブロードキャスト技術はまだ広く展開されていません。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Language diversity" : "言語の多様性"}
              </strong>
              {en ? (
                <>
                  {" "}— PNG alone has over 840 languages; the Pacific region as
                  a whole has more than 1,300 distinct languages. Warnings
                  issued in English, French, or official national languages may
                  not reach communities that primarily use local vernaculars.
                  Translation of technical meteorological concepts into simple,
                  actionable messages in local languages remains a significant
                  challenge.
                </>
              ) : (
                <>
                  {" "}— PNGだけで840以上の言語があり、太平洋地域全体では1,300以上の
                  異なる言語が存在します。英語、フランス語、または公用語で発出された警報は、
                  主に現地語を使用するコミュニティに届かない可能性があります。
                  技術的な気象概念を地域言語でシンプルかつ行動可能なメッセージに
                  翻訳することは依然として重大な課題です。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Traditional knowledge integration"
                  : "伝統知識の統合"}
              </strong>
              {en ? (
                <>
                  {" "}— Pacific Island communities possess rich traditional
                  knowledge about weather patterns, seasonal changes, and
                  natural indicators (animal behavior, cloud formations, ocean
                  conditions). Integrating this traditional knowledge with
                  scientific forecasting could significantly improve warning
                  reception and response, but systematic efforts to do so remain
                  limited. The Pacific Traditional Knowledge documentation
                  project under SPREP has begun cataloging these practices.
                </>
              ) : (
                <>
                  {" "}— 太平洋島嶼コミュニティは気象パターン、季節変化、
                  自然指標（動物行動、雲の形成、海況）に関する豊富な伝統知識を持っています。
                  この伝統知識を科学的予報と統合すれば警報の受容性と対応を大幅に改善できますが、
                  体系的な取り組みはまだ限られています。
                  SPREPの太平洋伝統知識文書化プロジェクトがこれらの慣行の目録作成を開始しています。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Gender and disability inclusion"
                  : "ジェンダーと障害包摂"}
              </strong>
              {en ? (
                <>
                  {" "}— Women, persons with disabilities, and elderly community
                  members often face disproportionate disaster impacts due to
                  limited access to warning information and evacuation
                  challenges. Gender-responsive EWS design requires warnings in
                  accessible formats (visual, audio, multiple languages) and
                  evacuation planning that accounts for mobility limitations.
                  The Pacific Disability Forum has advocated for inclusive
                  warning systems, but implementation lags.
                </>
              ) : (
                <>
                  {" "}— 女性、障害者、高齢者は警報情報へのアクセスの制限や避難の困難から
                  不均衡な災害影響に直面することが多いです。
                  ジェンダー対応型のEWS設計には、アクセシブルな形式（視覚・音声・多言語）での警報と、
                  移動制限を考慮した避難計画が必要です。
                  太平洋障害者フォーラムが包摂的な警報システムを提唱していますが、
                  実施は遅れています。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Night-time cyclone warnings"
                  : "夜間のサイクロン警報"}
              </strong>
              {en ? (
                <>
                  {" "}— Several devastating TCs in the Pacific have made
                  landfall at night (TC Winston in Fiji, 2016, made landfall in
                  the evening). Night-time warnings face reduced reception rates
                  as people may be asleep, and evacuation in darkness across
                  unlit terrain or flooded roads is extremely hazardous.
                  Community sirens and automatic phone alerts become
                  particularly critical during night-time events.
                </>
              ) : (
                <>
                  {" "}— 太平洋では壊滅的なTCの複数が夜間に上陸しています
                  （TC Winston、2016年フィジー、夕刻に上陸）。
                  夜間の警報は就寝中の住民に届かない可能性があり、
                  暗闇の中で照明のない地形や冠水した道路を避難することは極めて危険です。
                  コミュニティサイレンや自動電話アラートは夜間の事象において
                  特に重要になります。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Outer island evacuation"
                  : "離島からの避難"}
              </strong>
              {en ? (
                <>
                  {" "}— For low-lying atolls with maximum elevation of 2-4
                  meters, vertical evacuation is impossible and horizontal
                  evacuation to higher ground does not exist. Evacuation from
                  outer islands to main islands requires sea or air transport
                  that may not be available with sufficient lead time. In some
                  cases, the only option is to shelter in place in the
                  strongest available structure. Pre-positioned relief supplies
                  and reinforced community shelters are critical but often
                  lacking.
                </>
              ) : (
                <>
                  {" "}— 最大標高2-4mの低地環礁では垂直避難は不可能であり、
                  高台への水平避難も存在しません。離島から主島への避難には
                  十分なリードタイムで利用できない可能性のある海上・航空輸送が必要です。
                  場合によっては、利用可能な最も堅牢な建物に留まることが
                  唯一の選択肢となります。事前配備された救援物資と
                  強化されたコミュニティシェルターが不可欠ですが、しばしば不足しています。
                </>
              )}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── 7. Climate Change and Future Risk ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "7. Climate Change and Future Risk"
              : "7. 気候変動と将来リスク"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                IPCC AR6 projections paint a sobering picture for the Pacific.{" "}
                <strong className="text-foreground">Sea-level rise</strong> in
                the tropical Pacific is projected at 0.4-0.8 m by 2100 under
                SSP2-4.5 (relative to 1995-2014), with regional variations due
                to ocean dynamics potentially adding 10-20% above global mean.
                For nations like Tuvalu, Kiribati, and Marshall Islands — where
                maximum elevation rarely exceeds 3-4 meters — even moderate
                sea-level rise combined with storm surge and king tides can
                result in complete inundation of inhabited areas.
              </>
            ) : (
              <>
                IPCC AR6の予測は太平洋に対して厳しい見通しを示しています。
                熱帯太平洋における{" "}
                <strong className="text-foreground">海面上昇</strong>{" "}
                はSSP2-4.5下で2100年までに0.4-0.8m（1995-2014年基準）と予測されており、
                海洋力学による地域変動でグローバル平均より10-20%高くなる可能性があります。
                ツバル、キリバス、マーシャル諸島のように最大標高が3-4mを超えることが稀な国々では、
                穏やかな海面上昇でも高潮やキングタイドとの複合により
                居住地域の完全浸水につながり得ます。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">Compound events</strong>{" "}
                pose the greatest threat. The simultaneous occurrence of a
                tropical cyclone, king tide, elevated sea level, and storm surge
                can produce coastal inundation far exceeding what any single
                hazard would cause. AR6 projects that such compound events will
                become more frequent as mean sea levels rise, with current
                1-in-100-year coastal flooding events potentially becoming
                annual occurrences by 2100 in some Pacific locations.
              </>
            ) : (
              <>
                <strong className="text-foreground">複合イベント</strong>{" "}
                が最大の脅威となっています。熱帯低気圧、キングタイド、海面上昇、高潮の
                同時発生は、単一のハザードの影響を大幅に超える沿岸浸水を引き起こし得ます。
                AR6は平均海面の上昇に伴い、こうした複合イベントがより頻繁に発生すると予測しており、
                太平洋の一部地域では現在の100年に1度の沿岸洪水が
                2100年までに毎年の事象となる可能性があります。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">
                  Coral reef degradation
                </strong>{" "}
                is reducing natural coastal protection. Healthy coral reefs can
                reduce wave energy by 97% and wave height by 84%, providing a
                critical buffer against storm waves. Ocean warming and
                acidification are causing mass bleaching events with increasing
                frequency — the Pacific experienced major bleaching in 2016,
                2020, and 2024. As reefs degrade, wave run-up and coastal
                erosion accelerate, compounding the effects of sea-level rise.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  サンゴ礁の劣化
                </strong>{" "}
                は自然の沿岸防護機能を低下させています。健全なサンゴ礁は波のエネルギーを97%、
                波高を84%減衰させ、暴風波に対する重要な緩衝帯を提供しています。
                海洋温暖化と酸性化は大規模白化現象をますます頻繁に引き起こしており、
                太平洋では2016年、2020年、2024年に大規模白化を経験しています。
                サンゴ礁が劣化すると波の遡上と海岸浸食が加速し、
                海面上昇の影響を複合的に増大させます。
              </>
            )}
          </p>

          <p className="text-muted">
            {en ? (
              <>
                <strong className="text-foreground">
                  Climate mobility and planned relocation
                </strong>{" "}
                are emerging as adaptation responses when in-situ adaptation
                reaches its limits. Fiji has already begun relocating villages
                (Vunidogoloa was relocated in 2014 as one of the world&apos;s
                first climate relocations), and several other communities are
                in various stages of planning. Kiribati has purchased land in
                Fiji as a potential future relocation site. The concept of
                &quot;adaptation limits&quot; — the point at which no further
                adaptation is possible — is particularly acute for low-lying
                atoll nations where retreat options are fundamentally
                constrained by geography. The EWS implications are significant:
                as populations relocate, warning dissemination networks must be
                reconfigured, and new risk profiles assessed for receiving
                communities.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  気候移動と計画的移転
                </strong>{" "}
                は、現地適応が限界に達した場合の適応策として浮上しています。
                フィジーは既に村落の移転を開始しており
                （ヴニドゴロア村は2014年に世界初の気候移転の一つとして移転）、
                他の複数のコミュニティも様々な計画段階にあります。
                キリバスは将来の移転先としてフィジーに土地を購入しています。
                「適応限界」の概念 — これ以上の適応が不可能な段階 —
                は、地理的に退避の選択肢が根本的に制約される低地環礁国家において
                特に深刻です。EWSへの影響は大きく、住民が移転するにつれ
                警報伝達ネットワークの再構成と、受入コミュニティの新たなリスク評価が必要になります。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 8. Challenges and Recommendations ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "8. Challenges and Recommendations"
              : "8. 課題と提言"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                Despite significant progress in regional cooperation and
                international support, fundamental structural challenges
                persist. Addressing these requires sustained political
                commitment, innovative financing, and a paradigm shift in how
                EWS sustainability is approached in small island developing
                states.
              </>
            ) : (
              <>
                地域協力と国際支援における大きな進展にもかかわらず、
                根本的な構造的課題が残っています。
                これらへの対処には持続的な政治的コミットメント、革新的な資金調達、
                そして小島嶼開発途上国におけるEWSの持続可能性へのアプローチの
                パラダイムシフトが必要です。
              </>
            )}
          </p>

          <ul className="ml-4 list-disc space-y-3 text-muted">
            <li>
              <strong className="text-foreground">
                {en
                  ? "Sustainable funding for NMHS operations"
                  : "NMHSの持続的な運営資金"}
              </strong>
              {en ? (
                <>
                  {" "}— Most NMHS in PICTs are entirely dependent on national
                  government budgets that are severely constrained. Donor
                  funding is typically project-based (3-5 years) and does not
                  cover recurrent operational costs. A shift toward{" "}
                  <strong className="text-foreground">
                    cost-recovery models
                  </strong>{" "}
                  (aviation weather services, marine forecasts for shipping) and
                  climate finance mechanisms (SOFF — Systematic Observations
                  Financing Facility) is needed to ensure long-term financial
                  viability. The WMO Alliance for Hydromet Development provides
                  a coordination framework, but actual disbursement to Pacific
                  NMHS remains slow.
                </>
              ) : (
                <>
                  {" "}— PICTsのNMHSのほとんどは厳しく制約された国家予算に完全に依存しています。
                  ドナー資金は通常プロジェクトベース（3-5年）であり、
                  経常的な運営コストをカバーしません。
                  長期的な財政的持続可能性を確保するには、{" "}
                  <strong className="text-foreground">
                    コスト回収モデル
                  </strong>
                  （航空気象サービス、海運向け海洋予報）や
                  気候資金メカニズム（SOFF — 体系的観測資金支援ファシリティ）への
                  転換が必要です。WMO水文気象開発同盟が調整枠組みを提供していますが、
                  太平洋NMHSへの実際の資金到達は依然として遅れています。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Technical capacity retention (brain drain)"
                  : "技術人材の確保（頭脳流出）"}
              </strong>
              {en ? (
                <>
                  {" "}— Trained meteorologists and hydrologists are in short
                  supply across the Pacific. After receiving international
                  training, many professionals leave for better-paying positions
                  in Australia, New Zealand, or international organizations.
                  The University of the South Pacific (USP) offers climate
                  science programs, but graduate retention in national NMHS is
                  poor. Regional approaches such as shared forecasting services
                  and roving technical support teams could help address this
                  capacity gap.
                </>
              ) : (
                <>
                  {" "}— 訓練された気象学者・水文学者は太平洋全域で不足しています。
                  国際研修を受けた後、多くの専門家がオーストラリア、ニュージーランド、
                  または国際機関の高給ポジションへ流出します。
                  南太平洋大学（USP）が気候科学プログラムを提供していますが、
                  卒業生の国内NMHS定着率は低い状況です。
                  共有予報サービスや巡回技術支援チームなどの地域的アプローチが
                  この能力ギャップへの対処に貢献し得ます。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Equipment maintenance and spare parts logistics"
                  : "機器の維持管理とスペアパーツの物流"}
              </strong>
              {en ? (
                <>
                  {" "}— The Pacific&apos;s remoteness creates severe supply
                  chain challenges. Spare parts for AWS, radiosonde ground
                  stations, and other equipment may take weeks or months to
                  arrive. Salt spray corrosion accelerates equipment degradation.
                  A regional spare parts depot, bulk procurement through SPREP,
                  and standardized equipment across the region could reduce
                  downtime. Some projects have begun exploring{" "}
                  <strong className="text-foreground">
                    3D printing of basic spare parts
                  </strong>{" "}
                  as a partial solution.
                </>
              ) : (
                <>
                  {" "}— 太平洋の遠隔性は深刻なサプライチェーンの課題を生み出しています。
                  AWS、ラジオゾンデ地上局、その他の機器のスペアパーツの到着に
                  数週間から数ヶ月かかることがあります。塩害腐食が機器劣化を加速させます。
                  地域スペアパーツデポ、SPREPを通じた一括調達、
                  地域全体での機器標準化がダウンタイムを削減できます。
                  一部のプロジェクトでは、部分的な解決策として{" "}
                  <strong className="text-foreground">
                    基本スペアパーツの3Dプリンティング
                  </strong>{" "}
                  の検討も開始されています。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Data management and archiving"
                  : "データ管理とアーカイブ"}
              </strong>
              {en ? (
                <>
                  {" "}— Historical climate data in many PICTs exists only in
                  paper form, at risk of loss from cyclones and flooding.
                  Digitization efforts have been undertaken (notably the Pacific
                  Climate Change Data Portal managed by SPREP), but coverage is
                  incomplete. Quality-controlled, digitized observational
                  records are essential for climate trend analysis, model
                  validation, and evidence-based adaptation planning.
                  Cloud-based data archiving provides resilience against local
                  data loss but requires reliable internet connectivity.
                </>
              ) : (
                <>
                  {" "}— 多くのPICTsの過去の気候データは紙の形式でのみ存在し、
                  サイクロンや洪水による喪失リスクにさらされています。
                  デジタル化の取り組み（特にSPREPが管理する太平洋気候変動データポータル）が
                  行われていますが、カバー率は不完全です。
                  品質管理されたデジタル化観測記録は、気候傾向分析、モデル検証、
                  エビデンスに基づく適応計画に不可欠です。
                  クラウドベースのデータアーカイブはローカルなデータ喪失に対する
                  レジリエンスを提供しますが、安定したインターネット接続が前提です。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Integration of indigenous knowledge"
                  : "先住民の知識の統合"}
              </strong>
              {en ? (
                <>
                  {" "}— Pacific communities have developed sophisticated
                  traditional environmental monitoring practices over millennia.
                  Knowledge of seasonal indicators, traditional calendars, and
                  environmental signals for weather and hazards should be
                  systematically documented and integrated into EWS. This
                  requires respectful engagement with knowledge holders and
                  protocols for intellectual property protection. Successful
                  examples include traditional canoe-building knowledge
                  informing wave pattern understanding in Marshall Islands.
                </>
              ) : (
                <>
                  {" "}— 太平洋のコミュニティは数千年にわたり高度な伝統的環境モニタリング
                  慣行を発展させてきました。季節指標、伝統暦、気象・災害に関する
                  環境シグナルの知識を体系的に文書化しEWSに統合すべきです。
                  これには知識保持者との敬意あるエンゲージメントと
                  知的財産保護のプロトコルが必要です。
                  成功例として、マーシャル諸島での伝統的カヌー建造知識を
                  波のパターン理解に活用した事例があります。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Regional solidarity and South-South cooperation"
                  : "地域連帯と南南協力"}
              </strong>
              {en ? (
                <>
                  {" "}— The Pacific Island Forum has increasingly emphasized
                  regional solidarity in the face of climate change. South-South
                  cooperation between Pacific SIDS and Caribbean/Indian Ocean
                  SIDS offers opportunities for shared learning on EWS
                  implementation. The Pacific has much to learn from the
                  Caribbean&apos;s experience with multi-hazard EWS, while
                  Caribbean nations can benefit from Pacific experience in
                  community-based disaster preparedness. Strengthening the
                  PIEMA network and expanding twinning programs between NMHS
                  of different Pacific nations would build collective
                  resilience.
                </>
              ) : (
                <>
                  {" "}— 太平洋諸島フォーラムは気候変動に直面した地域連帯を
                  ますます強調しています。
                  太平洋SIDSとカリブ海/インド洋SIDSとの南南協力は、
                  EWS実装に関する共有学習の機会を提供します。
                  太平洋はカリブ海のマルチハザードEWSの経験から多くを学べ、
                  カリブ海諸国は太平洋のコミュニティベースの防災経験から恩恵を受けられます。
                  PIEMAネットワークの強化と太平洋各国NMHS間の
                  ツイニングプログラムの拡大が集団的レジリエンスを構築するでしょう。
                </>
              )}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              WMO (2023). Early Warnings for All: The UN Early Warnings for All
              Initiative — Progress Report and Outlook.{" "}
              <em>World Meteorological Organization</em>, Geneva.
            </li>
            <li>
              IPCC (2022). Climate Change 2022: Impacts, Adaptation and
              Vulnerability. Chapter 15: Small Islands.{" "}
              <em>
                Contribution of Working Group II to the Sixth Assessment Report
              </em>
              .
            </li>
            <li>
              SPREP (2021). Pacific Islands Meteorological Strategy 2017-2026:
              Mid-Term Review.{" "}
              <em>
                Secretariat of the Pacific Regional Environment Programme
              </em>
              , Apia.
            </li>
            <li>
              Pacific Islands Forum (2018). Boe Declaration on Regional
              Security. Nauru.
            </li>
            <li>
              B&uuml;nder, T. &amp; Rhyner, J. (2024). WorldRiskReport 2024.{" "}
              <em>B&uuml;ndnis Entwicklung Hilft / Ruhr University Bochum</em>.
            </li>
            <li>
              Australian Bureau of Meteorology &amp; CSIRO (2024). Climate and
              Oceans Support Program in the Pacific (COSPPac): Phase 3 Final
              Report. Melbourne.
            </li>
            <li>
              WMO (2024). State of the Climate in the South-West Pacific 2023.{" "}
              <em>WMO-No. 1342</em>.
            </li>
            <li>
              JICA (2023). Project for Strengthening Meteorological Services in
              Pacific Island Countries: Terminal Evaluation Report. Tokyo.
            </li>
            <li>
              SPC (2023). Pacific Community: Geoscience, Energy and Maritime
              Division Strategic Plan 2023-2027. Suva.
            </li>
            <li>
              Ferrario, F., Beck, M. W., Storlazzi, C. D., et al. (2014). The
              effectiveness of coral reefs for coastal hazard risk reduction and
              adaptation. <em>Nature Communications</em>, 5, 3794.
            </li>
            <li>
              McNamara, K. E. &amp; Des Combes, H. J. (2015). Planning for
              Community Relocations Due to Climate Change in Fiji.{" "}
              <em>International Journal of Disaster Risk Science</em>, 6(3),
              315-319.
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
