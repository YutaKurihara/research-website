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
              ? "Pacific Islands Meteorological Strategy (PIMS) 2017–2026 — Strengthening and Sustaining Pacific Weather Services"
              : "太平洋島嶼気象戦略（PIMS）2017–2026 — 太平洋気象サービスの強化と持続可能性"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "A comprehensive analysis of the Pacific Islands Meteorological Strategy 2017–2026, examining its five strategic priorities, institutional capacity challenges facing National Meteorological and Hydrological Services across 14+ Pacific Island nations, the role of the Pacific Meteorological Council (PMC), observation network gaps, partnership frameworks, and the outlook for a post-2026 successor strategy aligned with EW4All and the Pacific Islands Forum 2050 Strategy."
              : "太平洋島嶼気象戦略（PIMS）2017–2026の包括的分析。5つの戦略的優先事項、14か国以上の太平洋島嶼国の国家気象水文機関（NMHS）が直面する制度的能力の課題、太平洋気象評議会（PMC）の役割、観測ネットワークのギャップ、パートナーシップ枠組み、2026年以降のEW4Allおよび太平洋島嶼フォーラム2050戦略との整合を含む後継戦略の展望を網羅。"}
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">

        {/* ── 1. Background and Development ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "1. Background and Development of PIMS" : "1. PIMSの背景と策定経緯"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The <strong className="text-foreground">Pacific Islands Meteorological Strategy (PIMS)
                2017&ndash;2026</strong> is the overarching strategic framework guiding the development
                and delivery of weather, climate, water, and ocean services across the Pacific Islands
                region. Endorsed by the <strong className="text-foreground">Pacific Meteorological
                Council (PMC)</strong> &mdash; the principal intergovernmental body for meteorological
                cooperation in the Pacific and the WMO Regional Association V (South-West Pacific)
                substructure for Pacific Island countries &mdash; PIMS represents the collective
                commitment of Pacific Island nations to strengthen their National Meteorological and
                Hydrological Services (NMHSs) and build resilience against weather and climate hazards.
              </>
            ) : (
              <>
                <strong className="text-foreground">太平洋島嶼気象戦略（PIMS）2017–2026</strong>は、
                太平洋島嶼地域における気象・気候・水・海洋サービスの開発と提供を導く包括的な戦略的枠組みです。
                <strong className="text-foreground">太平洋気象評議会（PMC）</strong> &mdash;
                太平洋における気象協力の主要な政府間機関であり、WMO第5地域協会（RA V）の太平洋島嶼国向けサブストラクチャー &mdash;
                により承認され、PIMSは太平洋島嶼諸国が国家気象水文機関（NMHS）を強化し、
                気象・気候ハザードに対するレジリエンスを構築するための集団的コミットメントを表しています。
              </>
            )}
          </p>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                PIMS 2017&ndash;2026 succeeded the <strong className="text-foreground">Pacific Islands
                Meteorological Strategy 2012&ndash;2021 (PIMS-1)</strong>, which was itself the first
                comprehensive regional meteorological strategy for the Pacific. The development of
                PIMS-2 was driven by a growing recognition that Pacific Island NMHSs remained
                critically under-resourced despite their essential role in safeguarding lives,
                livelihoods, and economic development. Most Pacific NMHSs operate with between{" "}
                <strong className="text-foreground">5 and 30 professional staff</strong>, severely
                constrained budgets, and aging observation infrastructure &mdash; a stark contrast to
                the vast oceanic territories they are responsible for monitoring.
              </>
            ) : (
              <>
                PIMS 2017&ndash;2026は、太平洋初の包括的な地域気象戦略であった
                <strong className="text-foreground">太平洋島嶼気象戦略（PIMS-1）2012&ndash;2021</strong>の後継です。
                PIMS-2の策定は、太平洋島嶼国のNMHSが生命・生計・経済開発を守る上で不可欠な役割を果たしているにもかかわらず、
                依然として深刻なリソース不足にあるという認識の高まりが原動力となりました。
                太平洋のほとんどのNMHSは<strong className="text-foreground">5～30名の専門スタッフ</strong>で運営され、
                予算は厳しく制約され、観測インフラは老化しています &mdash;
                彼らが監視を担当する広大な海洋領域とは対照的な状況です。
              </>
            )}
          </p>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                The strategy was developed under the auspices of{" "}
                <strong className="text-foreground">SPREP (Secretariat of the Pacific Regional
                Environment Programme)</strong>, which serves as the Secretariat of the PMC.
                The <strong className="text-foreground">Pacific Meteorological Desk Partnership
                (PMDP)</strong> &mdash; a multi-agency coordination mechanism hosted by SPREP &mdash;
                played a central role in facilitating the consultative process that produced PIMS,
                with support from WMO through its Regional Association V structures.
              </>
            ) : (
              <>
                この戦略は、PMCの事務局を務める
                <strong className="text-foreground">SPREP（太平洋地域環境計画事務局）</strong>の下で策定されました。
                SPREPがホストする多機関調整メカニズムである
                <strong className="text-foreground">太平洋気象デスクパートナーシップ（PMDP）</strong>が、
                PIMSを生み出した協議プロセスの促進において中心的な役割を果たし、
                WMOが第5地域協会の枠組みを通じて支援しました。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Timeline: Key Milestones" : "タイムライン：主要なマイルストーン"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Year" : "年"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Milestone" : "マイルストーン"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {([
                  [en ? "2006" : "2006", en ? "Pacific Meteorological Council (PMC) established as successor to RA V Tropical Cyclone Committee for the South Pacific" : "太平洋気象評議会（PMC）が南太平洋RA V熱帯低気圧委員会の後継として設立"],
                  [en ? "2011" : "2011", en ? "Pacific Meteorological Desk Partnership (PMDP) launched, hosted by SPREP with WMO, BoM, NIWA" : "太平洋気象デスクパートナーシップ（PMDP）発足、SPREPがWMO・BoM・NIWAと共同ホスト"],
                  [en ? "2012" : "2012", en ? "First Pacific Islands Meteorological Strategy (PIMS-1) 2012–2021 endorsed by PMC-1" : "第1次太平洋島嶼気象戦略（PIMS-1）2012–2021がPMC-1で承認"],
                  [en ? "2014" : "2014", en ? "PMC-2 reviews PIMS-1 progress, identifies need for updated strategy" : "PMC-2がPIMS-1の進捗をレビュー、更新戦略の必要性を確認"],
                  [en ? "2016" : "2016", en ? "PMC-3 endorses draft PIMS 2017–2026 (PIMS-2) after regional consultations" : "PMC-3が地域協議を経てPIMS 2017–2026（PIMS-2）草案を承認"],
                  [en ? "2017" : "2017", en ? "PIMS 2017–2026 formally launched; aligned with Sendai Framework and Paris Agreement" : "PIMS 2017–2026正式発足、仙台防災枠組みおよびパリ協定と整合"],
                  [en ? "2019" : "2019", en ? "PMC-4 mid-term review of PIMS implementation progress" : "PMC-4でPIMS実施状況の中間レビュー"],
                  [en ? "2022" : "2022", en ? "PMC-5 assessment; EW4All initiative launched, PIMS alignment discussions begin" : "PMC-5評価、EW4Allイニシアティブ発足、PIMSの整合議論開始"],
                  [en ? "2024–2025" : "2024–2025", en ? "PMC-6 discussions on post-PIMS successor strategy for 2027 onward" : "PMC-6で2027年以降のPIMS後継戦略の議論"],
                  [en ? "2026" : "2026", en ? "PIMS 2017–2026 concludes; transition to successor strategy" : "PIMS 2017–2026終了、後継戦略への移行"],
                ] as string[][]).map(([year, milestone], i) => (
                  <tr key={year + i} className={i % 2 !== 0 ? "bg-accent-light/50" : ""}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground whitespace-nowrap">{year}</td>
                    <td className="border border-border px-3 py-2 text-muted">{milestone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 2. Vision and Strategic Objectives ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "2. Vision and Strategic Objectives" : "2. PIMSのビジョンと戦略目標"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The PIMS vision statement articulates an aspirational goal:{" "}
                <em className="text-foreground">&ldquo;Pacific Island people are safeguarded, and
                economies and communities are resilient through the development, communication and
                application of targeted weather, climate, water and ocean information and
                services.&rdquo;</em> This vision places the ultimate beneficiary &mdash; Pacific Island
                people &mdash; at the centre, and explicitly connects meteorological services to broader
                outcomes of safety, resilience, and sustainable development.
              </>
            ) : (
              <>
                PIMSのビジョン声明は野心的な目標を明確にしています：
                <em className="text-foreground">&ldquo;太平洋島嶼の人々は守られ、経済とコミュニティは、
                ターゲットを絞った気象・気候・水・海洋情報およびサービスの開発・伝達・応用を通じて
                レジリエントである&rdquo;</em>。
                このビジョンは最終的な受益者である太平洋島嶼の人々を中心に置き、
                気象サービスを安全、レジリエンス、持続可能な開発というより広い成果に明示的に接続しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Five Strategic Priorities" : "5つの戦略的優先事項"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Priority" : "優先事項"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Objectives" : "主要目標"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Expected Outcomes / Indicators" : "期待される成果・指標"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {([
                  [
                    en ? "1. Strengthened NMHS institutional capacity and governance" : "1. NMHSの制度的能力とガバナンスの強化",
                    en ? "Legislative frameworks, HR development, financial sustainability, QMS implementation" : "法的枠組み、人材開発、財政的持続可能性、QMS実装",
                    en ? "NMHS acts enacted; WMO BIP-M competencies met; cost recovery mechanisms" : "NMHS法制定、WMO BIP-M能力基準達成、コストリカバリーメカニズム",
                  ],
                  [
                    en ? "2. Enhanced observations and data management" : "2. 観測とデータ管理の強化",
                    en ? "GBON compliance, WIGOS implementation, CDMS modernization, data rescue" : "GBON遵守、WIGOS実装、CDMS近代化、データレスキュー",
                    en ? "GBON-compliant stations; CliDE operational in all NMHSs; historical records digitized" : "GBON準拠ステーション、全NMHSでCliDE運用、歴史的記録のデジタル化",
                  ],
                  [
                    en ? "3. Improved service delivery" : "3. サービス提供の改善",
                    en ? "Public weather, climate services, aviation met, marine, hydrological, sector-specific products" : "公共気象、気候サービス、航空気象、海洋、水文、セクター別プロダクト",
                    en ? "Impact-based warnings; CAP implementation; user satisfaction surveys" : "インパクトベース警報、CAP実装、ユーザー満足度調査",
                  ],
                  [
                    en ? "4. Strengthened partnerships and resource mobilization" : "4. パートナーシップと資金動員の強化",
                    en ? "Donor coordination, climate finance access, bilateral/multilateral partnerships" : "ドナー調整、気候ファイナンスへのアクセス、二国間・多国間パートナーシップ",
                    en ? "PMDP sustained; GCF/GEF proposals developed; SOFF participation" : "PMDPの持続、GCF/GEF提案書作成、SOFF参加",
                  ],
                  [
                    en ? "5. Research, innovation and technology transfer" : "5. 研究・イノベーション・技術移転",
                    en ? "Climate research, AI/ML applications, indigenous knowledge integration, technology transfer" : "気候研究、AI/ML応用、先住民知識の統合、技術移転",
                    en ? "Pacific climate science program sustained; emerging technologies piloted" : "太平洋気候科学プログラムの継続、新技術のパイロット",
                  ],
                ] as string[][]).map(([priority, objectives, outcomes], i) => (
                  <tr key={i} className={i % 2 !== 0 ? "bg-accent-light/50" : ""}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{priority}</td>
                    <td className="border border-border px-3 py-2 text-muted">{objectives}</td>
                    <td className="border border-border px-3 py-2 text-muted">{outcomes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 3. Current State of Pacific Meteorological Services ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "3. Current State of Pacific Meteorological Services" : "3. 太平洋気象サービスの現状分析"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                A critical foundation for PIMS is the frank assessment of the current state
                of Pacific Island NMHSs. The region&apos;s meteorological services range from{" "}
                <strong className="text-foreground">well-resourced organisations</strong> (Australia&apos;s
                Bureau of Meteorology, MetService New Zealand) to{" "}
                <strong className="text-foreground">critically understaffed micro-services</strong> (Tuvalu,
                Nauru, Niue) operating with fewer than 10 staff. This disparity fundamentally shapes
                the design and implementation of PIMS, which must serve the needs of both advanced
                and least-developed meteorological services within a single strategic framework.
              </>
            ) : (
              <>
                PIMSの重要な基盤は、太平洋島嶼国NMHSの現状に対する率直な評価です。
                地域の気象サービスは、<strong className="text-foreground">充実したリソースを持つ組織</strong>
                （オーストラリア気象局、MetService NZ）から、
                <strong className="text-foreground">10名未満のスタッフで運営される深刻な人手不足のマイクロサービス</strong>
                （ツバル、ナウル、ニウエ）まで多岐にわたります。
                この格差はPIMSの設計と実施を根本的に規定しており、
                単一の戦略枠組みの中で先進的な気象サービスと最も開発が遅れた気象サービスの両方のニーズに応えなければなりません。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Country-by-Country NMHS Assessment" : "国別NMHS評価"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Country" : "国"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "NMHS" : "気象機関"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Staff (approx.)" : "スタッフ数（約）"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Arrangement" : "組織形態"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Radiosonde" : "ラジオゾンデ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Radar" : "レーダー"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {([
                  [en ? "Fiji" : "フィジー", "Fiji Meteorological Service", "~80", en ? "Standalone dept." : "独立部局", en ? "Yes (Nadi)" : "有（ナンディ）", en ? "Yes" : "有"],
                  [en ? "Samoa" : "サモア", "Samoa Meteorology Division", "~30", en ? "Under Ministry" : "省庁下", en ? "Yes (Apia)" : "有（アピア）", en ? "No" : "無"],
                  [en ? "Tonga" : "トンガ", "Tonga Meteorological Service", "~25", en ? "Standalone dept." : "独立部局", en ? "No" : "無", en ? "No" : "無"],
                  [en ? "Vanuatu" : "バヌアツ", "VMGD", "~25", en ? "Combined geo-hazards" : "地質ハザードと統合", en ? "No" : "無", en ? "No" : "無"],
                  [en ? "Solomon Islands" : "ソロモン諸島", "SIMS", "~20", en ? "Under Ministry" : "省庁下", en ? "No" : "無", en ? "No" : "無"],
                  [en ? "Papua New Guinea" : "PNG", "PNG NWS", "~45", en ? "Under Ministry" : "省庁下", en ? "Yes (Port Moresby)" : "有（ポートモレスビー）", en ? "No" : "無"],
                  [en ? "Kiribati" : "キリバス", "KMS", "~12", en ? "Under Ministry" : "省庁下", en ? "No" : "無", en ? "No" : "無"],
                  [en ? "Marshall Islands" : "マーシャル諸島", "RMI NWS Office", "~10", en ? "NWS (US-affiliated)" : "NWS（米国提携）", en ? "No" : "無", en ? "No" : "無"],
                  [en ? "FSM" : "ミクロネシア連邦", "FSM NWS Office", "~10", en ? "NWS (US-affiliated)" : "NWS（米国提携）", en ? "No" : "無", en ? "No" : "無"],
                  [en ? "Palau" : "パラオ", "Palau NWS Office", "~8", en ? "NWS (US-affiliated)" : "NWS（米国提携）", en ? "No" : "無", en ? "No" : "無"],
                  [en ? "Tuvalu" : "ツバル", "Tuvalu Met Service", "~8", en ? "Under Ministry" : "省庁下", en ? "No" : "無", en ? "No" : "無"],
                  [en ? "Nauru" : "ナウル", "Nauru Met Service", "~5", en ? "Under Ministry" : "省庁下", en ? "No" : "無", en ? "No" : "無"],
                  [en ? "Niue" : "ニウエ", "Niue Met Service", "~5", en ? "Under Ministry" : "省庁下", en ? "No" : "無", en ? "No" : "無"],
                  [en ? "Cook Islands" : "クック諸島", "Cook Islands Met Service", "~10", en ? "Under Ministry" : "省庁下", en ? "No" : "無", en ? "No" : "無"],
                ] as string[][]).map(([country, nmhs, staff, arrangement, radio, radar], i) => (
                  <tr key={country} className={i % 2 !== 0 ? "bg-accent-light/50" : ""}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground whitespace-nowrap">{country}</td>
                    <td className="border border-border px-3 py-2 text-muted">{nmhs}</td>
                    <td className="border border-border px-3 py-2 text-muted text-center">{staff}</td>
                    <td className="border border-border px-3 py-2 text-muted">{arrangement}</td>
                    <td className="border border-border px-3 py-2 text-muted text-center">{radio}</td>
                    <td className="border border-border px-3 py-2 text-muted text-center">{radar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                Notable features of this landscape include: (1) the{" "}
                <strong className="text-foreground">US-affiliated Freely Associated States</strong> (Marshall
                Islands, FSM, Palau) receive meteorological support through NOAA&apos;s National Weather
                Service, which provides staffing, equipment, and forecast guidance; (2) the French territories
                (New Caledonia, French Polynesia, Wallis and Futuna) are served by{" "}
                <strong className="text-foreground">M&eacute;t&eacute;o-France</strong> with
                significantly higher resource levels; (3) only three Pacific Island NMHSs (Fiji, PNG,
                Samoa) maintain operational upper-air sounding capability, a critical gap for NWP
                data assimilation.
              </>
            ) : (
              <>
                この景観の特筆すべき特徴として：（1）
                <strong className="text-foreground">米国提携の自由連合国</strong>（マーシャル諸島、ミクロネシア連邦、パラオ）は
                NOAAの国家気象局を通じて人員、機器、予報ガイダンスの支援を受けています；（2）フランス領土
                （ニューカレドニア、フランス領ポリネシア、ワリス・フツナ）は
                <strong className="text-foreground">M&eacute;t&eacute;o-France</strong>が著しく高いリソースレベルでサービスを提供；
                （3）運用中の高層ゾンデ能力を維持しているのは太平洋島嶼国NMHSのうち
                3か国（フィジー、PNG、サモア）のみであり、これはNWPデータ同化にとって重大なギャップです。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 4. Priority 1: Institutional Strengthening ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "4. Priority 1: NMHS Institutional Strengthening" : "4. 戦略的優先事項1：NMHS能力強化"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                Institutional strengthening is the foundational priority of PIMS, recognizing that
                all other strategic goals depend on having <strong className="text-foreground">functional,
                well-governed, and adequately resourced NMHSs</strong>. This priority addresses
                governance, human resources, financial sustainability, and quality management &mdash;
                the core institutional dimensions that determine whether a national meteorological
                service can effectively fulfil its mandate.
              </>
            ) : (
              <>
                制度強化はPIMSの基盤となる優先事項であり、他のすべての戦略目標は
                <strong className="text-foreground">機能的で、適切にガバナンスされ、十分なリソースを持つNMHS</strong>があって初めて
                達成可能であることを認識しています。この優先事項はガバナンス、人材、財政的持続可能性、
                品質管理という、国家気象サービスがその任務を効果的に果たせるかどうかを決定する
                中核的な制度的側面に取り組んでいます。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Governance and Legislation" : "ガバナンスと法制度"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                A key PIMS objective is ensuring each Pacific Island country has{" "}
                <strong className="text-foreground">national meteorological legislation</strong> that
                establishes the NMHS as the authoritative voice for weather and climate information,
                defines its mandate, and provides a legal basis for cost recovery. As of the mid-term
                review, only a handful of countries (Fiji, Samoa, Tonga, Vanuatu) had enacted
                comprehensive meteorological acts or regulations. Several others (Solomon Islands,
                Kiribati, Cook Islands) were in various stages of drafting legislation, while the
                smallest states (Nauru, Niue, Tuvalu) had made limited progress due to competing
                legislative priorities and limited legal drafting capacity.
              </>
            ) : (
              <>
                PIMSの重要目標の一つは、各太平洋島嶼国が、NMHSを気象・気候情報の権威ある発信源として
                確立し、その任務を定義し、コストリカバリーの法的基盤を提供する
                <strong className="text-foreground">国家気象法制</strong>を整備することです。
                中間レビュー時点で、包括的な気象法または規則を制定しているのは
                一部の国（フィジー、サモア、トンガ、バヌアツ）のみです。
                他の国（ソロモン諸島、キリバス、クック諸島）は法案起草の様々な段階にあり、
                最小国（ナウル、ニウエ、ツバル）は競合する立法優先事項と限られた法制起草能力のため
                進捗が限定的でした。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Human Resources: The Brain Drain Challenge" : "人的資源：頭脳流出の課題"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                The most persistent challenge facing Pacific NMHSs is{" "}
                <strong className="text-foreground">brain drain</strong>: trained meteorological
                staff leave for higher-paying positions in Australia, New Zealand, or international
                organisations. The problem is acute because of the small workforce size &mdash; a
                single departure from a 5-person NMHS represents a 20% loss of institutional capacity.
                PIMS advocates for improved salary scales, professional development pathways, and
                regional mobility schemes that allow staff to gain experience abroad while retaining
                their national positions. The WMO BIP-M (Basic Instruction Package for
                Meteorologists) competency framework is promoted as the standard for professional
                recognition across the region.
              </>
            ) : (
              <>
                太平洋NMHSが直面する最も根強い課題は<strong className="text-foreground">頭脳流出</strong>です：
                訓練を受けた気象職員がオーストラリア、ニュージーランド、または国際機関のより高給のポジションに移ります。
                小規模な労働力のため問題は深刻で、
                5人体制のNMHSからの1名の離職は制度的能力の20%の喪失を意味します。
                PIMSは給与体系の改善、専門職能力開発パス、およびスタッフが国内のポジションを維持しながら
                海外で経験を積める地域モビリティスキームを提唱しています。
                WMO BIP-M（気象学者のための基本教育パッケージ）の能力枠組みが地域全体の専門職認定の基準として推進されています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Quality Management System (QMS)" : "品質管理システム（QMS）"}
          </h3>
          <p className="text-muted">
            {en
              ? "PIMS promotes the implementation of WMO-compliant Quality Management Systems (QMS) across Pacific NMHSs. QMS is particularly critical for aviation meteorological services, where ICAO mandates ISO 9001-based quality assurance. Fiji’s Meteorological Service has achieved QMS certification for its aviation services, serving as a model for the region. However, the cost and complexity of QMS implementation remain barriers for smaller NMHSs."
              : "PIMSは太平洋NMHS全体でのWMO準拠品質管理システム（QMS）の実装を推進しています。QMSは特に航空気象サービスにおいて重要で、ICAOはISO 9001ベースの品質保証を義務付けています。フィジー気象局は航空サービスのQMS認証を取得し、地域のモデルとなっています。しかし、QMS実装のコストと複雑さは、より小規模なNMHSにとって依然として障壁です。"}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Multi-Hazard Early Warning Systems" : "マルチハザード早期警報システム"}
          </h3>
          <p className="text-muted">
            {en
              ? "PIMS positions the NMHS as the authoritative voice within national Multi-Hazard Early Warning Systems (MHEWS). This requires clear institutional mandates, defined roles and responsibilities vis-à-vis National Disaster Management Offices (NDMOs), and Standard Operating Procedures (SOPs) for warning issuance and dissemination. The strategy emphasises that warnings must be people-centred, culturally appropriate, and accessible to all segments of the population, including remote outer island communities."
              : "PIMSはNMHSを国家マルチハザード早期警報システム（MHEWS）における権威ある発信源として位置づけています。これには明確な制度的任務、国家災害管理事務所（NDMO）との役割・責任の明確化、警報発表・伝達のための標準業務手順書（SOP）が必要です。戦略は警報が人々を中心に置き、文化的に適切で、遠隔の離島コミュニティを含むすべての人口セグメントにアクセス可能でなければならないことを強調しています。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 5. Priority 2: Observations and Data ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "5. Priority 2: Observations and Data Management" : "5. 戦略的優先事項2：観測・データ管理の強化"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The observation infrastructure across Pacific Island nations is one of the{" "}
                <strong className="text-foreground">sparsest in the world</strong> relative to the vast
                oceanic area being monitored. This priority addresses the critical need to expand,
                maintain, and modernise observation networks, implement data management systems, and
                ensure Pacific observations are integrated into the global observing system.
              </>
            ) : (
              <>
                太平洋島嶼国の観測インフラは、監視する広大な海洋域に対して
                <strong className="text-foreground">世界で最も希薄なものの一つ</strong>です。
                この優先事項は、観測ネットワークの拡充・維持・近代化、データ管理システムの実装、
                太平洋の観測データを全球観測システムに統合するという重要なニーズに対応しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "GBON Requirements and Pacific Gaps" : "GBON要件と太平洋のギャップ"}
          </h3>
          <p className="text-muted">
            {en
              ? "The WMO Global Basic Observing Network (GBON) regulation, adopted in 2021, mandates minimum observation densities and reporting frequencies. For surface observations, GBON requires reporting at least every 6 hours from stations spaced no more than 200 km apart over land. The vast majority of Pacific Island nations fall far short of these requirements, with many having only 1–3 surface stations reporting to the Global Telecommunication System (GTS). WIGOS (WMO Integrated Global Observing System) compliance further requires stations to be properly registered, calibrated, and transmitting data in standard formats."
              : "2021年に採択されたWMO全球基本観測ネットワーク（GBON）規則は、最低観測密度と報告頻度を義務付けています。地上観測についてはGBONは陸地上で200km以内の間隔のステーションから6時間毎以上の報告を求めています。太平洋島嶼国の大半はこれらの要件を大きく下回っており、多くの国で全球通信システム（GTS）に報告する地上ステーションは1～3基のみです。WIGOS（WMO統合全球観測システム）準拠には、ステーションの適切な登録、校正、標準フォーマットでのデータ送信がさらに必要です。"}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Observation Gaps by Type and Country" : "観測種別・国別のギャップ"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Observation Type" : "観測種別"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Pacific Status" : "太平洋の現状"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Challenge" : "主要課題"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Initiative" : "イニシアティブ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {([
                  [
                    en ? "Surface AWS" : "地上AWS",
                    en ? "Most SIDS have <5 AWS; many non-operational due to maintenance" : "ほとんどのSIDSでAWS 5基未満、保守不備で非稼働多数",
                    en ? "Spare parts, trained technicians, salt corrosion" : "交換部品、技術者不足、塩害腐食",
                    en ? "SOFF, CREWS, JICA bilateral" : "SOFF、CREWS、JICA二国間",
                  ],
                  [
                    en ? "Upper-air (radiosonde)" : "高層（ラジオゾンデ）",
                    en ? "Only Fiji (Nadi), PNG (Port Moresby), Samoa (Apia)" : "フィジー（ナンディ）、PNG（ポートモレスビー）、サモア（アピア）のみ",
                    en ? "Consumable costs (USD 150–200/sonde), helium supply" : "消耗品コスト（ゾンデ1本150～200米ドル）、ヘリウム供給",
                    en ? "GNSS-RO satellite alternative; SOFF" : "GNSS-RO衛星による代替、SOFF",
                  ],
                  [
                    en ? "Marine (tide gauges)" : "海洋（潮位計）",
                    en ? "SEAFRAME gauges in 12 Pacific Island countries" : "12の太平洋島嶼国にSEAFRAME潮位計",
                    en ? "Maintenance, data transmission reliability" : "保守、データ伝送の信頼性",
                    en ? "BoM COSPPac, SPC/GEM" : "BoM COSPPac、SPC/GEM",
                  ],
                  [
                    en ? "Radar" : "レーダー",
                    en ? "Only Fiji, New Caledonia (Météo-France), Guam (NWS)" : "フィジー、ニューカレドニア（Météo-France）、グアム（NWS）のみ",
                    en ? "Capital cost, maintenance, expertise" : "初期コスト、保守、専門知識",
                    en ? "Not feasible for most SIDS; satellite alternatives" : "ほとんどのSIDSには実現不可能、衛星代替",
                  ],
                  [
                    en ? "Satellite reception" : "衛星受信",
                    en ? "Himawari-9 coverage good; processing capacity limited" : "ひまわり9号のカバレッジは良好、処理能力が限定的",
                    en ? "Bandwidth, IT infrastructure, training" : "帯域幅、ITインフラ、研修",
                    en ? "JMA SATAID training, KMA support" : "JMA SATAID研修、KMA支援",
                  ],
                ] as string[][]).map(([type, status, challenge, initiative], i) => (
                  <tr key={i} className={i % 2 !== 0 ? "bg-accent-light/50" : ""}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground whitespace-nowrap">{type}</td>
                    <td className="border border-border px-3 py-2 text-muted">{status}</td>
                    <td className="border border-border px-3 py-2 text-muted">{challenge}</td>
                    <td className="border border-border px-3 py-2 text-muted">{initiative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Climate Data Management: CliDE" : "気候データ管理：CliDE"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                The <strong className="text-foreground">CliDE (Climate Data for the Environment)</strong>{" "}
                database, developed by BoM Australia under COSPPac, is the primary Climate Data Management
                System (CDMS) deployed across Pacific Island NMHSs. CliDE provides a standardised platform
                for digitising historical climate records, quality-controlling observational data, and
                generating climate products. PIMS promotes CliDE deployment in all Pacific NMHSs, alongside
                data rescue initiatives to digitise paper-based historical records that are deteriorating
                in tropical conditions. The WMO CLIMsoft system is also being piloted as an alternative
                in some countries.
              </>
            ) : (
              <>
                BoMオーストラリアがCOSPPacの下で開発した
                <strong className="text-foreground">CliDE（環境のための気候データ）</strong>データベースは、
                太平洋島嶼国NMHS全体に展開されている主要な気候データ管理システム（CDMS）です。
                CliDEは歴史的気候記録のデジタル化、観測データの品質管理、気候プロダクトの生成のための
                標準化されたプラットフォームを提供します。PIMSはすべての太平洋NMHSへのCliDE展開を推進するとともに、
                熱帯の環境下で劣化している紙ベースの歴史的記録をデジタル化するデータレスキューイニシアティブも推進しています。
                WMO CLIMsoftシステムも一部の国で代替としてパイロット中です。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "SOFF: Sustainable Observation Financing" : "SOFF：持続可能な観測資金"}
          </h3>
          <p className="text-muted">
            {en
              ? "The Systematic Observations Financing Facility (SOFF), launched at COP26 in 2021, is specifically designed to help SIDS and LDCs achieve and sustain GBON compliance. For Pacific Island nations, SOFF represents a potential paradigm shift: unlike traditional project-based funding that covers equipment procurement but not long-term operations, SOFF provides sustained financing for the operational and maintenance costs that have historically been the weak link in observation network sustainability. SOFF operates through three phases: readiness (gap assessment and planning), investment (procurement and installation), and compliance (sustained operations)."
              : "2021年のCOP26で発足した系統的観測資金供与ファシリティ（SOFF）は、SIDSとLDCがGBON遵守を達成・維持することを支援するために特別に設計されています。太平洋島嶼国にとって、SOFFは潜在的なパラダイムシフトを表しています：機器調達はカバーするが長期運用はカバーしない従来のプロジェクトベースの資金とは異なり、SOFFは観測ネットワークの持続可能性において歴史的に弱点であった運用・保守コストの持続的資金を提供します。SOFFは準備（ギャップ評価と計画）、投資（調達と設置）、遵守（持続的運用）の3フェーズで運営されています。"}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Ocean Observations" : "海洋観測"}
          </h3>
          <p className="text-muted">
            {en
              ? "Ocean observations are critical for Pacific Island nations, given their vast Exclusive Economic Zones (EEZs) and dependence on marine resources. The SEAFRAME (Sea Level Fine Resolution Acoustic Measuring Equipment) tide gauge network, maintained by BoM under COSPPac, provides high-quality sea level data in 12 Pacific Island countries. Argo floats contribute temperature and salinity profiles essential for ENSO monitoring and seasonal prediction. Wave buoys, though sparse, provide critical data for marine forecasting and coastal hazard assessment."
              : "海洋観測は、広大な排他的経済水域（EEZ）と海洋資源への依存を考慮すると、太平洋島嶼国にとって極めて重要です。BoMがCOSPPacの下で維持するSEAFRAME（海面水準高精度音響計測装置）潮位計ネットワークは、12の太平洋島嶼国で高品質な海面水準データを提供しています。ArgoフロートはENSOモニタリングと季節予測に不可欠な水温・塩分プロファイルを提供しています。波浪ブイは希薄ですが、海洋予報と沿岸ハザード評価のための重要なデータを提供しています。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 6. Priority 3: Service Delivery ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "6. Priority 3: Improved Service Delivery" : "6. 戦略的優先事項3：サービス提供の改善"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                Service delivery is the ultimate purpose of Pacific NMHSs &mdash; translating observations,
                data, and scientific understanding into <strong className="text-foreground">actionable
                information products</strong> that protect lives, support livelihoods, and enable
                economic development. PIMS identifies multiple service domains requiring attention.
              </>
            ) : (
              <>
                サービス提供は太平洋NMHSの究極の目的です &mdash; 観測、データ、科学的理解を
                <strong className="text-foreground">実行可能な情報プロダクト</strong>に変換し、
                生命を守り、生計を支え、経済開発を可能にすることです。
                PIMSは注意を要する複数のサービス領域を特定しています。
              </>
            )}
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Weather Services" : "気象サービス"}
              </p>
              <p className="text-muted">
                {en
                  ? "Public forecasts, severe weather warnings (tropical cyclone, heavy rain, high seas, storm surge), and aviation meteorological services (ICAO-compliant TAF, METAR, SIGMET, AIRMET). Aviation meteorology is a critical revenue source for several Pacific NMHSs through cost-recovery agreements with airlines and civil aviation authorities."
                  : "公共予報、悪天候警報（熱帯低気圧、大雨、高波、高潮）、および航空気象サービス（ICAO準拠のTAF、METAR、SIGMET、AIRMET）。航空気象は、航空会社や民間航空当局とのコストリカバリー協定を通じて、複数の太平洋NMHSにとって重要な収入源です。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Climate Services" : "気候サービス"}
              </p>
              <p className="text-muted">
                {en
                  ? "Seasonal outlooks (via PICOF and SCOPIC), climate projections, and sector-specific climate information products. The Global Framework for Climate Services (GFCS) provides the overarching framework, with Pacific National Climate Outlook Forums (NaCOFs) held in several countries to co-produce seasonal forecasts with user sectors including agriculture, water resources, health, fisheries, and disaster management."
                  : "季節見通し（PICOFとSCOPICを通じて）、気候予測、およびセクター別気候情報プロダクト。全球気候サービス枠組み（GFCS）が包括的な枠組みを提供し、複数の国で太平洋国家気候見通しフォーラム（NaCOF）が開催され、農業、水資源、保健、漁業、災害管理を含むユーザーセクターと共同で季節予報が作成されています。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Hydrological and Water Services" : "水文・水資源サービス"}
              </p>
              <p className="text-muted">
                {en
                  ? "Flood monitoring, water resources assessment, and drought early warning. Most Pacific Island NMHSs have limited hydrological capacity; hydrological services are often provided by separate water authorities with poor coordination with meteorological services. PIMS promotes integrated meteorological-hydrological service delivery."
                  : "洪水監視、水資源評価、および干ばつ早期警報。太平洋島嶼国NMHSのほとんどは水文能力が限られており、水文サービスは気象サービスとの調整が不十分な別の水道当局が提供することが多いです。PIMSは気象・水文統合サービス提供を推進しています。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Ocean and Marine Services" : "海洋サービス"}
              </p>
              <p className="text-muted">
                {en
                  ? "Tide predictions, sea level monitoring, ocean temperature and current information, and marine weather forecasts. These services are essential for fisheries (the backbone of many Pacific economies), maritime transport, and coastal community safety."
                  : "潮汐予測、海面水準監視、海水温・海流情報、および海洋気象予報。これらのサービスは漁業（多くの太平洋経済の基盤）、海上輸送、および沿岸コミュニティの安全に不可欠です。"}
              </p>
            </div>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Sector-Specific Applications" : "セクター別応用"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Sector" : "セクター"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Products / Services" : "プロダクト・サービス"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Relevance to Pacific" : "太平洋への関連性"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {([
                  [
                    en ? "Agriculture" : "農業",
                    en ? "Crop calendars, drought monitoring, rainfall onset forecasts" : "作付け暦、干ばつ監視、降雨開始予報",
                    en ? "Food security in subsistence farming communities" : "自給農業コミュニティの食料安全保障",
                  ],
                  [
                    en ? "Fisheries" : "漁業",
                    en ? "SST maps, ocean current charts, seasonal tuna forecasts" : "SSTマップ、海流図、マグロの季節予報",
                    en ? "Tuna fisheries are primary GDP contributor for several nations" : "マグロ漁業は複数国のGDPの主要貢献源",
                  ],
                  [
                    en ? "Tourism" : "観光",
                    en ? "Coastal weather forecasts, marine conditions, UV index" : "沿岸気象予報、海流状況、UV指数",
                    en ? "Tourism is top earner for Fiji, Samoa, Cook Islands, Vanuatu" : "観光はフィジー・サモア・クック諸島・バヌアツの最大収入源",
                  ],
                  [
                    en ? "Health" : "保健",
                    en ? "Heat alerts, dengue risk forecasts, water quality warnings" : "熱中症警報、デング熱リスク予報、水質警報",
                    en ? "Climate-sensitive disease risk increasing with warming" : "温暖化に伴い気候感受性疾患リスクが増加",
                  ],
                  [
                    en ? "Energy" : "エネルギー",
                    en ? "Solar/wind resource assessment, renewable energy forecasting" : "太陽光・風力資源評価、再エネ予報",
                    en ? "Renewable energy transition critical for energy security" : "エネルギー安全保障に再エネ転換が重要",
                  ],
                ] as string[][]).map(([sector, products, relevance], i) => (
                  <tr key={i} className={i % 2 !== 0 ? "bg-accent-light/50" : ""}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground whitespace-nowrap">{sector}</td>
                    <td className="border border-border px-3 py-2 text-muted">{products}</td>
                    <td className="border border-border px-3 py-2 text-muted">{relevance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Impact-Based Forecasting and CAP" : "インパクトベース予報とCAP"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                PIMS promotes the transition from <strong className="text-foreground">hazard-based to
                impact-based forecasting (IBF)</strong>, aligning with WMO strategic direction. IBF
                communicates expected impacts rather than just meteorological parameters &mdash;
                telling communities &ldquo;expect flooding of low-lying roads and damage to
                structures&rdquo; rather than &ldquo;100 mm of rainfall expected.&rdquo; Fiji
                and Vanuatu have been pilot countries for IBF in the Pacific. The{" "}
                <strong className="text-foreground">Common Alerting Protocol (CAP)</strong> (ITU-T
                X.1303) is promoted as the standard format for warning messages, enabling automated
                multi-channel dissemination. Several Pacific NMHSs are in various stages of CAP
                adoption, with WMO and CREWS providing technical support.
              </>
            ) : (
              <>
                PIMSは<strong className="text-foreground">ハザードベースからインパクトベース予報（IBF）</strong>への
                移行を推進し、WMOの戦略的方向と整合しています。IBFは気象パラメータだけでなく
                予想される影響を伝えます &mdash; 「100mmの降雨が予想される」ではなく
                「低地の道路の浸水と建物への被害が予想される」と伝えます。
                フィジーとバヌアツが太平洋におけるIBFのパイロット国です。
                <strong className="text-foreground">共通警報プロトコル（CAP）</strong>（ITU-T X.1303）は
                警報メッセージの標準フォーマットとして推進され、自動化されたマルチチャネル配信を可能にします。
                複数の太平洋NMHSがCAP採用の様々な段階にあり、WMOとCREWSが技術支援を提供しています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 7. Priority 4: Partnerships and Resources ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "7. Priority 4: Partnerships and Resource Mobilization" : "7. 戦略的優先事項4：パートナーシップと資金動員"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                Given the limited domestic resources available to most Pacific Island nations,{" "}
                <strong className="text-foreground">international partnerships and external funding</strong>{" "}
                are essential for implementing PIMS. This priority focuses on strengthening coordination
                among development partners, improving access to climate finance mechanisms, and
                sustaining the PMDP coordination framework.
              </>
            ) : (
              <>
                ほとんどの太平洋島嶼国の国内リソースが限られていることを考えると、
                <strong className="text-foreground">国際パートナーシップと外部資金</strong>は
                PIMS実施に不可欠です。この優先事項は、開発パートナー間の調整強化、
                気候ファイナンスメカニズムへのアクセス改善、PMDP調整枠組みの維持に焦点を当てています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Key Partners and Contributions" : "主要パートナーと貢献"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Partner" : "パートナー"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Focus Areas" : "重点分野"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Contributions" : "主要な貢献"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {([
                  [
                    "WMO",
                    en ? "Standards, capacity building, SWFDP" : "基準、能力構築、SWFDP",
                    en ? "Technical standards, GBON/WIGOS, training, cascading forecast framework" : "技術基準、GBON/WIGOS、研修、カスケード予報枠組み",
                  ],
                  [
                    "SPREP",
                    en ? "PMC secretariat, regional coordination" : "PMC事務局、地域調整",
                    en ? "PMDP hosting, policy advocacy, project coordination" : "PMDPホスティング、政策提言、プロジェクト調整",
                  ],
                  [
                    en ? "BoM (Australia)" : "BoM（豪）",
                    en ? "Climate services, training, observations" : "気候サービス、研修、観測",
                    en ? "COSPPac, CliDE, SEAFRAME, RTC Melbourne, secondments" : "COSPPac、CliDE、SEAFRAME、RTCメルボルン、人材派遣",
                  ],
                  [
                    en ? "NIWA (NZ)" : "NIWA（NZ）",
                    en ? "Climate science, Island Climate Update" : "気候科学、アイランド・クライメート・アップデート",
                    en ? "Seasonal forecasting, Pacific climate research, ENSO monitoring" : "季節予報、太平洋気候研究、ENSOモニタリング",
                  ],
                  [
                    en ? "JICA (Japan)" : "JICA（日本）",
                    en ? "Technical cooperation, equipment" : "技術協力、機器提供",
                    en ? "AWS installation, hydrological monitoring, expert dispatch, training in Japan" : "AWS設置、水文モニタリング、専門家派遣、本邦研修",
                  ],
                  [
                    en ? "KMA (Korea)" : "KMA（韓国）",
                    en ? "Training, satellite, forecasting" : "研修、衛星、予報",
                    en ? "GEO-KOMPSAT training, fellowship programs, NWP support" : "GEO-KOMPSAT研修、フェローシップ、NWP支援",
                  ],
                  [
                    en ? "Finland" : "フィンランド",
                    en ? "Finnish-Pacific Partnership" : "フィンランド太平洋パートナーシップ",
                    en ? "Institutional development, QMS, observation network support" : "制度開発、QMS、観測ネットワーク支援",
                  ],
                  [
                    "CREWS",
                    en ? "Early warning systems for SIDS" : "SIDS向け早期警報システム",
                    en ? "USD ~5M Pacific SIDS project; AWS, SOPs, training" : "太平洋SIDSプロジェクト約500万米ドル、AWS・SOP・研修",
                  ],
                  [
                    "GCF / GEF",
                    en ? "Climate finance" : "気候ファイナンス",
                    en ? "Large-scale climate adaptation and resilience projects" : "大規模気候適応・レジリエンスプロジェクト",
                  ],
                  [
                    "SPC / GEM",
                    en ? "Applied geoscience, ocean monitoring" : "応用地球科学、海洋監視",
                    en ? "Ocean services, geological hazard assessment, coastal monitoring" : "海洋サービス、地質ハザード評価、沿岸モニタリング",
                  ],
                ] as string[][]).map(([partner, focus, contributions], i) => (
                  <tr key={i} className={i % 2 !== 0 ? "bg-accent-light/50" : ""}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground whitespace-nowrap">{partner}</td>
                    <td className="border border-border px-3 py-2 text-muted">{focus}</td>
                    <td className="border border-border px-3 py-2 text-muted">{contributions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Resource Mobilization Challenges" : "資金動員の課題"}
          </h3>
          <p className="text-muted">
            {en
              ? "Pacific NMHSs face persistent challenges in accessing climate finance: competing priorities within small government budgets, limited capacity to develop bankable project proposals for GCF/GEF, fragmented donor landscape requiring coordination, and the perennial tension between project-based funding (time-limited, externally driven) and the need for sustained operational funding for core NMHS functions. PIMS advocates for NMHS services to be embedded within broader national climate adaptation and development strategies to secure sustainable funding."
              : "太平洋NMHSは気候ファイナンスへのアクセスにおいて持続的な課題に直面しています：小規模な政府予算内での競合する優先事項、GCF/GEF向けの投資可能なプロジェクト提案書作成能力の限界、調整を要する断片化したドナー環境、そしてプロジェクトベースの資金（期限付き、外部主導）とNMHSのコア機能のための持続的運用資金の必要性との恒常的な緊張です。PIMSはNMHSサービスをより広い国家気候適応・開発戦略に組み込み、持続可能な資金を確保することを提唱しています。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 8. Priority 5: Research and Innovation ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "8. Priority 5: Research, Innovation and Technology Transfer" : "8. 戦略的優先事項5：研究・イノベーション・技術移転"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                While Pacific Island NMHSs are not primarily research organisations, PIMS recognises the
                importance of <strong className="text-foreground">applied research, innovation, and
                technology transfer</strong> in improving meteorological services. This priority
                leverages the research capacity of partner organisations (BoM, NIWA, CSIRO, university
                partners) while ensuring that research outcomes are translated into operational
                improvements.
              </>
            ) : (
              <>
                太平洋島嶼国NMHSは主に研究機関ではありませんが、PIMSは気象サービスの改善における
                <strong className="text-foreground">応用研究、イノベーション、技術移転</strong>の重要性を認識しています。
                この優先事項はパートナー機関（BoM、NIWA、CSIRO、大学パートナー）の研究能力を活用しつつ、
                研究成果が運用上の改善に繋がることを確保します。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Pacific Climate Science Programs" : "太平洋気候科学プログラム"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                The legacy of the <strong className="text-foreground">Pacific Climate Change Science
                Program (PCCSP)</strong> and its successor, the <strong className="text-foreground">Pacific-Australia
                Climate Change Science and Adaptation Planning (PACCSAP)</strong> program, provides a
                foundation for climate research in the region. These Australian Government-funded programs
                produced country-specific climate change projections, trained Pacific Island climate
                scientists, and established research partnerships. The{" "}
                <strong className="text-foreground">Next Generation Climate Projections for the Western
                Tropical Pacific</strong> initiative continues this work, providing higher-resolution
                regional climate projections based on CMIP6 models.
              </>
            ) : (
              <>
                <strong className="text-foreground">太平洋気候変動科学プログラム（PCCSP）</strong>と
                その後継である<strong className="text-foreground">太平洋・オーストラリア気候変動科学・適応計画（PACCSAP）</strong>プログラムの
                遺産が、地域の気候研究の基盤を提供しています。これらのオーストラリア政府が資金提供したプログラムは、
                国別の気候変化予測を作成し、太平洋島嶼の気候科学者を育成し、研究パートナーシップを確立しました。
                <strong className="text-foreground">次世代西部熱帯太平洋気候予測</strong>イニシアティブがこの作業を継続し、
                CMIP6モデルに基づくより高解像度の地域気候予測を提供しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "AI/ML and Emerging Technologies" : "AI/MLと新技術"}
          </h3>
          <p className="text-muted">
            {en
              ? "AI/ML applications hold particular promise for Pacific NMHSs because they could enable high-quality forecasting without the traditional HPC infrastructure that most Pacific nations lack. Foundation weather models (Pangu-Weather, GraphCast, GenCast) can generate global forecasts rapidly on modest hardware. For the Pacific, potential applications include: post-processing of NWP ensemble output for localised forecasts, satellite-based nowcasting of convective rainfall, tropical cyclone track and intensity prediction, and automated quality control of observation data. However, the data-sparse Pacific environment presents challenges for model validation and bias correction."
              : "AI/ML応用は太平洋NMHSにとって特に有望です。ほとんどの太平洋諸国が欠いている従来のHPCインフラなしで高品質な予報を可能にする可能性があるからです。基盤気象モデル（Pangu-Weather、GraphCast、GenCast）は控えめなハードウェアで全球予報を迅速に生成できます。太平洋での潜在的応用には、NWPアンサンブル出力の後処理による地域予報、衛星ベースの対流性降雨ナウキャスティング、熱帯低気圧の経路・強度予測、観測データの自動品質管理が含まれます。ただし、データが希薄な太平洋環境はモデルの検証とバイアス補正に課題を呈しています。"}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Traditional and Indigenous Knowledge" : "伝統的・先住民知識"}
          </h3>
          <p className="text-muted">
            {en
              ? "PIMS recognises the value of traditional and indigenous knowledge systems that Pacific Island communities have used for centuries to predict weather and seasonal patterns. Integration of traditional knowledge with modern forecasting — for example, indigenous indicators of cyclone risk based on animal behaviour, plant phenology, or ocean conditions — is promoted as a way to enhance community engagement and trust in meteorological services. Several pilot programs have documented traditional weather knowledge in Fiji, Vanuatu, and Solomon Islands."
              : "PIMSは、太平洋島嶼コミュニティが何世紀にもわたり天候や季節パターンの予測に用いてきた伝統的・先住民知識システムの価値を認識しています。伝統的知識と現代予報の統合—例えば、動物の行動、植物のフェノロジー、海洋状況に基づくサイクロンリスクの先住民指標—は、コミュニティの関与と気象サービスへの信頼を高める方法として推進されています。フィジー、バヌアツ、ソロモン諸島で伝統的な気象知識を記録した複数のパイロットプログラムが実施されています。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 9. Role of the PMC ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "9. Role of the Pacific Meteorological Council (PMC)" : "9. 太平洋気象評議会（PMC）の役割"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The <strong className="text-foreground">Pacific Meteorological Council (PMC)</strong>{" "}
                is the principal intergovernmental body governing meteorological cooperation in the
                Pacific Islands region. Established in 2006, the PMC provides a forum for Pacific
                Island NMHS directors and their governments to set priorities, review progress, and
                coordinate with development partners. The PMC meets approximately every two years
                and serves as the WMO Regional Association V substructure specifically for Pacific
                Island countries.
              </>
            ) : (
              <>
                <strong className="text-foreground">太平洋気象評議会（PMC）</strong>は、
                太平洋島嶼地域における気象協力を統括する主要な政府間機関です。
                2006年に設立されたPMCは、太平洋島嶼国NMHSの長官とその政府が優先事項を設定し、
                進捗をレビューし、開発パートナーと調整するためのフォーラムを提供します。
                PMCは約2年ごとに会合し、太平洋島嶼国に特化したWMO第5地域協会のサブストラクチャーとして機能します。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "PMC Panels" : "PMCパネル"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Panel" : "パネル"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Focus" : "重点分野"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Activities" : "主要活動"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {([
                  [
                    "PICSP",
                    en ? "Pacific Islands Climate Services Panel" : "太平洋島嶼気候サービスパネル",
                    en ? "PICOF coordination, seasonal outlooks, GFCS implementation" : "PICOF調整、季節見通し、GFCS実装",
                  ],
                  [
                    "PIMOSP",
                    en ? "Pacific Islands Marine and Ocean Services Panel" : "太平洋島嶼海洋サービスパネル",
                    en ? "Sea level monitoring, ocean services, marine forecasting" : "海面水準監視、海洋サービス、海洋予報",
                  ],
                  [
                    "PIAWSP",
                    en ? "Pacific Islands Aviation Weather Services Panel" : "太平洋島嶼航空気象サービスパネル",
                    en ? "ICAO compliance, QMS, aviation forecast products" : "ICAO準拠、QMS、航空予報プロダクト",
                  ],
                  [
                    "PIETRP",
                    en ? "Pacific Islands Education, Training and Research Panel" : "太平洋島嶼教育・研修・研究パネル",
                    en ? "BIP-M competencies, training coordination, research priorities" : "BIP-M能力基準、研修調整、研究優先事項",
                  ],
                ] as string[][]).map(([panel, focus, activities], i) => (
                  <tr key={i} className={i % 2 !== 0 ? "bg-accent-light/50" : ""}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{panel}</td>
                    <td className="border border-border px-3 py-2 text-muted">{focus}</td>
                    <td className="border border-border px-3 py-2 text-muted">{activities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "PMDP Coordination Role" : "PMDPの調整役割"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                The <strong className="text-foreground">Pacific Meteorological Desk Partnership
                (PMDP)</strong> functions as the operational arm supporting the PMC. Hosted by
                SPREP and co-supported by WMO, BoM, and NIWA, the PMDP coordinates donor
                activities, tracks PIMS implementation progress, facilitates communication between
                NMHSs and development partners, and provides secretariat support for PMC sessions
                and panel meetings. The PMDP has been instrumental in reducing duplication and
                improving coherence among the numerous projects and programmes targeting Pacific
                meteorological capacity.
              </>
            ) : (
              <>
                <strong className="text-foreground">太平洋気象デスクパートナーシップ（PMDP）</strong>は
                PMCを支援する実動部隊として機能しています。SPREPがホストし、
                WMO、BoM、NIWAが共同支援するPMDPは、ドナー活動の調整、PIMS実施進捗の追跡、
                NMHSと開発パートナー間のコミュニケーション促進、およびPMC会合とパネル会議の
                事務局支援を行っています。PMDPは太平洋気象能力を対象とする多数のプロジェクト・
                プログラム間の重複削減と一貫性向上に大きく貢献しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "PMC Advocacy Role" : "PMCの提唱役割"}
          </h3>
          <p className="text-muted">
            {en
              ? "Beyond technical coordination, the PMC plays a critical advocacy role, representing Pacific Island meteorological interests at the WMO Congress, regional forums (Pacific Islands Forum, SPREP meetings), and international climate negotiations. The PMC has been effective in articulating the unique challenges of SIDS NMHSs and mobilising international attention and resources. The PMC’s relationship with WMO RA V ensures that Pacific Island priorities are reflected in the broader WMO strategic planning process."
              : "技術的調整を超えて、PMCは重要な提唱役割を果たし、WMO総会、地域フォーラム（太平洋島嶼フォーラム、SPREP会合）、および国際気候交渉において太平洋島嶼の気象に関する利益を代表しています。PMCはSIDSのNMHSが直面する独自の課題を明確にし、国際的な注目と資金を動員する上で効果的です。PMCとWMO RA Vの関係は、太平洋島嶼の優先事項がより広いWMOの戦略計画プロセスに反映されることを保証しています。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 10. Implementation Status and Mid-Term Review ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "10. Implementation Status and Mid-Term Review" : "10. 実施状況と中間評価"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                At the mid-point of the PIMS 2017&ndash;2026 period, a mixed picture emerges. While
                significant progress has been achieved in some areas, <strong className="text-foreground">critical
                gaps persist</strong> across all five strategic priorities.
              </>
            ) : (
              <>
                PIMS 2017&ndash;2026の中間地点で、混在した状況が浮かび上がります。一部の分野では大きな進捗がありましたが、
                5つの戦略的優先事項すべてにおいて<strong className="text-foreground">重大なギャップが残っています</strong>。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Achievements" : "成果"}
          </h3>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">{en ? "Enhanced regional coordination" : "地域調整の強化"}</strong>
              {en
                ? " — PMC has become a well-established forum; PMDP coordination has reduced duplication among partners."
                : " — PMCは確立されたフォーラムとなり、PMDP調整によりパートナー間の重複が削減されました。"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "AWS deployment" : "AWS展開"}</strong>
              {en
                ? " — New automatic weather stations installed in Tonga, Samoa, Vanuatu, Solomon Islands, Kiribati, and Cook Islands through CREWS, JICA, and bilateral programs."
                : " — CREWS、JICA、二国間プログラムを通じてトンガ、サモア、バヌアツ、ソロモン諸島、キリバス、クック諸島に新規AWSが設置されました。"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "SWFDP-Pacific operational" : "SWFDP太平洋の運用化"}</strong>
              {en
                ? " — Cascading forecast framework fully operational; Pacific Island forecasters receiving daily severe weather guidance from RSMC Wellington."
                : " — カスケード予報枠組みが完全に運用化、太平洋島嶼の予報官がRSMCウェリントンから毎日の悪天候ガイダンスを受信。"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Climate services frameworks" : "気候サービス枠組み"}</strong>
              {en
                ? " — PICOF established as regular RCOF; National Climate Outlook Forums (NaCOFs) held in several countries; COSPPac tools widely adopted."
                : " — PICOFが定期的RCOFとして確立、複数の国で国家気候見通しフォーラム（NaCOF）開催、COSPPacツールが広く採用。"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Training expanded" : "研修拡充"}</strong>
              {en
                ? " — Over 200 Pacific Island forecasters trained through WMO RTC Melbourne, BoM secondments, and SWFDP workshops."
                : " — WMO RTCメルボルン、BoM派遣、SWFDPワークショップを通じて200名以上の太平洋島嶼予報官を研修。"}
            </li>
          </ul>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Remaining Gaps" : "残されたギャップ"}
          </h3>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">{en ? "Institutional capacity" : "制度的能力"}</strong>
              {en
                ? " — NMHS staffing levels still critically low in many countries; legislative frameworks incomplete; brain drain continues."
                : " — 多くの国でNMHSの人員水準が依然として深刻に低い、法的枠組みが不完全、頭脳流出が続く。"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Observation networks" : "観測ネットワーク"}</strong>
              {en
                ? " — Networks remain sparse; many newly installed AWS non-operational due to maintenance failures; GBON compliance far from achieved."
                : " — ネットワークは希薄なまま、新規設置AWSの多くが保守不備で非稼働、GBON遵守は達成に程遠い。"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Data management" : "データ管理"}</strong>
              {en
                ? " — CliDE deployment incomplete; data rescue proceeding slowly; data sharing with GTS inconsistent."
                : " — CliDE展開が不完全、データレスキューが遅延、GTSとのデータ共有が不安定。"}
            </li>
            <li>
              <strong className="text-foreground">{en ? "Financial sustainability" : "財政的持続可能性"}</strong>
              {en
                ? " — Heavy reliance on project-based funding persists; transition to national budget support not achieved in most countries."
                : " — プロジェクトベースの資金への過度な依存が続く、ほとんどの国で国家予算支援への移行が未達成。"}
            </li>
          </ul>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "COVID-19 Impact" : "COVID-19の影響"}
          </h3>
          <p className="text-muted">
            {en
              ? "The COVID-19 pandemic (2020–2022) significantly impacted PIMS implementation: international travel restrictions halted in-person training programs and technical missions, supply chain disruptions delayed equipment procurement, reduced government revenues constrained NMHS budgets, and border closures prevented maintenance visits by external technicians. While virtual training mitigated some impacts, the hands-on nature of meteorological instrument maintenance and calibration could not be effectively replaced by remote alternatives."
              : "COVID-19パンデミック（2020～2022年）はPIMS実施に大きな影響を与えました：国際渡航制限により対面研修と技術ミッションが停止、サプライチェーンの混乱で機器調達が遅延、政府収入の減少によりNMHS予算が制約、入国制限により外部技術者による保守訪問が不可能に。バーチャル研修は一部の影響を緩和しましたが、気象計器の保守・校正の実技的な性質はリモート代替では効果的に代替できませんでした。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 11. Post-PIMS Outlook ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "11. Post-PIMS 2026 Outlook" : "11. PIMS-2026後の展望"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                With PIMS 2017&ndash;2026 concluding in its final year, discussions on a{" "}
                <strong className="text-foreground">successor strategy</strong> are underway within the
                PMC framework. The post-PIMS landscape will be shaped by several converging developments
                that have emerged since PIMS was first endorsed.
              </>
            ) : (
              <>
                PIMS 2017&ndash;2026が最終年を迎える中、
                <strong className="text-foreground">後継戦略</strong>に関する議論がPMCの枠組みの中で進んでいます。
                PIMS後の景観は、PIMSが最初に承認されて以来に生じた複数の収斂する動きによって形作られます。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Emerging Priorities for the Successor Strategy" : "後継戦略の新たな優先事項"}
          </h3>
          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "EW4All 2027 Alignment" : "EW4All 2027目標との整合"}
              </p>
              <p className="text-muted">
                {en
                  ? "The UN Early Warnings for All (EW4All) initiative, launched in 2022, sets the ambitious target of universal MHEWS coverage by 2027. The successor to PIMS must be explicitly aligned with EW4All targets, particularly in strengthening the four EW4All pillars: disaster risk knowledge, observations and forecasting, warning dissemination, and preparedness to respond."
                  : "2022年に発足した国連「全ての人に早期警報を（EW4All）」イニシアティブは、2027年までに普遍的なMHEWSカバレッジを実現するという野心的な目標を設定しています。PIMSの後継は、特にEW4Allの4つの柱—災害リスク知識、観測・予報、警報伝達、対応への備え—の強化においてEW4All目標と明示的に整合される必要があります。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Digital Transformation" : "デジタルトランスフォーメーション"}
              </p>
              <p className="text-muted">
                {en
                  ? "The rapid growth of mobile connectivity, cloud computing, and AI/ML technologies since 2017 opens transformative possibilities for Pacific NMHSs. A successor strategy must address digital infrastructure, data-as-a-service models, cloud-based NWP processing, and the ethical use of AI in weather prediction."
                  : "2017年以降のモバイル接続、クラウドコンピューティング、AI/ML技術の急速な成長は、太平洋NMHSに変革的な可能性をもたらしています。後継戦略はデジタルインフラ、データ・アズ・ア・サービスモデル、クラウドベースのNWP処理、および気象予測におけるAIの倫理的使用に取り組まなければなりません。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Climate Change Acceleration" : "気候変動の加速"}
              </p>
              <p className="text-muted">
                {en
                  ? "The acceleration of climate change impacts — more intense tropical cyclones, rising sea levels threatening atoll nations, shifting rainfall patterns, marine heatwaves — demands enhanced meteorological services. Pacific NMHS must evolve from providing traditional weather services to delivering climate-resilient development information."
                  : "気候変動の影響の加速—より強力な熱帯低気圧、環礁国を脅かす海面上昇、降雨パターンの変化、海洋熱波—は強化された気象サービスを要求しています。太平洋NMHSは従来の気象サービスの提供から、気候レジリエントな開発情報の提供へと進化しなければなりません。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Pacific Islands Forum 2050 Strategy" : "太平洋島嶼フォーラム2050戦略"}
              </p>
              <p className="text-muted">
                {en
                  ? "The 2050 Strategy for the Blue Pacific Continent, endorsed by Pacific Island Forum leaders, sets the long-term vision for the region’s development. Climate resilience is a core thematic area, and meteorological services are foundational to achieving the Strategy’s goals. The PIMS successor must explicitly connect to the 2050 Strategy framework."
                  : "太平洋島嶼フォーラムの首脳が承認した「青い太平洋大陸」のための2050年戦略は、地域の開発のための長期的ビジョンを設定しています。気候レジリエンスは中核的なテーマ分野であり、気象サービスはこの戦略の目標達成の基盤です。PIMSの後継は2050年戦略の枠組みと明示的に接続する必要があります。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "WMO Unified Data Policy" : "WMO統一データポリシー"}
              </p>
              <p className="text-muted">
                {en
                  ? "The WMO Unified Data Policy (2021) establishes the principle of free and unrestricted exchange of core Earth system data. For Pacific NMHSs, this has implications for data sharing infrastructure, metadata management, and potential revenue impacts on cost-recovery services. The successor strategy must address how Pacific NMHSs implement this policy while protecting legitimate interests."
                  : "WMO統一データポリシー（2021年）は、コア地球システムデータの自由かつ無制限な交換の原則を確立しています。太平洋NMHSにとって、これはデータ共有インフラ、メタデータ管理、およびコストリカバリーサービスへの潜在的な収入影響に関わります。後継戦略は、太平洋NMHSが正当な利益を保護しながらこのポリシーを実施する方法に取り組まなければなりません。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Sustainable Funding Models" : "持続可能な資金モデル"}
              </p>
              <p className="text-muted">
                {en
                  ? "Perhaps the most critical challenge for the successor strategy is moving beyond project-based support toward sustainable NMHS funding. This requires: embedding meteorological services within national budgets, developing cost-recovery mechanisms for aviation and marine services, leveraging climate finance (GCF, GEF, SOFF) for observation infrastructure, and demonstrating the economic value of weather and climate services through socio-economic benefit analyses."
                  : "後継戦略にとって最も重要な課題は、おそらくプロジェクトベースの支援を超えて持続可能なNMHS資金へ移行することです。これには、気象サービスを国家予算に組み込むこと、航空・海洋サービスのコストリカバリーメカニズムの開発、観測インフラのための気候ファイナンス（GCF、GEF、SOFF）の活用、および社会経済的便益分析を通じた気象・気候サービスの経済的価値の実証が必要です。"}
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
              SPREP (2017). Pacific Islands Meteorological Strategy 2017&ndash;2026. Secretariat of the Pacific Regional Environment Programme, Apia, Samoa.
            </li>
            <li>
              SPREP (2012). Pacific Islands Meteorological Strategy 2012&ndash;2021. Secretariat of the Pacific Regional Environment Programme.
            </li>
            <li>
              SPREP (2022). Pacific Meteorological Council: 5th Meeting Report (PMC-5). Secretariat of the Pacific Regional Environment Programme.
            </li>
            <li>
              WMO (2022). Early Warnings for All: The UN Global Early Warning Initiative for the Implementation of Climate Adaptation. WMO Executive Action Plan 2023&ndash;2027.
            </li>
            <li>
              WMO (2021). Resolution 1 (Cg-Ext(2021)) &mdash; WMO Unified Policy for the International Exchange of Earth System Data.
            </li>
            <li>
              WMO (2021). Global Basic Observing Network (GBON) Regulation. WMO-No. 49, Vol. I.
            </li>
            <li>
              BoM (2023). COSPPac: Climate and Oceans Support Program in the Pacific &mdash; Program Review 2013&ndash;2023. Bureau of Meteorology, Australia.
            </li>
            <li>
              CREWS (2021). CREWS Pacific Small Island Developing States Project: Phase 1 Report. Climate Risk and Early Warning Systems Initiative.
            </li>
            <li>
              Pacific Islands Forum Secretariat (2022). 2050 Strategy for the Blue Pacific Continent.
            </li>
            <li>
              WMO (2020). WMO Guidelines on Multi-hazard Impact-based Forecast and Warning Services (WMO-No. 1150).
            </li>
            <li>
              Australian Government &amp; CSIRO (2014). Climate Variability, Extremes and Change in the Western Tropical Pacific: New Science and Updated Country Reports (PACCSAP).
            </li>
            <li>
              WMO (2017). SWFDP Overall Project Plan. World Weather Research Programme, WMO.
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
