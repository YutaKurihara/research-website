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
              ? "Global Early Warning System Coverage and Gap Analysis — EW4All Progress and Remaining Challenges"
              : "世界の早期警報システムの普及率と課題 — EW4Allの進捗と残されたギャップ"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "A synthesis of WMO, UNDRR, and CREWS reports on multi-hazard early warning system coverage, infrastructure gaps, and the EW4All initiative targeting universal coverage by 2027."
              : "WMO・UNDRR・CREWSの報告書を統合し、マルチハザード早期警報システムの普及状況、インフラギャップ、2027年までの普遍的普及を目指すEW4Allイニシアティブを分析する。"}
          </p>
          <p className="mt-1 text-xs text-muted">
            WMO (2022). <em>Global Status of Multi-Hazard Early Warning Systems</em>;
            WMO (2023). <em>Early Warnings for All — The UN Global Early Warning Initiative: Status Update</em>;
            UNDRR (2023). <em>Global Assessment Report on Disaster Risk Reduction</em>.
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* ── 1. Four Pillars of EWS ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "1. The Four Pillars of Early Warning Systems"
              : "1. 早期警報システムの4本柱"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                The internationally recognized framework for effective
                multi-hazard early warning systems (MHEWS) rests on{" "}
                <strong className="text-foreground">four interconnected pillars</strong>,
                as defined by the UNDRR and WMO. Weakness in any single pillar
                compromises the entire chain from hazard detection to protective
                action. The 2022 WMO Global Status report found that no region
                has achieved full maturity across all four pillars simultaneously,
                and the weakest pillar globally remains Pillar 4 (preparedness
                and response capability).
              </>
            ) : (
              <>
                効果的なマルチハザード早期警報システム（MHEWS）の国際的枠組みは、
                UNDRRとWMOが定義する{" "}
                <strong className="text-foreground">相互接続された4本の柱</strong>
                に基づいています。いずれか1本の柱が弱ければ、
                ハザード検知から防護行動に至るチェーン全体が損なわれます。
                2022年のWMO世界状況報告では、4本柱すべてで完全な成熟を達成した地域は存在せず、
                世界的に最も弱い柱は第4柱（準備・対応能力）であることが示されました。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Pillar" : "柱"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Focus" : "主な焦点"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Components" : "主な構成要素"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Global Status" : "世界の現状"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "1. Risk Knowledge" : "1. リスク知識"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Hazard mapping, exposure and vulnerability data"
                      : "ハザードマッピング、曝露・脆弱性データ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Risk assessments, loss databases, hazard maps, vulnerability indices"
                      : "リスク評価、損失データベース、ハザードマップ、脆弱性指標"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "~75 countries have multi-hazard risk assessments; many LDCs lack georeferenced exposure data"
                      : "約75ヶ国がマルチハザードリスク評価を実施。多くのLDCは地理参照付き曝露データが不足"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "2. Detection, Monitoring & Forecasting"
                      : "2. 監視・予測"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Observation networks, NWP, hydrological models"
                      : "観測ネットワーク、NWP、水文モデル"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Weather stations, radar, satellites, NWP systems, hydrological forecasting"
                      : "気象観測所、レーダー、衛星、NWPシステム、水文予測"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "GBON compliance: Africa at ~10% of required stations; Pacific similarly deficient"
                      : "GBON準拠: アフリカは必要な観測所の約10%のみ。太平洋も同様に不足"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "3. Warning Dissemination"
                      : "3. 警報伝達"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Last-mile delivery, CAP protocol, mobile networks"
                      : "ラストマイル配信、CAPプロトコル、モバイルネットワーク"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "CAP-compliant alerts, cell broadcast, sirens, media partnerships, community radio"
                      : "CAP準拠アラート、セルブロードキャスト、サイレン、メディア連携、コミュニティラジオ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Only ~40% of countries have CAP-compliant alerting; cell broadcast coverage remains low in Africa/Pacific"
                      : "CAP準拠アラートを持つ国は約40%のみ。セルブロードキャストはアフリカ・太平洋で普及率が低い"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "4. Preparedness & Response"
                      : "4. 準備・対応能力"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "SOPs, evacuation plans, community drills"
                      : "SOP、避難計画、地域防災訓練"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Emergency response plans, community-based drills, anticipatory action protocols"
                      : "緊急対応計画、地域防災訓練、予防的行動プロトコル"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Weakest pillar globally; less than 50% of LDCs report community-level preparedness plans"
                      : "世界的に最も弱い柱。LDCの50%未満がコミュニティレベルの準備計画を報告"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            {en ? (
              <>
                The four-pillar framework emphasizes that early warning is not
                merely a technical exercise in hazard detection. Without robust
                risk knowledge (Pillar 1), forecasts cannot be translated into
                impact-based warnings. Without effective dissemination (Pillar 3),
                even accurate forecasts fail to reach those at risk. And without
                community preparedness (Pillar 4), people who receive warnings
                may not know how to act. The{" "}
                <strong className="text-foreground">
                  end-to-end, people-centered approach
                </strong>{" "}
                is central to both the Sendai Framework and the EW4All initiative.
              </>
            ) : (
              <>
                4本柱の枠組みは、早期警報がハザード検知という技術的作業に
                とどまらないことを強調しています。堅固なリスク知識（第1柱）がなければ、
                予測を影響ベースの警報に変換できません。効果的な伝達（第3柱）がなければ、
                正確な予測もリスクにさらされる人々に届きません。
                そしてコミュニティの準備態勢（第4柱）がなければ、
                警報を受けた人々がどう行動すべきかわかりません。{" "}
                <strong className="text-foreground">
                  エンドツーエンドの人間中心アプローチ
                </strong>
                は、仙台防災枠組とEW4Allイニシアティブの両方の核心です。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 2. EW4All Initiative ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "2. EW4All Initiative — Early Warnings for All"
              : "2. EW4Allイニシアティブ — 全ての人に早期警報"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                At COP27 in Sharm el-Sheikh (November 2022), UN Secretary-General
                Ant&oacute;nio Guterres launched the{" "}
                <strong className="text-foreground">
                  Early Warnings for All (EW4All)
                </strong>{" "}
                initiative, setting an ambitious target: ensure every person on
                Earth is protected by a multi-hazard early warning system by the{" "}
                <strong className="text-foreground">end of 2027</strong>. The
                initiative was catalyzed by the stark finding that approximately
                one-third of the global population &mdash; and over half of
                people in LDCs and SIDS &mdash; lacked adequate early warning
                coverage.
              </>
            ) : (
              <>
                2022年11月のCOP27（シャルムエルシェイク）において、
                グテーレス国連事務総長は{" "}
                <strong className="text-foreground">
                  Early Warnings for All（EW4All：全ての人に早期警報）
                </strong>
                イニシアティブを発足させました。その野心的な目標は、
                地球上のすべての人が{" "}
                <strong className="text-foreground">2027年末</strong>
                までにマルチハザード早期警報システムで保護されることです。
                本イニシアティブは、世界人口の約3分の1 &mdash; LDCやSIDSでは半数以上
                &mdash; が十分な早期警報を受けられていないという厳しい現実がきっかけとなりました。
              </>
            )}
          </p>

          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Investment Requirement" : "必要投資額"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    The EW4All Executive Action Plan estimates a total investment
                    of{" "}
                    <strong className="text-foreground">
                      $3.1 billion over 2023&ndash;2027
                    </strong>
                    , broken down across the four pillars: $374 million for risk
                    knowledge, $1.18 billion for observation and forecasting,
                    $550 million for warning dissemination, and $1 billion for
                    preparedness and response. This represents roughly $0.50 per
                    person per year for the affected populations &mdash; a
                    fraction of the $14.5 billion in annual average disaster
                    losses in LDCs and SIDS.
                  </>
                ) : (
                  <>
                    EW4All実行計画は、2023〜2027年の5年間で総額{" "}
                    <strong className="text-foreground">31億ドル</strong>
                    の投資を見積もっています。4本柱別の内訳は、リスク知識に3.74億ドル、
                    観測・予測に11.8億ドル、警報伝達に5.5億ドル、
                    準備・対応に10億ドルです。これは影響を受ける人口1人あたり
                    年間約0.50ドルに相当し、LDCとSIDSの年間平均災害損失145億ドルのごく一部です。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Coordinating Structure" : "調整体制"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    WMO serves as the coordinating agency, with each pillar led
                    by a designated UN entity: UNDRR (Pillar 1), WMO (Pillar 2),
                    ITU (Pillar 3), and IFRC (Pillar 4). A multi-stakeholder
                    advisory panel and dedicated secretariat support
                    implementation. National Meteorological and Hydrological
                    Services (NMHSs) are the primary implementing partners at
                    country level.
                  </>
                ) : (
                  <>
                    WMOが調整機関を務め、各柱を指定された国連機関が主導します：
                    UNDRR（第1柱）、WMO（第2柱）、ITU（第3柱）、IFRC（第4柱）。
                    マルチステークホルダー諮問パネルと専用事務局が実施を支援し、
                    各国の気象水文機関（NMHS）が国レベルの主要な実施パートナーです。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Progress as of 2025" : "2025年時点の進捗"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    As of mid-2025,{" "}
                    <strong className="text-foreground">
                      101 countries have submitted EW4All national action plans
                    </strong>
                    , with 30 countries classified as priority targets (including
                    SIDS and LDCs). The SOFF (Systematic Observations Financing
                    Facility) has mobilized $185 million to close surface
                    observation gaps. However, the overall funding trajectory
                    remains below what is needed: only approximately $1.1 billion
                    of the $3.1 billion target had been committed or disbursed
                    by mid-2025.
                  </>
                ) : (
                  <>
                    2025年半ば時点で、{" "}
                    <strong className="text-foreground">
                      101ヶ国がEW4All国別行動計画を提出
                    </strong>
                    し、30ヶ国が優先対象国（SIDSおよびLDCを含む）に分類されています。
                    SOFF（組織的観測資金機構）は地上観測ギャップ解消のために
                    1.85億ドルを動員しました。しかし、全体の資金調達軌道は
                    必要水準を下回っており、31億ドルの目標のうち、
                    2025年半ばまでにコミットまたは支出されたのは約11億ドルにとどまっています。
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 3. Global Coverage Statistics ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "3. Global Coverage Statistics"
              : "3. 世界の普及率"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                The 2022 WMO Global Status of Multi-Hazard Early Warning Systems
                report revealed severe disparities in coverage. While global
                average MHEWS coverage has improved from approximately 53% in
                2015 to an estimated 69% in 2023, the remaining gap
                disproportionately affects the most vulnerable nations. The
                following table summarizes regional coverage data compiled from
                WMO, UNDRR, and national reporting to the Sendai Framework
                Monitor.
              </>
            ) : (
              <>
                2022年のWMO「マルチハザード早期警報システムの世界現状」報告書は、
                普及率の深刻な格差を明らかにしました。世界平均のMHEWS普及率は
                2015年の約53%から2023年には推定69%に改善しましたが、
                残るギャップは最も脆弱な国々に不均衡に集中しています。
                以下の表は、WMO・UNDRR・仙台防災枠組モニターへの各国報告から
                編纂した地域別の普及データです。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Region / Category" : "地域・カテゴリ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "MHEWS Coverage" : "MHEWS普及率"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Gap" : "主なギャップ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Global average" : "世界平均"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ~69% (2023)
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "~2.4 billion people remain uncovered or inadequately warned"
                      : "約24億人がカバーされていないか不十分な警報を受けている"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Africa" : "アフリカ"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ~40%
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "60% gap; lowest observation density globally; only 26% of NMHSs meet WMO capacity standards"
                      : "60%のギャップ。世界最低の観測密度。NMHSの26%のみがWMO能力基準を達成"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Asia-Pacific" : "アジア太平洋"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "50-90% (highly variable)" : "50〜90%（高い変動）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "East Asia strong (>85%); South/Southeast Asia 50-65%; flood EWS weakest among hazard types"
                      : "東アジアは高普及率（>85%）。南・東南アジアは50〜65%。洪水EWSがハザード種別で最弱"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "SIDS" : "小島嶼開発途上国（SIDS）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ~60%
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "4 in 10 SIDS lack MHEWS; limited radar/upper-air obs; heavy reliance on external NWP"
                      : "SIDSの4割がMHEWSを欠く。レーダー・高層観測が限定的。外部NWPに強く依存"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "LDCs" : "後発開発途上国（LDC）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    &lt;50%
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Less than half have MHEWS; disaster mortality 5x higher per capita than non-LDCs"
                      : "半数未満がMHEWSを保有。1人あたり災害死亡率は非LDCの5倍"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Europe" : "欧州"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    &gt;90%
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "High coverage overall; gaps in transboundary river basins, flash flood forecasting"
                      : "全体的に高い普及率。国際河川流域のFlash Flood予測にギャップ"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Americas" : "南北アメリカ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "65-95% (variable)" : "65〜95%（変動あり）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Central America/Caribbean lag behind; Hurricane EWS strong, riverine flood EWS weaker"
                      : "中米・カリブ海地域が遅れ。ハリケーンEWSは強力だが河川洪水EWSは弱い"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            {en ? (
              <>
                A critical finding is the{" "}
                <strong className="text-foreground">
                  inverse relationship between EWS coverage and disaster
                  vulnerability
                </strong>
                . Countries with the highest exposure to climate-related hazards
                often have the lowest EWS coverage. Africa, which faces
                escalating flood, drought, and cyclone risks under climate change,
                has only 40% coverage. This coverage gap translates directly into
                lives lost: early warning systems have been shown to reduce
                disaster mortality by a factor of 8 to 10 when functioning
                effectively.
              </>
            ) : (
              <>
                重要な知見は、{" "}
                <strong className="text-foreground">
                  EWS普及率と災害脆弱性の逆相関
                </strong>
                です。気候関連ハザードへの曝露が最も高い国々が、
                しばしば最も低いEWS普及率を示しています。
                気候変動下で洪水・干ばつ・サイクロンリスクが拡大するアフリカの普及率はわずか40%です。
                この普及率ギャップは直接的に人命の損失に直結しており、
                早期警報システムが効果的に機能すれば災害死亡率を8〜10分の1に低減できることが示されています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 4. Observation Infrastructure Gaps ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "4. Observation Infrastructure Gaps"
              : "4. 観測インフラのギャップ"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The Global Basic Observing Network (GBON), established under WMO
                Resolution 35 (Cg-18, 2019), sets minimum requirements for
                surface-based weather observations that must be internationally
                exchanged to support global Numerical Weather Prediction (NWP).
                GBON compliance analysis reveals{" "}
                <strong className="text-foreground">
                  severe observation deficits across Africa, the Pacific, and
                  parts of South America
                </strong>
                , directly undermining forecast skill and early warning capability
                in these regions.
              </>
            ) : (
              <>
                WMO決議35（Cg-18、2019年）に基づき設立された
                全球基本観測ネットワーク（GBON）は、
                グローバルな数値予報（NWP）を支えるために国際交換すべき
                地上気象観測の最低要件を定めています。GBON準拠分析は、{" "}
                <strong className="text-foreground">
                  アフリカ、太平洋、南米の一部における深刻な観測不足
                </strong>
                を明らかにしており、これらの地域の予報精度と早期警報能力を直接損なっています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Observation Type" : "観測種別"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "GBON Requirement" : "GBON要件"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Africa Compliance" : "アフリカの準拠率"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Pacific Compliance" : "太平洋の準拠率"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Surface (pressure, temp, wind)"
                      : "地上（気圧・気温・風）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Every 6 hours, ≤100 km spacing" : "6時間毎、100km以下の間隔"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ~10%
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ~12%
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Upper-air (radiosonde)" : "高層（ラジオゾンデ）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Every 12 hours, ≤500 km spacing" : "12時間毎、500km以下の間隔"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ~15%
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    ~8%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            {en ? (
              <>
                Surface weather station density in Africa averages approximately{" "}
                <strong className="text-foreground">
                  1 station per 27,000 km&sup2;
                </strong>
                , compared to 1 per 2,100 km&sup2; in Europe &mdash; an order of
                magnitude difference. The WMO estimates that Africa requires an
                additional 4,000+ surface stations and 100+ upper-air stations to
                meet GBON requirements. Many existing stations suffer from
                equipment degradation, power supply issues, and lack of
                maintenance budgets.
              </>
            ) : (
              <>
                アフリカの地上気象観測所密度は平均約{" "}
                <strong className="text-foreground">
                  27,000 km&sup2;に1局
                </strong>
                であり、欧州の2,100 km&sup2;に1局と比べ桁違いの差があります。
                WMOはアフリカがGBON要件を満たすために追加で4,000局以上の地上観測所と
                100局以上の高層観測所が必要と推定しています。
                既存の多くの観測所は機器の劣化、電源供給の問題、
                保守予算の不足に苦しんでいます。
              </>
            )}
          </p>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                Marine and ocean observation gaps are equally concerning.
                Tropical ocean buoy networks (TAO/TRITON, PIRATA, RAMA) critical
                for tropical cyclone and ENSO forecasting have experienced
                declining data return rates, dropping from &gt;80% in the 2000s
                to approximately 50% in recent years due to vandalism, equipment
                failure, and insufficient ship time for maintenance. Satellite
                observations provide valuable complementary data, but they cannot
                fully substitute for in-situ observations, particularly for
                variables like surface pressure that are critical for NWP data
                assimilation. Data sharing remains a persistent challenge:
                despite WMO Resolution 40 and the WIGOS framework, many
                countries do not share observational data in real time due to
                commercial restrictions, institutional capacity limitations, or
                telecommunications infrastructure gaps.
              </>
            ) : (
              <>
                海洋観測のギャップも同様に深刻です。
                熱帯低気圧とENSO予測に不可欠な熱帯海洋ブイネットワーク
                （TAO/TRITON、PIRATA、RAMA）は、破壊行為、機器故障、
                保守のための船舶時間不足により、データ返信率が2000年代の80%超から
                近年は約50%に低下しています。衛星観測は貴重な補完データを提供しますが、
                特にNWPデータ同化に重要な地上気圧などの変数については
                現場観測を完全に代替することはできません。
                データ共有は依然として根強い課題です：WMO決議40とWIGOS枠組みにもかかわらず、
                多くの国が商業的制約、機関の能力限界、
                通信インフラのギャップにより、観測データのリアルタイム共有を行っていません。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 5. Last-Mile Challenges ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "5. Last-Mile Challenges"
              : "5. ラストマイル問題"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Even where forecasting capacity exists, the{" "}
                <strong className="text-foreground">
                  &ldquo;last mile&rdquo; of warning delivery
                </strong>{" "}
                remains a critical bottleneck. A technically accurate warning that
                does not reach the people at risk &mdash; or reaches them in a
                form they cannot understand or act upon &mdash; provides no
                protection. This challenge is multidimensional, spanning
                technology, language, social structures, and institutional
                coordination.
              </>
            ) : (
              <>
                予測能力が存在する場合でも、{" "}
                <strong className="text-foreground">
                  警報配信の「ラストマイル」
                </strong>
                は依然として重大なボトルネックです。技術的に正確な警報であっても、
                リスクにさらされている人々に届かない &mdash;
                あるいは理解や行動ができない形で届く &mdash; のであれば、
                保護効果はありません。この課題は技術、言語、社会構造、
                制度的調整にまたがる多次元的なものです。
              </>
            )}
          </p>

          <ul className="ml-4 list-disc space-y-3 text-muted">
            <li>
              <strong className="text-foreground">
                {en
                  ? "Mobile phone penetration vs. warning capability"
                  : "携帯電話普及率 vs 警報受信能力"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; While global mobile subscription rates exceed 100%
                  in many countries, actual{" "}
                  <strong className="text-foreground">
                    cell broadcast capability
                  </strong>{" "}
                  (which can deliver geo-targeted warnings without requiring app
                  installation or data connectivity) remains limited. Only about
                  50 countries have implemented cell broadcast systems. In Africa,
                  even SMS-based alerting faces challenges: network congestion
                  during emergencies, coverage gaps in rural areas (only ~35% of
                  the rural population has mobile broadband access), and the cost
                  of message delivery at scale.
                </>
              ) : (
                <>
                  {" "}&mdash; 多くの国でモバイル契約率は100%を超えていますが、
                  実際の{" "}
                  <strong className="text-foreground">
                    セルブロードキャスト機能
                  </strong>
                  （アプリのインストールやデータ接続なしに地理的にターゲットされた
                  警報を配信できる）は限定的です。セルブロードキャストシステムを
                  導入した国は約50ヶ国にとどまります。アフリカでは、
                  SMSベースのアラートですら課題に直面しています：
                  緊急時のネットワーク輻輳、農村地域のカバレッジギャップ
                  （農村人口の約35%のみがモバイルブロードバンドにアクセス）、
                  大規模なメッセージ配信コストなどです。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Language and literacy barriers"
                  : "言語・識字率の障壁"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; Warnings issued in official languages may not be
                  understood by speakers of local/indigenous languages. In
                  countries with dozens or hundreds of languages (e.g., Papua New
                  Guinea with 840+ languages, India with 22 scheduled languages
                  and hundreds more), multilingual warning dissemination is a
                  massive operational challenge. Illiteracy rates in LDCs average
                  ~35%, requiring audio, visual, and pictographic warning
                  formats.
                </>
              ) : (
                <>
                  {" "}&mdash; 公用語で発表される警報は、
                  地方語・先住民族言語の話者には理解されない場合があります。
                  数十から数百の言語を持つ国（パプアニューギニアの840以上の言語、
                  インドの22の指定言語とさらに数百の言語など）では、
                  多言語での警報伝達は巨大な運用上の課題です。
                  LDCの非識字率は平均約35%であり、
                  音声・視覚・ピクトグラムの警報形式が必要です。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Gender-differentiated access"
                  : "ジェンダーによるアクセス格差"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; Women in many LDCs are 14 times more likely to die
                  in disasters than men, partly due to unequal access to
                  warnings. Women are less likely to own mobile phones (the mobile
                  gender gap is 16% in South Asia, 15% in Sub-Saharan Africa),
                  may face social restrictions on mobility, and are
                  underrepresented in community disaster committees. UNDRR
                  research shows that gender-responsive EWS design can reduce
                  female disaster mortality by up to 60%.
                </>
              ) : (
                <>
                  {" "}&mdash; 多くのLDCで女性は男性の14倍の確率で災害により死亡しますが、
                  これは警報への不平等なアクセスも一因です。
                  女性は携帯電話を所有する可能性が低く
                  （モバイルジェンダーギャップは南アジアで16%、
                  サブサハラアフリカで15%）、移動に社会的制約を受ける場合があり、
                  コミュニティ防災委員会での代表性も不足しています。
                  UNDRRの調査では、ジェンダーに配慮したEWS設計により、
                  女性の災害死亡率を最大60%削減できることが示されています。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Informal settlement coverage"
                  : "インフォーマル居住地域のカバレッジ"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; An estimated 1 billion people live in informal
                  settlements globally, often in flood-prone areas. These
                  communities are frequently excluded from official hazard maps,
                  lack formal addresses for targeted warnings, and may distrust
                  government-issued alerts. Community-based warning networks and
                  trusted intermediaries (local leaders, NGOs) are essential for
                  reaching these populations.
                </>
              ) : (
                <>
                  {" "}&mdash; 世界で推定10億人がインフォーマル居住地域に住んでおり、
                  多くは洪水危険区域に位置しています。
                  これらのコミュニティは公式ハザードマップから除外されがちで、
                  ターゲット警報のための正式な住所がなく、
                  政府発表のアラートを信用しない場合もあります。
                  これらの住民に届けるには、コミュニティベースの警報ネットワークと
                  信頼される仲介者（地元リーダー、NGO）が不可欠です。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Night-time warning effectiveness"
                  : "夜間警報の有効性"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; Studies of flood fatalities consistently show that
                  deaths disproportionately occur during nighttime events, when
                  people are asleep and less likely to receive or respond to
                  warnings. Flash floods in the Ahr Valley (Germany, 2021),
                  Thessaly (Greece, 2023), and Valencia (Spain, 2024) all
                  involved significant nighttime components. Cell broadcast with
                  forced device wake-up is one of the few technologies that can
                  address this gap.
                </>
              ) : (
                <>
                  {" "}&mdash; 洪水死亡事例の研究は一貫して、
                  人々が就寝中で警報を受信・対応しにくい夜間のイベントで
                  死亡が不均衡に発生することを示しています。
                  アール渓谷（ドイツ、2021年）、テッサリア（ギリシャ、2023年）、
                  バレンシア（スペイン、2024年）の鉄砲水はいずれも
                  重要な夜間の要素を含んでいました。
                  デバイスの強制起動を伴うセルブロードキャストは、
                  このギャップに対処できる数少ない技術の一つです。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Community engagement and trust"
                  : "コミュニティの参加と信頼"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; The effectiveness of warnings depends heavily on
                  public trust. False alarms erode confidence: research suggests
                  that after 2&ndash;3 false alarms, response rates can drop by
                  over 70%. Conversely, community-based early warning systems
                  (CBEWS) that involve local populations in monitoring and
                  decision-making show significantly higher compliance rates.
                  Nepal&apos;s community-based flood EWS in the Karnali basin, for
                  example, achieved &gt;90% response rates through local
                  ownership and regular drills.
                </>
              ) : (
                <>
                  {" "}&mdash; 警報の有効性は市民の信頼に大きく依存します。
                  誤報は信頼を損ない、2〜3回の誤報後に対応率が70%以上低下する
                  という研究結果があります。
                  逆に、地元住民を監視と意思決定に参加させる
                  コミュニティベース早期警報システム（CBEWS）は、
                  大幅に高い順守率を示します。
                  例えばネパールのカルナリ川流域のコミュニティベース洪水EWSは、
                  地元のオーナーシップと定期的な訓練を通じて90%超の対応率を達成しました。
                </>
              )}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── 6. Funding Gap ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "6. Funding Gap"
              : "6. 資金ギャップ"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Despite the proven cost-effectiveness of early warning systems,
                funding remains critically insufficient. ODA (Official
                Development Assistance) for early warning systems represents{" "}
                <strong className="text-foreground">
                  less than 1% of total climate finance
                </strong>
                , a fraction that is deeply incongruent with the demonstrated
                returns on investment.
              </>
            ) : (
              <>
                早期警報システムの費用対効果が実証されているにもかかわらず、
                資金は依然として決定的に不足しています。
                早期警報システムへのODA（政府開発援助）は{" "}
                <strong className="text-foreground">
                  気候ファイナンス全体の1%未満
                </strong>
                であり、実証された投資収益率との間に深刻な乖離があります。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Metric" : "指標"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Value" : "値"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Cost-benefit ratio of EWS" : "EWSの費用便益比"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "1:10 or higher (WMO/World Bank estimate); every $1 invested prevents $10+ in losses"
                      : "1:10以上（WMO/世界銀行推計）。投資1ドルあたり10ドル以上の損失を防止"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "EWS share of climate finance" : "気候ファイナンスに占めるEWSの割合"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    &lt;1%
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "EW4All 5-year target" : "EW4All 5年目標"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "$3.1 billion (2023-2027)" : "31億ドル（2023〜2027年）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Committed/disbursed (mid-2025)" : "コミット・支出済（2025年半ば）"}
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "~$1.1 billion (~35% of target)" : "約11億ドル（目標の約35%）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    CREWS
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "$100+ million mobilized since 2015; 80+ projects in LDCs and SIDS"
                      : "2015年以降1億ドル以上を動員。LDCおよびSIDSで80以上のプロジェクト"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "GCF EWS portfolio" : "GCF EWSポートフォリオ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "~$500 million approved for EWS-related projects globally"
                      : "世界全体でEWS関連プロジェクトに約5億ドルを承認"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Average NMHS budget in LDCs"
                      : "LDCにおけるNMHS平均予算"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "<$2 million/year; many rely on 80%+ external project funding"
                      : "年間200万ドル未満。多くが外部プロジェクト資金に80%以上依存"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            {en ? (
              <>
                The CREWS (Climate Risk and Early Warning Systems) initiative,
                launched at COP21 in 2015, has been instrumental in catalyzing
                EWS investments in the most vulnerable countries. CREWS has
                funded projects in over 80 LDCs and SIDS, supporting observation
                network upgrades, forecast system development, and community
                preparedness training. However, CREWS&apos;s total mobilized
                funding of $100+ million represents only a fraction of the
                overall need. The GCF (Green Climate Fund) and GEF (Global
                Environment Facility) have also funded EWS components, with the
                GCF allocating approximately $500 million to EWS-related
                projects. A persistent challenge is the{" "}
                <strong className="text-foreground">
                  sustainability of national EWS budgets
                </strong>
                : many LDC NMHSs rely on 80% or more external project funding,
                creating vulnerability to donor cycles and project timeframes.
              </>
            ) : (
              <>
                2015年のCOP21で発足したCREWS（気候リスク・早期警報システム）
                イニシアティブは、最も脆弱な国々のEWS投資を促進する上で
                不可欠な役割を果たしてきました。CREWSは80以上のLDCとSIDSで
                プロジェクトに資金を提供し、観測ネットワークの更新、
                予報システム開発、コミュニティ準備訓練を支援しています。
                しかし、CREWSの総動員資金1億ドル以上は全体の必要額のごく一部です。
                GCF（緑の気候基金）とGEF（地球環境ファシリティ）もEWS構成要素に
                資金を提供しており、GCFはEWS関連プロジェクトに約5億ドルを配分しています。
                根強い課題は{" "}
                <strong className="text-foreground">
                  国家EWS予算の持続可能性
                </strong>
                です：多くのLDCのNMHSは外部プロジェクト資金に80%以上依存しており、
                ドナーサイクルやプロジェクト期間の変動に対して脆弱です。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 7. Sendai Framework Linkage ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "7. Sendai Framework Linkage"
              : "7. 仙台防災枠組とのリンク"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The Sendai Framework for Disaster Risk Reduction 2015&ndash;2030
                established{" "}
                <strong className="text-foreground">Target G</strong>:
                &ldquo;Substantially increase the availability of and access to
                multi-hazard early warning systems and disaster risk information
                and assessments to people by 2030.&rdquo; This target is directly
                measured through the Sendai Framework Monitor (SFM) indicator
                G-1, which tracks the number of countries with MHEWS.
              </>
            ) : (
              <>
                仙台防災枠組2015〜2030は{" "}
                <strong className="text-foreground">ターゲットG</strong>
                を設定しました：「2030年までにマルチハザード早期警報システムと
                災害リスク情報・評価への人々のアクセスと利用可能性を
                大幅に向上させる。」このターゲットは仙台防災枠組モニター（SFM）の
                指標G-1（MHEWSを持つ国の数）で直接測定されます。
              </>
            )}
          </p>

          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "SFM Monitoring Indicators" : "SFMモニタリング指標"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Target G is monitored through several sub-indicators: G-1
                    (number of countries with MHEWS), G-2 (population coverage),
                    G-3 (number of countries with risk information accessible to
                    the public), G-4 (availability of hazard-specific forecasting),
                    G-5 (countries reporting through the SFM), and G-6 (countries
                    with EWS that follow multi-hazard principles). As of 2024,{" "}
                    <strong className="text-foreground">
                      approximately 100 countries have reported on Target G
                    </strong>{" "}
                    through the SFM, but reporting quality varies significantly.
                    Many countries self-report coverage levels that differ from
                    independent assessments, highlighting the need for
                    standardized evaluation criteria.
                  </>
                ) : (
                  <>
                    ターゲットGは複数のサブ指標で監視されています：G-1（MHEWSを持つ国数）、
                    G-2（人口カバレッジ）、G-3（リスク情報を公開している国数）、
                    G-4（ハザード別予報の利用可能性）、G-5（SFMを通じて報告する国数）、
                    G-6（マルチハザード原則に従うEWSを持つ国数）。
                    2024年時点で{" "}
                    <strong className="text-foreground">
                      約100ヶ国がSFMを通じてターゲットGを報告
                    </strong>
                    していますが、報告の質は大きく異なります。
                    多くの国の自己報告による普及率は独立した評価と食い違っており、
                    標準化された評価基準の必要性が浮き彫りになっています。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Progress Tracking Challenges" : "進捗追跡の課題"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    The Mid-Term Review of the Sendai Framework (2023)
                    acknowledged that while progress has been made on Target G,
                    it remains{" "}
                    <strong className="text-foreground">
                      insufficient to meet the 2030 deadline
                    </strong>
                    . Key challenges include: inconsistent definitions of what
                    constitutes a &ldquo;multi-hazard&rdquo; system (some
                    countries report single-hazard EWS as MHEWS), lack of
                    independent verification of coverage claims, and the absence
                    of quantitative benchmarks for &ldquo;substantially
                    increased&rdquo; access. The EW4All initiative&apos;s 2027
                    target is designed to accelerate progress toward the broader
                    Sendai 2030 goal.
                  </>
                ) : (
                  <>
                    仙台防災枠組の中間レビュー（2023年）は、
                    ターゲットGに進捗があるものの、{" "}
                    <strong className="text-foreground">
                      2030年の期限を達成するには不十分
                    </strong>
                    であると認めました。主な課題には、「マルチハザード」システムの
                    定義の不一致（単一ハザードEWSをMHEWSとして報告する国もある）、
                    カバレッジ報告の独立した検証の欠如、
                    「大幅に向上」したアクセスの定量的ベンチマークの不在があります。
                    EW4Allイニシアティブの2027年目標は、
                    より広範な仙台2030年目標に向けた進捗を加速するために設計されています。
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 8. Future Challenges ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "8. Future Challenges and Outlook"
              : "8. 今後の課題と展望"}
          </h2>

          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Impact-Based Forecasting (IBF)"
                  : "影響ベース予報（IBF）"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    The transition from hazard-based to{" "}
                    <strong className="text-foreground">
                      impact-based forecasting
                    </strong>{" "}
                    is perhaps the most significant paradigm shift in operational
                    meteorology and hydrology. Rather than issuing warnings based
                    solely on meteorological thresholds (e.g., &ldquo;100 mm of
                    rain expected&rdquo;), IBF communicates what the hazard will{" "}
                    <em>do</em> (e.g., &ldquo;flooding likely to damage 500
                    buildings and displace 2,000 people&rdquo;). This requires
                    integration of hazard forecasts with exposure and
                    vulnerability data (Pillar 1), making the four-pillar
                    framework more important than ever. WMO&apos;s Guidelines on
                    IBF (WMO-No. 1150, 2015) provide the foundation, but
                    implementation remains limited to approximately 30 countries as
                    of 2025, primarily in Europe and East Asia.
                  </>
                ) : (
                  <>
                    ハザードベースから{" "}
                    <strong className="text-foreground">
                      影響ベース予報
                    </strong>
                    への転換は、業務気象学・水文学における最も重要なパラダイムシフトです。
                    気象閾値のみに基づく警報（例：「100 mmの降雨が予想」）ではなく、
                    IBFはハザードが何を<em>もたらすか</em>
                    （例：「洪水により500棟が損壊し2,000人が避難する可能性」）
                    を伝えます。これにはハザード予測と曝露・脆弱性データ（第1柱）の
                    統合が必要であり、4本柱の枠組みがこれまで以上に重要になります。
                    WMOのIBFガイドライン（WMO-No. 1150、2015年）が基盤を提供していますが、
                    2025年時点で実施は約30ヶ国に限られ、主に欧州と東アジアに集中しています。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "AI/ML in Early Warning" : "早期警報におけるAI/ML"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Machine learning is transforming multiple components of early
                    warning systems. Google DeepMind&apos;s GraphCast and
                    Huawei&apos;s Pangu-Weather have demonstrated that AI-based
                    weather models can match or exceed the skill of traditional
                    NWP models at a fraction of the computational cost.
                    Foundation models for weather (such as Aurora and FourCastNet)
                    are being adapted for regional downscaling and impact
                    prediction. For flood EWS specifically, Google&apos;s Flood
                    Hub provides AI-driven flood forecasts covering over 80
                    countries. However, challenges remain:{" "}
                    <strong className="text-foreground">
                      AI models are data-hungry
                    </strong>
                    , and their performance degrades in regions with sparse
                    observational data &mdash; precisely the regions where EWS
                    gaps are largest. Ensuring trustworthiness, explainability,
                    and operational integration of AI forecasts into NMHS
                    workflows is an ongoing challenge.
                  </>
                ) : (
                  <>
                    機械学習は早期警報システムの複数の構成要素を変革しています。
                    Google DeepMindのGraphCastやHuaweiのPangu-Weatherは、
                    AIベースの気象モデルが従来のNWPモデルと同等以上の精度を
                    はるかに低い計算コストで達成できることを実証しました。
                    気象基盤モデル（AuroraやFourCastNetなど）は地域ダウンスケーリングや
                    影響予測に適応されています。洪水EWSに関しては、
                    GoogleのFlood Hubが80ヶ国以上でAI駆動の洪水予報を提供しています。
                    しかし課題は残っています：{" "}
                    <strong className="text-foreground">
                      AIモデルはデータを大量に必要とし
                    </strong>
                    、観測データが疎な地域では性能が低下します &mdash;
                    まさにEWSギャップが最大の地域です。
                    AI予報の信頼性、説明可能性、NMHSワークフローへの
                    業務的統合は継続的な課題です。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Anticipatory Action and Forecast-Based Financing"
                  : "予防的行動と予報ベースの資金拠出"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Anticipatory action (AA) represents the evolution of early
                    warning from an information system to an{" "}
                    <strong className="text-foreground">action trigger</strong>.
                    When a forecast crosses a pre-defined threshold, pre-agreed
                    actions are automatically initiated &mdash; such as
                    pre-positioning relief supplies, distributing cash transfers,
                    or activating evacuation plans &mdash; before the disaster
                    materializes. Forecast-Based Financing (FbF), pioneered by
                    the German/Red Cross partnership, has been implemented in over
                    25 countries. The evidence base is growing: AA programs in
                    Bangladesh, the Philippines, and Ethiopia have demonstrated
                    cost savings of 30&ndash;50% compared to post-disaster
                    response. Scaling AA requires reliable forecasts with
                    sufficient lead time, clear institutional protocols, and
                    pre-arranged financing mechanisms.
                  </>
                ) : (
                  <>
                    予防的行動（AA）は、早期警報を情報システムから{" "}
                    <strong className="text-foreground">行動トリガー</strong>
                    へと進化させるものです。予報が事前定義された閾値を超えると、
                    事前に合意された行動 &mdash; 救援物資の事前配置、
                    現金給付の配布、避難計画の起動など &mdash;
                    が災害の発生前に自動的に開始されます。
                    ドイツ/赤十字の連携で開拓された予報ベースの資金拠出（FbF）は
                    25ヶ国以上で実施されています。エビデンスは蓄積されており、
                    バングラデシュ、フィリピン、エチオピアのAAプログラムは
                    災害後対応と比較して30〜50%のコスト削減を実証しています。
                    AAのスケールアップには、十分なリードタイムを持つ信頼性の高い予報、
                    明確な制度的プロトコル、事前手配された資金メカニズムが必要です。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Climate Change Adaptation Requirements"
                  : "気候変動適応への要件"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Climate change is simultaneously increasing the demand for
                    early warning (more frequent and intense hazards) while
                    potentially undermining the reliability of existing systems
                    (non-stationary extremes that exceed historical calibration
                    ranges). EWS design must incorporate{" "}
                    <strong className="text-foreground">
                      climate-adaptive elements
                    </strong>
                    : dynamic thresholds that account for changing baselines,
                    ensemble-based probabilistic forecasting, and integration
                    with climate projection data for long-term planning.
                    Compound events (e.g., concurrent heat waves and drought, or
                    coastal flooding from storm surge combined with extreme
                    rainfall) present particular challenges for existing
                    single-hazard warning systems.
                  </>
                ) : (
                  <>
                    気候変動は早期警報への需要を増大させる（より頻繁で激しいハザード）
                    と同時に、既存システムの信頼性を潜在的に損なっています
                    （過去の較正範囲を超える非定常な極端現象）。
                    EWSの設計には{" "}
                    <strong className="text-foreground">
                      気候適応的な要素
                    </strong>
                    を組み込む必要があります：変化するベースラインを考慮した動的閾値、
                    アンサンブルベースの確率的予報、
                    長期計画のための気候予測データとの統合です。
                    複合イベント（熱波と干ばつの同時発生、
                    高潮と極端降雨が重なる沿岸洪水など）は、
                    既存の単一ハザード警報システムに特に困難な課題を突きつけています。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Integration with Development Planning"
                  : "開発計画との統合"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Early warning systems cannot be sustained as standalone
                    projects. Long-term sustainability requires{" "}
                    <strong className="text-foreground">
                      mainstreaming EWS into national development planning
                    </strong>
                    , budgetary processes, and sectoral policies (agriculture,
                    water, health, urban planning). The EW4All initiative
                    emphasizes this integration, calling for EWS to be embedded
                    in National Adaptation Plans (NAPs), Nationally Determined
                    Contributions (NDCs), and National Disaster Risk Management
                    strategies. Countries like Mozambique, Nepal, and Bangladesh
                    have begun this integration, but the majority of LDCs and
                    SIDS still treat EWS as project-funded activities rather than
                    core government services.
                  </>
                ) : (
                  <>
                    早期警報システムは単独のプロジェクトとして持続することはできません。
                    長期的な持続可能性には{" "}
                    <strong className="text-foreground">
                      EWSを国家開発計画に主流化
                    </strong>
                    し、予算プロセスや分野別政策（農業、水、保健、都市計画）に
                    組み込む必要があります。EW4Allイニシアティブはこの統合を強調し、
                    EWSを国家適応計画（NAP）、国が決定する貢献（NDC）、
                    国家災害リスク管理戦略に組み込むよう求めています。
                    モザンビーク、ネパール、バングラデシュなどはこの統合を開始していますが、
                    LDCとSIDSの大半はEWSをコア政府サービスではなく
                    プロジェクト資金による活動として扱い続けています。
                  </>
                )}
              </p>
            </div>
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
              WMO (2022). <em>Global Status of Multi-Hazard Early Warning
              Systems: Target G</em>. Geneva: World Meteorological Organization.
            </li>
            <li>
              WMO (2023). <em>Early Warnings for All &mdash; The UN Global Early
              Warning Initiative: Executive Action Plan 2023&ndash;2027</em>.
              Geneva: World Meteorological Organization.
            </li>
            <li>
              UNDRR (2023). <em>Global Assessment Report on Disaster Risk
              Reduction 2023</em>. Geneva: United Nations Office for Disaster
              Risk Reduction.
            </li>
            <li>
              UNDRR (2023). <em>Sendai Framework Mid-Term Review</em>. Geneva:
              United Nations Office for Disaster Risk Reduction.
            </li>
            <li>
              WMO (2024). <em>State of Climate Services: Health</em>. WMO-No.
              1359. Geneva: World Meteorological Organization.
            </li>
            <li>
              CREWS (2024). <em>Annual Report 2023: Climate Risk and Early
              Warning Systems</em>. Geneva: CREWS Secretariat.
            </li>
            <li>
              Hallegatte, S. (2012). A Cost-Benefit Analysis of the New Orleans
              Flood Protection System. <em>AEA Papers and Proceedings</em>.
              (cost-benefit ratio of EWS reference)
            </li>
            <li>
              Coughlan de Perez, E., et al. (2015). Forecast-based financing: an
              approach for catalyzing humanitarian action based on extreme
              weather and climate forecasts.{" "}
              <em>Natural Hazards and Earth System Sciences</em>, 15(4),
              895&ndash;904.
            </li>
            <li>
              WMO (2015). <em>WMO Guidelines on Multi-hazard Impact-based
              Forecast and Warning Services</em>. WMO-No. 1150. Geneva: World
              Meteorological Organization.
            </li>
            <li>
              GSMA (2024). <em>The Mobile Gender Gap Report 2024</em>. London:
              GSMA Connected Women.
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
